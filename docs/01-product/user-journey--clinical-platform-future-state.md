# StarPals Advanced Future User Journey

## Purpose

This document translates the StarPals PRD, research thesis, and advanced backlog into an end-to-end future user journey. It describes how StarPals evolves from a magical pediatric care routine demo into a clinical-grade, child-safe engagement layer for pediatric chronic care.

The journey keeps one principle constant: StarPals should feel like play to the child, control to the caregiver, signal to the provider, and trustworthy infrastructure to the enterprise buyer.

## Source Inputs

- [Product Requirements: Hackathon PRD v2](product-requirements--hackathon-prd-v2.md): child-native golden path, Care Cards, StarPal companion loop, parent recap, safety rules, and visual/interaction principles.
- [Business Analysis: YC Style](../02-research/business-analysis--yc-style.md): business thesis, clinical need, adherence gap, social isolation, provider/payer opportunity, and B2B2C go-to-market.
- [Advanced Clinical Platform Backlog](../03-roadmap/backlog--advanced-clinical-platform.md): clinical-ready roadmap, FHIR and SMART on FHIR integrations, Epic/MyChart and Oracle Health tracks, wearable/device backlog, AI agents, compliance, security, and enterprise platform requirements.

## Future State North Star

StarPals becomes the child engagement operating system for pediatric care plans:

- A clinician-approved care plan becomes child-friendly quests.
- A child completes care actions through a StarPal story world rather than a medical checklist.
- A caregiver manages consent, routines, devices, and sharing without becoming the nagging system.
- A provider sees concise, clinically useful signal between visits.
- The enterprise buyer gets HIPAA-ready, auditable, interoperable, procurement-ready infrastructure.

## Core Journey Principles

1. The child never feels like a patient inside the core experience.
2. The caregiver controls data sharing, device permissions, care plan approvals, and family delegation.
3. The care team sees trends and exceptions, not noisy raw gameplay.
4. No AI-generated care task becomes active without human approval.
5. Device and wearable data create signals, not diagnoses.
6. EMR writeback is disabled by default until an organization explicitly configures it.
7. Community features are anonymous, cooperative, and prewritten.
8. Compliance is not a later retrofit. Consent, auditability, data minimization, and security evidence are part of the journey.

## Personas

| Persona | Primary Need | Success Moment |
| --- | --- | --- |
| Child, age 7-13 | Feel capable, normal, and emotionally supported | Opens StarPals voluntarily and completes care quests to help their StarPal |
| Teen user | Build self-management without losing privacy | Chooses what reflections and routines are private vs shared under policy |
| Parent or guardian | Reduce conflict and know what happened | Reviews a calm recap instead of repeatedly asking about routines |
| Secondary caregiver | Help without full access to private health details | Receives limited task handoff permissions for school, bedtime, travel, or weekends |
| Provider | See useful between-visit signal | Reviews a concise summary with source-backed events and approved writeback |
| Care coordinator | Manage exceptions across a cohort | Sees missed routines, upcoming appointments, and escalation queues |
| Clinic admin | Deploy safely across programs | Configures roles, templates, integrations, consent, and escalation pathways |
| Integration operator | Keep EMR and device sync reliable | Monitors FHIR, portal, webhook, and device failures with clear provenance |
| Payer or program sponsor | Prove value | Sees adherence lift, engagement, caregiver burden reduction, and program expansion metrics |

## End-to-End Journey Overview

| Phase | Child Experience | Caregiver Experience | Provider / Enterprise Experience | System Requirements |
| --- | --- | --- | --- | --- |
| 0. Program setup | Not visible | Receives invitation path later | Clinic configures condition pathway, roles, escalation, and integration mode | Tenant isolation, SSO, RBAC, audit logs, BAA workflow |
| 1. Identification and invitation | Hears about StarPals as a helper for their pet | Gets invite during visit, discharge, care call, MyChart, or clinic handout | Provider identifies eligible family through EMR, CDS Hook, dashboard, or manual cohort | SMART on FHIR, Epic/MyChart, Oracle Health, CSV/PDF fallback |
| 2. Caregiver onboarding | Not yet in child world | Creates account, child profile, consent settings, and sharing rules | Organization policies applied automatically | COPPA, HIPAA, teen privacy, delegated access, data minimization |
| 3. Care plan import | Sees only friendly quests after approval | Reviews imported or AI-extracted care tasks before activation | Care plan pulled from EMR or uploaded document | FHIR CarePlan, MedicationRequest, Goal, ServiceRequest, Questionnaire |
| 4. Magical child onboarding | Chooses and names StarPal | Watches child bond with the experience | Not involved | Parent gate, age-banded UX, accessibility defaults |
| 5. Daily quest loop | Completes Care Cards, earns Stardust, powers pet, unlocks story | Gets gentle visibility, not surveillance | Later sees aggregate trend, not raw game detail | Event schema, task history, offline sync, content safety |
| 6. Wearable and device support | Device signals become gentle quest support | Approves Apple Health, Health Connect, Fitbit, Dexcom, inhaler, or dispenser data | Provider receives only configured summaries or approved writeback | Consent by signal type, provenance, FHIR Observation, Device, DeviceMetric |
| 7. Hard day recovery | StarPal says "today is new" and offers tiny approved steps | Gets nonjudgmental pattern insight and caregiver coach suggestions | May see exception only if protocol says it matters | Adaptive difficulty, no shame mechanics, escalation guardrails |
| 8. Weekly recap | Receives story artifact or reward | Reviews trends, mood, adherence, and practical routine suggestions | Reviews concise clinical summary if enabled | AI summary with citations, deterministic fallback, audit logging |
| 9. Appointment prep | Helps gather wins, questions, and feelings | Builds visit-ready summary with symptoms, photos, questions, and routines | Receives pre-visit snapshot or DocumentReference | Human review, export controls, EMR writeback configuration |
| 10. Ongoing care management | Continues quests across condition packs | Manages refills, school handoffs, appointments, and caregivers | Cohort dashboard supports care management and reimbursement workflows | Multi-tenant org model, templates, analytics, integration monitoring |
| 11. Research and outcomes | Not exposed to research mechanics | Opts into approved research or aggregate analytics | Program evaluates adherence, retention, burden, and clinical usefulness | Consent ledger, de-identification, minimum cohort thresholds, IRB support |

## Phase 0: Provider Program Setup

### Trigger

A children's hospital, specialty clinic, payer program, school-health partner, or care management organization wants to pilot StarPals for a defined pediatric cohort.

### Enterprise Admin Journey

1. Creates or receives a StarPals organization tenant.
2. Selects program type, such as asthma, diabetes, ADHD routine support, post-op recovery, oncology supportive care, cystic fibrosis, anxiety, or general wellness.
3. Configures roles for providers, care coordinators, school nurses, support staff, admins, and integration operators.
4. Selects integration mode:
   - Epic SMART on FHIR launch.
   - MyChart or patient-facing family connection where supported.
   - Oracle Health Millennium Platform FHIR R4.
   - Vendor-neutral SMART on FHIR.
   - CSV import, secure spreadsheet, PDF care plan upload, HL7 v2 bridge, SFTP, or webhook fallback.
5. Chooses writeback policy:
   - No writeback.
   - Human-reviewed summary export.
   - Observation or QuestionnaireResponse writeback.
   - DocumentReference only.
   - Organization-specific protocol for device-derived signals.
6. Configures escalation:
   - Family-only guidance.
   - Care coordinator queue.
   - Provider inbox.
   - Crisis resource copy.
   - "Contact your care team" prompt.
7. Reviews security and compliance packet:
   - HIPAA readiness.
   - BAA path.
   - SOC 2 roadmap.
   - COPPA safeguards.
   - Vendor inventory.
   - Data-flow diagram.
   - Pen test plan.
   - Incident response workflow.

### Success Criteria

- Organization can invite a pilot cohort without custom engineering.
- Every role has least-privilege access.
- Integration mode and writeback policy are explicit.
- Security and procurement evidence is available before family onboarding.

## Phase 1: Identification and Invitation

### Provider-Led Invitation

1. Provider opens the patient's chart during a visit, discharge workflow, medication renewal, chronic care review, or care management call.
2. StarPals appears through SMART on FHIR launch, CDS Hooks suggestion, provider dashboard, or manual clinic workflow.
3. Provider sees why the child is eligible:
   - Repeating home-care routines.
   - Medication, hydration, PT, breathing, mood, sleep, appointment, symptom, or self-advocacy tasks.
   - Caregiver burden or adherence concerns.
   - Upcoming transition to more child self-management.
4. Provider selects a condition-specific starter pathway or care plan template.
5. Provider sends the family an invite through MyChart, patient portal message, QR code, SMS, email, discharge packet, or care coordinator handoff.

### Family-Led Invitation

1. Caregiver discovers StarPals through a clinic handout, disease nonprofit, hospital foundation, school nurse, payer program, or family referral.
2. Caregiver creates an account and connects a provider later.
3. Caregiver can start with manual tasks, PDF care plan upload, or a guided family care plan.

### Child Framing

The child is not told, "Here is your adherence tool." The child hears:

"Your care team found a StarPal who needs your help. Small brave things you already do can help their world grow."

### Success Criteria

- Family understands StarPals as supportive play, not surveillance.
- Provider can enroll the family in under two minutes.
- Caregiver knows what data will and will not be shared.

## Phase 2: Caregiver Onboarding and Consent

### Caregiver Journey

1. Opens invite link and verifies identity.
2. Creates caregiver profile.
3. Creates child profile with display name, age band, accessibility needs, preferred language, and optional comfort preferences.
4. Reviews plain-language consent:
   - What StarPals stores.
   - What the child sees.
   - What caregivers see.
   - What providers can see.
   - What can be exported or written back.
   - What AI features may process.
   - What device data may be connected.
5. Chooses sharing settings:
   - Family-only mode.
   - Provider summary sharing.
   - EMR export with approval.
   - Device signal sharing.
   - Research participation.
6. Adds delegated caregivers if needed:
   - Other parent.
   - Grandparent.
   - Babysitter.
   - School nurse.
   - Home health aide.
   - Teen self-management access.
7. Sets parent gate, notification preferences, and quiet hours.

### Compliance and Safety Requirements

- COPPA-oriented consent for children under 13.
- Teen privacy configuration for adolescent users.
- Guardian/proxy model for separated households, foster care, and delegated support.
- Consent ledger records who approved what, when, for which child, and for which organization.
- Data minimization by default.
- No third-party behavioral targeting.
- Clear revocation and deletion request path.

### Success Criteria

- Caregiver can complete onboarding without reading legalistic policy screens.
- Consent is granular but not overwhelming.
- Child experience cannot begin until required caregiver approvals are complete.

## Phase 3: Care Plan Import and Human Approval

### Import Paths

StarPals supports multiple entry points because not every customer can start with full FHIR integration.

| Source | Future Workflow | Human Approval |
| --- | --- | --- |
| Epic on FHIR | Import CarePlan, Goal, MedicationRequest, Appointment, Questionnaire, Observation, DocumentReference where supported | Caregiver and/or clinician approves child-facing quests |
| MyChart or patient portal | Family connects patient-facing access where supported, respecting proxy and teen privacy limits | Caregiver approves imported tasks |
| Oracle Health Millennium | Import FHIR R4 resources through customer-approved endpoints | Caregiver and/or clinician approves |
| SMART on FHIR vendor-neutral | Launch from EMR context and import supported resources | Provider reviews mapping |
| PDF care plan upload | Care Plan Interpreter Agent extracts proposed tasks | Caregiver confirms every task |
| CSV or spreadsheet | Clinic uploads pilot cohort care plan tasks | Admin and provider validate template |
| Manual caregiver entry | Caregiver creates tasks from instructions | Caregiver owns source label |

### Care Plan Interpreter Agent Journey

1. Reads clinician-approved instructions, FHIR resources, or uploaded document.
2. Converts medical tasks into proposed StarPals Care Cards.
3. Separates caregiver-only clinical detail from child-facing quest language.
4. Flags ambiguity:
   - Unclear timing.
   - Missing dose.
   - Contradictory instructions.
   - Sensitive diagnosis.
   - Potential teen privacy concern.
5. Shows proposed tasks with source citations.
6. Requires caregiver or clinician approval before activation.

### Child-Facing Transformation

| Clinical Source | Caregiver View | Child View |
| --- | --- | --- |
| MedicationRequest | Medication name, time, instructions, source, adherence history | "Help Lumi with an energy quest" or caregiver-approved wording |
| Hydration goal | Daily target, timing, provider notes | "Sip some water. Your StarPal is thirsty too." |
| Breathing exercise | Protocol, frequency, symptoms context | "Take a calm breath with your StarPal." |
| Mood check-in | Mood trend and notes | "What color is your sky today?" |
| PT exercise | Movement instructions and safety notes | "Stretch with your StarPal." |
| Appointment | Date, provider, prep tasks | "Pack questions for the next visit." |

### Success Criteria

- No child-facing task exposes unnecessary diagnosis, dose, or sensitive detail.
- Every task retains provenance: source system, source ID, version, timestamp, owner, and approval state.
- Conflicts between EMR plan and caregiver-edited task are visible before activation.

## Phase 4: Magical Child Onboarding

### Child Journey

1. Child opens StarPals after caregiver setup.
2. Sees a magical welcome, not a health dashboard.
3. Selects age-appropriate experience:
   - Preschool support with caregiver-led play.
   - Early elementary with picture-first quests.
   - Preteen with more choice and mastery.
   - Teen with privacy and autonomy settings.
4. Chooses a StarPal.
5. Names the StarPal.
6. Enters the habitat.
7. Sees a small set of approved quests for today.

### Design Rules

- One primary action per screen.
- Big tap targets.
- Low text density.
- Warm and non-clinical language.
- No hospital-blue visual identity.
- No diagnosis labels in the child world.
- No red failure states.
- Reduced motion, screen reader, voice-over, dyslexia-friendly, and non-reading modes.

### Success Criteria

- Child understands what to do without adult explanation.
- Child bonds with the StarPal before seeing care tasks.
- Child can complete the first quest in the same session.

## Phase 5: Daily Quest Loop

### Standard Day

1. Child opens StarPals.
2. StarPal greets them with context-aware warmth.
3. Today's Care Cards appear:
   - Medication routine.
   - Hydration.
   - Breathing.
   - PT or movement.
   - Mood check-in.
   - Appointment prep.
   - Rest.
   - Ask for help.
4. Child taps a Care Card.
5. Task completion may be:
   - Child self-confirmed.
   - Caregiver-confirmed.
   - Device-supported.
   - Provider-assigned and caregiver-approved.
6. Stardust flows to the StarPal.
7. Pet glows, grows, unlocks a tiny reward, or contributes to a world quest.
8. Child may send a prewritten Kindness Comet.
9. Child receives a short story or sticker reward.

### Caregiver View

Caregiver sees:

- Completed routines.
- Skipped or snoozed tasks.
- Mood weather.
- Pattern-focused insights.
- Suggested routine anchors.
- No shame copy.
- No surveillance-style feed.

### Provider View

Provider sees only configured clinical signal:

- Weekly completion patterns.
- Exceptions.
- Mood or symptom trends.
- Appointment prep notes.
- Caregiver concerns.
- Device-supported summaries where approved.

### Success Criteria

- Child wants to return for story, companion, and collection.
- Caregiver does less repeated reminding.
- Provider receives useful summary signal without reviewing raw play events.

## Phase 6: Wearable and Device Signal Support

### Caregiver Setup Journey

1. Caregiver opens Device Center.
2. Chooses a platform or device:
   - Apple HealthKit / Apple Health.
   - Google Health Connect.
   - Fitbit.
   - Garmin.
   - Oura.
   - Withings.
   - WHOOP.
   - Samsung Health or Wear OS.
   - Dexcom or Abbott glucose pathways.
   - Smart inhaler.
   - Connected medication dispenser.
   - Pulse oximeter, thermometer, scale, blood pressure cuff, or spirometer.
3. Reviews per-signal permissions.
4. Chooses whether each signal is:
   - Family-only.
   - Used for child-safe quest support.
   - Included in caregiver recap.
   - Shared with provider as summary.
   - Eligible for EMR writeback after review.
5. Confirms retention period and revocation behavior.

### Child Experience

The child does not see raw vitals unless intentionally designed and approved. Signals become gentle support:

- Sleep signal: "Your StarPal noticed a restful night."
- Step signal: "Your StarPal found trail sparkles from your movement."
- Hydration signal: "The garden looks refreshed."
- Inhaler or medication dispenser event: "Your StarPal's routine quest is ready to celebrate."

### Provider Experience

Provider does not receive a raw wearable stream by default. They receive:

- Trend summaries.
- Exceptions.
- Data quality notes.
- Source attribution.
- Manual-vs-device distinction.
- Missing data explanations.
- Confidence score.

### Data Governance

Every device-derived signal must preserve:

- Source device or platform.
- Timestamp.
- Timezone.
- Units.
- Sampling interval.
- Manual-vs-passive flag.
- Confidence.
- Consent status.
- FHIR Observation, Device, DeviceMetric, DeviceUseStatement, and Provenance mapping where shared clinically.

### Success Criteria

- Device data lowers manual burden without creating false certainty.
- Caregiver understands what is being collected and shared.
- Provider can trust the summary because provenance and data quality are visible.

## Phase 7: Hard Day and Missed Task Recovery

### Child Journey

1. Child misses a task or skips a day.
2. StarPal does not punish, scold, downgrade, or show red failure states.
3. The next session begins with warmth:
   - "Your StarPal missed you."
   - "Today is new."
   - "Want to do one tiny brave thing?"
4. Child sees a reduced-friction option:
   - Tiny approved step.
   - Ask caregiver for help.
   - Rest mode.
   - Mood check-in.
   - Return-to-routine quest.
5. Child receives progress for returning, not perfection.

### Caregiver Journey

1. Sees a pattern, not blame.
2. Gets possible routine anchors:
   - Move reminder earlier.
   - Pair with bedtime.
   - Use caregiver confirmation.
   - Offer hard-day mode.
   - Contact care team if protocol says so.
3. Can add a note for provider if needed.

### Provider Journey

Provider sees a flag only when configured thresholds are met:

- Repeated missed medication routine.
- Concerning mood trend.
- Symptom pattern.
- Device-supported exception.
- Caregiver request for help.

### Success Criteria

- Missed care does not create shame.
- Caregiver receives actionable support.
- Provider signal remains low-noise and protocol-driven.

## Phase 8: AI-Supported Personalization

### Child-Facing AI

The Storyteller Agent creates safe, short, age-appropriate adventures based on:

- Pet name.
- Pet type.
- Completed Care Cards.
- Community quest.
- Approved content boundaries.
- Reading level.
- Cultural and language preferences.

It must not:

- Diagnose.
- Mention real medicine details.
- Give medical advice.
- Mention the child being sick unless explicitly approved for a therapeutic context.
- Generate scary, unsafe, or shame-based content.

### Caregiver-Facing AI

The Caregiver Coach Agent suggests low-pressure support:

- Routine anchors.
- Conversation starters.
- Hard-day adjustments.
- Appointment questions.
- Ways to reduce conflict.

It must not change prescriptions, diagnose symptoms, or replace care-team advice.

### Provider-Facing AI

The Clinical Summary Agent converts events into a concise review:

- What changed.
- What was missed.
- What the child or caregiver reported.
- What device data suggests, with confidence.
- What source events support the summary.
- Whether human review is required before export.

### Human Approval Requirements

- AI-proposed care tasks require caregiver or clinician approval.
- AI-generated provider summaries require review before EMR writeback.
- High-risk outputs route to approved escalation workflows.
- Every AI output logs model, prompt version, source data IDs, policy checks, approval status, and reviewer action.

### Success Criteria

- AI reduces caregiver and provider burden without becoming an unapproved clinical actor.
- Every generated output can be traced back to source data and policy checks.

## Phase 9: Parent and Family Operating System

### Family Dashboard

The caregiver dashboard becomes the calm operating layer for the family:

- Today's care plan.
- Weekly patterns.
- Mood weather.
- Missed-task recovery.
- Appointment prep.
- Refill and supplies tracker.
- School handoff.
- Care team contacts.
- Delegated caregiver notes.
- Multi-child routines.
- Device permissions.
- Data sharing and deletion controls.

### Shared Caregiver Handoff

Caregiver can grant limited access:

- "Grandparent can confirm evening hydration."
- "School nurse can see lunchtime medication task only."
- "Babysitter can see bedtime checklist, not diagnosis."
- "Teen can keep mood reflection private unless safety threshold is reached."

### Success Criteria

- StarPals remains useful before deep clinic integration.
- Families can coordinate care without exposing more data than needed.
- Parent insight reduces conflict rather than increasing anxiety.

## Phase 10: Provider and Care Team Workflow

### Provider Dashboard

Care teams can view:

- Cohort list.
- Adherence trends.
- Mood and symptom trends.
- Upcoming appointment prep.
- Care plan status.
- AI-generated summaries awaiting review.
- Escalation queue.
- Integration health.
- Device summary availability.
- Outcome metrics.

### Patient Timeline

Timeline shows clinically relevant events:

- Care task completion.
- Skips and snoozes.
- Caregiver notes.
- Symptom check-ins.
- Mood trends.
- Device-derived summaries.
- Appointment prep.
- Provider-reviewed exports.

It hides child-facing game details unless they clarify engagement.

### EMR Writeback Journey

1. Provider or care coordinator opens a StarPals summary.
2. Summary shows source events and confidence.
3. Reviewer edits or approves.
4. StarPals writes configured resource type:
   - Observation.
   - QuestionnaireResponse.
   - DocumentReference.
   - Communication.
5. FHIR Provenance records source, transformation, reviewer, timestamp, and destination.
6. Integration dashboard tracks success or failure.

### Success Criteria

- Provider review takes minutes, not another dashboard shift.
- Writeback is explicit, reviewed, and auditable.
- The care team sees enough signal to act but not enough noise to ignore the product.

## Phase 11: Community and Belonging

### Child Community Journey

1. Child contributes Stardust to an anonymous community quest.
2. World progress increases:
   - Singing Meadow blooms.
   - Cloudy sky clears.
   - Constellation lights up.
   - Seasonal world expands.
3. Child sees that other StarPals are helping too, without identities, diagnoses, locations, or competition.
4. Child can send prewritten Kindness Comets.
5. Child receives safe support back through curated templates.

### Community Safety Rules

- No free-text child-to-child chat.
- No public diagnosis.
- No public profile.
- No follower graph.
- No location.
- No leaderboard.
- No ranking by health completion.
- Aggregate community data uses minimum cohort thresholds.
- Sensitive cohorts can disable community features.

### Success Criteria

- Child feels less alone.
- Caregiver and provider can trust the social layer.
- Community improves retention without creating privacy or comparison risk.

## Phase 12: Appointment Prep and Visit Loop

### One Week Before Visit

StarPals prompts caregiver to prepare:

- What went well?
- What felt hard?
- Any symptoms or concerns?
- Any photos to attach?
- Any questions for the care team?
- Any medication, refill, device, school, or routine issues?

### Child Contribution

Child can add age-appropriate input:

- "What should your StarPal tell the doctor?"
- "What was hard this week?"
- "What are you proud of?"
- "Which quest needs help?"

### Provider Review

Before or during the visit, provider sees:

- Care plan summary.
- Adherence pattern.
- Mood/symptom trend.
- Device signal summary.
- Caregiver questions.
- Child wins.
- Suggested agenda.

### After Visit

1. Provider updates care plan in EMR or dashboard.
2. StarPals detects changed care plan through FHIR subscription, polling, or manual update.
3. Caregiver reviews changes.
4. Child sees updated quests only after approval.
5. Story world adapts to new routines without presenting the change as a setback.

### Success Criteria

- Visit quality improves because the family arrives with concrete signal.
- Care plan changes do not surprise the child.
- Provider and caregiver agree on what becomes child-facing.

## Phase 13: Teen Transition Journey

### Transition Goal

StarPals helps children gradually become capable self-managers without abruptly removing caregiver support.

### Teen Experience

- More mature visual mode.
- Private reflection settings.
- Goal-setting language.
- Self-advocacy quests.
- Appointment question builder.
- Medication routine ownership with caregiver safety controls.
- Optional provider-facing summary of teen-approved reflections.

### Caregiver Experience

- Learns what the teen can manage independently.
- Gets safety-relevant signal without reading every reflection.
- Can configure shared vs private categories based on law, organization policy, and family preference.

### Provider Experience

- Supports transition-readiness conversations.
- Reviews self-management progress.
- Flags sensitive data boundaries.

### Success Criteria

- Teen feels respected, not monitored.
- Caregiver has enough safety visibility.
- Provider can guide developmental transition.

## Phase 14: School, Home Health, and Extended Support

### School Nurse Journey

1. Caregiver grants school nurse limited access.
2. School nurse sees only school-relevant tasks.
3. School nurse can confirm allowed routines.
4. StarPals logs access and action.
5. Caregiver can revoke access anytime.

### Home Health or Support Worker Journey

1. Caregiver grants limited task view.
2. Worker confirms tasks or leaves handoff notes.
3. Sensitive diagnoses and teen reflections remain hidden unless explicitly permitted.

### Success Criteria

- Extended support improves routine completion.
- Access is narrow, auditable, and revocable.
- School workflows do not accidentally turn StarPals into a public health disclosure.

## Phase 15: Outcomes, Research, and Defensibility

### Outcomes Journey

StarPals measures:

- Activation.
- D1, D7, D30 retention.
- Daily task completion.
- Missed-task recovery.
- Parent burden reduction.
- Provider time saved.
- Clinical summary usefulness.
- EMR integration reliability.
- Device signal usefulness.
- Consent trust.
- Program expansion.

### Research Journey

1. Organization creates approved study or quality-improvement program.
2. Caregiver receives research consent.
3. Data is de-identified or governed under approved protocol.
4. Minimum cohort thresholds apply.
5. Researchers access only approved datasets.
6. Findings feed back into condition-specific care journey templates.

### Defensibility

The product compounds through:

- Clinically governed care journey templates.
- Engagement response patterns.
- Family routine graph.
- EMR-integrated adherence outcomes.
- Device signal quality layer.
- Provider workflow integration.
- Security and compliance trust.

### Success Criteria

- StarPals can prove measurable adherence and engagement lift.
- Enterprise buyers can justify expansion.
- Data advantage grows without violating family trust.

## Future Journey Scenarios

### Scenario A: Asthma Program Through Epic and MyChart

1. Pediatric pulmonology program configures an asthma pathway.
2. Provider sees a CDS Hooks enrollment prompt during chronic care review.
3. Family receives MyChart invitation.
4. Caregiver consents and imports care plan.
5. StarPals converts controller routine, hydration, breathing, symptom check-in, and appointment prep into quests.
6. Smart inhaler data is connected by caregiver but used only for summary signals.
7. Child completes daily quests and helps restore a community meadow.
8. Caregiver sees missed evening patterns and changes reminder timing.
9. Provider reviews a human-approved summary before follow-up.
10. Program measures engagement, symptom tracking completeness, and caregiver burden reduction.

### Scenario B: Diabetes Support With Device Summaries

1. Diabetes clinic invites family after education visit.
2. Caregiver connects approved glucose pathway and Apple Health or Health Connect.
3. StarPals never interprets glucose for the child.
4. Child sees hydration, meal, mood, movement, and self-advocacy quests.
5. Caregiver sees routine and device signal summaries.
6. Provider receives trend summary with provenance and confidence, not raw continuous data by default.
7. StarPals supports appointment prep and question collection.

### Scenario C: Post-Surgery Recovery Without EMR Integration

1. Care coordinator uploads a secure spreadsheet or PDF care plan.
2. Care Plan Interpreter Agent proposes wound check, hydration, walking, medication routine, rest, and mood tasks.
3. Caregiver approves each task.
4. Child uses StarPals for two weeks of recovery quests.
5. Caregiver exports a summary PDF for the follow-up appointment.
6. Clinic later upgrades to SMART on FHIR after pilot success.

### Scenario D: Teen Anxiety and Routine Support

1. Behavioral health team configures a non-diagnostic anxiety support pathway.
2. Teen chooses privacy settings for reflections.
3. StarPals uses breathing, journaling, sleep wind-down, movement, appointment prep, and ask-for-help quests.
4. Caregiver sees completion patterns and safety-relevant exceptions, not every private reflection.
5. Provider receives teen-approved summary and escalation only under approved protocol.

### Scenario E: School Day Support

1. Caregiver grants school nurse access to one lunchtime routine.
2. School nurse confirms task completion.
3. Child sees StarPal celebrate after school.
4. Caregiver sees audit log.
5. School nurse access automatically expires at the end of the semester unless renewed.

## Journey Metrics by Stakeholder

| Stakeholder | Leading Metrics | Lagging Metrics |
| --- | --- | --- |
| Child | First quest completion, voluntary opens, story unlocks, hard-day returns | D7/D30 retention, care task completion, self-management confidence |
| Caregiver | Onboarding completion, consent clarity, recap opens, reminder reduction | Parent burden reduction, routine conflict reduction, retention |
| Provider | Summary review rate, useful signal rating, enrollment conversion | Care management time saved, care plan adherence lift, expansion |
| Enterprise buyer | Procurement readiness, integration uptime, implementation speed | Renewal, service-line expansion, value-based care evidence |
| Product | Quest completion, missed-task recovery, community participation | Activation, cohort retention, condition pathway performance |
| Trust and safety | Consent success, access review completion, audit coverage | Incident rate, security questionnaire pass rate, escalation quality |

## Required Product Capabilities

### Must Exist Before Clinical Pilot

- Secure caregiver and child profiles.
- Parent approval gate for care tasks.
- Consent and privacy center.
- Audit event schema.
- Configurable care plan tasks.
- Basic provider summary.
- FHIR sandbox import prototype.
- Security baseline packet.
- AI safety policy and deterministic fallback.
- No free-text child social features.

### Must Exist Before Enterprise Expansion

- SSO and role-based organization controls.
- Epic/MyChart and Oracle Health implementation guides.
- SMART on FHIR launch path.
- Integration monitoring.
- Wearable/device consent and provenance.
- Human-reviewed EMR writeback.
- Provider dashboard.
- Condition-specific templates.
- SOC 2 roadmap and procurement evidence.
- Incident response and breach notification workflow.

### Must Exist Before Device-Driven Clinical Workflows

- Per-signal consent.
- Device source attribution.
- Missing-data and duplicate handling.
- Manual-vs-device distinction.
- Confidence scoring.
- Provider review controls.
- FHIR Observation, Device, and Provenance mappings.
- Regulatory review for any remote monitoring or clinical decision support use case.

## Non-Goals in the Future Journey

- StarPals does not diagnose.
- StarPals does not recommend medication changes.
- StarPals does not replace clinicians, therapists, school nurses, or caregivers.
- StarPals does not expose diagnosis labels in the child community.
- StarPals does not rank children by health task completion.
- StarPals does not stream raw wearable data to providers by default.
- StarPals does not write to the EMR without organization configuration, consent, provenance, and human review.
- StarPals does not use child engagement mechanics for paid pressure, loot boxes, dark patterns, ads, or behavioral targeting.

## Open Journey Questions

1. Which first condition creates the strongest pilot journey: asthma, diabetes, ADHD, post-op recovery, anxiety, or oncology supportive care?
2. Should the first paid pilot be provider-led from the EMR or family-led with provider export?
3. Which integration path creates the fastest trust signal: Epic/MyChart, Oracle Health, or vendor-neutral SMART on FHIR?
4. Which low-risk wearable signal should launch first: steps, sleep, hydration, or medication dispenser event?
5. How much teen privacy can be productized generically vs configured by organization and state law?
6. Which summaries belong in the EMR and which should stay in StarPals?
7. What is the minimum compliance package needed before the first paid provider pilot?
8. Which community rituals improve belonging without increasing moderation or privacy risk?

## Narrative Summary

In the future StarPals journey, a care plan does not land on a child as a list of chores. It moves through a governed system: provider configuration, caregiver consent, human-approved care plan translation, child-safe quest design, device provenance, AI safety checks, and provider review.

The child experiences a magical companion and a world that grows through small brave actions. The caregiver experiences less conflict and more control. The provider experiences useful signal between visits. The enterprise buyer experiences a product that can survive procurement, security review, workflow integration, and outcomes measurement.

That is the durable wedge: StarPals turns pediatric chronic care from daily compliance theater into a trusted, interoperable, emotionally intelligent engagement layer.
