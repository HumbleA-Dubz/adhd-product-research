# L2: Engagement Models

**Layer 2 of the ADHD Product Choice-Space Map**
**Date:** 2026-02-10

---

## Methodology Note

This document maps the structurally distinct ways a product could engage ADHD users around workplace problems. It sits between Layer 1 (problem clusters -- which functional problems are we addressing?) and Layer 3 (implementation requirements -- what must be built?).

An engagement model describes the **structural relationship between the user and the product**: when interaction occurs, who initiates it, what effort the user expends, and what the product does without user input. These are categories of interaction pattern, not features or solutions.

**Extraction method:** Models were identified by analysing engagement patterns across all solutions described in S7 (Solution Scoring), S10 (Final Report), S6 Supplement (App Landscape), P2B (Tool Failures), P2C (Practitioner Perspectives), and S9 (Emerging Technology Assessment). Patterns were grouped by structural similarity across four dimensions. Where two patterns shared the same dimensional profile but differed only in surface domain (e.g., email vs. meeting), they were merged into one model.

**Four characterisation dimensions:**

| Dimension | Spectrum |
|-----------|----------|
| **A: Initiation** | User-initiated <---------> Product-initiated |
| **B: Effort** | High effort <---------> Zero effort |
| **C: Timing** | Before problem <---> During problem <---> After problem |
| **D: Continuity** | Separate surface <---------> Embedded in existing tools |

**Eight engagement models were identified.** One additional gap was considered and rejected (see Section 10).

---

## Model 1: Ambient Monitor and Intervene

### Description

The product continuously observes the user's work activity in the background, detects when a problematic state occurs (stalling, context-switching, time overrun), and intervenes proactively. The user does not request help -- the product recognises the need and acts. Intervention is graded: starting with the lightest touch and escalating only if the problem persists.

### Dimensional Position

| Dimension | Position | Rationale |
|-----------|----------|-----------|
| **A: Initiation** | Strongly product-initiated | System detects problematic state and intervenes without user request |
| **B: Effort** | Near-zero effort | User responds to interventions but need not initiate, configure, or maintain anything during use |
| **C: Timing** | During problem | Detects the problem as it happens (stalling, overrun) and intervenes in real-time |
| **D: Continuity** | Embedded (requires desktop agent or browser extension) | Monitors within the user's existing work environment; no separate app to open |

### Retention Profile

Retention does not depend on habit formation. The system runs in the background after initial setup. However, retention depends on **intervention quality** -- if nudges become ignorable or poorly timed, the tool degrades into another notification to dismiss. Variable delivery and AI-personalised timing are essential defences against nudge fatigue. The corpus flags this as the primary risk: "if nudges become ignorable, the tool joins the app graveyard" (S7, Activation Engine).

### Habit-Formation Burden

Minimal. User must accept the product running in the background and must occasionally respond to interventions. No new workflows, no daily check-ins, no data entry. The burden is accepting surveillance-like monitoring of work activity, not learning a new behaviour.

### Data Access Requirements

- Desktop/browser activity (to detect stalling, context-switching, time-on-task)
- Calendar (to know what the user should be working on)
- Task/project tool (to understand current priorities)
- Optionally: meeting schedule, email state (to contextualise interventions)

### User Trust Requirements

**High.** The user must trust the product to monitor their screen activity and work patterns continuously. This is the most privacy-sensitive model. On-device processing (S9, Section 2.2) is essential to mitigate privacy concerns. The user must also trust that the product will not become a source of surveillance anxiety -- the "someone is watching me" effect must be balanced against the "someone is helping me" effect.

### Preliminary Layer 3 Requirements

| Category | What is needed |
|----------|---------------|
| Data processing | Activity stream ingestion, stall/context-switch detection heuristics |
| AI/ML models | Stall detection (distinguishing "stuck" from "thinking"); personalised intervention timing; nudge content generation |
| Logic/rules | Escalation model (nudge -> micro-step -> body double -> scaffold); suppression rules (do not interrupt meetings, deep focus) |
| Real-time systems | Low-latency detection-to-intervention pipeline |
| Interfaces | Notification/overlay system for delivering interventions non-disruptively |
| Integrations | Calendar API, task tool API, desktop agent or browser extension |
| Permissions/access | Screen activity monitoring permission; calendar read access; task tool read access |
| Design patterns | Variable intervention delivery to combat notification fatigue; non-shaming tone |

### Evidence from Corpus

- **Effectiveness:** AI body doubling research shows 27-33% increase in sustained attention and 21% improvement in task completion speed (S9, Section 7.1, VR study -- Tier 2, small sample). Regular accountability check-ins increase goal achievement from 25% to 95% (S9, Section 7.1 -- evidence quality not specified). Body doubling helps ADHD brains complete 37% more tasks (S9, Section 7.1).
- **Failure modes:** Users report becoming desensitised to notifications and reminders: "I soon become desensitized to them and stop paying attention" (P2B, Google Calendar section, Tier 3 community report). The circular dependency (must initiate use of initiation tool) is partially solved by always-on background operation (S7, FP01 key risk).
- **User demand:** Users want "tools that intervene before we get stuck, not assistants waiting for us to remember to ask" (P2B, "What Users Want" #3, Tier 3).

---

## Model 2: Passive Capture and Structured Delivery

### Description

The product automatically captures information from a communication channel (meetings, email, chat) that the user would otherwise fail to retain, then processes it and delivers structured summaries and extracted commitments. The user does not actively capture anything -- they participate in meetings, read emails, and have conversations exactly as before. The product compensates for encoding or prospective memory failure by creating an external record and delivering it proactively.

### Dimensional Position

| Dimension | Position | Rationale |
|-----------|----------|-----------|
| **A: Initiation** | Strongly product-initiated | Capture is automatic; delivery is proactive (before relevant meetings, at deadlines) |
| **B: Effort** | Zero effort | User changes nothing about how they work; product runs entirely in background |
| **C: Timing** | After problem (captures during, delivers after) | Captures content during meetings/email; delivers structured output and resurfaces commitments at relevant future moments |
| **D: Continuity** | Embedded (integrates with meeting platform, email client) | Works as a layer on existing communication tools, not a separate surface |

### Retention Profile

Strongest retention profile of any model. Does not depend on habit formation at all -- scored 5/5 on behavioural change in both solutions using this model (S7: Encoding Compensator, Prospective Memory Platform). The product's value compounds over time as the commitment database and knowledge graph grow. The corpus identifies this as one of the few architectures where the "app graveyard" problem may be structurally mitigated (S9, Section 9.1; S10, Prospective Memory Platform).

### Habit-Formation Burden

None. The user communicates exactly as before. No new behaviour, no check-ins, no tagging, no filing. The entire value proposition is that the user does not need to change anything (S7, Encoding Compensator Q2: "the user doesn't need to change any meeting behaviour").

### Data Access Requirements

- Meeting audio/transcripts (via Zoom, Teams, Meet APIs or local capture)
- Email (Gmail/Outlook API -- read state, threading, reply detection)
- Optionally: Slack/Teams messages, calendar (for contextual resurfacing)
- For the full Prospective Memory Platform variant: all of the above simultaneously

### User Trust Requirements

**Very high.** The product reads all meetings, emails, and potentially chat messages. Users must trust that (a) content is processed privately, (b) extracted commitments are accurate, and (c) the product will not surface embarrassing or sensitive content at the wrong moment. Email is "deeply personal -- users are wary of giving tools access to their inbox" (S7, FP09 key risk). On-device processing is essential. Positioning as "your private memory assistant" rather than surveillance is critical (S10, Prospective Memory Platform).

### Preliminary Layer 3 Requirements

| Category | What is needed |
|----------|---------------|
| Data processing | Multi-channel ingestion (meeting transcript, email, chat); commitment extraction NLP |
| AI/ML models | Commitment identification (explicit: "I'll send that by Friday"; implicit: read-but-not-replied); ADHD-optimised summarisation; contextual relevance scoring for resurfacing |
| Logic/rules | Resurfacing trigger logic (before meeting with person X, approaching deadline, related project opened) |
| Storage/structure | Knowledge graph for entities, commitments, relationships (S9, Section 9.1: GraphRAG + MCP Knowledge Graph) |
| Real-time systems | Meeting transcript processing (near-real-time for post-meeting delivery) |
| Interfaces | Summary delivery surface; commitment dashboard; spaced-repetition check-ins |
| Integrations | Meeting platform API, email API (Gmail/Outlook), calendar API, optionally Slack/Teams, task tools |
| Permissions/access | Meeting recording consent; email read access; calendar read access |
| Design patterns | Non-shaming language; progressive nudges; "reply queue" separate from inbox |

### Evidence from Corpus

- **Effectiveness:** 75-81% encoding impairment prevalence in ADHD (S10, Encoding Compensator -- Tier 1, neural evidence). in one naturalistic task, 52% of ADHD adults forgot to perform it vs. 21% of controls, though no group differences were found on laboratory-based tasks (Altgassen et al. 2019; note: these percentages are not sourced from S10 or S8). Medication does not normalise encoding or prospective memory deficits (S10 -- Tier 1). Meeting AI transcription accuracy at 95-99% (S9, Section 5.1 -- production data).
- **Failure modes:** Meeting bot social friction for self-conscious ADHD users -- local-capture model preferred (S7, FP07 key risk; Granola's bot-free approach validates this). False positives in commitment extraction erode trust; false negatives defeat purpose (S7, Prospective Memory Platform key risk). Cold start problem: value builds as commitment database populates (S7).
- **Market validation:** Zero ADHD-specific tools exist for meeting memory or email management (S6 Supplement, Gap Assessment). Otter.ai at $100M ARR and Fireflies at $1B valuation prove the general meeting-capture market is real, but no product addresses ADHD-specific encoding deficit or cross-channel commitment tracking (S10, competitor tables).

---

## Model 3: Modality Shift

### Description

The product changes the input modality of a task from one that triggers ADHD-related barriers (typically writing) to one with a lower activation threshold (typically speaking). The user performs the same cognitive work but through a different channel. The product then transforms the lower-friction output into the required professional format.

### Dimensional Position

| Dimension | Position | Rationale |
|-----------|----------|-----------|
| **A: Initiation** | User-initiated (optionally product-prompted) | User decides to dictate; product can prompt ("You have a status report due -- ready to talk through it?") |
| **B: Effort** | Moderate effort | User must actively speak through the content; this is easier than writing but still requires cognitive engagement |
| **C: Timing** | During problem | Used at the moment the user faces the documentation/composition task |
| **D: Continuity** | Separate surface (standalone app) but can be optionally embedded | Core value is standalone (open app, tap record, talk); enhanced by calendar integration for prompting |

### Retention Profile

Moderate. Usage depends on the user encountering the specific problem (documentation tasks) and choosing this tool over their default avoidance behaviour. Does not compound over time -- each use is independent. Risk: the "editing the AI output may re-trigger the same paralysis" ceiling identified in S7 (FP11 key risk). If output quality is insufficient, the tool creates a two-step problem (dictate then edit) rather than solving the one-step problem (write).

### Habit-Formation Burden

Moderate. The user must learn to "talk through" work rather than write it -- a genuine modality change. "Speaking about work in a quasi-professional way (even if rambling) is a learned skill" (S7, FP11 Q2). This builds on an existing capability (people talk about their work naturally) but applying it to documentation requires practice. Scored 3/5 on behavioural change (S7).

### Data Access Requirements

- Microphone access
- Optionally: calendar (to prompt when documentation is due)
- Optionally: document output targets (Google Docs, Notion, email) for delivery

### User Trust Requirements

**Low to moderate.** The user must trust the product with their voice recordings and the content of their documentation. Less sensitive than email/meeting monitoring since the user controls exactly what they say. However, workplace documentation may contain confidential project details. On-device processing removes most trust concerns.

### Preliminary Layer 3 Requirements

| Category | What is needed |
|----------|---------------|
| Data processing | Speech-to-text transcription (Whisper API or equivalent, 95-99% accuracy) |
| AI/ML models | Unstructured-speech-to-structured-document transformation; template matching; tone/format adaptation |
| Logic/rules | Template library (status report, meeting notes, email draft, etc.); format detection |
| Interfaces | One-tap voice recording interface; document review/edit surface; output format selector |
| Integrations | Optionally: calendar API (for prompting), document platform APIs (for output delivery) |
| Design patterns | "No blank page" UX -- the starting state must be a record button, not an empty document; minimal editing required post-transformation |

### Evidence from Corpus

- **Effectiveness:** Transcription accuracy at 95-99% (S9, Section 5.1 -- production data). Granola and Wispr Flow prove "speech to structured output" is production-ready (S9). Voice capture is consistently listed as a user want: "low-friction capture -- voice input, quick capture, minimal steps to add tasks" (P2B, "What Users Want" #2, Tier 3).
- **Failure modes:** Cannot dictate in open offices; whisper mode or text fallback needed (S7, FP11 key risk). AI commoditisation risk: ChatGPT voice mode exists (S7). Editing the AI output may re-trigger paralysis (S7). Documentation remains inherently aversive, capping willingness-to-pay (S7).
- **Market data:** Zero ADHD-specific documentation tools exist (S6 Supplement, Gap Assessment). Voice capture tools are fragmented with no ADHD-specific leader (S6 Supplement, Section 5.3). Discreet voice input is an emerging capability (Subtle Computing, $6M seed -- S9, Section 5.2).

---

## Model 4: Intelligent Reordering / Decision Reduction

### Description

The product sits as a layer on top of the user's existing task/information system and reorders, filters, or selects what to present based on the user's current cognitive state, energy, and neurological accessibility -- not just static priority. Instead of showing the full task list (which causes decision paralysis), the product surfaces one or a few items the user is most likely to actually do right now. The user's job is reduced from "decide what to do from 50 items" to "do this one thing."

### Dimensional Position

| Dimension | Position | Rationale |
|-----------|----------|-----------|
| **A: Initiation** | Balanced -- user opens the tool but product decides what to show | User initiates by checking tasks; product initiates by choosing which task to surface |
| **B: Effort** | Low effort | User must occasionally provide feedback (did you do this? was it right?) to improve the algorithm, but the core interaction is receiving a suggestion, not making a decision |
| **C: Timing** | Before problem | Intervenes at the decision point before task initiation failure occurs |
| **D: Continuity** | Embedded (layer on existing task tool) | Sits on top of Todoist, Notion, Asana, etc. -- does not replace the task system |

### Retention Profile

Moderate to good. Retention improves as the algorithm learns the user's patterns, creating mild switching cost. However, the user must still open or check the tool, which is the "out of sight, out of mind" problem identified in P2B as the fundamental failure: "those apps will NEVER WORK because you have to remember to look at them" (P2B, Core Pattern #2, Tier 3). Mitigated if the reordered view is pushed to the user (e.g., morning notification with top task) rather than requiring pull.

### Habit-Formation Burden

Low. "The only new behaviour is trusting the system's task suggestion rather than scanning the full list -- which is actually easier than their current approach" (S7, FP05 Q2). User keeps their existing task tool entirely. Must occasionally provide feedback to improve the algorithm. The "one task at a time" pattern is proven to reduce overwhelm (S6 Supplement: Neurolist).

### Data Access Requirements

- Task tool integration (read and reorder tasks)
- Optionally: calendar (time-awareness), energy/mood tracking data, time-of-day patterns
- Task characteristic data (novelty, complexity, stimulation level -- AI-inferred or user-tagged)

### User Trust Requirements

**Moderate.** The user must trust the product to make good task selection decisions -- trusting an algorithm over their own judgment. The tension between "neurologically accessible" and "actually important" is real: "stakeholders/employers want the important thing done, not just any thing done" (S7, FP05 key risk). Trust erodes if the product consistently surfaces unimportant tasks.

### Preliminary Layer 3 Requirements

| Category | What is needed |
|----------|---------------|
| Data processing | Task list ingestion from external tools; task characteristic inference |
| AI/ML models | Dynamic reordering algorithm balancing importance vs. neurological accessibility; procrastivity detection; energy/time-of-day pattern learning |
| Logic/rules | Procrastivity escalation (if user completes low-priority tasks while high-priority ones stagnate, surface micro-entry-point for avoided task) |
| Storage/structure | User pattern data (completion patterns, energy cycles, time-of-day preferences) |
| Interfaces | Simplified task presentation (ideally single-task view); feedback mechanism |
| Integrations | Deep integration with specific task platforms (Todoist, Notion, Asana, etc.) |
| Design patterns | "Show one task at a time" anti-overwhelm pattern; non-judgmental tone when surfacing avoided tasks |

### Evidence from Corpus

- **Effectiveness:** Interest-based nervous system is well-documented -- ADHD brains activate on urgency, novelty, and interest rather than importance (S6 Supplement, Section 4; P2C, Tier 1-2). Users want "reduced decisions, not more options -- the next best step, not a demanding list of decisions" (P2B, "What Users Want" #4, Tier 3). The "one task" pattern (Neurolist) is praised for anti-overwhelm design (S6 Supplement, Tier 2 app table).
- **Failure modes:** Tools that show everything create decision paralysis: "overwhelming number of functions triggers avoidance rather than action" (P2B, Notion section, Tier 3). Tasks accumulate and create shame spirals: "73 overdue tasks glaring at me" (P2B, Core Pattern #3, Tier 3). The algorithm must bridge "what you can do" with "what you should do" -- this tension is unresolved (S7, FP05 key risk).
- **Market data:** No existing tool addresses the interest-based nervous system mechanism (S6 Supplement, Gap Assessment). AI auto-scheduling (Motion, $75M raised) is the closest adjacent category but does not account for ADHD-specific activation patterns (S6 Supplement, Section 5.3).

---

## Model 5: Calibration Feedback Loop

### Description

The product collects data on the user's actual behaviour (how long tasks take, when energy peaks, how accurately they estimate), compares it against the user's own predictions or plans, and feeds back the discrepancy to build self-awareness over time. The product does not do the work or make decisions -- it holds up a mirror that the ADHD brain cannot hold up for itself. The value is in calibrating the user's internal model against reality.

### Dimensional Position

| Dimension | Position | Rationale |
|-----------|----------|-----------|
| **A: Initiation** | Balanced -- user provides estimates, product provides feedback | User must engage at the estimation point; product delivers calibration data |
| **B: Effort** | Moderate effort | User must estimate task duration before starting -- a new micro-habit (<10 seconds per task). Must also acknowledge "time elapsed" notifications. |
| **C: Timing** | Before and during problem | Estimation prompt occurs before the task; real-time time-awareness occurs during the task; calibration feedback occurs after |
| **D: Continuity** | Partially embedded (integrates with calendar) but requires own time-tracking surface | Calendar integration for commitment awareness, but the estimation/feedback loop is a new interaction layer |

### Retention Profile

Improves over time as calibration data accumulates -- "calibration accuracy is low initially" (S7, FP03 Q3). This creates a compounding value curve similar to knowledge graphs but dependent on the user maintaining the estimation habit. If the user stops estimating, the loop breaks entirely and the tool becomes useless. The "cold start" problem is real.

### Habit-Formation Burden

Moderate. "Requires the user to estimate task duration before starting -- a new micro-habit" (S7, FP03 Q2). ADHD users may resist estimation prompts because they "just want to start" (S7). The estimation prompt must be extremely low-friction (e.g., one-tap selection: [15m] [30m] [1h] [2h+]). Scored 3/5 on behavioural change (S7).

### Data Access Requirements

- Calendar (to know commitments and time blocks)
- Timer/activity tracking (to measure actual time spent)
- Historical estimation data (to calculate personal bias patterns)
- Optionally: task tool integration for richer context

### User Trust Requirements

**Low to moderate.** The user must trust the product with their time-tracking data, which reveals productivity patterns including unproductive periods. Less sensitive than communication monitoring but may expose patterns the user prefers not to see (e.g., "you typically spend 40% of your day on tasks you estimated at 10%").

### Preliminary Layer 3 Requirements

| Category | What is needed |
|----------|---------------|
| Data processing | Estimation-vs-actual tracking; pattern analysis across tasks |
| AI/ML models | Personal estimation bias model (learns individual patterns); downstream risk prediction ("this overrun will cause you to miss your 3pm meeting") |
| Logic/rules | Real-time overrun alerts; commitment conflict detection |
| Storage/structure | Historical estimation and actual-time data per task |
| Interfaces | Low-friction estimation prompt (one-tap); real-time "time elapsed" display; calibration dashboard showing personal patterns |
| Integrations | Calendar API (commitments); optionally task tool API |
| Design patterns | Non-shaming feedback on estimation errors; celebrating calibration improvement over time |

### Evidence from Corpus

- **Effectiveness:** Time blindness is tied for highest problem score (14/15, S10 funnel). It is a neurological difference in time perception, not a character flaw (P2C, Tier 1-2). Practitioners consistently prioritise time management first because of cascading effects (P2C: "Time management difficulties underlie multiple other workplace problems"). RoutineFlow (indie, early-stage) is attempting the estimation-vs-actual loop, confirming the approach is viable but not trivial (S7, FP03 Q1).
- **Failure modes:** "The estimation prompt creates friction that ADHD users may resist or skip. If users don't estimate, the calibration loop breaks" (S7, FP03 key risk). Pomodoro technique failure is instructive: externally-imposed time structures can interrupt productive hyperfocus and create "2 opportunities for failure an hour" (P2B, Pomodoro section, Tier 3). The estimation prompt must be lighter than Pomodoro's imposed structure.
- **Market data:** Estimation calibration is greenfield -- gap score 9/15 (S10, funnel table). Several visual timer/planner tools exist (Tiimo, Llama Life) but "no tool provides real-time 'time elapsed' awareness during tasks" (S6 Supplement, Section 4).

---

## Model 6: Periodic Injection into Existing Workflow

### Description

The product monitors long-term patterns (project engagement decay, declining activity on a commitment) and periodically injects small, concrete action items into the user's existing daily task flow. The user does not go to the product -- the product comes to the user by inserting micro-tasks into whatever system the user already checks. The injected items are designed to be low-activation-energy (5-15 minutes) and to bridge the gap between the user's present state and a neglected long-term obligation.

### Dimensional Position

| Dimension | Position | Rationale |
|-----------|----------|-----------|
| **A: Initiation** | Strongly product-initiated | Product detects decay/neglect and injects tasks without user request |
| **B: Effort** | Low effort per interaction | Each injected micro-task is designed to require 5-15 minutes and minimal activation energy; however, the user must act on it |
| **C: Timing** | Before problem (preventive) | Intervenes when engagement is declining but before full abandonment |
| **D: Continuity** | Embedded (injects into existing task/daily flow) | Tasks appear in the user's existing task manager or daily planning tool, not in a separate surface |

### Retention Profile

Does not depend on habit formation -- the product pushes to the user. However, retention depends on the quality of injected micro-tasks. If they are generic ("check on Project X"), the tool becomes another ignored reminder. If they are specific and genuinely useful ("review the three data points Sarah sent for the Q3 report"), they have value. The corpus flags this: "if the AI-generated micro-tasks aren't genuinely useful, the tool becomes another ignored reminder" (S7, FP08 key risk).

### Habit-Formation Burden

Minimal for the user. The user does not need to remember to check on long-term projects -- the system does this for them. The only requirement is acting on injected tasks when they appear. The system "injects project micro-tasks into the user's existing daily workflow -- they don't need to remember to check on long-term projects" (S7, FP08 Q2). Scored 4/5 on behavioural change (S7).

### Data Access Requirements

- Project management tools (Asana, Jira, Notion, Linear -- for project state and engagement tracking)
- Document access (Google Docs, Confluence -- for engagement monitoring)
- Optionally: code repositories (GitHub, GitLab -- for code projects)
- Task tool (for injecting micro-tasks into daily flow)
- Calendar (for timing of injections)

### User Trust Requirements

**Moderate to high.** The user must trust the product to (a) accurately detect which projects are declining, (b) generate genuinely useful micro-tasks (not busywork), and (c) inject tasks at appropriate frequency without overwhelming an already-full daily list. The product also needs read access across multiple work tools.

### Preliminary Layer 3 Requirements

| Category | What is needed |
|----------|---------------|
| Data processing | Multi-tool engagement monitoring; activity pattern analysis; decay detection |
| AI/ML models | Motivational decay detection (declining commit frequency, document edit frequency, meeting attendance); micro-task generation from project context; AI understanding of project state and next steps |
| Logic/rules | Injection frequency caps; conflict avoidance with high-priority daily tasks; escalation model for persistent neglect |
| Storage/structure | Project engagement baselines; historical activity patterns |
| Interfaces | Minimal -- outputs into existing task surfaces |
| Integrations | PM tool APIs (Asana, Jira, etc.), document APIs, optionally repo APIs, task tool write access |
| Permissions/access | Read access across PM tools and documents; write access to task tool |
| Design patterns | Artificially-created urgency (making distant tasks feel present); progress visualisation (combating "nothing done" feeling); bridge tasks connecting boring current phase to stimulating future phase |

### Evidence from Corpus

- **Effectiveness:** Delay discounting is a well-documented ADHD mechanism -- distant rewards lose motivational value exponentially (S6 Supplement, Section 4). Practitioners identify project neglect as driven by motivational decay with distance (S10, problem ranking table, score 12/15). The overwhelm-burnout cycle shows that accumulated neglected obligations create cascading failures (P2C, "Overwhelm-Burnout Cycle").
- **Failure modes:** "Highest complexity of any solution evaluated" in the corpus (S7, FP08). The system must understand project context deeply enough to generate useful micro-tasks -- "non-trivial" (S7, FP08 Q1). Users with ADHD are already overwhelmed by task lists; injecting more tasks could backfire if not carefully calibrated. Scored lowest solution feasibility (10/20) in S7.
- **Market data:** "Significant gap -- Leantime is the only ADHD-specific PM tool and has $36K revenue" (S6 Supplement, Section 4). No tool addresses delay discounting or motivational decay (S6 Supplement). Gap score 10/15 (S10).

---

## Model 7: Structured Check-In / Guided Routine

### Description

The product provides a time-bounded, guided interaction at a regular cadence (typically daily) where the user is walked through a structured process: reviewing commitments, planning the day, estimating task durations, or reflecting on what was completed. The structure is external -- the product provides the scaffolding rather than relying on the user to self-organise. This mirrors the coaching/OT intervention model described in P2C, where external accountability and structured sessions drive behaviour change.

### Dimensional Position

| Dimension | Position | Rationale |
|-----------|----------|-----------|
| **A: Initiation** | Product-prompted, user-executed | Product prompts the check-in at a scheduled time; user must actively participate |
| **B: Effort** | Moderate effort | User must engage with the guided process -- answering questions, making selections, reviewing items. The structure reduces cognitive load vs. unguided planning, but active participation is required |
| **C: Timing** | Before problem (preventive planning) | Typically occurs at start of day/week, before problems manifest |
| **D: Continuity** | Separate surface (dedicated check-in view) | The check-in is a distinct interaction, though it may pull data from integrated tools |

### Retention Profile

**Critically dependent on habit formation.** This is the model most vulnerable to the ADHD app graveyard. The user must show up for the check-in regularly. If they miss a few days, overdue items accumulate, creating the shame spiral described in P2B: "the wave of shame that hits when I finally open the app after two weeks of neglect" (P2B, Core Pattern #3, Tier 3). However, if the habit takes hold, this model provides the "external structure" practitioners recommend (P2C) and that users say they want (P2B, "What Users Want" #1).

### Habit-Formation Burden

**Highest of any model.** The user must establish a daily or regular cadence of engagement. This directly conflicts with the ADHD trait of inconsistency: "My life lacks a consistent daily routine since my school and work schedules are always changing" (P2B, Habitica section, Tier 3). Successful implementations (Sunsama) mitigate this with forced time estimation and end-of-day review that create their own micro-rewards. Pre-formatted planners create shame when days are missed (P2B, Bullet Journal section). Design must accommodate missed sessions gracefully.

### Data Access Requirements

- Calendar (to show today's commitments)
- Task tool (to surface pending items for review)
- Optionally: email (for surfacing unanswered items during check-in)
- Historical check-in data (for pattern recognition)

### User Trust Requirements

**Low.** This model accesses the least sensitive data -- mostly reading the user's own task and calendar data for the purpose of a structured review. The user controls the interaction. Trust is primarily in the product's guidance quality, not in data handling.

### Preliminary Layer 3 Requirements

| Category | What is needed |
|----------|---------------|
| Data processing | Aggregation of tasks, calendar events, and pending items for review |
| AI/ML models | Guided planning prompts (what is your top priority? how long will this take?); realistic load assessment ("you have 6 hours of meetings -- planning 8 hours of task work is unrealistic"); end-of-day reflection |
| Logic/rules | Check-in scheduling; graceful recovery from missed sessions (no shame spiral); overdue task management |
| Interfaces | Guided step-by-step check-in flow; daily plan output; review/reflection view |
| Integrations | Calendar API, task tool API |
| Design patterns | "Planning mode vs. reactive mode" (P2C practitioner recommendation); forced estimation (Sunsama model); accommodation of missed days; celebration of consistency without punishing inconsistency |

### Evidence from Corpus

- **Effectiveness:** Practitioners consistently prioritise creating structure and routine as the foundation for ADHD intervention (P2C: "Occupational therapists prioritize creating structure and environmental modifications early in intervention"). Coaching with accountability increases goal achievement dramatically (S9, Section 7.1: 25% to 95%). Sunsama is one of the few tools ADHD users report sustained success with, specifically because of its guided daily planning with forced time estimation (P2B, sustained success section, Tier 3). Work-MAP telehealth metacognitive intervention showed 15-19% of participants improved executive function from abnormal to normal range through structured sessions (P2C, Tier 1 RCT).
- **Failure modes:** This is the model most frequently abandoned. Every tool in P2B's failure catalogue uses some version of this model (Todoist, Trello, ClickUp, Asana, Bullet Journals, OmniFocus). The five core failure patterns from P2B all apply: setup hyperfocus trap, out-of-sight-out-of-mind, shame spiral, assumption of existing discipline, maintenance burden. Users describe cycling through systems every 3-6 months (P2B, Asana section). The fundamental tension: this model provides exactly what practitioners recommend but requires exactly what ADHD impairs.
- **Market data:** Most crowded ADHD-specific category. Tiimo ($6M, Apple App of Year 2025), Amazing Marvin (cult following), Sunsama (ADHD-popular), Numo, Neurolist, Thruday all compete here (S6 Supplement). Avoid building another planner/task manager (S6 Supplement, Section 5.4).

---

## Model 8: On-Demand Cognitive Scaffolding

### Description

The product provides AI-powered cognitive support at the moment the user requests it -- breaking a task into micro-steps, drafting a starting point, restructuring a plan, or generating a decision framework. The user comes to the product when they are stuck, and the product provides the executive function scaffolding that the ADHD brain cannot generate internally at that moment. Unlike Model 1 (which detects the stuck state automatically), here the user self-identifies the need and initiates the interaction.

### Dimensional Position

| Dimension | Position | Rationale |
|-----------|----------|-----------|
| **A: Initiation** | User-initiated | User recognises they are stuck and seeks help |
| **B: Effort** | Low to moderate effort | User must articulate what they need help with; the product does the cognitive heavy lifting (breaking down, drafting, structuring) |
| **C: Timing** | During problem | Used at the moment of being stuck -- facing a complex task, overwhelmed by options, unable to start |
| **D: Continuity** | Can be either separate surface or embedded | Could be a standalone tool (Goblin Tools model) or embedded as a feature within another product (ChatGPT, Notion AI) |

### Retention Profile

Moderate. Usage is episodic -- driven by encountering problems rather than habitual daily use. The product does not degrade without use (no data to maintain) but also does not compound (no learning). Retention depends on the user remembering the tool exists when they are stuck, which is precisely the "out of sight, out of mind" problem (P2B, Core Pattern #2). The tool most resistant to this is one that is always present in the user's environment (browser extension, OS-level integration) rather than a separate app.

### Habit-Formation Burden

Low. No new routine required. The user must only remember the tool exists at the moment of need. However, "remembering to use the tool when stuck" is itself an executive function task that ADHD impairs. Goblin Tools succeeds partly because its simplicity makes it memorable and its web access makes it always available.

### Data Access Requirements

- Minimal for basic function -- the user provides context verbally or in text
- Optionally: task tool integration (to understand the stuck task's context)
- Optionally: project context (to generate relevant micro-steps)

### User Trust Requirements

**Low.** The user controls what information they share. The product does not monitor anything continuously. Trust is in the quality of the scaffolding output (are the micro-steps actually helpful? is the draft usable?).

### Preliminary Layer 3 Requirements

| Category | What is needed |
|----------|---------------|
| AI/ML models | Task decomposition (break complex task into micro-steps); draft generation (starting points for documents, emails, plans); decision framework generation |
| Logic/rules | Scaffolding type selection (break down vs. draft vs. restructure vs. simplify) |
| Interfaces | Minimal input interface (paste task description or speak it); structured output (numbered steps, draft document, decision matrix) |
| Integrations | Optional: task tool API, document platform API |
| Design patterns | Extreme simplicity (Goblin Tools' one-function-per-tool model); instant value on first use; no setup required |

### Evidence from Corpus

- **Effectiveness:** Goblin Tools is "beloved by community" and described as "AMAZING for NDs" (S6 Supplement, Tier 2 app table, Tier 3 community sentiment). Practitioners recommend "break tasks into manageable steps" as a core intervention (P2C, practitioner recommendations). The gap between planning and doing "can feel insurmountable" -- scaffolding addresses the planning side (P2B, Core Pattern #4, Tier 3).
- **Failure modes:** "Neither will actually make you take action" (P2B, OmniFocus section, Tier 3) -- scaffolding helps with planning but does not solve initiation. The tool addresses what to do but not the doing. If the user cannot initiate the scaffolding interaction itself (a meta-initiation problem), the tool is useless. AI commoditisation risk is highest here: ChatGPT, Claude, and Gemini all provide general-purpose scaffolding.
- **Market data:** Goblin Tools is a beloved indie tool (S6 Supplement). The general AI assistant market (ChatGPT, Claude, Gemini) provides much of this functionality already, making standalone scaffolding tools increasingly redundant unless ADHD-specifically designed. This model is better as a feature within a broader product than as a standalone offering.

---

## Summary: All Models at a Glance

| # | Model | Initiation | Effort | Timing | Continuity | Retention Risk | Habit Burden |
|---|-------|-----------|--------|--------|-----------|---------------|-------------|
| 1 | Ambient Monitor & Intervene | Product-initiated | Near-zero | During | Embedded | Nudge fatigue | Minimal |
| 2 | Passive Capture & Structured Delivery | Product-initiated | Zero | After (delivers later) | Embedded | Lowest risk (compounds) | None |
| 3 | Modality Shift | User-initiated | Moderate | During | Separate (mostly) | Moderate (per-use) | Moderate |
| 4 | Intelligent Reordering | Balanced | Low | Before | Embedded (layer) | Moderate (pull-based) | Low |
| 5 | Calibration Feedback Loop | Balanced | Moderate | Before + During | Partially embedded | Breaks if habit drops | Moderate |
| 6 | Periodic Injection | Product-initiated | Low per task | Before (preventive) | Embedded (into task flow) | Depends on task quality | Minimal |
| 7 | Structured Check-In | Product-prompted | Moderate | Before (planning) | Separate surface | Highest risk (habit-dependent) | Highest |
| 8 | On-Demand Scaffolding | User-initiated | Low-moderate | During | Either | Moderate (memory-dependent) | Low |

### Dimensional Coverage Map

```
                     PRODUCT-INITIATED                    USER-INITIATED
                           |                                    |
ZERO         M2 Passive Capture                                 |
EFFORT       M1 Ambient Monitor                                 |
                           |                                    |
LOW          M6 Periodic Injection        M4 Intelligent Reorder|
EFFORT                     |                                    |
                           |                                    |
MODERATE                   |              M5 Calibration Loop   |
EFFORT       M7 Structured Check-In      M3 Modality Shift     |
                           |              M8 On-Demand Scaffold |
                           |                                    |
HIGH                       |                                    |
EFFORT                     |                                    |

                    EMBEDDED                           SEPARATE SURFACE
                       |                                    |
BEFORE       M4 Reordering               M7 Structured Check-In
PROBLEM      M6 Periodic Injection       M5 Calibration Loop (partially)
                       |                                    |
DURING       M1 Ambient Monitor          M3 Modality Shift
PROBLEM      M2 Passive Capture (capture)|M8 On-Demand Scaffolding
                       |                                    |
AFTER        M2 Passive Capture (deliver)|                  |
PROBLEM                |                                    |
```

---

## Gap-Check: Unconsidered Dimension Combinations

After mapping all eight models, I tested whether plausible combinations of dimensions A-D were missing.

### Gaps Considered and Rejected

**1. Product-initiated + High effort + Before problem + Embedded**
This would be a product that proactively demands significant user effort before problems occur -- essentially, a product that forces the user through an extensive planning/preparation process. This pattern was rejected because it contradicts the core design constraint for ADHD products. High-effort, product-demanded interactions before any problem is visible would trigger avoidance and abandonment. The corpus evidence is unambiguous: "tools that require ongoing user effort" are the ones that die in the app graveyard (S10, retention discussion; P2B, all five failure patterns). This pattern exists in corporate compliance training but is not viable for an ADHD productivity product.

**2. User-initiated + Zero effort + After problem + Separate surface**
This would be a product that the user goes to after a problem has occurred, which then requires zero effort. The closest real-world analogue is a "vent/reflect" journaling tool -- the user opens it after a bad day and it does something with minimal input. This was rejected because (a) post-problem reflection with zero user effort is structurally contradictory (if the user is reflecting, that is effort), and (b) the corpus contains no evidence that passive post-problem tools address ADHD workplace failures. Post-mortem tools (what went wrong?) are a coaching pattern (P2C) but require active practitioner-guided reflection, which is Model 7, not a new model.

**3. Product-initiated + Zero effort + Before problem + Separate surface**
This would be a product that proactively alerts the user to upcoming risks in a separate surface they must check. This is structurally a traditional dashboard/alert system. It was considered but deemed a variant of Model 6 (Periodic Injection) -- the structural difference between injecting into an existing tool vs. displaying in a separate dashboard is a Layer 3 implementation choice, not a distinct engagement model. If the separate surface requires the user to check it, it inherits all of Model 7's retention problems.

**4. Biometric-driven adaptive interface**
This would be a model where the product detects cognitive state through biometric signals (EEG, eye tracking) and adapts its interface or behaviour in real-time. The technology assessment (S9, Sections 4.1-4.4) describes this but the maturity is firmly research-grade (12-24 months from production). A 2025 study showed 12.4% reduction in task completion time from EEG-adaptive interfaces (S9, Section 4.4). This was considered as a potential ninth model but rejected for now because: (a) no production hardware exists for the workplace context, (b) it is structurally a variant of Model 1 (Ambient Monitor and Intervene) with a different detection mechanism (biometric rather than behavioural), and (c) the corpus evidence is too thin to characterise retention profile, trust requirements, or failure modes. If biometric detection matures, it would enhance Models 1, 4, and 5 rather than constitute a structurally distinct engagement pattern.

---

## Cross-Reference: Models to Problem Clusters

This table maps which engagement models are structurally suited to which functional problems from Layer 1.

| Model | FP01 Initiation | FP03 Time Blindness | FP05 Prioritisation | FP07 Meeting Memory | FP08 Project Neglect | FP09 Email | FP11 Documentation | Cross-cutting (Prospective Memory) |
|-------|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| M1 Ambient Monitor | **Primary** | Yes | -- | -- | -- | -- | -- | -- |
| M2 Passive Capture | -- | -- | -- | **Primary** | -- | **Primary** | -- | **Primary** |
| M3 Modality Shift | -- | -- | -- | -- | -- | -- | **Primary** | -- |
| M4 Intelligent Reordering | Yes | -- | **Primary** | -- | -- | -- | -- | -- |
| M5 Calibration Loop | -- | **Primary** | -- | -- | -- | -- | -- | -- |
| M6 Periodic Injection | -- | -- | -- | -- | **Primary** | -- | -- | -- |
| M7 Structured Check-In | Yes | Yes | Yes | -- | -- | -- | -- | -- |
| M8 On-Demand Scaffolding | Yes | -- | -- | -- | -- | -- | Yes | -- |

**Key observation:** The problems with the strongest clinical evidence (FP07 meeting memory, FP09 email, cross-cutting prospective memory) are best served by Model 2 (Passive Capture), which also has the lowest habit-formation burden and strongest retention profile. The most-discussed user problem (FP01 task initiation) is best served by Model 1 (Ambient Monitor), which has the strongest proactive intervention but the highest privacy requirements. No single model covers all problems -- a product addressing the full problem space would need to combine multiple engagement models.

---

## Limitations

1. **Models extracted from proposed solutions, not observed products.** Most solutions in the corpus are designs, not shipped products. Real-world engagement patterns may differ from theorised ones.

2. **Retention profiles are hypothesised.** No longitudinal usage data exists for most of these models in ADHD-specific products. The "app graveyard" evidence (P2B) provides negative data on Model 7 but limited positive data on others.

3. **Dimensional positions are approximate.** Each model sits on a spectrum, not at a fixed point. Implementation choices in Layer 3 will shift positions (e.g., Model 4 becomes more product-initiated if it pushes the top task via notification rather than waiting for the user to open it).

4. **ADHD is heterogeneous.** The same engagement model may work well for one ADHD profile (primarily inattentive) and poorly for another (primarily hyperactive/impulsive, combined type). The corpus does not differentiate engagement patterns by ADHD subtype.

5. **Evidence quality is uneven across models.** Model 2 (Passive Capture) has Tier 1 clinical evidence for the underlying mechanism (encoding deficit, prospective memory failure). Model 1 (Ambient Monitor) has Tier 2 evidence from small studies. Models 4 and 6 are supported primarily by Tier 3 user reports and practitioner observations. Model 7 has the paradoxical position of strongest practitioner recommendation (Tier 1-2) alongside strongest abandonment evidence (Tier 3).
