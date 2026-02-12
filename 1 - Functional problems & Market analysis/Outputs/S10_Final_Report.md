# ADHD Workplace Product Opportunity Assessment

**Prepared for:** Humble (AI Workplace Automation Platform)
**Date:** 2026-02-06

---

## How to Read This Report

This report evaluates whether Humble should build a product for ADHD adults in the workplace. It is structured for different reading depths:

- **5 minutes:** Read the Executive Summary and Your Options at a Glance
- **15 minutes:** Add the Four Strategic Paths and What the Scores Don't Capture
- **45 minutes:** Read the full Candidate Profiles
- **Deep dive:** The Analysis Funnel, Competitive Landscape, and Technology sections provide the supporting evidence

Each section opens with a bolded summary so you can decide whether to read further or skip ahead.

---

## Executive Summary

ADHD adults consistently forget commitments made in meetings, emails they intended to reply to, and projects they meant to revisit. This is not disorganisation — it is a clinically-documented failure called **prospective memory impairment**, with large effect sizes in clinical tasks (d=1.60 for task planning; significantly impaired self-initiated retrieval). Medication does not normalise it.

**No product addresses this mechanism.** The closest tools — meeting AI, email clients, PKM apps — each cover one channel but none tracks commitments across meetings, email, and chat simultaneously.

We evaluated 20 workplace problems extracted from clinical research, user reports, and practitioner insights. After filtering for software amenability, scoring for severity, assessing market gaps, and designing solutions, the funnel narrowed to **4 standalone candidates and 1 cross-cutting platform concept**.

The market has four true white spaces where zero ADHD-specific tools exist: meeting memory, email management, documentation paralysis, and multi-channel commitment tracking. The ADHD apps market ($2-2.4B, growing 11-16% CAGR) has **no Series A-funded ADHD-specific productivity app**.

Meanwhile, the technology stack to build against this has matured in the last 12 months. MCP eliminates the integration barrier. Knowledge graphs eliminate the manual maintenance that kills every ADHD productivity system. On-device LLMs resolve the privacy objection. Voice AI provides the lowest-friction capture path.

This report presents five candidates, four strategic paths, and the full evidence trail — but does not recommend a single path. That decision depends on Humble's capabilities, risk tolerance, and strategic thesis.

The next section puts all five candidates side by side.

---

## Your Options at a Glance

> **Bottom line:** Five candidates survived the funnel. The Activation Engine scores highest overall. The Encoding Compensator and Voice-to-Doc Bridge are easiest to build. The Prospective Memory Platform is the most ambitious and most differentiated.

| Candidate | Combined Score | Build Time | Behaviour Change | Key Advantage | Key Risk |
|-----------|:---:|:---:|:---:|---------------|----------|
| Activation Engine (FP01) | 37/50 | 1-2 months | Minimal | Largest problem; cluster centre | Nudge fatigue; stall detection |
| Voice-to-Doc Bridge (FP11) | 35/50 | 2-4 weeks | Moderate | Fastest to market; standalone | Ceiling problem; AI commoditisation |
| Encoding Compensator (FP07) | 34/50 | 1-2 months | Passive | Strongest clinical evidence; zero behaviour change | Competing against free general tools |
| Reply Intent Tracker (FP09) | 32/50 | 1-2 months | Minimal | Cleanest mechanism-to-solution fit | Email platform dependency |
| Prospective Memory Platform | N/A | 3-6 months | Passive | Root mechanism; zero competition | Highest complexity; accuracy demands |

**How to read the scores:** Combined score = Problem severity (out of 15) + Market gap (out of 15) + Solution feasibility (out of 20). Higher is better. The Prospective Memory Platform addresses multiple problems simultaneously and does not fit the single-problem scoring scale. See the [Product Pathway Methodology](https://docs.google.com/document/d/1Pi8SEZqlUYcQ6zNiB9cEb8Licu-D4iTyTYL1wL0J6AA/edit) for full scoring definitions.

These scores suggest several different entry strategies.

---

## Four Strategic Paths

> **Bottom line:** Each path represents a different thesis about how Humble should enter this market. They differ in speed, risk, and what kind of company you are building.

**Path A: "Quick Win + Expand"** — fastest to market, lowest risk

- Start with **Voice-to-Doc Bridge** → add **Encoding Compensator** → add **Reply Intent Tracker**
- Thesis: Build trust in the ADHD community by delivering immediate value, then expand into adjacent problems
- Risk: Each product is relatively standalone; may not build defensible platform effects

**Path B: "Hub Problem First"** — highest impact, moderate risk

- Start with **Activation Engine** → add **Time Calibrator** → add **Interest-Aware Surfacer**
- Thesis: Solve the #1 user-reported problem and capture downstream effects
- Risk: AI body doubling research is early; nudge fatigue is the hardest design problem

**Path C: "Platform Play"** — highest ambition, highest risk

- Start with **Prospective Memory Platform** (email tracking → meeting extraction → Slack/Teams → project engagement)
- Thesis: Build the cross-channel commitment layer that no one else has
- Risk: 3-6 months to MVP; extreme accuracy requirements; cold start problem

**Path D: "Niche Beachhead"** — most defensible, narrowest

- Focus on **Encoding Compensator** only — ADHD-specific meeting memory
- Thesis: Win a narrow, underserved niche; expand only after proven retention
- Risk: Isolated problem; must succeed on standalone value alone

Before choosing a path, consider these factors the scores don't capture.

---

## What the Scores Don't Capture

> **Bottom line:** Scores are indicative, not determinative. Humble's own capabilities, the retention problem, and distribution channels matter as much as the numbers.

**1. Humble's existing stack**

Which solutions leverage existing AI automation capabilities? NLP (commitment extraction), LLM (drafting, structuring), and workflow automation are likely more aligned than novel interface design.

**2. Time to signal**

Voice-to-Doc could have users within weeks. The Prospective Memory Platform needs months before generating any user signal. How much runway does Humble have for learning?

**3. Retention design — the #1 risk**

The "ADHD app graveyard" kills tools that require ongoing user effort. Passive solutions (Encoding Compensator and Prospective Memory Platform both score 5/5 on behaviour change) may have inherently better retention. Knowledge graph memory that compounds over time is the strongest structural defence against abandonment.

**4. Distribution channels**

UK Access to Work funding provides up to £66,000/person for workplace ADHD support. FLOWN, Deepwrk, Caption.Ed, and Jamworks already use this channel. ADHD community word-of-mouth (Reddit, TikTok, coach referrals) is the primary marketing channel — several competitors have built entire user bases through it.

**5. Defensibility**

Technology moats are thin — AI commoditises fast. The strongest moats are: (a) ADHD community trust, (b) personalisation data improving over time, (c) knowledge graph depth creating switching cost, (d) multi-integration depth.

**6. The methodology's default position**

The scoring framework's default outcome is "do not pursue this pathway." The question for the team is whether the evidence above — four white spaces, a clinically-grounded mechanism, a growing market with no Series A, and a newly mature tech stack — overrides that default.

The following profiles provide the full evidence behind each candidate's score.

---

## Detailed Candidate Profiles

### Activation Engine — Helping You Start

**Score:** 37/50 | **Build time:** 1-2 months | **Behaviour change:** Minimal

> **In one sentence:** An AI system that detects when you are stuck and delivers graded nudges to help you start — from "just open the file" through to scaffolding the first part for you.

**The problem**

ADHD adults know exactly what to do but cannot start. This is not laziness — it is altered reward processing creating an invisible activation barrier. 40.7% report this problem often or very often (WFIRS clinical data). It is the #1 most-discussed problem in ADHD communities.

Evidence quality: Tier 1-2 (clinical studies + strong user convergence).

**The proposed solution**

1. Monitor activity across apps to detect stalling (no meaningful input for a configurable period)
2. Integrate with calendar and task tools to know what should be happening
3. Deliver AI-generated micro-step prompts matched to the stuck task
4. Escalation model: gentle nudge → specific micro-step → body-doubling session → scaffold the first part

**Who else is building here**

| Competitor | What they do | Gap |
|-----------|-------------|-----|
| Focusmate / FLOWN / Flow Club | Human body doubling (working alongside someone) | Requires scheduling a human partner; not available on demand |
| Goblin Tools | AI task breakdown into micro-steps | Beloved by community but indie-scale; doesn't detect when you're stuck |
| General reminder apps | Time-based reminders | Trigger on schedule, not on stalling behaviour; easily ignored |

**What technology makes this possible now**

- **AI body doubling:** 2025 VR research shows AI body doubles achieve 27-33% increase in sustained attention — no production product exists yet
- **On-device LLMs:** Enable always-on activity monitoring with privacy (detect "stalled" without sending data to cloud)
- **Computer-use agents:** Experimental but could eventually detect stalling across any application without API integration

**Key risks**

- Circular dependency: the user must have the tool running — but initiation failure means they may not open it. Mitigated by always-on background operation.
- Nudge fatigue: if nudges become ignorable, the tool joins the app graveyard. Variable delivery and AI-personalised timing are essential.
- Stall detection accuracy: distinguishing "stuck" from "thinking" requires good heuristics. False positives erode trust.

**What success looks like**

Fewer lost hours where the user sat intending to work but couldn't start.

---

### Encoding Compensator — Remembering Meetings

**Score:** 34/50 | **Build time:** 1-2 months | **Behaviour change:** Passive (none required)

> **In one sentence:** An AI meeting companion that captures everything automatically, generates ADHD-optimised summaries, and proactively resurfaces commitments when they become relevant.

**The problem**

ADHD brains fail to encode meeting information into memory. This is not a retrieval problem — the user understands everything in real-time but walks out with nothing retained. Neural evidence shows reduced P3 amplitude during encoding. 75-81% impairment prevalence. Medication does not normalise it.

Evidence quality: Tier 1 (strongest clinical evidence of any candidate, confirmed by Phase 3 deep dive). See the [Deep Dive: Meeting Memory](https://docs.google.com/document/d/1fTREVxxHShFSLE1pV8UdWO2-Tl0u0TN54cZxAWaYM6o/edit) for the full research.

**The proposed solution**

1. Capture full meeting transcript automatically — no user action required
2. Generate ADHD-optimised summaries: shorter than standard, focused on commitments, decisions, and action items assigned to the user
3. Proactively resurface relevant meeting content at the right moment (before next meeting with same person, when deadline approaches)
4. Spaced-repetition check-ins for critical commitments ("You agreed to send X to Y by Friday — still on track?")

**Who else is building here**

| Competitor | What they do | Gap |
|-----------|-------------|-----|
| Otter.ai ($100M ARR, 25M users) | Transcription + summaries + action items | General-purpose; no proactive resurfacing or ADHD-specific design |
| Granola ($250M valuation) | Bot-free local meeting capture + structured notes | Excellent UX but no commitment tracking or contextual reminders |
| Fireflies ($1B valuation) | Transcription + 69 languages + API | Slower processing; no ADHD features |
| Recallify | ADHD meeting notes | Nascent; very early stage |
| Caption.Ed / Jamworks | UK-based, Access to Work funded | Captioning focus; limited commitment tracking |

**What technology makes this possible now**

- **Meeting AI** is a solved problem (95-99% transcription accuracy) — the step-change is connecting extracted commitments to persistent tracking via **MCP**
- **Knowledge graph memory** builds relationships (people → meetings → commitments → projects) automatically, enabling contextual resurfacing without manual linking
- **On-device LLMs** enable local processing of meeting audio, resolving privacy concerns
- **Granola's bot-free approach** validates local-capture models are commercially viable

**Key risks**

- Competing against free general tools (Otter's free tier). ADHD-specific differentiation must be compelling.
- Meeting bot social friction for self-conscious users. Local-capture model preferred.
- Isolated problem (low connectedness score). Must succeed on standalone value.

**What success looks like**

The user stops missing commitments made in meetings. The "I was in that meeting but have no idea what was agreed" feeling disappears.

---

### Reply Intent Tracker — Catching Forgotten Emails

**Score:** 32/50 | **Build time:** 1-2 months | **Behaviour change:** Minimal

> **In one sentence:** An email companion that detects when you have read an email but not replied, and resurfaces it with an AI-drafted reply when you are ready.

**The problem**

ADHD users read emails, fully intend to reply, then completely forget they exist. This is prospective memory failure — not an inbox management problem. Clinical studies show large-scale impairment in prospective memory task planning (d=1.60) and significantly worse self-initiated retrieval in ADHD adults versus controls.

Evidence quality: Tier 1-2 (prospective memory failure robustly documented; four-layer convergence model established in deep dive). See the [Deep Dive: Email Management](https://docs.google.com/document/d/14Ab2f0IHOIdfY-QHFMZ5or-tMSaTlnS1VJ8IX4K-v4s/edit) for the full research.

**The proposed solution**

1. Detect emails opened/read but not replied to (via Gmail/Outlook API read-state tracking)
2. Surface forgotten reply-intentions in a separate "reply queue" — not as another inbox notification
3. Provide AI-drafted reply suggestions to reduce the composition initiation barrier
4. Use non-shaming, progressive nudges ("Ready to reply to Sarah's question about the Q3 report?")
5. Calendar-aware surfacing: remind before a meeting with the sender

**Who else is building here**

| Competitor | What they do | Gap |
|-----------|-------------|-----|
| Superhuman / Grammarly ($118M raised) | Premium email client + AI writing | Helps with writing, not with remembering to reply |
| SaneBox (15+ years, profitable) | Email filtering and prioritisation | Sorts email but doesn't track "read-but-forgot" |
| Boomerang | Tracks whether others reply to you | Wrong direction — tracks inbound, not your outbound failures |
| Saner.AI ($12/month) | ADHD-specific day planning with Gmail | Focuses on daily planning, not reply obligation tracking |

**What technology makes this possible now**

- **Email APIs** (Gmail, Outlook) provide read-state tracking, reply detection, and thread analysis — all production-ready
- **MCP** enables awareness of calendar context and task context alongside email
- **Knowledge graph memory** tracks relationships between emails, senders, shared projects, and deadlines for smarter resurfacing

**Key risks**

- Email platform dependency: must build for Gmail or Outlook first; limits market per integration
- Grammarly-Superhuman consolidation could add reply tracking as a feature
- The reply queue must push to the user, not wait for the user to check it
- Privacy sensitivity: reading all email requires strong trust positioning

**What success looks like**

The user stops getting "why didn't you reply to my email?" messages.

---

### Voice-to-Doc Bridge — Speaking Instead of Writing

**Score:** 35/50 | **Build time:** 2-4 weeks | **Behaviour change:** Moderate

> **In one sentence:** A voice-first documentation tool where you tap one button, talk through what you need to document, and AI transforms your speech into a structured professional document.

**The problem**

ADHD users experience complete paralysis facing documentation tasks. The low-stimulation, high-cognitive-load nature of documentation specifically triggers the initiation barrier. This is not a writing ability problem — it is a starting problem.

Evidence quality: Tier 2-3 (practitioner and user evidence; specific manifestation of task initiation failure).

**The proposed solution**

1. One-button voice recording — no blank page, no formatting decisions
2. AI transforms unstructured speech into structured document matching the required format (report template, status update, meeting notes)
3. User reviews and approves (or lightly edits)
4. Optional: calendar integration prompts "You have a status report due — ready to talk through it?"

**Who else is building here**

| Competitor | What they do | Gap |
|-----------|-------------|-----|
| Grammarly / Notion AI | AI writing assistance | Helps with writing execution, not initiation. Still requires typing. |
| Scribe ($1.3B valuation) | Auto-generates process docs from screen recording | Different modality; not voice-to-document |
| Otter / Voicy / Brain Dump | Voice transcription | Raw transcripts, not structured professional documents |
| Wispr Flow | Speech to polished text | General-purpose; no ADHD-specific UX or templates |

**What technology makes this possible now**

- **Voice-to-structured-document AI:** Transcription at 97-99% accuracy (Whisper, GPT-4o-transcribe). Granola and Wispr Flow prove "speech to structured output" is production-ready.
- **On-device processing** via Apple Foundation Models enables private voice processing
- **Discreet voice input** (Subtle Computing, $6M seed) is addressing the open-office barrier

**Key risks**

- Editing the AI output may re-trigger the same paralysis. Output must be good enough for minimal editing.
- Cannot dictate in open offices. Whisper mode or text fallback needed.
- Documentation remains inherently aversive. May cap willingness-to-pay.
- AI commoditisation: ChatGPT voice mode exists. Differentiation must be ADHD-specific UX.
- If Humble solves task initiation broadly (FP01), documentation paralysis is captured as a subset — making this potentially redundant as standalone.

**What success looks like**

A user who hasn't written a status report in 3 weeks talks for 4 minutes and has a professional document ready to send.

---

### Prospective Memory Platform — Tracking Your Commitments

**Score:** 12/20 (solution only) | **Build time:** 3-6 months | **Behaviour change:** Passive (none required)

> **In one sentence:** A cross-channel AI system that automatically captures commitments from meetings, email, and chat — then proactively reminds you before you drop the ball.

**The problem**

ADHD adults consistently fail to follow through on intentions. They agree to things in meetings, read emails they intend to reply to, make promises in Slack — then move on and the commitment vanishes. Prospective memory impairment is clinically documented at Tier 1, partially mediates the ADHD-procrastination link, and medication does not normalise it.

This is the root mechanism underneath both FP07 (meeting memory) and FP09 (email management), and partially underneath FP08 (project neglect) and FP11 (documentation paralysis).

Evidence quality: Tier 1 for the mechanism. Strongest clinical grounding of any candidate.

**The proposed solution**

1. Monitor email, meeting transcripts, and Slack/Teams for commitments — both explicit ("I'll send that by Friday") and implicit (reading an email without replying)
2. Extract semantic understanding of obligations: who owes what to whom, by when
3. Track bi-directional commitments: things you owe others AND things others owe you
4. Proactively resurface at the right moment: before a meeting with someone, when a deadline approaches, when a related project is open
5. Require zero maintenance: no tagging, filing, reviewing, or processing inboxes

**Who else is building here**

| Approach | Meetings | Email | Chat | Extracts Commitments | Tracks Follow-Through | Proactive Reminders |
|----------|:-:|:-:|:-:|:-:|:-:|:-:|
| PKM Tools (Obsidian, Notion) | No | No | No | No | No | No |
| AI-Native PKM (Mem, Fabric) | No | No | No | No | No | No |
| Saner.AI | Via calendar | Gmail | No | Partial | Partial | Yes (day planning) |
| Meeting AI (Otter, Granola) | Yes | No | No | Yes | Partial | No |
| TwinMind ($5.7M seed) | Yes (audio) | Via extension | Via extension | No | No | No |
| Bee (Amazon) | Yes (audio) | Gmail | No | Yes | Via drafts | Partial |
| Microsoft Recall | Yes (screen) | Yes (screen) | Yes (screen) | No | No | No |
| **This product** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** | **Yes** |

No existing product provides the full stack.

**What technology makes this possible now**

This is where the technology assessment transforms the candidate from "interesting concept" to "buildable product":

- **MCP** eliminates the integration barrier. One protocol connects to email, Slack, Teams, calendar, project tools, and documents. Thousands of MCP servers already exist.
- **Knowledge graph auto-construction** (Microsoft GraphRAG + Anthropic MCP Knowledge Graph Memory) automatically extracts entities, infers relationships, and builds a queryable graph — without the user filing or tagging anything. The graph knows that "Sarah" connects to "Q3 Budget Review" connects to "action item: send revised figures by Friday" connects to "email from Sarah read but not replied."
- **On-device LLMs** process all communication content locally, substantially reducing the privacy objection.
- **Slack/Teams agent platforms** provide distribution — the product lives where users already work, not as another app to remember.

See the [Technology Landscape](#technology-landscape) section for readiness timelines and the [PKM / Second Brain Landscape](#the-pkm--second-brain-landscape) for why this is NOT a knowledge management tool.

**Key risks**

- Highest build complexity: 3-6 months to MVP with multi-channel monitoring, commitment extraction NLP, and contextual resurfacing
- Accuracy requirements are extreme: false positives (surfacing non-commitments) erode trust; false negatives (missing real commitments) defeat the purpose
- Privacy sensitivity: the system reads all email, meetings, and chat. Must be positioned as "your private memory assistant."
- Cold start: value builds as the commitment database populates; first-week experience may be thin

**But:**

- Zero competition for the full multi-channel concept
- Addresses the root clinical mechanism, not symptoms
- Knowledge graph compounds over time — the longer you use it, the more it knows, the harder it is to replace. This is one of the few architectures where the "app graveyard" problem may be structurally mitigated.
- The architecture became feasible in the last 12 months. MCP + GraphRAG + on-device LLMs did not all exist in production form before that.

**Positioning note:** This should be framed as a **commitment management layer**, not a PKM/second brain tool. PKM tools require user-driven maintenance — exactly what ADHD impairs. This product requires zero maintenance. The distinction matters for avoiding the ADHD-PKM failure cycle (see Competitive Landscape below).

**What success looks like**

The user goes from regularly dropping commitments to near-zero dropped commitments. The anxiety of "what have I forgotten?" decreases. The system becomes trusted external memory — high switching cost once established.

---

To understand how these five candidates were selected from 20 initial problems, the next section walks through the analysis funnel.

---

## How We Got Here: The Analysis Funnel

> **Bottom line:** We started with 20 problems, applied two binary gates, scored the survivors on three dimensions, assessed market gaps, and designed solutions. The funnel: 20 → 13 → 10 → 7 → 5 candidates.

### Which problems can software actually solve?

Two binary gates filtered 20 problems down to 13:

- **Can software help?** (Without requiring clinical validation or therapy)
- **Can the individual improve?** (Without requiring organisational cooperation)

**7 problems eliminated:**

| Problem | Why It Failed |
|---------|--------------|
| Attendance/Absence | Requires org policy changes |
| Supervisor Conflict | Interpersonal; requires manager cooperation |
| Team Collaboration | Requires colleague cooperation |
| Emotional Dysregulation | Needs clinical support (CBT, medication) |
| Impulsive Job Quitting | Needs clinical/coaching intervention |
| Safety/Risk Behaviours | Needs workplace systems + clinical support |
| Underperformance (meta) | Meta-outcome, not a specific problem |

These are real and severe, but software alone cannot meaningfully address them. See the [Gate Filter Results](https://docs.google.com/document/d/1tSasgnGc3oSzbdKB60d0Il3Aj0qmP20MfvP0GNf6NLg/edit) for full rationale.

### Which problems are most severe and distinct?

Each surviving problem was scored on frequency (how often), ADHD differentiation (is it qualitatively different in ADHD, not just "worse"), and connectedness (does it drive other problems). Scores out of 15.

| Rank | Problem | Score | Key Mechanism |
|------|---------|:-----:|---------------|
| 1= | Time Blindness (FP03) | 14 | Altered time perception; hub problem |
| 1= | Task Initiation (FP01) | 14 | Altered reward processing; #1 user complaint |
| 3= | Prioritisation (FP05) | 13 | Interest-based nervous system overrides importance |
| 3= | Inconsistent Focus (FP02) | 13 | Most saturated market |
| 5 | Project Neglect (FP08) | 12 | Motivational decay with distance |
| 6= | Meeting Memory (FP07) | 11 | Encoding deficit (not retrieval) |
| 6= | Email Management (FP09) | 11 | Prospective memory failure |
| 8= | FP04, FP06, FP12, FP11 | 10 | Various downstream/lower-differentiation |

**Key insight:** The highest-scoring problems are where the ADHD mechanism is qualitatively different from the neurotypical experience. Time blindness is not poor planning — it is a different perception of time. Task initiation failure is not laziness — it is altered reward circuitry. This distinction is where ADHD-specific product design can outperform general tools.

See the [Problem Scores](https://docs.google.com/document/d/1eajba2qQUazhjc7U3Ji4I_Us9LZPu4je7_X9n6dA7Eo/edit) and [Problem Clusters](https://docs.google.com/document/d/11_hiJ-B41UZhMQqYAXVGiM2zEIl5A8w-lF-a7Z7894k/edit) for detailed scoring and causal relationships.

### Where are the gaps in the market?

All 10 problems scoring 10+ were assessed for competitive landscape. Market gap scores (out of 15) combine market noise, product maturity, and ADHD user effectiveness.

| Problem | Gap Score | Category | Key Finding |
|---------|:---------:|----------|-------------|
| FP01 Task Initiation | 10 | **Clear gap** | Body doubling works but requires humans; no tool solves the activation moment |
| FP08 Project Neglect | 10 | **Clear gap** | Delay discounting completely unaddressed |
| FP11 Documentation | 10 | **Clear gap** | Zero ADHD-specific tools |
| FP03 Time Blindness | 9 | **Clear gap** | Estimation calibration is greenfield |
| FP07 Meeting Memory | 8 | Positioning critical | Zero ADHD-specific tools but general market huge |
| FP09 Email Management | 8 | Positioning critical | "Read-and-forgot" pattern completely unaddressed |
| FP05 Prioritisation | 8 | Positioning critical | Interest-based mechanism unaddressed but PM market massive |
| FP02 Focus | 7 | Well-served | 44+ apps in this space |
| FP04 Deadlines | 7 | Well-served | AI scheduling advancing fast |
| FP06 Detail Errors | 6 | Well-served | Grammarly ($13B) owns this |

**The dominant pattern: "noisy general, quiet specific."** General productivity markets are saturated. ADHD-specific sub-markets are nearly empty. No ADHD-specific productivity app has raised a Series A.

See the [Market Gap Analysis](https://docs.google.com/document/d/1iJNwLerGKjMa8tX7Kotbr--f0itUg8IkXodR3UDnwh4/edit) and the [ADHD App Landscape (54 Apps)](https://docs.google.com/document/d/1lYUX0lre7UF8MgzdbXcu__LW3E9_35x-eoNv2mHh3iw/edit) for detail.

### Which solutions are most buildable?

7 solutions were designed and scored on feature complexity, behavioural change required, setup effort, and integration dependency (each 1-5; total out of 20).

**What was eliminated and why:**

| Candidate | Why Eliminated/Deprioritised |
|-----------|---------------------------|
| Project Pulse Monitor (FP08) | Highest complexity (3-6 months); multi-tool dependency. Execution risk too high for first product. |
| Time Perception Calibrator (FP03) | Requires behaviour change (estimation habit); cold-start problem. Strong candidate — deprioritised on feasibility. |
| Interest-Aware Surfacer (FP05) | Deep task-tool dependency; noisiest remaining market. "What you can do" vs "what you should do" tension unresolved. |
| FP02 (Focus) | Most saturated market; Brain.fm has peer-reviewed ADHD study. |
| FP04 (Deadlines) | Downstream; AI scheduling improving rapidly. |
| FP06 (Detail Errors) | Grammarly ($13B) and GitHub Copilot own this; gap is feature-sized, not product-sized. |
| FP12 (Lateness) | Downstream of FP03; Tiimo already leads ADHD visual planning. |

See the [Solution Scoring](https://docs.google.com/document/d/1Y7cPa6ivLmKs3k0FfNH_cFvzKrddDwEQLdg1C2_5vmw/edit) for full design rationale and scores.

---

## Competitive Landscape

> **Bottom line:** The ADHD app market is growing fast but dramatically underfunded. The "second brain" / PKM space is the closest adjacent market — and ADHD users consistently fail with PKM tools because they require the executive function ADHD impairs.

### The ADHD App Market

A sweep of 54 ADHD productivity apps revealed a bifurcated funding landscape:

**General tools popular with ADHD:** Motion ($75M), Endel ($22M), Reclaim ($9.5M)

**ADHD-specific tools:** Tiimo ($6M, Apple App of Year 2025), FLOWN ($5.1M), Flow Club ($5M), Shimmer ($3.5M), Sidekick ($2M)

**No ADHD-specific productivity app has raised a Series A.** The $2-2.4B ADHD apps market is growing at 11-16% CAGR — suggesting the right product hasn't been built yet, not that the market is too small.

See the [ADHD App Landscape (54 Apps)](https://docs.google.com/document/d/1lYUX0lre7UF8MgzdbXcu__LW3E9_35x-eoNv2mHh3iw/edit) for the full 54-app catalogue.

### The PKM / Second Brain Landscape

The "second brain" space is directly relevant because several candidates operate in adjacent territory. The research uncovered a critical design constraint:

**The ADHD-PKM failure cycle repeats across every tool:**

1. **Hyperfocus setup:** The user spends hours configuring Notion databases, installing Obsidian plugins, designing elaborate folder structures
2. **Maintenance collapse:** The system requires ongoing filing, tagging, and linking — exactly the executive function ADHD impairs
3. **Abandonment and restart:** The user gives up. Months later, they find a new tool and repeat.

**The core paradox:** The people who most need external cognitive support are the least equipped to maintain the systems that provide it.

**Five specific failure modes** emerged from user research: tinkering trap, maintenance burden, out-of-sight-out-of-mind, perfectionism paralysis, context-switching cost. These are not bugs to fix — they are **design constraints** for any ADHD product. Automatic capture and zero-maintenance are mandatory, not nice-to-have.

**Adjacent competitors to watch:**

| Tool | Relevance | Threat Level |
|------|----------|:---:|
| Saner.AI ($12/month) | ADHD-specific, notes + email + calendar + AI planning. Closest existing product. | Medium — focuses on day planning, not commitment tracking |
| Bee (Amazon) | Wearable AI capturing conversations + auto-generating commitments | Medium-High — could expand to full commitment tracking in 12-24 months |
| TwinMind ($5.7M seed, 30K users) | Ambient speech capture building personal knowledge graph | Low — captures raw transcripts, not semantic commitments |
| Granola ($250M valuation) | Bot-free meeting AI, excellent at meeting capture | Low — siloed to meetings only |

None provides the full multi-channel commitment tracking stack.

See the [PKM / Second Brain Landscape](https://docs.google.com/document/d/1ZV0aQa5oudsNZebMPjgaxYWFhrCVwry9sxfJN3qxBXA/edit) for the full analysis including 30+ tools evaluated.

---

## Technology Landscape

> **Bottom line:** Seven technologies matured in the last 12 months that make an ADHD workplace product feasible today. Five are production-ready now. The most important are MCP (integration) and knowledge graphs (memory).

### Seven Step-Change Technologies

These are woven into the candidate profiles above. This table provides the consolidated reference.

| # | Technology | What It Changes | Readiness | Timeline |
|:---:|-----------|----------------|-----------|:--------:|
| 1 | **MCP** (Model Context Protocol) | Eliminates N-by-M integration problem. One protocol for email, Slack, Teams, calendar, PM tools, docs. | Production-ready | 0-3 months |
| 2 | **Knowledge Graph / Auto-Organisation** | Eliminates manual filing/tagging. Automatic entity extraction + relationship mapping. GraphRAG (open-source) + Anthropic MCP Knowledge Graph. | Production-ready (components) | 0-3 months |
| 3 | **On-Device LLMs** | Removes privacy barrier. Apple Foundation Models (~3B, free, offline) + open-source. | Production-ready | 0-6 months |
| 4 | **Voice-to-Structured-Document AI** | Changes documentation from "write" to "speak." 97-99% accuracy. | Production-ready | 0-3 months |
| 5 | **Meeting AI Commitment Extraction** | Transcription + action items solved. Step-change: connecting to persistent tracking via MCP. | Production-ready | 0-3 months |
| 6 | **Slack/Teams as Agent Platforms** | Both platforms becoming AI agent orchestration layers. | Early production | 3-6 months |
| 7 | **AI Body Doubling** | Research validates AI body doubles work nearly as well as human ones for task initiation. | Research/prototype | 6-12 months |

### Recommended Architecture

The optimal ADHD workplace tool in 2026 would combine:

1. **MCP as integration backbone** — one protocol connecting email, calendar, Slack/Teams, PM tools, and documents
2. **Knowledge graph as memory layer** — automatic entity/relationship extraction building persistent structured memory without manual tagging
3. **On-device LLM for sensitive processing** — Apple Foundation Models (iOS/Mac) or local open-source (cross-platform)
4. **Meeting AI integration** — consuming structured outputs from existing tools, not building transcription
5. **Slack/Teams distribution** — deploying as agent within existing platforms
6. **Voice-first capture** — for documentation use case
7. **AI body doubling** — as differentiated feature for task initiation (when research matures)

### Key Technology Risks

- **Screen monitoring vacuum:** Limitless shut down (Meta acquisition Dec 2025); Recall limited to <2% of Windows laptops. No reliable cross-platform activity monitoring exists.
- **Agentic Siri delays:** Apple's full cross-app Siri repeatedly delayed. Build on App Intents (safe); don't depend on agentic Siri (risky).
- **Enterprise privacy resistance:** Even with on-device processing, enterprises may resist AI reading employee communications.
- **AI reliability:** ADHD users are particularly vulnerable to "AI did the wrong thing" reputation damage. Human-in-the-loop safeguards essential.
- **Body doubling evidence is thin:** Promising but small sample sizes. Not ready for primary feature status.

See the [Emerging Technology Assessment](https://docs.google.com/document/d/16g0nN1v8P2HUMPMs0XcYxPLIt3DP4npDY77w_QmWmZo/edit) for the full analysis across 9 technology categories.

---

## Appendices

### A: Supporting Documents

All supporting documents are available in the [shared Google Drive folder](https://drive.google.com/drive/folders/1jFLeySzdmvpyZZzyCCV0n3nq73jtBEFE).

**Evidence Base:**

| Document | Description |
|----------|-------------|
| [Clinical Workplace Impairments](https://docs.google.com/document/d/1vySmzfOaugPxA9i3oEX4Vr0fEb-MYRmAA227jyNWHB8/edit) | WFIRS clinical data, WHO productivity studies |
| [Accommodation Effectiveness](https://docs.google.com/document/d/1Q_nJlXB3iUogZLhST2UuvWCOK6aU_MspifYsoTryhU4/edit) | Accommodation effectiveness, technology-based accommodations |
| [Job Loss & Performance Patterns](https://docs.google.com/document/d/1m4xZtXTO8TxwbeMY6ddghhPHYmkgV51ci9AuUeCUGGk/edit) | Termination triggers, performance failure cascades |
| [User-Reported Struggles](https://docs.google.com/document/d/1wZpOQDG-IzGWqPc-HVoscYql1hwUDKRKfAM3mMuCnbM/edit) | Community reports, ranked problems |
| [Tool Failures & Unmet Needs](https://docs.google.com/document/d/1MP8bJ9ujg6enm1M7d4OnVd2iY5L3y-9zSiHfCZPihe8/edit) | 5 tool failure patterns, 7 user "wants" |
| [Practitioner Perspectives](https://docs.google.com/document/d/1AFzYzBQJHztFGSIgheiE_Gd03jYmlyxWf64Dw80mt2Q/edit) | Practitioner priorities, cascading-failure model |
| [Deep Dive: Email Management](https://docs.google.com/document/d/14Ab2f0IHOIdfY-QHFMZ5or-tMSaTlnS1VJ8IX4K-v4s/edit) | Prospective memory failure mechanism (Phase 3) |
| [Deep Dive: Meeting Memory](https://docs.google.com/document/d/1fTREVxxHShFSLE1pV8UdWO2-Tl0u0TN54cZxAWaYM6o/edit) | Encoding deficit mechanism, neural evidence (Phase 3) |

**Analysis Pipeline:**

| Document | Description |
|----------|-------------|
| [Master Problem List](https://docs.google.com/document/d/1MlorphM0DTgE1zNkoJ7LoupTqDhgp0xnWeTDh23F0YE/edit) | 20 functional problems extracted from research |
| [Gate Filter Results](https://docs.google.com/document/d/1tSasgnGc3oSzbdKB60d0Il3Aj0qmP20MfvP0GNf6NLg/edit) | Gate filtering: 13 pass, 7 fail |
| [Problem Scores](https://docs.google.com/document/d/1eajba2qQUazhjc7U3Ji4I_Us9LZPu4je7_X9n6dA7Eo/edit) | Problem scoring with Phase 3 revisions |
| [Problem Clusters](https://docs.google.com/document/d/11_hiJ-B41UZhMQqYAXVGiM2zEIl5A8w-lF-a7Z7894k/edit) | 3 causal clusters + 1 amplifier + 4 standalone |
| [Market Gap Analysis](https://docs.google.com/document/d/1iJNwLerGKjMa8tX7Kotbr--f0itUg8IkXodR3UDnwh4/edit) | Market gap scoring for 10 problems |
| [ADHD App Landscape (54 Apps)](https://docs.google.com/document/d/1lYUX0lre7UF8MgzdbXcu__LW3E9_35x-eoNv2mHh3iw/edit) | 54-app landscape sweep |
| [Solution Scoring](https://docs.google.com/document/d/1Y7cPa6ivLmKs3k0FfNH_cFvzKrddDwEQLdg1C2_5vmw/edit) | Solution designs and scoring for 7 approaches |

**Landscape:**

| Document | Description |
|----------|-------------|
| [Emerging Technology Assessment](https://docs.google.com/document/d/16g0nN1v8P2HUMPMs0XcYxPLIt3DP4npDY77w_QmWmZo/edit) | Full tech assessment (9 categories, 7 step-changes) |
| [PKM / Second Brain Landscape](https://docs.google.com/document/d/1ZV0aQa5oudsNZebMPjgaxYWFhrCVwry9sxfJN3qxBXA/edit) | PKM tool analysis and ADHD failure patterns |

**Methodology:**

| Document | Description |
|----------|-------------|
| [Product Pathway Methodology](https://docs.google.com/document/d/1Pi8SEZqlUYcQ6zNiB9cEb8Licu-D4iTyTYL1wL0J6AA/edit) | Scoring scales, gate criteria, evidence tiers |
| [Research Instructions](https://docs.google.com/document/d/1MeT-QOVTQWSuAUH6pX9uPBUd1wyfQFszs84PCEpIH3c/edit) | Research phase structure, query templates |

### B: Scoring Framework Summary

- **Problem Layer:** Frequency + ADHD Differentiation + Connectedness (out of 15)
- **Market Gap Layer:** Market Noise + Product Maturity + ADHD User Reviews (out of 15)
- **Solution Layer:** Feature Complexity + Behavioural Change + Setup Effort + Integration Dependency (out of 20)
- **Combined:** Problem + Market Gap + Solution (out of 50). Indicative, not determinative.

**Evidence quality tiers:**
- Tier 1: Peer-reviewed research, RCTs, large surveys (n>1000)
- Tier 2: Smaller studies, expert reviews, validated instruments
- Tier 3: Community consensus (multiple independent reports)
- Tier 4: Individual anecdotes, single blog posts

---

*Assessment completed 2026-02-06. Technology landscape is evolving rapidly; findings should be re-validated quarterly.*
