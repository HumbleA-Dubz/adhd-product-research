# Cross-Layer Mapping: Problem Clusters x Engagement Models x Implementation Requirements

**Layer integration analysis for the ADHD Product Choice-Space Map**
**Date:** 2026-02-10

---

## Methodology Note

This document maps the structural relationships between Layer 1 (problem clusters), Layer 2 (engagement models), and Layer 3 (implementation requirements), and overlays the five confirmed meta-challenges as cross-cutting vulnerability assessments.

**Judgment consistency principles applied throughout:**

1. **Frequency-to-initiation matching:** High-frequency problems favour low-effort, ambient models. Low-frequency problems can tolerate higher-effort, on-demand models.
2. **Awareness-to-timing matching:** Problems the user notices in real-time can use reactive models. Problems only visible in retrospect require proactive or capture models.
3. **Co-occurrence-to-breadth matching:** Tightly co-occurring problems need models that can address multiple problems per interaction.
4. **Context-to-surface matching:** Where the problem occurs determines which delivery surfaces and interaction points are viable.

**Inputs:** S4 (Problem Clusters), L2 (Engagement Models), Meta-Challenges, S7 (Solution Scoring), S9 (Emerging Technology Assessment), S10 (Final Report).

**Ratings key:**
- **S** = Strongly compatible
- **P** = Partially compatible
- **X** = Incompatible

---

## Section 1: Layer 1 <-> Layer 2 Compatibility Matrix

### 1.1 Cluster and Problem Attributes (reference for ratings)

Before the matrix, the key attributes of each cluster and unclustered problem that constrain engagement model compatibility:

| Cluster / Problem | Frequency | Primary Context | User Awareness | Co-occurrence |
|---|---|---|---|---|
| **Cluster A (Time-Perception Cascade)**: FP03 hub, FP04, FP12, FP08 partial | Very high -- time perception is continuous | All work contexts; especially transitions between tasks, meetings, deadlines | Low in real-time (user does not feel time passing); high in retrospect (after deadline missed) | Tightly co-occurring: time blindness causes deadline misses, lateness, and project neglect simultaneously |
| **Cluster B (Initiation-Execution Bottleneck)**: FP01 hub, FP08, FP11 | High -- multiple initiation points daily | At the start of any task; especially low-stimulation, complex, or deferred tasks | Moderate -- user often knows they are stuck but cannot act; sometimes unaware (procrastivity) | Moderate: initiation failure and documentation paralysis co-occur when facing writing tasks; project neglect co-occurs with sustained low-urgency work |
| **Cluster C (Attention-Quality Chain)**: FP02 hub, FP06, FP04 shared | Very high -- attention fluctuates throughout every work session | During task execution; especially during detail-oriented or monotonous work | Low in real-time (user does not notice attention wandering); errors visible only in review | Moderate: focus lapses produce both errors and insufficient output, but these are independently manifested |
| **FP05 Prioritisation Failure** (unclustered amplifier) | High -- every task-selection moment | When scanning task lists or deciding what to work on next | Moderate -- user may feel overwhelmed but not recognise that wrong sequencing is the root | Cross-cluster amplifier: worsens all three clusters |
| **FP07 Meeting Memory Failure** (unclustered) | Moderate -- tied to meeting frequency (typically 3-8/day for knowledge workers) | During and immediately after meetings | Very low -- user understands content in real-time but encoding fails silently; only noticed when commitment is missed days later | Low: operates independently of other problems; encoding deficit is mechanistically distinct |
| **FP09 Email Management Failure** (unclustered) | High -- email is continuous throughout workday | When reading email and forming reply intentions | Very low -- user reads email, intends to reply, then the intention vanishes from awareness entirely | Low-moderate: shares prospective memory mechanism with FP07 but operates in a distinct domain |

### 1.2 Compatibility Matrix

#### Cluster A: Time-Perception Cascade (Hub: FP03 Time Blindness)

| Engagement Model | Rating | Rationale |
|---|:---:|---|
| **M1: Ambient Monitor & Intervene** | **S** | Time blindness manifests continuously during work and the user is unaware in real-time -- precisely the conditions where ambient detection and proactive intervention are structurally necessary. The model can detect time overruns and intervene before downstream failures (FP04, FP12) cascade. |
| **M2: Passive Capture & Structured Delivery** | **P** | Passive capture can record time-relevant context (meeting durations, commitment deadlines) but addresses the retrospective dimension only. It cannot make the user aware of time *as it passes* -- the core deficit. Useful for the FP04/FP12 downstream problems (deadline/lateness reminders) but does not address the FP03 hub mechanism. |
| **M3: Modality Shift** | **X** | Time blindness is a perception deficit, not a task-execution modality problem. Changing input modality (voice vs. writing) does not alter how the user perceives the passage of time. No structural alignment. |
| **M4: Intelligent Reordering** | **P** | Reordering tasks by neurological accessibility could factor in time constraints (surface short tasks when a meeting is approaching), providing indirect time awareness. However, the model does not address the core time perception deficit -- it manages around it rather than compensating for it. Partially helpful for the FP04 downstream (deadline misses from poor sequencing). |
| **M5: Calibration Feedback Loop** | **S** | This model directly targets the time blindness mechanism: estimation vs. actual tracking, personal bias calibration, and real-time time-elapsed awareness. It is structurally designed for this cluster. The "before + during" timing profile matches the continuous nature of time perception failure. |
| **M6: Periodic Injection** | **P** | Periodic injection can address FP08 (project neglect, a Cluster A downstream problem driven by delay discounting) by surfacing neglected projects. However, it does not address the FP03 hub problem (real-time time perception) because periodic micro-tasks operate on a different timescale than moment-to-moment time awareness. Relevant for the Cluster A periphery, not the core. |
| **M7: Structured Check-In** | **P** | A daily planning check-in can incorporate time estimation (how long will each task take?) and realistic load assessment (you have 6 hours of meetings -- planning 8 hours of task work is unrealistic). This addresses the planning dimension of time blindness but not the real-time, during-task dimension. Useful for FP04 prevention but does not compensate for the perceptual deficit during execution. |
| **M8: On-Demand Scaffolding** | **X** | On-demand scaffolding is user-initiated and episodic -- the user must recognise they are experiencing time blindness and seek help, which contradicts the low-awareness nature of the problem. Time blindness is continuous and below conscious awareness; a tool that waits for the user to ask for help cannot address it. |

#### Cluster B: Initiation-Execution Bottleneck (Hub: FP01 Task Initiation)

| Engagement Model | Rating | Rationale |
|---|:---:|---|
| **M1: Ambient Monitor & Intervene** | **S** | Initiation failure manifests as detectable stalling (no meaningful input across apps). The model's continuous monitoring can detect the stuck state and deliver graded interventions (nudge -> micro-step -> body double -> scaffold) without requiring the user to self-identify as stuck. Directly designed for this cluster. |
| **M2: Passive Capture & Structured Delivery** | **X** | Passive capture records what happened -- but initiation failure means *nothing happens*. There is no content to capture during a stall. The model's after-the-fact delivery cannot address a problem that manifests as absence of action. The model could capture commitments made elsewhere that then require initiation, but this is addressing FP07/FP09, not FP01. |
| **M3: Modality Shift** | **P** | For FP11 (documentation paralysis), modality shift directly lowers the initiation barrier by changing "write" to "speak." This is a strong sub-cluster fit. However, for FP01 broadly (general task initiation), changing input modality does not address the core activation-energy deficit for non-writing tasks. Partially compatible because it covers one important Cluster B downstream problem but not the hub mechanism. |
| **M4: Intelligent Reordering** | **S** | Reordering tasks by neurological accessibility directly addresses the "cannot start" problem by surfacing the task with the lowest activation barrier right now. The "show one task" anti-overwhelm pattern reduces the decision paralysis that compounds initiation failure. Procrastivity detection bridges "what you can do" to "what you should do." Strong structural alignment with the FP01 mechanism. |
| **M5: Calibration Feedback Loop** | **X** | Calibration requires the user to estimate before starting and reflect after completing. Initiation failure means the user cannot start -- the calibration loop has no input if the task never begins. The model addresses time perception, not activation energy. |
| **M6: Periodic Injection** | **P** | Injecting micro-tasks into daily workflow can lower activation barriers for FP08 (project neglect -- a Cluster B downstream problem) by presenting small, concrete entry points for neglected work. However, the model does not address the core FP01 hub problem because the injected task itself requires initiation. It reduces the *size* of the initiation barrier but does not provide the real-time intervention needed at the moment of stalling. |
| **M7: Structured Check-In** | **P** | A guided check-in can help the user plan which tasks to start and when, reducing the decision overhead that compounds initiation failure. Practitioners recommend this approach. However, it requires the user to show up for the check-in (a meta-initiation problem) and cannot help at the moment of stalling during the day. Addresses the planning dimension but not the execution-moment dimension. |
| **M8: On-Demand Scaffolding** | **P** | When the user *does* recognise they are stuck, scaffolding (task breakdown into micro-steps, drafting a starting point) can lower the activation barrier. This is Goblin Tools' approach and is community-validated. However, it requires the user to self-identify as stuck and initiate a request for help -- a meta-initiation problem. Works when the user has enough awareness to seek help; fails when they are in unaware procrastivity. |

#### Cluster C: Attention-Quality Chain (Hub: FP02 Inconsistent Focus)

| Engagement Model | Rating | Rationale |
|---|:---:|---|
| **M1: Ambient Monitor & Intervene** | **S** | Focus inconsistency manifests as detectable context-switching and time-on-wrong-task patterns. Ambient monitoring can detect attention drift and intervene (refocus prompt, distraction block, environment suggestion). The model's embedded, always-on nature matches the continuous and below-awareness nature of focus lapses. Must respect hyperfocus (do not interrupt productive deep work). |
| **M2: Passive Capture & Structured Delivery** | **P** | Passive capture cannot prevent focus lapses but can document what happened during them -- capturing content the user was exposed to but may not have retained during low-focus periods. Useful for FP06 (attention-to-detail errors) in that captured records enable review/verification. Does not address the hub mechanism (focus inconsistency itself). |
| **M3: Modality Shift** | **X** | Changing input modality does not address attention variability. Focus inconsistency occurs regardless of whether the user is typing, speaking, reading, or listening. No structural alignment with the attention mechanism. |
| **M4: Intelligent Reordering** | **P** | Reordering tasks by neurological accessibility can match tasks to current energy/focus state (surface easy tasks during low-focus periods, complex tasks during high-focus periods). This works around focus inconsistency rather than compensating for it. Partially helpful for reducing the impact of FP02 on FP04 (deadline misses due to insufficient output). |
| **M5: Calibration Feedback Loop** | **P** | Tracking focus patterns over time could help the user learn their personal attention rhythms (when focus is best, when it reliably drops). This addresses the meta-awareness dimension of focus inconsistency but does not prevent or intervene during lapses. Partial alignment through self-knowledge building. |
| **M6: Periodic Injection** | **X** | Focus inconsistency is a within-task, moment-to-moment problem. Periodic injection operates at the between-task level (surfacing neglected projects). The timescale mismatch is fundamental: focus lapses happen in seconds-to-minutes; periodic injections happen in hours-to-days. |
| **M7: Structured Check-In** | **P** | A check-in can help the user plan focus-intensive work during their best attention windows and schedule low-focus tasks for typical slump periods. Addresses the planning dimension of focus management. Does not address real-time focus lapses during execution. Limited by the variability problem: what works Monday may fail Tuesday. |
| **M8: On-Demand Scaffolding** | **P** | When focus breaks and the user recognises they are lost, scaffolding can help them re-orient (what was I doing? what is the next micro-step?). However, focus lapses are typically below conscious awareness -- the user does not notice attention has drifted until significant time has passed. Works for the recovery phase, not the prevention phase. |

#### FP05: Prioritisation Failure (Unclustered Amplifier)

| Engagement Model | Rating | Rationale |
|---|:---:|---|
| **M1: Ambient Monitor & Intervene** | **P** | Ambient monitoring can detect procrastivity (completing low-priority tasks while high-priority ones stagnate) and intervene with a redirect. However, the model's primary mechanism is detecting stuck states, not evaluating task importance. The prioritisation judgment layer adds significant complexity on top of the core detection mechanism. Partially compatible as an extension. |
| **M2: Passive Capture & Structured Delivery** | **X** | Passive capture records what happened but does not help with what *should* happen next. Prioritisation is a forward-looking decision problem; capture-and-deliver is a backward-looking information problem. No structural alignment. |
| **M3: Modality Shift** | **X** | Changing input modality does not help the user decide what to work on. Prioritisation failure is a decision problem, not an execution modality problem. |
| **M4: Intelligent Reordering** | **S** | This model is structurally designed for prioritisation failure. It sits on top of the user's task system and reorders based on neurological accessibility balanced against importance. The "show one task" pattern eliminates the decision paralysis that FP05 creates. Procrastivity detection (built into the model design) directly targets the interest-based override of importance. |
| **M5: Calibration Feedback Loop** | **P** | Calibration could track prioritisation accuracy over time (did the user work on what mattered?) and feed back patterns. This builds meta-awareness about prioritisation tendencies but does not provide in-the-moment guidance on what to do next. Partial alignment through self-knowledge. |
| **M6: Periodic Injection** | **P** | Periodic injection can surface neglected high-priority items as micro-tasks, counteracting the tendency to work only on stimulating low-priority items. However, it does not address the in-the-moment decision of "what should I do right now?" -- it addresses the longer-timescale problem of neglected obligations. Partial overlap. |
| **M7: Structured Check-In** | **S** | A guided planning check-in directly addresses prioritisation by walking the user through: what are your commitments? which are most important? which will you do today? Forced prioritisation during planning is a practitioner-recommended intervention. The model's timing (before the problem) aligns well with prioritisation as a planning activity. However, the prioritised plan may not survive contact with real-time interest-based impulses during the day. |
| **M8: On-Demand Scaffolding** | **P** | When the user feels overwhelmed by competing priorities, scaffolding can generate a decision framework or simplified priority ranking. Requires the user to recognise they are struggling with prioritisation and seek help. Works for conscious overwhelm; fails for unconscious procrastivity. |

#### FP07: Meeting Memory Failure (Unclustered)

| Engagement Model | Rating | Rationale |
|---|:---:|---|
| **M1: Ambient Monitor & Intervene** | **P** | Ambient monitoring during meetings could detect the user's attention state and provide real-time cues (highlight when a commitment is being made, flag action items as they occur). However, intervening *during* a meeting creates social friction and distraction. The model's intervention mechanism conflicts with the meeting context. Partially compatible for post-meeting resurfacing of detected commitments. |
| **M2: Passive Capture & Structured Delivery** | **S** | This model is structurally designed for meeting memory. It captures everything automatically (zero effort), processes it after the fact (matching the "encoding fails silently" awareness profile), and delivers structured output proactively (before next meeting with same person, at commitment deadlines). The user's very low real-time awareness of the problem means a capture-first model is necessary. The zero-effort profile matches the encoding deficit: the user cannot compensate by trying harder to remember. |
| **M3: Modality Shift** | **X** | Meeting memory failure is an encoding deficit during listening/participating. Changing input modality is irrelevant -- the user is already listening and speaking in the meeting. The problem is that the brain fails to store what it processes, not that the modality is wrong. |
| **M4: Intelligent Reordering** | **X** | Task reordering has no bearing on meeting memory. The problem occurs during meetings, not during task selection. No structural alignment. |
| **M5: Calibration Feedback Loop** | **X** | Calibration addresses estimation accuracy and time perception. Meeting memory failure is not an estimation or calibration problem -- it is an encoding deficit. The feedback loop has nothing to calibrate against for this problem. |
| **M6: Periodic Injection** | **P** | Periodic injection could resurface meeting commitments as micro-tasks in the user's daily flow, partially compensating for forgotten commitments. However, this addresses the downstream consequence (forgotten action items) rather than the core problem (encoding failure). It also requires that commitments were captured somewhere first, making it dependent on M2-style capture. |
| **M7: Structured Check-In** | **P** | A check-in could include "review your meeting commitments from yesterday" as a step. However, if meeting content was not captured (because the encoding deficit means the user has nothing to review from memory), the check-in has no material to work with. Partially compatible if combined with M2-style capture upstream. |
| **M8: On-Demand Scaffolding** | **X** | On-demand scaffolding requires the user to recognise they have a problem and seek help. Meeting memory failure is invisible until the commitment is missed days later. The user cannot request scaffolding for a problem they do not know exists. |

#### FP09: Email Management Failure (Unclustered)

| Engagement Model | Rating | Rationale |
|---|:---:|---|
| **M1: Ambient Monitor & Intervene** | **P** | Ambient monitoring could detect "read email, did not reply" patterns and nudge the user. However, the problem manifests silently (the user does not know they have forgotten) and the intervention would need to arrive at an appropriate moment (not immediately after reading, but at a chosen review time). The model's real-time intervention timing is not well-matched to email's asynchronous nature. Partially compatible for detecting the "stalled on composing a reply" sub-pattern. |
| **M2: Passive Capture & Structured Delivery** | **S** | This model directly addresses the email failure mechanism. It passively captures email read-state and reply-state (zero effort), detects the "read but not replied" pattern (the core prospective memory failure), and delivers a structured reply queue at an appropriate moment (before meeting with sender, at daily review time). The user's very low awareness of the problem and the asynchronous nature of email make capture-and-deliver the structurally optimal approach. |
| **M3: Modality Shift** | **P** | Once a forgotten email has been resurfaced, modality shift (voice-to-reply) could lower the barrier to actually composing the reply. This addresses the composition initiation sub-problem but not the core forgetting-to-reply problem. Partially compatible as a downstream complement to M2-style capture. |
| **M4: Intelligent Reordering** | **P** | If email replies are treated as tasks, reordering by urgency/neurological accessibility could help. However, the core problem is not "which email to reply to first" but "remembering that a reply is needed at all." Reordering an invisible queue does not solve the visibility problem. Partially compatible for managing the reply queue once surfaced. |
| **M5: Calibration Feedback Loop** | **X** | Email management failure is a prospective memory deficit, not a time estimation or calibration problem. There is nothing to calibrate. |
| **M6: Periodic Injection** | **P** | Injecting "reply to Sarah's email about Q3 report" as a micro-task into the user's daily flow could compensate for the forgotten intention. However, this is structurally a simplified version of M2's reply queue. It addresses the downstream (surfacing the forgotten reply) but requires email monitoring upstream. Compatible as a delivery mechanism. |
| **M7: Structured Check-In** | **P** | A daily check-in could include an email review step ("you read but did not reply to 4 emails yesterday"). However, generating the list of unreplied emails requires M2-style monitoring upstream. The check-in format is partially useful as a delivery timing for resurfaced emails but adds habit-formation burden to what could be a passive process. |
| **M8: On-Demand Scaffolding** | **X** | The user does not know they have forgotten to reply. They cannot request scaffolding for a problem they are not aware of. On-demand interaction is structurally incompatible with a below-awareness prospective memory deficit. |

### 1.3 Compatibility Summary Table

| | M1 Ambient | M2 Capture | M3 Modality | M4 Reorder | M5 Calibrate | M6 Inject | M7 Check-In | M8 Scaffold |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| **Cluster A (Time)** | S | P | X | P | S | P | P | X |
| **Cluster B (Init)** | S | X | P | S | X | P | P | P |
| **Cluster C (Attn)** | S | P | X | P | P | X | P | P |
| **FP05 (Priority)** | P | X | X | S | P | P | S | P |
| **FP07 (Meeting)** | P | S | X | X | X | P | P | X |
| **FP09 (Email)** | P | S | P | P | X | P | P | X |

**Key observations:**

1. **M1 (Ambient Monitor) is the most broadly compatible model** -- strongly compatible with all three clusters. Its continuous, embedded, product-initiated nature matches the high-frequency, low-awareness profile of most ADHD workplace problems. Its limitation is the unclustered problems (FP07, FP09) where the meeting/email context constrains real-time intervention.

2. **M2 (Passive Capture) is narrowly but deeply compatible** -- strongly compatible only with FP07 and FP09 but these represent the strongest clinical evidence and the widest market gaps. Its incompatibility with Cluster B (nothing to capture when nothing happens) is a fundamental structural limitation.

3. **M4 (Intelligent Reordering) complements M1** -- strong for Cluster B and FP05 (prioritisation), where M1's detection-and-intervene pattern aligns less naturally. Together, M1 + M4 would cover all three clusters and the prioritisation amplifier.

4. **M5 (Calibration) is highly specific** -- strongly compatible only with Cluster A (time perception). Its structural design maps directly to the time blindness mechanism and has limited applicability elsewhere.

5. **M7 (Structured Check-In) has broad partial compatibility but no strong compatibility except FP05** -- it touches everything but solves nothing fully by itself. Consistent with its documented position as the model most vulnerable to the ADHD app graveyard.

6. **M3 (Modality Shift) and M8 (On-Demand Scaffolding) are the most constrained models** -- limited to specific sub-problems (documentation paralysis for M3, conscious stuck-states for M8). Both are better as features within a broader product than as standalone engagement models.

7. **No single model covers all six problem areas at the "strongly compatible" level.** Any product addressing the full problem space requires combining multiple engagement models.

---

## Section 2: Layer 2 -> Layer 3 Requirement Profiles

For each engagement model, the following profiles specify what Layer 3 capabilities are required, at what complexity level, and whether off-the-shelf options exist.

**Complexity scale:** Trivial (well-understood, libraries exist) / Moderate (standard engineering, some custom logic) / Significant (requires careful design, substantial custom development) / Major (research-grade difficulty, no proven production patterns)

**Build vs. Buy indicators:** OTS = off-the-shelf available; Custom = custom-build needed; Hybrid = off-the-shelf components assembled with custom integration logic.

### 2.1 Model 1: Ambient Monitor & Intervene

| L3 Sub-Category | Required? | Specific Capability Need | Complexity | Build/Buy |
|---|:---:|---|---|---|
| 1. Data processing | Required | Activity stream ingestion from desktop/browser; stall detection heuristics; context-switch frequency analysis | Significant -- distinguishing "stuck" from "thinking" from "in a meeting" is non-trivial | Custom (no OTS stall-detection product exists) |
| 2. AI/ML models | Required | Stall detection classifier; personalised intervention timing model; nudge content generation; hyperfocus-vs-distraction discrimination | Major -- personalised intervention timing requires learning individual patterns; avoiding false positives is critical | Custom (core differentiator) |
| 3. Logic/rules | Required | Escalation model (nudge -> micro-step -> body double -> scaffold); suppression rules (do not interrupt meetings, deep focus); cool-down periods between interventions | Moderate -- rule systems are well-understood but the specific escalation logic needs careful ADHD-informed design | Custom |
| 4. Storage/structure | Optional | User pattern history (stall durations, intervention response rates, time-of-day patterns) | Moderate | Hybrid (standard DB + custom schema) |
| 5. Real-time systems | Required | Low-latency detection-to-intervention pipeline; activity monitoring daemon | Significant -- must be always-on with low resource footprint | Custom |
| 6. Interfaces | Required | Notification/overlay system for non-disruptive interventions; must not interfere with active applications | Moderate -- OS-level notification APIs exist but ADHD-appropriate delivery requires custom UX | Hybrid (OS APIs + custom overlay) |
| 7. Integrations | Required | Calendar API (to know what user should be working on); task tool API (for task context); desktop agent or browser extension (for activity monitoring) | Moderate -- standard APIs; desktop agent is the complexity driver | Hybrid (OTS calendar/task APIs + custom desktop agent) |
| 8. Permissions/access | Required | Screen activity monitoring permission; calendar read access; task tool read access | Moderate -- privacy-sensitive; on-device processing essential (S9 Section 2.2) | Custom (permission UX design) |
| 9. Design patterns | Required | Variable intervention delivery to combat notification fatigue; non-shaming tone; graded escalation UX; respect for hyperfocus states | Significant -- the intervention UX is the core product experience and must be ADHD-informed | Custom |

### 2.2 Model 2: Passive Capture & Structured Delivery

| L3 Sub-Category | Required? | Specific Capability Need | Complexity | Build/Buy |
|---|:---:|---|---|---|
| 1. Data processing | Required | Multi-channel ingestion (meeting transcript, email, chat); entity extraction; commitment extraction NLP | Significant -- commitment extraction from natural language is varied and ambiguous | Hybrid (OTS transcription + custom NLP) |
| 2. AI/ML models | Required | Commitment identification (explicit and implicit); ADHD-optimised summarisation; contextual relevance scoring for resurfacing timing | Significant -- distinguishing commitments from conversational noise; timing resurfacing to relevant moments | Custom (core differentiator) |
| 3. Logic/rules | Required | Resurfacing trigger logic (before meeting with person X, approaching deadline, related project opened); delivery frequency management | Moderate -- trigger conditions are enumerable; the challenge is selecting the right moment | Custom |
| 4. Storage/structure | Required | Knowledge graph for entities (people, projects, commitments, deadlines), relationships, and commitment state (open/completed/expired). S9 Section 9.1: GraphRAG + MCP Knowledge Graph | Significant -- graph construction from unstructured communication is LLM-intensive; schema design for commitment lifecycle management | Hybrid (OTS graph DB/GraphRAG + custom schema and construction pipeline) |
| 5. Real-time systems | Required | Near-real-time meeting transcript processing for post-meeting delivery; email read-state monitoring | Moderate -- meeting processing can be near-real-time (minutes); email state polling is straightforward | Hybrid (OTS meeting APIs + custom processing pipeline) |
| 6. Interfaces | Required | Summary delivery surface; commitment dashboard; reply queue (for email variant); spaced-repetition check-in prompts | Moderate -- standard UI patterns; the design challenge is cognitive-load-appropriate density | Hybrid |
| 7. Integrations | Required | Meeting platform API (Zoom/Teams/Meet); email API (Gmail/Outlook); calendar API; optionally Slack/Teams; optionally task tools for action-item injection | Significant -- multi-platform integration is the highest integration burden in the model set; MCP (S9 Section 1.2) substantially reduces this | Hybrid (MCP for protocol + custom per-channel logic) |
| 8. Permissions/access | Required | Meeting recording consent; email read access; calendar read access; potentially Slack/Teams message access | Significant -- privacy-sensitive; on-device processing is essential; consent flows must be transparent | Custom (consent UX + on-device processing architecture) |
| 9. Design patterns | Required | Non-shaming language; progressive nudges; "reply queue" separate from inbox; summary density optimised for ADHD (shorter, commitment-focused) | Moderate -- well-understood design principles; ADHD-specific optimisation is the custom component | Hybrid |

### 2.3 Model 3: Modality Shift

| L3 Sub-Category | Required? | Specific Capability Need | Complexity | Build/Buy |
|---|:---:|---|---|---|
| 1. Data processing | Required | Speech-to-text transcription (Whisper API or equivalent, 95-99% accuracy per S9 Section 5.1) | Trivial -- commoditised; multiple OTS options | OTS (Whisper, GPT-4o-transcribe, ElevenLabs Scribe) |
| 2. AI/ML models | Required | Unstructured-speech-to-structured-document transformation; template matching; tone/format adaptation | Moderate -- primarily prompt engineering with template library; quality of structured output is the differentiator | Hybrid (OTS LLM + custom prompt engineering) |
| 3. Logic/rules | Optional | Template library (status report, meeting notes, email draft, etc.); format detection from context | Trivial -- enumerable template set | Custom (template design) |
| 4. Storage/structure | Optional | Template storage; historical output library for user reference | Trivial | OTS |
| 5. Real-time systems | Optional | Real-time transcription display during recording (user confidence signal) | Trivial -- OTS streaming STT available | OTS |
| 6. Interfaces | Required | One-tap voice recording interface; document review/edit surface; output format selector | Moderate -- the "no blank page" UX is the design differentiator; recording interface must be extremely low-friction | Custom (UX design) |
| 7. Integrations | Optional | Calendar API (for prompting when documentation is due); document platform APIs (Google Docs, Notion, Confluence) for output delivery | Trivial -- standard APIs, optional enhancement | OTS |
| 8. Permissions/access | Required | Microphone access | Trivial | OTS (standard OS permission) |
| 9. Design patterns | Required | "No blank page" UX (starting state is a record button, not an empty document); minimal editing required post-transformation; discreet voice input for open offices (S9 Section 5.2 -- emerging) | Moderate -- core UX design challenge; open-office constraint requires text fallback or whisper mode | Custom |

### 2.4 Model 4: Intelligent Reordering / Decision Reduction

| L3 Sub-Category | Required? | Specific Capability Need | Complexity | Build/Buy |
|---|:---:|---|---|---|
| 1. Data processing | Required | Task list ingestion from external tools; task characteristic inference (complexity, stimulation level, novelty) from task descriptions | Moderate -- task ingestion is standard; characteristic inference from text is an ML classification problem | Hybrid (OTS task APIs + custom classification) |
| 2. AI/ML models | Required | Dynamic reordering algorithm balancing importance vs. neurological accessibility; procrastivity detection; energy/time-of-day pattern learning; interest-based nervous system modelling | Major -- the core algorithm is the product; balancing "what you can do" vs. "what you should do" is an unresolved design challenge (S7 FP05 key risk) | Custom (core differentiator) |
| 3. Logic/rules | Required | Procrastivity escalation (if user completes low-priority tasks while high-priority ones stagnate, surface micro-entry-point for avoided task); task rotation to prevent staleness | Moderate -- rule logic is well-understood; tuning procrastivity thresholds requires user data | Custom |
| 4. Storage/structure | Required | User pattern data (completion patterns, energy cycles, time-of-day preferences, task-type preferences) | Moderate -- standard user model storage | Hybrid |
| 5. Real-time systems | Optional | Push notification of top task suggestion (to mitigate pull-based retention weakness) | Trivial -- standard push notification | OTS |
| 6. Interfaces | Required | Simplified task presentation (ideally single-task view); feedback mechanism ("did you do this? was it the right suggestion?") | Moderate -- anti-overwhelm task presentation is a known pattern (Neurolist); feedback UX must be low-friction | Hybrid |
| 7. Integrations | Required | Deep integration with specific task platforms (Todoist, Notion, Asana, ClickUp, etc.); optionally calendar for time-awareness | Significant -- must read and reorder tasks within external tools; each platform requires custom integration work | Custom per platform (no universal task API exists) |
| 8. Permissions/access | Required | Task tool read/write access (to reorder or surface tasks) | Moderate -- standard OAuth scopes | OTS |
| 9. Design patterns | Required | "Show one task at a time" anti-overwhelm pattern; non-judgmental tone when surfacing avoided tasks; trust-building for algorithmic task selection | Moderate -- design patterns exist (Neurolist, Sunsama); ADHD-specific tone is custom | Hybrid |

### 2.5 Model 5: Calibration Feedback Loop

| L3 Sub-Category | Required? | Specific Capability Need | Complexity | Build/Buy |
|---|:---:|---|---|---|
| 1. Data processing | Required | Estimation-vs-actual tracking; pattern analysis across tasks and time periods | Moderate -- time tracking is standard; the analysis layer adds custom logic | Hybrid |
| 2. AI/ML models | Required | Personal estimation bias model (learns individual under/over-estimation patterns); downstream risk prediction ("this overrun will cause you to miss your 3pm meeting") | Significant -- personalised bias modelling requires sufficient data and careful ML; risk prediction requires calendar awareness | Custom |
| 3. Logic/rules | Required | Real-time overrun alerts; commitment conflict detection; estimation prompt trigger timing | Moderate -- well-defined rule conditions | Custom |
| 4. Storage/structure | Required | Historical estimation and actual-time data per task; personal calibration curves over time | Moderate -- standard time-series storage | Hybrid |
| 5. Real-time systems | Required | Real-time "time elapsed" display; overrun notification delivery; ambient time-awareness signal | Moderate -- timer display is trivial; the ambient awareness signal (making time passage visible without being distracting) is a UX challenge | Hybrid |
| 6. Interfaces | Required | Low-friction estimation prompt (one-tap: [15m] [30m] [1h] [2h+]); real-time time-elapsed display; calibration dashboard showing personal bias patterns over time | Moderate -- the estimation prompt UX is critical (must be <10 seconds per task); dashboard is standard | Custom (estimation UX) + Hybrid (dashboard) |
| 7. Integrations | Required | Calendar API (commitments and time blocks); optionally task tool API for richer context | Moderate -- standard calendar API | OTS |
| 8. Permissions/access | Required | Calendar read access; timer/activity tracking data | Trivial -- standard permissions | OTS |
| 9. Design patterns | Required | Non-shaming feedback on estimation errors; celebration of calibration improvement; accommodation of the "just want to start" resistance to estimation prompts | Moderate -- tone design is custom; the resistance-accommodation design is ADHD-specific | Custom |

### 2.6 Model 6: Periodic Injection into Existing Workflow

| L3 Sub-Category | Required? | Specific Capability Need | Complexity | Build/Buy |
|---|:---:|---|---|---|
| 1. Data processing | Required | Multi-tool engagement monitoring (PM tools, documents, repos); activity pattern analysis; decay detection across platforms | Significant -- requires monitoring multiple data sources and detecting patterns in cross-tool activity | Custom |
| 2. AI/ML models | Required | Motivational decay detection (declining commit frequency, document edit frequency, meeting attendance); micro-task generation from project context; AI understanding of project state and next steps | Major -- micro-task generation from project context requires deep understanding of what useful next steps look like; highest AI complexity in the model set (S7 FP08: "non-trivial") | Custom (core differentiator) |
| 3. Logic/rules | Required | Injection frequency caps; conflict avoidance with high-priority daily tasks; escalation model for persistent neglect | Moderate -- rule logic is well-defined; calibrating injection frequency to avoid overwhelm requires tuning | Custom |
| 4. Storage/structure | Required | Project engagement baselines; historical activity patterns per project; micro-task outcome tracking | Moderate -- standard relational storage | Hybrid |
| 5. Real-time systems | Optional | Task injection into daily flow at appropriate timing (morning planning, between meetings, during low-activity periods) | Moderate -- requires awareness of user's daily rhythm for timing injections | Hybrid |
| 6. Interfaces | Optional | Minimal own interface -- outputs into existing task surfaces; optionally a progress visualisation dashboard | Trivial for injection (writes to existing tools); moderate for dashboard | Hybrid |
| 7. Integrations | Required | PM tool APIs (Asana, Jira, Notion, Linear); document APIs (Google Docs, Confluence); optionally repo APIs (GitHub, GitLab); task tool write access for injection; calendar API for timing | Significant -- highest multi-tool integration requirement alongside M2; MCP reduces per-tool effort | Hybrid (MCP + custom per-tool logic) |
| 8. Permissions/access | Required | Read access across PM tools, documents, and optionally repos; write access to task tool for injection | Significant -- broad cross-tool read access raises trust concerns | Custom (permission/trust UX) |
| 9. Design patterns | Required | Artificially-created urgency for distant tasks; progress visualisation combating "nothing done" feeling; bridge tasks connecting current phase to stimulating future phase; injection calibration (not overwhelming an already-full day) | Significant -- the micro-task quality and urgency framing are the core design challenges | Custom |

### 2.7 Model 7: Structured Check-In / Guided Routine

| L3 Sub-Category | Required? | Specific Capability Need | Complexity | Build/Buy |
|---|:---:|---|---|---|
| 1. Data processing | Required | Aggregation of tasks, calendar events, and pending items from connected tools for review presentation | Moderate -- standard data aggregation | Hybrid |
| 2. AI/ML models | Optional | Guided planning prompts (contextual questions); realistic load assessment ("you have 6 hours of meetings -- 8 hours of task work is unrealistic"); reflection analysis | Moderate -- LLM-powered prompts are standard; the load assessment requires calendar math + judgment | Hybrid |
| 3. Logic/rules | Required | Check-in scheduling; graceful recovery from missed sessions (critical for ADHD -- no shame spiral); overdue task management (hide or archive, do not accumulate visibly); session flow sequencing | Significant -- the "lapse tolerance" logic is the make-or-break design challenge for this model; standard check-in logic is moderate but lapse-tolerance is novel | Custom |
| 4. Storage/structure | Optional | Historical check-in data for pattern recognition; plan-vs-actual tracking | Moderate | Hybrid |
| 5. Real-time systems | Required | Check-in scheduling and delivery (notification at planned time); session timer | Trivial -- standard scheduling | OTS |
| 6. Interfaces | Required | Guided step-by-step check-in flow; daily plan output; review/reflection view; "fresh start" mechanism after missed sessions | Moderate -- guided flows are well-understood; the "fresh start" UX is ADHD-specific and critical | Hybrid |
| 7. Integrations | Required | Calendar API; task tool API; optionally email for surfacing unanswered items | Moderate -- standard APIs | OTS/Hybrid |
| 8. Permissions/access | Required | Calendar read access; task tool read access | Trivial -- standard permissions | OTS |
| 9. Design patterns | Required | "Planning mode vs. reactive mode" distinction; forced estimation (Sunsama model); accommodation of missed days without punishment; celebration of consistency without punishing inconsistency; session brevity (respect ADHD attention span) | Significant -- the lapse-tolerance and non-shaming design is the critical differentiator; the model's highest-risk failure mode (app graveyard) depends entirely on design pattern quality | Custom |

### 2.8 Model 8: On-Demand Cognitive Scaffolding

| L3 Sub-Category | Required? | Specific Capability Need | Complexity | Build/Buy |
|---|:---:|---|---|---|
| 1. Data processing | Optional | Task context ingestion (if integrated with task tools, to understand the stuck task's context) | Trivial -- standard API reads | OTS |
| 2. AI/ML models | Required | Task decomposition (break complex task into micro-steps); draft generation (starting points for documents, emails, plans); decision framework generation | Moderate -- general LLM capabilities; the ADHD-specific calibration (right granularity of micro-steps, truly low-activation starting points) requires custom prompt engineering | Hybrid (OTS LLM + custom prompts) |
| 3. Logic/rules | Optional | Scaffolding type selection (break down vs. draft vs. restructure vs. simplify) based on input | Trivial -- classification of user request | Hybrid |
| 4. Storage/structure | Optional | User preference history (preferred decomposition styles, output formats) | Trivial | OTS |
| 5. Real-time systems | Optional | None strictly required; scaffolding can be request-response | N/A | N/A |
| 6. Interfaces | Required | Minimal input interface (paste task description, speak it, or integrate with task tool); structured output (numbered steps, draft document, decision matrix) | Moderate -- extreme simplicity is the design goal (Goblin Tools model); the interface must be faster to use than asking ChatGPT | Custom (UX simplicity) |
| 7. Integrations | Optional | Task tool API; document platform API for output delivery | Trivial -- optional enhancements | OTS |
| 8. Permissions/access | Optional | Task tool read access (if integrated) | Trivial | OTS |
| 9. Design patterns | Required | Extreme simplicity (Goblin Tools' one-function-per-tool model); instant value on first use; no setup required; ADHD-appropriate output granularity (not too many steps, not too few) | Moderate -- simplicity design is well-understood; ADHD-specific calibration is custom | Hybrid |

### 2.9 Shared Requirements (Common Foundations)

The following capabilities appear across 3 or more engagement models, making them "common foundations" required regardless of which path is chosen:

#### Foundation 1: Calendar Integration (All 8 models except M3 and M8 where it is optional)

**Required by:** M1, M2, M4, M5, M6, M7 (required); M3, M8 (optional)

- Calendar read access via Google Calendar API and/or Microsoft Graph API
- Ability to parse events, attendees, time blocks, and free/busy status
- Used for: knowing what the user should be working on (M1), contextual resurfacing timing (M2), time-aware task reordering (M4), commitment-time conflict detection (M5), injection timing (M6), check-in content (M7)

**Complexity:** Trivial -- well-documented, stable APIs.
**Build/Buy:** OTS.

#### Foundation 2: Task Tool Integration (6 models)

**Required by:** M1 (required), M4 (required), M6 (required), M7 (required); M2, M8 (optional)

- Read access to task lists from external tools (Todoist, Notion, Asana, ClickUp, Jira, Linear)
- For some models (M4, M6): write access to reorder or inject tasks
- Each platform requires separate integration work; no universal task API exists
- MCP (S9 Section 1.2) reduces per-tool integration burden

**Complexity:** Significant in aggregate (N platforms to support); moderate per platform.
**Build/Buy:** Hybrid (MCP protocol + custom per-platform connectors).

#### Foundation 3: Non-Shaming Tone and Language Framework (All 8 models)

**Required by:** All models -- any user-facing text must follow ADHD-appropriate tone guidelines

- Positive framing rather than guilt/shame language
- No streak mechanics or visible failure accumulation
- "Fresh start" capability after any lapse period
- Tone guidelines for AI-generated content (nudges, summaries, scaffolds, check-in prompts)

**Complexity:** Moderate -- requires ADHD-informed content design; applies to all user-facing surfaces.
**Build/Buy:** Custom (content design + tone guidelines for AI generation).

#### Foundation 4: Variability Engine / Novelty Preservation (M1, M2, M4, M5, M6, M7)

**Required by:** All models that deliver recurring interventions (6 of 8; M3 and M8 are episodic/on-demand and exempt)

- Variable delivery timing (not fixed schedules)
- Channel rotation (notification, overlay, email, Slack, etc.)
- Content variation in prompts and nudges
- Engagement decay detection (to trigger strategy switches)
- Required by MC1 (Novelty Decay meta-challenge) as a universal architectural requirement

**Complexity:** Significant -- requires adaptive delivery architecture across the full notification pipeline.
**Build/Buy:** Custom (no OTS variability engine exists for this use case).

#### Foundation 5: On-Device Processing Capability (M1, M2, M6; optional for all others)

**Required by:** M1 (activity monitoring is privacy-critical), M2 (reads all communications), M6 (reads project tools broadly)

- Local LLM inference for sensitive data processing (Apple Foundation Models, Ollama, LocalAI)
- On-device storage for personal data (knowledge graphs, activity patterns, calibration data)
- S9 Section 2.2: production-ready on Apple ecosystem; cross-platform via open-source models

**Complexity:** Moderate -- the components exist but assembling them into a privacy-preserving pipeline requires careful architecture.
**Build/Buy:** Hybrid (OTS local inference frameworks + custom pipeline assembly).

#### Foundation 6: MCP Integration Backbone (M1, M2, M4, M6; beneficial for all)

**Required by:** Any model needing multi-tool awareness -- especially M2 (multi-channel capture) and M6 (multi-tool project monitoring)

- MCP protocol for standardised tool connectivity
- Reduces N-by-M integration problem to N MCP servers
- S9 Section 1.2: production-ready; security concerns remain (prompt injection, tool poisoning)

**Complexity:** Moderate -- the protocol is stable; security hardening and specific server implementations require engineering.
**Build/Buy:** Hybrid (OTS protocol + custom security layer + community MCP servers).

#### Foundation 7: Knowledge Graph / Structured Memory (M2, M4, M5, M6)

**Required by:** M2 (entity/commitment graph), M6 (project engagement history); beneficial for M4 (user pattern data) and M5 (calibration history)

- Automatic entity extraction and relationship mapping from unstructured text
- Microsoft GraphRAG methodology for construction; Anthropic MCP Knowledge Graph Memory Server for storage
- Enables contextual resurfacing, multi-hop reasoning, and compound value over time
- S9 Section 9.1: production-ready components; no product has assembled the full pipeline for ADHD

**Complexity:** Significant -- graph construction is LLM-intensive; schema design for ADHD-specific entities (commitments, obligations, project states) requires domain expertise.
**Build/Buy:** Hybrid (OTS GraphRAG + OTS graph DB + custom schema and construction pipeline).

---

## Section 3: Meta-Challenge Vulnerability Matrix

### 3.1 Vulnerability Ratings

**Rating key:**
- **H** = High vulnerability (critical threat to this model)
- **M** = Moderate vulnerability (affects model but can be partially mitigated)
- **L** = Low vulnerability (model is structurally resistant)

#### MC1: Novelty Decay & Intervention Habituation

| Engagement Model | Vulnerability | Rationale |
|---|:---:|---|
| **M1: Ambient Monitor** | **M** | The user does not need to "do" anything -- the system runs in the background. However, interventions (nudges, prompts) are the primary value delivery mechanism, and these are subject to habituation. If nudges become ignorable, the tool's value degrades to zero. Mitigated by variable delivery, but not structurally immune. |
| **M2: Passive Capture** | **L** | The system runs entirely in the background and compounds value through the knowledge graph. The user does not interact with a "novel" interface -- they receive summaries and resurfaced commitments as needed. The knowledge graph becomes more valuable over time, creating increasing switching cost that counteracts novelty-driven abandonment. Structurally the most resistant model to MC1. |
| **M3: Modality Shift** | **M** | Each use is episodic and independent -- the novelty of "speak instead of write" may fade as the experience becomes routine. However, the value is functional (a document produced) rather than experiential (an enjoyable interaction), which provides some resistance to novelty-driven abandonment. The tool either produces useful documents or it doesn't -- novelty decay affects willingness-to-use, not the value of each use. |
| **M4: Intelligent Reordering** | **M** | The reordering algorithm improves over time (learning user patterns), creating mild compounding value. However, the daily interaction (check the top task) is repetitive and could habituate. Push-based delivery (morning notification with top task) is more resistant than pull-based (user opens app). Moderate because compounding value partially counteracts novelty decay. |
| **M5: Calibration Loop** | **M** | The calibration data becomes more accurate over time, creating compounding value. However, the estimation-prompt interaction is repetitive and is the most likely element to habituate. If the user stops estimating because the prompt feels stale, the entire loop breaks. Moderate because compounding value partially offsets, but the habit-dependent entry point is vulnerable. |
| **M6: Periodic Injection** | **M** | The user does not interact with a separate surface -- micro-tasks appear in existing tools. However, the injected tasks themselves could become ignorable if they feel generic or repetitive. The "another task to ignore" failure mode directly mirrors notification habituation. Moderate because the embedded delivery reduces visibility of the tool-as-novelty, but task quality determines whether habituation occurs. |
| **M7: Structured Check-In** | **H** | The most vulnerable model. The check-in is a recurring, structured, same-format interaction -- the exact profile that triggers fastest novelty decay. Users report cycling through planning tools every 3-6 months (P2B). The model's value depends on the user showing up daily, which is precisely what novelty decay prevents. Variable check-in formats and adaptive content can slow decay but cannot structurally prevent it. |
| **M8: On-Demand Scaffolding** | **L** | Usage is episodic and problem-driven -- the user comes to the tool when they need it, not on a schedule. Each use involves a different task and produces a different output, providing inherent variety. The tool does not need to maintain novelty because it does not require habitual use. Low vulnerability because the interaction pattern is inherently variable. |

#### MC2: The Circular Dependency (Bootstrapping Problem)

| Engagement Model | Vulnerability | Rationale |
|---|:---:|---|
| **M1: Ambient Monitor** | **L** | After initial setup, runs in the background without requiring user initiation. The product comes to the user via ambient monitoring and proactive intervention. Does not require the user to remember the tool exists or actively open it. Structurally the strongest model against MC2 because it is always-on by design. |
| **M2: Passive Capture** | **L** | After initial integration setup, captures data automatically without any user action. The user does not need to "use" the tool -- it monitors and processes in the background. Value delivery (summaries, resurfaced commitments) is pushed to the user. The only MC2 vulnerability is the initial setup, which is a one-time event. |
| **M3: Modality Shift** | **H** | User-initiated model requiring the user to (a) recognise they need to document something, (b) remember the tool exists, and (c) open it. This requires prospective memory and initiation -- exactly the functions ADHD impairs. The bootstrapping problem is acute: the tool helps with documentation, but the user must initiate using it to document. Partially mitigated if calendar integration prompts use ("status report due -- ready to talk through it?"). |
| **M4: Intelligent Reordering** | **M** | The user must check the tool to see the reordered task list (pull-based). The "out of sight, out of mind" problem directly applies. Mitigated if the top task is pushed via notification, but then becomes dependent on notification effectiveness (MC5). The tool's value requires the user to look at it, which requires remembering it exists. |
| **M5: Calibration Loop** | **H** | Requires the user to actively estimate before each task -- a specific initiation act. If the user forgets to estimate (a prospective memory task), the entire loop breaks. The tool cannot function passively; it requires active user input at each task boundary. High vulnerability because the bootstrapping problem recurs at every task, not just at first use. |
| **M6: Periodic Injection** | **L** | The product injects micro-tasks into the user's existing task flow -- the user encounters injected items while checking their existing tools, not by remembering to use a new tool. Does not require the user to remember or initiate use. Structurally resistant to MC2 because the product operates through the user's existing workflow. |
| **M7: Structured Check-In** | **H** | The most vulnerable model. The user must remember to attend the check-in, which is itself a prospective memory and initiation task. The product prompts the check-in (product-initiated), but the user must then actively participate. If the user ignores the prompt (MC5) or forgets the tool exists, the model collapses entirely. This is the canonical "app graveyard" model. |
| **M8: On-Demand Scaffolding** | **H** | Requires the user to (a) recognise they are stuck, (b) remember the tool exists, and (c) initiate a request. "Remembering to use the tool when stuck" is itself an executive function task that ADHD impairs. The "out of sight, out of mind" problem directly applies. Partially mitigated by embedding in the user's existing environment (browser extension, Slack command) rather than as a standalone app. |

#### MC3: The Shame-Avoidance Spiral

| Engagement Model | Vulnerability | Rationale |
|---|:---:|---|
| **M1: Ambient Monitor** | **L** | The system runs in the background during absence. No visible evidence of failure accumulates -- there are no overdue task counts, broken streaks, or "days since last use" metrics. When the user returns, the system simply resumes monitoring and intervening. Structurally lapse-tolerant. |
| **M2: Passive Capture** | **L** | The system continues capturing and processing during any absence. The knowledge graph and commitment database grow regardless of user engagement. When the user returns, there is no backlog of failure -- only accumulated value (new summaries, tracked commitments). The model improves during absence rather than deteriorating. Strongest structural resistance to MC3. |
| **M3: Modality Shift** | **L** | Each use is independent -- no history of failure, no streaks, no accumulated overdue items. If the user does not use the tool for a month, there is nothing to "catch up on" when they return. The model is inherently amnesiac between uses. |
| **M4: Intelligent Reordering** | **M** | The reordered task list reflects the underlying task tool, which may itself accumulate overdue items during absence. The model does not create shame artefacts of its own, but it displays the user's existing task system, which may. Mitigated if the model hides or gracefully archives overdue items rather than presenting them prominently. Moderate because the shame source is external but visible through the model. |
| **M5: Calibration Loop** | **M** | The calibration data persists during absence, which is positive (no data loss). However, the "days since last estimate" gap is visible in the calibration history, and the model may present "your calibration accuracy has decreased" feedback after a lapse. The estimation habit breaks during absence and must be re-established. Moderate because the data survives but the re-engagement friction is real. |
| **M6: Periodic Injection** | **M** | During absence, the system may have injected micro-tasks that the user never acted on. If these accumulate visibly, they create a backlog shame effect. Mitigated by automatic expiry/archival of unacted injections. Moderate because proper design can prevent accumulation, but the default behaviour could create shame. |
| **M7: Structured Check-In** | **H** | The most vulnerable model. Missed check-ins generate the most visible evidence of failure: "you haven't checked in for 12 days," "47 overdue tasks from your last plan," "your streak was 3 days." This is the documented shame spiral from P2B. Even with "fresh start" design, the user knows they missed sessions and may avoid returning. The model generates shame artefacts by its fundamental nature (tracking consistency). |
| **M8: On-Demand Scaffolding** | **L** | No history, no streaks, no accumulated state. Each use is fresh. The user cannot "fall behind" on a tool that only activates when explicitly requested. Inherently lapse-tolerant. |

#### MC4: Disclosure & Workplace Visibility Constraint

| Engagement Model | Vulnerability | Rationale |
|---|:---:|---|
| **M1: Ambient Monitor** | **M** | Runs in the background -- invisible to colleagues during normal work. However, intervention delivery (overlay notifications, nudge pop-ups) could be visible during screen-shares or in-person shoulder-surfing. The notification content must be neutral (no ADHD-specific language). Moderate because the tool itself is invisible but its interventions are visible. |
| **M2: Passive Capture** | **M** | The capture mechanism (meeting recording, email monitoring) could be visible to colleagues. Meeting bots create social friction ("why is your AI joining?"). Granola's bot-free approach validates that local-capture models reduce disclosure risk. Summary delivery to the user is private. Moderate because the capture mechanism has workplace visibility; the delivery mechanism does not. |
| **M3: Modality Shift** | **M** | Voice recording in shared workspaces creates visibility. Colleagues may notice the user dictating documentation rather than typing, which could prompt questions. The tool name/icon on screen during screen-shares adds disclosure risk. Moderate because voice use is conspicuous in shared environments, though less so in remote work. |
| **M4: Intelligent Reordering** | **L** | Operates as a layer on existing task tools -- invisible as a separate application. The reordered view could be visible during screen-shares but appears as a standard task list. No ADHD-specific branding is visible in the task view itself. Low because the model inherits the appearance of the underlying task tool. |
| **M5: Calibration Loop** | **M** | The estimation prompt and time-elapsed display are visible to the user during work and could appear in screen-shares. A "time elapsed" overlay or estimation prompt visible during a presentation could prompt questions. Moderate because the visible elements look like general time-tracking (plausibly neutral) but could be conspicuous if prominently displayed. |
| **M6: Periodic Injection** | **L** | Micro-tasks appear in the user's existing task tool -- they are indistinguishable from tasks the user created themselves. No separate tool, no visible branding, no disclosure risk. Low because the model is invisible by design. |
| **M7: Structured Check-In** | **M** | The check-in is a separate surface the user opens. If the app is visible during screen-shares, its branding and purpose could be apparent. "Daily ADHD check-in" on screen is a disclosure event. Mitigated by neutral branding ("daily planning session" rather than "ADHD check-in"). Moderate because the separate surface creates visibility risk, but neutral branding can mitigate. |
| **M8: On-Demand Scaffolding** | **L** | Episodic use means the tool is only open when the user explicitly opens it. Can be closed before any screen-share. If embedded as a browser extension or Slack command, it blends into the existing tool environment. Low because usage is discretionary and brief. |

#### MC5: Notification Desensitisation

| Engagement Model | Vulnerability | Rationale |
|---|:---:|---|
| **M1: Ambient Monitor** | **H** | The model's value delivery depends entirely on the user perceiving and responding to interventions delivered as notifications/overlays. If these are desensitised, the model delivers zero value -- it detects problems but cannot communicate them. This is the model most dependent on notification effectiveness. Variable delivery mitigates but cannot prevent neurological habituation. |
| **M2: Passive Capture** | **M** | Resurfaced commitments and summaries are delivered via notification-like mechanisms. However, the model has multiple delivery channels (email digest, in-app dashboard, before-meeting prompts, Slack messages) and the content is highly contextual (specific commitments, specific people, specific deadlines). Contextual, varied content habituates slower than generic reminders. Moderate because delivery depends on notifications but content specificity provides some resistance. |
| **M3: Modality Shift** | **L** | The model does not rely on notifications for its core value. The user initiates recording when they want to document. Optional calendar-triggered prompts ("status report due") are notification-dependent but are enhancement, not core function. Low because the core interaction is user-initiated. |
| **M4: Intelligent Reordering** | **M** | If push-based (morning task notification), the model relies on notification perception. If pull-based (user opens task view), it does not. The model's MC2 mitigation (push notifications to overcome bootstrapping) creates MC5 vulnerability. Moderate because the model can function either way, but the push-based variant needed for MC2 mitigation creates notification dependency. |
| **M5: Calibration Loop** | **M** | The "time elapsed" awareness signal and overrun alerts are notification-dependent. These are the model's real-time value delivery mechanism. However, they are more varied than standard reminders (different tasks, different overrun amounts, different downstream risks). Moderate because the content varies but the mechanism (alert during work) is still a notification. |
| **M6: Periodic Injection** | **L** | Injected micro-tasks appear in the user's existing task tool, not as notifications. The user encounters them while checking their existing task list. The model deliberately avoids the notification channel by embedding in existing workflow. Low because the delivery mechanism bypasses notifications entirely. |
| **M7: Structured Check-In** | **M** | The check-in prompt is delivered as a notification ("time for your daily planning"). If this notification is desensitised, the user never opens the check-in and the model provides zero value. However, the prompt is once-daily (low frequency) and consistent (same time), which habituates slower than high-frequency variable notifications. Moderate because the prompt is low-frequency but the model collapses entirely if it is ignored. |
| **M8: On-Demand Scaffolding** | **L** | No notification dependency. The user initiates interaction when they need it. No recurring prompts, no alerts, no reminders. Low because the model has no notification mechanism to desensitise. |

### 3.2 Vulnerability Summary Matrix

| | MC1 Novelty | MC2 Bootstrap | MC3 Shame | MC4 Disclosure | MC5 Notification | Total H/M/L |
|---|:---:|:---:|:---:|:---:|:---:|---|
| **M1 Ambient** | M | L | L | M | H | 1H / 2M / 2L |
| **M2 Capture** | L | L | L | M | M | 0H / 2M / 3L |
| **M3 Modality** | M | H | L | M | L | 1H / 2M / 2L |
| **M4 Reorder** | M | M | M | L | M | 0H / 4M / 1L |
| **M5 Calibrate** | M | H | M | M | M | 1H / 4M / 0L |
| **M6 Inject** | M | L | M | L | L | 0H / 2M / 3L |
| **M7 Check-In** | H | H | H | M | M | 3H / 2M / 0L |
| **M8 Scaffold** | L | H | L | L | L | 1H / 0M / 4L |

### 3.3 Synthesis

**Best overall meta-challenge profiles:**

1. **M2 (Passive Capture & Structured Delivery)** has the strongest meta-challenge profile: zero high-vulnerability ratings, three low-vulnerability ratings. Its passive, background, compounding-value architecture is structurally resistant to novelty decay (knowledge graph compounds), bootstrapping (runs without user initiation), and shame (continues working during absence). Its two moderate vulnerabilities (disclosure risk from meeting capture, notification dependency for delivery) are addressable through implementation choices (local capture, multi-channel delivery). This aligns with the corpus finding that passive architectures are structurally advantaged against ADHD meta-challenges (Meta_Challenges, Structural Implications #1).

2. **M6 (Periodic Injection)** ties for the strongest profile with zero high vulnerabilities and three low ratings. Its embedded, product-initiated, existing-workflow-integrated architecture avoids the bootstrapping, disclosure, and notification problems. Its moderate vulnerabilities (novelty decay of injected tasks, shame from accumulated unacted injections) are addressable through design (task quality, auto-archival). However, M6 has the highest build complexity (S7: 10/20 solution score, lowest feasibility) which is a separate concern from meta-challenge vulnerability.

3. **M8 (On-Demand Scaffolding)** has four low vulnerabilities but one high (bootstrapping). Its episodic, user-initiated nature makes it immune to novelty decay, shame, disclosure, and notification issues -- but that same user-initiated nature creates the bootstrapping problem. The user must remember the tool exists when they need it.

**Worst overall meta-challenge profiles:**

1. **M7 (Structured Check-In)** has the worst profile by a significant margin: three high-vulnerability ratings (novelty decay, bootstrapping, shame) and zero low ratings. Every critical ADHD meta-challenge is a primary threat to this model. This is consistent with the documented position of check-in/routine models as the most abandoned tools in the ADHD app graveyard (P2B). The model provides exactly what practitioners recommend (external structure) but is maximally vulnerable to the neurological characteristics of the target population.

2. **M5 (Calibration Feedback Loop)** has one high vulnerability (bootstrapping) and four moderate, with zero low ratings. It has no area of structural strength against meta-challenges. The estimation habit requirement creates bootstrapping vulnerability at every task, and the moderate vulnerabilities across all other meta-challenges compound into a fragile profile. This model requires the most careful design mitigation across the most dimensions.

**Cross-model patterns:**

1. **Product-initiated > User-initiated for MC2 and MC5.** Models where the product comes to the user (M1, M2, M6) are consistently less vulnerable to bootstrapping and notification challenges than models requiring user initiation (M3, M5, M7, M8). This is a structural advantage, not a design detail.

2. **Compounding-value > Fixed-value for MC1.** Models that become more valuable over time (M2's knowledge graph, M5's calibration data, M4's pattern learning) are more resistant to novelty decay than models delivering the same experience each time (M7's check-in, M3's recording). Compounding value creates switching cost that counteracts the impulse to abandon.

3. **Background > Foreground for MC3 and MC4.** Models that operate in the background (M1, M2, M6) are simultaneously resistant to shame (nothing to fall behind on) and disclosure (nothing visible to colleagues). Foreground models (M3, M5, M7) generate both shame artefacts and workplace visibility.

4. **The MC2/MC5 tension.** Push-based delivery mitigates MC2 (bootstrapping) but creates MC5 vulnerability (notification desensitisation). Pull-based delivery avoids MC5 but creates MC2 vulnerability. Models must navigate this tension; M2 and M6 resolve it by embedding in existing workflows rather than using either push or pull as primary delivery. This "ambient presence" pattern is the most effective navigation of the tension.

5. **M7 occupies a paradoxical position.** It has the strongest practitioner recommendation (P2C) alongside the worst meta-challenge profile. This paradox is explained by the difference between clinical and product contexts: practitioners provide the external accountability that makes check-ins work (the practitioner is the bootstrapping mechanism, the shame regulator, and the novelty source). A software product cannot replicate these functions. This suggests M7 is viable only when combined with human elements (coaching, community) or when layered on top of a passive foundation that handles the meta-challenges (e.g., M2 handles capture and delivery; M7 provides an optional review layer on top).

---

## Appendix: Methodology Notes

**Consistency checks applied:**

1. All "Strongly compatible" ratings were verified against all four cluster attributes (frequency, context, awareness, co-occurrence). A model rated S for one cluster was tested against the same attributes for all other clusters to ensure consistent application.

2. All meta-challenge vulnerability ratings were cross-checked for consistency with the model's dimensional position (from L2). Product-initiated models were verified as consistently less vulnerable to MC2. Embedded models were verified as consistently less vulnerable to MC4.

3. Requirement profiles were cross-referenced with S9 (Technology Assessment) for maturity and build/buy assessments. No maturity assessments were re-derived; S9 findings were applied directly.

4. Shared requirements (Section 2.9) were identified by scanning all 8 requirement profiles for sub-categories appearing in 3+ models. The threshold was set at 3 to capture genuinely common foundations rather than incidental overlaps.

**Limitations:**

1. Compatibility ratings are structural assessments based on dimensional matching, not empirical measurements. Actual compatibility depends on implementation quality.

2. Requirement profiles are at the category level, not the specification level. Each "Required" entry encompasses substantial detail that would emerge during implementation design.

3. Meta-challenge vulnerability ratings assume current technology. On-device processing maturation (S9 Section 2.2) could reduce M2's disclosure vulnerability further; biometric detection maturation (S9 Section 4.1) could reduce M1's notification vulnerability.

4. The analysis treats each engagement model independently. In practice, a product combining multiple models (e.g., M2 + M4 + M1) would have a composite meta-challenge profile that cannot be simply averaged from the individual ratings.
