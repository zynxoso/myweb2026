---
title: 30-60-90 Day Quality Roadmap Template
aliases:
  - System Quality Improvement Roadmap
type: template
status: evergreen
tags:
  - architecture-review
  - roadmap
  - planning
---

# 30-60-90 Day Quality Roadmap

> [!summary]
> Organize improvements by risk reduction and dependency order—not merely by implementation convenience.

## Roadmap metadata

```text
System:
Review:
Roadmap owner:
Start date:
Primary objective:
```

## First 30 days — Stabilize

Focus on Critical and High risks, missing controls, and missing evidence that blocks safe decisions.

| Work item | Finding | Owner | Acceptance test | Status |
|---|---|---|---|---|
|  |  |  |  | Not started |

Typical priorities:

- Security and privacy exposure
- Incorrect or irreversible side effects
- Availability and recovery blockers
- Missing audit coverage for privileged actions
- Missing telemetry for critical journeys

## Days 31–60 — Strengthen

Address systemic weaknesses and introduce repeatable controls.

| Work item | Finding | Owner | Acceptance test | Status |
|---|---|---|---|---|
|  |  |  |  | Not started |

Typical priorities:

- Performance and scalability testing
- Contract and regression gates
- Fault injection and restore drills
- Operational dashboards and runbooks
- Deployment and rollback automation

## Days 61–90 — Optimize

Improve maintainability, portability, usability, and cost after safety and correctness are stable.

| Work item | Finding | Owner | Acceptance test | Status |
|---|---|---|---|---|
|  |  |  |  | Not started |

Typical priorities:

- Dependency and technical-debt reduction
- Provider portability
- User workflow and accessibility improvements
- Cost-per-success optimization
- Documentation and ownership maturity

## Dependencies and trade-offs

| Dependency or conflict | Affected items | Decision owner | Resolution |
|---|---|---|---|
|  |  |  |  |

## Roadmap gates

- [ ] Every Critical item has an owner and deadline.
- [ ] Every item has a measurable acceptance test.
- [ ] Dependencies are sequenced.
- [ ] Human approval requirements are identified.
- [ ] Residual risks are explicit.
- [ ] Progress is reviewed at least every two weeks.
- [ ] Completed work has verification evidence.

Back to [[00 - Quality Attribute Agents Index]].

