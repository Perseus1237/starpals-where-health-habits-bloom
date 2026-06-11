import { useEffect, useState } from "react";
import { generateStarPalStory } from "@/lib/starpals/story.functions";
import { useServerFn } from "@tanstack/react-start";
import { useStarPals } from "@/lib/starpals/store";
import { CARE_CARDS, COMMUNITY_QUEST } from "@/lib/starpals/data";
import { Pet } from "./Pet";

export function StoryAdventure({ onClose }: { onClose: () => void }) {
  const { pet } = useStarPals();
  const generate = useServerFn(generateStarPalStory);
  const [loading, setLoading] = useState(true);
  const [story, setStory] = useState<{ cards: string[]; sticker: string } | null>(null);
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (!pet) return;
    const actions = pet.completed
      .map((k) => CARE_CARDS.find((c) => c.key === k)?.label ?? "")
      .filter(Boolean);
    generate({
      data: {
        petName: pet.name,
        petSpecies: pet.species,
        completedActions: actions,
        communityQuest: COMMUNITY_QUEST.name,
      },
    })
      .then((r) => setStory(r))
      .catch(() => {
        setStory({
          cards: [
            `${pet.name} stepped softly into the Singing Meadow.`,
            `A shy star appeared in the mist, asking gently for help.`,
            `Together they hummed and the meadow bloomed. ✨`,
          ],
          sticker: "Meadow Bell 🔔",
        });
      })
      .finally(() => setLoading(false));
  }, [pet, generate]);

  if (!pet) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-twilight-deep/80 backdrop-blur-md p-4">
      <div className="glass-card rounded-[2rem] p-6 max-w-md w-full">
        <div className="flex items-center gap-3 mb-4">
          <Pet species={pet.species} stage={pet.evolutionStage} size={64} glow />
          <div>
            <div className="text-xs uppercase tracking-wider text-stardust font-bold">
              A story for you
            </div>
            <div className="font-display text-lg">{pet.name}'s Adventure</div>
          </div>
        </div>

        {loading || !story ? (
          <div className="py-12 text-center">
            <div className="inline-block animate-glow text-4xl">✨</div>
            <div className="text-muted-foreground mt-2 text-sm">
              {pet.name} is dreaming up tonight's story…
            </div>
          </div>
        ) : step < story.cards.length ? (
          <>
            <div className="rounded-2xl bg-twilight/40 p-5 min-h-[140px] font-display leading-relaxed">
              {story.cards[step]}
            </div>
            <div className="mt-2 flex justify-center gap-1.5">
              {story.cards.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-all ${i === step ? "w-6 bg-stardust" : i < step ? "w-1.5 bg-meadow" : "w-1.5 bg-white/20"}`}
                />
              ))}
            </div>
            <button
              onClick={() => setStep((s) => s + 1)}
              className="btn-magical w-full mt-5"
            >
              {step < story.cards.length - 1 ? "Turn the page →" : "See what you unlocked"}
            </button>
          </>
        ) : (
          <div className="text-center py-4">
            <div className="text-6xl mb-3 animate-float">🎁</div>
            <div className="font-display text-xl mb-1">You unlocked</div>
            <div className="text-stardust font-bold text-2xl mb-5">{story.sticker}</div>
            <button onClick={onClose} className="btn-magical w-full">
              Back to {pet.name}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
