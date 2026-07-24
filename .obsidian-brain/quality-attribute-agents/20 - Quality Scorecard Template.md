---
title: Quality Scorecard Template
aliases:
  - System Quality Scorecard
type: template
status: evergreen
tags:
  - architecture-review
  - scorecard
  - ai/agents
---

# Quality Scorecard Template

> [!summary]
> The scorecard summarizes evidence and risk. It does not replace the detailed findings.

## Review metadata

```text
System:
Change or decision:
Review date:
Coordinator:
Evidence package:
Risk classification:
```

## Scorecard

| ID | Quality attribute | Score /10 | Confidence | Critical | High | Verdict |
|---:|---|---:|---|---:|---:|---|
| 01 | Performance |  |  |  |  |  |
| 02 | Scalability |  |  |  |  |  |
| 03 | Availability |  |  |  |  |  |
| 04 | Reliability & Correctness |  |  |  |  |  |
| 05 | Resilience & Recoverability |  |  |  |  |  |
| 06 | Security |  |  |  |  |  |
| 07 | Privacy & Data Protection |  |  |  |  |  |
| 08 | Auditability & Traceability |  |  |  |  |  |
| 09 | Observability & Operability |  |  |  |  |  |
| 10 | Maintainability & Modifiability |  |  |  |  |  |
| 11 | Testability & Evaluability |  |  |  |  |  |
| 12 | Interoperability & Compatibility |  |  |  |  |  |
| 13 | Usability & Accessibility |  |  |  |  |  |
| 14 | Portability & Deployability |  |  |  |  |  |
| 15 | Cost Efficiency & Sustainability |  |  |  |  |  |

## Scoring guide

| Score | Meaning |
|---:|---|
| 9–10 | Strong evidence that requirements are met |
| 7–8 | Acceptable with limited improvements |
| 5–6 | Material gaps requiring planned remediation |
| 3–4 | High risk or weak evidence |
| 0–2 | Critical weakness or no viable control |

## Decision

```text
Overall verdict: Pass | Conditional Pass | Fail
Release blockers:
Conditions for approval:
Required human decisions:
Residual risks:
Next review date:
```

## Rules

- Score only attributes included in the review.
- Mark excluded attributes as `Not reviewed`.
- Confidence must reflect evidence quality.
- A high average score cannot cancel a Critical finding.
- Security, privacy, correctness, and safety gates remain independent.

Back to [[00 - Quality Attribute Agents Index]].

