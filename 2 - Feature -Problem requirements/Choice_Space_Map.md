# ADHD Workplace Product: Choice-Space Map

**Date:** 2026-02-11

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

## 7. Pre-Mapped Paths

Five solution concepts from S7 and S10, mapped onto the choice-space framework. Each "path card" shows the full stack from problem cluster through to meta-challenge vulnerabilities.

---

### Path 1: Activation Engine (FP01 -- Task Initiation)

**Combined Score:** 37/50 (Problem 14 + Gap 10 + Solution 13)

| Layer | Position |
|-------|----------|
| **L1: Problem Cluster** | Cluster B (Initiation-Execution Bottleneck) -- addresses hub problem FP01 directly; downstream benefits to FP08 and FP11 |
| **L2: Engagement Model** | **M1 (Ambient Monitor & Intervene)** -- primary. Detects stalling and delivers graded nudges. Secondary complement from M8 (On-Demand Scaffolding) for the micro-step generation component. |
| **L3: Requirements Triggered** | Activity stream ingestion + stall detection heuristics (Significant, Custom); personalised intervention timing AI (Major, Custom); escalation logic (Moderate, Custom); desktop agent or browser extension (Significant, Custom); calendar + task tool integration (Moderate, Hybrid). Shared foundations: F1 (Calendar), F2 (Task Tools), F3 (Non-Shaming Tone), F4 (Variability Engine), F5 (On-Device Processing), F6 (MCP). |
| **MC Vulnerabilities** | **Most vulnerable:** MC5 (Notification Desensitisation -- H) -- the model's value delivery depends entirely on nudges being perceived. **Moderately vulnerable:** MC1 (nudge habituation), MC4 (visible interventions during screen-share). **Least vulnerable:** MC2 (always-on background operation bypasses bootstrapping), MC3 (no visible failure accumulation during absence). |

**Key tension:** This path addresses the highest-scored problem but depends on the notification channel (MC5) as its primary delivery mechanism. The variability engine (F4) is not optional -- it is existential.

---

### Path 2: Voice-to-Doc Bridge (FP11 -- Documentation Paralysis)

**Combined Score:** 35/50 (Problem 10 + Gap 10 + Solution 15)

| Layer | Position |
|-------|----------|
| **L1: Problem Cluster** | Cluster B downstream (FP11 Documentation Paralysis). Does not address the FP01 hub directly but solves a specific, high-friction manifestation of initiation failure. |
| **L2: Engagement Model** | **M3 (Modality Shift)** -- primary. User-initiated voice recording with AI transformation to structured document. |
| **L3: Requirements Triggered** | Speech-to-text (Trivial, OTS); speech-to-structured-document AI (Moderate, Hybrid); template library (Trivial, Custom); one-tap recording UX (Moderate, Custom). Shared foundations: F3 (Non-Shaming Tone); F1 (Calendar, optional for prompting). Lightest L3 footprint of any path. |
| **MC Vulnerabilities** | **Most vulnerable:** MC2 (Bootstrapping -- H) -- user must remember the tool exists and initiate use; the classic "out of sight, out of mind" problem. **Moderately vulnerable:** MC1 (novelty of voice-to-doc may fade), MC4 (voice recording visible in shared spaces). **Least vulnerable:** MC3 (no history of failure; each use is fresh), MC5 (no notification dependency). |

**Key tension:** Fastest to build, lightest requirements, but highest bootstrapping risk and narrowest problem coverage. Better as a feature within a broader product than a standalone play, unless calendar-prompted use mitigates MC2.

---

### Path 3: Time Perception Calibrator (FP03 -- Time Blindness)

**Combined Score:** 35/50 (Problem 14 + Gap 9 + Solution 12)

| Layer | Position |
|-------|----------|
| **L1: Problem Cluster** | Cluster A (Time-Perception Cascade) -- addresses hub problem FP03 directly; downstream benefits to FP04, FP12, and partially FP08 |
| **L2: Engagement Model** | **M5 (Calibration Feedback Loop)** -- primary. Estimation-vs-actual tracking with real-time time-elapsed awareness and personal bias calibration. |
| **L3: Requirements Triggered** | Estimation-vs-actual tracking (Moderate, Hybrid); personal bias model AI (Significant, Custom); real-time overrun alerts + time-elapsed display (Moderate, Hybrid); low-friction estimation prompt UX (Moderate, Custom); calendar integration (Trivial, OTS). Shared foundations: F1 (Calendar), F3 (Non-Shaming Tone), F4 (Variability Engine, for alert delivery). |
| **MC Vulnerabilities** | **Most vulnerable:** MC2 (Bootstrapping -- H) -- user must actively estimate before each task; the estimation habit must be maintained or the entire loop breaks. **Moderately vulnerable:** MC1, MC3, MC4, MC5 (all M -- no area of structural strength). **Least vulnerable:** None rated L. |

**Key tension:** Addresses the strongest hub problem in the cluster map, but has the weakest meta-challenge profile of any candidate except M7. The estimation micro-habit is simultaneously the core mechanism and the primary failure point. The cold-start problem (calibration accuracy improves over time) delays value delivery.

---

### Path 4: Encoding Compensator (FP07 -- Meeting Memory)

**Combined Score:** 34/50 (Problem 11 + Gap 8 + Solution 15)

| Layer | Position |
|-------|----------|
| **L1: Problem Cluster** | FP07 (unclustered) -- meeting memory failure driven by encoding deficit. Low connectedness to other problems but strongest clinical evidence base (Tier 1). |
| **L2: Engagement Model** | **M2 (Passive Capture & Structured Delivery)** -- primary. Automatic meeting capture, ADHD-optimised summarisation, proactive commitment resurfacing. |
| **L3: Requirements Triggered** | Meeting transcript ingestion (Moderate, Hybrid); commitment extraction NLP (Significant, Custom); knowledge graph for entities/commitments (Significant, Hybrid); resurfacing trigger logic (Moderate, Custom); meeting platform + calendar + optional email integration (Significant, Hybrid). Shared foundations: F1 (Calendar), F3 (Non-Shaming Tone), F5 (On-Device Processing), F6 (MCP), F7 (Knowledge Graph). |
| **MC Vulnerabilities** | **Most vulnerable:** None rated H. **Moderately vulnerable:** MC4 (meeting bot visibility), MC5 (delivery of resurfaced content via notifications). **Least vulnerable:** MC1 (knowledge graph compounds -- switching cost counteracts novelty decay), MC2 (runs in background after setup), MC3 (continues working during absence; no failure artefacts). |

**Key tension:** Best meta-challenge profile of any candidate. Addresses a clinically robust mechanism with zero behaviour change required. But: isolated problem (low connectedness), must compete against well-funded general meeting AI tools, and meeting bot social friction is a real barrier (mitigated by Granola-style local capture).

---

### Path 5: Prospective Memory Platform (Cross-Cutting)

**Combined Score:** Solution 12/20 (does not fit single-problem scoring scale; addresses FP07 + FP09 + partially FP08 + FP11)

**Component solutions included:** Reply Intent Tracker (FP09, Combined 32/50) and Interest-Aware Surfacer (FP05, Combined 33/50) are potential components or expansion modules.

| Layer | Position |
|-------|----------|
| **L1: Problem Cluster** | Cross-cutting: FP07 (meeting memory) + FP09 (email management) + partially FP08 (project neglect) + partially FP11 (documentation). Addresses the root prospective memory mechanism underneath multiple problems. |
| **L2: Engagement Model** | **M2 (Passive Capture & Structured Delivery)** -- primary for meeting and email channels. Expands to incorporate **M6 (Periodic Injection)** for the project engagement decay component and **M4 (Intelligent Reordering)** for the interest-aware surfacing component. This is a multi-model architecture. |
| **L3: Requirements Triggered** | Everything from the Encoding Compensator path, plus: email read/reply state tracking (Moderate, Hybrid); multi-channel commitment extraction NLP across meetings, email, and chat (Significant-Major, Custom); unified knowledge graph across all channels (Significant, Hybrid); contextual resurfacing engine (Moderate, Custom); optional Slack/Teams monitoring. Shared foundations: F1, F2, F3, F4, F5, F6, F7 -- requires all seven. Heaviest L3 footprint of any path. |
| **MC Vulnerabilities** | Inherits M2's strong profile for the core capture layer: low on MC1, MC2, MC3. M6 components add moderate MC1 and MC3 exposure. M4 components add moderate MC2 exposure. Composite profile is stronger than any single-model path because M2's passive architecture dominates. **Most vulnerable:** MC4 (Moderate -- system reads all communications; disclosure risk from tool visibility). **Least vulnerable:** MC1 (knowledge graph is the strongest compounding-value defence), MC2 (fully passive after setup), MC3 (continues building value during absence). |

**Key tension:** Highest ambition, highest build complexity (3-6 months to MVP), highest accuracy requirements (false positives erode trust, false negatives defeat purpose), but also the most differentiated (zero competition for multi-channel commitment tracking), strongest clinical grounding (Tier 1 prospective memory research), and strongest meta-challenge profile. The knowledge graph compounds over time, creating switching cost that structurally counteracts the app graveyard. Can be staged: email-only first (Reply Intent Tracker), then meetings (Encoding Compensator), then Slack/Teams and project monitoring.

---

## 8. Leverage Points

### 8.1 Highest-Leverage Capabilities

Synthesised from the shared requirements (Section 5.2) and pre-mapped paths (Section 7):

**Tier 1: Build first -- unlocks the most paths.**

| Capability | Paths Enabled | Rationale |
|-----------|--------------|-----------|
| **F1: Calendar Integration** | All 5 paths | Universal dependency. Trivial to build. Provides time-awareness context for every engagement model. |
| **F3: Non-Shaming Tone Framework** | All 5 paths | Required by every user-facing surface. Not a feature but a design language that permeates all AI-generated content, notifications, and UI copy. Must be established before any user-facing work. |
| **F6: MCP Integration Backbone** | Paths 1, 4, 5 (required); Paths 2, 3 (beneficial) | Reduces the N-by-M integration problem. Establishing the MCP layer first means every subsequent tool integration is faster. |

**Tier 2: Build second -- enables the most ambitious paths and provides structural defences.**

| Capability | Paths Enabled | Rationale |
|-----------|--------------|-----------|
| **F7: Knowledge Graph / Structured Memory** | Paths 4, 5 (required); Path 1 (beneficial) | The single strongest defence against MC1 (novelty decay) -- creates compounding value and switching cost. Required for any M2-based path. LLM-intensive to build but reusable across meeting capture, email tracking, and project monitoring. |
| **F4: Variability Engine** | Paths 1, 3 (critical); Paths 4, 5 (required) | Architectural response to MC1 and MC5. Any path using recurring interventions (nudges, alerts, resurfaced content) will fail without adaptive delivery. Not a feature but an infrastructure layer for the notification pipeline. |
| **F5: On-Device Processing** | Paths 1, 4, 5 (required) | Privacy prerequisite for any path that monitors user activity or reads communications. Builds user trust (MC4 mitigation). Apple Foundation Models and Ollama make this achievable. |

### 8.2 Infrastructure Overlap

| Shared Infrastructure | Path 1 (Activation) | Path 2 (Voice-to-Doc) | Path 3 (Time Calibrator) | Path 4 (Encoding) | Path 5 (Platform) |
|----------------------|:---:|:---:|:---:|:---:|:---:|
| F1 Calendar | Yes | Optional | Yes | Yes | Yes |
| F2 Task Tools | Yes | -- | Optional | Optional | Yes |
| F3 Non-Shaming Tone | Yes | Yes | Yes | Yes | Yes |
| F4 Variability Engine | Yes | -- | Yes | Yes | Yes |
| F5 On-Device Processing | Yes | Optional | -- | Yes | Yes |
| F6 MCP Backbone | Yes | Optional | Optional | Yes | Yes |
| F7 Knowledge Graph | Optional | -- | -- | Yes | Yes |

Paths 4 and 5 share the heaviest infrastructure. Building Path 4 (Encoding Compensator) first creates F1 + F3 + F5 + F6 + F7 -- which are all required by Path 5 (Platform). This makes Path 4 a natural stepping stone to Path 5.

Paths 1 and 3 share F1 + F3 + F4 but diverge at the core mechanism (stall detection vs. estimation calibration). Building Path 1 first does not substantially accelerate Path 3.

Path 2 (Voice-to-Doc) shares almost no infrastructure with the others. It is fast to build but does not create leverage for subsequent paths.

### 8.3 Minimum Viable Foundation

The smallest investment that creates the most optionality:

**F1 (Calendar) + F3 (Non-Shaming Tone) + F6 (MCP)** enables Paths 1, 3, 4, and 5 to begin. Total effort: weeks, not months.

Adding **F7 (Knowledge Graph) + F5 (On-Device Processing)** elevates this to a foundation for the two strongest meta-challenge-resistant paths (4 and 5). Total effort: 1-2 additional months.

Adding **F4 (Variability Engine)** on top completes the foundation for all notification-dependent paths (1, 3, 4, 5). This is the "build everything except the core engagement logic" layer.

---

## 9. Source Cross-Reference

| Section | Primary Source(s) | What Was Pulled |
|---------|------------------|-----------------|
| 1. Purpose & Scope | -- | Original framing |
| 2. Layer 1: Problem Clusters | S4_Problem_Clusters.md | Cluster definitions, hub scores, downstream problems; constraining attributes from Cross_Layer_Mapping.md Section 1.1 |
| 3. Layer 2: Engagement Models | L2_Engagement_Models.md | Model descriptions, dimensional positions, distinguishing attributes (summary table from Section 10) |
| 4. L1 <-> L2 Compatibility | Cross_Layer_Mapping.md, Section 1 | Compatibility matrix (Section 1.3), synthesis observations (Section 1.3 Key Observations) |
| 5. Layer 3: Requirements | Cross_Layer_Mapping.md, Sections 2.1-2.9 | Per-model requirement profiles (compact summaries); shared requirements / common foundations (Section 2.9) |
| 6. Meta-Challenges | Meta_Challenges.md; Cross_Layer_Mapping.md, Section 3 | Summary table, vulnerability matrix (Section 3.2), synthesis (Section 3.3), relocated candidates |
| 7. Pre-Mapped Paths | S7_Solution_Scoring.md; S10_Final_Report.md; mapped onto L2 and Cross_Layer_Mapping.md | Solution concepts, combined scores, and strategic paths from S7/S10; engagement model matching, L3 requirement triggering, and MC vulnerability assessment from L2/Cross_Layer_Mapping |
| 8. Leverage Points | Cross_Layer_Mapping.md, Section 2.9; Section 7 (this document) | Shared requirements reframed as leverage analysis; infrastructure overlap derived from path cards |
| 9. Source Cross-Reference | -- | This table |

---

*Choice-Space Map compiled 2026-02-11. This document maps structural relationships; it does not evaluate against Humble's constraints. That overlay is the next step.*
