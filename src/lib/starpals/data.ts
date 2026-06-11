import type { CareCard, KindnessTemplate, PetSpecies, ReviewQuest } from "./types";

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
    label: "Power up your StarPal",
    icon: "⭐",
    stardust: 15,
    stat: "energy",
    copy: "Ask a grown-up when it is time.",
    doneCopy: "A bright morning glow arrives.",
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

export const AI_TRANSLATION_EXAMPLE = {
  input:
    "Take controller medication every morning. Use spacer. Review rescue plan when symptoms worsen.",
  aiDrafts: [
    "Power up Lumi before breakfast",
    "Practice the tiny breathing tool",
    "Ask a grown-up for the bright-star plan",
  ],
  safetyOutputs: ["Dose hidden from child", "Parent approval required", "Medical advice blocked"],
};

export const SEEDED_REVIEW_QUESTS: ReviewQuest[] = [
  {
    id: "ai-controller-medicine",
    source: "FHIR import",
    clinicalInstruction: "Take controller medication every morning.",
    aiDraft: "Power up Lumi before breakfast.",
    childQuest: "Power up Lumi before breakfast.",
    category: "medicine",
    cadence: "Every morning before breakfast",
    stardust: 15,
    parentNote:
      "Controller medication remains caregiver-facing; the child sees only a morning power-up.",
    safetyOutputs: [
      "Dose hidden from child",
      "Parent approval required",
      "No medication changes suggested",
    ],
    status: "staged",
  },
  {
    id: "ai-spacer-tool",
    source: "AI draft",
    clinicalInstruction: "Use spacer.",
    aiDraft: "Practice the tiny breathing tool.",
    childQuest: "Practice the tiny breathing tool.",
    category: "breathing",
    cadence: "After the morning power-up, twice weekly",
    stardust: 8,
    parentNote: "Technique practice is framed as play and does not mention medication details.",
    safetyOutputs: [
      "Technique-only language",
      "Parent approval required",
      "No diagnosis or dosing exposed",
    ],
    status: "staged",
  },
  {
    id: "ai-rescue-plan",
    source: "Epic MyChart",
    clinicalInstruction: "Review rescue plan when symptoms worsen.",
    aiDraft: "Ask a grown-up for the bright-star plan.",
    childQuest: "Ask a grown-up for the bright-star plan.",
    category: "breathing",
    cadence: "Only when symptoms feel bigger than usual",
    stardust: 10,
    parentNote: "The child prompt routes to an adult instead of giving symptom instructions.",
    safetyOutputs: [
      "Medical advice blocked",
      "Parent action required",
      "Emergency or triage language hidden from child",
    ],
    status: "staged",
  },
  {
    id: "ai-sleep-wind-down",
    source: "Oracle Health",
    clinicalInstruction: "Support a consistent sleep routine on school nights.",
    aiDraft: "Dim the stars and choose one calm story.",
    childQuest: "Dim the stars and choose one calm story.",
    category: "mood",
    cadence: "Sunday through Thursday at bedtime",
    stardust: 6,
    parentNote: "Wellness add-on, separated from active clinical tasks.",
    safetyOutputs: [
      "Wellness suggestion labeled",
      "Parent approval required",
      "No clinical claim attached",
    ],
    status: "staged",
  },
];

export const MARKET_PROOF_POINTS = [
  {
    value: "26.2%",
    label: "U.S. children with a special health care need",
    body: "HRSA NSCH 2022-2023 data anchors the demand reality at more than 19 million children.",
    source: "StarPals venture analysis",
  },
  {
    value: "50%+",
    label: "Pediatric nonadherence is common",
    body: "Pediatric psychology guidance says roughly half of children and more adolescents do not consistently follow chronic-care regimens.",
    source: "StarPals business analysis",
  },
  {
    value: "200+",
    label: "Children's hospitals as a focused channel",
    body: "The Children's Hospital Association creates a concentrated institutional starting point for pilots.",
    source: "StarPals business analysis",
  },
  {
    value: "7-13",
    label: "Target age band",
    body: "Old enough for habit loops and story agency, young enough that parent support and child-safe language matter.",
    source: "Product wedge",
  },
];

export const COMPETITOR_COMPARISON = [
  {
    category: "Adult reminders",
    example: "Medication reminders and refill prompts",
    gap: "Not child-native and weak on parent-child conflict.",
  },
  {
    category: "Disease-specific apps",
    example: "Condition education, trackers, and communities",
    gap: "Useful but siloed by diagnosis and often not built around playful daily engagement.",
  },
  {
    category: "Child wellness games",
    example: "Emotion regulation or general well-being play",
    gap: "Engaging, but rarely tied to care-plan provenance, approval, and provider signal.",
  },
  {
    category: "Provider portals",
    example: "Chart access, messages, after-visit summaries",
    gap: "Clinically useful but not a child-facing habit loop.",
  },
  {
    category: "StarPals",
    example: "Child-safe quests plus caregiver and provider workflow",
    gap: "Combines engagement, consent, approval, and between-visit signal.",
  },
];

export const HARD_TO_COPY = [
  "Child-safe quest translation layer",
  "Parent approval and consent workflow",
  "Privacy-preserving community mechanics",
  "Cross-condition care-card model",
  "Future FHIR/EMR integration path",
  "Engagement data loop across child, parent, and provider",
];

export const FALLBACK_STORY = {
  cards: [
    "Your StarPal stepped into the Singing Meadow at dawn. A soft fog had tucked the flowers in for an extra-long sleep. A tiny silver bell chimed somewhere in the mist, asking quietly for help.",
    "Your StarPal took one slow breath — in, and out — and the fog parted into a gentle path. At the end of it sat a shy little star who had lost their song, blinking up with hopeful eyes.",
    "Together they hummed a tune as warm as morning toast, and one by one the meadow flowers opened their eyes. The little star pinned a tiny Meadow Bell to your StarPal's collar. ✨ You unlocked: Meadow Bell.",
  ],
  sticker: "Meadow Bell 🔔",
};
