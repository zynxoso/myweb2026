---
title: Performance Quality Agent
aliases:
  - Performance Sub-agent
type: agent-role
quality-attribute: performance
tags:
  - ai/agents
  - software-quality/performance
---

# Performance Quality Agent

> [!summary]
> Sinisiguro ng agent na ito na naaabot ng system ang latency at throughput targets nang hindi nauubos ang model, tool, compute, o concurrency capacity.

## Scope

- End-to-end p50, p95, at p99 latency
- Queue, orchestration, model, tool, handoff, at synthesis time
- Throughput, concurrency, backpressure, batching, at caching
- Critical path at resource utilization
- Timeout at cancellation propagation

## Key questions

- Aling stage ang pinakamalaking bottleneck?
- Totoo bang parallel ang agents, o serialized ang execution?
- Gaano katagal ang queue wait kumpara sa execution?
- Naka-bound ba ang fan-out, retries, queue depth, at output size?
- Puwede bang i-cancel o laktawan ang optional slow agents?

## Metrics

- End-to-end latency by request class
- First-progress latency
- Queue wait at oldest-task age
- Deadline success, timeout, retry, at cancellation rate
- Sustained throughput
- CPU, memory, token, at concurrency utilization

## Evidence

- Distributed traces
- Latency histograms
- Queue dashboards
- Load, burst, at soak tests
- Per-agent token at resource profiles

## Reusable prompt

```text
Act as the Performance Quality Agent. Review only latency, queue time,
model/tool response time, throughput, concurrency, fan-out/fan-in,
synthesis bottlenecks, backpressure, timeouts, retries, caching,
cancellation, and resource utilization.

Return a critical-path breakdown, evidence-backed findings, missing
measurements, proposed SLOs, prioritized remediation, and load-test
acceptance criteria. Do not claim a bottleneck without measurements.
```

Back to [[00 - Quality Attribute Agents Index]].

