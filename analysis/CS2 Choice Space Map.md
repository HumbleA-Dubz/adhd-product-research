# CS2: Choice Space Map

> **Scope**: The final choice-space map synthesising all three layers into a decision framework for ADHD workplace product positioning.
> **Date**: 2026-02-11

---

## 1. Purpose and Scope

**What this document is:** A structural map of the decision architecture for any ADHD workplace productivity product. It catalogues the problem clusters a product could target (Layer 1), the engagement models it could use (Layer 2), the implementation requirements each model triggers (Layer 3), the meta-challenges that constrain every path, and five pre-mapped solution paths drawn from prior analysis.

**What this document is NOT:** A product recommendation, a feature list, or an evaluation against Humble's constraints. This document maps the territory; it does not choose the route.

**How to use it:** Overlay Humble's constraints -- team capabilities, timeline, resources, strategic priorities -- onto this map to identify which paths are feasible and at what cost. Each section can be read independently. Tables are designed for scanning; full detail lives in the referenced source documents.

**Reading time:** 15 minutes to scan; 45 minutes for deep read.

---

## 2. Layer 1: Problem Clusters

Three causal clusters, one cross-cluster amplifier, and three high-scoring unclustered problems define the problem space. The constraining attributes below determine which engagement models are structurally compatible with each cluster.

### 2.1 Clusters

| Cluster | Hub Problem | Hub Score | Downstream Problems | Frequency | Context | User Awareness | Co-occurrence |
|---------|-------------|:---------:|---------------------|-----------|---------|---------------|---------------|
| **A: Time-Perception Cascade** | FP03 Time Blindness | 14/15 | FP04 Deadline Misses (10), FP12 Chronic Lateness (10), FP08 Project Neglect (12, partial) | Very high -- continuous | All work contexts; transitions, meetings, deadlines | Low in real-time; high in retrospect | Tight: time blindness causes deadline misses, lateness, and project neglect simultaneously |
| **B: Initiation-Execution Bottleneck** | FP01 Task Initiation | 14/15 | FP08 Project Neglect (12), FP11 Documentation Paralysis (10) | High -- multiple daily | Start of any task; especially low-stimulation or deferred tasks | Moderate -- user often knows they are stuck | Moderate: initiation failure and documentation paralysis co-occur on writing tasks |
| **C: Attention-Quality Chain** | FP02 Inconsistent Focus | 13/15 | FP06 Detail Errors (10), FP04 Deadline Misses (10, shared with A) | Very high -- throughout sessions | During task execution; detail-oriented or monotonous work | Low in real-time; errors visible only in review | Moderate: focus lapses produce errors and insufficient output independently |

**FP05 Prioritisation Failure** (Score: 13/15) is a cross-cluster amplifier that worsens all three clusters. Wrong sequencing compounds time pressure (A), diverts activation energy to low-value tasks (B), and wastes limited focus capacity on wrong tasks (C).

### 2.2 Unclustered High-Scoring Problems

| Problem | Score | Frequency | Context | User Awareness | Co-occurrence |
|---------|:-----:|-----------|---------|---------------|---------------|
| **FP07 Meeting Memory Failure** | 11/15 | Moderate (tied to meeting frequency, 3-8/day) | During and immediately after meetings | Very low -- encoding fails silently; only noticed days later when commitment is missed | Low: operates independently; encoding deficit is mechanistically distinct |
| **FP09 Email Management Failure** | 11/15 | High -- email is continuous | When reading email and forming reply intentions | Very low -- user reads, intends to reply, then intention vanishes from awareness | Low-moderate: shares prospective memory mechanism with FP07 but in a distinct domain |
| **FP05 Prioritisation Failure** | 13/15 | High -- every task-selection moment | When scanning task lists or deciding what to work on | Moderate -- user may feel overwhelmed but not recognise wrong sequencing as root cause | Cross-cluster amplifier: worsens all three clusters |

---

## 3. Layer 2: Engagement Models

Eight structurally distinct ways a product could engage ADHD users. Each model describes the structural relationship between user and product: when interaction occurs, who initiates, what effort the user expends, and what the product does without user input.

**Dimensional key:** A = Initiation (product <-> user), B = Effort (zero <-> high), C = Timing (before/during/after problem), D = Continuity (embedded <-> separate surface).

| Model | Short Descriptor | Dimensional Position | Key Distinguishing Attribute |
|-------|-----------------|---------------------|------------------------------|
| **M1** | Ambient Monitor & Intervene | A: Product-initiated / B: Near-zero / C: During / D: Embedded | Detects problematic state (stalling, overrun) and intervenes without user request. Always-on background operation. |
| **M2** | Passive Capture & Structured Delivery | A: Product-initiated / B: Zero / C: After (captures during, delivers later) / D: Embedded | Automatically captures information the user would fail to retain, then delivers structured summaries and commitments proactively. |
| **M3** | Modality Shift | A: User-initiated / B: Moderate / C: During / D: Separate (mostly) | Changes the input modality of a task (writing to speaking) to lower the activation threshold. |
| **M4** | Intelligent Reordering | A: Balanced / B: Low / C: Before / D: Embedded (layer) | Reorders task list by neurological accessibility, not just static priority. Shows one task, not fifty. |
| **M5** | Calibration Feedback Loop | A: Balanced / B: Moderate / C: Before + During / D: Partially embedded | Collects estimation-vs-actual data and feeds back calibration to build self-awareness over time. |
| **M6** | Periodic Injection | A: Product-initiated / B: Low per task / C: Before (preventive) / D: Embedded (into task flow) | Detects long-term engagement decay and injects micro-tasks into the user's existing daily flow. |
| **M7** | Structured Check-In | A: Product-prompted / B: Moderate / C: Before (planning) / D: Separate surface | Provides time-bounded, guided interaction at regular cadence for planning and review. |
| **M8** | On-Demand Scaffolding | A: User-initiated / B: Low-moderate / C: During / D: Either | Provides AI-powered cognitive support (task breakdown, draft generation) at the moment the user requests it. |

Full model profiles (retention, habit burden, trust requirements, data access, evidence) are in L2_Engagement_Models.md.

---

## 4. Layer 1 <-> Layer 2 Compatibility

### 4.1 Compatibility Matrix

**Key:** S = Strongly compatible, P = Partially compatible, X = Incompatible.

| | M1 Ambient | M2 Capture | M3 Modality | M4 Reorder | M5 Calibrate | M6 Inject | M7 Check-In | M8 Scaffold |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Cluster A (Time)** | S | P | X | P | S | P | P | X |
| **Cluster B (Init)** | S | X | P | S | X | P | P | P |
| **Cluster C (Attn)** | S | P | X | P | P | X | P | P |
| **FP05 (Priority)** | P | X | X | S | P | P | S | P |
| **FP07 (Meeting)** | P | S | X | X | X | P | P | X |
| **FP09 (Email)** | P | S | P | P | X | P | P | X |

### 4.2 Synthesis

**Broadest compatibility:** M1 (Ambient Monitor) is strongly compatible with all three clusters. Its continuous, embedded, product-initiated nature matches the high-frequency, low-awareness profile of most ADHD workplace problems. Its limitation is the unclustered problems (FP07, FP09) where meeting/email context constrains real-time intervention.

**Narrowly but deeply compatible:** M2 (Passive Capture) is strongly compatible only with FP07 and FP09 -- but these represent the strongest clinical evidence and widest market gaps. Its incompatibility with Cluster B (nothing to capture when nothing happens) is a fundamental structural limitation.

**Complementary pair:** M1 + M4 together cover all three clusters and the prioritisation amplifier at the S level. M4 is strong for Cluster B and FP05 where M1's detection-and-intervene pattern is less natural.

**Highly specific:** M5 (Calibration) maps directly to Cluster A (time perception) and has limited applicability elsewhere. M3 (Modality Shift) and M8 (On-Demand Scaffolding) are better as features within a broader product than standalone models.

**Broadest partial coverage but no depth:** M7 (Structured Check-In) touches everything but solves nothing fully by itself -- consistent with its documented position as the most abandoned ADHD tool archetype.

**No single model covers all six problem areas at the S level.** A product addressing the full space requires combining multiple engagement models.

---

## 5. Layer 3: Implementation Requirements

### 5.1 Per-Model Requirement Profiles (Compact)

| Model | Hardest Requirement | Overall Complexity | Custom vs. OTS Balance |
|-------|--------------------|--------------------|----------------------|
| **M1 Ambient** | Stall detection (distinguishing "stuck" from "thinking"); personalised intervention timing | High -- always-on desktop agent, real-time pipeline, custom AI models | Heavily custom; no OTS stall-detection product exists |
| **M2 Capture** | Multi-channel commitment extraction NLP; knowledge graph construction from unstructured communication | High -- multi-platform integration, graph DB, consent architecture | Hybrid: OTS transcription + OTS graph DB + custom NLP pipeline |
| **M3 Modality** | Speech-to-structured-document transformation quality | Low-Moderate -- speech-to-text is commoditised; value is in prompt engineering and template UX | Mostly OTS; custom UX and prompt engineering |
| **M4 Reorder** | Dynamic reordering algorithm balancing importance vs. neurological accessibility | Moderate-High -- core algorithm is the product; per-platform task integration is N integrations | Custom core algorithm; hybrid integrations |
| **M5 Calibrate** | Personal estimation bias modelling; low-friction estimation prompt UX | Moderate -- standard ML + careful UX design for the estimation micro-habit | Hybrid; custom estimation UX |
| **M6 Inject** | Micro-task generation from project context (AI must understand project state and next steps) | Very High -- highest AI complexity; lowest feasibility score (10/20 in S7) | Heavily custom; no OTS project-state AI exists |
| **M7 Check-In** | Lapse-tolerance design (the "fresh start" problem -- surviving 2-week gaps without shame artefacts) | Moderate -- standard engineering, but lapse-tolerance is novel design territory | Hybrid; custom lapse-tolerance design |
| **M8 Scaffold** | ADHD-specific calibration of decomposition granularity | Low -- general LLM capabilities; custom is ADHD-specific prompt engineering | Mostly OTS; extreme UX simplicity is the differentiator |

Full cell-by-cell requirement profiles (9 sub-categories per model, complexity ratings, build/buy indicators) are in Cross_Layer_Mapping.md, Section 2.

### 5.2 Shared Requirements (Common Foundations)

These capabilities appear across 3+ engagement models. They represent "build once, enable many" leverage points.

| # | Foundation | Required By | Complexity | Build/Buy |
|---|-----------|-------------|-----------|-----------|
| **F1** | Calendar Integration (Google Calendar / Microsoft Graph) | M1, M2, M4, M5, M6, M7 (required); M3, M8 (optional) | Trivial -- stable, well-documented APIs | OTS |
| **F2** | Task Tool Integration (Todoist, Notion, Asana, etc.) | M1, M4, M6, M7 (required); M2, M8 (optional) | Significant in aggregate (N platforms); moderate per platform. No universal task API exists. | Hybrid (MCP + custom per-platform) |
| **F3** | Non-Shaming Tone & Language Framework | All 8 models | Moderate -- ADHD-informed content design across all user-facing surfaces | Custom |
| **F4** | Variability Engine / Novelty Preservation | M1, M2, M4, M5, M6, M7 (all recurring-intervention models) | Significant -- adaptive delivery architecture across notification pipeline | Custom (no OTS variability engine exists) |
| **F5** | On-Device Processing | M1, M2, M6 (required); all others (beneficial) | Moderate -- components exist, assembly requires careful architecture | Hybrid (OTS local inference + custom pipeline) |
| **F6** | MCP Integration Backbone | M1, M2, M4, M6 (required); all others (beneficial) | Moderate -- protocol is stable; security hardening and per-server implementations needed | Hybrid (OTS protocol + custom security) |
| **F7** | Knowledge Graph / Structured Memory | M2, M6 (required); M4, M5 (beneficial) | Significant -- graph construction from unstructured text is LLM-intensive; ADHD-specific schema design needed | Hybrid (OTS GraphRAG + OTS graph DB + custom pipeline) |

**Critical observation:** F1 (Calendar) and F3 (Non-Shaming Tone) are universal. F4 (Variability Engine) is required by every recurring-intervention model and is the architectural response to MC1 (Novelty Decay). F6 (MCP) and F7 (Knowledge Graph) together enable the most ambitious paths (M2-based platform plays) but also benefit simpler models. Building F1 + F3 + F6 first creates a foundation on which M1, M2, M4, or M7 can be deployed.

---

## 6. Meta-Challenges

Five confirmed cross-cutting structural constraints apply regardless of problem cluster, engagement model, or implementation choice.

### 6.1 Summary

| # | Meta-Challenge | Evidence Tier | Severity | Core Mechanism |
|---|---------------|:---:|---|---|
| MC1 | Novelty Decay & Intervention Habituation | Tier 1-2 | Critical | ADHD brains habituate to interventions as novelty fades; 77% non-completion of self-guided interventions; 50-70% medication discontinuation within 1 year |
| MC2 | The Circular Dependency (Bootstrapping) | Tier 1-2 | Critical | Every tool requires initiation of engagement using the cognitive functions the tool compensates for; 52% prospective memory failure on a single naturalistic task (Altgassen et al. 2019) |
| MC3 | The Shame-Avoidance Spiral | Tier 2-3 | High | Visible evidence of failure (overdue counts, broken streaks) triggers shame and avoidance, making re-engagement less likely |
| MC4 | Disclosure & Workplace Visibility | Tier 2-3 | High | ADHD-specific tools create involuntary disclosure risk in workplace contexts; constrains branding, UI, and notification content |
| MC5 | Notification Desensitisation | Tier 2-3 | Moderate-High | ADHD brains desensitise to notifications faster than neurotypical brains; primary delivery channel becomes ineffective within weeks |

### 6.2 Vulnerability Matrix

**Key:** H = High vulnerability, M = Moderate, L = Low.

| | MC1 Novelty | MC2 Bootstrap | MC3 Shame | MC4 Disclosure | MC5 Notification | H / M / L |
|---|:---:|:---:|:---:|:---:|:---:|---|
| **M1 Ambient** | M | L | L | M | H | 1H / 2M / 2L |
| **M2 Capture** | L | L | L | M | M | 0H / 2M / 3L |
| **M3 Modality** | M | H | L | M | L | 1H / 2M / 2L |
| **M4 Reorder** | M | M | M | L | M | 0H / 4M / 1L |
| **M5 Calibrate** | M | H | M | M | M | 1H / 4M / 0L |
| **M6 Inject** | M | L | M | L | L | 0H / 2M / 3L |
| **M7 Check-In** | H | H | H | M | M | 3H / 2M / 0L |
| **M8 Scaffold** | L | H | L | L | L | 1H / 0M / 4L |

### 6.3 Resilience Synthesis

**Most resilient:** M2 (Passive Capture) -- zero high-vulnerability ratings, three lows. Passive, compounding-value architecture is structurally resistant to novelty decay, bootstrapping, and shame. M6 (Periodic Injection) ties with zero highs and three lows, but carries the highest build complexity.

**Least resilient:** M7 (Structured Check-In) -- three high-vulnerability ratings, zero lows. Every critical ADHD meta-challenge is a primary threat. This is consistent with the documented "app graveyard" pattern.

**Key structural pattern:** Product-initiated models (M1, M2, M6) consistently outperform user-initiated models (M3, M5, M7, M8) on MC2 and MC5. Compounding-value models (M2, M4, M5) outperform fixed-value models on MC1. Background models (M1, M2, M6) outperform foreground models on MC3 and MC4.

### 6.4 Relocated Candidates

Six candidates were evaluated but did not meet all four inclusion criteria for meta-challenge status. They remain important considerations at their relocated layers:

| Candidate | Relocated To | Why |
|-----------|-------------|-----|
| Setup Hyperfocus Trap | L2 engagement model failure mode | Only affects active-setup models; passive/ambient models immune |
| Maintenance Burden | L2 engagement model failure mode | Only affects user-maintained systems; passive models immune |
| Competing Against Free General Tools | L3 market/implementation constraint | Concentrated in Cluster C; does not structurally constrain Cluster B |
| Voice/Open-Office Friction | L3 implementation constraint | Cluster-specific; implementation-solvable (whisper mode, text fallback) |
| Cold Start / Value Delay | L3 implementation constraint | Implementation-solvable (synthetic onboarding, quick-win experiences) |
| Email Platform Dependency | L3 implementation constraint | Solvable by building for both Gmail and Outlook; cluster-specific |

---

## 7. Leverage Points

### 7.1 Highest-Leverage Capabilities

Synthesised from the shared requirements (Section 5.2):

**Tier 1: Universal or near-universal dependencies.**

| Capability | Required By | Rationale |
|-----------|-------------|-----------|
| **F1: Calendar Integration** | M1, M2, M4, M5, M6, M7 (required); M3, M8 (optional) | Universal dependency. Trivial to build. Provides time-awareness context for every engagement model. |
| **F3: Non-Shaming Tone Framework** | All 8 models | Required by every user-facing surface. Not a feature but a design language that permeates all AI-generated content, notifications, and UI copy. Must be established before any user-facing work. |
| **F4: Variability Engine** | M1, M2, M4, M5, M6, M7 (all recurring-intervention models) | Architectural response to MC1 and MC5. Any product using recurring interventions will fail without adaptive delivery. Not a feature but an infrastructure layer for the notification pipeline. |

**Tier 2: Enable the highest-complexity engagement models.**

| Capability | Required By | Rationale |
|-----------|-------------|-----------|
| **F6: MCP Integration Backbone** | M1, M2, M4, M6 (required); all others (beneficial) | Reduces the N-by-M integration problem. Any multi-tool-aware product benefits. |
| **F7: Knowledge Graph / Structured Memory** | M2, M6 (required); M4, M5 (beneficial) | The single strongest defence against MC1 (novelty decay) -- creates compounding value and switching cost. Required for any M2-based product. LLM-intensive to build but reusable across problem domains. |
| **F5: On-Device Processing** | M1, M2, M6 (required); all others (beneficial) | Privacy prerequisite for any product that monitors user activity or reads communications. Builds user trust (MC4 mitigation). |

### 7.2 Infrastructure Overlap by Engagement Model

| Shared Infrastructure | M1 Ambient | M2 Capture | M3 Modality | M4 Reorder | M5 Calibrate | M6 Inject | M7 Check-In | M8 Scaffold |
|----------------------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| F1 Calendar | Yes | Yes | Opt | Yes | Yes | Yes | Yes | Opt |
| F2 Task Tools | Yes | Opt | -- | Yes | Opt | Yes | Yes | Opt |
| F3 Non-Shaming Tone | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes |
| F4 Variability Engine | Yes | Yes | -- | Yes | Yes | Yes | Yes | -- |
| F5 On-Device | Yes | Yes | Opt | -- | -- | Yes | -- | -- |
| F6 MCP Backbone | Yes | Yes | Opt | Yes | Opt | Yes | Opt | Opt |
| F7 Knowledge Graph | Opt | Yes | -- | Opt | Opt | Yes | -- | -- |

**Key:** Yes = required, Opt = optional/beneficial, -- = not applicable.

**Key observations:**

M2 (Passive Capture) and M6 (Periodic Injection) require the heaviest infrastructure -- both need F1 through F7. M1 (Ambient Monitor) requires F1-F6 but not necessarily F7. M3 (Modality Shift) and M8 (On-Demand Scaffolding) require the lightest infrastructure.

The foundation set F1 + F3 + F4 + F6 is required by 6 of 8 engagement models and enables the broadest optionality. Adding F5 + F7 extends to the most technically demanding models (M1, M2, M6).

### 7.3 Minimum Viable Foundation

The smallest investment that creates the most optionality:

**F1 (Calendar) + F3 (Non-Shaming Tone)** -- universal requirements. Trivial to build. Enables exploration of any engagement model.

Adding **F6 (MCP)** -- enables any multi-tool-aware product. Moderate effort.

Adding **F4 (Variability Engine)** -- enables any product with recurring interventions. Significant effort but required by most engagement models.

Adding **F5 (On-Device) + F7 (Knowledge Graph)** -- enables the most technically ambitious and meta-challenge-resilient engagement models (M1, M2, M6). Significant effort. This is the "build the platform layer" investment.

---

## 8. Source Cross-Reference

| Section | Primary Source(s) | What Was Pulled |
|---------|------------------|-----------------|
| 1. Purpose & Scope | -- | Original framing |
| 2. Layer 1: Problem Clusters | S4_Problem_Clusters.md | Cluster definitions, hub scores, downstream problems; constraining attributes from Cross_Layer_Mapping.md Section 1.1 |
| 3. Layer 2: Engagement Models | L2_Engagement_Models.md | Model descriptions, dimensional positions, distinguishing attributes (summary table from Section 10) |
| 4. L1 <-> L2 Compatibility | Cross_Layer_Mapping.md, Section 1 | Compatibility matrix (Section 1.3), synthesis observations (Section 1.3 Key Observations) |
| 5. Layer 3: Requirements | Cross_Layer_Mapping.md, Sections 2.1-2.9 | Per-model requirement profiles (compact summaries); shared requirements / common foundations (Section 2.9) |
| 6. Meta-Challenges | Meta_Challenges.md; Cross_Layer_Mapping.md, Section 3 | Summary table, vulnerability matrix (Section 3.2), synthesis (Section 3.3), relocated candidates |
| 7. Leverage Points | Cross_Layer_Mapping.md, Section 2.9 | Shared requirements reframed as leverage analysis; infrastructure overlap derived from engagement model requirement profiles |
| 8. Source Cross-Reference | -- | This table |

---

*Choice-Space Map compiled 2026-02-11, revised 2026-02-13. This document maps structural relationships; it does not prescribe solutions or evaluate against Humble's constraints.*
