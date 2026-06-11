import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  ArrowLeft,
  Bell,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  HeartPulse,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { useStarPals } from "@/lib/starpals/store";
import { CARE_CARDS } from "@/lib/starpals/data";
import type { CareCardKey, PetState } from "@/lib/starpals/types";

export const Route = createFileRoute("/parent")({
  head: () => ({ meta: [{ title: "Parent dashboard - StarPals" }] }),
  component: Parent,
});

const DEMO_COMPLETED: CareCardKey[] = ["medicine", "water", "breathing"];

const DEMO_PET: PetState = {
  species: "lumi",
  name: "Lumi",
  stardust: 42,
  evolutionStage: 2,
  completed: DEMO_COMPLETED,
};

const WEEK_PROGRESS = [
  { day: "Mon", done: 4, total: 4 },
  { day: "Tue", done: 3, total: 4 },
  { day: "Wed", done: 4, total: 4 },
  { day: "Thu", done: 3, total: 4 },
  { day: "Fri", done: 2, total: 4 },
  { day: "Sat", done: 4, total: 4 },
  { day: "Sun", done: 3, total: 4 },
];

const UPCOMING_PLAN = [
  {
    time: "Tomorrow 8:00 AM",
    title: "Morning controller medicine",
    detail: "Parent reminder plus child medicine quest.",
  },
  {
    time: "Friday 4:30 PM",
    title: "Hydration check",
    detail: "After-school water break with StarPal reward.",
  },
  {
    time: "Sunday 6:00 PM",
    title: "Mood and energy review",
    detail: "Weekly reflection shared with the care team.",
  },
];

const CARE_TEAM_NOTES = [
  {
    from: "Nurse Ava",
    note: "The imported rescue-plan steps are staged for your review before they appear for Maya.",
  },
  {
    from: "Dr. Chen",
    note: "Maya's calm breathing streak is a useful signal. Keep it available as an as-needed quest.",
  },
];

function Parent() {
  const { pet, childName, kindnessSent } = useStarPals();
  const [unlocked, setUnlocked] = useState(false);
  const [answer, setAnswer] = useState("");
  const [controls, setControls] = useState({
    bedtimeReminder: true,
    weeklyRecap: true,
    symptomNudge: false,
  });

  if (!unlocked) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="glass-card rounded-3xl p-8 max-w-sm w-full text-center">
          <div className="text-4xl mb-3">🔒</div>
          <h1 className="font-display text-2xl mb-1">Parent space</h1>
          <p className="text-sm text-muted-foreground mb-5">
            A small math check, just for grown-ups.
          </p>
          <div className="text-lg mb-3">
            What is <span className="font-bold">3 + 4</span>?
          </div>
          <input
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            inputMode="numeric"
            className="w-full rounded-2xl bg-white/10 border border-white/20 px-5 py-3 text-center text-lg focus:outline-none focus:ring-2 focus:ring-stardust"
          />
          <button
            onClick={() => answer.trim() === "7" && setUnlocked(true)}
            className="btn-magical w-full mt-4"
          >
            Continue
          </button>
          <div className="mt-4 flex justify-center gap-4 text-xs text-muted-foreground">
            {pet ? (
              <Link to="/home" className="hover:underline">
                Back to {pet.name}
              </Link>
            ) : (
              <Link to="/" className="hover:underline">
                Back to opening
              </Link>
            )}
            <Link to="/care-plan" className="hover:underline">
              Care team demo
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const displayPet = pet ?? DEMO_PET;
  const displayChild = childName || "Maya";
  const usingSeed = !pet;
  const completed = displayPet.completed;
  const kindnessCount = kindnessSent.length || 3;
  const moodLabel = completed.includes("mood") ? "Hopeful" : "Steady";
  const totalStardust = displayPet.stardust;
  const todaysCards = CARE_CARDS.slice(0, 4);
  const adherence = Math.round((completed.length / todaysCards.length) * 100);

  const completedLabels = todaysCards
    .filter((card) => completed.includes(card.key))
    .map((card) => card.label.toLowerCase());

  function toggleControl(key: keyof typeof controls) {
    setControls((current) => ({ ...current, [key]: !current[key] }));
  }

  return (
    <main className="min-h-screen px-4 py-6">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Magic Mirror
            </div>
            <h1 className="font-display text-3xl leading-tight sm:text-4xl">
              Parent dashboard
            </h1>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              A calm, grown-up view of today's care, upcoming plan steps, and care-team updates for {displayChild}.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {pet ? (
              <Link
                to="/home"
                className="inline-flex items-center gap-2 rounded-full glass-card px-3 py-2 text-xs font-bold hover:bg-white/10"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden />
                Child view
              </Link>
            ) : (
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full glass-card px-3 py-2 text-xs font-bold hover:bg-white/10"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden />
                Opening
              </Link>
            )}
            <Link
              to="/care-plan"
              className="inline-flex items-center gap-2 rounded-full glass-card px-3 py-2 text-xs font-bold hover:bg-white/10"
            >
              <ClipboardList className="h-4 w-4" aria-hidden />
              Care plan
            </Link>
          </div>
        </header>

        {usingSeed && (
          <div className="mb-5 rounded-2xl border border-stardust/30 bg-stardust/10 px-4 py-3 text-sm text-stardust">
            Demo mode is showing seeded happy-path data until a child profile is created.
          </div>
        )}

        <section className="mb-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Metric icon={<Sparkles className="h-5 w-5" />} label="Stardust earned" value={totalStardust} />
          <Metric icon={<CheckCircle2 className="h-5 w-5" />} label="Today's quests" value={`${completed.length}/${todaysCards.length}`} />
          <Metric icon={<HeartPulse className="h-5 w-5" />} label="Mood signal" value={moodLabel} />
          <Metric icon={<MessageCircle className="h-5 w-5" />} label="Kindness sent" value={kindnessCount} />
        </section>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="space-y-5">
            <div className="glass-card rounded-3xl p-5">
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-meadow">
                    Today
                  </div>
                  <h2 className="font-display text-2xl">
                    {displayChild} cared for {displayPet.name}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Completed {completedLabels.join(", ") || "the first care step"} with a {adherence}% plan completion signal.
                  </p>
                </div>
                <div className="rounded-2xl bg-meadow/15 px-4 py-3 text-center">
                  <div className="font-display text-3xl text-meadow tabular-nums">{adherence}%</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Today
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                {todaysCards.map((card) => {
                  const done = completed.includes(card.key);
                  return (
                    <div key={card.key} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-2xl ${done ? "bg-meadow/25 text-meadow" : "bg-white/10"}`}>
                        {done ? <CheckCircle2 className="h-5 w-5" aria-hidden /> : card.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-display text-base leading-tight">{card.label}</div>
                        <div className="text-xs text-muted-foreground">{card.copy}</div>
                      </div>
                      <div className={`text-xs font-bold ${done ? "text-meadow" : "text-muted-foreground"}`}>
                        {done ? "Done" : "Open"}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="glass-card rounded-3xl p-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-stardust/20 text-stardust">
                  <CalendarCheck className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-stardust">
                    Week view
                  </div>
                  <h2 className="font-display text-xl">Care rhythm</h2>
                </div>
              </div>

              <div className="flex items-end gap-2">
                {WEEK_PROGRESS.map((day) => {
                  const height = 28 + (day.done / day.total) * 72;
                  return (
                    <div key={day.day} className="flex flex-1 flex-col items-center gap-2">
                      <div className="flex h-28 w-full items-end rounded-full bg-white/10 p-1">
                        <div
                          className="w-full rounded-full bg-gradient-to-t from-meadow to-stardust"
                          style={{ height: `${height}%` }}
                        />
                      </div>
                      <div className="text-xs font-bold text-muted-foreground">{day.day}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <aside className="space-y-5">
            <div className="glass-card rounded-3xl p-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-dawn/20 text-dawn">
                  <Bell className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-dawn">
                    Parent controls
                  </div>
                  <h2 className="font-display text-xl">Support settings</h2>
                </div>
              </div>

              <div className="space-y-3">
                <ControlToggle
                  checked={controls.bedtimeReminder}
                  label="Bedtime care reminder"
                  body="Nudge the parent phone before the evening care window."
                  onChange={() => toggleControl("bedtimeReminder")}
                />
                <ControlToggle
                  checked={controls.weeklyRecap}
                  label="Weekly care-team recap"
                  body="Share a parent-approved summary with the care team."
                  onChange={() => toggleControl("weeklyRecap")}
                />
                <ControlToggle
                  checked={controls.symptomNudge}
                  label="Yellow-zone symptom nudge"
                  body="Show a parent-only prompt when imported plan rules call for it."
                  onChange={() => toggleControl("symptomNudge")}
                />
              </div>
            </div>

            <div className="glass-card rounded-3xl p-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-calm/20 text-calm">
                  <ClipboardList className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-calm">
                    Care plan
                  </div>
                  <h2 className="font-display text-xl">Next steps</h2>
                </div>
              </div>

              <div className="space-y-3">
                {UPCOMING_PLAN.map((item) => (
                  <div key={item.title} className="border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
                    <div className="text-xs font-bold uppercase tracking-wider text-stardust">{item.time}</div>
                    <div className="font-display text-base">{item.title}</div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/care-plan"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-calm px-4 py-3 text-sm font-bold text-primary-foreground transition hover:scale-[1.01]"
              >
                <ShieldCheck className="h-4 w-4" aria-hidden />
                Review care-plan builder
              </Link>
            </div>

            <div className="glass-card rounded-3xl p-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-heart/20 text-heart">
                  <Users className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-heart">
                    Care team
                  </div>
                  <h2 className="font-display text-xl">Messages</h2>
                </div>
              </div>

              <div className="space-y-3">
                {CARE_TEAM_NOTES.map((message) => (
                  <div key={message.from} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                    <div className="font-display text-base">{message.from}</div>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{message.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <p className="mx-auto mt-6 max-w-2xl px-4 text-center text-xs leading-relaxed text-muted-foreground">
          StarPals is not a medical device. Parents and care teams configure care plans, and child-facing quests stay simple, supportive, and parent-approved.
        </p>
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

function ControlToggle({
  checked,
  label,
  body,
  onChange,
}: {
  checked: boolean;
  label: string;
  body: string;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="mt-1 h-5 w-5 rounded border-white/30 bg-white/10 accent-stardust"
      />
      <span>
        <span className="block font-display text-base leading-tight">{label}</span>
        <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">{body}</span>
      </span>
    </label>
  );
}
