import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { CareCardKey, PetSpecies, PetState } from "./types";
import { CARE_CARDS, COMMUNITY_QUEST } from "./data";

interface StarPalsState {
  pet: PetState | null;
  childName: string;
  kindnessSent: string[];
  communityBoost: number; // extra stardust child has added today
}

interface StarPalsContextValue extends StarPalsState {
  createPet: (species: PetSpecies, name: string, childName: string) => void;
  completeCare: (key: CareCardKey) => number;
  sendKindness: (key: string) => void;
  reset: () => void;
  communityProgress: number;
}

const KEY = "starpals_v1";
const Ctx = createContext<StarPalsContextValue | null>(null);

const initial: StarPalsState = {
  pet: null,
  childName: "",
  kindnessSent: [],
  communityBoost: 0,
};

export function StarPalsProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<StarPalsState>(initial);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setState(JSON.parse(raw));
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
    return {
      ...state,
      communityProgress,
      createPet: (species, name, childName) =>
        setState({
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
          const stage = total >= 35 ? 2 : total >= 15 ? 1 : 0;
          return {
            ...s,
            pet: {
              ...s.pet,
              stardust: total,
              evolutionStage: stage as 0 | 1 | 2,
              completed: [...s.pet.completed, key],
            },
            communityBoost: s.communityBoost + earned,
          };
        });
        return earned;
      },
      sendKindness: (key) =>
        setState((s) => ({ ...s, kindnessSent: [...s.kindnessSent, key] })),
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
