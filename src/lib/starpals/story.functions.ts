import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { generateText } from "ai";
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";

const Input = z.object({
  petName: z.string().min(1).max(40),
  petSpecies: z.enum(["lumi", "mosshop", "tidepup"]),
  completedActions: z.array(z.string()).max(10),
  communityQuest: z.string().min(1).max(80),
});

const SPECIES_HINT: Record<string, string> = {
  lumi: "a tiny glowing fox of light",
  mosshop: "a soft forest creature, half-frog half-mushroom",
  tidepup: "a bubbly sea pup made of friendly waves",
};

const BANNED = [
  /\bdoctor\b/i,
  /\bhospital\b/i,
  /\bmedicine\b/i,
  /\bmedical\b/i,
  /\bsick\b/i,
  /\bdisease\b/i,
  /\bdiagnos/i,
  /\bsymptom/i,
  /\bdie\b/i,
  /\bblood\b/i,
];

const FALLBACK = (petName: string, quest: string) => ({
  cards: [
    `${petName} stepped into ${quest} at dawn. A soft fog had tucked the flowers in for extra sleep. A tiny silver bell chimed somewhere in the mist, asking quietly for help.`,
    `${petName} took one slow breath — in, and out — and the fog parted into a gentle path. At the end of it sat a shy little star who had lost their song.`,
    `Together they hummed a tune as warm as morning toast, and one by one the meadow flowers opened their eyes. The shy star pinned a tiny Meadow Bell to ${petName}'s collar. ✨`,
  ],
  sticker: "Meadow Bell 🔔",
  source: "fallback" as const,
});

export const generateStarPalStory = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => Input.parse(d))
  .handler(async ({ data }) => {
    const apiKey = process.env.AI_API_KEY ?? process.env.OPENAI_API_KEY;
    if (!apiKey) return FALLBACK(data.petName, data.communityQuest);

    const speciesHint = SPECIES_HINT[data.petSpecies] ?? "a tiny magical creature";
    const actions = data.completedActions.join(", ") || "a moment of stillness";

    const prompt = `Write a 3-part bedtime-style fantasy micro-story for a child age 7–13.
Hero: ${data.petName}, ${speciesHint}.
Today the hero was powered by: ${actions}.
The world quest is: ${data.communityQuest}.

Rules:
- Never mention medicine, doctors, hospitals, illness, symptoms, or treatments.
- Never mention the child being sick.
- Positive and gentle. No scary monsters — only soft challenges like fog, sleepy clouds, or shy stars.
- Each part is 2–3 sentences (about 60 words).
- End the third part happily with a sticker reward.

Return ONLY valid JSON, no markdown, no commentary, in this exact shape:
{"cards":["...","...","..."],"sticker":"Name of a cute reward 🔔"}`;

    try {
      const provider = createOpenAICompatible({
        name: "openai-compatible",
        baseURL: process.env.AI_PROVIDER_BASE_URL ?? "https://api.openai.com/v1",
        headers: { Authorization: `Bearer ${apiKey}` },
      });

      const { text } = await generateText({
        model: provider("gpt-4.1-mini"),
        prompt,
      });

      const cleaned = text.replace(/```json|```/g, "").trim();
      const match = cleaned.match(/\{[\s\S]*\}/);
      if (!match) return FALLBACK(data.petName, data.communityQuest);

      const parsed = JSON.parse(match[0]) as { cards?: unknown; sticker?: unknown };
      if (
        !Array.isArray(parsed.cards) ||
        parsed.cards.length !== 3 ||
        !parsed.cards.every((c) => typeof c === "string" && c.length < 600) ||
        typeof parsed.sticker !== "string"
      ) {
        return FALLBACK(data.petName, data.communityQuest);
      }

      const joined = parsed.cards.join(" ");
      if (BANNED.some((re) => re.test(joined))) {
        return FALLBACK(data.petName, data.communityQuest);
      }

      return {
        cards: parsed.cards as string[],
        sticker: parsed.sticker,
        source: "ai" as const,
      };
    } catch (err) {
      console.error("[starpals.story] gateway error", err);
      return FALLBACK(data.petName, data.communityQuest);
    }
  });
