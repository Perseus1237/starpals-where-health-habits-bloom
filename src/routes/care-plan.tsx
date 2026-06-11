import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, type ReactNode } from "react";
import {
  ArrowLeft,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  FilePlus2,
  Link2,
  Plus,
  RefreshCw,
  Send,
  ShieldCheck,
  Sparkles,
  UploadCloud,
} from "lucide-react";
import { useStarPals } from "@/lib/starpals/store";

export const Route = createFileRoute("/care-plan")({
  head: () => ({ meta: [{ title: "Care plan builder - StarPals" }] }),
  component: CarePlan,
});

type PlanCategory = "Medication" | "Hydration" | "Breathing" | "Movement" | "Mood";
type PlanSource =
  | "Care team"
  | "FHIR import"
  | "Epic MyChart"
  | "Oracle Health"
  | "AI draft"
  | "Parent preference";
type PlanStatus = "Active" | "Needs review" | "Draft";

interface PlanItem {
  id: string;
  title: string;
  category: PlanCategory;
  cadence: string;
  childCue: string;
  owner: string;
  source: PlanSource;
  stardust: number;
  status: PlanStatus;
  next: string;
}

type ChartSource = Extract<PlanSource, "FHIR import" | "Epic MyChart" | "Oracle Health">;

const CHART_SOURCES: ChartSource[] = ["FHIR import", "Epic MyChart", "Oracle Health"];

const CATEGORY_META: Record<PlanCategory, { icon: string; quest: string; tone: string }> = {
  Medication: {
    icon: "💊",
    quest: "Medicine quest",
    tone: "bg-dawn/20 text-dawn",
  },
  Hydration: {
    icon: "💧",
    quest: "Water quest",
    tone: "bg-calm/20 text-calm",
  },
  Breathing: {
    icon: "🌬️",
    quest: "Calm quest",
    tone: "bg-meadow/20 text-meadow",
  },
  Movement: {
    icon: "🤸",
    quest: "Move quest",
    tone: "bg-heart/20 text-heart",
  },
  Mood: {
    icon: "🌤️",
    quest: "Mood sky",
    tone: "bg-stardust/20 text-stardust",
  },
};

const SEEDED_PLAN: PlanItem[] = [
  {
    id: "controller-medicine",
    title: "Take morning controller medicine",
    category: "Medication",
    cadence: "Every day at 8:00 AM",
    childCue: "Power up Lumi before breakfast.",
    owner: "Care management team",
    source: "FHIR import",
    stardust: 15,
    status: "Active",
    next: "Tomorrow, 8:00 AM",
  },
  {
    id: "water-check",
    title: "Two small water breaks",
    category: "Hydration",
    cadence: "After school and before bed",
    childCue: "Fill the moon pool together.",
    owner: "Parent",
    source: "Care team",
    stardust: 5,
    status: "Active",
    next: "Today, 4:30 PM",
  },
  {
    id: "calm-breath",
    title: "Use calm breathing before symptoms feel big",
    category: "Breathing",
    cadence: "As needed, max 3 guided rounds",
    childCue: "Call a meadow breeze.",
    owner: "Child with parent support",
    source: "Care team",
    stardust: 8,
    status: "Active",
    next: "Available now",
  },
  {
    id: "mood-note",
    title: "Quick mood and energy check",
    category: "Mood",
    cadence: "Sunday evening",
    childCue: "Paint the sky for next week.",
    owner: "Parent",
    source: "Parent preference",
    stardust: 5,
    status: "Draft",
    next: "Sunday, 6:00 PM",
  },
];

const EMR_IMPORT: PlanItem[] = [
  {
    id: "rescue-plan",
    title: "Review rescue inhaler instructions",
    category: "Medication",
    cadence: "When yellow-zone symptoms appear",
    childCue: "Ask a grown-up for the bright-star plan.",
    owner: "Parent and care team",
    source: "Epic MyChart",
    stardust: 10,
    status: "Needs review",
    next: "If symptoms change",
  },
  {
    id: "activity-pacing",
    title: "Pace movement during flare days",
    category: "Movement",
    cadence: "On days marked low energy",
    childCue: "Choose a tiny stretch instead of a big quest.",
    owner: "Child with parent support",
    source: "Oracle Health",
    stardust: 6,
    status: "Needs review",
    next: "Next low-energy check-in",
  },
];

const AI_DRAFTS: PlanItem[] = [
  {
    id: "ai-spacer-practice",
    title: "Practice spacer technique after controller medicine",
    category: "Medication",
    cadence: "Twice weekly after morning medicine",
    childCue: "Help Lumi check the tiny breathing tool.",
    owner: "AI draft for parent and care team review",
    source: "AI draft",
    stardust: 8,
    status: "Needs review",
    next: "After parent approval",
  },
  {
    id: "ai-sleep-wind-down",
    title: "Gentle sleep wind-down on school nights",
    category: "Mood",
    cadence: "Sunday through Thursday at bedtime",
    childCue: "Dim the stars and choose one calm story.",
    owner: "AI wellness suggestion",
    source: "AI draft",
    stardust: 6,
    status: "Needs review",
    next: "Tonight, 7:45 PM",
  },
  {
    id: "ai-pollen-swap",
    title: "Indoor movement swap on high-pollen days",
    category: "Movement",
    cadence: "When allergy or cough notes trend up",
    childCue: "Pick a cozy stretch quest inside.",
    owner: "AI wellness suggestion",
    source: "AI draft",
    stardust: 6,
    status: "Needs review",
    next: "Next flagged symptom day",
  },
];

const CHART_SIGNALS = [
  {
    system: "Epic MyChart",
    signal: "Medication list, asthma action plan, after-visit instructions",
    output: "Matches controller and rescue-plan steps to friendly quests.",
  },
  {
    system: "Oracle Health",
    signal: "Problems, visit notes, care gaps, vitals trend",
    output: "Finds safe routines and routes them to review first.",
  },
  {
    system: "Parent context",
    signal: "Bedtime rhythm, school-day patterns, child preferences",
    output: "Suggests wellness add-ons that fit the family routine.",
  },
];

const AI_AUTOMATIONS = [
  "Normalize Epic and Oracle records into a FHIR care-plan workspace.",
  "Extract goals, medications, review dates, and yellow-zone instructions.",
  "Rewrite clinical language into short child-safe quests.",
  "Flag wellness add-ons for parent and care-team approval.",
];

const INTEGRATIONS = [
  {
    name: "Epic MyChart",
    status: "Demo connected",
    detail: "Pulls patient-facing chart data through a SMART on FHIR flow.",
  },
  {
    name: "Oracle Health",
    status: "Demo connected",
    detail: "Brings visit instructions, problems, and care gaps into the same review queue.",
  },
  {
    name: "FHIR R4 CarePlan",
    status: "Sandbox connected",
    detail: "Imports goals, activities, medications, and review dates.",
  },
  {
    name: "SMART launch",
    status: "Ready for auth",
    detail: "Lets a care manager open StarPals from the EMR patient chart.",
  },
  {
    name: "Parent review queue",
    status: "Demo live",
    detail: "Routes new care tasks to a parent before they reach the child view.",
  },
  {
    name: "AI child-safe mapping",
    status: "Active",
    detail: "Turns chart language into short quests, then holds every draft for approval.",
  },
];

function CarePlan() {
  const { pet, childName } = useStarPals();
  const [planName, setPlanName] = useState("Maya's summer stability plan");
  const [items, setItems] = useState<PlanItem[]>(SEEDED_PLAN);
  const [newTitle, setNewTitle] = useState("");
  const [newCadence, setNewCadence] = useState("Every weekday after school");
  const [newCategory, setNewCategory] = useState<PlanCategory>("Movement");
  const [imported, setImported] = useState(false);
  const [aiGenerated, setAiGenerated] = useState(false);
  const [sent, setSent] = useState(false);

  const child = childName || "Maya";
  const petName = pet?.name || "Lumi";

  const summary = useMemo(() => {
    const active = items.filter((item) => item.status === "Active").length;
    const review = items.filter((item) => item.status === "Needs review").length;
    const chart = items.filter((item) => CHART_SOURCES.includes(item.source as ChartSource)).length;
    const ai = items.filter((item) => item.source === "AI draft").length;

    return { active, review, chart, ai };
  }, [items]);

  function addPlanItem() {
    const trimmedTitle = newTitle.trim();
    if (!trimmedTitle) return;

    const meta = CATEGORY_META[newCategory];
    setItems((current) => [
      ...current,
      {
        id: `custom-${Date.now()}`,
        title: trimmedTitle,
        category: newCategory,
        cadence: newCadence.trim() || "Care team cadence",
        childCue: `${meta.quest}: ${trimmedTitle}`,
        owner: "Care management team",
        source: "Care team",
        stardust: newCategory === "Medication" ? 15 : 8,
        status: "Draft",
        next: "After parent review",
      },
    ]);
    setNewTitle("");
  }

  function importFromEmr() {
    if (imported) return;
    setItems((current) => [...current, ...EMR_IMPORT]);
    setImported(true);
    setSent(false);
  }

  function generateAiDrafts() {
    if (aiGenerated) return;
    setItems((current) => [...current, ...AI_DRAFTS]);
    setAiGenerated(true);
    setSent(false);
  }

  function sendForReview() {
    setItems((current) =>
      current.map((item) => (item.status === "Draft" ? { ...item, status: "Needs review" } : item)),
    );
    setSent(true);
  }

  return (
    <main className="relative min-h-screen px-4 py-6">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-meadow">
              Care management team
            </div>
            <h1 className="font-display text-3xl leading-tight sm:text-4xl">
              Dynamic care plan builder
            </h1>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Build a simple care plan for {child}, translate it into StarPals quests, and preview
              EMR integration points before anything reaches the child experience.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full glass-card px-3 py-2 text-xs font-bold hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Opening
            </Link>
            <Link
              to="/parent"
              className="inline-flex items-center gap-2 rounded-full glass-card px-3 py-2 text-xs font-bold hover:bg-white/10"
            >
              <ShieldCheck className="h-4 w-4" aria-hidden />
              Parent view
            </Link>
          </div>
        </header>

        <section className="mb-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Metric
            icon={<ClipboardCheck className="h-5 w-5" />}
            label="Active plan steps"
            value={summary.active}
          />
          <Metric
            icon={<RefreshCw className="h-5 w-5" />}
            label="Review queue"
            value={summary.review}
          />
          <Metric icon={<Link2 className="h-5 w-5" />} label="Chart-linked" value={summary.chart} />
          <Metric icon={<Sparkles className="h-5 w-5" />} label="AI drafts" value={summary.ai} />
        </section>

        <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">
          <section className="space-y-5">
            <div className="glass-card rounded-3xl p-5">
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-stardust">
                    Plan workspace
                  </div>
                  <h2 className="font-display text-2xl">Happy-path demo plan</h2>
                </div>
                <button
                  onClick={sendForReview}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-stardust px-4 py-2 text-sm font-bold text-primary-foreground transition hover:scale-[1.02]"
                >
                  <Send className="h-4 w-4" aria-hidden />
                  Send to parent review
                </button>
              </div>

              <label className="mb-4 block">
                <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Care plan name
                </span>
                <input
                  value={planName}
                  onChange={(event) => setPlanName(event.target.value)}
                  className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 font-display text-lg focus:outline-none focus:ring-2 focus:ring-stardust"
                />
              </label>

              <div className="space-y-3">
                {items.map((item) => (
                  <PlanRow key={item.id} item={item} petName={petName} />
                ))}
              </div>

              {sent && (
                <div className="mt-4 flex items-center gap-2 rounded-2xl border border-meadow/30 bg-meadow/10 px-4 py-3 text-sm text-meadow">
                  <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden />
                  Draft steps are now staged for parent review in this demo.
                </div>
              )}
            </div>

            <div className="glass-card rounded-3xl p-5">
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-stardust/20 text-stardust">
                    <Sparkles className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-stardust">
                      AI care-plan copilot
                    </div>
                    <h2 className="font-display text-xl">Chart-to-quest draft</h2>
                    <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                      Epic MyChart and Oracle Health signals become parent-reviewable plan items,
                      with wellness ideas kept separate from active medical steps.
                    </p>
                  </div>
                </div>
                <button
                  onClick={generateAiDrafts}
                  disabled={aiGenerated}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-stardust px-4 py-2 text-sm font-bold text-primary-foreground transition hover:scale-[1.02] disabled:pointer-events-none disabled:opacity-50"
                >
                  <Sparkles className="h-4 w-4" aria-hidden />
                  {aiGenerated ? "AI draft ready" : "Generate AI draft"}
                </button>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {CHART_SIGNALS.map((signal) => (
                  <div
                    key={signal.system}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-3"
                  >
                    <div className="text-xs font-bold uppercase tracking-wider text-calm">
                      {signal.system}
                    </div>
                    <div className="mt-1 text-sm font-bold leading-snug">{signal.signal}</div>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                      {signal.output}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                {AI_AUTOMATIONS.map((automation, index) => (
                  <div
                    key={automation}
                    className="flex gap-3 rounded-2xl bg-white/[0.04] p-3 text-sm"
                  >
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-stardust/15 text-xs font-bold text-stardust">
                      {index + 1}
                    </div>
                    <div className="pt-0.5 text-muted-foreground">{automation}</div>
                  </div>
                ))}
              </div>

              {aiGenerated && (
                <div className="mt-4 flex items-center gap-2 rounded-2xl border border-stardust/30 bg-stardust/10 px-4 py-3 text-sm text-stardust">
                  <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden />
                  AI drafted three review-only items, including wellness suggestions for sleep and
                  high-pollen days.
                </div>
              )}
            </div>

            <div className="glass-card rounded-3xl p-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-dawn/20 text-dawn">
                  <FilePlus2 className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-dawn">
                    Add care plan step
                  </div>
                  <h2 className="font-display text-xl">Create a child-safe quest</h2>
                </div>
              </div>

              <div className="grid gap-3 md:grid-cols-[1fr_0.8fr_0.8fr]">
                <label>
                  <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Clinical or family instruction
                  </span>
                  <input
                    value={newTitle}
                    onChange={(event) => setNewTitle(event.target.value)}
                    placeholder="Practice spacer technique"
                    className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-stardust"
                  />
                </label>
                <label>
                  <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Cadence
                  </span>
                  <input
                    value={newCadence}
                    onChange={(event) => setNewCadence(event.target.value)}
                    className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-stardust"
                  />
                </label>
                <label>
                  <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-muted-foreground">
                    Quest type
                  </span>
                  <select
                    value={newCategory}
                    onChange={(event) => setNewCategory(event.target.value as PlanCategory)}
                    className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-stardust"
                  >
                    {Object.keys(CATEGORY_META).map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <button
                onClick={addPlanItem}
                disabled={!newTitle.trim()}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-dawn px-5 py-3 font-bold text-primary-foreground transition hover:scale-[1.01] disabled:pointer-events-none disabled:opacity-40 sm:w-auto"
              >
                <Plus className="h-5 w-5" aria-hidden />
                Add to plan
              </button>
            </div>
          </section>

          <aside className="space-y-5">
            <div className="glass-card rounded-3xl p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-calm">
                    EMR import
                  </div>
                  <h2 className="font-display text-xl">Integration preview</h2>
                </div>
                <button
                  onClick={importFromEmr}
                  disabled={imported}
                  className="inline-flex items-center gap-2 rounded-full bg-calm px-4 py-2 text-sm font-bold text-primary-foreground transition hover:scale-[1.02] disabled:pointer-events-none disabled:opacity-50"
                >
                  <UploadCloud className="h-4 w-4" aria-hidden />
                  {imported ? "Imported" : "Import"}
                </button>
              </div>

              <div className="space-y-3">
                {INTEGRATIONS.map((integration) => (
                  <div
                    key={integration.name}
                    className="border-b border-white/10 pb-3 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="font-display text-base">{integration.name}</div>
                      <span className="shrink-0 rounded-full bg-white/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-stardust">
                        {integration.status}
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {integration.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-3xl p-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-meadow/20 text-meadow">
                  <CalendarCheck className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-meadow">
                    Care loop
                  </div>
                  <h2 className="font-display text-xl">Happy path</h2>
                </div>
              </div>

              <div className="space-y-3 text-sm">
                {[
                  "Care manager imports from Epic MyChart, Oracle Health, or FHIR.",
                  "AI drafts friendly quests and optional wellness add-ons.",
                  "Parent and care team approve every new task before activation.",
                  `${petName}'s habitat receives only today's simple quests.`,
                ].map((step, index) => (
                  <div key={step} className="flex gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-stardust">
                      {index + 1}
                    </div>
                    <div className="pt-1 text-muted-foreground">{step}</div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

function Metric({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string | number;
}) {
  return (
    <div className="glass-card rounded-3xl p-4">
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-stardust">
        {icon}
      </div>
      <div className="font-display text-2xl tabular-nums">{value}</div>
      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
    </div>
  );
}

function PlanRow({ item, petName }: { item: PlanItem; petName: string }) {
  const meta = CATEGORY_META[item.category];

  return (
    <article className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex gap-3">
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-xl ${meta.tone}`}
          >
            {meta.icon}
          </div>
          <div>
            <div className="font-display text-lg leading-snug">{item.title}</div>
            <div className="mt-1 text-sm text-muted-foreground">{item.cadence}</div>
          </div>
        </div>
        <span
          className={`w-fit rounded-full px-3 py-1 text-xs font-bold ${statusClass(item.status)}`}
        >
          {item.status}
        </span>
      </div>

      <div className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
        <Detail label="Child quest" value={`${petName}: ${item.childCue}`} />
        <Detail label="Owner" value={item.owner} />
        <Detail label="Next" value={item.next} />
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        <span className="rounded-full bg-white/10 px-2.5 py-1">{meta.quest}</span>
        <span className="rounded-full bg-white/10 px-2.5 py-1">{item.source}</span>
        <span className="rounded-full bg-stardust/15 px-2.5 py-1 text-stardust">
          +{item.stardust} stardust
        </span>
      </div>
    </article>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className="mt-0.5 leading-snug text-starlight">{value}</div>
    </div>
  );
}

function statusClass(status: PlanStatus) {
  if (status === "Active") return "bg-meadow/20 text-meadow";
  if (status === "Needs review") return "bg-stardust/20 text-stardust";
  return "bg-white/10 text-muted-foreground";
}
