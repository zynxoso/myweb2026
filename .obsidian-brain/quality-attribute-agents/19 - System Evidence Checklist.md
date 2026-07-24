---
title: System Evidence Checklist
aliases:
  - Architecture Review Evidence Manifest
type: checklist
status: evergreen
tags:
  - architecture-review
  - evidence
  - ai/agents
---

# System Evidence Checklist

> [!summary]
> Use this manifest to give every selected quality agent the same verified baseline.

## System context

- [ ] System purpose and boundaries
- [ ] Business goals
- [ ] Critical user journeys
- [ ] Stakeholders and owners
- [ ] Risk classification
- [ ] Known constraints and assumptions

## Architecture

- [ ] Context and component diagrams
- [ ] Deployment and infrastructure diagrams
- [ ] Agent, tool, model, queue, and storage inventory
- [ ] Data-flow and trust-boundary diagrams
- [ ] Dependency and failure-domain map
- [ ] Architecture decision records

## Requirements

- [ ] Functional requirements
- [ ] Quality requirements
- [ ] SLOs, SLIs, and error budgets
- [ ] Data classification and retention rules
- [ ] Security and approval policies
- [ ] Accessibility target

## Implementation

- [ ] Relevant source paths and versions
- [ ] Prompt, policy, model, tool, and configuration versions
- [ ] API, event, schema, plugin, and MCP contracts
- [ ] Infrastructure-as-code
- [ ] Build and deployment definitions
- [ ] Migration and rollback plans

## Operational evidence

- [ ] Logs, metrics, and distributed traces
- [ ] Queue and worker telemetry
- [ ] Model and tool telemetry
- [ ] Cost and usage records
- [ ] Availability and performance history
- [ ] Incident reports and timelines
- [ ] Audit samples and approval records

## Verification evidence

- [ ] Unit, integration, contract, and end-to-end tests
- [ ] Evaluation datasets and rubrics
- [ ] Load, stress, burst, and soak tests
- [ ] Fault-injection and recovery tests
- [ ] Security and prompt-injection tests
- [ ] Privacy and deletion tests
- [ ] Accessibility tests
- [ ] Deployment and rollback drills

## Evidence manifest

| Evidence | Location | Version/date | Owner | Status |
|---|---|---|---|---|
| Architecture diagram |  |  |  | Available / Missing |
| SLO dashboard |  |  |  | Available / Missing |
| Test report |  |  |  | Available / Missing |
| Incident history |  |  |  | Available / Missing |

## Rules

- Missing evidence must be reported explicitly.
- Do not replace measurements with assumptions.
- Redact secrets and unnecessary personal data.
- Use stable artifact IDs, versions, or hashes when possible.
- Record the evidence package used for each review.

Back to [[00 - Quality Attribute Agents Index]].

