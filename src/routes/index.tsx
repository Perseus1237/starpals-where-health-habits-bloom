import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useStarPals } from "@/lib/starpals/store";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "StarPals — Care for a pet. Care for yourself." },
      { name: "description", content: "A magical world where kids care for tiny creatures while building daily health habits." },
    ],
  }),
  component: Landing,
});

function Landing() {
  const { pet } = useStarPals();
  const navigate = useNavigate();

  // If pet already exists, the demo can re-enter home directly
  useEffect(() => {
    // don't auto-redirect, let user re-experience the landing
  }, [pet]);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center">
      <div className="relative z-10 max-w-xl">
        <div className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-stardust font-bold mb-8">
          ✦ A new kind of care
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl leading-[0.95] mb-6">
          A new star is being{" "}
          <span className="bg-gradient-to-r from-dawn via-stardust to-heart bg-clip-text text-transparent">
            born
          </span>
          .
        </h1>

        <p className="text-lg text-muted-foreground mb-10 max-w-md mx-auto leading-relaxed">
          StarPals turns daily care routines into a magical pet world. Brave kids, tiny creatures, and a sky that grows brighter together.
        </p>

        <div className="flex flex-col gap-3 items-center justify-center">
          {pet ? (
            <button onClick={() => navigate({ to: "/home" })} className="btn-magical">
              Visit {pet.name} →
            </button>
          ) : (
            <Link to="/onboarding" className="btn-magical">
              Begin ✨
            </Link>
          )}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm">
            <Link to="/parent" className="text-muted-foreground hover:text-foreground underline-offset-4 hover:underline">
              For parents & caregivers
            </Link>
            <Link to="/care-plan" className="text-muted-foreground hover:text-foreground underline-offset-4 hover:underline">
              Care management team
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-4 text-left">
          {[
            { icon: "🐣", title: "Care for a pet", body: "Your StarPal grows from what you do today." },
            { icon: "🌍", title: "Help a world", body: "Every brave kid lights up a shared sky." },
            { icon: "💛", title: "Never alone", body: "Send a Kindness Comet. Safe. No words to type." },
          ].map((f) => (
            <div key={f.title} className="glass-card rounded-2xl p-4">
              <div className="text-2xl mb-1">{f.icon}</div>
              <div className="font-display font-semibold text-sm mb-0.5">{f.title}</div>
              <div className="text-xs text-muted-foreground leading-snug">{f.body}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
