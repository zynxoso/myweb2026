---
title: Quality Acceptance Test Template
aliases:
  - Recommendation Acceptance Test
type: template
status: evergreen
tags:
  - verification
  - architecture-review
  - template
---

# Quality Acceptance Test Template

> [!summary]
> Every material recommendation should have a reproducible test and a measurable pass condition.

## Test definition

```yaml
test-id:
related-finding:
quality-attribute:
owner:
environment:
status: planned
risk-level:
```

## Objective

State the exact requirement or risk this test verifies.

## Preconditions

- Required system version:
- Required configuration:
- Required test data:
- Required tools:
- Safety or approval requirements:

## Scenario

```gherkin
Given {{INITIAL_STATE}}
And {{DEPENDENCY_OR_CONSTRAINT}}
When {{ACTION_OR_FAILURE_IS_APPLIED}}
Then {{EXPECTED_OUTCOME}}
And {{MEASURABLE_THRESHOLD}}
```

## Procedure

1. 
2. 
3. 

## Measurements

| Metric | Baseline | Pass threshold | Actual result |
|---|---:|---:|---:|
|  |  |  |  |

## Evidence to retain

- Command or test-run ID
- Logs and traces
- Screenshots or recordings
- Configuration and version
- Input dataset and random seed
- Output artifact and hash

## Result

```text
Verdict: Pass | Fail | Inconclusive
Executed by:
Execution date:
Evidence location:
Observed deviations:
Residual risk:
Follow-up:
```

## Quality checks

- [ ] The test reproduces the real risk.
- [ ] The pass threshold is measurable.
- [ ] The environment and versions are recorded.
- [ ] The result can be independently verified.
- [ ] Sensitive data is redacted.
- [ ] Failure does not damage production systems.

Back to [[00 - Quality Attribute Agents Index]].

