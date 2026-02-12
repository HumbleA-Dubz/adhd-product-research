# S8: Final Synthesis — ADHD Workplace Product Opportunity Assessment

## Purpose

This document presents the complete decision funnel for evaluating ADHD workplace productivity problems as product opportunities for Humble. It shows the logic at each filtering and scoring stage, explains why candidates were eliminated or deprioritised, and provides detailed profiles of the most promising opportunities.

**Default outcome (per methodology):** Do not pursue this pathway. The analysis must surface something compelling enough to override this default.

---

## The Funnel: 20 → 13 → 7 → 4 Candidates

### Stage 1: Problem Identification (S1)
**20 functional problems extracted** from 6 research files (3 clinical, 3 user/practitioner). These are observable work-task failures, not symptoms.

### Stage 2: Gate Filtering (S2)
**13 passed, 7 discarded.** Two binary gates: (1) Can software help without clinical validation? (2) Can the user improve without organisational cooperation?

Discarded:
| Problem | Failed Gate | Reason |
|---------|------------|--------|
| FP13 Attendance/Absence | Both | Requires org policy; software can't fix absence patterns |
| FP14 Supervisor Conflict | Both | Interpersonal; requires manager cooperation |
| FP15 Team Collaboration | G2 | Requires colleague cooperation |
| FP16 Emotional Dysregulation | G1 | Requires clinical support (CBT, medication) |
| FP17 Impulsive Job Quitting | G1 | Requires clinical/coaching intervention |
| FP19 Safety/Risk Behaviours | Both | Requires workplace systems + clinical support |
| FP20 Underperformance (meta) | Excluded | Meta-outcome, not a specific addressable problem |

**Logic:** These problems are real and severe, but software alone cannot meaningfully address them for an individual user. Pursuing them would require clinical validation dependencies or organisational buy-in — both outside Humble's scope.

### Stage 3: Problem Scoring (S3)
**13 problems scored** on Frequency (Q1), ADHD Differentiation (Q2), and Connectedness (Q3). Scores range from 8 to 14.

| Score | Problems | Interpretation |
|-------|----------|---------------|
| 14 | FP03 (Time Blindness), FP01 (Initiation) | Clear tier-1 problems: high frequency, highly differentiated, strong hub/cluster effects |
| 13 | FP05 (Prioritisation), FP02 (Focus) | Strong problems but slightly less differentiated or connected |
| 12 | FP08 (Project Neglect) | Highly differentiated (delay discounting) but lower frequency/connectedness |
| 11 | FP07 (Meeting Memory), FP09 (Email) | Phase 3 deep dives elevated both from 10 → 11 with Tier 1 evidence |
| 10 | FP04, FP06, FP12, FP11 | Mix of receiving problems, moderate differentiation, and lower-evidence scores |
| 9 | FP10 (Context Switching) | Moderately differentiated; limited evidence |
| 8 | FP18 (Workspace Disorganisation) | Lowest frequency and differentiation |

**Logic:** Scoring distinguishes between problems that are big for everyone (deadlines, errors) and problems that are *specifically and qualitatively different* for ADHD. The top scorers combine high frequency with mechanisms that require fundamentally different product design.

### Stage 4: Market Gap Analysis (S6)
**All 10 problems scoring ≥10 assessed** for competitive landscape. Market gap scores range from 6 to 11.

Three clear outcomes:

**Well-served / Don't pursue as standalone:**
| Problem | Market Gap | Why deprioritised |
|---------|-----------|-------------------|
| FP06 Detail Errors | 6 | Consolidated market (Grammarly $13B, GitHub Copilot). Tools work adequately for ADHD users. ADHD gap is narrow — feature, not product. |
| FP04 Deadline Misses | 7 | Primarily a *receiving* problem. AI scheduling improving rapidly (Motion $550M). Better captured as downstream benefit of solving upstream causes (FP01, FP03, FP05). |
| FP02 Inconsistent Focus | 7 | Most saturated segment (44+ apps tested in one review). Brain.fm, Endel, Forest, Freedom, FLOWN etc. all compete. Novel angle (variability-adaptive) exists but high risk in noisy market. |
| FP12 Chronic Lateness | 11 (raw) | Highest raw gap score but: (a) problem score only 10, (b) downstream of FP03 — solving time blindness captures lateness as secondary benefit. Standalone pursuit questionable. |

**"Noisy general, quiet specific" — opportunity exists but positioning is critical:**
| Problem | Market Gap | Situation |
|---------|-----------|-----------|
| FP05 Prioritisation | 8 | Interest-based nervous system unaccounted for by any tool. But general PM market is massive (Notion, Asana, Motion). Must differentiate on ADHD mechanism, not on "productivity." |
| FP07 Meeting Memory | 8 | Zero ADHD-specific meeting tools. But general market is huge (Otter $100M ARR, Fireflies $1B). The encoding-deficit design angle is the only viable differentiator. |
| FP09 Email Management | 8 | Zero ADHD-specific email tools. But email market consolidating under Grammarly/Superhuman. The "read-and-forgot" prospective memory gap is unique and unaddressed. |

**Clear market gaps:**
| Problem | Market Gap | Situation |
|---------|-----------|-----------|
| FP01 Task Initiation | 10 | Body doubling works but requires humans. Goblin Tools is indie-scale. No tool solves the "invisible barrier" at the activation moment. |
| FP03 Time Blindness | 9 | Time estimation calibration (est vs actual loop) is greenfield. RoutineFlow (solo dev, v0.9.x) is the only attempt. Tiimo leads visual planning but doesn't calibrate perception. |
| FP08 Project Neglect | 10 | Delay discounting completely unaddressed. Leantime ($36K revenue) is the only ADHD-specific PM tool. Motivational decay detection is novel. |
| FP11 Documentation | 10 | Zero ADHD-specific documentation tools. Voice-to-doc bridging partially addressed by general tools but not designed for initiation paralysis. |

**Logic:** Market gaps are largest where the ADHD-specific mechanism is most distinct from the general problem. The most saturated markets (focus, deadlines) are where ADHD is experienced as "worse version of general problem." The emptiest markets (meeting memory, email, documentation) are where the ADHD mechanism is qualitatively different (encoding deficit, prospective memory failure, initiation paralysis).

### Stage 5: Solution Scoring (S7)
**7 solutions designed and scored** on build complexity, behavioural change, setup friction, and integration dependency. Plus one cross-cutting platform concept.

**Eliminated at solution stage:**
| Solution | Problem | Sol. Score | Combined | Why deprioritised |
|----------|---------|-----------|----------|-------------------|
| Project Pulse Monitor | FP08 | 10/20 | 32 | Highest build complexity (3-6 months). Requires multi-tool engagement monitoring + decay detection + AI micro-task generation. Strong value proposition but execution risk is the highest of any candidate. Needs PM tool + doc + repo integrations. |

**Deprioritised (viable but weaker profile):**
| Solution | Problem | Sol. Score | Combined | Position |
|----------|---------|-----------|----------|----------|
| Interest-Aware Surfacer | FP05 | 12/20 | 33 | Novel mechanism but deep task-tool integration dependency (score 2). Market is the most mature/noisy of the remaining set. Tension between "neurologically accessible" and "actually important" is unresolved design challenge. |
| Time Perception Calibrator | FP03 | 12/20 | 35 | Addresses the #1 hub problem but requires behaviour change (estimation habit, score 3). Cold-start problem: calibration accuracy low initially. RoutineFlow (solo dev) is attempting this — validates concept but also means not entirely greenfield. |

**Proceeded to detailed profile (4 candidates + 1 platform concept):**

| Solution | Problem | Sol. Score | Combined | Why profiled |
|----------|---------|-----------|----------|-------------|
| Activation Engine | FP01 | 13/20 | 37 | Highest combined score. Addresses #1 user pain point. |
| Encoding Compensator | FP07 | 15/20 | 34 | Highest solution feasibility. Fully passive (behaviour change: 5/5). |
| Reply Intent Tracker | FP09 | 13/20 | 32 | Unique unaddressed gap. Cleanest problem-mechanism-solution alignment. |
| Voice-to-Doc Bridge | FP11 | 15/20 | 35 | Lightest build. Standalone. Fastest to market. |
| Prospective Memory Platform | Multi | 12/20 | N/A | Addresses root clinical mechanism across multiple problems. |

---

## Detailed Candidate Profiles

### Candidate 1: "Activation Engine" — Task Initiation (FP01)

**The problem in one line:** ADHD adults know exactly what to do but cannot start — an "invisible barrier" driven by altered reward processing, not laziness or confusion.

**Scores:**

| Layer | Score | Detail |
|-------|-------|--------|
| Problem | 14/15 | Q1: 5 (multiple times/day), Q2: 5 (qualitatively different from procrastination), Q3: 4 (drives FP04, FP08, FP11) |
| Market Gap | 10/15 | Q1: 3 (moderate noise), Q3: 3 (established but no dominant initiation tool), Q4: 4 (body doubling praised, everything else mixed-negative) |
| Solution | 13/20 | Q1: 3 (moderate build), Q2: 4 (minimal behaviour change), Q3: 3 (moderate setup), Q4: 3 (standard integrations) |
| **Combined** | **37/50** | |

**Evidence quality:** Tier 1-2. WFIRS data (40.7% report problems often/very often), altered reward processing documented in clinical literature, #1 most-discussed problem in ADHD communities.

**Solution concept:** AI-powered activation system. Detects stalled work (no meaningful input across monitored apps). Delivers graded nudges starting from lowest-friction entry point for the stuck task ("just open the file," "dictate one sentence about what you'd do first"). Escalation model: gentle nudge → specific micro-step → offer body-doubling session → offer to scaffold the first part.

**Competitive landscape:**
- Body doubling (Focusmate, FLOWN, Flow Club): $10M+ combined funding, 100K+ users. Works well but requires real-time human presence — session-based, not on-demand.
- Goblin Tools (task breakdown): beloved, 4.7/5, but indie-scale. Breaks tasks down but can't make user *start* the micro-steps.
- No tool addresses the activation moment itself — the gap between having the micro-step and executing it.

**Why this is promising:**
- Largest problem score in the entire set (tied with FP03)
- Cluster centre: solving initiation would cascade into FP04 (deadlines), FP08 (project neglect), FP11 (documentation)
- Body doubling proves external activation works — the question is whether AI can approximate it
- "AI as co-worker presence" is technically feasible and novel

**Key risks:**
- *Circular dependency:* The initiation tool requires the user to have it running — but initiation failure means they may not open/maintain it. Mitigated by always-on background operation after initial setup.
- *Nudge fatigue:* If nudges become ignorable, the tool joins the app graveyard. Must use variable delivery, personalised timing, and escalation. This is the hardest design problem.
- *"Stalled" detection is hard:* Distinguishing "stalled and stuck" from "thinking deeply" or "in an unmonitored meeting" requires good heuristics. False positives erode trust.

**What success looks like:** User reports fewer "lost hours" where they sat intending to work but couldn't start. The tool doesn't make them *want* to work — it lowers the activation energy for beginning.

---

### Candidate 2: "Encoding Compensator" — Meeting Memory (FP07)

**The problem in one line:** ADHD brains fail to *encode* meeting information into memory (not a retrieval problem) — the user understands everything in real-time but walks out with nothing retained.

**Scores:**

| Layer | Score | Detail |
|-------|-------|--------|
| Problem | 11/15 | Q1: 4 (daily), Q2: 5 (encoding deficit is neurologically distinct), Q3: 2 (relatively isolated) |
| Market Gap | 8/15 | Q1: 2 (general market very noisy), Q3: 2 (Otter/Fireflies mature), Q4: 4 (ADHD users report partial but insufficient help) |
| Solution | 15/20 | Q1: 3 (moderate build), Q2: 5 (fully passive), Q3: 4 (quick setup), Q4: 3 (standard integrations) |
| **Combined** | **34/50** | |

**Evidence quality:** Tier 1. Neural evidence (P3 amplitude reduction during encoding), bifactor modelling (75-81% impairment prevalence, d=1.63-2.03), medication doesn't normalise. Strongest clinical evidence of any problem in the set after Phase 3 deep dive.

**Solution concept:** AI meeting companion that compensates for encoding deficit. (1) Captures everything automatically — full transcript, no user action. (2) Generates ADHD-optimised summaries — shorter, focused on commitments/decisions/action items assigned to the user. (3) Proactively resurfaces meeting content at the moment it becomes relevant (before next meeting with same person, when opening related project, when action-item deadline approaches). (4) Spaced-repetition micro-check-ins for critical commitments.

**Competitive landscape:**
- General meeting AI is mature and well-funded: Otter.ai ($100M ARR, 25M users), Fireflies ($1B valuation), Fathom ($18.8M revenue), Granola ($250M valuation, $67M raised).
- ADHD-specific: Recallify (nascent, early-stage, only product attempting this). Caption.Ed and Jamworks (UK, Access to Work funded, assistive tech positioning).
- Zero products address the encoding deficit specifically. All general tools assume retrieval failure ("I need to find what was said") not encoding failure ("my brain never stored it").

**Why this is promising:**
- Joint-highest solution score (15/20) — fully passive, quick setup, standard APIs
- The encoding-vs-retrieval distinction is the single clearest product design insight from the entire research: it dictates that the tool must capture *everything* (because encoding failure is unpredictable) and proactively resurface (because the user won't remember to check)
- No ADHD-specific competitor in a market where general tools are proven to have massive demand
- UK Access to Work funding (£66K/person) is a concrete B2B2C distribution channel

**Key risks:**
- *Competing against free/cheap general tools:* Otter has a free tier. Why would a user pay for an ADHD-specific tool when Otter exists? The answer must be that proactive resurfacing and commitment tracking are sufficiently more valuable — this must be proven, not assumed.
- *Meeting bot social friction:* Visible bots joining calls create anxiety for self-conscious ADHD users. Granola's "bot-free" local-capture approach suggests this matters. A local-processing model may be preferable.
- *Distribution:* Marketing to ADHD users specifically while competing against well-funded general tools requires precise community-driven positioning, not broad-market advertising.
- *Connectedness is low (Q3: 2):* This is an isolated problem. Solving it doesn't cascade into other problems. The product must succeed on standalone value, not hub effects.

**What success looks like:** User stops missing commitments made in meetings. The feeling of "I was in that meeting but I have no idea what was agreed" disappears. Retention should be high because value is delivered passively — user doesn't need to maintain a habit.

---

### Candidate 3: "Reply Intent Tracker" — Email Management (FP09)

**The problem in one line:** ADHD users read emails, fully intend to reply, then completely forget they exist — a prospective memory failure, not an inbox management problem.

**Scores:**

| Layer | Score | Detail |
|-------|-------|--------|
| Problem | 11/15 | Q1: 4 (daily), Q2: 4 (prospective memory is qualitatively different mechanism), Q3: 3 (links to FP04 deadline misses) |
| Market Gap | 8/15 | Q1: 2 (email market noisy), Q3: 2 (Superhuman/Grammarly mature), Q4: 4 (no tool gets positive ADHD reviews) |
| Solution | 13/20 | Q1: 3 (moderate build), Q2: 4 (minimal behaviour change), Q3: 4 (quick setup), Q4: 2 (specific email platform dependency) |
| **Combined** | **32/50** | |

**Evidence quality:** Tier 1-2. Prospective memory impairment: large effect sizes (d=1.60 for task planning, significantly impaired self-initiated retrieval) (Altgassen et al. 2014; Altgassen et al. 2019). Four-layer convergence model (prospective memory + task initiation + decision fatigue + emotional avoidance). Note: the "60% working memory impairment" figure is unverifiable (Tier 4).

**Solution concept:** Email companion (Gmail/Outlook plugin). (1) Detects emails opened/read but not replied to within configurable window. (2) Surfaces forgotten reply-intentions in a separate "reply queue" — not another inbox notification, a calmer dedicated space. (3) Provides AI-drafted reply suggestions to reduce composition initiation barrier. (4) Non-shaming progressive nudges ("ready to reply to Sarah's question about the Q3 report?" not "you forgot!"). (5) Optional calendar-aware surfacing (before meeting with sender).

**Competitive landscape:**
- General email tools: Superhuman (acquired by Grammarly July 2025, $118M raised), SaneBox (15+ years, profitable, 4.9/5 G2), Shortwave, Boomerang (16+ years), Clean Email, Spark.
- ADHD-specific: **Zero.** Saner.AI (pre-seed, 2.4/5 Google Play) is the closest attempt but is a broader assistant, not email-focused.
- Boomerang's follow-up reminder feature is the closest existing functionality — but it tracks whether *others* reply to *you*, not whether *you* reply to *others*. Wrong direction for the ADHD failure.

**Why this is promising:**
- Cleanest problem-mechanism-solution alignment in the set. The clinical mechanism (prospective memory failure) maps directly to a specific technical intervention (track read-but-not-replied, resurface with draft). No translation gap.
- Zero ADHD-specific competition. Zero general tools address the core failure ("read it, intended to reply, forgot").
- Quick setup (email OAuth), minimal behaviour change (user keeps existing email client).
- The AI draft feature attacks two problems simultaneously: prospective memory (resurfacing) and initiation (lowering the reply-composition barrier).

**Key risks:**
- *Email platform dependency (score 2):* Must build for Gmail or Outlook first. This limits addressable market per integration. Gmail-first covers the largest consumer segment; Outlook-first covers enterprise.
- *Grammarly-Superhuman consolidation:* Could add "reply tracking" as a feature, commoditising the core mechanism. Speed to market and ADHD-specific design depth are the defences.
- *Yet another inbox:* The "reply queue" creates a new place to check. If the user ignores it, the tool fails. Must be extremely well-designed — proactive push notifications, not pull. The tool must come to the user, not wait for the user to come to it.
- *Trust and privacy:* Reading all email is sensitive. ADHD users may be wary of inbox access. Strong privacy positioning (local processing, no data stored, encryption) is essential.

**What success looks like:** User stops getting "why didn't you reply to my email?" messages. The number of emails that silently fall through the cracks drops to near zero. Relationships and reputation improve as a secondary effect.

---

### Candidate 4: "Voice-to-Doc Bridge" — Documentation Paralysis (FP11)

**The problem in one line:** ADHD users experience complete paralysis when facing documentation tasks — not because they can't write, but because the low-stimulation, high-cognitive-load nature of documentation specifically triggers the initiation barrier.

**Scores:**

| Layer | Score | Detail |
|-------|-------|--------|
| Problem | 10/15 | Q1: 4 (daily), Q2: 4 (substantially differentiated — "nothing makes it NOT paperwork"), Q3: 2 (loosely related, downstream of FP01) |
| Market Gap | 10/15 | Q1: 3 (moderate noise), Q3: 3 (general AI writing established, doc paralysis niche quiet), Q4: 4 (tools reduce friction but not initiation) |
| Solution | 15/20 | Q1: 4 (light build — 2-4 weeks), Q2: 3 (moderate — new modality), Q3: 4 (quick — no setup needed), Q4: 4 (standalone, optional integrations) |
| **Combined** | **35/50** | |

**Evidence quality:** Tier 2-3. Practitioner evidence and user reports. Not clinically studied as a distinct construct — it's a specific manifestation of FP01 (task initiation failure) in a particularly aversive context.

**Solution concept:** Voice-first documentation tool. (1) User taps one button and starts talking ("So what happened in the project this week was..."). (2) AI transforms unstructured verbal output into structured professional documentation matching the required format (report template, meeting notes, status update). (3) User reviews and approves or edits. Core insight: speaking is a lower-activation-energy modality than writing for many ADHD users — the blank-page problem disappears when the interface is a microphone.

**Competitive landscape:**
- General AI writing: Grammarly ($13B), Notion AI, Jasper, ChatGPT/Claude — all help with writing execution but not initiation.
- Scribe ($1.3B valuation, 78K paying orgs): auto-generates process documentation from screen recording. Different modality but adjacent concept.
- Voice-to-text: Otter.ai (voice journaling mode), Voicy (ADHD discount), Brain Dump (iOS indie), Willow Voice, VoiceType, built-in OS dictation. All provide raw transcription but not structured document output.
- ADHD-specific documentation: **Zero.**
- Goblin Tools (Magic ToDo): breaks tasks into micro-steps but doesn't help with the actual writing.

**Why this is promising:**
- Joint-highest solution score (15/20) and lightest build (Q1: 4, could prototype in 2-4 weeks)
- Standalone — no integrations required for core value. Open app, tap record, talk, get document.
- Fastest path to first user value of any candidate
- Speech-to-text is commoditised (Whisper API). The innovation is in the AI transformation layer (ramble → structured document) and the one-tap UX.
- Voice-first aligns with how ADHD brains naturally process information — many ADHD users are more verbal than written.

**Key risks:**
- *Editing re-triggers paralysis:* The AI-structured output still needs review. If it's not good enough, the user faces a new editing task that triggers the same avoidance. Output quality must be high enough that minimal editing is needed.
- *Open-office problem:* Can't dictate in shared spaces. Whisper mode or text-based fallback needed.
- *Ceiling problem:* "Nothing makes it NOT paperwork." Software may only capture partial value — the task remains inherently aversive. This may cap willingness-to-pay and retention.
- *AI commoditisation:* ChatGPT voice mode already lets users talk and get text back. The differentiation must be in ADHD-specific UX (one-tap start, no blank page, template matching, non-shaming tone) and workplace-specific output formats. This is a UX moat, not a technology moat.
- *FP01 dependency:* Documentation paralysis is a subset of initiation failure. If Humble solves FP01 broadly, FP11 is captured as a secondary benefit. This makes FP11 potentially redundant as a standalone product — but it's also the fastest path to proving the initiation-bypass thesis.

**What success looks like:** User who hasn't written a status report in 3 weeks talks for 4 minutes and has a professional document ready to send. The documentation backlog shrinks. The emotional weight of "I have so many things I need to write up" lifts.

---

### Candidate 5: "Remember For Me" — Prospective Memory Platform (Cross-Cutting)

**The problem in one line:** ADHD adults consistently fail to follow through on intentions — promises made in meetings, emails meant to be replied to, project tasks meant to be revisited — because prospective memory (remembering to do things in the future) is clinically impaired.

**Scores:**

| Layer | Score | Detail |
|-------|-------|--------|
| Problem | N/A (multi) | Addresses FP07 (11) + FP09 (11) + partially FP08 (12) + FP11 (10) |
| Market Gap | N/A (multi) | Zero products in any market address prospective memory as primary mechanism |
| Solution | 12/20 | Q1: 2 (substantial — 3-6 months), Q2: 5 (fully passive), Q3: 3 (moderate setup — multi-integration), Q4: 2 (specific integrations required) |
| **Combined** | N/A | Cannot be directly compared on single-problem scale |

**Evidence quality:** Tier 1. Prospective memory failure is one of the best-documented ADHD impairments: large effect sizes (d=1.60 for task planning; significantly impaired self-initiated retrieval) (Altgassen et al. 2014; Altgassen et al. 2019), encoding deficit with neural markers (P3 amplitude), medication doesn't normalise. Applies to meeting commitments (FP07), email reply intentions (FP09), project re-engagement (FP08), and documentation deadlines (FP11).

**Solution concept:** Cross-context AI system that monitors ongoing communications (email, meeting transcripts, optionally Slack/Teams) and extracts commitments — both explicit ("I'll send that by Friday") and implicit (reading an email and not replying). Proactively resurfaces forgotten intentions at the right moment (before relevant meeting, when related project is open, at committed deadline). Unlike a to-do list, the user never has to write anything down — the system captures intentions from natural communication.

**Why this is profiled (despite not being directly comparable):**
- This is the only candidate that addresses the *root clinical mechanism* rather than a specific symptom
- It's the only candidate that could address 4 problems simultaneously
- "AI as external prospective memory" is the purest expression of the "AI as external executive function" thesis
- Zero products in any market do this — it's the most differentiated concept in the set

**Why this is the highest-risk candidate:**
- *Build complexity:* 3-6 months to MVP. Multi-channel monitoring + commitment extraction NLP + contextual resurfacing engine. The commitment extraction must handle natural language variability ("I'll look into that," "let me get back to you," "should be done by Thursday").
- *Multi-integration dependency:* Needs email + meeting platform + calendar at minimum. Each integration is standard API, but the combination is heavy.
- *Accuracy requirements are extreme:* False positives (surfacing non-commitments) erode trust. False negatives (missing real commitments) defeat the purpose. The accuracy bar is high because the tool replaces a cognitive function the user cannot do themselves.
- *Privacy:* The system reads all email, all meeting transcripts, and potentially all chat. This is the most privacy-sensitive solution in the set. Must be positioned as "your private memory assistant" not "your communication surveillance tool."
- *Cold start:* Value builds over time as the commitment database populates. First-week experience may be thin.

**What success looks like:** User goes from regularly dropping commitments to near-zero dropped commitments. The anxiety of "what have I forgotten?" decreases. The system becomes trusted external memory — high switching cost once established.

---

## Decision Landscape

### Scores at a Glance

| Candidate | Problem Score | Market Gap | Solution Score | Combined | Build Time | Behaviour Change |
|-----------|-------------|------------|---------------|----------|------------|-----------------|
| Activation Engine (FP01) | 14 | 10 | 13 | **37** | 1-2 months | Minimal (4) |
| Voice-to-Doc (FP11) | 10 | 10 | 15 | **35** | 2-4 weeks | Moderate (3) |
| Time Calibrator (FP03) | 14 | 9 | 12 | **35** | 1-2 months | Moderate (3) |
| Encoding Compensator (FP07) | 11 | 8 | 15 | **34** | 1-2 months | Passive (5) |
| Interest-Aware Surfacer (FP05) | 13 | 8 | 12 | **33** | 1-2 months | Minimal (4) |
| Reply Intent Tracker (FP09) | 11 | 8 | 13 | **32** | 1-2 months | Minimal (4) |
| Project Pulse Monitor (FP08) | 12 | 10 | 10 | **32** | 3-6 months | Minimal (4) |
| Prospective Memory Platform | Multi | Multi | 12 | N/A | 3-6 months | Passive (5) |

### Why Candidates Were Deprioritised (Quick Reference)

| Candidate | Why not profiled |
|-----------|-----------------|
| **Time Calibrator (FP03)** | Addresses #1 hub problem but requires behaviour change (estimation habit). Cold-start problem. RoutineFlow already attempting this. Strong candidate — deprioritised on feasibility, not opportunity size. |
| **Interest-Aware Surfacer (FP05)** | Novel mechanism but deep task-tool dependency. Most mature/noisy market of the remaining set. The "what you can do" vs "what you should do" tension is an unresolved design challenge. |
| **Project Pulse Monitor (FP08)** | Strongest value proposition of any candidate — but highest build complexity (3-6 months, multi-tool integration). Execution risk is prohibitive for a first product. Better as a later expansion. |

### Why Solutions Were Not Designed for Some Problems

| Problem | Why no solution designed |
|---------|------------------------|
| **FP02 Focus** | Most saturated market segment (44+ apps). Brain.fm has peer-reviewed ADHD study. Novel angle exists (variability-adaptive) but would compete against deep-pocketed incumbents. High risk, unclear differentiation. |
| **FP04 Deadlines** | Receiving problem. AI scheduling (Motion $550M) improving rapidly. Better captured as downstream benefit. |
| **FP06 Detail Errors** | Grammarly ($13B) owns writing errors. GitHub Copilot owns code errors. Gap is narrow (more aggressive ADHD-specific checking) — a feature, not a product. |
| **FP12 Lateness** | Downstream of FP03 (time blindness). Tiimo (Apple App of Year 2025, $6M raised) already leads ADHD visual planning. Solving time blindness upstream captures lateness. |

---

## Factors Beyond This Framework

The methodology explicitly states that scores are indicative, not mechanically determinative. The following factors are relevant to the final decision but not captured in the scoring:

### 1. Humble's Existing Stack
Which solutions leverage Humble's existing AI automation capabilities? Solutions requiring NLP (commitment extraction), LLM (draft generation, document structuring), and workflow automation are likely more aligned than solutions requiring novel interface design or hardware.

### 2. Time to Signal
How quickly can each solution generate meaningful evidence of product-market fit? Voice-to-Doc could have users within weeks. The Prospective Memory Platform needs months of build before any user signal.

### 3. Retention Design
The "ADHD app graveyard" is the #1 risk across all candidates. The scoring framework doesn't capture retention potential. Solutions that are passive (Encoding Compensator: score 5, Prospective Memory Platform: score 5) may have inherently better retention because they don't require the user to maintain engagement.

### 4. Distribution Channel
UK Access to Work funding (up to £66,000/person for workplace ADHD support) is a concrete channel that several competitors already use (FLOWN, Deepwrk, Caption.Ed, Jamworks). Any workplace-positioned solution has a ready B2B2C path.

### 5. Defensibility
Technology moats are thin (AI commoditises fast). The strongest moats are: (a) ADHD community trust and word-of-mouth, (b) personalisation data that improves over time (commitment extraction accuracy, time estimation calibration, nudge timing), and (c) multi-integration depth that creates switching cost.

### 6. The Methodology's Default
"Do not pursue this pathway. Analysis must surface something compelling enough to override this default."

The analysis has surfaced:
- Four true white spaces with zero ADHD-specific tools (FP06, FP07, FP09, FP11)
- A clinically-grounded root mechanism (prospective memory failure) that no product addresses
- A $2-2.4B ADHD apps market growing at 11-16% CAGR
- No ADHD-specific productivity app has raised a Series A — suggesting either the market is too small or the right product hasn't been built yet

Whether this overrides the default is a judgment call that depends on Humble's capabilities, risk tolerance, capital constraints, and strategic thesis — not on scores alone.

---

## Appendix: Complete File Index

| Step | File | Content |
|------|------|---------|
| S1 | `Outputs/S1_Master_Problem_List.md` | 20 functional problems extracted from 6 research files |
| S2 | `Outputs/S2_Gate_Filter_Results.md` | Gate filtering: 13 pass, 7 fail |
| S3 | `Outputs/S3_Problem_Scores.md` | Problem scoring with Phase 3 revisions |
| S4 | `Outputs/S4_Problem_Clusters.md` | 3 causal clusters + 1 amplifier + 4 standalone |
| S5 | `Outputs/S5_Phase3_Decisions.md` | Deep dive decisions |
| P3A | `Research/P3A_Email_Communication_Management_Deep_Dive.md` | FP09 deep dive |
| P3B | `Research/P3B_Meeting_Memory_Failure_Deep_Dive.md` | FP07 deep dive |
| S6 | `Outputs/S6_Market_Gap_Analysis.md` | Market gap scoring for 10 problems |
| S6+ | `Outputs/S6_Supplement_ADHD_App_Landscape.md` | 54-app landscape sweep |
| S6A-C | `Outputs/S6A/B/C_Market_Gap_Team[A/B/C].md` | Raw research team outputs |
| S7 | `Outputs/S7_Solution_Scoring.md` | Solution designs and scoring for 7 problems + platform concept |
| S8 | `Outputs/S8_Synthesis_and_Recommendations.md` | This document |
