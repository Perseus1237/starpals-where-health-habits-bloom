export type PetSpecies = "lumi" | "mosshop" | "tidepup";

export type CareCardKey =
  | "medicine"
  | "water"
  | "stretch"
  | "breathing"
  | "mood"
  | "outside";

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
