export type PetSpecies = "lumi" | "mosshop" | "tidepup";

export type CareCardKey = "medicine" | "water" | "stretch" | "breathing" | "mood" | "outside";

export interface CareCard {
  key: CareCardKey;
  label: string;
  icon: string;
  stardust: number;
  stat: "energy" | "hydration" | "strength" | "calm" | "heart" | "joy";
  copy: string;
  doneCopy: string;
}

export interface PetState {
  species: PetSpecies;
  name: string;
  stardust: number;
  evolutionStage: 0 | 1 | 2;
  completed: CareCardKey[];
}

export interface KindnessTemplate {
  key: string;
  text: string;
  emoji: string;
}

export type ReviewQuestSource = "Epic MyChart" | "Oracle Health" | "FHIR import" | "AI draft";

export type ReviewQuestStatus = "staged" | "approved" | "rejected";

export interface ReviewQuest {
  id: string;
  source: ReviewQuestSource;
  clinicalInstruction: string;
  aiDraft: string;
  childQuest: string;
  category: CareCardKey;
  cadence: string;
  stardust: number;
  parentNote: string;
  safetyOutputs: string[];
  status: ReviewQuestStatus;
}
