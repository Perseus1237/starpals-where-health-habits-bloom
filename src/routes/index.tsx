import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Pet } from "@/components/starpals/Pet";
import { useStarPals } from "@/lib/starpals/store";
import {
  AI_TRANSLATION_EXAMPLE,
  COMPETITOR_COMPARISON,
  HARD_TO_COPY,
  MARKET_PROOF_POINTS,
} from "@/lib/starpals/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StarPals - The child engagement layer for pediatric care" },
      {
        name: "description",
        content:
          "StarPals turns pediatric care plans into child-safe quests, parent calm, and care-team signal between visits.",
      },
    ],
  }),
  component: Landing,
});

const modules = [
  {
    icon: Sparkles,
    eyebrow: "Child experience",
    title: "StarPal habitat",
    body: "Daily medicine, hydration, breathing, movement, and mood check-ins become Stardust, story progress, and a pet who grows through care.",
    to: "/onboarding",
    link: "Begin the demo",
    tone: "text-stardust bg-stardust/15",
  },
  {
    icon: ShieldCheck,
    eyebrow: "Parent caregiver",
    title: "Magic Mirror",
    body: "Caregivers see a calm recap, upcoming plan steps, and support settings without turning home life into a surveillance dashboard.",
    to: "/parent",
    link: "Open parent view",
    tone: "text-dawn bg-dawn/15",
  },
  {
    icon: ClipboardList,
    eyebrow: "Care management",
    title: "Care plan builder",
    body: "Care teams can draft or import plan items, map clinical instructions into child-safe quests, and stage changes for parent review.",
    to: "/care-plan",
    link: "Open care plan",
    tone: "text-calm bg-calm/15",
  },
  {
    icon: HeartPulse,
    eyebrow: "Provider signal",
    title: "Care Team Snapshot",
    body: "Provider-ready weekly summaries show completion patterns, mood trends, recovered routines, parent context, and cited AI summaries.",
    to: "/provider-snapshot",
    link: "Open snapshot",
    tone: "text-meadow bg-meadow/15",
  },
] as const;

const problemPoints = [
  "Routines are repetitive, boring, and built for adults.",
  "Parents become the reminder system, which turns care into conflict.",
  "Kids feel isolated by tasks their friends do not have to do.",
  "Clinicians see short visit snapshots while the real story happens at home.",
];

const audienceCards = [
  {
    icon: Sparkles,
    title: "For kids",
    body: "StarPals gives children ownership, softness, surprise, and story. The care action is the fuel; the pet's joy is the reason to come back.",
    proof: "Success looks like a child opening the app because they want to see their StarPal.",
  },
  {
    icon: ShieldCheck,
    title: "For parents",
    body: "The parent experience is calm by design: enough visibility to support the routine, never a feed of failure, pressure, or red alerts.",
    proof: "Success looks like fewer 7pm reminders and more peaceful co-care moments.",
  },
  {
    icon: ClipboardList,
    title: "For care teams",
    body: "The clinical wedge is home-care signal: plan status, routine completion, mood patterns, and summaries that can fit into care management workflows.",
    proof: "Success looks like useful context between visits, not another dashboard nobody uses.",
  },
] as const;

const featureGroups = [
  {
    icon: Sparkles,
    title: "Meaningful care loops",
    body: "Care Cards create one-tap moments of agency. Stardust powers pets, habitats, stories, and shared world progress without shame mechanics or punitive streaks.",
  },
  {
    icon: Users,
    title: "Belonging without exposure",
    body: "Community quests, Mood Clouds, and Kindness Comets let kids feel less alone without open chat, public health details, or follower graphs.",
  },
  {
    icon: HeartPulse,
    title: "Signals between visits",
    body: "Parent-approved summaries can become the foundation for provider-ready adherence, mood, symptom, and routine signals.",
  },
  {
    icon: CalendarCheck,
    title: "A platform for care plans",
    body: "The long-term wedge is a cross-condition engagement layer for asthma, diabetes, PT, oncology support, anxiety, ADHD, post-op recovery, and more.",
  },
];

const futurePlatformCards = [
  {
    icon: Sparkles,
    eyebrow: "AI care-plan copilot",
    title: "Chart data becomes reviewable quests",
    body: "Epic MyChart, Oracle Health, FHIR resources, PDFs, and caregiver notes can feed an AI draft that rewrites clinical instructions into app-friendly care steps.",
    points: [
      "Care Plan Interpreter Agent for proposed quests",
      "Quest Personalization Agent for age and reading level",
      "Wellness add-ons for sleep, hydration, movement, and routine anchors",
    ],
    tone: "text-stardust bg-stardust/15",
  },
  {
    icon: ClipboardList,
    eyebrow: "Epic, MyChart, Oracle",
    title: "EMR integrations with human gates",
    body: "The platform roadmap supports SMART on FHIR launch, MyChart family access, Oracle Health FHIR R4 mapping, CDS Hooks prompts, and provenance-backed imports.",
    points: [
      "No imported or AI-created task reaches the child without approval",
      "Source-of-truth rules for clinician, caregiver, AI, and device inputs",
      "Writeback disabled by default for early pilots",
    ],
    tone: "text-calm bg-calm/15",
  },
  {
    icon: HeartPulse,
    eyebrow: "Wearables and devices",
    title: "Passive signals stay gentle",
    body: "Apple Health, Google Health Connect, smart inhalers, medication devices, glucose summaries, sleep, steps, and activity data become signals, not scary conclusions.",
    points: [
      "Caregiver review before provider sharing",
      "Child-facing copy stays motivational and non-clinical",
      "Provider summaries aggregate trends instead of streaming raw data",
    ],
    tone: "text-meadow bg-meadow/15",
  },
  {
    icon: ShieldCheck,
    eyebrow: "Security and privacy",
    title: "Built for child health trust",
    body: "The security roadmap covers consent, teen privacy, access control, audit trails, encryption, vendor review, incident response, and procurement evidence for clinics.",
    points: [
      "Consent ledger for EMR, AI, device, and provider sharing",
      "Provenance for imports, summaries, approvals, and exports",
      "HIPAA, COPPA, SOC 2, and secure SDLC readiness",
    ],
    tone: "text-heart bg-heart/15",
  },
] as const;

const futureSignals = [
  "Clinical Summary Agent with source-backed provider recaps",
  "Caregiver Coach Agent for missed routines without blame",
  "Integration Agent for sync drift, token failures, and mapping issues",
  "Content Safety Agent for stories, messages, and community moments",
  "Provider review queue for summaries, writeback, and wearable sharing",
  "Condition packs for asthma, diabetes, ADHD, oncology support, PT, anxiety, and sleep",
] as const;

const workflowSteps = [
  {
    title: "Configure the plan",
    body: "A caregiver or care team starts with medication, hydration, breathing, movement, mood, appointments, or condition-specific tasks.",
  },
  {
    title: "Translate into quests",
    body: "Clinical language becomes a short child-safe Care Card with friendly copy, a cadence, an owner, and parent approval.",
  },
  {
    title: "Reward the routine",
    body: "The child completes tiny actions, earns Stardust, powers up a StarPal, contributes to a shared world, and unlocks story moments.",
  },
  {
    title: "Return useful signal",
    body: "Parents see supportive recaps and care teams can receive pattern-level summaries without exposing child play details.",
  },
] as const;

const judgeJourneySteps = [
  {
    title: "Open the child story",
    action:
      "Start with the child demo, choose a StarPal, and complete water, breathing, and medicine quests.",
    proof:
      "The product makes a repeated care routine feel like agency, story, and pet care instead of compliance.",
  },
  {
    title: "Show the AI delight",
    action:
      "Unlock the story after two quests and point out that AI output is schema-checked, filtered, and has a deterministic fallback.",
    proof:
      "AI creates personalized motivation while safety rails keep medical language out of the child story.",
  },
  {
    title: "Switch to the parent",
    action:
      "Open the parent dashboard, answer 7 at the grown-up gate, and show the calm recap, week view, and staged drafts.",
    proof:
      "Caregivers get visibility and support without turning home life into a surveillance feed.",
  },
  {
    title: "Show care-plan translation",
    action:
      "Open the care-plan builder, import EMR items, generate AI drafts, then send them to parent review.",
    proof:
      "Clinical instructions become reviewable child-safe quests, with human approval before activation.",
  },
  {
    title: "Show provider signal",
    action:
      "Open the Care Team Snapshot and show completion patterns, mood trend, parent note, cited summary, and writeback status.",
    proof:
      "StarPals creates provider-useful signal between visits without exposing child play details or unsafe medical advice.",
  },
  {
    title: "End on the platform wedge",
    action:
      "Return to the landing page and summarize the path: care plan to quest, quest to engagement, engagement to provider-ready signal.",
    proof:
      "StarPals is a cross-condition pediatric engagement layer, not just a cute reminder app.",
  },
] as const;

const judgeRubricCards = [
  {
    icon: HeartPulse,
    title: "Demand reality",
    body: "Kids with chronic care routines face daily repetition, parent conflict, isolation, and sparse between-visit clinical signal.",
  },
  {
    icon: Sparkles,
    title: "Meaningful AI",
    body: "AI helps translate chart language into child-safe quests and creates personalized stories, while parent review and content filters stay in control.",
  },
  {
    icon: ShieldCheck,
    title: "Demo proof",
    body: "The app builds, runs as a live web demo, and gives judges concrete child, parent, and care-team surfaces to inspect.",
  },
  {
    icon: ClipboardList,
    title: "Investable wedge",
    body: "The same care-card engine can expand across asthma, diabetes, PT, oncology support, anxiety, ADHD, and post-discharge care.",
  },
] as const;

const trustPillars = [
  "No diagnosis, prescribing, or emergency triage.",
  "No open child chat, public profiles, or follower graph.",
  "No shame mechanics, punitive streak loss, or leaderboards.",
  "No imported or AI-created task reaches the child without approval.",
] as const;

function Landing() {
  const { pet } = useStarPals();
  const navigate = useNavigate();
  const childTarget = pet ? "/home" : "/onboarding";

  return (
    <main className="relative overflow-hidden">
      <section className="relative flex min-h-[84svh] items-center px-5 py-10 sm:px-8">
        <div className="absolute inset-0 overflow-hidden" aria-hidden>
          <div className="absolute left-1/2 top-[18%] h-72 w-72 -translate-x-1/2 rounded-full bg-stardust/10 blur-3xl" />
          <div className="absolute bottom-12 right-[8%] h-80 w-80 rounded-full bg-meadow/10 blur-3xl" />
          <div className="absolute left-[8%] top-[46%] h-64 w-64 rounded-full bg-heart/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full glass-card px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-stardust">
              <Sparkles className="h-4 w-4" aria-hidden />
              Care for a pet. Care for yourself.
            </div>

            <h1 className="font-display text-6xl leading-[0.9] sm:text-7xl lg:text-8xl">
              StarPals
            </h1>
            <p className="mt-5 max-w-2xl text-xl leading-relaxed text-starlight sm:text-2xl">
              The child engagement layer for pediatric chronic care.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              StarPals turns care plans into magical daily quests so kids feel like heroes instead
              of patients, parents stop being the nagging system, and care teams get useful signal
              between visits.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {pet ? (
                <button
                  onClick={() => navigate({ to: "/home" })}
                  className="btn-magical inline-flex items-center justify-center gap-2"
                >
                  Visit {pet.name}
                  <ArrowRight className="h-5 w-5" aria-hidden />
                </button>
              ) : (
                <Link
                  to={childTarget}
                  className="btn-magical inline-flex items-center justify-center gap-2"
                >
                  Begin the child demo
                  <ArrowRight className="h-5 w-5" aria-hidden />
                </Link>
              )}
              <Link
                to="/care-plan"
                className="inline-flex items-center justify-center gap-2 rounded-full glass-card px-6 py-4 text-sm font-bold hover:bg-white/10"
              >
                See the care platform
              </Link>
            </div>
          </div>

          <div className="relative min-h-[320px] lg:min-h-[520px]" aria-hidden>
            <div className="absolute inset-x-0 top-0 mx-auto flex h-full max-w-md items-center justify-center">
              <div className="absolute h-72 w-72 rounded-full bg-gradient-to-br from-dawn/25 via-stardust/20 to-meadow/20 blur-2xl" />
              <Pet species="lumi" stage={2} size={260} glow bouncing />
            </div>

            <FloatingSignal className="left-0 top-8" label="3 care quests" value="Done" />
            <FloatingSignal className="right-0 top-24" label="Mood signal" value="Steady" />
            <FloatingSignal className="bottom-20 left-4" label="Parent review" value="Ready" />
            <FloatingSignal className="bottom-6 right-4" label="EMR import" value="FHIR" />
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 pb-12 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((module) => {
            const Icon = module.icon;
            const target = module.to === "/onboarding" ? childTarget : module.to;
            const link = module.to === "/onboarding" && pet ? `Visit ${pet.name}` : module.link;

            return (
              <Link
                key={module.title}
                to={target}
                className="group glass-card rounded-3xl p-5 text-left transition hover:-translate-y-1 hover:bg-white/10"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${module.tone}`}
                >
                  <Icon className="h-6 w-6" aria-hidden />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {module.eyebrow}
                </div>
                <h2 className="mt-1 font-display text-2xl">{module.title}</h2>
                <p className="mt-3 min-h-24 text-sm leading-relaxed text-muted-foreground">
                  {module.body}
                </p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-stardust">
                  {link}
                  <ArrowRight
                    className="h-4 w-4 transition group-hover:translate-x-1"
                    aria-hidden
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-calm">
              The care circle
            </div>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              Three users. One gentler routine.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              StarPals works because it creates value for the child, the caregiver, and the care
              team at the same time. Each role gets the right surface, language, and level of
              detail.
            </p>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {audienceCards.map((audience) => {
              const Icon = audience.icon;

              return (
                <div key={audience.title} className="glass-card rounded-3xl p-5">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-calm">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="font-display text-2xl">{audience.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {audience.body}
                  </p>
                  <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-sm leading-relaxed text-starlight">
                    {audience.proof}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-14 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-heart">
              The problem
            </div>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              Pediatric care fails when it feels like compliance.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Millions of children live with chronic health needs and a daily choreography of puffs,
              pills, stretches, hydration, mood checks, breathing, rest, and appointments. The
              system sees adherence. The child feels boredom, worry, isolation, and pressure.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {problemPoints.map((point) => (
              <div key={point} className="glass-card rounded-2xl p-4">
                <CheckCircle2 className="mb-3 h-5 w-5 text-heart" aria-hidden />
                <p className="text-sm leading-relaxed text-muted-foreground">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-stardust">
                Evidence and market proof
              </div>
              <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                A real care gap, not just a cute reminder.
              </h2>
              <div className="mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>
                  <span className="font-bold text-starlight">Target user:</span> children ages 7-13
                  with recurring care routines.
                </p>
                <p>
                  <span className="font-bold text-starlight">Parent pain:</span> reminders become
                  conflict when adults have to be the daily alarm.
                </p>
                <p>
                  <span className="font-bold text-starlight">Provider pain:</span> care teams have
                  sparse between-visit signal and little context on home routines.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-3 sm:grid-cols-2">
                {MARKET_PROOF_POINTS.map((point) => (
                  <div key={point.label} className="glass-card rounded-3xl p-5">
                    <div className="font-display text-3xl text-stardust">{point.value}</div>
                    <h3 className="mt-2 font-display text-lg leading-tight">{point.label}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {point.body}
                    </p>
                    <div className="mt-3 text-[10px] font-bold uppercase tracking-wider text-calm">
                      {point.source}
                    </div>
                  </div>
                ))}
              </div>

              <div className="glass-card rounded-3xl p-5">
                <div className="mb-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-calm">
                    Competitor comparison
                  </div>
                  <h3 className="font-display text-2xl">
                    StarPals combines engagement with workflow.
                  </h3>
                </div>
                <div className="space-y-2">
                  {COMPETITOR_COMPARISON.map((row) => (
                    <div
                      key={row.category}
                      className="grid gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-sm md:grid-cols-[0.8fr_1fr_1.2fr]"
                    >
                      <div className="font-display text-base leading-tight">{row.category}</div>
                      <div className="text-muted-foreground">{row.example}</div>
                      <div className="text-starlight/85">{row.gap}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-meadow">
              The solution
            </div>
            <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
              Make meaning the interface.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              StarPals inverts the frame. The child is not a tiny adult managing a diagnosis. The
              child is a caretaker whose small daily actions feed a creature, restore a world,
              unlock a story, and light a constellation with other brave kids.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {featureGroups.map((feature) => {
              const Icon = feature.icon;

              return (
                <div key={feature.title} className="glass-card rounded-3xl p-5">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-stardust">
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="font-display text-2xl">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {feature.body}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-dawn">
                How it works
              </div>
              <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                From care plan to courage.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                The product architecture is simple on the surface and clinically useful underneath:
                plan, translate, play, summarize.
              </p>
            </div>

            <div className="grid gap-3">
              {workflowSteps.map((step, index) => (
                <div key={step.title} className="glass-card rounded-3xl p-5">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-dawn/15 font-display text-xl text-dawn">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-display text-xl">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-stardust">
                Platform thesis
              </div>
              <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                One engagement layer. Many care journeys.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                The wedge starts with simple Care Cards. The platform expands into clinic-approved
                care-plan templates, FHIR and SMART launch workflows, parent approval gates,
                child-safe AI storytelling, and provider summaries that respect privacy from day
                one.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Care plans become child-safe quests.",
                "Parents approve what reaches the child.",
                "EMR import can seed the plan without replacing clinicians.",
                "Provider summaries focus on patterns, not raw surveillance.",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-meadow/15 text-meadow">
                    <CheckCircle2 className="h-5 w-5" aria-hidden />
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-meadow">
                Why this is hard to copy
              </div>
              <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                The moat is the care workflow, not the pet art.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                A competitor can copy a checklist or mascot. The harder system is the child-safe
                translation layer, consented caregiver controls, provider signal, and
                cross-condition model working together.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {HARD_TO_COPY.map((item) => (
                <div key={item} className="glass-card rounded-3xl p-5">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-meadow/15 text-meadow">
                    <ShieldCheck className="h-5 w-5" aria-hidden />
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="future-platform" className="relative z-10 px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-stardust">
                Future platform
              </div>
              <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                AI, wearables, and trust rails for the next care layer.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                The care-plan builder points toward a fuller platform: chart-connected AI drafts,
                consented wearable signals, provider-ready summaries, and security controls strong
                enough for pediatric health-system pilots.
              </p>

              <div className="mt-6 grid gap-2">
                {futureSignals.map((signal) => (
                  <div key={signal} className="flex gap-3 text-sm leading-relaxed">
                    <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stardust/15 text-stardust">
                      <CheckCircle2 className="h-4 w-4" aria-hidden />
                    </div>
                    <div className="text-muted-foreground">{signal}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {futurePlatformCards.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div key={feature.title} className="glass-card rounded-3xl p-5">
                    <div
                      className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl ${feature.tone}`}
                    >
                      <Icon className="h-6 w-6" aria-hidden />
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {feature.eyebrow}
                    </div>
                    <h3 className="mt-1 font-display text-2xl">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {feature.body}
                    </p>
                    <div className="mt-4 space-y-2">
                      {feature.points.map((point) => (
                        <div key={point} className="flex gap-2 text-xs leading-relaxed">
                          <div className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-stardust" />
                          <div className="text-starlight/85">{point}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-heart">
                Trust by design
              </div>
              <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                Safe enough for children. Useful enough for care teams.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                The mission only works if families trust the product. StarPals keeps the child
                experience playful and non-clinical while putting approval, privacy, and governance
                around the care layer.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {trustPillars.map((pillar) => (
                <div
                  key={pillar}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-heart/15 text-heart">
                    <ShieldCheck className="h-5 w-5" aria-hidden />
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{pillar}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-14 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="text-xs font-bold uppercase tracking-[0.2em] text-dawn">Mission</div>
          <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
            Build kids who feel capable, connected, and cared for.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            StarPals is not a medical device, a diagnosis engine, or a social feed. It is a
            mission-driven care companion built to lower friction at home, preserve childhood, and
            help clinical teams see what families carry between visits.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to={childTarget}
              className="btn-magical inline-flex items-center justify-center gap-2"
            >
              {pet ? `Visit ${pet.name}` : "Start with the child"}
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
            <Link
              to="/parent"
              className="inline-flex items-center justify-center gap-2 rounded-full glass-card px-6 py-4 text-sm font-bold hover:bg-white/10"
            >
              Parent dashboard
            </Link>
            <Link
              to="/care-plan"
              className="inline-flex items-center justify-center gap-2 rounded-full glass-card px-6 py-4 text-sm font-bold hover:bg-white/10"
            >
              Care plan builder
            </Link>
            <Link
              to="/provider-snapshot"
              className="inline-flex items-center justify-center gap-2 rounded-full glass-card px-6 py-4 text-sm font-bold hover:bg-white/10"
            >
              Care Team Snapshot
            </Link>
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 pb-16 pt-4 sm:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-stardust/25 bg-stardust/[0.06] p-6 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-stardust">
                Hackathon judge path
              </div>
              <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                Run the demo as one care journey.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Use this bottom-of-page guide when presenting. It keeps the first two minutes
                focused on the rubric: real pain, meaningful AI, working software, and a platform
                wedge.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {judgeRubricCards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <div
                      key={card.title}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-stardust">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <h3 className="font-display text-lg">{card.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {card.body}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-5">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-calm">
                      Click path
                    </div>
                    <h3 className="font-display text-2xl">Six beats to show</h3>
                  </div>
                  <Link
                    to={childTarget}
                    className="inline-flex shrink-0 items-center gap-2 rounded-full bg-stardust px-4 py-2 text-sm font-bold text-primary-foreground transition hover:scale-[1.02]"
                  >
                    Start
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>

                <div className="space-y-3">
                  {judgeJourneySteps.map((step, index) => (
                    <div
                      key={step.title}
                      className="rounded-2xl border border-white/10 bg-twilight/20 p-4"
                    >
                      <div className="flex gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stardust/15 font-display text-sm text-stardust">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-display text-lg leading-tight">{step.title}</h4>
                          <p className="mt-1 text-sm leading-relaxed text-starlight">
                            {step.action}
                          </p>
                          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                            <span className="font-bold text-meadow">Proves:</span> {step.proof}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
                <div className="mb-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-dawn">
                    AI before and after
                  </div>
                  <h3 className="font-display text-2xl">
                    Clinical instructions become safe child quests
                  </h3>
                </div>

                <div className="grid gap-3 rounded-2xl bg-white/[0.04] p-4 text-sm md:grid-cols-[1fr_1fr_0.9fr]">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      Input
                    </div>
                    <p className="mt-2 leading-relaxed text-starlight">
                      {AI_TRANSLATION_EXAMPLE.input}
                    </p>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-stardust">
                      AI draft
                    </div>
                    <div className="mt-2 space-y-2">
                      {AI_TRANSLATION_EXAMPLE.aiDrafts.map((draft) => (
                        <div
                          key={draft}
                          className="rounded-2xl border border-white/10 bg-twilight/20 px-3 py-2 text-starlight"
                        >
                          {draft}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-meadow">
                      Safety output
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {AI_TRANSLATION_EXAMPLE.safetyOutputs.map((output) => (
                        <span
                          key={output}
                          className="rounded-full bg-meadow/15 px-3 py-1.5 text-xs font-bold text-meadow"
                        >
                          {output}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function FloatingSignal({
  className,
  label,
  value,
}: {
  className: string;
  label: string;
  value: string;
}) {
  return (
    <div
      className={`absolute glass-card rounded-2xl px-4 py-3 shadow-[var(--shadow-card)] ${className}`}
    >
      <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className="font-display text-xl text-starlight">{value}</div>
    </div>
  );
}
