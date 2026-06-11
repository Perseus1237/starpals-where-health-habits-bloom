import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  ClipboardList,
  FileDown,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  XCircle,
} from "lucide-react";
import { useStarPals } from "@/lib/starpals/store";

export const Route = createFileRoute("/provider-snapshot")({
  head: () => ({ meta: [{ title: "Care Team Snapshot - StarPals" }] }),
  component: ProviderSnapshot,
});

const WEEK_PATTERN = [
  { day: "Mon", done: 4, total: 4, note: "Morning power-up and breathing complete" },
  { day: "Tue", done: 3, total: 4, note: "Mood check missed, routine recovered later" },
  { day: "Wed", done: 4, total: 4, note: "Spacer practice approved and completed" },
  { day: "Thu", done: 3, total: 4, note: "Water quest missed after school" },
  { day: "Fri", done: 2, total: 4, note: "Low-energy day, calm breath completed" },
  { day: "Sat", done: 4, total: 4, note: "All routines completed" },
  { day: "Sun", done: 3, total: 4, note: "Parent note added before review" },
];

const MOOD_TREND = [
  { label: "Mon", mood: "steady", score: 62 },
  { label: "Tue", mood: "tired", score: 48 },
  { label: "Wed", mood: "hopeful", score: 68 },
  { label: "Thu", mood: "steady", score: 60 },
  { label: "Fri", mood: "low energy", score: 44 },
  { label: "Sat", mood: "bright", score: 76 },
  { label: "Sun", mood: "steady", score: 64 },
];

const ROUTINE_EVENTS = [
  {
    label: "Missed",
    value: "Fri morning power-up",
    detail: "Routine skipped during a low-energy morning, no child penalty shown.",
  },
  {
    label: "Recovered",
    value: "Fri calm breath",
    detail: "Breathing quest completed later the same day after parent nudge.",
  },
  {
    label: "Recovered",
    value: "Tue mood check",
    detail: "Parent completed a supportive check-in note after bedtime.",
  },
];

const CITED_EVENTS = [
  {
    id: "E1",
    time: "Mon 8:04 AM",
    event: "Power up Lumi before breakfast completed",
  },
  {
    id: "E2",
    time: "Wed 8:11 AM",
    event: "Tiny breathing tool quest approved by parent and completed",
  },
  {
    id: "E3",
    time: "Fri 5:32 PM",
    event: "Calm breath completed after missed morning routine",
  },
  {
    id: "E4",
    time: "Sun 6:18 PM",
    event: "Parent note added before care-team review",
  },
];

function ProviderSnapshot() {
  const {
    pet,
    childName,
    reviewQuests,
    completedReviewQuestIds,
    providerExportReady,
    setProviderExportReady,
  } = useStarPals();
  const [parentNote, setParentNote] = useState(
    "Maya had two tired mornings this week. The breathing quest helped once she was home, and the bright-star plan language felt safe because it told her to ask me instead of giving instructions.",
  );

  const child = childName || "Maya";
  const petName = pet?.name || "Lumi";
  const approvedCount = reviewQuests.filter((quest) => quest.status === "approved").length;
  const completedApprovedCount = reviewQuests.filter((quest) =>
    completedReviewQuestIds.includes(quest.id),
  ).length;
  const completionAverage = Math.round(
    (WEEK_PATTERN.reduce((sum, day) => sum + day.done / day.total, 0) / WEEK_PATTERN.length) * 100,
  );

  return (
    <main className="min-h-screen px-4 py-6">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-calm">
              Care team export
            </div>
            <h1 className="font-display text-3xl leading-tight sm:text-4xl">Care Team Snapshot</h1>
            <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Provider-useful signal for {child}: completion pattern, mood trend, recovered
              routines, parent context, and a cited AI summary.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              to="/parent"
              className="inline-flex items-center gap-2 rounded-full glass-card px-3 py-2 text-xs font-bold hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              Parent view
            </Link>
            <Link
              to="/care-plan"
              className="inline-flex items-center gap-2 rounded-full glass-card px-3 py-2 text-xs font-bold hover:bg-white/10"
            >
              <ClipboardList className="h-4 w-4" aria-hidden />
              Care plan
            </Link>
          </div>
        </header>

        <section className="mb-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Metric
            icon={<TrendingUp className="h-5 w-5" />}
            label="Weekly completion"
            value={`${completionAverage}%`}
          />
          <Metric icon={<HeartPulse className="h-5 w-5" />} label="Mood trend" value="Steady" />
          <Metric
            icon={<ShieldCheck className="h-5 w-5" />}
            label="Approved quests"
            value={approvedCount}
          />
          <Metric
            icon={<Sparkles className="h-5 w-5" />}
            label="Care-team completions"
            value={completedApprovedCount}
          />
        </section>

        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="space-y-5">
            <div className="glass-card rounded-3xl p-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-meadow/20 text-meadow">
                  <TrendingUp className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-meadow">
                    This week
                  </div>
                  <h2 className="font-display text-xl">Completion pattern</h2>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-7">
                {WEEK_PATTERN.map((day) => {
                  const percent = Math.round((day.done / day.total) * 100);
                  return (
                    <div
                      key={day.day}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-3"
                    >
                      <div className="mb-3 flex items-center justify-between gap-2">
                        <div className="font-display text-lg">{day.day}</div>
                        <div className="text-xs font-bold text-stardust">
                          {day.done}/{day.total}
                        </div>
                      </div>
                      <div className="flex h-24 items-end rounded-full bg-white/10 p-1">
                        <div
                          className="mt-auto w-full rounded-full bg-gradient-to-t from-meadow to-stardust"
                          style={{ height: `${percent}%` }}
                        />
                      </div>
                      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                        {day.note}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="glass-card rounded-3xl p-5">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-heart/20 text-heart">
                    <HeartPulse className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-heart">
                      Mood trend
                    </div>
                    <h2 className="font-display text-xl">Gentle signal</h2>
                  </div>
                </div>
                <div className="space-y-3">
                  {MOOD_TREND.map((point) => (
                    <div key={point.label}>
                      <div className="mb-1 flex items-center justify-between text-xs">
                        <span className="font-bold text-starlight">{point.label}</span>
                        <span className="text-muted-foreground">{point.mood}</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-heart to-stardust"
                          style={{ width: `${point.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass-card rounded-3xl p-5">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-dawn/20 text-dawn">
                    <CheckCircle2 className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-dawn">
                      Missed and recovered
                    </div>
                    <h2 className="font-display text-xl">Routine context</h2>
                  </div>
                </div>
                <div className="space-y-3">
                  {ROUTINE_EVENTS.map((item) => (
                    <div
                      key={`${item.label}-${item.value}`}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-3"
                    >
                      <div className="mb-1 flex items-center justify-between gap-3">
                        <div className="font-display text-base">{item.value}</div>
                        <span
                          className={`rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-wider ${
                            item.label === "Recovered"
                              ? "bg-meadow/20 text-meadow"
                              : "bg-dawn/20 text-dawn"
                          }`}
                        >
                          {item.label}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <aside className="space-y-5">
            <div className="glass-card rounded-3xl p-5">
              <div className="mb-4">
                <div className="text-xs font-bold uppercase tracking-wider text-calm">
                  Parent note
                </div>
                <h2 className="font-display text-xl">Context before sharing</h2>
              </div>
              <textarea
                value={parentNote}
                onChange={(event) => setParentNote(event.target.value)}
                className="min-h-36 w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-stardust"
              />
            </div>

            <div className="glass-card rounded-3xl p-5">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-stardust/20 text-stardust">
                  <Sparkles className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-stardust">
                    AI-generated summary
                  </div>
                  <h2 className="font-display text-xl">Cited events</h2>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {child} completed most routine quests this week, with two missed moments that were
                later recovered through parent-supported calm breathing and mood check-ins. Approved
                care-team quests stayed child-safe: {petName} received friendly prompts while
                medication details, dosing, and rescue-plan instructions remained adult-facing.
              </p>
              <div className="mt-4 space-y-2">
                {CITED_EVENTS.map((event) => (
                  <div
                    key={event.id}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-3"
                  >
                    <div className="mb-1 flex items-center justify-between gap-3">
                      <span className="rounded-full bg-stardust/15 px-2 py-1 text-[10px] font-bold text-stardust">
                        {event.id}
                      </span>
                      <span className="text-xs text-muted-foreground">{event.time}</span>
                    </div>
                    <p className="text-sm leading-relaxed text-starlight">{event.event}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-3xl p-5">
              <div className="mb-4">
                <div className="text-xs font-bold uppercase tracking-wider text-meadow">
                  Export control
                </div>
                <h2 className="font-display text-xl">Writeback status</h2>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                <button
                  onClick={() => setProviderExportReady(true)}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-bold transition ${
                    providerExportReady
                      ? "bg-meadow text-primary-foreground"
                      : "border border-white/15 bg-white/[0.04] text-muted-foreground hover:bg-white/10"
                  }`}
                >
                  <CheckCircle2 className="h-4 w-4" aria-hidden />
                  Ready for review
                </button>
                <button
                  onClick={() => setProviderExportReady(false)}
                  className={`inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 text-sm font-bold transition ${
                    !providerExportReady
                      ? "bg-dawn text-primary-foreground"
                      : "border border-white/15 bg-white/[0.04] text-muted-foreground hover:bg-white/10"
                  }`}
                >
                  <XCircle className="h-4 w-4" aria-hidden />
                  Do not write back yet
                </button>
              </div>
              <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-stardust px-4 py-3 text-sm font-bold text-primary-foreground transition hover:scale-[1.01]">
                <FileDown className="h-4 w-4" aria-hidden />
                Export snapshot
              </button>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                Demo export stays read-only unless a parent marks the summary ready for review.
              </p>
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
