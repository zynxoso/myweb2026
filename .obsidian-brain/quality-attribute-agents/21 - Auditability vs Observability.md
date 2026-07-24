---
title: Auditability vs Observability
aliases:
  - Audit Trail vs Operational Telemetry
type: concept
status: evergreen
tags:
  - auditability
  - observability
  - system-architecture
---

# Auditability vs Observability

> [!summary]
> Auditability explains **who did what, under which authority, and what changed**. Observability explains **what the system is doing now and why it is unhealthy**.

## Comparison

| Concern | Auditability | Observability |
|---|---|---|
| Primary purpose | Accountability and reconstruction | Detection and diagnosis |
| Core question | Who did what and was it authorized? | What is happening and why? |
| Typical events | Delegation, approval, tool action, mutation, artifact release | Latency, errors, queue age, saturation, retries |
| Storage | Append-only or tamper-evident | Searchable telemetry platform |
| Retention | Policy, investigation, or regulatory driven | Operational usefulness and cost driven |
| Access | Restricted reviewer or auditor access | Operators and engineering teams |
| Integrity | Strong provenance and tamper detection | Accuracy and availability for diagnosis |
| Sensitive content | Strictly minimized and redacted | Strictly minimized and redacted |
| Example ID | Approval ID and task lineage | Trace ID and span ID |

## Shared correlation contract

Both systems should share:

- Trace ID
- Workflow and task ID
- Parent-task ID
- Agent or service ID
- Tool-call ID
- Artifact ID
- Timestamp
- Outcome classification

Shared IDs allow correlation without using operational logs as the authoritative audit record.

## Auditability owns

- Actor identity and delegated authority
- Parent-child task lineage
- Approval, denial, override, and expiry
- Tool action and target
- Material state changes
- Artifact provenance and hashes
- Policy, prompt, model, and tool version references
- Tamper evidence, retention, and access history

## Observability owns

- Request rate, errors, and duration
- Queue depth, age, and saturation
- Agent state and worker utilization
- Model and tool latency, failures, and rate limits
- Retry, fallback, cancellation, and recovery behavior
- Dashboards, alerts, health checks, and runbooks
- Mean time to detect, diagnose, and recover

## Design rules

1. Do not store hidden reasoning in either system.
2. Do not log raw credentials or unnecessary personal data.
3. Record references and content hashes instead of full prompts where possible.
4. Keep audit storage and operational telemetry logically separate.
5. Audit access must itself be audited.
6. Monitor audit-pipeline health through observability.
7. Never use missing operational logs as proof that an action did not occur.

See [[08 - Auditability and Traceability Agent]] and [[09 - Observability and Operability Agent]].

Back to [[00 - Quality Attribute Agents Index]].

