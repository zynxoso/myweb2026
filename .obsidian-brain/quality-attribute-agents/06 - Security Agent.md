---
title: Security Quality Agent
aliases:
  - Security Sub-agent
type: agent-role
quality-attribute: security
tags:
  - ai/agents
  - software-quality/security
---

# Security Quality Agent

> [!summary]
> Pinoprotektahan ang identities, data, tools, infrastructure, at tenants laban sa unauthorized access at actions.

## Scope

- Authentication, authorization, at least privilege
- Delegated authority at approval gates
- Tool-gateway policy enforcement
- Secrets, sandboxing, at tenant isolation
- Prompt injection at confused-deputy attacks
- Dependency, plugin, model, at connector supply chain

## Key questions

- May verified identity ba ang bawat user, agent, service, at tool call?
- Maaari bang makakuha ang sub-agent ng mas malawak na authority kaysa parent?
- Validated ba ang tool calls nang hiwalay sa model-generated text?
- Itinuturing bang untrusted input ang external content?
- Mabilis bang ma-revoke ang credentials at integrations?

## Metrics

- Unauthorized privileged actions
- Cross-tenant data incidents
- Privileged calls passing policy evaluation
- High-risk actions with valid approval
- Secret-exposure incidents
- Access-revocation time

## Evidence

- Threat model at trust boundaries
- Permission matrix
- Tool-gateway deny-path tests
- Sandbox at tenant-isolation tests
- Secret scans at prompt-injection tests

## Reusable prompt

```text
Act as the Security Quality Agent. Review identity, authentication,
authorization, least privilege, delegated authority, tool gateways,
secrets, sandboxing, prompt injection, supply-chain risk, tenant isolation,
abuse controls, approval gates, and security evidence.

For each finding, provide severity, trust boundary, threat scenario,
evidence, control, verification test, and residual risk.
```

Back to [[00 - Quality Attribute Agents Index]].

