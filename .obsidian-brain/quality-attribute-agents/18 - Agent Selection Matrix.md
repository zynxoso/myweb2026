---
title: Quality Agent Selection Matrix
aliases:
  - Agent Triage Matrix
type: decision-guide
status: evergreen
tags:
  - ai/agents
  - architecture-review
  - triage
---

# Quality Agent Selection Matrix

> [!summary]
> Select agents according to risk and affected system boundaries. Do not run all 15 agents for every change.

## Selection matrix

| Change type | Primary agents | Add when relevant |
|---|---|---|
| UI or user workflow | Usability, Testability | Performance, Accessibility, Security, Privacy |
| API or event contract | Interoperability, Reliability, Testability | Security, Performance, Auditability |
| Authentication or permissions | Security, Auditability, Reliability | Privacy, Usability, Observability |
| Sensitive-data processing | Privacy, Security, Auditability | Reliability, Interoperability, Cost |
| New model or provider | Interoperability, Portability, Testability | Performance, Cost, Privacy, Reliability |
| New tool, plugin, or MCP server | Security, Interoperability, Auditability | Privacy, Reliability, Observability |
| Database or schema migration | Reliability, Resilience, Deployability | Availability, Performance, Auditability |
| Queue or worker change | Scalability, Performance, Reliability | Resilience, Observability, Cost |
| Deployment pipeline | Deployability, Availability, Resilience | Security, Auditability, Maintainability |
| Logging or telemetry | Observability, Privacy | Auditability, Cost, Security |
| Compliance or investigation need | Auditability, Security, Privacy | Observability, Reliability |
| Major architecture redesign | All materially affected agents | Run in waves with a coordinator |
| Small documentation change | Maintainability | Usability if user-facing |

## Mandatory triggers

- **Privileged or irreversible action:** Security, Reliability, Resilience, Auditability
- **Personal or sensitive data:** Privacy, Security, Auditability
- **Externally visible contract:** Interoperability, Reliability, Testability
- **Critical user journey:** Availability, Reliability, Testability
- **High traffic or concurrency:** Performance, Scalability, Observability
- **Provider or environment migration:** Portability, Interoperability, Resilience

## Triage questions

1. What system boundary changes?
2. Which critical journey can be affected?
3. Does the change touch sensitive data or privileged tools?
4. Can it create an irreversible side effect?
5. Does it alter a public contract or persistent state?
6. Can it change capacity, latency, availability, or recovery behavior?
7. Which evidence is available?
8. Which specialist would materially change the decision?

## Selection record

```text
Review:
Selected agents:
Reason for each selection:
Agents not selected:
Reason for exclusion:
Risk owner:
Coordinator:
```

Back to [[00 - Quality Attribute Agents Index]].

