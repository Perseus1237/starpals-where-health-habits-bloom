import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { useStarPals } from "@/lib/starpals/store";
import { CARE_CARDS } from "@/lib/starpals/data";
import { Pet } from "@/components/starpals/Pet";
import { Stardust } from "@/components/starpals/Stardust";
import { CareCard } from "@/components/starpals/CareCard";
import { CelebrationModal } from "@/components/starpals/CelebrationModal";
import { CommunityQuest } from "@/components/starpals/CommunityQuest";
import { MoodSky } from "@/components/starpals/MoodSky";
import { StoryAdventure } from "@/components/starpals/StoryAdventure";
import type { ReviewQuest } from "@/lib/starpals/types";

export const Route = createFileRoute("/home")({
  head: () => ({ meta: [{ title: "Your StarPal's habitat" }] }),
  component: Home,
});

function Home() {
  const {
    pet,
    childName,
    communityProgress,
    approvedQuests,
    completedReviewQuestIds,
    completeCare,
    completeApprovedQuest,
    reset,
  } = useStarPals();
  const navigate = useNavigate();
  const [celebration, setCelebration] = useState<{ earned: number; msg: string } | null>(null);
  const [storyOpen, setStoryOpen] = useState(false);
  const [showConstellation, setShowConstellation] = useState(false);

  useEffect(() => {
    if (!pet) navigate({ to: "/onboarding" });
  }, [pet, navigate]);

  const todaysCards = useMemo(() => CARE_CARDS.slice(0, 4), []);
  const approvedQuestCount = approvedQuests.length;
  const completedApprovedQuestCount = approvedQuests.filter((quest) =>
    completedReviewQuestIds.includes(quest.id),
  ).length;
  const completedCount = (pet?.completed.length ?? 0) + completedApprovedQuestCount;
  const totalQuestCount = todaysCards.length + approvedQuestCount;
  const canStory = completedCount >= 2;

  if (!pet) return null;

  if (showConstellation) {
    return (
      <Constellation
        petName={pet.name}
        onReset={() => {
          reset();
          navigate({ to: "/" });
        }}
      />
    );
  }

  return (
    <main className="relative min-h-screen px-4 py-6 max-w-2xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">
            Hi {childName} ✦
          </div>
          <div className="font-display text-lg">{pet.name}'s habitat</div>
        </div>
        <div className="flex gap-2">
          <Link
            to="/parent"
            className="text-xs glass-card rounded-full px-3 py-1.5 hover:bg-white/10"
          >
            👀 Parent
          </Link>
          <button
            onClick={() => {
              reset();
              navigate({ to: "/" });
            }}
            className="text-xs glass-card rounded-full px-3 py-1.5 hover:bg-white/10"
            title="Reset demo"
          >
            ↻
          </button>
        </div>
      </div>

      {/* Pet */}
      <div className="relative glass-card rounded-3xl p-6 mb-4 text-center overflow-hidden">
        <div className="absolute top-3 right-3">
          <Stardust value={pet.stardust} />
        </div>
        <Pet
          species={pet.species}
          stage={pet.evolutionStage}
          size={200}
          glow={pet.evolutionStage >= 1}
          bouncing
        />
        <div className="font-display text-2xl mt-2">{pet.name}</div>
        <div className="text-sm text-muted-foreground">
          {pet.evolutionStage === 0 && "feels cozy and safe."}
          {pet.evolutionStage === 1 && "is glowing because of you. ✨"}
          {pet.evolutionStage === 2 && "is radiant. You did this together. 🌟"}
        </div>
      </div>

      {/* Quest */}
      <div className="mb-4">
        <div className="flex items-baseline justify-between mb-2 px-1">
          <h2 className="font-display text-xl">Today's Quest</h2>
          <span className="text-xs text-muted-foreground">
            {completedCount} / {totalQuestCount}
          </span>
        </div>
        <div className="space-y-2">
          {todaysCards.map((card) => (
            <CareCard
              key={card.key}
              card={card}
              done={pet.completed.includes(card.key)}
              onComplete={() => {
                const earned = completeCare(card.key);
                if (earned > 0) setCelebration({ earned, msg: card.doneCopy });
              }}
            />
          ))}

          {approvedQuests.map((quest) => {
            const done = completedReviewQuestIds.includes(quest.id);
            return (
              <ApprovedQuestCard
                key={quest.id}
                quest={quest}
                petName={pet.name}
                done={done}
                onComplete={() => {
                  const earned = completeApprovedQuest(quest.id);
                  if (earned > 0) {
                    setCelebration({
                      earned,
                      msg: "A parent-approved care quest joined today's constellation.",
                    });
                  }
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Community */}
      <div className="mb-4">
        <CommunityQuest progress={communityProgress} />
      </div>

      {/* Mood */}
      <div className="mb-4">
        <MoodSky />
      </div>

      {/* Story + Constellation CTA */}
      <div className="space-y-3 mb-10">
        <button
          onClick={() => setStoryOpen(true)}
          disabled={!canStory}
          className={`w-full rounded-3xl p-5 text-left transition-all ${
            canStory
              ? "bg-gradient-to-br from-twilight via-heart/60 to-dawn/60 hover:scale-[1.01] cursor-pointer shadow-[var(--shadow-pet)]"
              : "glass-card opacity-60"
          }`}
        >
          <div className="flex items-center gap-4">
            <div className="text-4xl animate-float">📖</div>
            <div className="flex-1">
              <div className="font-display text-lg font-bold">{pet.name} has a story for you</div>
              <div className="text-sm text-white/80">
                {canStory
                  ? "A personalized adventure, just for tonight."
                  : "Complete 2 quests to unlock."}
              </div>
            </div>
            <div className="text-xl">→</div>
          </div>
        </button>

        {completedCount >= 3 && (
          <button
            onClick={() => setShowConstellation(true)}
            className="w-full btn-magical animate-glow"
          >
            ✦ See your star in the sky
          </button>
        )}
      </div>

      {celebration && (
        <CelebrationModal
          open
          earned={celebration.earned}
          message={celebration.msg}
          onClose={() => setCelebration(null)}
        />
      )}

      {storyOpen && <StoryAdventure onClose={() => setStoryOpen(false)} />}
    </main>
  );
}

function ApprovedQuestCard({
  quest,
  petName,
  done,
  onComplete,
}: {
  quest: ReviewQuest;
  petName: string;
  done: boolean;
  onComplete: () => void;
}) {
  const childQuest = quest.childQuest.replace(/\bLumi\b/g, petName);

  return (
    <button
      onClick={onComplete}
      disabled={done}
      className={`w-full rounded-3xl p-4 text-left transition-all ${
        done
          ? "bg-meadow/20 border border-meadow/30"
          : "glass-card hover:scale-[1.01] hover:bg-white/10"
      }`}
    >
      <div className="flex items-center gap-4">
        <div
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-2xl ${
            done ? "bg-meadow/25" : "bg-stardust/15"
          }`}
        >
          {done ? "✓" : "✨"}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <div className="font-display text-lg leading-tight">{childQuest}</div>
            <span className="rounded-full bg-calm/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-calm">
              Parent approved
            </span>
          </div>
          <div className="mt-1 text-sm text-muted-foreground">
            {done ? "Your care team quest is complete." : "A grown-up added this to today."}
          </div>
        </div>
        <div className="shrink-0 text-right">
          <div className="font-bold text-stardust">+{quest.stardust}</div>
          <div className="text-[10px] uppercase tracking-wider text-muted-foreground">dust</div>
        </div>
      </div>
    </button>
  );
}

function Constellation({ petName, onReset }: { petName: string; onReset: () => void }) {
  const stars = useMemo(
    () =>
      Array.from({ length: 80 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 2,
      })),
    [],
  );

  return (
    <main className="fixed inset-0 flex flex-col items-center justify-center text-center px-6 bg-twilight-deep overflow-hidden">
      <div className="absolute inset-0">
        {stars.map((s) => (
          <span
            key={s.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.size,
              height: s.size,
              opacity: 0.4 + Math.random() * 0.5,
              animation: `twinkle ${2 + s.delay}s ease-in-out infinite`,
              animationDelay: `${s.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-md">
        <div className="relative inline-block mb-8">
          <div className="text-7xl animate-ignite">⭐</div>
          <div className="absolute inset-0 rounded-full bg-stardust/40 blur-3xl animate-glow" />
        </div>

        <h1 className="font-display text-4xl sm:text-5xl mb-3 leading-tight">Every star counts.</h1>
        <p className="text-muted-foreground text-lg mb-2">Welcome to the sky,</p>
        <p className="font-display text-2xl text-stardust mb-10">{petName} ✦</p>

        <button onClick={onReset} className="btn-magical">
          Begin again
        </button>
      </div>
    </main>
  );
}
