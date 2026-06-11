import { useEffect, useState } from "react";

export function Stardust({ value }: { value: number }) {
  const [display, setDisplay] = useState(value);
  useEffect(() => {
    if (display === value) return;
    const step = value > display ? 1 : -1;
    const id = setInterval(() => {
      setDisplay((d) => {
        const next = d + step;
        if ((step > 0 && next >= value) || (step < 0 && next <= value)) {
          clearInterval(id);
          return value;
        }
        return next;
      });
    }, 30);
    return () => clearInterval(id);
  }, [value, display]);

  return (
    <div className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-2 font-bold text-stardust">
      <span className="text-xl">✨</span>
      <span className="tabular-nums">{display}</span>
      <span className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Stardust</span>
    </div>
  );
}
