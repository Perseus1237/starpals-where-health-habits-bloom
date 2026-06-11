# StarPals Documentation Index

## Naming Convention

Documents are organized by numbered domain folders so they sort in a useful reading order:

| Folder            | Purpose                                                              |
| ----------------- | -------------------------------------------------------------------- |
| `01-product/`     | Product requirements, user journeys, personas, and experience design |
| `02-research/`    | Market, business, clinical, and venture research                     |
| `03-roadmap/`     | Backlogs, milestones, delivery plans, and future platform scope      |
| `04-engineering/` | Implementation notes, framework conventions, and technical guidance  |

File names use lowercase kebab-case with a double-hyphen qualifier:

```text
<document-type>--<specific-topic-or-scope>[-vN].md
```

Examples:

- `product-requirements--hackathon-prd-v2.md`
- `user-journey--clinical-platform-future-state.md`
- `business-analysis--yc-style.md`

## Document Map

| Document                                                                                             | Description                                                                |
| ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| [Product Requirements: Hackathon PRD v2](01-product/product-requirements--hackathon-prd-v2.md)       | Product vision, target users, goals, and demo requirements                 |
| [Hackathon Judge Path](01-product/demo-guide--hackathon-judge-path.md)                               | Live demo click path, talk track, rubric mapping, and overclaim guardrails |
| [Future User Journey: Clinical Platform](01-product/user-journey--clinical-platform-future-state.md) | End-to-end journey from family onboarding through enterprise deployment    |
| [Business Analysis: YC Style](02-research/business-analysis--yc-style.md)                            | Business thesis, market context, go-to-market, and financial outlook       |
| [Venture Analysis: Deep YC Style](02-research/venture-analysis--deep-yc-style.md)                    | Extended venture-scale analysis and market sizing                          |
| [Advanced Clinical Platform Backlog](03-roadmap/backlog--advanced-clinical-platform.md)              | Roadmap milestones, integrations, compliance, AI, and enterprise backlog   |
| [TanStack Start Routing Conventions](04-engineering/routing-conventions--tanstack-start.md)          | File-based route conventions for `src/routes`                              |
