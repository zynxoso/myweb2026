---
title: Agent Limits and Budgets
aliases:
  - Agent Execution Guardrails
type: policy
status: evergreen
tags:
  - ai/agents
  - governance
  - cost-control
---

# Agent Limits and Budgets

> [!summary]
> Bound every agent workflow by scope, time, tokens, tools, cost, retries, concurrency, and delegation depth.

## Required limits

| Limit | Purpose | Example starting policy |
|---|---|---|
| Agent count | Prevent unnecessary fan-out | Select only relevant specialists |
| Concurrency | Protect shared resources | Respect platform slots and dependency quotas |
| Delegation depth | Prevent runaway hierarchies | Maximum depth of 1–2 unless justified |
| Wall-clock time | Bound latency | Per-task deadline |
| Input tokens | Control context cost | Supply only relevant evidence |
| Output tokens | Keep results usable | Structured, concise deliverables |
| Tool calls | Prevent loops and abuse | Per-agent call budget |
| Retries | Prevent amplification | Retry only transient failures with a fixed cap |
| Monetary cost | Protect unit economics | Soft alert and hard task limit |
| File scope | Prevent conflicting edits | Explicit paths and ownership |
| External actions | Prevent unintended effects | Approval gate and single owner |

## Stop conditions

Stop or pause an agent when:

- Its objective is complete.
- Its acceptance criteria are satisfied.
- It is repeating previous work.
- It is blocked by missing evidence.
- It reaches its deadline or budget.
- A higher-priority task makes its output unnecessary.
- It requests authority outside its assignment.
- It produces repeated failed verification.
- The user changes or cancels the request.

## Retry policy

```text
Retry only: classified transient failures
Maximum attempts:
Backoff:
Jitter:
Idempotency requirement:
Deadline:
Escalation condition:
Dead-letter or final-failure handling:
```

## Budget template

```yaml
workflow:
owner:
selected_agents:
max_concurrency:
max_delegation_depth:
deadline:
max_input_tokens:
max_output_tokens:
max_tool_calls:
max_retries:
soft_cost_limit:
hard_cost_limit:
allowed_paths:
allowed_tools:
approval_gated_actions:
stop_conditions:
```

## Governance rules

1. A child agent cannot receive broader authority than its parent.
2. Budget increases require a reason and owner.
3. Expensive parallel work requires expected value.
4. Retries must not duplicate irreversible actions.
5. Cost savings cannot weaken required safety or correctness.
6. External or destructive actions require explicit approval.
7. The coordinator records actual usage against the budget.

## Metrics

- Cost per verified successful task
- Token and tool-call usage per agent
- Retry amplification
- Duplicate-work rate
- Agent-output acceptance rate
- Budget-overrun rate
- Tasks stopped by each stop condition
- Coordinator overhead

Back to [[00 - Quality Attribute Agents Index]].

