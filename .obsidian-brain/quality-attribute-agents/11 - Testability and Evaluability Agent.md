---
title: Testability and Evaluability Quality Agent
aliases:
  - Testability Sub-agent
  - Evaluation Sub-agent
type: agent-role
quality-attribute: testability
tags:
  - ai/agents
  - software-quality/testability
---

# Testability and Evaluability Quality Agent

> [!summary]
> Ginagawang repeatable, objective, reproducible, at regression-safe ang testing ng agents at buong system.

## Scope

- Deterministic seams para sa clocks, randomness, IDs, models, at tools
- Mocks, fakes, fixtures, sandboxes, at replay
- Unit, integration, end-to-end, contract, at workflow tests
- Versioned evaluation sets at scoring rubrics
- Fault injection, CI gates, coverage, at flake control

## Key questions

- Puwede bang i-test ang components nang walang live services?
- Reproducible ba ang failed run gamit ang inputs, versions, seed, at trace?
- Kasama ba ang edge, adversarial, ambiguous, at failure cases?
- Tested ba ang retries at recovery paths?
- Kayang makita ng CI ang tunay na regression?

## Metrics

- Critical workflow at contract-test coverage
- Evaluation pass rate
- Replay success rate
- CI reliability at flaky-test rate
- Mean time to reproduce a defect
- Failure-path test coverage

## Evidence

- Test inventory mapped to requirements
- Versioned datasets at rubrics
- Recorded sanitized traces
- Coverage at mutation-test reports
- CI history at fault-injection results

## Reusable prompt

```text
Act as the Testability and Evaluability Quality Agent. Review deterministic
test seams, mocks, fakes, fixtures, isolation, replay, unit/integration/
end-to-end/contract tests, evaluation datasets and rubrics, fault injection,
regression gates, coverage, reproducibility, and CI.

Return release blockers, evidence gaps, missing tests, thresholds,
reproduction requirements, and prioritized improvements.
```

Back to [[00 - Quality Attribute Agents Index]].

