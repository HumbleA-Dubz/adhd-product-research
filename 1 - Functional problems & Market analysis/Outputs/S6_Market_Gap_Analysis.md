# S6: Market Gap Layer Analysis

## Methodology Note

Each problem scoring ≥10 on the Problem Layer (S3) is assessed on the Market Gap Layer from the methodology. The layer has 5 questions:

- **Q1: Market Noise** (1–5) — Higher = quieter market = better opportunity
- **Q2: Product Enumeration** — Descriptive list of existing solutions
- **Q3: Product Maturity** (1–5) — Higher = less mature market = better opportunity
- **Q4: ADHD User Review Effectiveness** (1–5) — Higher = worse reviews = larger unmet need
- **Q5: Root Cause of Failure** — Descriptive analysis of why existing solutions fail

**Market Gap Score** = Q1 + Q3 + Q4 (out of 15). Higher = larger opportunity.

Research conducted 2026-02-06 via web search across app stores, Product Hunt, G2/Capterra, Crunchbase, ADHD community forums (Reddit r/ADHD, ADDitude Magazine), and market research reports. Three parallel research teams covered all 10 problems; results synthesized and cross-calibrated here.

**Market context:** The ADHD apps market was valued at approximately $2.0–2.4B in 2024, growing at 11–16% CAGR, projected to reach $4–7.5B by the early 2030s (Business Research Insights; The Business Research Company).

---

## Score Summary Table

| Rank | ID | Problem | Problem Score | Q1 Noise | Q3 Maturity | Q4 ADHD Reviews | Market Gap Score | Combined |
|------|-----|---------|--------------|----------|-------------|-----------------|-----------------|----------|
| 1 | FP08 | Long-Term Project Neglect | 12 | 3 | 3 | 4 | **10** | **22** |
| 2 | FP01 | Task Initiation Failure | 14 | 3 | 3 | 4 | **10** | **24** |
| 3 | FP12 | Chronic Lateness | 10 | 3 | 4 | 4 | **11** | **21** |
| 4 | FP11 | Documentation Paralysis | 10 | 3 | 3 | 4 | **10** | **20** |
| 5 | FP03 | Time Blindness | 14 | 2 | 3 | 4 | **9** | **23** |
| 6 | FP07 | Meeting Memory Failure | 11 | 2 | 2 | 4 | **8** | **19** |
| 7 | FP09 | Email Management Failure | 11 | 2 | 2 | 4 | **8** | **19** |
| 8 | FP05 | Prioritisation Failure | 13 | 2 | 2 | 4 | **8** | **21** |
| 9 | FP02 | Inconsistent Focus | 13 | 1 | 2 | 4 | **7** | **20** |
| 10 | FP04 | Deadline Misses | 10 | 2 | 2 | 3 | **7** | **17** |
| 11 | FP06 | Attention-to-Detail Errors | 10 | 2 | 1 | 3 | **6** | **16** |

*Combined = Problem Score + Market Gap Score. This is indicative, not mechanically determinative.*

---

## Critical Insight: "Noisy General, Quiet Specific" Pattern

Several problems (FP07, FP09, FP05) have low noise scores (2) because the *general* market is crowded. However, the *ADHD-specific* market within each is nearly empty. This means:

- **FP07** competes with Otter.ai ($100M ARR) and Fireflies ($1B valuation) in general, but **zero** ADHD-specific meeting tools exist
- **FP09** competes with Superhuman/Grammarly in general, but **zero** ADHD-specific email tools address prospective memory failure
- **FP05** competes with Todoist/Motion/Notion, but the specific ADHD mechanism (interest-based vs importance-based activation) is unaddressed

The market gap scores for these problems (8) understate the ADHD-specific opportunity. If scored against only ADHD-specific tools, these would score 12–13/15.

---

## Detailed Analysis by Problem

### FP08: Long-Term Project Neglect — Market Gap: 10/15

**Q1: Market Noise — 3 (Moderate)**
General PM market is extremely crowded (Asana, Monday.com, Jira, ClickUp, Notion). But the specific sub-problem of delay-discounting-driven project neglect has few direct competitors. Only Leantime (Techstars '23, ~$140K non-dilutive, ~30K accounts) is purpose-built for neurodivergent PM. Amazing Marvin has a devoted ADHD user base but is indie-scale and bootstrapped.

**Q2: Key Products**
| Product | Positioning | Maturity |
|---------|------------|----------|
| Leantime | ADHD-specific PM; emoji sentiment, AI decomposition | Emerging: Techstars '23, $36K rev 2023, seeking seed |
| Amazing Marvin | ADHD-popular task manager; 80+ strategies | Established: ~5yr, bootstrapped, $12/mo |
| ClickUp | General PM; added ADHD view 2023 (+41% retention) | Mature: $537M+ raised |
| Shimmer | ADHD coaching; 1:1 accountability | Established: $3.5M raised, YC |
| Notion | General workspace; ADHD templates | Mature: $2.7B+ valuation |

**Q3: Product Maturity — 3 (Established)**
ADHD-specific PM space has emerging leaders but no dominant player. Leantime still seeking seed. Amazing Marvin is indie-scale. No ADHD-specific PM tool has >$10M funding or >100K paying users. General PM tools are mature but don't address delay discounting.

**Q4: ADHD User Reviews — 4 (Mixed-negative)**
Universal "app graveyard" phenomenon. Users describe dopamine hit from setup, then abandonment. Standard PM tools create "Wall of Shame" with overdue task lists. One user's strategy: rotate through 3-4 organisation methods because "nothing works long-term." Key complaint: tools manage task *structure* but not *motivational sustenance*.

**Q5: Root Cause of Failure**
1. **Future milestones don't create present motivation.** Delay discounting makes a 3-month deadline motivationally weightless. No tool translates distant rewards into immediate ones.
2. **Motivational decay undetected.** No tool monitors declining engagement and intervenes before full abandonment. Leantime's emoji sentiment tracking is nascent.
3. **No bridge between daily operations and strategic work.** ADHD users complete daily tasks (immediate consequences) while strategic projects languish (distant consequences). No tool surfaces long-term micro-tasks within daily workflow.
4. **Accountability gaps.** Human accountability (coaching, body doubling) works but is session-based, not project-lifecycle-based.

---

### FP01: Task Initiation Failure — Market Gap: 10/15

**Q1: Market Noise — 3 (Moderate)**
The general productivity space is very noisy, but *task initiation specifically* is addressed by fewer products. Body doubling platforms (Focusmate, Flown, Flow Club) address initiation via social presence. Task breakdown tools (Goblin Tools) reduce overwhelm. Gamified apps (Forest, Habitica, Finch) use external reward. The initiation-specific space is moderate, not saturated.

**Q2: Key Products**
| Product | Positioning | Maturity |
|---------|------------|----------|
| Focusmate | Body doubling; paired coworking sessions | Established: 2017, NYT/CNN coverage, Nir Eyal invested |
| Flown | Facilitated virtual coworking | Emerging: 5.0 Trustpilot, 397 reviews, $25/mo |
| Goblin Tools | AI task breakdown; "spiciness" slider | Emerging: 100K+ downloads, 4.7-4.8 stars, indie |
| Amazing Marvin | Customisable task manager; multiple strategies | Established: ~5yr, $12/mo, weak mobile |
| Numo | Gamified ADHD planner; community Squads | Emerging: Google Startups funded, 3.13 stars |
| Brain.fm | Focus music; patented audio | Established: $3.8M ARR, peer-reviewed ADHD study |

**Q3: Product Maturity — 3 (Established)**
Body doubling has established players. Goblin Tools went viral but remains indie. No single product dominates initiation specifically. Body doubling addresses initiation indirectly (social presence) rather than directly (neurological activation).

**Q4: ADHD User Reviews — 4 (Mixed-negative)**
Core complaint: tools tell you *what* or *when* but cannot make you *start*. The "app graveyard" is acute for initiation — novelty-driven motivation fades. Body doubling platforms get the most consistently positive ADHD reviews. Goblin Tools receives enthusiastic praise. But the fundamental circular dependency (needing to initiate use of the initiation tool) remains unsolved.

**Q5: Root Cause of Failure**
1. **Assume the reward system functions.** Mundane tasks don't generate sufficient dopamine to overcome the activation threshold. Tools create external *structure* but not external *activation energy*. Body doubling is the exception but requires real-time human presence.
2. **Break tasks down but can't overcome the "invisible barrier."** Many ADHD users know exactly what to do and how to start, yet still can't begin — this is executive activation failure, not a planning failure.
3. **Require self-initiated engagement.** Every app requires the user to open it — but initiation failure means the user can't initiate *anything*, including using the tool. Circular dependency.

---

### FP12: Chronic Lateness — Market Gap: 11/15

**Q1: Market Noise — 3 (Moderate)**
ADHD-specific planning tools emerging (Tiimo leads). No tool specifically and primarily targets chronic lateness as its core problem. Most address "time management" broadly with lateness as secondary benefit.

**Q2: Key Products**
| Product | Positioning | Maturity |
|---------|------------|----------|
| Tiimo | Visual daily planner; iPhone App of the Year 2025 | Established: $4.8M raised, 500K+ users |
| Brili | Routine management with visual timers | Established: $7.99/mo, no disclosed funding |
| Time Timer | Physical/digital visual timer | Mature: ~25 years, bootstrapped |
| Structured | Visual daily timeline | Established: Apple ecosystem |
| Goblin Tools (Estimator) | AI time estimation | Established: free web, 4.7/5 |

**Q3: Product Maturity — 4 (Emerging)**
ADHD-specific time/lateness market is still emerging. Tiimo leads but remains pre-Series A. No single tool dominates ADHD lateness. Highest maturity gap score of any problem.

**Q4: ADHD User Reviews — 4 (Mixed-negative)**
Visual timers provide partial benefit but users ignore them during hyperfocus. Alarm fatigue/desensitisation is universal. Routine apps help structured mornings but not ad-hoc transitions. No tool addresses "just one more thing" syndrome. Standard advice ("leave earlier") doesn't work.

**Q5: Root Cause of Failure**
1. **Notification fatigue.** ADHD users desensitise to alarms within weeks.
2. **No hyperfocus interruption.** Tools respect "do not disturb" but ADHD users in hyperfocus need assertive interruption.
3. **Transition blindness.** The gap between "I need to leave" and "I am leaving" involves underestimated micro-tasks. No tool addresses transition time.
4. **Downstream problem.** Lateness is primarily a manifestation of FP03 (time blindness). Treating symptoms without addressing upstream cause yields limited, unsustained benefit.

**⚠️ Strategic note:** FP12 has the highest raw market gap score (11) but the lowest problem score (10) in the set and is a downstream problem. Addressing FP03 upstream would capture FP12 as a secondary benefit. Standalone pursuit is questionable.

---

### FP11: Documentation Paralysis — Market Gap: 10/15

**Q1: Market Noise — 3 (Moderate)**
AI writing market is crowded (Grammarly, Notion AI, Jasper, ChatGPT). But "documentation paralysis" specifically — tools to overcome initiation barrier for admin writing — is relatively quiet.

**Q2: Key Products**
| Product | Positioning | Maturity |
|---------|------------|----------|
| Scribe | Auto process docs from screen recording | Mature: $130M raised, $1.3B valuation, 78K paying orgs |
| Notion AI | AI drafting within workspace | Mature: $2.7B+ valuation |
| Goblin Tools | Task breakdown + note compilation | Established: free, 4.7/5, indie |
| Fluidwave | AI auto-prioritisation + VA delegation | Emerging: ADHD-marketed, $10/mo |
| Focusmate | Body doubling for aversive tasks | Established: strong ADHD adoption |
| Otter.ai/Dictation | Voice-to-text bypasses writing initiation | Mature: 25M+ users |

**Q3: Product Maturity — 3 (Established)**
General AI writing tools are mature. No product targets documentation paralysis specifically. Voice-to-text + AI structuring is the closest approach but creates a new editing problem.

**Q4: ADHD User Reviews — 4 (Mixed-negative)**
AI writing tools reduce drafting friction but not initiation friction. Goblin Tools breaks tasks down but micro-step lists trigger the same avoidance. Speech-to-text is recommended by OTs but output needs editing. Body doubling works but isn't on-demand. Fundamental ceiling: "Nothing makes it NOT paperwork."

**Q5: Root Cause of Failure**
1. **Initiation vs execution confusion.** Tools help write faster/better, but the ADHD problem is *starting*, not *writing*.
2. **No emotional scaffolding.** Documentation avoidance involves perfectionism + overwhelm + shame. No tool addresses this.
3. **Voice-to-text gap.** Dictation bypasses writing initiation but creates unstructured output needing editing.
4. **FP01 dependency.** Documentation paralysis is a specific manifestation of task initiation failure (FP01). Solving FP01 likely addresses FP11.

---

### FP03: Time Estimation / Time Blindness — Market Gap: 9/15

**Q1: Market Noise — 2 (Noisy)**
Broad time management market is crowded (Google Calendar, Todoist, TickTick, Motion, Sunsama, Tiimo, etc.). ADDitude lists 42+ time management apps. However, the specific sub-problem of *time estimation calibration* — helping users learn how long tasks actually take vs how long they think — has very few dedicated solutions. The market is noisy for time management generally but quieter for time blindness specifically.

**Q2: Key Products**
| Product | Positioning | Maturity |
|---------|------------|----------|
| Time Timer | Visual countdown; gold standard for time visibility | Mature: ~25yr, bootstrapped |
| Tiimo | Visual timeline planner; ADHD-specific | Established: $4.8-6.1M raised, Apple App of the Year 2025 |
| Motion | AI auto-scheduling | Established: $13M+ raised, Series C |
| RoutineFlow | Estimated vs actual task duration tracking | Early: solo developer, v0.9.x, 15K reviews |
| Sunsama | Daily planning with time estimation prompts | Established: $2.75M seed |
| RescueTime | Background time tracking/analytics | Mature: 10+ years |
| Flown | Virtual coworking/body doubling | Emerging: 5.0 Trustpilot |

**Q3: Product Maturity — 3 (Established)**
Time Timer is 25 years old. Tiimo is the ADHD-specific leader. Motion has Series C funding. But no product dominates *time estimation calibration* specifically. RoutineFlow (solo developer, v0.9.x) is the closest to tracking estimated vs actual — still early-stage.

**Q4: ADHD User Reviews — 4 (Mixed-negative)**
Consistent frustration that tools don't address the root neurological deficit. Pomodoro imposes arbitrary rhythm. AI scheduling plans tasks but doesn't improve time perception. Visual timers address awareness but not estimation. The "47 apps deleted in 30 days" phenomenon. Positive: Tiimo gets strong ADHD love (4.8 stars); RoutineFlow users report it helped time blindness; Flown praised as rare long-term retention tool.

**Q5: Root Cause of Failure**
1. **Externalise scheduling, not perception.** Tools plan your day but don't help you feel how long 30 minutes is. They solve planning but not perception.
2. **No calibration feedback loops.** Almost no tool tracks estimated vs actual task duration and uses that data to improve future estimates. RoutineFlow is nascent.
3. **Assume consistent engagement.** Tools require the user to open and check them — but ADHD disrupts the prospective memory needed to remember to use the tool.

---

### FP07: Meeting Memory Failure — Market Gap: 8/15

**Q1: Market Noise — 2 (Noisy)**
General AI meeting market is large ($6.5B+ projected 2026). Otter.ai ($100M ARR, 25M+ users), Fireflies ($1B valuation), Fathom ($18.8M revenue), Granola ($250M valuation, $67M raised). Native AI in Zoom/Teams/Meet. **But the ADHD-specific meeting memory market is nearly empty.** Only Recallify (nascent, early-stage) attempts to address ADHD memory specifically.

**Q2: Key Products**
| Product | Positioning | Maturity |
|---------|------------|----------|
| Otter.ai | Transcription + AI summaries | Mature: $63M raised, $100M ARR, 25M+ users |
| Fireflies.ai | Meeting intelligence + CRM | Mature: $19M raised, $1B valuation |
| Fathom | Free recordings, clean UI | Established: $27M raised, $18.8M revenue |
| Granola | Bot-free desktop notepad + AI | Emerging: $67M raised, $250M valuation |
| Recallify | Voice recorder + spaced repetition for ADHD | Nascent: early-stage, clinical collabs |
| Saner.AI | AI personal assistant; meeting prep | Emerging: ADHD-marketed |

**Q3: Product Maturity — 2 (Mature)**
General meeting tools are mature (5+ years, hundreds of millions in funding). But ADHD-specific meeting tools are nascent. The score reflects the dominant general market any entrant must contend with.

**Q4: ADHD User Reviews — 4 (Mixed-negative)**
Transcripts too long (5,000-20,000+ words). No proactive resurfacing ("out of sight, out of mind"). Summaries assume partial encoding but ADHD failure can be total. No spaced repetition. Meeting bot social friction. Positive: removing dual-task burden (listen AND take notes) is consistently valued. Per Phase 3 deep dive, 7 specific ADHD gaps in existing tools identified.

**Q5: Root Cause of Failure**
**Fundamental design assumption mismatch:** All general tools assume the problem is retrieval ("I need to find what was said"). The ADHD problem is encoding ("my brain never stored it"). This means transcripts compensate for the wrong failure, summaries assume partial encoding when ADHD failure can be total, and action items are extracted but not scaffolded against prospective memory failure.

---

### FP09: Email Management Failure — Market Gap: 8/15

**Q1: Market Noise — 2 (Noisy)**
Email productivity market is large. Superhuman acquired by Grammarly (July 2025). SaneBox (15+ years, profitable). Shortwave, Clean Email, Spark, Boomerang. AI writing market projected $12.3B by 2032. **Zero ADHD-specific email tools addressing prospective memory failure.**

**Q2: Key Products**
| Product | Positioning | Maturity |
|---------|------------|----------|
| Superhuman/Grammarly | Speed-focused email; Split Inbox, AI replies | Mature: $118M raised, acquired July 2025 |
| SaneBox | AI sorting behind existing client | Mature: 15+ years, self-funded, 4.9/5 G2 |
| Shortwave | AI Gmail client by ex-Google Inbox team | Established: $7-14/mo |
| Boomerang | Scheduling + follow-up reminders | Mature: 16+ years |
| Clean Email | Bulk inbox cleanup | Established: decision-heavy |
| *No ADHD-specific tool* | — | — |

**Q3: Product Maturity — 2 (Mature)**
Superhuman/Grammarly, SaneBox, and Boomerang are mature and feature-complete. Gmail and Outlook dominate the client market. Extreme barriers for new general email entrants. But zero ADHD-specific products.

**Q4: ADHD User Reviews — 4 (Mixed-negative)**
No email tool gets consistently positive ADHD reviews. SaneBox creates out-of-sight-out-of-mind folder traps. Superhuman assumes the user is already in their inbox. Clean Email's decision-heavy approach is poorly suited. ADHD users cycle through email tools, finding temporary relief then abandoning.

**Q5: Root Cause of Failure**
**No tool addresses "read it, intended to reply, forgot."** Existing tools focus on: volume reduction (SaneBox), processing speed (Superhuman), composition assistance (Shortwave), and visual overwhelm reduction (bundling). None track reply intentions or surface forgotten prospective memory items. The four-layer convergence (prospective memory + initiation + decision fatigue + emotional avoidance) means single-feature solutions are insufficient.

---

### FP05: Prioritisation Failure — Market Gap: 8/15

**Q1: Market Noise — 2 (Noisy)**
Prioritisation is embedded in virtually every productivity tool. Eisenhower matrix in dozens of products. General PM tools (Asana, Notion, Trello, Todoist) all offer priority levels. AI auto-scheduling (Motion, Fluidwave, Reclaim) is growing. Very noisy at the general level.

**Q2: Key Products**
| Product | Positioning | Maturity |
|---------|------------|----------|
| Motion | AI auto-scheduling by priority | Established: $13M+ raised, Series C |
| Fluidwave | AI auto-prioritisation; ADHD-focused | Early: Web Summit 2025, funding undisclosed |
| Todoist | Priority levels, 90+ integrations | Mature: 10+ years |
| Sunsama | Guided daily planning, overload warnings | Established: $2.75M seed |
| Amazing Marvin | Customisable strategies incl. Eisenhower | Established: ~5yr, $12/mo |
| Notion/Trello/Asana | General PM with priority features | Mature: $2.7B+/$5B+/public |

**Q3: Product Maturity — 2 (Mature)**
Most mature market in the set. General PM tools 5-15+ years old with massive distribution. AI scheduling (Motion, Reclaim/Dropbox) well-funded. Any new entrant must differentiate against deeply entrenched products.

**Q4: ADHD User Reviews — 4 (Mixed-negative)**
Core complaint: tools require the very skill that is broken. Eisenhower matrix assumes ability to distinguish urgent/important, but ADHD brains respond to interest/novelty/immediacy. Tools showing all tasks simultaneously trigger decision paralysis. Positive: Motion's one-click "Reschedule All" gets praise; Amazing Marvin's strategy rotation combats novelty-seeking.

**Q5: Root Cause of Failure**
1. **Require users to assign priority** — the exact skill ADHD impairs.
2. **Static priority in a dynamic attention landscape** — P1 on Monday morning may be neurologically inaccessible on Monday afternoon.
3. **Present all options, triggering overwhelm** — even filtered by priority, seeing 20+ items causes paralysis.
4. **Miss procrastivity** — no tool detects doing easy tasks instead of important ones.

---

### FP02: Inconsistent Focus — Market Gap: 7/15

**Q1: Market Noise — 1 (Very noisy)**
The most saturated segment. Pomodoro timers, ambient music, distraction blockers, body doubling, gamified focus, AI attention aids. One review site tested 44 ADHD apps. Nearly every productivity app claims to help with focus. Differentiation is extremely difficult.

**Q2: Key Products**
| Product | Positioning | Maturity |
|---------|------------|----------|
| Brain.fm | AI focus music; peer-reviewed ADHD study | Emerging: $3.8M ARR, patented |
| Tiimo | Visual planner; App of the Year 2025 | Established: $5.99M raised |
| Forest | Gamified focus timer | Mature: millions of users |
| Focusmate | Body doubling | Established: 5-star Trustpilot |
| Freedom | Cross-device distraction blocker | Mature: 14+ years |
| Inflow | CBT-based ADHD management | Established: $13.3M raised |
| RescueTime | Automatic time tracking | Mature: 17+ years |

**Q3: Product Maturity — 2 (Mature)**
Multiple mature players (Forest, RescueTime, Freedom: all 5+ years). Well-funded ADHD challengers (Tiimo, Inflow). Brain.fm has peer-reviewed validation. Difficult market to enter.

**Q4: ADHD User Reviews — 4 (Mixed-negative)**
Pomodoro failures extensively documented ("25 minutes is arbitrary"). Novelty decay cycle is well-described. "Different approaches work on different days" — the variability problem. Guilt mechanics backfire. Positive: Brain.fm, body doubling platforms, and Tiimo get genuine praise.

**Q5: Root Cause of Failure**
1. **Fixed-interval fallacy** — can't adapt to unpredictable oscillation between zero productivity and hyperfocus.
2. **Novelty decay** — single-mechanism tools lose effectiveness when novelty wears off.
3. **Wrong unit of analysis** — tools address individual sessions, not day-to-day variability.
4. **Guilt mechanics backfire** — dying trees, streak-breaking, and overdue counts create shame spirals.
5. **No tool adapts to current attention state** — the variability problem is unaddressed.

---

### FP04: Deadline Misses — Market Gap: 7/15

**Q1: Market Noise — 2 (Noisy)**
Deadline management is a core feature of virtually every PM and task tool. AI scheduling alone has 4+ funded players (Motion, Reclaim/Dropbox, Morgen, Akiflow).

**Q2: Key Products**
| Product | Positioning | Maturity |
|---------|------------|----------|
| Motion | AI auto-scheduling; at-risk warnings | Established: $13M+ raised |
| Reclaim.ai/Dropbox | AI calendar optimisation | Mature: $9.5M raised, acquired Aug 2024 |
| Due | Persistent reminders (auto-snooze) | Mature: 5+ years |
| Tiimo | Visual planner with countdown | Established: $4.8M raised |
| Akiflow | Unified inbox + calendar | Emerging: $2.3M raised (YC) |

**Q3: Product Maturity — 2 (Mature)**
Dominated by mature players. Reclaim acquired by Dropbox. Motion at Series C. Traditional tools (Todoist, Google Calendar) have decades of refinement. AI scheduling improving rapidly.

**Q4: ADHD User Reviews — 3 (Mixed)**
More balanced than other problems. Motion users report it's "invaluable." Sunsama described as "second only to my meds." Due's persistent reminders solve "reminder blindness." But standard reminders don't address *why* deadlines are missed (upstream causes). Key insight: tools that automate and reduce decisions are better reviewed than tools that merely remind.

**Q5: Root Cause of Failure**
1. **Reminders notify but don't activate.** Awareness ≠ action for ADHD users.
2. **Time estimation unsolved.** AI schedulers require user time estimates, which ADHD users systematically understate.
3. **Cascading from upstream.** FP04 is a receiving problem from FP01, FP02, FP03, FP05. Addressing only the deadline layer provides partial benefit.
4. **Reactive, not predictive.** At-risk detection comes when the problem is already materialising.

**⚠️ Strategic note:** FP04 is better served as a downstream benefit of solving upstream problems (FP01, FP03, FP05) than as a standalone product target.

---

### FP06: Attention-to-Detail Errors — Market Gap: 6/15

**Q1: Market Noise — 2 (Noisy)**
Crowded across writing (Grammarly: $13B, 30M+ DAU) and code (GitHub Copilot, ESLint, SonarQube). Static code analysis market $1.0-1.5B.

**Q2: Key Products**
| Product | Positioning | Maturity |
|---------|------------|----------|
| Grammarly | AI grammar/style/tone; acquired Superhuman + Coda | Mature: $13B valuation, $700M+ ARR, 30M+ DAU |
| GitHub Copilot | AI code review; 1M+ devs in first month | Mature: Microsoft-backed |
| ESLint | JavaScript linter | Mature: 76M+ weekly npm downloads |
| SonarQube | Code quality inspection | Mature: enterprise standard |

**Q3: Product Maturity — 1 (Consolidated)**
Grammarly and GitHub Copilot effectively own their categories. 10+ years old, feature-complete, massive distribution. Extreme barriers for new entrants.

**Q4: ADHD User Reviews — 3 (Mixed)**
Tools work adequately — ADHD users describe Grammarly as "one of the most helpful electronic tools." The tools are not ADHD-differentiated but they function. The gap is in more aggressive, proactive checking (mandatory review gates, fatigue-aware intensification) — but this is a narrow feature gap, not a product opportunity.

**Q5: Root Cause of Failure**
1. **Passive detection.** Tools wait for submission rather than proactively intervening at high-error-risk moments.
2. **No ADHD-specific error pattern learning.** Don't adapt checking intensity to individual error patterns.
3. **No fatigue awareness.** Don't adjust based on time of day or session length.

**⚠️ Strategic note:** Market is consolidated. The ADHD-specific gap is narrow and better addressed as a feature within a broader platform than as a standalone product.

---

## Strategic Synthesis

### Tier 1: Highest Opportunity (Combined ≥22, meaningful gap)

| Problem | Combined | Market Gap | Key Opportunity |
|---------|----------|------------|-----------------|
| **FP01: Task Initiation** | 24 | 10 | Circular dependency unsolved; body doubling works but requires humans; no tool provides automated activation energy |
| **FP03: Time Blindness** | 23 | 9 | Time estimation calibration is greenfield; no tool closes estimated-vs-actual loop; perception vs planning distinction unaddressed |
| **FP08: Project Neglect** | 22 | 10 | Delay discounting mechanism completely unaddressed; motivational decay detection is novel; no bridge from daily ops to strategic work |

### Tier 2: Notable Opportunity (Combined 19-21, specific gaps)

| Problem | Combined | Market Gap | Key Opportunity |
|---------|----------|------------|-----------------|
| **FP05: Prioritisation** | 21 | 8 | Interest-based nervous system unaccounted for; procrastivity undetected; but mature/noisy market is a barrier |
| **FP12: Chronic Lateness** | 21 | 11 | Highest raw market gap but downstream problem; better captured by solving FP03 |
| **FP02: Inconsistent Focus** | 20 | 7 | Variability-adaptive attention is novel; but most saturated market; high risk |
| **FP11: Documentation** | 20 | 10 | Initiation barrier is real but may have software ceiling; strong FP01 dependency |

### Tier 3: Lower Priority (Combined ≤19, narrow or crowded gaps)

| Problem | Combined | Market Gap | Key Opportunity |
|---------|----------|------------|-----------------|
| **FP07: Meeting Memory** | 19 | 8 | Encoding-deficit design is novel; ADHD-specific market empty; but general market very mature |
| **FP09: Email Management** | 19 | 8 | Prospective memory for reply intentions is novel; but email market consolidating under Grammarly/Superhuman |
| **FP04: Deadline Misses** | 17 | 7 | Better as downstream benefit; AI scheduling improving rapidly |
| **FP06: Detail Errors** | 16 | 6 | Consolidated market; narrow gap; feature not product |

### Cross-Cutting Insight: The Prospective Memory Platform

Both FP07 and FP09 (plus aspects of FP08 and FP11) are driven by **prospective memory failure** — the inability to remember to do things in the future. No product in any market addresses this as a primary mechanism. A product that proactively resurfaces forgotten intentions across contexts (meeting action items, email replies, project micro-tasks, documentation deadlines) could address multiple problems simultaneously rather than competing in any single noisy vertical.

### Market Entry Risk Assessment

| Risk Factor | FP01/FP03/FP08 | FP07/FP09 | FP02/FP05 |
|-------------|----------------|-----------|-----------|
| General market noise | Moderate | High | Very high |
| ADHD-specific competition | Low | Very low | Low |
| Well-funded incumbents | Moderate (Motion, Tiimo) | High (Otter, Grammarly) | Very high (Notion, Asana) |
| Technical feasibility | Moderate | Moderate | High (variability detection hard) |
| Distribution | Can target ADHD community directly | Must differentiate vs free general tools | Crowded acquisition channels |

---

## Sources Consulted

### Market & Funding Data
- Crunchbase/Tracxn/PitchBook: Tiimo, Motion, Otter.ai, Fireflies, Fathom, Granola, Inflow, Leantime, Shimmer, Reclaim.ai, Focusmate, Akiflow, Brain.fm
- TechCrunch: Grammarly ($1B funding May 2025, Superhuman acquisition July 2025), Inflow Series A, Reclaim/Dropbox acquisition, Scribe Series C
- Sacra: Otter.ai ($100M ARR), Grammarly ($700M+ ARR)
- Business Research Insights / The Business Research Company: ADHD apps market sizing

### ADHD Community & Reviews
- ADDitude Magazine: surveys (n=1,859), app listings, assistive technology guides
- Reddit r/ADHD: secondary analyses of community discussions
- G2/Capterra/Trustpilot: Product reviews (SaneBox 4.9/5, Focusmate 5.0, Flown 5.0)
- App Store/Google Play: Star ratings and review counts

### Scientific Sources
- Communications Biology (2024): Brain.fm ADHD focus study
- Scientific Reports (2025): Time monitoring and prospective memory in ADHD
- Prevatt et al. (2011): Time estimation in college students with ADHD
- Phase 3 deep dives: P3A (email/prospective memory), P3B (meeting/encoding deficit)

---

## Limitations

1. **Market noise scores conflate general and ADHD-specific markets.** For FP07 and FP09, the general market is noisy (score 2) while ADHD-specific is nearly silent (score 5). Composite scores may understate ADHD-specific opportunity.
2. **No primary user research.** All ADHD user sentiment synthesised from secondary sources.
3. **Funding data incomplete.** Some companies (SaneBox, Brili, Goblin Tools) don't publicly disclose funding.
4. **Rapid market change.** Grammarly-Superhuman-Coda consolidation, Dropbox-Reclaim acquisition, native AI in Zoom/Teams — market positions may shift within months.
5. **Reddit threads accessed via secondary summaries.** Direct community sentiment reconstructed from aggregated analyses.
6. **Temporal snapshot.** Market data as of February 2026. AI-powered tools launching frequently.
