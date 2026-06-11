# StarPals Advanced Backlog

## Product Thesis

StarPals should become the child-friendly engagement layer for pediatric care plans: clinicians configure or approve care goals in the EMR, families experience them as gentle quests and story progress, and care teams receive useful adherence and symptom signals without turning the child experience into a medical dashboard.

The venture-scale opportunity is to own the "last mile" between care plans and daily behavior for children with chronic, behavioral, post-acute, and preventive care needs. The initial wedge can be medication, hydration, movement, breathing, mood, and caregiver check-ins, then expand into a clinical-grade care plan engagement platform.

## Strategic Priorities

1. Make StarPals medically useful while keeping the child experience safe, playful, and non-clinical.
2. Integrate with EMR workflows through FHIR, SMART on FHIR, CDS Hooks, and fallback integration rails.
3. Build game mechanics that create retention through progress, mastery, social contribution, and personalization.
4. Use AI agents to reduce caregiver burden, personalize engagement, and help clinicians see what matters.
5. Design for trust: HIPAA readiness, parental consent, auditability, safety rails, and clinician governance.
6. Create strong venture signals: high activation, daily retention, measurable adherence lift, provider willingness to pay, and distribution through clinics, payors, schools, and condition-focused partners.

## Roadmap Milestones

### Milestone 1: Clinical-Ready Foundation

Goal: Convert the demo into a trustworthy family health product with secure accounts, configurable care plans, and parent-controlled data.

- Account system with child profiles, caregiver profiles, provider profiles, and role-based access.
- Secure care task model replacing hardcoded local quests.
- Parent care plan editor with medication, hydration, movement, breathing, mood, appointment, symptom, and free-text task types.
- Consent center for caregiver permissions, provider sharing, data export, and revocation.
- Audit log for task changes, care plan changes, provider views, and data exports.
- HIPAA-oriented architecture plan: encryption at rest, encryption in transit, least privilege access, session controls, backups, incident workflow, and Business Associate Agreement readiness.
- Enterprise trust foundation: MFA, optional passkeys, SSO-ready identity, organization tenancy, least-privilege admin roles, break-glass policy design, and evidence capture for procurement.
- Child privacy and compliance controls for COPPA, teen privacy, guardian/proxy access, data minimization, parental consent, deletion requests, and sensitive-condition segmentation.
- Data retention controls for child data, generated stories, adherence logs, messages, and wearable signals.
- Safety copy and escalation rules clarifying that StarPals supports care plan adherence but does not diagnose, prescribe, or replace clinical advice.

### Milestone 2: FHIR Care Plan Integration

Goal: Pull clinician-approved care goals from EMRs and push adherence summaries back into the clinical workflow.

- FHIR gateway service with normalized internal models for Patient, CarePlan, Goal, ActivityDefinition, ServiceRequest, MedicationRequest, MedicationStatement, Observation, Questionnaire, QuestionnaireResponse, Encounter, Practitioner, Organization, and DocumentReference.
- SMART on FHIR OAuth launch for Epic, Oracle Health/Cerner, athenahealth, Meditech, Canvas, Healthie, and other FHIR-enabled systems.
- Epic integration track covering Epic on FHIR sandbox registration, SMART launch, user context handling, patient-facing FHIR app flow, CDS Hooks enrollment prompts, Bulk Data planning, Showroom/listing readiness, and MyChart-facing family access where supported by the customer.
- Oracle Health integration track covering Oracle Health Millennium Platform FHIR R4 APIs, SMART app provisioning, authorization framework, patient and provider public endpoint validation, and migration away from unsupported DSTU2 assumptions.
- MyChart and patient portal strategy for guardian/proxy access, adolescent privacy rules, family-mediated OAuth, deep links back to StarPals care quests, and patient-entered data review before anything reaches the chart.
- Patient-mediated connection flow for families using OAuth where available.
- Provider-mediated connection flow for clinics launching StarPals inside the EMR.
- Care plan import mapper that converts FHIR CarePlan activities into child-friendly StarPals quests.
- Medication task import from MedicationRequest with dose timing, display name, route, instructions, and caregiver-only safety details.
- Observations export for adherence, mood check-ins, hydration, movement, breathing exercises, symptoms, and caregiver notes.
- QuestionnaireResponse export for structured check-ins and validated pediatric screeners when licensed or clinic-provided.
- DocumentReference export for weekly family-friendly summaries and provider recap PDFs.
- CDS Hooks integration to surface StarPals enrollment suggestions during pediatric visits, discharge planning, medication renewal, or chronic care review.
- FHIR subscription or polling strategy to detect updated care plans and notify caregivers before quests change.
- Conflict resolution rules when an EMR care plan and caregiver-edited task disagree.
- Integration sandbox with public FHIR test servers plus mocked Epic and Cerner fixtures.
- Clinical terminology support for SNOMED CT, LOINC, RxNorm, ICD-10, CPT, and local task labels.
- Integration error monitoring for expired tokens, missing scopes, malformed FHIR resources, rate limits, and partial syncs.
- FHIR provenance records for imported tasks and exported observations.

### Milestone 3: Fallback Healthcare Integrations

Goal: Support customers that cannot start with full FHIR integration.

- CSV and secure spreadsheet import for clinics piloting care plans before EMR integration.
- PDF care plan ingestion for caregiver upload, with AI-assisted extraction and parent confirmation.
- Secure Direct messaging workflow for provider-facing summaries.
- HL7 v2 bridge for ADT events, appointment events, and discharge-triggered onboarding through integration partners.
- SFTP batch export for payors and care management organizations.
- Webhook API for digital health partners to create tasks, receive adherence events, and update family-facing care journeys.
- Apple Health, Google Health Connect, and device integration backlog for steps, sleep, heart rate, respiratory rate, glucose, inhaler sensors, and connected medication dispensers.
- School nurse and care coordinator portal with parent-approved access.

### Milestone 3A: Wearable and Device Signal Layer

Goal: Turn caregiver-approved device data into useful, low-noise care signals without making StarPals a diagnosis or remote monitoring device by default.

- Apple HealthKit and Apple Health ingestion for caregiver-approved activity, sleep, heart rate, respiratory rate, mindfulness, medication logging where available, symptoms, and clinical records where appropriate.
- Google Health Connect ingestion for Android activity, sleep, vitals, nutrition, hydration, mindfulness, and medical-record data with explicit per-data-type permissions.
- Fitbit, Garmin, Oura, Withings, WHOOP, Samsung Health, and Wear OS connector backlog through native APIs or Health Connect/Apple Health aggregation.
- Condition-specific device backlog for Dexcom and Abbott glucose data, smart inhaler sensors, spirometers, pulse oximeters, blood pressure cuffs, thermometers, connected scales, and smart medication dispensers.
- Device signal normalization into FHIR Observation, Device, DeviceMetric, DeviceUseStatement, and Provenance where clinically shared, with LOINC, SNOMED CT, and UCUM mapping.
- Passive signal rules that translate steps, sleep, hydration, glucose ranges, inhaler use, and medication dispenser events into caregiver-visible patterns and optional child-safe quest progress.
- Device consent center with caregiver permission by device, signal type, child profile, provider share, retention period, and deletion/revocation state.
- Data quality pipeline for source attribution, manual-vs-device flags, sampling windows, missing data, duplicates, timezone drift, battery gaps, and confidence scoring.
- Alerting guardrails that avoid diagnosis, emergency triage, or medication advice unless a provider-configured protocol and escalation workflow explicitly supports it.
- Provider review workflow for deciding which wearable or device signals can be written back to the EMR, summarized only, or kept family-only.

### Milestone 4: Interactive Game Expansion

Goal: Move from a charming habit tracker to a retained daily game loop that still respects pediatric health constraints.

- Quest map with daily, weekly, seasonal, and condition-specific regions.
- Care task chains that unlock story branches, companion abilities, cosmetic rewards, and habitat upgrades.
- Skill tree for calm, energy, strength, hydration, kindness, courage, and routine mastery.
- Mini-games tied to care behaviors: breathing rhythm, hydration timing, stretching movement, medication routine, mood naming, and sleep wind-down.
- Adaptive difficulty that lowers friction on hard days and celebrates partial completion.
- Branching story engine where care tasks influence world state, unlocked characters, and seasonal events.
- Co-op family quests where caregivers and siblings can support the child without competing over health outcomes.
- Community quests with privacy-preserving aggregate contribution and no public child health disclosure.
- Collection system for stickers, habitat objects, constellations, outfits, songs, and story artifacts.
- Streak replacement model focused on "returning after a hard day" instead of punitive streak loss.
- Offline-first daily play with sync recovery.
- Accessibility mode for reduced motion, dyslexia-friendly text, color contrast, screen readers, switch control, and non-reading children.
- Age-banded experiences for preschool, early elementary, preteen, and teen users.
- Condition-specific content packs for asthma, diabetes, ADHD, oncology support, cystic fibrosis, sickle cell disease, post-surgery recovery, physical therapy, anxiety, sleep, and general wellness.
- Caregiver-configured reward economy with no loot boxes, no dark patterns, and no paid pressure on children.

### Milestone 5: AI Agent System

Goal: Use agents to personalize engagement, reduce administrative work, and surface clinically relevant signals with human approval.

- Care Plan Interpreter Agent: converts clinician instructions, FHIR CarePlan resources, and uploaded care documents into proposed StarPals quests for caregiver review.
- Quest Personalization Agent: rewrites tasks into age-appropriate, condition-aware, culturally sensitive, and reading-level-appropriate language.
- Storyteller Agent: generates safe branching stories from completed care actions, emotional tone, and approved content boundaries.
- Caregiver Coach Agent: suggests low-pressure ways to help when tasks are missed, routines break, or the child reports a difficult mood.
- Clinical Summary Agent: turns adherence, symptoms, mood, and caregiver notes into concise provider recaps with citations to underlying events.
- Escalation Triage Agent: detects concerning patterns and routes to caregiver-only guidance, clinic messaging, crisis resources, or "contact your care team" prompts based on approved protocols.
- Medication Routine Agent: helps caregivers identify missed-dose patterns, refill timing, schedule conflicts, and routine anchors without changing prescriptions.
- Integration Agent: monitors FHIR sync failures, maps ambiguous resources, proposes fixes, and flags integration drift.
- Content Safety Agent: reviews generated stories, caregiver messages, and community content for child safety, medical claims, bullying, self-harm risk, and privacy leakage.
- Growth Agent: identifies high-retention care journeys, clinic cohorts, and referral moments while respecting privacy and consent.
- Agent approval dashboard showing proposed actions, confidence, source data, safety classification, and human decision history.
- Evaluation harness for agent outputs using pediatric safety cases, hallucination tests, clinical wording constraints, and demographic fairness checks.

### Milestone 6: Provider and Care Team Platform

Goal: Give clinics enough workflow value that StarPals becomes reimbursable and deployable.

- Provider dashboard with cohort view, adherence trends, task completion, mood trends, symptom flags, and care plan status.
- Patient timeline that shows only clinically relevant signals and hides child-facing game details unless useful.
- Care plan template builder by diagnosis, age band, risk level, and clinic protocol.
- Remote therapeutic monitoring and chronic care management reporting support where legally and clinically appropriate.
- In-app enrollment workflow during visits, discharge, or care management calls.
- Team inbox for caregiver questions, adherence exceptions, and AI-generated summaries awaiting review.
- Configurable escalation pathways by organization, program, condition, and risk level.
- Provider-facing outcomes analytics: adherence lift, engagement retention, appointment preparation, avoided outreach, caregiver burden reduction, and patient-reported outcomes.
- Multi-tenant organization model for clinics, hospitals, payors, schools, and care management groups.
- Admin controls for content libraries, protocols, templates, roles, integrations, and data access.

### Milestone 7: Parent and Family Operating System

Goal: Make StarPals useful enough for families even before deep clinic adoption.

- Family calendar for medication, appointments, therapy, school accommodations, sleep routines, and care tasks.
- Shared caregiver handoff notes with permissions for parents, grandparents, babysitters, school nurses, and home health aides.
- Smart reminders that adapt to routines, missed tasks, school schedules, travel, and appointment days.
- Refill and supplies tracker for medications, inhalers, diabetes supplies, wound care, nutrition, and therapy equipment.
- Appointment prep mode that gathers symptoms, wins, questions, photos, and adherence patterns.
- Care team contact card with escalation guidance configured by the caregiver or provider.
- Parent insight feed focused on patterns, not guilt.
- Child privacy controls for teen users, including shared vs private reflections based on age, law, and caregiver settings.
- Multi-child family mode with separate care plans and shared routines.
- Insurance, pharmacy, and prior authorization reminder backlog for later enterprise integrations.

### Milestone 8: Data, Outcomes, and Defensibility

Goal: Build evidence, proprietary engagement data, and integration depth that compound over time.

- Event schema for every care task view, completion, skip, snooze, parent edit, story unlock, mood check-in, and provider action.
- Experimentation platform for task wording, reward timing, story pacing, reminder timing, and onboarding flows.
- Outcome dashboards for daily active use, D1/D7/D30 retention, task completion, missed-task recovery, caregiver burden, and provider review time.
- Clinical outcomes study backlog with pediatric clinics: adherence lift, symptom tracking completeness, appointment readiness, quality-of-life measures, and care team workload.
- De-identified aggregate analytics with strict consent, privacy review, and minimum cohort thresholds.
- Condition-specific engagement models that learn which nudges work for which families.
- Longitudinal child-safe personalization memory with caregiver controls.
- Data moat strategy: clinically governed care journey templates, engagement response patterns, family routine graph, and EMR-integrated adherence outcomes.

## Detailed Backlog

### P0: Build the Investable Clinical Wedge

| Feature | User | Outcome | Notes |
| --- | --- | --- | --- |
| Configurable care plan tasks | Caregiver | Replace hardcoded quests with real care routines | Task type, cadence, timing, owner, reward, clinical source |
| Parent approval gate | Caregiver | Confirm imported or AI-created tasks before child sees them | Required for safety and trust |
| Basic secure auth | Family | Profiles persist across devices | Use role-based access from day one |
| Consent and privacy center | Caregiver, child | Control what is collected, shared, retained, and deleted | Needed for HIPAA, COPPA, teen privacy, and provider trust |
| Audit and access log MVP | Caregiver, provider, admin | Show who viewed or changed child health data | Capture user, role, org, object, timestamp, and reason |
| Security baseline package | Provider procurement | Prove the product can be piloted responsibly | Encryption, backups, incident response, vendor inventory, access reviews |
| Care plan versioning | Caregiver, provider | Know what changed and when | Required before EMR sync |
| FHIR import prototype | Provider | Import CarePlan and MedicationRequest from sandbox FHIR | Start with read-only integration |
| Adherence observation export | Provider | Send completed task summary back to FHIR | Export Observation or QuestionnaireResponse |
| Medication safety model | Caregiver | Keep dose details caregiver-facing while child sees a gentle quest | Avoid child-facing prescription detail where inappropriate |
| Parent recap upgrade | Caregiver | Show patterns, missed tasks, notes, and suggested routine changes | Build on existing parent page |
| AI story safety baseline | Child, caregiver | Generate stories that avoid medical advice and unsafe content | Add content filters and fallback library |
| Analytics event schema | Product, provider | Measure retention and adherence lift | Needed for YC-style traction story |

### P1: Make It Clinically Useful and Deeply Retentive

| Feature | User | Outcome | Notes |
| --- | --- | --- | --- |
| SMART on FHIR launch | Provider | Open StarPals from inside EMR context | Epic/Cerner-compatible pattern |
| Epic and MyChart integration plan | Clinic, family | Support Epic workflows and family-mediated access | Epic on FHIR, patient-facing flow, proxy access, Showroom readiness |
| Oracle Health integration plan | Clinic | Support Oracle Health Millennium customers | FHIR R4, SMART app provisioning, authorization framework, patient/provider endpoints |
| CDS Hooks enrollment prompt | Provider | Suggest StarPals for eligible children | Discharge, chronic care, med renewal |
| Quest map | Child | Daily care feels like progress through a world | Use existing habitat and story surfaces |
| Mini-game framework | Child | Care tasks unlock short interactions | Breathing, stretching, hydration, mood |
| Adaptive care difficulty | Child, caregiver | Reduce shame and friction on hard days | Partial credit and recovery mechanics |
| AI caregiver coach | Caregiver | Get practical support for missed routines | Must be clearly non-diagnostic |
| Clinical summary draft | Provider | Review concise signal instead of raw logs | Human-reviewed before EMR writeback |
| Appointment prep | Family | Convert week of data into visit-ready questions | Shareable with provider |
| Device ingestion | Family | Pull relevant signals from wearables and health apps | Start with steps and sleep |
| Wearable consent and signal quality | Caregiver, provider | Make device data explainable before it affects care workflows | Per-signal consent, provenance, missing-data handling, confidence score |
| Organization dashboard | Clinic | Manage cohorts, templates, and care team workflows | Enterprise wedge |

### P2: Venture-Scale Expansion

| Feature | User | Outcome | Notes |
| --- | --- | --- | --- |
| Condition-specific care journeys | Clinic, family | Launch evidence-informed templates by diagnosis | Asthma, ADHD, diabetes, post-op first |
| Payor reporting | Payor | Show engagement and adherence impact | Supports reimbursement path |
| School nurse portal | School, caregiver | Coordinate care during school hours | Parent-approved access |
| Family support network | Family | Let trusted adults help routines | Granular permissions |
| Research mode | Clinic, researcher | Run approved outcomes studies | Consent and IRB workflows |
| Partner API | Digital health partner | Create tasks and receive adherence events | Builds platform leverage |
| AI integration operator | Internal ops | Detect and resolve sync failures faster | Reduces implementation cost |
| Protocol marketplace | Provider orgs | Share or license care journey templates | Long-term network effect |
| Global localization | Family, clinic | Support language, culture, and local care norms | Start with Spanish |
| Value-based care analytics | Provider, payor | Prove StarPals affects outcomes and cost | Requires longitudinal data |

## Security, Privacy, and Compliance Backlog

### Identity, Access, and Governance

- Role-based and attribute-based access control for child, caregiver, teen, provider, care coordinator, school nurse, admin, support, integration operator, and auditor roles.
- Optional passkeys and MFA for caregivers, providers, admins, and support users; child access should use age-appropriate delegated sessions rather than passwords where possible.
- SSO readiness with SAML/OIDC for provider organizations, including SCIM provisioning, group mapping, session timeout policies, and offboarding.
- Organization and tenant isolation with environment separation for sandbox, pilot, production, analytics, and support tooling.
- Break-glass access workflow for support and clinical operations with approval, reason capture, short-lived elevation, and prominent audit events.
- Delegated guardian/proxy model for parents, legal guardians, separated households, foster care, grandparents, school nurses, home health aides, and teen self-management.
- Access review workflows for provider organizations, internal operators, vendors, and integration accounts.
- Least-privilege service accounts, secret rotation, token vaulting, and no shared production credentials.

### Data Protection and Secure Architecture

- Encryption in transit for all app, API, webhook, integration, and internal service traffic.
- Encryption at rest for databases, object storage, backups, logs, analytics stores, and exported files.
- Field-level encryption or token vaulting for refresh tokens, EMR identifiers, device tokens, sensitive notes, and high-risk child data.
- Key management with rotation, scoped access, separation of duties, recovery procedures, and audit evidence.
- Data minimization by default: collect only the care-plan, engagement, consent, integration, and device fields needed for the active use case.
- Data classification labels for PHI, PII, child personal information, sensitive behavioral health, school data, de-identified data, aggregated data, and operational telemetry.
- Secure file handling for uploaded care plans, PDFs, images, visit summaries, and exports with virus scanning, file-type validation, retention windows, and signed URLs.
- Backup and disaster recovery plan with recovery time objective, recovery point objective, restore tests, immutable backup option, and incident runbooks.
- Production logging policy that redacts PHI, child names, tokens, device identifiers, and care-plan free text unless explicitly approved for a protected audit trail.
- Rate limiting, abuse detection, bot mitigation, request signing for webhooks, replay protection, and anomaly detection for account takeover or scraping attempts.

### Product Privacy and Child Safety

- COPPA-oriented parental consent for children under 13, including clear notices, verifiable consent path, revocation, deletion, and parent access.
- Teen privacy model for adolescent users, including configurable private reflections, sensitive task labels, proxy limitations, and jurisdiction/provider policy differences.
- Consent ledger for provider sharing, device ingestion, EMR writeback, AI processing, research participation, caregiver delegation, school access, and marketing separation.
- Privacy-safe child UX that never exposes diagnosis labels, medication dose details, sensitive symptoms, provider notes, or peer health information unless explicitly approved.
- Family data export and deletion workflows with legal hold, clinical record retention, provider contract, and safety exception handling.
- Sensitive-condition segmentation for behavioral health, reproductive health, substance use-related data, genetic information, HIV/STI, abuse disclosures, and other restricted data categories.
- Community feature privacy controls: no public profiles, no free-text child chat, no precise location, no leaderboards based on health completion, and minimum cohort thresholds for aggregate progress.
- Age-banded safety policies for preschool, early elementary, preteen, teen, caregiver, and provider experiences.

### Compliance Programs and Procurement Evidence

- HIPAA readiness program with Security Rule risk analysis, administrative safeguards, physical safeguards, technical safeguards, policies, training, and Business Associate Agreement workflow.
- HITECH and Breach Notification readiness with incident classification, notification timeline matrix, breach risk assessment, evidence preservation, and customer communication templates.
- SOC 2 Type I then Type II roadmap for security, availability, confidentiality, processing integrity, and privacy controls.
- HITRUST readiness assessment for enterprise health-system procurement once pilots justify the cost.
- COPPA compliance packet for child-directed product review, parent consent, data use, third-party SDK review, and retention/deletion evidence.
- FERPA workflow analysis for school nurse or school district access, including whether StarPals acts under parent consent, school official rules, or a provider relationship.
- 42 CFR Part 2 and state minor-consent law review before ingesting or sharing substance use, behavioral health, reproductive health, or other specially protected records.
- FDA medical device and SaMD regulatory assessment for each feature that could move from wellness engagement into diagnosis, treatment recommendation, remote monitoring, or clinical decision support.
- Accessibility compliance plan aligned with WCAG, ADA procurement expectations, screen readers, reduced motion, color contrast, switch control, and non-reading children.
- Vendor risk management for cloud hosting, analytics, AI models, EMR integration partners, device vendors, support tools, notification services, and crash reporting.
- Security questionnaire library for clinics and hospitals: SIG Lite, CAIQ, HIPAA safeguards, pen test summary, architecture diagrams, data-flow diagrams, subprocessor list, and insurance evidence.

### Secure Development and Operations

- Secure SDLC with threat modeling for child accounts, EMR integrations, wearables, AI agents, exports, community features, and support access.
- Code scanning, dependency scanning, secret scanning, IaC scanning, container scanning, and SBOM generation in CI.
- Vulnerability management with severity definitions, SLAs, patch cadence, compensating controls, and customer notification rules.
- Annual third-party penetration test before enterprise pilots and targeted retesting after major auth, integration, or AI changes.
- Security monitoring with centralized audit logs, SIEM-ready events, alert triage, on-call escalation, and tamper-evident retention.
- Incident response tabletop exercises for lost device, compromised caregiver account, breached integration token, misdirected EMR writeback, exposed child data, and AI safety event.
- Privacy and security training for employees, contractors, support staff, and anyone with access to child or health data.
- Change management for production releases, schema migrations, integration mappings, AI prompts, clinical protocols, and data retention policy changes.

## Epic, MyChart, and Oracle Health Integration Backlog

### Epic and MyChart Track

- Epic on FHIR developer account, sandbox client registration, redirect URI strategy, scope inventory, and environment-specific app configuration.
- SMART on FHIR launch support for provider-facing embedded launch and patient-facing launch, including user context, patient context, and launch error handling.
- MyChart-facing family journey where supported: connect account, handle guardian/proxy access, respect adolescent privacy limits, import approved care plan items, and deep-link back to StarPals tasks.
- Epic Showroom/listing readiness with privacy policy, terms, data-use explanation, support process, security packet, and customer implementation notes.
- Epic CDS Hooks proof of concept for enrollment prompts during visit planning, discharge, medication renewal, chronic care review, and care gap closure.
- Epic Bulk Data planning for population-level program evaluation only after BAA, customer approval, minimum necessary review, and de-identification strategy.
- Epic writeback policy by resource and customer: Observation, QuestionnaireResponse, DocumentReference, Communication, and patient-entered data should each have explicit human review and organization settings.
- Epic sandbox and fixture library for pediatric proxy accounts, teen privacy, multiple guardians, chronic care plans, medications, appointments, and failed OAuth states.

### Oracle Health Track

- Oracle Health Millennium Platform FHIR R4 integration with separate patient and provider endpoint validation.
- SMART app provisioning and authorization framework setup for Oracle Health customer environments.
- R4-first resource mapping and explicit no-new-work policy for unsupported DSTU2 assumptions unless a customer requires a short-lived migration bridge.
- Oracle Health Patient Portal journey mapping for families where customer deployments support portal-mediated engagement.
- Oracle Health writeback policy for Observations, QuestionnaireResponses, DocumentReferences, and patient-entered data with customer-specific approval controls.
- Oracle Health sandbox and fixture library for CarePlan, Goal, MedicationRequest, ServiceRequest, Appointment, Observation, Encounter, and DocumentReference.
- Multi-tenant domain handling for large health systems, affiliates, pediatric service lines, and care management programs.

### Cross-EMR Integration Requirements

- Capability matrix by vendor and customer: supported FHIR version, SMART profile, scopes, resources, search parameters, write support, rate limits, subscriptions, CDS Hooks, Bulk Data, and patient portal paths.
- Source-of-truth rules for clinician-authored tasks, caregiver-created tasks, AI-proposed tasks, device-derived signals, and patient-entered notes.
- Data mapping review workflow with clinician sign-off before new resource mappings become active for a customer.
- Integration observability dashboard for token failures, scope errors, missing resources, sync latency, writeback queue status, partial failures, and customer-specific outages.
- Consent-aware sync engine that prevents import, export, or writeback when caregiver, teen, provider, or organization permissions do not allow it.
- FHIR Provenance records for imports, transformations, AI summaries, caregiver approvals, provider approvals, and EMR exports.
- Integration test harness with public FHIR servers, Epic fixtures, Oracle Health fixtures, malformed resources, rate-limit simulations, consent revocations, and clock/timezone edge cases.
- Implementation guide for clinics that explains launch options, data flows, scopes, supported resources, workflow changes, security posture, and rollback plan.

## Wearables and Connected Device Integration Backlog

### Consumer Health Platforms

- Apple HealthKit bridge for iOS users with per-type permission prompts, source attribution, background delivery strategy, and clear caregiver review before provider sharing.
- Google Health Connect bridge for Android users with per-record-type permissions, availability checks, history windows, aggregation rules, and Android permission UX.
- Platform abstraction that treats Apple Health and Health Connect as consented aggregators rather than definitive clinical sources.
- Fitbit, Garmin, Oura, Withings, WHOOP, Samsung Health, and Wear OS connector evaluation based on pediatric support, API access, consent model, rate limits, data types, reliability, and procurement friction.
- Manual entry fallback for families without devices, with visual distinction between self-reported, caregiver-confirmed, and device-derived data.

### Clinical and Condition-Specific Devices

- Glucose integration backlog for Dexcom and Abbott FreeStyle Libre pathways, focused first on caregiver-visible routines and provider summaries rather than child-facing glucose interpretation.
- Asthma and respiratory device backlog for smart inhaler events, spacer use, peak flow, spirometry, pulse oximetry, respiratory rate, and symptom correlation.
- Medication adherence device backlog for smart pill bottles, dispensers, blister packs, refill signals, and caregiver confirmation.
- Vitals backlog for blood pressure cuffs, thermometers, connected scales, pulse oximeters, and sleep/respiratory sensors.
- Physical therapy and movement backlog for camera-free movement confirmation, wearable step/activity sessions, range-of-motion self-report, and optional clinician-reviewed exercises.

### Signal Governance and Clinical Safety

- Device data should create "signals," not clinical conclusions, unless a customer-approved protocol says otherwise.
- Every signal must preserve device/source, timestamp, timezone, units, sampling interval, manual-vs-passive flag, confidence, and consent status.
- Normalize shareable signals to FHIR Observation with Device and Provenance references when exporting to an EMR.
- Child-facing translations should be motivational and non-clinical, such as "your StarPal noticed a restful night" instead of detailed vitals.
- Caregiver-facing views should explain uncertainty, missing data, and device limitations without creating alarm fatigue.
- Provider-facing summaries should aggregate trends and exceptions, not stream raw wearable data by default.
- Thresholds, flags, and escalation wording must be configurable by clinic, condition, age band, and care plan protocol.
- Device revocation should stop future collection, remove tokens, preserve legally required audit history, and clearly explain what historical data remains.

## Healthcare Integration Architecture Backlog

### Core FHIR Resources

- Patient: child identity, demographics, guardianship links, and EMR identifiers.
- RelatedPerson: caregivers, guardians, and delegated family members.
- Practitioner and PractitionerRole: care team members.
- Organization: clinic, hospital, school health partner, or care management organization.
- CarePlan: clinician-approved plan and care activities.
- Goal: target outcomes such as hydration, movement, medication adherence, symptom tracking, or therapy completion.
- MedicationRequest: prescribed medications and schedule source.
- MedicationStatement: family-reported medication use when appropriate.
- Observation: adherence events, mood, symptoms, device signals, and task-derived measurements.
- Questionnaire and QuestionnaireResponse: check-ins, screeners, symptom forms, and visit prep.
- ServiceRequest: therapy, labs, follow-up tasks, and referrals that can become family actions.
- Appointment: upcoming visits and prep windows.
- Encounter: visit context for summaries.
- DocumentReference: exported weekly summaries, visit prep PDFs, and care journey reports.
- Provenance: source tracking for imports, exports, AI-generated drafts, and human approvals.

### Integration Quality Requirements

- Every imported task must retain source resource ID, source system, version, timestamp, and clinical owner.
- Every exported signal must be explainable from child or caregiver actions.
- No AI-generated care task becomes active without caregiver or clinician approval.
- EMR writeback must be configurable per organization and disabled by default for early pilots.
- Sync failures must degrade to local task continuity and alert caregivers only when action is needed.
- Data mapping must support clinic-specific naming without leaking internal labels to children.
- Integration logs must be searchable by patient, source resource, sync job, and error class.

## AI Safety and Trust Backlog

- Separate child-facing, caregiver-facing, and provider-facing AI policies.
- Block diagnosis, medication changes, emergency triage claims, and unsupported clinical advice.
- Use retrieval from approved care plan, clinic protocol, and caregiver-approved profile only.
- Display source-backed explanations in caregiver and provider views.
- Preserve a deterministic fallback for all AI-generated child content.
- Log all AI outputs with model, prompt version, source data IDs, policy checks, and approval status.
- Red-team scenarios for self-harm, abuse disclosure, medication confusion, eating disorders, bullying, hallucinated care instructions, and unsafe caregiver advice.
- Age, literacy, neurodiversity, and cultural sensitivity evaluation suite.
- Human escalation workflows for high-risk check-ins.

## Game Design Backlog

### Core Loop

1. Child opens StarPals and sees a small set of care quests.
2. Child completes, skips, or asks for help with a quest.
3. StarPal responds with immediate feedback, stardust, animation, and story progress.
4. Parent gets a useful signal without interrupting play.
5. Weekly progress creates a story artifact that can be shared with caregivers or care team.

### Retention Systems

- Daily quest rotation with predictable routines and light novelty.
- Weekly episode arcs with beginning, middle, and resolution.
- Companion growth based on consistency, recovery, and courage rather than perfect completion.
- Habitat customization as the long-term collection sink.
- Seasonal community events that aggregate anonymous contribution.
- "Hard day mode" that swaps high-effort tasks for tiny approved steps.
- Return mechanic that celebrates coming back after missed days.
- Parent-child co-play moments that can be completed in under two minutes.

### Interaction Backlog

- Breathing game with paced visual rhythm and haptic/audio options.
- Stretch game with simple pose cards and optional camera-free movement confirmation.
- Hydration game with timed plant growth or habitat restoration.
- Medication routine game with caregiver confirmation and child-safe framing.
- Mood sky with richer emotion vocabulary and nonverbal choices.
- Story choice cards that affect the nightly adventure.
- Boss-free challenge events focused on repair, growth, and helping.
- Voice narration and read-aloud mode.
- AR habitat moment for optional mobile delight.

## Provider Business Backlog

- Clinic pilot package for 25 to 100 families in one condition area.
- Implementation guide for FHIR sandbox, read-only launch, and writeback phases.
- Security and compliance packet for provider procurement.
- Epic, MyChart, and Oracle Health integration one-pagers for buyer conversations, including supported launch paths, data flows, assumptions, and pilot constraints.
- Wearable and device signal policy explaining what StarPals collects, what it will not infer, and what requires provider review before sharing.
- Outcomes report template for pilot renewal.
- Pricing experiments: per enrolled child per month, per active child per month, care management bundle, payor contract, and enterprise license.
- Partner strategy: pediatric clinics, children's hospitals, digital pediatrics, Medicaid managed care, schools, pharmacies, and condition-specific nonprofits.
- Reimbursement exploration: remote therapeutic monitoring, chronic care management, behavioral health integration, and value-based care contracts.
- Customer success tooling for onboarding clinics and monitoring family activation.

## YC-Style Traction Metrics

- Activation: percentage of families completing onboarding and first care quest in the first session.
- D1 retention: percentage of children returning the next day.
- D7 retention: percentage of families completing at least one task in week two.
- Care adherence lift: completion rate compared with baseline or clinic control.
- Missed-task recovery: percentage of missed routines recovered within 24 hours.
- Parent burden reduction: self-reported reduction in reminders, conflict, or tracking effort.
- Provider time saved: minutes saved per patient review or care management outreach.
- Clinical signal quality: percentage of provider-reviewed summaries rated useful.
- EMR integration reliability: successful sync rate and time to resolve integration issues.
- Integration coverage: percentage of target pilot customers that can use Epic, MyChart, Oracle Health, SMART on FHIR, CSV, PDF, or secure export paths.
- Security procurement readiness: percentage of required security questionnaire evidence available before pilot contracting.
- Wearable signal usefulness: percentage of caregiver/provider-reviewed device summaries rated accurate, understandable, and low-noise.
- Consent trust: percentage of caregivers who understand and successfully manage data sharing, device permissions, and provider writeback settings.
- Viral/family loop: invited caregivers per active family.
- Enterprise pull: clinics asking to expand from one condition cohort to multiple programs.

## Suggested First 90 Days

### Days 1-30

- Replace static care cards with configurable care plan tasks.
- Add caregiver account, child profile, parent approval, and task history.
- Ship consent/privacy center MVP for child profiles, provider sharing, device permissions, data export, and deletion request intake.
- Define security baseline: auth model, audit event schema, data classification, encryption approach, incident runbook, vendor list, and BAA template needs.
- Build FHIR sandbox importer for CarePlan and MedicationRequest.
- Add analytics events for onboarding, task completion, story unlocks, and parent recap views.
- Upgrade parent recap into a pattern-focused care timeline.

### Days 31-60

- Add AI Care Plan Interpreter Agent with caregiver approval.
- Add AI Storyteller Agent with safety policy and deterministic fallback.
- Build first interactive mini-game for breathing or hydration.
- Export adherence observations to a FHIR sandbox.
- Create Epic/MyChart and Oracle Health implementation briefs, fixture sets, scope inventory, and launch-path decision tree.
- Prototype Apple Health or Google Health Connect ingestion for one low-risk signal such as steps or sleep, behind caregiver consent.
- Recruit 5 to 10 design partners from pediatric clinics, care coordinators, or condition-focused communities.

### Days 61-90

- Pilot one condition-specific journey, such as asthma, ADHD routine support, post-op recovery, or diabetes habit support.
- Add provider dashboard MVP with patient list, weekly summaries, and risk flags.
- Implement SMART on FHIR launch proof of concept.
- Run first security risk assessment, procurement packet review, and integration readiness review with one design partner.
- Add wearable/device provenance, missing-data handling, and provider-sharing controls before any pilot relies on passive data.
- Measure activation, D7 retention, task completion, parent burden, and provider usefulness.
- Package investor demo around one clear wedge: "clinician-approved pediatric care plans children actually follow."

## Open Product Questions

- Which first condition creates the strongest combination of frequent daily tasks, measurable adherence, low regulatory risk, and urgent caregiver pain?
- Should StarPals start as family-led consumer health with provider export, or provider-led care plan engagement with family onboarding?
- What is the minimum EMR integration that makes a clinic pilot credible: read-only import, writeback, SMART launch, or provider dashboard?
- Which named integration path creates the fastest enterprise credibility: Epic/MyChart, Oracle Health, or a vendor-neutral SMART on FHIR pilot?
- Which wearable signal is safe and useful enough for the first pilot: steps, sleep, hydration, inhaler use, medication dispenser events, or glucose summary?
- Which compliance bar is needed before the first paid provider pilot: HIPAA-ready policies, signed BAAs, SOC 2 Type I, HITRUST readiness, or a full third-party pen test?
- Which AI features create the most trust early: care plan extraction, story personalization, provider summaries, or caregiver coaching?
- How much of the child game should be condition-specific vs universally comforting and customizable?
- What outcomes will buyers pay for: adherence, reduced no-shows, care management efficiency, patient satisfaction, or quality measures?

## Non-Goals for the Near Term

- Diagnose conditions or recommend medication changes.
- Replace clinicians, therapists, school nurses, or caregivers.
- Public social network features for children.
- Competitive leaderboards based on health task completion.
- Monetization mechanics aimed at children.
- EMR writeback without explicit organization configuration and human review.
- Wearable or device data used for diagnosis, emergency triage, or medication adjustment without a provider-approved protocol and regulatory review.
- MyChart, Epic, or Oracle Health writeback that bypasses caregiver consent, teen privacy rules, provider governance, or customer configuration.
- AI-generated clinical advice without source grounding, policy checks, and clear escalation boundaries.

## Positioning Notes

- For families: "A gentle game that helps care routines feel doable."
- For providers: "A pediatric care plan engagement layer that turns clinician-approved plans into daily family action and useful adherence signals."
- For payors: "A scalable way to improve pediatric adherence, engagement, and care management visibility."
- For investors: "The operating system for pediatric care plan adherence, starting with a lovable daily companion and compounding through EMR integrations, AI-assisted workflows, and condition-specific care journeys."
