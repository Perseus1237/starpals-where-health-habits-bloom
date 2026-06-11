import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { useStarPals } from "@/lib/starpals/store";
import { CARE_CARDS } from "@/lib/starpals/data";

export const Route = createFileRoute("/parent")({
  head: () => ({ meta: [{ title: "Parent recap — StarPals" }] }),
  component: Parent,
});

function Parent() {
  const { pet, childName, kindnessSent } = useStarPals();
  const [unlocked, setUnlocked] = useState(false);
  const [answer, setAnswer] = useState("");

  if (!unlocked) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="glass-card rounded-3xl p-8 max-w-sm w-full text-center">
          <div className="text-4xl mb-3">🔒</div>
          <h1 className="font-display text-2xl mb-1">Parent space</h1>
          <p className="text-sm text-muted-foreground mb-5">A small math check, just for grown-ups.</p>
          <div className="text-lg mb-3">What is <span className="font-bold">3 + 4</span>?</div>
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
          <Link to="/home" className="block mt-4 text-xs text-muted-foreground hover:underline">
            ← Back to {pet?.name ?? "habitat"}
          </Link>
        </div>
      </main>
    );
  }

  const completed = pet?.completed ?? [];
  const totalStardust = pet?.stardust ?? 0;
  const moodLabel = completed.includes("mood") ? "Hopeful 🌤️" : "—";

  return (
    <main className="min-h-screen px-4 py-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Magic Mirror</div>
          <h1 className="font-display text-2xl">A gentle recap</h1>
        </div>
        <Link to="/home" className="text-xs glass-card rounded-full px-3 py-1.5 hover:bg-white/10">
          ← Back
        </Link>
      </div>

      {!pet ? (
        <div className="glass-card rounded-3xl p-6 text-center text-muted-foreground">
          Your child hasn't met their StarPal yet.
        </div>
      ) : (
        <div className="space-y-4">
          <div className="glass-card rounded-3xl p-5">
            <div className="text-sm text-muted-foreground">Today</div>
            <div className="font-display text-xl leading-snug">
              {childName} cared for <span className="text-stardust">{pet.name}</span> today.
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              {completed.length} of 4 gentle quests. Mood: {moodLabel}.
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <Stat label="Stardust" value={totalStardust} icon="✨" />
            <Stat label="Quests" value={`${completed.length}/4`} icon="🎯" />
            <Stat label="Kindness sent" value={kindnessSent.length} icon="💛" />
          </div>

          <div className="glass-card rounded-3xl p-5">
            <div className="text-xs uppercase tracking-wider text-meadow font-bold mb-2">Care today</div>
            <div className="space-y-2">
              {CARE_CARDS.slice(0, 4).map((c) => {
                const done = completed.includes(c.key);
                return (
                  <div key={c.key} className="flex items-center gap-3">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${done ? "bg-meadow/30" : "bg-white/5"}`}>
                      {done ? "✓" : c.icon}
                    </div>
                    <div className="flex-1 text-sm">{c.label}</div>
                    <div className={`text-xs ${done ? "text-meadow" : "text-muted-foreground"}`}>
                      {done ? "Done" : "Open"}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="glass-card rounded-3xl p-5">
            <div className="text-xs uppercase tracking-wider text-dawn font-bold mb-1">Gentle suggestion</div>
            <div className="text-sm text-muted-foreground">
              {completed.includes("breathing")
                ? `${childName}'s calm streak is growing. Maybe try a slow breath together tonight.`
                : `A shared breath before bed could be a nice ritual to start.`}
            </div>
          </div>

          <p className="text-xs text-muted-foreground text-center px-4 leading-relaxed">
            StarPals is not a medical device. Care plans are configured by you and your care team. We never share your child's data publicly.
          </p>
        </div>
      )}
    </main>
  );
}

function Stat({ label, value, icon }: { label: string; value: string | number; icon: string }) {
  return (
    <div className="glass-card rounded-2xl p-4 text-center">
      <div className="text-2xl mb-1">{icon}</div>
      <div className="font-display text-2xl tabular-nums">{value}</div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{label}</div>
    </div>
  );
}
