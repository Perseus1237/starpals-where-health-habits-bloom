import { MOOD_CLOUDS, KINDNESS } from "@/lib/starpals/data";
import { useStarPals } from "@/lib/starpals/store";
import { useState } from "react";

export function MoodSky() {
  const { sendKindness, kindnessSent } = useStarPals();
  const [sent, setSent] = useState<string | null>(null);

  return (
    <div className="glass-card rounded-3xl p-5">
      <div className="text-xs uppercase tracking-wider text-calm font-bold">Mood Clouds</div>
      <div className="font-display text-xl mb-1">Some friends have a cloudy day</div>
      <div className="text-sm text-muted-foreground mb-4">
        Send a Kindness Comet. No names, just light.
      </div>

      <div className="relative h-20 rounded-2xl bg-gradient-to-b from-twilight/40 to-calm/20 overflow-hidden mb-4">
        {MOOD_CLOUDS.map((c, i) => (
          <div
            key={c.mood}
            className="absolute rounded-full blur-xl animate-float"
            style={{
              left: `${10 + i * 22}%`,
              top: `${10 + (i % 2) * 30}%`,
              width: 40 + c.count / 8,
              height: 30 + c.count / 12,
              background: c.color,
              opacity: 0.6,
              animationDelay: `${i * 0.7}s`,
            }}
          />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2">
        {KINDNESS.slice(0, 4).map((k) => {
          const isSent = kindnessSent.includes(k.key) || sent === k.key;
          return (
            <button
              key={k.key}
              disabled={isSent}
              onClick={() => {
                sendKindness(k.key);
                setSent(k.key);
              }}
              className={`rounded-2xl p-3 text-sm font-semibold transition-all
                ${isSent
                  ? "bg-meadow/20 text-meadow"
                  : "glass-card hover:bg-white/10 hover:scale-[1.03] active:scale-[0.98]"}`}
            >
              <span className="text-lg mr-1">{isSent ? "💫" : k.emoji}</span>
              {isSent ? "Sent ✓" : k.text}
            </button>
          );
        })}
      </div>
    </div>
  );
}
