import type { CareCard, KindnessTemplate, PetSpecies } from "./types";

export const CARE_CARDS: CareCard[] = [
  {
    key: "water",
    label: "Sip some water",
    icon: "💧",
    stardust: 5,
    stat: "hydration",
    copy: "Your StarPal is thirsty too.",
    doneCopy: "Cool, fresh magic flows in.",
  },
  {
    key: "breathing",
    label: "One calm breath",
    icon: "🌬️",
    stardust: 8,
    stat: "calm",
    copy: "Breathe in… and slowly out.",
    doneCopy: "A gentle breeze settles around you.",
  },
  {
    key: "medicine",
    label: "Take your medicine",
    icon: "💊",
    stardust: 15,
    stat: "energy",
    copy: "You're the hero of this story.",
    doneCopy: "Brave move. Stardust pours in.",
  },
  {
    key: "stretch",
    label: "Stretch & move",
    icon: "🤸",
    stardust: 10,
    stat: "strength",
    copy: "Wiggle your fingers and toes.",
    doneCopy: "Your StarPal does a little flip.",
  },
  {
    key: "mood",
    label: "Mood check-in",
    icon: "🌤️",
    stardust: 5,
    stat: "heart",
    copy: "How is your weather today?",
    doneCopy: "Thanks for telling your StarPal.",
  },
  {
    key: "outside",
    label: "A breath of outside",
    icon: "🌳",
    stardust: 8,
    stat: "joy",
    copy: "Even a window counts.",
    doneCopy: "Sunlight in your pocket.",
  },
];

export const PETS: Record<
  PetSpecies,
  { name: string; emoji: string; aura: string; tagline: string; suggested: string }
> = {
  lumi: {
    name: "Lumi",
    emoji: "🦊",
    aura: "from-yellow-200/40 to-orange-300/40",
    tagline: "A tiny fox of light who hums when happy.",
    suggested: "Lumi",
  },
  mosshop: {
    name: "Mosshop",
    emoji: "🐸",
    aura: "from-green-200/40 to-emerald-300/40",
    tagline: "A soft forest friend who loves quiet mornings.",
    suggested: "Mossy",
  },
  tidepup: {
    name: "Tidepup",
    emoji: "🦭",
    aura: "from-sky-200/40 to-blue-300/40",
    tagline: "A bubbly sea pup who collects calm waves.",
    suggested: "Bubbles",
  },
};

export const KINDNESS: KindnessTemplate[] = [
  { key: "brave", text: "You're brave.", emoji: "🌟" },
  { key: "see", text: "I see you.", emoji: "💛" },
  { key: "hug", text: "Sending a hug.", emoji: "🤗" },
  { key: "notalone", text: "You're not alone.", emoji: "🫂" },
  { key: "tomorrow", text: "Tomorrow is new.", emoji: "🌅" },
  { key: "light", text: "Your light is real.", emoji: "✨" },
];

export const MOOD_CLOUDS = [
  { mood: "sunny", count: 412, color: "oklch(0.92 0.12 85)" },
  { mood: "rainbow", count: 287, color: "oklch(0.85 0.14 320)" },
  { mood: "cloudy", count: 156, color: "oklch(0.82 0.04 250)" },
  { mood: "rainy", count: 74, color: "oklch(0.75 0.08 240)" },
];

export const COMMUNITY_QUEST = {
  name: "The Singing Meadow",
  scene: "🌸🌼🌷",
  baseProgress: 0.84,
  goal: 100000,
};

export const FALLBACK_STORY = {
  cards: [
    "Your StarPal stepped into the Singing Meadow at dawn. A soft fog had tucked the flowers in for an extra-long sleep. A tiny silver bell chimed somewhere in the mist, asking quietly for help.",
    "Your StarPal took one slow breath — in, and out — and the fog parted into a gentle path. At the end of it sat a shy little star who had lost their song, blinking up with hopeful eyes.",
    "Together they hummed a tune as warm as morning toast, and one by one the meadow flowers opened their eyes. The little star pinned a tiny Meadow Bell to your StarPal's collar. ✨ You unlocked: Meadow Bell.",
  ],
  sticker: "Meadow Bell 🔔",
};
