import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { PETS } from "@/lib/starpals/data";
import type { PetSpecies } from "@/lib/starpals/types";
import { useStarPals } from "@/lib/starpals/store";
import { Pet } from "@/components/starpals/Pet";

export const Route = createFileRoute("/onboarding")({
  head: () => ({
    meta: [{ title: "Meet your StarPal" }],
  }),
  component: Onboarding,
});

function Onboarding() {
  const navigate = useNavigate();
  const { createPet } = useStarPals();
  const [step, setStep] = useState<0 | 1 | 2>(0);
  const [childName, setChildName] = useState("");
  const [species, setSpecies] = useState<PetSpecies | null>(null);
  const [petName, setPetName] = useState("");

  const speciesList: PetSpecies[] = ["lumi", "mosshop", "tidepup"];

  return (
    <main className="relative min-h-screen flex items-center justify-center px-6 py-10">
      <div className="relative z-10 w-full max-w-lg">
        {step === 0 && (
          <div className="glass-card rounded-3xl p-8 text-center">
            <div className="text-5xl mb-4 animate-float">👋</div>
            <h1 className="font-display text-3xl mb-2">Hi, brave one.</h1>
            <p className="text-muted-foreground mb-6">What should we call you?</p>
            <input
              autoFocus
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
              placeholder="Your first name"
              maxLength={20}
              className="w-full rounded-2xl bg-white/10 border border-white/20 px-5 py-4 text-center text-lg font-display focus:outline-none focus:ring-2 focus:ring-stardust"
            />
            <button
              disabled={!childName.trim()}
              onClick={() => setStep(1)}
              className="btn-magical w-full mt-5 disabled:opacity-40 disabled:pointer-events-none"
            >
              Next →
            </button>
          </div>
        )}

        {step === 1 && (
          <div className="glass-card rounded-3xl p-6">
            <h1 className="font-display text-2xl text-center mb-1">
              Someone has been waiting for you.
            </h1>
            <p className="text-sm text-muted-foreground text-center mb-6">Tap to meet them.</p>

            <div className="grid grid-cols-3 gap-3 mb-6">
              {speciesList.map((s) => {
                const meta = PETS[s];
                const selected = species === s;
                return (
                  <button
                    key={s}
                    onClick={() => setSpecies(s)}
                    className={`rounded-2xl p-4 transition-all
                      ${selected ? "bg-stardust/20 ring-2 ring-stardust scale-105" : "glass-card hover:scale-[1.03]"}`}
                  >
                    <Pet species={s} size={90} bouncing={selected} />
                    <div className="font-display font-semibold mt-2">{meta.name}</div>
                  </button>
                );
              })}
            </div>

            {species && (
              <p className="text-center text-sm text-muted-foreground mb-4 animate-ignite">
                {PETS[species].tagline}
              </p>
            )}

            <button
              disabled={!species}
              onClick={() => {
                if (species) setPetName(PETS[species].suggested);
                setStep(2);
              }}
              className="btn-magical w-full disabled:opacity-40 disabled:pointer-events-none"
            >
              Choose this StarPal →
            </button>
          </div>
        )}

        {step === 2 && species && (
          <div className="glass-card rounded-3xl p-8 text-center">
            <Pet species={species} size={140} glow />
            <p className="mt-4 text-muted-foreground">
              They like the name <span className="text-stardust font-bold">{PETS[species].suggested}</span>.
            </p>
            <p className="mb-4 text-sm text-muted-foreground">What do you want to call them?</p>
            <input
              autoFocus
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              maxLength={20}
              className="w-full rounded-2xl bg-white/10 border border-white/20 px-5 py-4 text-center text-xl font-display focus:outline-none focus:ring-2 focus:ring-stardust"
            />
            <button
              disabled={!petName.trim()}
              onClick={() => {
                createPet(species, petName, childName);
                navigate({ to: "/home" });
              }}
              className="btn-magical w-full mt-5 disabled:opacity-40 disabled:pointer-events-none"
            >
              Begin our adventure ✨
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
