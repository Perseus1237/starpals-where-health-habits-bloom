# StarPals

**Care for a pet. Care for yourself.**

StarPals is a child-native engagement layer for pediatric chronic care. It turns daily care routines such as medicine, hydration, breathing, movement, mood check-ins, and appointment prep into gentle quests that help a virtual companion grow. The product goal is simple: help kids feel capable instead of managed, help parents support routines with less conflict, and help care teams see useful signal between visits.

This repository contains a working TanStack Start demo plus a structured product, market, research, and roadmap documentation set.

## Table of Contents

- [The Thesis](#the-thesis)
- [Why This Market Matters](#why-this-market-matters)
- [Product Concept](#product-concept)
- [Who StarPals Serves](#who-starpals-serves)
- [Current Demo](#current-demo)
- [Technical Architecture](#technical-architecture)
- [Repository Structure](#repository-structure)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Safety, Privacy, and Compliance Direction](#safety-privacy-and-compliance-direction)
- [Business Model](#business-model)
- [Metrics That Matter](#metrics-that-matter)
- [Roadmap](#roadmap)
- [Documentation Map](#documentation-map)
- [Engineering Notes](#engineering-notes)

## The Thesis

Pediatric chronic care has a daily execution problem. Care plans are written for clinical accuracy, but children experience them as repetitive, isolating, and emotionally loaded tasks. Parents often become the reminder system, and clinicians only see narrow snapshots during visits.

StarPals reframes the daily care loop:

| Old framing | StarPals framing |
| --- | --- |
| "Take your medicine." | "Power up your StarPal before breakfast." |
| "Did you do your breathing exercise?" | "Call a meadow breeze together." |
| "Track your symptoms." | "Paint today's mood sky." |
| "Adherence dashboard." | "Calm parent recap and provider-ready trend signal." |

The larger company thesis is that StarPals can become the child engagement operating system for pediatric care plans: a cross-condition layer that translates approved care routines into child-safe quests, story progress, caregiver visibility, and care-team summaries.

## Why This Market Matters

The problem is bigger than reminders.

Children with chronic or special health needs often carry recurring routines across medication, therapy, hydration, breathing, movement, appointments, sleep, mood, and symptom awareness. Those routines can be clinically important, but the daily burden lands at home.

The market opportunity exists because the current landscape is fragmented:

| Category | What it solves | What remains unsolved |
| --- | --- | --- |
| Adult adherence apps | Medication reminders, refill prompts, patient support | Not child-native, weak emotional loop, limited parent-child fit |
| Disease-specific tools | Condition education and tracking | Narrow scope, duplicated UX, uneven engagement |
| Child wellness games | Motivation and play | Usually disconnected from care plans and clinical workflows |
| Hospital child-life programs | Trust, comfort, play, in-person support | Hard to extend into daily home routines |
| Provider portals | Clinical records and messaging | Not built for child behavior change |

StarPals sits between these categories. It is not trying to replace the EMR, the clinician, the caregiver, or the disease-specific care team. It is trying to own the last mile between the care plan and the child's daily life.

## Product Concept

StarPals is "Duolingo meets Tamagotchi for pediatric chronic care."

The experience is built around a soft, child-safe loop:

1. A caregiver or care team defines approved care tasks.
2. StarPals translates those tasks into short Care Cards.
3. The child completes quests and earns Stardust.
4. Stardust helps a StarPal grow, unlocks stories, and contributes to a shared world.
5. Parents see calm recaps instead of failure feeds.
6. Care teams can eventually receive pattern-level summaries, not raw child gameplay.

Core design principles:

- The child should never feel reduced to a diagnosis.
- Care actions should feel meaningful, not punitive.
- Missed days should invite recovery, not shame.
- Community should create belonging without exposure.
- AI and imported chart data should never bypass human approval.
- Provider summaries should be concise, source-backed, and clinically useful.

## Who StarPals Serves

| Persona | Need | StarPals value |
| --- | --- | --- |
| Child, age 7-13 | Feel capable, normal, and emotionally supported | Daily care becomes pet care, story, mastery, and belonging |
| Teen user | Build self-management while preserving privacy | Age-aware routines, controlled sharing, and nonjudgmental reflection |
| Parent or guardian | Reduce conflict and know what happened | Calm visibility, routine support, consent control, and summaries |
| Secondary caregiver | Help during school, travel, weekends, or bedtime | Limited delegated access without overexposing private data |
| Provider | Understand what happens between visits | Trend summaries, exceptions, and care-plan engagement signal |
| Care coordinator | Manage cohort exceptions | Missed routines, upcoming tasks, and review queues |
| Clinic admin | Deploy safely | Roles, templates, tenant settings, consent, and integration controls |
| Payer or sponsor | Prove program value | Engagement, adherence lift, retention, and caregiver burden metrics |

## Current Demo

The current app demonstrates the complete product narrative across child, parent, and care-team surfaces.

### Routes

| Route | Purpose |
| --- | --- |
| `/` | Landing experience and product positioning |
| `/onboarding` | Child profile and StarPal selection flow |
| `/home` | Child habitat, Care Cards, Stardust, community quest, mood sky, and story unlock |
| `/parent` | Parent dashboard with calm recap, plan status, care-team notes, and AI review queue |
| `/care-plan` | Care-plan builder showing FHIR, Epic MyChart, Oracle Health, parent review, and AI draft concepts |

### Child Experience

The child flow includes:

- First-name onboarding.
- StarPal selection across multiple companion species.
- Pet naming and habitat entry.
- Daily Care Cards for water, breathing, medicine, stretch, mood, and outside time.
- Stardust rewards and pet evolution stages.
- Community quest progress for shared belonging.
- Mood sky patterns.
- AI-generated or fallback story adventure after enough quests.
- Constellation moment when the child reaches a larger completion threshold.

The current state is stored locally in the browser with `localStorage`, making the demo lightweight and easy to reset.

### Parent Experience

The parent surface is intentionally calm. It shows:

- A grown-up gate before entering the parent area.
- Today's routine completion.
- Stardust earned and care activity summary.
- Weekly progress.
- Upcoming care-plan items.
- AI suggestions staged for review.
- Care-team notes.
- Settings for reminders, weekly recap, symptom nudges, and AI suggestions.

The design goal is support, not surveillance.

### Care-Plan Builder

The care-plan route demonstrates the future enterprise workflow:

- Plan items with category, cadence, child cue, source, status, owner, and Stardust value.
- Seeded active tasks and staged draft tasks.
- Simulated imports from FHIR, Epic MyChart, and Oracle Health.
- AI-drafted wellness suggestions held for parent and care-team review.
- Integration readiness cards for SMART on FHIR, parent review, and child-safe mapping.

This is currently a demo implementation, not a production clinical integration.

## Technical Architecture

### Stack

| Layer | Technology |
| --- | --- |
| Runtime | Node.js 20.x |
| App framework | TanStack Start |
| UI framework | React 19 |
| Routing | TanStack Router file-based routes |
| Data fetching / server functions | TanStack React Query and TanStack Start server functions |
| Build tool | Vite |
| Styling | Tailwind CSS 4, custom theme tokens, CSS utilities |
| UI primitives | Radix UI components |
| Icons | lucide-react |
| Forms and validation | react-hook-form, Zod |
| AI story generation | Vercel AI SDK with OpenAI-compatible provider |
| Deployment support | Vercel serverless entry, Node server, GitHub Pages static helper |

### State Model

The current demo state lives in `src/lib/starpals/store.tsx` and is persisted under the browser key `starpals_v1`.

State includes:

- `pet`: species, name, Stardust, evolution stage, completed Care Cards.
- `childName`: child display name.
- `kindnessSent`: prewritten kindness interactions.
- `communityBoost`: Stardust contribution to the shared community quest.

Important behavior:

- Care Cards can only be completed once per demo session.
- Stardust increments based on the Care Card definition.
- Pet evolution is derived from Stardust thresholds.
- Community progress is bounded and derived from base progress plus the child's contribution.
- Reset clears `localStorage` and returns the app to its initial state.

### Domain Data

Core demo content is defined in `src/lib/starpals/data.ts`:

- `CARE_CARDS`: quest label, icon, Stardust reward, stat type, prompt copy, completion copy.
- `PETS`: StarPal species metadata.
- `KINDNESS`: prewritten community encouragement templates.
- `MOOD_CLOUDS`: aggregate mood display data.
- `COMMUNITY_QUEST`: shared world progress.
- `FALLBACK_STORY`: safe story content when AI is unavailable.

### AI Story Path

Story generation lives in `src/lib/starpals/story.functions.ts`.

The server function:

1. Validates input with Zod.
2. Reads `AI_API_KEY` or `OPENAI_API_KEY`.
3. Uses `AI_PROVIDER_BASE_URL` when supplied, otherwise defaults to an OpenAI-compatible API base.
4. Prompts for a three-card bedtime-style fantasy story.
5. Requires JSON output.
6. Rejects content that mentions medical, illness, symptom, hospital, or treatment terms.
7. Falls back to deterministic safe content on missing keys, malformed output, banned content, or provider failure.

This is a useful prototype pattern for child-safe generative features: use AI for delight, validate aggressively, and provide a non-AI fallback.

### Routing

This project uses TanStack Start file-based routing. Route files live under `src/routes`.

Important convention:

- `src/routes/index.tsx` maps to `/`.
- `src/routes/home.tsx` maps to `/home`.
- `src/routes/__root.tsx` is the app shell and wraps every route.
- `src/routeTree.gen.ts` is generated and should not be edited by hand.

See [docs/04-engineering/routing-conventions--tanstack-start.md](docs/04-engineering/routing-conventions--tanstack-start.md).

### Build and Server Entrypoints

| File | Role |
| --- | --- |
| `vite.config.ts` | TanStack Start, React, TS path aliases, and Tailwind Vite setup |
| `src/client.tsx` | Browser entry |
| `src/start.ts` | Start runtime entry |
| `src/server.ts` | Server runtime entry |
| `server.js` | Node HTTP wrapper for built server output |
| `api/index.js` | Vercel serverless wrapper for the TanStack Start server output |
| `scripts/generate-gh-pages-index.js` | Static index generator for GitHub Pages builds |
| `vercel.json` | Vercel build, asset headers, and rewrites |

## Repository Structure

```text
.
|-- api/
|   `-- index.js
|-- docs/
|   |-- 01-product/
|   |-- 02-research/
|   |-- 03-roadmap/
|   |-- 04-engineering/
|   `-- README.md
|-- scripts/
|   `-- generate-gh-pages-index.js
|-- src/
|   |-- components/
|   |   |-- starpals/
|   |   `-- ui/
|   |-- hooks/
|   |-- lib/
|   |   `-- starpals/
|   |-- routes/
|   |-- styles.css
|   `-- router.tsx
|-- package.json
|-- server.js
|-- vercel.json
`-- vite.config.ts
```

## Getting Started

### Requirements

- Node.js 20.x
- npm

### Install

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Then open the local URL printed by Vite, usually:

```text
http://localhost:5173
```

### Build

```bash
npm run build
```

### Run Built Server

```bash
npm run start
```

The Node wrapper serves the built TanStack Start server from `dist/server/server.js` and defaults to:

```text
http://localhost:3000
```

## Environment Variables

The app works without AI credentials because the story flow has a deterministic fallback.

Optional server-side variables:

| Variable | Purpose |
| --- | --- |
| `AI_API_KEY` | Preferred API key for AI story generation |
| `OPENAI_API_KEY` | Alternate API key fallback |
| `AI_PROVIDER_BASE_URL` | Optional OpenAI-compatible API base URL |
| `PORT` | Port used by `server.js` in production-style local runs |

Do not expose secrets with a `VITE_` prefix. Anything prefixed with `VITE_` is public browser config.

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local Vite dev server |
| `npm run build` | Build the TanStack Start app |
| `npm run start` | Run the built app through `server.js` |
| `npm run vercel-build` | Build and generate a root-based static client index |
| `npm run build:dev` | Build in development mode |
| `npm run build:gh-pages` | Build and generate a GitHub Pages index using the repository base path |
| `npm run preview` | Preview the Vite build |
| `npm run lint` | Run ESLint |
| `npm run format` | Format the repository with Prettier |

## Safety, Privacy, and Compliance Direction

StarPals is designed for a high-trust child health context. The current app is a prototype, but the product direction assumes safety and compliance cannot be added as an afterthought.

### Current Demo Guardrails

- The app does not diagnose, prescribe, or triage.
- The child experience avoids medical language in AI-generated stories.
- Story output is schema-validated and filtered for banned medical terms.
- AI failure falls back to deterministic safe content.
- Community interactions are represented through aggregate progress and prewritten kindness, not open child chat.
- Parent and care-team views are separated from the child habitat.

### Production Guardrails To Build

| Area | Direction |
| --- | --- |
| Consent | Parent and guardian permission ledger for care plans, AI, devices, provider sharing, and research |
| Privacy | COPPA-aware child data minimization, teen privacy policies, deletion requests, and limited disclosure |
| Security | Encryption in transit and at rest, RBAC, tenant isolation, MFA/SSO, audit logging, secure SDLC |
| HIPAA readiness | Business Associate Agreement workflow, access logs, incident response, vendor review, data export controls |
| AI governance | Human approval before task activation, prompt/version logs, output validation, source provenance |
| Clinical governance | No medical advice by default, clinician-approved templates, review queues, writeback controls |
| Community safety | No open child chat, no public diagnosis disclosure, no follower graph, prewritten support only |

## Business Model

The strongest business model is commercial core plus mission-aligned access programs.

| Revenue stream | Buyer | Why it matters |
| --- | --- | --- |
| Hospital and clinic licensing | Children's hospitals, specialty clinics, complex care programs | Efficient distribution and workflow value |
| Payer partnerships | Medicaid-focused programs, pediatric care management, value-based care groups | Engagement can connect to outcomes, retention, and reduced burden |
| Sponsored condition pathways | Nonprofits, foundations, pharma support programs | Trust, education, content, and subsidized access |
| B2C family subscription | Parents and caregivers | Engagement proof, parent pull, premium personalization |
| SDK or white-label licensing | Digital health partners and care platforms | Lets StarPals become infrastructure for child-facing engagement |

The direct-to-consumer path alone is likely too narrow for the full opportunity. The larger wedge is B2B2C: provider or program distribution with a product that children actually want to use.

## Metrics That Matter

The most important metrics are behavior and workflow metrics, not vanity signups.

### Child Engagement

- Child-initiated weekly active use.
- Day 1, week 1, week 4, and week 8 retention.
- Care Card completion rate by task type.
- Voluntary story unlock rate.
- Recovery after missed routines.

### Caregiver Value

- Reduction in reminder conflict.
- Parent recap open rate.
- Parent-approved task activation rate.
- Caregiver-reported burden reduction.
- Delegated caregiver usage.

### Provider and Program Value

- Cohort activation rate.
- Percent of families active at week 8.
- Provider summary review rate.
- Care-plan task completion trend.
- Missed-routine exception resolution.
- Expansion from one program to adjacent service lines.

### Enterprise Readiness

- Time to launch a new condition pack.
- Time to configure a new tenant.
- Integration sync success rate.
- Audit completeness.
- Security review completion time.

## Roadmap

### Phase 1: Demo To Family Product

Goal: convert the hackathon-style experience into a trustworthy family product.

- Real authentication and account model.
- Child, caregiver, provider, and organization roles.
- Configurable care task model replacing static demo cards.
- Parent care-plan editor.
- Reminder scheduling.
- Consent center.
- Accessibility pass for child and caregiver experiences.
- More robust persistence layer.
- Clear product analytics events.

### Phase 2: Clinical-Ready Foundation

Goal: make StarPals usable in supervised pediatric programs.

- Organization tenancy.
- Role-based access control.
- Audit logs for task changes, views, exports, and approvals.
- Provider and care coordinator dashboard.
- Condition templates for initial launch lanes.
- Parent review queue for imported or AI-drafted tasks.
- HIPAA-oriented architecture plan.
- BAA and procurement evidence package.
- Safety copy and escalation rules.

### Phase 3: FHIR And EMR Integration

Goal: connect clinician-approved care plans to child-friendly quests.

- FHIR gateway for Patient, CarePlan, Goal, ActivityDefinition, ServiceRequest, MedicationRequest, Observation, QuestionnaireResponse, Encounter, Practitioner, Organization, and DocumentReference.
- SMART on FHIR launch.
- Epic and MyChart integration track.
- Oracle Health integration track.
- Care-plan import mapper.
- DocumentReference export for provider summaries.
- CDS Hooks enrollment prompts.
- FHIR provenance records.
- Integration monitoring and retry handling.

### Phase 4: Fallback Integration Rails

Goal: support customers that cannot start with full EMR integration.

- CSV and secure spreadsheet imports.
- PDF care-plan ingestion with human confirmation.
- Secure summary exports.
- SFTP batch export for payer and care management programs.
- Webhook API for digital health partners.
- School nurse and care coordinator access with parent approval.

### Phase 5: Wearables And Device Signal Layer

Goal: turn caregiver-approved device data into low-noise support signals.

- Apple Health and Google Health Connect ingestion.
- Fitbit, Garmin, Oura, Withings, Samsung Health, and Wear OS connector backlog.
- Condition-specific device support for glucose, inhalers, spirometers, pulse oximeters, thermometers, scales, and medication devices.
- FHIR Observation, Device, DeviceMetric, DeviceUseStatement, and Provenance mapping.
- Provider summaries that aggregate trends instead of streaming raw data.

### Phase 6: AI Agent Layer

Goal: reduce caregiver burden and help care teams find what matters.

- Care Plan Interpreter Agent.
- Quest Personalization Agent.
- Clinical Summary Agent.
- Caregiver Coach Agent.
- Integration Monitoring Agent.
- Content Safety Agent.
- Research and outcomes analysis assistant.

All AI-created or AI-modified care tasks should stay inactive until approved by a responsible adult or authorized care-team member.

## Documentation Map

Detailed strategy and planning docs live under `docs/`.

| Document | Description |
| --- | --- |
| [Documentation Index](docs/README.md) | Folder structure and document naming convention |
| [Product Requirements: Hackathon PRD v2](docs/01-product/product-requirements--hackathon-prd-v2.md) | Product vision, target users, goals, and demo requirements |
| [Future User Journey: Clinical Platform](docs/01-product/user-journey--clinical-platform-future-state.md) | End-to-end journey from family onboarding through enterprise deployment |
| [Business Analysis: YC Style](docs/02-research/business-analysis--yc-style.md) | Business thesis, market context, go-to-market, and financial outlook |
| [Venture Analysis: Deep YC Style](docs/02-research/venture-analysis--deep-yc-style.md) | Extended venture-scale analysis and market sizing |
| [Advanced Clinical Platform Backlog](docs/03-roadmap/backlog--advanced-clinical-platform.md) | Roadmap milestones, integrations, compliance, AI, and enterprise backlog |
| [TanStack Start Routing Conventions](docs/04-engineering/routing-conventions--tanstack-start.md) | File-based route conventions for `src/routes` |

## Engineering Notes

### Current Strengths

- Clear product narrative across child, parent, and care-team views.
- Lightweight local demo state that is easy to reset.
- Server-side AI function with validation, content filtering, and fallback.
- Strong route-level separation of demo flows.
- Custom visual system tuned to a pediatric care product.
- Organized documentation for product, research, roadmap, and engineering.

### Current Limitations

- No production database.
- No authentication.
- No real EMR integration.
- No real notification scheduler.
- No multi-child family model.
- No organization tenancy.
- No production audit log.
- No clinical review workflow beyond demo UI.
- No automated tests currently documented in `package.json`.

### Near-Term Technical Priorities

1. Replace static Care Cards with persisted task definitions.
2. Introduce typed event tracking for quest completion, story unlocks, parent views, and care-plan actions.
3. Add real auth and role separation.
4. Add a database schema for family, child, pet, task, completion, consent, and audit entities.
5. Create test coverage for state transitions and AI story fallback behavior.
6. Add route-level loading, error, and empty states for production data.
7. Introduce feature flags for AI, parent dashboard, care-plan builder, and clinical integrations.
8. Create a seed-data storybook or demo-mode layer separate from production data.

## Project Status

StarPals is currently a polished prototype and strategy artifact. The demo proves the emotional loop, product surfaces, and platform direction. The next milestone is to turn the static demo into a real family product with persistent care plans, accounts, consent, analytics, and a narrow clinical pilot workflow.

The north star remains:

> A clinician-approved care plan becomes child-friendly quests; a child completes care through a StarPal story world; a caregiver gets calm control; and a care team receives useful signal between visits.
