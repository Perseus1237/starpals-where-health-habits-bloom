# StarPals — Product Requirements Document
*A hackathon-ready PRD for a 24–48 hour demo build*

> **Positioning:** StarPals is Duolingo meets Tamagotchi for pediatric chronic care — a game that helps kids build daily health habits through virtual pets, cooperative quests, and safe peer support.

---

## 1. Product Name & Tagline

**Name:** StarPals

**Tagline options:**
1. **"Care for a pet. Care for yourself."** ← *recommended*
2. "Where brave kids and tiny creatures grow up together."
3. "Every star counts."
4. "A magical world that grows when you do."
5. "Tiny quests. Big hearts. Brave kids."

The recommended tagline reframes chronic care as an act of love — the child isn't being managed, they're caring for someone who needs them. That emotional inversion is the whole product.

---

## 2. One-Sentence Pitch

**StarPals is a child-native game for kids with chronic health needs that turns daily care routines — medicine, PT, hydration, mood, breathing — into Stardust that powers a magical pet and a shared world other kids are building too, so kids feel like heroes instead of patients, parents stop nagging, and clinicians finally get signal between visits.**

Why now: post-COVID pediatric mental health crisis + a generation of kids fluent in cozy games (Animal Crossing, Pokémon, Roblox) + the first wave of safe, structured LLMs that can generate personalized stories without dispensing medical advice.

---

## 3. Problem Statement — The Pediatric Chronic-Care Engagement Gap

Roughly **1 in 4 U.S. children** live with a chronic health condition — asthma, diabetes, cystic fibrosis, IBD, ADHD, anxiety, cancer survivorship, rare disease, post-transplant care. They are expected to perform a small, relentless choreography of daily tasks: a puff, a pill, a stretch, a glass of water, a mood check, a breathing exercise, an appointment.

The clinical system optimizes for adherence. The child experiences something very different:

- **Routines are repetitive and boring.** Adult-designed checklists collapse on contact with an 8-year-old.
- **Parents become the nagging system.** The relationship turns into compliance theater — and the child learns that their illness is the thing that makes the people they love stressed.
- **Kids feel isolated.** Their friends don't have a 7pm med. They can't talk about it without feeling weird, pitied, or singled out.
- **Kids feel defined by their diagnosis** instead of being a kid who happens to also have one.
- **Clinicians fly blind.** They see a 15-minute snapshot every 3 months and have no idea what the 89 days in between actually felt like.
- **Self-management is a developmental skill** that has to be built slowly between ages 7–14, and there is no scaffolding for it. Either the parent does everything, or the child is suddenly handed a pill bottle at 13.

The result is a generation of kids who associate their own care with shame, boredom, and parental conflict — patterns that calcify into nonadherent, anxious adults.

**The gap isn't information. It isn't reminders. It's *meaning*.** Kids do hard things every day in games. They don't do them on a chore chart.

---

## 4. Target Users

### Primary — "Maya," age 9, lives with a chronic condition
- **Needs:** to feel like a normal kid; to have something that's *hers*; to feel competent.
- **Fears:** being seen as sick; getting in trouble for forgetting; her parents being sad.
- **Motivations:** cute things, caring for something smaller than her, surprise, story, friends.
- **Success looks like:** she opens the app on her own. She tells her mom about her pet, not her meds.

### Secondary — "Jess," parent/caregiver
- **Needs:** lower-friction routines, gentle visibility, confidence her kid is okay between visits.
- **Fears:** becoming the warden; missing something serious; surveillance creeping into the relationship.
- **Motivations:** less conflict at 7pm, a calmer kid, evidence she can bring to the care team.
- **Success looks like:** she stops asking "did you take it?" because she already knows, calmly.

### Tertiary — pediatric clinic / hospital program / therapist
- **Needs:** at-home engagement data, early signal on decline, a tool to *prescribe*.
- **Fears:** another dashboard nobody uses, liability, kids being harmed by social features.
- **Motivations:** better outcomes, lower readmission, defensible data for value-based contracts.
- **Success looks like:** they hand a card to families at discharge and 60% are still active at week 8.

---

## 5. Product Goals

| Goal | Description |
|---|---|
| **Child engagement** | A child wants to open StarPals tomorrow. |
| **Routine completion** | Care actions completed go up vs. baseline, without nagging. |
| **Safe social connection** | Kids feel "I'm not the only one" without exposing any private info. |
| **Parent visibility** | Caregiver sees a calm recap, never a surveillance feed. |
| **Demo clarity** | A judge gets it in 30 seconds and feels something in 3 minutes. |
| **Platform potential** | The same engagement layer can host any condition-specific Care Card pack — a real venture-scale wedge into pediatric care. |

---

## 6. Non-Goals

For the demo and the first version, StarPals is explicitly **not**:

- A medical device or diagnostic tool.
- A replacement for doctors, therapists, or medication instructions.
- Open social media. There is no follower graph, no feed.
- A free-text chat product between children.
- A collector of sensitive medical data beyond what's needed.
- A shame engine. No red Xs, no "you broke your streak," no leaderboards of sick kids.
- A streak-punishment app. Streaks are gentle and recoverable.
- An ad-supported or dark-pattern product.

---

## 7. Core Product Insight

> **Kids are not motivated by compliance dashboards. They are motivated by care, play, progress, collection, story, and belonging.**

Every chronic-care app built so far has tried to turn the child into a tiny adult: track your symptoms, log your meds, hit your streak. It fails because it is asking a 9-year-old to be project manager of their own illness.

StarPals inverts the frame. The child is not the patient — **the StarPal is.** The child is the hero, the caretaker, the one whose small daily actions keep a magical creature alive and help rebuild a shared world. The wellness action is the *fuel*, never the goal. The pet's joy is the goal. The constellation lighting up is the goal. Belonging is the goal.

Care tasks become **Stardust**. Stardust becomes **love made visible**.

---

## 8. Golden Path Demo (3–5 minutes, cinematic, build this first)

This is the spine of the hackathon. Everything else is optional.

| # | Beat | What the judge sees | Why it lands |
|---|---|---|---|
| 1 | **Magical onboarding** | Soft starfield, gentle music, a voice-y line: "A new star is being born…" | Sets tone in 5 seconds — this is not a medical app. |
| 2 | **Choose a StarPal** | Three soft clay creatures float in: Lumi (glow), Mosshop (forest), Tidepup (sea). | Immediate ownership. |
| 3 | **Name the StarPal** | Big tap-friendly input. Default suggestion. | Bonding moment. |
| 4 | **Today's Quest card** | Three Care Cards: 💧 Drink water, 🌬️ Breathing, 💊 Take medicine. | Frames the day as a quest, not a checklist. |
| 5 | **Complete 2–3 actions** | Tap card → satisfying animation → confetti of stardust flows toward pet. | Tactile, demoable, no typing. |
| 6 | **Stardust generated** | A counter fills with sparkles. | Visual reward. |
| 7 | **Pet powers up** | Pet glows, bounces, gains a small accessory or evolves a stage. | Emotional payoff. |
| 8 | **Community quest** | "Help restore the Singing Meadow — 84% there." Child contributes their stardust. | Cooperative, not competitive. |
| 9 | **Global progress bar moves** | Meadow visibly blooms a little more. Tiny silhouettes of other pets appear. | Belonging — they are not alone. |
| 10 | **Mood Clouds + send support** | "Some StarPals are having a cloudy day." Child taps a prewritten Kindness Comet: "You're brave." | Safe peer support, no chat. |
| 11 | **AI adventure story** | A 3-card illustrated mini-story starring *their* pet, referencing *their* completed actions: "Lumi, full of fresh water-magic, flew to the Singing Meadow…" Ends with a sticker reward. | The wow moment. Personalized, safe, delightful. |
| 12 | **Parent recap dashboard** | Calm pastel view: "Maya cared for Lumi today. 3 of 4 quests. Mood: hopeful 🌤️." No raw data, no red. | Demonstrates the second user. |
| 13 | **Constellation of Courage** | Camera pulls up to a night sky. Maya's star ignites among thousands of others. Soft swell. | The emotional kill shot. End of demo. |

**Demo principle:** every step must be possible with a single tap, no keyboard except the pet name. Total tap count from launch to constellation: **≤ 12 taps.**

---

## 9. Core Gameplay Loop

```
   ┌──────────────────────────────────────┐
   │  1. Do a wellness action (Care Card) │
   │  2. Earn Stardust                    │
   │  3. Feed / power up your StarPal     │
   │  4. Pet evolves, world blooms        │
   │  5. Contribute to community quest    │
   │  6. Unlock story / accessory / world │
   │  7. Tomorrow: a new gentle quest     │
   └──────────────────────────────────────┘
```

**Why it builds habit without shame:** the loop is *additive*, never subtractive. There is no penalty state. A missed day means the pet "missed you," not "you failed." Variable rewards (which story? which accessory? which evolution stage?) drive curiosity. Community progress means your effort *always* mattered, even if your pet had a small day.

---

## 10. Key Features — Prioritized

### Must-have (golden path)
1. Magical onboarding (1 screen, 1 tap)
2. Pet selection (3 options)
3. Pet naming
4. Daily Quest with 3 Care Cards
5. Stardust reward animation
6. Pet care + visible evolution
7. Community quest progress bar
8. Mood Clouds + Kindness Comet send
9. AI Adventure Story generator (with static fallback)
10. Parent recap dashboard (read-only)
11. Constellation of Courage finale

### Nice-to-have (if time)
- Inventory of accessories
- Multiple pet evolutions
- Recovery Garden plant growth
- Pet Expeditions while child is away
- Waiting Room Mini-Quest mode
- Sound design + haptics

### Future expansion
- Clinic-configured Care Card packs (asthma, T1D, CF, IBD, anxiety…)
- PT motion tracking via device camera
- Wearable integration
- Therapist dashboard
- Sibling co-op mode
- Multi-language
- Outcomes research module

---

## 11. Fun, Compelling Demo Features

| Feature | What it is | Why it wows |
|---|---|---|
| **Constellation of Courage** | Every child's progress lights one star in a global night sky | Belonging at scale, zero PII |
| **Mood Clouds** | Anonymous emotional climate of the community | "I'm not alone" without exposure |
| **Kindness Comets** | Prewritten encouragements delivered by your pet to another | Safe peer support |
| **Recovery Garden** | Care actions grow a magical plant over days | Long-arc visible progress |
| **Pet Expeditions** | Pet goes on a 4-hour quest powered by your morning routine | Reason to come back |
| **Boss Battle Against the Gloom** | Community defeats a *non-scary* cloud monster | Cooperative drama |
| **Waiting Room Mini-Quest** | 90-second quest for hospital waits | Solves a real moment |
| **StarPal Evolution** | Pets evolve based on *consistency*, not perfection | Removes shame |
| **No Shame Catch-Up** | Missed days → pet hug animation, not punishment | Defining design choice |
| **Care Cards** | Visual cards: medicine, hydration, PT, breathing, mood, appointment, rest | The atomic unit of the product |
| **Parent Magic Mirror** | Calm caregiver view | Trust without surveillance |
| **Doctor Snapshot** *(future)* | Exportable trend view | Clinic wedge |

---

## 12. Child-Friendly UX & Visual Direction

**Form factor:** mobile-first responsive web app. Works on a parent's phone or a kid's tablet.

**Interaction principles:**
- One primary action per screen.
- Big tap targets (min 56px), no hover-dependent UI.
- Card-based — kids understand cards.
- Low text density. Icons + 3–6 word labels.
- Confetti, sparkles, gentle glow — but never strobing. Respect `prefers-reduced-motion`.
- Soft haptics on completion (where supported).
- Optional voice-over reads everything aloud — emerging readers, accessibility.

**Tone of voice:** warm, curious, never clinical, never patronizing. "Your pet missed you" not "You missed a dose."

**Art direction:** soft 3D clay-render characters, pastel-magical gradients (twilight purple, dawn peach, meadow mint), floating islands, friendly creatures with big eyes and small bodies. **Inspirations (do not copy):** Pixar warmth, Animal Crossing coziness, Tamagotchi bond, Pokémon collection, Headspace calm, Duolingo loop.

**Forbidden visual vocabulary:** hospital blue, red error states, syringes, charts as primary UI, anything resembling a medical record, dark mode as default.

---

## 13. UX Screens

For each: **Purpose · Primary action · Components · Microcopy · Motion · Data · Acceptance**

### 13.1 Landing / Welcome
- **Purpose:** set magical tone in <5s.
- **Action:** tap "Begin."
- **Components:** starfield, logo, single CTA.
- **Microcopy:** *"A new star is being born. Want to meet them?"*
- **Motion:** slow drifting stars, gentle parallax.
- **Data:** none.
- **Acceptance:** loads in <2s, single visible CTA.

### 13.2 Child Onboarding
- **Purpose:** 2-question setup (age band, hello name).
- **Action:** tap age, type first name.
- **Microcopy:** *"What should we call you, brave one?"*
- **Acceptance:** completable in 15s.

### 13.3 Choose Your StarPal
- **Purpose:** ownership.
- **Components:** 3 floating creatures, tap to spotlight.
- **Microcopy:** *"Someone has been waiting for you."*
- **Motion:** creatures idle-breathe; selected one floats forward.
- **Acceptance:** child can pick in ≤2 taps.

### 13.4 Name Your StarPal
- **Microcopy:** *"They like the name __. What do you want to call them?"*
- **Acceptance:** suggestion pre-filled; one-tap accept.

### 13.5 Home / Pet Habitat
- **Purpose:** the room. Pet lives here.
- **Components:** pet center, Stardust counter, "Today's Quest" CTA, community quest peek, parent gate icon (small, top-right).
- **Motion:** pet idle animations, occasional blinks.
- **Acceptance:** Quest CTA always visible above the fold.

### 13.6 Today's Quest
- **Purpose:** present 3 Care Cards.
- **Components:** stacked cards with icon, label, Stardust reward.
- **Microcopy:** *"Three small things. Big day for __."*
- **Acceptance:** swipeable; tap to start.

### 13.7 Wellness Action Complete Modal
- **Purpose:** celebrate.
- **Components:** burst animation, Stardust earned, "Send to __" button.
- **Microcopy:** *"You did it. ✨ +10 Stardust."*

### 13.8 Pet Power-Up Animation
- **Purpose:** payoff.
- **Motion:** Stardust flows to pet → pet glows → bounce → optional evolution.
- **Acceptance:** ≤3s, skippable on second view.

### 13.9 Community Quest
- **Purpose:** show belonging.
- **Components:** scene art (e.g. Singing Meadow), progress bar with %, "Add your sparkle" button.
- **Microcopy:** *"Kids everywhere are helping bring the Meadow back."*

### 13.10 Mood Clouds
- **Purpose:** anonymous emotional weather.
- **Components:** sky with clouds in soft colors mapped to aggregate mood.
- **Microcopy:** *"Some friends have a cloudy day."*

### 13.11 Send Encouragement (Kindness Comet)
- **Purpose:** safe support.
- **Components:** 4–6 prewritten cards: *"You're brave." · "I see you." · "Sending a hug." · "You're not alone." · "Tomorrow is new."*
- **Acceptance:** no free text. One tap to send. Receipt confirmation only.

### 13.12 AI Adventure Story
- **Purpose:** delight.
- **Components:** 3 illustrated story cards, simple binary choice on cards 1 & 2, sticker reward on card 3.
- **Acceptance:** uses pet name + ≥1 completed action; static fallback ready.

### 13.13 Inventory / Accessories
- **Purpose:** show collection.
- **Components:** grid of unlocked items; tap to equip.

### 13.14 Parent Dashboard (gated)
- **Purpose:** calm recap.
- **Components:** today summary, 7-day trend in soft bars, mood weather, gentle suggestion card.
- **Microcopy:** *"Maya cared for Lumi today. 3 of 4 quests."*
- **Acceptance:** behind a parent-gate (math question or PIN).

### 13.15 Final Demo Impact Screen
- **Purpose:** end the demo with a feeling.
- **Components:** zoom out to constellation, child's star ignites with their pet's name, music swell.
- **Microcopy:** *"Every star counts. Welcome to the sky, __."*

---

## 14. Safety, Privacy, and Trust Requirements

| Requirement | Implementation |
|---|---|
| No free-text child-to-child chat | Prewritten Kindness Comets only |
| No public diagnosis | Diagnoses never leave the parent dashboard |
| No public profile | Community is anonymous & aggregated |
| Parent gate on dashboard | Math question / PIN |
| Data minimization | Demo uses mock data; only pet name + actions stored |
| No medical advice | AI system prompt forbids it; static disclaimer in parent view |
| Care plan source of truth | Configured by parent/caregiver/provider, never by the app itself |
| COPPA-aware defaults | No third-party trackers, no ads, no behavioral targeting |
| No dark patterns | No FOMO timers, no loot boxes, no purchases in demo |
| No ranking sick children | No leaderboards. Ever. |
| No punishment | Missed days = encouragement, never red states |
| Content moderation | All shareable content is pre-curated by the team |

---

## 15. Game Design Patterns → Wellness Constructs

| Pattern | Wellness construct it supports |
|---|---|
| Companion bonding | Reframes self-care as care-for-other (proven motivator in kids) |
| Collection | Long-arc engagement; surfaces small wins |
| Quests | Daily structure without "checklist" framing |
| Progress bars | Visible mastery |
| Community goals | Belonging, anti-isolation |
| Cooperative play | Replaces competition (harmful with sick kids) |
| Cosmetic rewards | Intrinsic-safe (no pay-to-win, no power gating) |
| Unlockable worlds | Long-term retention |
| Narrative progression | Meaning-making; identity beyond illness |
| Gentle streaks | Habit cue, recoverable |
| Variable rewards | Curiosity, but capped to avoid compulsion |
| Autonomy & choice | Builds self-management developmentally |
| Mastery progression | Self-efficacy |
| Social support without comparison | Connection without ranking |
| Emotional check-ins | Mood literacy |
| Celebration loops | Positive affect tied to care |
| Catch-up mechanics | Removes shame on hard days |

---

## 16. Wellness Constructs — Care Cards

| Child label | Icon | Stardust | Pet stat | Animation | Parent label |
|---|---|---|---|---|---|
| Took my medicine | 💊 | +15 | Energy | Pet glows gold | Medication |
| Drank water | 💧 | +5 | Hydration | Droplet ripple | Hydration |
| Stretched / PT | 🤸 | +10 | Strength | Pet does a flip | Physical therapy |
| Took a calm breath | 🌬️ | +8 | Calm | Breathing aura | Breathing exercise |
| Mood check-in | 🌤️ | +5 | Heart | Cloud shifts color | Mood log |
| Went outside | 🌳 | +8 | Joy | Pet sniffs flowers | Outdoor time |
| Ate a meal | 🍎 | +6 | Energy | Pet munches | Nutrition |
| Rested | 😴 | +6 | Calm | Pet naps | Rest |
| Went to appointment | 🏥 | +20 | All stats | Pet wears tiny scrub hat | Appointment attended |
| Wrote in my journal | 📔 | +6 | Heart | Pet doodles | Journaling |
| Asked for help | 🤝 | +12 | Heart | Pet hugs another pet | Self-advocacy |
| Did my care-team task | ⭐ | +15 | All stats | Pet sparkles | Provider-assigned task |

---

## 17. AI Feature — Personalized StarPal Adventure Generator

A **3-card illustrated micro-story** starring the child's pet, generated after the daily quest.

**Inputs:** pet name, pet type, list of completed Care Cards today, current community quest name, child's first name (optional).

**Constraints:**
- Age 7–13 reading level.
- No medical content, no advice.
- Positive, gentle, ends well.
- Mentions ≥1 completed action *as fuel*, not as a chore.
- 2 binary choices for agency; both lead to a happy ending.
- ~80 words per card.

### System prompt (sketch)
```
You are the StarPals storyteller. Write a 3-part bedtime-style fantasy
micro-story for a child age 7–13. The hero is the child's StarPal,
named {petName}, a {petType}.
Today the StarPal was powered by: {completedCareCards}.
The world quest is: {communityQuest}.

Rules:
- Never give medical advice or mention real medicine, doctors, hospitals,
  diagnoses, symptoms, or treatments.
- Never mention the child being sick.
- Always positive and gentle. No scary monsters; only soft challenges
  like fog, sleepy clouds, or shy stars.
- ~80 words per card.
- End card 1 and card 2 with two simple choices.
- Card 3 resolves happily and grants a sticker reward: {stickerName}.
```

### Example output (Lumi, water + breathing completed, Singing Meadow quest)
> **Card 1.** Lumi sipped from the silver stream and felt a cool, bright magic flow into their wings. The Singing Meadow was quiet today — a soft fog had tucked the flowers in. Lumi heard a tiny hum and floated closer. *Should Lumi follow the hum into the fog, or call out first?*

> **Card 2.** Lumi took one slow breath — in, and out — and the fog parted into a gentle path. At the end sat a shy little star who had lost their song. *Should Lumi sing back, or share a calm breath with the star?*

> **Card 3.** Lumi shared a slow, calm breath, and the star remembered its tune. Together they hummed, and one by one the meadow flowers opened. The star pinned a tiny **Meadow Bell** to Lumi's collar. "Come back tomorrow," the meadow whispered. *🎁 You unlocked: Meadow Bell.*

**Safety guardrails:**
- Output validated against a banned-words list (medical terms, scary words).
- If validation fails or API errors, serve a **prebuilt static story** keyed to the completed actions.
- All outputs logged for review.

---

## 18. Data Model (hackathon-shaped)

```ts
User            { id, role: 'child'|'parent', createdAt }
ChildProfile    { id, userId, displayName, ageBand, petId }
ParentProfile   { id, userId, childIds[], pin }
Pet             { id, childId, name, species, evolutionStage, stardust, stats:{energy,hydration,calm,heart,strength,joy} }
WellnessAction  { id, childId, cardKey, completedAt, stardustEarned }
DailyQuest      { id, childId, date, cardKeys[], completedKeys[] }
CommunityQuest  { id, name, scene, goalStardust, currentStardust, startsAt, endsAt }
MoodCheckIn     { id, childId, mood:'sunny'|'cloudy'|'rainy'|'stormy'|'rainbow', createdAt }
EncouragementMessage { id, fromChildId, toChildId(nullable, can be 'community'), templateKey, sentAt }
InventoryItem   { id, childId, itemKey, source:'quest'|'story', unlockedAt }
AIStory         { id, childId, petId, dateKey, cardsJson, stickerKey, generator:'llm'|'fallback' }
```

For the demo, a single Supabase project with RLS on `childId = auth.uid()` plus a `community_quest` table readable by all authenticated children is plenty.

---

## 19. Technical Architecture

**Recommended stack:**
- **Framework:**  TanStack Start template (React 19, Vite 7, file-based routing in `src/routes/`).
- **Styling:** Tailwind v4 via `src/styles.css`, design tokens for the magical palette.
- **Animation:** Framer Motion (pet idle, Stardust flow, evolution).
- **Backend:**  Cloud (Supabase under the hood — auth, DB, RLS).
- **AI:** AI Gateway → server function `generateAdventure.functions.ts` calling a structured-output model.
- **Assets:** generated SVG creatures + Lottie/Framer for animation; pastel gradient backgrounds.

**Frontend components (build order):**
1. `<PetHabitat />`, `<Stardust />`, `<CareCard />`
2. `<QuestSheet />`, `<CompleteModal />`
3. `<CommunityBar />`, `<MoodSky />`, `<KindnessComet />`
4. `<StoryCards />` (AI)
5. `<ParentMirror />`
6. `<Constellation />`

**Server functions:**
- `completeCareCard` (validates, awards Stardust, updates pet + community).
- `sendKindnessComet` (rate-limited, prewritten only).
- `generateAdventure` (LLM call + safety filter + fallback).
- `getParentRecap` (aggregates last 24h).

**Auth simplification:** single magic "Continue as Maya" demo button seeds a deterministic child profile. Parent dashboard behind a "What's 3 + 4?" gate.

**Seed data:** 1 child (Maya), 1 pet (Lumi), 1 community quest at 84%, 200 fake anonymous contributors, 3 mood clouds, 6 Kindness Comet templates, 1 prebuilt fallback story.

**Deployment:** ship on Vercol. One-tap demo reset button (hidden long-press on logo) re-seeds.

---

## 20. Demo Script (3 minutes)

**[0:00–0:20 — Problem]**
> "One in four kids in this country lives with a chronic condition. Every day they're asked to take meds, do PT, check in on their mood. The current system turns their parents into nags, makes them feel different from their friends, and gives clinicians no signal between visits. The problem isn't information. It's meaning."

**[0:20–0:40 — Vision]**
> "StarPals is Duolingo meets Tamagotchi for pediatric chronic care. Kids don't track themselves — they care for a magical pet whose world grows stronger every time they take care of themselves. Watch."

**[0:40–2:10 — Live demo, golden path]**
*Tap through onboarding → meet Lumi → complete 3 Care Cards → watch Stardust fly to Lumi → Lumi evolves → contribute to the Singing Meadow → see Mood Clouds → send a Kindness Comet → tap the AI story → read all 3 cards aloud → unlock sticker.*

**[2:10–2:40 — Parent view]**
> "And here's what Maya's mom sees. No raw data. No red. Just: 'Maya cared for Lumi today. Mood: hopeful.' She stops being the warden."

**[2:40–3:00 — Why this matters + future]**
> "Every star you see is a real kid. We give chronic-care kids a way to feel like heroes instead of patients — and we give clinics the first real engagement layer for the 89 days between visits. Care Cards are pluggable: asthma, T1D, CF, anxiety, post-transplant. The same world hosts them all. That's the wedge. Thank you."

*Camera on constellation. End.*

---

## 21. Success Metrics

### Demo metrics
- Judge restates the problem correctly in <30s.
- Untrained child completes golden path with zero verbal help.
- All three users (child, parent, future clinic) are visible in the demo.
- At least one audible reaction during the AI story or constellation.

### Future product metrics
| Metric | Target (12-week pilot) |
|---|---|
| D1 / D7 / D30 retention | 70 / 45 / 30 |
| Daily Care Cards completed per active child | ≥ 3 |
| PT/breathing completion rate vs. baseline | +40% |
| Mood check-in frequency | ≥ 5/week |
| Parent-reported routine conflict | −50% on validated scale |
| Community quest participation | ≥ 60% of WAU |
| Parent dashboard weekly opens | ≥ 2 |

---

## 22. Hackathon Build Plan (≤48h)

| Block | Goal |
|---|---|
| **Day 1 AM** | Repo, design tokens, route scaffolding, seed data, pet & Care Card components static |
| **Day 1 PM** | Quest flow end-to-end with Stardust animation + pet power-up |
| **Day 1 EVE** | Community quest bar, Mood Clouds, Kindness Comets (all client-side or with simple server fns) |
| **Day 2 AM** | AI story integration + static fallback + sticker unlock |
| **Day 2 PM** | Parent dashboard + parent gate + Constellation finale |
| **Final polish** | Sound, micro-animations, demo reset button, rehearse script ×3 |

**Rule:** if a feature isn't in the golden path, it doesn't ship Day 1.

---

## 23. Design System

**Palette (oklch tokens in `src/styles.css`):**
- `--twilight` — deep magical purple (background base)
- `--dawn-peach` — warm highlight (CTAs, joy states)
- `--meadow-mint` — growth/community
- `--starlight` — soft cream (foreground text)
- `--stardust` — luminous gold (rewards)
- `--cloud-soft` — pale lavender (cards)
- `--calm-blue` — mood/breathing
- **Never:** pure red, pure black, hospital blue.

**Typography:**
- Display: a rounded humanist sans (e.g. **Fraunces** display or **Quicksand**) for headings — never serif-medical, never Inter-default.
- Body: **Nunito** 16–18px. Generous line-height (1.5+).

**Buttons:** pill-shaped, 56px tall, soft shadow + inner glow on press. Primary uses `--dawn-peach`.

**Cards:** 24px radius, soft elevation, subtle inner gradient. Pressed state = gentle scale + glow.

**Icons:** custom rounded glyphs per Care Card. No stroke icons that read as clinical.

**Animation principles:** ease-out, 250–400ms, spring on celebration. Respect `prefers-reduced-motion` (replace bursts with single fade).

**Character style:** clay-render, big eyes, small bodies, idle-breathing always on.

**States:**
- Empty → "Your sky is waiting for its first star."
- Success → confetti + soft chime.
- Error → never "Error." Use *"That didn't work. Want to try again?"* with the pet looking curious.

**Accessibility:** WCAG AA contrast, all icons labeled, voice-over reads every card, large-text mode, motion-reduce mode, screen-reader-friendly modal focus traps.

---

## 24. Example Microcopy

**Onboarding**
- *"A new star is being born. Want to meet them?"*
- *"What should we call you, brave one?"*

**Care Cards**
- *"Take a slow breath with __."* (breathing)
- *"Sip some water. __ is thirsty too."* (hydration)
- *"Time for your medicine. You're the hero of this story."* (medication)

**Completion**
- *"You did it. ✨ +10 Stardust."*
- *"__ feels stronger because of you."*

**Missed day**
- *"__ missed you yesterday. Want to say hi?"* (never "You broke your streak.")
- *"Every star counts. Today is new."*

**Encouragement (prewritten Kindness Comets)**
- *"You're brave."*
- *"I see you."*
- *"Sending a hug."*
- *"You're not alone."*
- *"Tomorrow is new."*
- *"Your light is real."*

**Parent dashboard**
- *"Maya cared for Lumi today. 3 of 4 quests. Mood: hopeful 🌤️."*
- *"Gentle suggestion: Maya's calm streak is growing. Maybe try breathing together tonight."*

**AI story intro**
- *"__ has a story for you tonight…"*

**Community quest**
- *"Kids everywhere are helping bring the Meadow back."*
- *"Together you brought back 1,204 flowers today."*

---

## 25. Acceptance Criteria (MVP)

- [ ] A child can select and name a pet in ≤3 taps.
- [ ] A child can complete at least three wellness actions per day.
- [ ] Completing an action increases the Stardust counter with a visible animation.
- [ ] Stardust visibly changes the pet (glow / accessory / stage).
- [ ] The community progress bar increases when a child contributes.
- [ ] A child can send one of ≥5 prewritten Kindness Comets.
- [ ] AI story uses the pet's name and at least one completed action; falls back gracefully.
- [ ] Parent dashboard, behind a parent gate, shows today's recap.
- [ ] Constellation screen lights up the child's star with their pet's name.
- [ ] A hidden reset button restores seed state in <2 seconds.
- [ ] Golden path runs end-to-end in <5 minutes with zero typing after pet name.
- [ ] No medical-advice strings exist anywhere in the UI.

---

## 26. Risks & Mitigations

| Risk | Mitigation |
|---|---|
| **Privacy** (kids' data) | Mock data in demo; data minimization; no third-party trackers; parent-gated dashboard. |
| **Over-medicalization** | Care Cards are configurable; app never prescribes; clear "configured by your care team" disclaimer. |
| **Shame from gamification** | No punishment mechanics; missed-day = pet hug; no public leaderboards. |
| **Unsafe peer interaction** | No free text; only prewritten messages; anonymous aggregation. |
| **Accessibility** | WCAG AA; motion-reduce; voice-over; large tap targets. |
| **Scope creep** | Golden path is sacred. Backlog everything else. |
| **AI hallucination** | Banned-words filter; structured output; static fallback always ready. |
| **Parent trust** | Calm, non-surveillance recap; gate; transparency about what's stored. |
| **Clinic adoption (future)** | Pluggable Care Card packs; exportable Doctor Snapshot; HIPAA-ready architecture. |

---

## 27. Future Roadmap

- **V1.1** Clinic-configurable Care Card packs (asthma, T1D, CF, IBD, anxiety, post-transplant).
- **V1.2** Therapist & care-team dashboard with trend reports.
- **V2** PT motion tracking via device camera.
- **V2** Wearable integration (Apple Health, Fitbit, Dexcom).
- **V2** Waiting-room mode for hospitals + clinics.
- **V2.5** Sibling co-op mode (healthy siblings as allies, not comparison).
- **V3** School re-entry support module.
- **V3** Multi-language (Spanish first).
- **V3** Research/outcomes validation partnership with a pediatric academic medical center.

---

## 28. Closing Note

This is not a medication reminder app.
This is not a generic wellness tracker.
This is not open social media for children.

**StarPals is a safe, cooperative, child-native engagement layer for pediatric chronic care** — and the cheapest, kindest, most defensible way to put a daily care plan in the hands of a 9-year-old without breaking either of them.

*Build the golden path. Make it magical. Ship the constellation.*
