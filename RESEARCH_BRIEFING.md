# ADHD Workplace Product Discovery: Research Briefing

Prepared for the Humble team | February 2026

---

## Executive Summary

We ran a structured product discovery effort evaluating whether Humble should build for ADHD adults in the workplace. The default outcome was "do not pursue" — the analysis had to surface something compelling enough to override that default.

The headline finding: ADHD adults consistently forget commitments made in meetings, emails they intended to reply to, and projects they meant to revisit. This is not disorganisation — it is a clinically documented failure called prospective memory impairment (d=1.60 for task planning). Medication does not normalise it. No product addresses this mechanism across channels.

The funnel:
- 20 functional problems identified from clinical studies, user interviews, and community research
- 13 passed both gate filters (software amenability + individual addressability)
- 3 causal clusters with clear hub problems
- 4 white spaces where zero ADHD-specific tools exist

The market:
- $2.0–2.4B ADHD apps market, growing 11–16% CAGR
- No ADHD-specific productivity app has raised a Series A
- General productivity is saturated; ADHD-specific is nearly empty

Where everything lives:
- This repository contains the canonical knowledge graph (`System_of_Record.yaml`)
- Interactive knowledge graph: [humblea-dubz.github.io/adhd-product-research](https://humblea-dubz.github.io/adhd-product-research)

---

## Research Timeline

19 working days, three phases. Reconstructed from file metadata and git history.

| Date | What Happened | Deliverables |
|------|---------------|-------------|
| Feb 3–6 | Phase 1: Clinical evidence + initial analysis | P1A–P1C clinical research, S1 Master Problem List, S2 Gate Filters, S3 Scoring, S6 Market Gap, S9 Tech Assessment, S10 first draft |
| Feb 3–13 | 12 structured user interviews | P2E User Interview Research |
| Feb 6–11 | Choice Space structural analysis | CS2 Choice Space Map, CS3 Cross-Layer Mapping, CS4 Engagement Models |
| Feb 12 | GitHub repo launched | First interactive viewer (Next.js) over 10 YAML files |
| Feb 13 | Visualisation rebuilt from scratch | D3+SVG graph explorer: 122 nodes, 417 edges, 4 encoding presets. Humble design system applied. Deployed to GitHub Pages. |
| Feb 18 | Reddit community research | 13 Perplexity scrapes across r/ADHD, r/adhdwomen, r/ADHD_Programmers and others |
| Feb 20 | Bulk research finalisation | All Phase 2 user research (P2A–P2I), Phase 3 deep dives (P3A, P3B), FP01–FP18 Reddit summaries, scoring updates (S3b, S3c), S4 clusters, S5 Phase 3 decisions, 250+ curated community quotes |
| Feb 23–24 | Knowledge graph restructuring | Obsidian vault, phenomena deep dives, cross-reference inventory |
| Feb 25 | System of Record consolidation | Unified 4,061-line YAML. 49 research files + 8 analysis files committed to GitHub. |

---

## How We Evaluated

20 problems in → 13 scored survivors → 3 clusters → market gaps assessed → choice space mapped

S1 Master Problem List (20 problems)
 → S2 Gate Filters: Can software help? Can the individual act alone? (13 pass, 7 fail)
 → S3 Problem Scoring: Frequency + ADHD Differentiation + Connectedness (max 15)
 → S4 Problem Clusters: 3 causal clusters + 1 amplifier
 → S6 Market Gap: Noise + Maturity + ADHD User Reviews (max 15)
 → CS2–CS5 Choice Space: Engagement models + meta-challenges

Evidence quality — every finding carries a tier:

| Tier | What It Means | Example |
|------|---------------|---------|
| 1 (High) | Peer-reviewed, RCTs, large surveys (n>1000) | WFIRS prevalence data, WHO productivity studies |
| 2 | Industry reports, expert opinion, validated instruments | Practitioner interviews, large surveys (n>500) |
| 3 | Multiple consistent community sources | Reddit analysis (250+ quotes), user interviews |
| 4 (Low) | Single studies, individual anecdotes | One-off forum posts |

Important framing: We score functional problems (observable work task failures like "misses deadlines") — not symptoms ("poor time perception"). Products address behaviours, not neurology.

Gate filters eliminated 7 problems before scoring:

| Eliminated | Reason |
|-----------|--------|
| Attendance/Absence | Requires org policy changes |
| Supervisor Conflict | Requires manager cooperation |
| Team Collaboration | Requires colleague cooperation |
| Emotional Dysregulation | Needs clinical support |
| Impulsive Job Quitting | Needs clinical/coaching intervention |
| Safety/Risk Behaviours | Needs workplace systems + clinical support |
| Underperformance | Meta-outcome, not a specific problem |

---

## The 13 Functional Problems

Scored on three dimensions (max 5 each, total 15):
- Q1 Frequency — how often does this disrupt work?
- Q2 ADHD Differentiation — is the ADHD experience qualitatively different, not just worse?
- Q3 Connectedness — does solving this reduce other problems?

| Rank | Problem | Q1 | Q2 | Q3 | Total | Tier | Cluster |
|------|---------|:--:|:--:|:--:|:-----:|:----:|---------|
| 1= | FP03 Time Blindness | 4 | 5 | 5 | **14** | 1.3 | A (hub) |
| 1= | FP01 Task Initiation Failure | 5 | 5 | 4 | **14** | 1.7 | B (hub) |
| 3= | FP05 Prioritisation Failure | 5 | 4 | 4 | **13** | 1.7 | Amplifier |
| 3= | FP02 Inconsistent Focus | 5 | 4 | 4 | **13** | 1.0 | C (hub) |
| 5 | FP08 Long-Term Project Neglect | 4 | 5 | 3 | **12** | 1.7 | B receiver |
| 6= | FP09 Email Management Failure | 4 | 4 | 3 | **11** | 1.5 | Standalone |
| 6= | FP07 Meeting Memory Failure | 4 | 5 | 2 | **11** | 1.7 | Standalone |
| 8= | FP04 Deadline Misses | 4 | 3 | 3 | **10** | 1.0 | A+C convergence |
| 8= | FP06 Detail Errors | 4 | 3 | 3 | **10** | 1.0 | C receiver |
| 8= | FP12 Chronic Lateness | 4 | 4 | 2 | **10** | 1.0 | A receiver |
| 8= | FP11 Documentation Paralysis | 4 | 4 | 2 | **10** | 3.0 | B receiver |
| 12 | FP10 Context Switching Cost | 4 | 3 | 2 | **9** | 3.3 | Standalone |
| 13 | FP18 Workspace Disorganisation | 3 | 3 | 2 | **8** | 2.0 | Standalone |

### The Top Four

FP03 Time Blindness (14/15, Tier 1.3)
- Not poor planning — a qualitatively different perception of time
- 40.7% prevalence vs 9.7% controls (WFIRS). "Self-management to time" identified as the primary EF deficit mediating ADHD to occupational impairment.
- Hub of Cluster A: causes deadline misses, chronic lateness, and project neglect downstream

FP01 Task Initiation Failure (14/15, Tier 1.7)
- Not procrastination — a neurological activation gate that effort alone cannot open
- 40.7% WFIRS prevalence. Altered reward processing: the activation threshold for mundane tasks exceeds what the dopaminergic system provides.
- Hub of Cluster B: causes project neglect and documentation paralysis downstream

FP05 Prioritisation Failure (13/15, Tier 1.7)
- The ADHD "interest-based nervous system" overrides importance-based prioritisation
- Users don't choose wrong priorities — their motivational system literally cannot weight importance over interest, novelty, challenge, or urgency
- Cross-cluster amplifier: worsens all three clusters without belonging to any one

FP02 Inconsistent Focus (13/15, Tier 1.0)
- Output varies dramatically day-to-day. WHO data (n=7,075): 21.7 days/year of reduced work quantity.
- Most saturated market (44+ apps) but ADHD-specific mechanism (oscillation between hyperfocus and inability to focus) is poorly served
- Hub of Cluster C: causes detail errors and contributes to deadline misses

### Phase 3 Deep Dives

Two problems received targeted deeper investigation. Both rose from 10 to 11 and had evidence tiers strengthened:

| Problem | What Changed | Key Finding | New Tier |
|---------|-------------|-------------|:--------:|
| FP09 Email Management | Score 10→11 (Q3: 2→3) | Not inbox overload — prospective memory failure. Users read emails, form intention to reply, then the intention vanishes. Effect size d=1.60. | 1.5 (was 3.0) |
| FP07 Meeting Memory | Score 10→11 (Q2: 4→5) | Not retrieval failure — encoding deficit. Reduced P3 amplitude during encoding means information was never properly stored. Working memory impairment d=1.63–2.03 in 75–81% of ADHD individuals. | 1.7 (was 2.7) |

Product design implication: FP07 requires full capture (information was never encoded), not memory aids (which assume partial encoding).

---

## Causal Clusters

The evidence revealed three causal clusters — groups of problems sharing root causes and cascading effects.

### The Structure

```
                    FP05 Prioritisation (Amplifier, 13)
                   /            |            \
         Cluster A          Cluster B         Cluster C
     Time-Perception    Initiation-Execution   Attention-Quality

  Hub: FP03 (14)       Hub: FP01 (14)        Hub: FP02 (13)
    |    |    |           |        |             |        |
  FP04  FP12 FP08*     FP08*    FP11          FP06    FP04*
  (10)  (10) (12)      (12)     (10)          (10)    (10)

  * FP04 receives from A+C. FP08 receives from A+B.
```

### Cluster Details

| Cluster | Hub (Score) | Receivers | Combined Score | Mechanism |
|---------|-------------|-----------|:--------------:|-----------|
| A: Time-Perception Cascade | FP03 Time Blindness (14) | FP04 Deadline Misses, FP12 Lateness, FP08 Project Neglect (partial) | 46 | External time sense is absent — all time-dependent tasks fail |
| B: Initiation-Execution Bottleneck | FP01 Task Initiation (14) | FP08 Project Neglect, FP11 Documentation Paralysis | 36 | Activation energy exceeds neurological capacity — users know what to do but can't start |
| C: Attention-Quality Chain | FP02 Inconsistent Focus (13) | FP06 Detail Errors, FP04 Deadline Misses (shared) | 33 | Focus variability produces errors and insufficient output |

Why this matters: Solving a hub reduces its downstream receivers. The three highest-leverage intervention points are FP03, FP01, and FP02 — in that order.

Standalone problems not in any cluster: FP07 Meeting Memory (11), FP09 Email Management (11), FP10 Context Switching (9), FP18 Workspace Disorganisation (8).

---

## Market Landscape

$2.0–2.4B ADHD apps market in 2024. 11–16% CAGR. Projected $4–7.5B by early 2030s.

Funding landscape from a sweep of 54 ADHD productivity apps:
- General tools popular with ADHD: Motion ($75M), Endel ($22M), Reclaim ($9.5M)
- ADHD-specific: Tiimo ($6M, Apple App of Year 2025), FLOWN ($5.1M), Flow Club ($5M), Shimmer ($3.5M)
- No ADHD-specific productivity app has raised a Series A.

### Combined Problem + Market Scores

| Rank | Problem | Problem Score | Market Gap | Combined |
|------|---------|:------------:|:----------:|:--------:|
| 1 | FP01 Task Initiation | 14 | 10 | **24** |
| 2 | FP03 Time Blindness | 14 | 9 | **23** |
| 3 | FP08 Project Neglect | 12 | 10 | **22** |
| 4= | FP05 Prioritisation | 13 | 8 | **21** |
| 4= | FP12 Chronic Lateness | 10 | 11 | **21** |
| 6= | FP02 Inconsistent Focus | 13 | 7 | **20** |
| 6= | FP11 Documentation Paralysis | 10 | 10 | **20** |
| 8= | FP07 Meeting Memory | 11 | 8 | **19** |
| 8= | FP09 Email Management | 11 | 8 | **19** |
| 10 | FP04 Deadline Misses | 10 | 7 | **17** |
| 11 | FP06 Detail Errors | 10 | 6 | **16** |

### "Noisy General, Quiet Specific"

The market gap scores for FP07, FP09, and FP05 (all 8/15) understate the ADHD-specific opportunity:
- FP07 competes with Otter.ai ($100M ARR) and Fireflies ($1B valuation) generally — but zero ADHD-specific meeting tools exist
- FP09 competes with Superhuman/Grammarly generally — but zero ADHD-specific email tools address the "read-and-forgot" pattern
- FP05 competes with Todoist/Motion generally — but the interest-based activation mechanism is unaddressed

If scored against ADHD-specific tools only, these would score 12–13/15.

### Four True White Spaces (zero ADHD-specific tools)

1. Meeting memory — the encoding deficit problem
2. Email management — the "read-and-forgot" pattern
3. Documentation paralysis — the "write" to "speak" opportunity
4. Multi-channel commitment tracking — the cross-channel prospective memory gap

### The PKM Failure Cycle

Every "second brain" tool fails ADHD users in the same three-step pattern:

1. Hyperfocus setup — hours configuring Notion databases and Obsidian plugins
2. Maintenance collapse — the system requires ongoing filing/tagging/linking (exactly the EF ADHD impairs)
3. Abandonment and restart — months later, new tool, same cycle

Five failure modes: tinkering trap, maintenance burden, out-of-sight-out-of-mind, perfectionism paralysis, context-switching cost. These are design constraints, not bugs. Automatic capture and zero maintenance are mandatory.

### Competitors to Watch

| Tool | What They Do | Threat |
|------|-------------|:------:|
| Saner.AI ($12/mo) | ADHD-specific: notes + email + calendar + AI planning | Medium — focuses on day planning, not commitment tracking |
| Bee (Amazon) | Wearable AI capturing conversations + auto-generating commitments | Medium-High — could expand to full commitment tracking in 12–24 months |
| TwinMind ($5.7M seed) | Ambient speech capture building personal knowledge graph | Low — raw transcripts, not semantic commitments |
| Granola ($250M valuation) | Bot-free meeting AI | Low — siloed to meetings only |

None provides multi-channel commitment tracking.

---

## Meta-Challenges

Five structural constraints that apply to any ADHD workplace product — regardless of which problems or engagement models are chosen. These are not risks to mitigate. They filter out entire product categories.

| # | Challenge | Severity | Key Evidence |
|---|-----------|:--------:|-------------|
| MC1 | Novelty Decay | Critical | Medication adherence 56% (n=4,011). 77% don't complete digital interventions. Tools work 2–3 weeks then become invisible. |
| MC2 | Circular Dependency | Critical | Prospective memory failure = 52% ADHD vs 21% controls. The tool requires the very cognitive function it compensates for. |
| MC3 | Shame-Avoidance Spiral | High | 73 overdue tasks → uninstall rather than engage. Shame accumulates faster than task completion. |
| MC4 | Disclosure Risk | High | Using an "ADHD tool" at work risks unwanted disclosure. Product must be invisible or generic-presenting. |
| MC5 | Notification Desensitisation | Mod–High | ADHD users desensitise to alarms within weeks. Fixed-schedule notifications habituate fastest. |

Community confirmation: Novelty decay appeared unprompted in 9/13 problem discussions in Reddit analysis. Circular dependency in 8/13. These were identified from clinical literature first and confirmed independently.

MC1 — Novelty Decay: This is neurological, not a UX failure. The ADHD interest-based nervous system uses novelty as a primary activation source. Any tool experiences predictable engagement decay as it becomes routine. Even medication (clinically validated) shows 56% adherence. Design implication: products must rotate mechanisms, vary delivery, or avoid habit-dependence entirely.

MC2 — Circular Dependency: A tool compensating for "forgetting commitments" requires the user to remember to use it. Only product-initiated, always-on architectures structurally bypass this.

---

## Engagement Models

We identified eight structurally distinct ways a product could engage ADHD users.

| # | Model | Who Initiates | User Effort | When | Retention Risk |
|---|-------|:------------:|:-----------:|:----:|:--------------:|
| M1 | Ambient Monitor + Intervene | Product | Near-zero | During | Medium |
| M2 | Passive Capture + Structured Delivery | Product | Zero | After (captures during) | **Low** |
| M3 | Modality Shift (e.g. voice-to-doc) | User | Moderate | During | Medium |
| M4 | Intelligent Reordering | Balanced | Low | Before | Low–Medium |
| M5 | Calibration Feedback Loop | Balanced | Moderate | Before + During | Medium |
| M6 | Periodic Injection into Workflow | Product | Low | Before | Medium |
| M7 | Structured Check-In / Routine | Product-prompted | Moderate | Before | **High** |
| M8 | On-Demand Cognitive Scaffolding | User | Low–moderate | During | **High** |

M2 (Passive Capture) has the strongest retention profile: zero habit burden, compounding value over time, structurally immune to the circular dependency (MC2). M7 (Structured Check-In) has the worst — it is the dominant "app graveyard" archetype.

### The Emerging Product Shape

The compatibility analysis across clusters, models, and meta-challenges points to:

M1 (Ambient Monitor) + M2 (Passive Capture) + M4 (Intelligent Reordering)

This combination:
- Addresses all three cluster hubs (time, initiation, focus)
- Covers the standalone high-opportunity problems (meeting memory, email)
- Is structurally resistant to both critical meta-challenges
- Requires no habit formation from the user

Full compatibility matrices are documented in the Choice Space analysis (CS2 and CS3).

---

## Enabling Technologies

Seven technologies that matured in the last 12 months make this feasible now.

| # | Technology | What It Unlocks | Ready? |
|---|-----------|----------------|:------:|
| 1 | MCP (Model Context Protocol) | One protocol for email, Slack, Teams, calendar, PM tools, docs — eliminates the integration problem | Yes |
| 2 | Knowledge Graph / Auto-Organisation | Automatic entity extraction + relationship mapping — eliminates manual filing | Yes (components) |
| 3 | On-Device LLMs | Apple Foundation Models (~3B, free, offline) — removes the privacy barrier | Yes |
| 4 | Voice-to-Structured-Document AI | 97–99% accuracy — changes documentation from "write" to "speak" | Yes |
| 5 | Meeting AI Commitment Extraction | Transcription + action items solved — step-change is connecting to persistent tracking | Yes |
| 6 | Slack/Teams as Agent Platforms | Both becoming AI agent orchestration layers | Early |
| 7 | AI Body Doubling | 27–33% increase in sustained attention in research | Prototype |

Key risks:
- Screen monitoring vacuum — Limitless shut down (Meta acquisition Dec 2025); Recall limited to <2% of Windows laptops
- Enterprise privacy resistance — even with on-device processing
- AI reliability — ADHD users are particularly vulnerable to "AI did the wrong thing" reputation damage
- Body doubling evidence is thin — small sample sizes, not ready for primary feature status

---

## The Research Database

### What Exists

Canonical data store: `System_of_Record.yaml` (4,061 lines, 240KB) in this repository.

| Entity Type | Count | What It Represents |
|-------------|:-----:|-------------------|
| Sources | 20 | Citable studies, surveys, community aggregates |
| Claims | 64 | Atomic evidence assertions (53 standard + 11 thesis-group) |
| Problems | 14 | Observable workplace functional failures |
| Mechanisms | 6 | Cognitive/neurological explanations |
| Clusters | 3 | Causal co-occurrence groupings |
| Meta-Challenges | 6 | Cross-cutting structural constraints |
| Cross-Cutting Concerns | 4 | Population-level observations |
| Engagement Models | 8 | Product interaction archetypes |

### The Visual Explorer

A D3.js interactive graph explorer was built and deployed to GitHub Pages — 122 nodes, 417 edges, 4 visual encoding presets, Ctrl+K search. It went through two build cycles (Next.js → D3+SVG). Source code was cleared for a rebuild; the last working build remains live at [humblea-dubz.github.io/adhd-product-research](https://humblea-dubz.github.io/adhd-product-research).

### Research File Codes

The analysis pipeline produced the following deliverables (referenced throughout this briefing):

| Code | Title | Phase |
|------|-------|-------|
| P1A–P1C | Clinical evidence (WFIRS, Work-MAP, job loss patterns) | Phase 1 |
| P2A–P2I | User research (interviews, tool failures, app landscape, Reddit analysis) | Phase 2 |
| P3A–P3B | Deep dives (email management, meeting memory) | Phase 3 |
| S0 | Methodology (scoring scales, gate criteria, evidence tiers) | Framework |
| S1 | Master Problem List (20 functional problems) | Analysis |
| S2 | Gate Filters (software amenability + individual addressability) | Analysis |
| S3 / S3b / S3c | Problem Scoring (three dimensions, with Phase 3 updates) | Analysis |
| S4 | Problem Clusters (causal cluster map) | Analysis |
| S5 | Phase 3 Decisions | Analysis |
| S6 | Market Gap Analysis (competitive landscape scoring) | Analysis |
| S9 | Technology Assessment (7 step-change technologies) | Analysis |
| S10 | Final Synthesis (opportunity assessment) | Synthesis |
| CS1–CS5 | Choice Space (methodology, map, cross-layer mapping, engagement models, meta-challenges) | Choice Space |

---

## Open Questions

What's decided:
- The problem space is validated (predominantly Tier 1–2 evidence)
- The market opportunity is real and underserved
- The technology stack is ready (5 of 7 enabling technologies are production-ready)

What's open:
- Which specific product configuration to pursue — CS2–CS4 maps the option space but no product decision has been made
- Individual vs enterprise targeting — the disclosure meta-challenge (MC4) makes this a non-trivial positioning decision
- Whether to rebuild the visual knowledge graph explorer
- Timeline for moving from research to product specification
