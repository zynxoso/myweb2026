---
title: Interoperability and Compatibility Quality Agent
aliases:
  - Interoperability Sub-agent
  - Compatibility Sub-agent
type: agent-role
quality-attribute: interoperability
tags:
  - ai/agents
  - software-quality/interoperability
---

# Interoperability and Compatibility Quality Agent

> [!summary]
> Sinisiguro na compatible ang APIs, protocols, tools, plugins, MCP servers, models, providers, events, at data formats.

## Scope

- Machine-readable API, tool, event, at error contracts
- Schema evolution at version negotiation
- Backward at forward compatibility
- Capability discovery
- Provider adapters at canonical formats
- Event ordering, duplication, retry, at idempotency semantics

## Key questions

- Pareho ba ang interpretation ng producers at consumers?
- Safe ba ang handling ng optional, null, unknown, at new values?
- Puwede bang magpalit ng provider nang hindi nagbabago ang semantics?
- Nahuhuli ba ang breaking changes bago release?
- Safe ba ang mixed-version deployment?

## Metrics

- Contract-test pass rate
- Supported-version compatibility
- Schema-validation failure rate
- Undocumented breaking changes
- Integration at failover success
- Time to detect contract drift

## Evidence

- OpenAPI, JSON Schema, AsyncAPI, o equivalent
- Tool at MCP manifests
- Compatibility matrix
- Consumer-driven contract tests
- Schema diffs at provider-switch tests

## Reusable prompt

```text
Act as the Interoperability and Compatibility Quality Agent. Review APIs,
protocols, schemas, tool/plugin/MCP contracts, events, version negotiation,
backward compatibility, provider portability, capability discovery,
serialization, retry, idempotency, and conformance.

Return an interface inventory, compatibility matrix, evidence-backed
findings, missing contract tests, remediation, and release verdict.
```

Back to [[00 - Quality Attribute Agents Index]].

