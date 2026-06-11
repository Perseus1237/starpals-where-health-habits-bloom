import type { CareCard as CareCardT } from "@/lib/starpals/types";

interface Props {
  card: CareCardT;
  done: boolean;
  onComplete: () => void;
}

export function CareCard({ card, done, onComplete }: Props) {
  return (
    <button
      onClick={onComplete}
      disabled={done}
      className={`group relative w-full text-left rounded-3xl p-5 transition-all duration-300
        ${done
          ? "glass-card opacity-60"
          : "glass-card hover:scale-[1.02] hover:bg-white/10 active:scale-[0.99] cursor-pointer"}
      `}
    >
      <div className="flex items-center gap-4">
        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl text-3xl
          ${done ? "bg-meadow/30" : "bg-gradient-to-br from-dawn/40 to-stardust/40 group-hover:from-dawn/60 group-hover:to-stardust/60"}`}>
          {done ? "✓" : card.icon}
        </div>
        <div className="flex-1">
          <div className="font-display text-lg font-semibold">{card.label}</div>
          <div className="text-sm text-muted-foreground">{done ? card.doneCopy : card.copy}</div>
        </div>
        <div className="text-right">
          <div className="text-stardust font-bold tabular-nums">+{card.stardust}</div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">stardust</div>
        </div>
      </div>
    </button>
  );
}
