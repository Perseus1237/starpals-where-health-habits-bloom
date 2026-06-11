import { PETS } from "@/lib/starpals/data";
import type { PetSpecies } from "@/lib/starpals/types";

interface Props {
  species: PetSpecies;
  stage?: 0 | 1 | 2;
  size?: number;
  glow?: boolean;
  bouncing?: boolean;
}

export function Pet({ species, stage = 0, size = 180, glow = false, bouncing = false }: Props) {
  const meta = PETS[species];
  const scale = 1 + stage * 0.1;
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <div
        className={`absolute inset-0 rounded-full bg-gradient-to-br ${meta.aura} blur-2xl ${glow ? "animate-glow" : ""}`}
      />
      {stage >= 1 && (
        <div className="absolute -top-2 -right-2 text-2xl animate-float">✨</div>
      )}
      {stage >= 2 && (
        <div className="absolute -bottom-1 -left-2 text-2xl animate-float" style={{ animationDelay: "1s" }}>
          🌟
        </div>
      )}
      <div
        className={`relative flex items-center justify-center rounded-full bg-gradient-to-br ${meta.aura} shadow-[var(--shadow-pet)] ${bouncing ? "animate-breathe" : "animate-float"}`}
        style={{ width: size * 0.85, height: size * 0.85, transform: `scale(${scale})` }}
      >
        <span style={{ fontSize: size * 0.55, lineHeight: 1 }}>{meta.emoji}</span>
      </div>
    </div>
  );
}
