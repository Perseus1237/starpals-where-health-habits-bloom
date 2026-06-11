import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { CareCardKey, PetSpecies, PetState, ReviewQuest } from "./types";
import { CARE_CARDS, COMMUNITY_QUEST, SEEDED_REVIEW_QUESTS } from "./data";

interface StarPalsState {
  pet: PetState | null;
  childName: string;
  kindnessSent: string[];
  communityBoost: number; // extra stardust child has added today
  reviewQuests: ReviewQuest[];
  completedReviewQuestIds: string[];
  providerExportReady: boolean;
}

interface StarPalsContextValue extends StarPalsState {
  createPet: (species: PetSpecies, name: string, childName: string) => void;
  completeCare: (key: CareCardKey) => number;
  completeApprovedQuest: (id: string) => number;
  stageReviewQuests: (ids?: string[]) => void;
  approveReviewQuest: (id: string) => void;
  rejectReviewQuest: (id: string) => void;
  setProviderExportReady: (ready: boolean) => void;
  sendKindness: (key: string) => void;
  reset: () => void;
  communityProgress: number;
  approvedQuests: ReviewQuest[];
}

const KEY = "starpals_v1";
const Ctx = createContext<StarPalsContextValue | null>(null);

const initial: StarPalsState = {
  pet: null,
  childName: "",
  kindnessSent: [],
  communityBoost: 0,
  reviewQuests: SEEDED_REVIEW_QUESTS,
  completedReviewQuestIds: [],
  providerExportReady: false,
};

function normalizeState(raw: Partial<StarPalsState>): StarPalsState {
  const pet =
    raw.pet && Array.isArray(raw.pet.completed)
      ? {
          ...raw.pet,
          completed: raw.pet.completed.filter((key): key is CareCardKey =>
            CARE_CARDS.some((card) => card.key === key),
          ),
        }
      : null;

  const reviewQuests = mergeReviewQuests(raw.reviewQuests);
  const reviewQuestIds = new Set(reviewQuests.map((quest) => quest.id));

  return {
    pet,
    childName: typeof raw.childName === "string" ? raw.childName : "",
    kindnessSent: Array.isArray(raw.kindnessSent) ? raw.kindnessSent : [],
    communityBoost: typeof raw.communityBoost === "number" ? raw.communityBoost : 0,
    reviewQuests,
    completedReviewQuestIds: Array.isArray(raw.completedReviewQuestIds)
      ? raw.completedReviewQuestIds.filter((id) => reviewQuestIds.has(id))
      : [],
    providerExportReady:
      typeof raw.providerExportReady === "boolean" ? raw.providerExportReady : false,
  };
}

function mergeReviewQuests(saved?: ReviewQuest[]) {
  const merged = new Map<string, ReviewQuest>(
    SEEDED_REVIEW_QUESTS.map((quest) => [quest.id, quest]),
  );

  if (Array.isArray(saved)) {
    for (const quest of saved) {
      if (!quest?.id) continue;
      const seeded = merged.get(quest.id);
      merged.set(quest.id, seeded ? { ...seeded, ...quest } : quest);
    }
  }

  return Array.from(merged.values());
}

function nextStage(stardust: number) {
  return (stardust >= 35 ? 2 : stardust >= 15 ? 1 : 0) as 0 | 1 | 2;
}

export function StarPalsProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<StarPalsState>(initial);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setState(normalizeState(JSON.parse(raw)));
    } catch {
      /* noop */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(state));
    } catch {
      /* noop */
    }
  }, [state, hydrated]);

  const value = useMemo<StarPalsContextValue>(() => {
    const communityProgress = Math.min(
      0.999,
      COMMUNITY_QUEST.baseProgress + state.communityBoost / COMMUNITY_QUEST.goal,
    );
    const approvedQuests = state.reviewQuests.filter((quest) => quest.status === "approved");

    return {
      ...state,
      communityProgress,
      approvedQuests,
      createPet: (species, name, childName) =>
        setState((current) => {
          const reviewQuests = mergeReviewQuests(current.reviewQuests);
          return {
            ...current,
            pet: {
              species,
              name: name.trim() || "Star",
              stardust: 0,
              evolutionStage: 0,
              completed: [],
            },
            childName: childName.trim() || "friend",
            kindnessSent: [],
            communityBoost: 0,
            reviewQuests,
            completedReviewQuestIds: [],
          };
        }),
      completeCare: (key) => {
        const card = CARE_CARDS.find((c) => c.key === key);
        if (!card) return 0;
        let earned = 0;
        setState((s) => {
          if (!s.pet) return s;
          if (s.pet.completed.includes(key)) return s;
          earned = card.stardust;
          const total = s.pet.stardust + earned;
          return {
            ...s,
            pet: {
              ...s.pet,
              stardust: total,
              evolutionStage: nextStage(total),
              completed: [...s.pet.completed, key],
            },
            communityBoost: s.communityBoost + earned,
          };
        });
        return earned;
      },
      completeApprovedQuest: (id) => {
        let earned = 0;
        setState((s) => {
          if (!s.pet) return s;
          if (s.completedReviewQuestIds.includes(id)) return s;

          const quest = s.reviewQuests.find((item) => item.id === id && item.status === "approved");
          if (!quest) return s;

          earned = quest.stardust;
          const total = s.pet.stardust + earned;
          return {
            ...s,
            pet: {
              ...s.pet,
              stardust: total,
              evolutionStage: nextStage(total),
            },
            completedReviewQuestIds: [...s.completedReviewQuestIds, id],
            communityBoost: s.communityBoost + earned,
          };
        });
        return earned;
      },
      stageReviewQuests: (ids) =>
        setState((s) => {
          const selected = ids?.length
            ? SEEDED_REVIEW_QUESTS.filter((quest) => ids.includes(quest.id))
            : SEEDED_REVIEW_QUESTS;
          const current = new Map(s.reviewQuests.map((quest) => [quest.id, quest]));

          for (const quest of selected) {
            const existing = current.get(quest.id);
            current.set(quest.id, {
              ...quest,
              ...existing,
              status: existing?.status === "approved" ? "approved" : "staged",
            });
          }

          return { ...s, reviewQuests: Array.from(current.values()) };
        }),
      approveReviewQuest: (id) =>
        setState((s) => ({
          ...s,
          reviewQuests: s.reviewQuests.map((quest) =>
            quest.id === id ? { ...quest, status: "approved" } : quest,
          ),
        })),
      rejectReviewQuest: (id) =>
        setState((s) => ({
          ...s,
          reviewQuests: s.reviewQuests.map((quest) =>
            quest.id === id ? { ...quest, status: "rejected" } : quest,
          ),
          completedReviewQuestIds: s.completedReviewQuestIds.filter((questId) => questId !== id),
        })),
      setProviderExportReady: (ready) => setState((s) => ({ ...s, providerExportReady: ready })),
      sendKindness: (key) => setState((s) => ({ ...s, kindnessSent: [...s.kindnessSent, key] })),
      reset: () => {
        try {
          localStorage.removeItem(KEY);
        } catch {
          /* noop */
        }
        setState(initial);
      },
    };
  }, [state]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStarPals() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useStarPals must be used inside StarPalsProvider");
  return ctx;
}
