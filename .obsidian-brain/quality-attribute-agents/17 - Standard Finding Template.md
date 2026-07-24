---
title: Standard Quality Finding Template
aliases:
  - Agent Finding Contract
type: template
status: evergreen
tags:
  - ai/agents
  - architecture-review
  - template
---

# Standard Quality Finding Template

> [!summary]
> Every quality agent should use the same finding structure so the coordinator can compare, deduplicate, prioritize, and verify results.

## Finding

```markdown
### {{FINDING_ID}} — {{SHORT_TITLE}}

- **Quality attribute:** {{ATTRIBUTE}}
- **Severity:** Critical | High | Medium | Low
- **Confidence:** High | Medium | Low
- **Status:** Confirmed | Probable | Evidence gap
- **Affected component:** {{COMPONENT}}
- **Affected workflow:** {{WORKFLOW}}
- **Suggested owner:** {{OWNER}}

#### Scenario

{{TRIGGER_AND_FAILURE_SCENARIO}}

#### Evidence

{{FILES_LINES_TRACES_METRICS_TESTS_OR_DOCUMENTS}}

#### Missing evidence

{{WHAT_IS_NOT_CURRENTLY_VERIFIABLE}}

#### Requirement or SLO at risk

{{REQUIREMENT}}

#### Impact

{{USER_BUSINESS_DATA_OR_OPERATIONAL_IMPACT}}

#### Recommendation

{{SMALLEST_EFFECTIVE_CHANGE}}

#### Acceptance test

{{REPRODUCIBLE_TEST_AND_PASS_THRESHOLD}}

#### Trade-offs

{{AFFECTED_QUALITY_ATTRIBUTES_AND_RESIDUAL_RISK}}
```

## Severity guide

| Severity | Meaning |
|---|---|
| Critical | Catastrophic outcome, material unauthorized action, unrecoverable loss, or complete failure of a critical journey |
| High | Major SLO breach, serious exposure, repeated incorrect results, or impractical recovery |
| Medium | Meaningful degradation, operational burden, or planned remediation requirement |
| Low | Limited impact, hardening opportunity, or low-urgency improvement |

## Confidence guide

| Confidence | Evidence |
|---|---|
| High | Reproduced, measured, or directly proven |
| Medium | Strong indicators with some missing verification |
| Low | Plausible concern requiring targeted evidence |

## Finding acceptance checklist

- [ ] The scenario is concrete and reproducible.
- [ ] Evidence is inspectable.
- [ ] Assumptions are labeled.
- [ ] Impact is specific.
- [ ] The recommendation is within scope.
- [ ] The acceptance test has a measurable pass condition.
- [ ] Trade-offs and residual risks are visible.

Back to [[00 - Quality Attribute Agents Index]].

