import { COMMUNITY_QUEST } from "@/lib/starpals/data";

export function CommunityQuest({ progress }: { progress: number }) {
  const pct = Math.round(progress * 100);
  return (
    <div className="glass-card rounded-3xl p-5">
      <div className="flex items-baseline justify-between mb-2">
        <div>
          <div className="text-xs uppercase tracking-wider text-meadow font-bold">Community Quest</div>
          <div className="font-display text-xl">{COMMUNITY_QUEST.name}</div>
        </div>
        <div className="text-2xl">{COMMUNITY_QUEST.scene}</div>
      </div>
      <div className="text-sm text-muted-foreground mb-3">
        Kids everywhere are helping bring the Meadow back.
      </div>
      <div className="relative h-3 rounded-full bg-white/10 overflow-hidden">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-meadow via-stardust to-dawn transition-[width] duration-700"
          style={{ width: `${pct}%` }}
        />
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-white/40 blur-sm transition-[width] duration-700"
          style={{ width: `${pct}%` }}
        />
      </div>
      <div className="mt-2 flex justify-between text-xs text-muted-foreground">
        <span>{pct}% restored</span>
        <span>1,204 flowers today</span>
      </div>
    </div>
  );
}
