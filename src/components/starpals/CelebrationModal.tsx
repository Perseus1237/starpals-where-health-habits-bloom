import { useEffect, useState } from "react";

export function CelebrationModal({
  open,
  earned,
  message,
  onClose,
}: {
  open: boolean;
  earned: number;
  message: string;
  onClose: () => void;
}) {
  const [particles, setParticles] = useState<{ id: number; dx: number; dy: number; delay: number }[]>([]);

  useEffect(() => {
    if (!open) return;
    setParticles(
      Array.from({ length: 24 }, (_, i) => ({
        id: i,
        dx: (Math.random() - 0.5) * 400,
        dy: -(Math.random() * 300 + 100),
        delay: Math.random() * 200,
      })),
    );
    const t = setTimeout(onClose, 2200);
    return () => clearTimeout(t);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-twilight-deep/70 backdrop-blur-sm">
      <div className="relative">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute left-1/2 top-1/2 text-2xl"
            style={{
              animation: `stardust-burst 1.4s ease-out ${p.delay}ms forwards`,
              ["--dx" as string]: `${p.dx}px`,
              ["--dy" as string]: `${p.dy}px`,
            }}
          >
            ✨
          </span>
        ))}
        <div className="relative glass-card rounded-[2rem] px-10 py-8 text-center animate-ignite">
          <div className="text-6xl mb-3">🎉</div>
          <div className="font-display text-2xl mb-2">You did it.</div>
          <div className="text-stardust font-bold text-3xl mb-2">+{earned} ✨</div>
          <div className="text-muted-foreground text-sm max-w-xs">{message}</div>
        </div>
      </div>
    </div>
  );
}
