# S7: Solution Layer Scoring

## Methodology Note

For each problem with a meaningful market gap (from S6), a solution approach is described and scored on four dimensions:

- **Q1: Minimum Feature Complexity** (1–5) — How complex is the minimum feature set for first meaningful value?
  - 5 = Minimal: single core feature, prototype in days
  - 4 = Light: 2–3 features, 2–4 weeks
  - 3 = Moderate: coherent feature set, 1–2 months
  - 2 = Substantial: multiple interdependent features, 3–6 months
  - 1 = Complex: extensive feature development, 6+ months

- **Q2: Behavioural Change Required** (1–5) — How much effort/habit change from the user?
  - 5 = Passive: works in background, no habit formation
  - 4 = Minimal: occasional interaction, fits existing workflows
  - 3 = Moderate: regular engagement but builds on existing behaviours
  - 2 = Significant: new habits required, ongoing discipline
  - 1 = Demanding: major workflow change, works against ADHD tendencies

- **Q3: Setup Effort** (1–5) — How much input/setup before first value?
  - 5 = Instant: value on first use, no setup
  - 4 = Quick: brief setup (<5 min), value within first session
  - 3 = Moderate: some configuration, value within first day
  - 2 = Investment: data entry or learning curve, value within first week
  - 1 = Heavy: extensive setup, training, or migration before any value

- **Q4: Integration Dependency** (1–5) — How dependent on external systems?
  - 5 = Standalone: works independently
  - 4 = Optional integrations: enhanced by connections but valuable alone
  - 3 = Standard integrations: requires common tools (calendar, email) with well-documented APIs
  - 2 = Specific integrations: depends on particular platforms
  - 1 = Deep integration: requires enterprise deployment or IT approval

**Solution Score** = Q1 + Q2 + Q3 + Q4 (out of 20). Higher = more feasible/adoptable.

**Combined Opportunity Score** = Problem Score + Market Gap Score + Solution Score (out of 50).

---

## Problems Evaluated

Based on S6 strategic tiering, solutions are designed for:
- **Tier 1** (highest opportunity): FP01, FP03, FP08
- **Tier 2** (notable opportunity): FP05, FP07, FP09, FP11
- **Not evaluated**: FP02 (most saturated market), FP04 (downstream, better as secondary benefit), FP06 (consolidated market, feature not product), FP12 (downstream of FP03)

Additionally, the S6 analysis and landscape sweep identified a **cross-cutting platform opportunity** (Prospective Memory Platform) that addresses multiple problems simultaneously. This is evaluated as a composite solution.

---

## Solution Approaches and Scores

### FP01: Task Initiation Failure — "Activation Engine"

**Solution Description:**
An AI-powered activation system that detects stalled work (no meaningful input across monitored apps for a configurable period) and provides graded initiation nudges — starting with the lowest-friction possible entry point for the stuck task (e.g., "just open the file," "dictate one sentence about what you'd do first," "here's the first micro-step"). Integrates with calendar and task tools to know *what* should be started and uses AI to generate context-appropriate micro-prompts. Escalation model: gentle nudge → specific micro-step → offer to start a body-doubling session → offer to draft/scaffold the first part.

**Q1: Minimum Feature Complexity — 3 (Moderate)**
- MVP requires: (1) activity monitoring across apps to detect stalling, (2) integration with at least one task/calendar source to know what should be happening, (3) AI-generated micro-step prompts, (4) notification/nudge delivery system. This is a coherent feature set requiring 1–2 months engineering.
- The activity monitoring is the hardest component — detecting "stalled" vs "thinking" vs "in a meeting" requires heuristics.
- Could prototype a simpler version (scheduled task prompts without activity monitoring) in 2–4 weeks, but this would be significantly less valuable — it would just be another reminder system.

**Q2: Behavioural Change — 4 (Minimal)**
- Works within existing workflow. User doesn't need to change how they work — the system monitors and intervenes.
- Requires user to respond to nudges (not ignore them), which is a minimal but real engagement requirement.
- Critical design constraint: must not become another notification to ignore. Escalation model and variable delivery (different nudge types, timing) help combat notification fatigue.
- Not scored 5 because the user must occasionally interact with nudges — it's not fully passive.

**Q3: Setup Effort — 3 (Moderate)**
- Needs to connect to calendar/task tool to know what should be worked on. This is a one-time setup but takes more than 5 minutes.
- User needs to configure what "stalled" means for their work context (how long is acceptable quiet time?).
- Value within first day of use — as soon as the first stall is detected and a useful nudge delivered.
- Not scored 4 because the integration setup and preference configuration are necessary before the system can function.

**Q4: Integration Dependency — 3 (Standard integrations)**
- Requires calendar integration (Google Calendar / Outlook) to know scheduled tasks.
- Requires task tool integration (Todoist, Notion, Asana, or similar) for task context.
- Optionally monitors app activity (requires desktop agent or browser extension).
- All standard APIs, but the system fundamentally depends on knowing what the user should be doing — which requires at least one integration.

**Solution Score: 13/20**

| Q1 | Q2 | Q3 | Q4 | Total |
|----|----|----|-----|-------|
| 3 | 4 | 3 | 3 | **13** |

**Key Risk:** The circular dependency (user must initiate use of the initiation tool) is partially solved by making the system always-on after initial setup. But the "nudge fatigue" risk is real — if nudges become ignorable, the tool joins the app graveyard. Variable delivery and AI-personalized timing are essential but hard to get right.

---

### FP03: Time Estimation / Time Blindness — "Time Perception Calibrator"

**Solution Description:**
A background time-awareness layer that tracks how long tasks actually take vs how long the user estimated, and uses this data to (1) provide real-time "you've been on this for X minutes" awareness during work, (2) calibrate future time estimates by showing the user their personal estimation bias ("you typically underestimate by 40%"), and (3) proactively warn when the current task is running over and downstream commitments are at risk. Integrates with calendar to know commitments and uses AI to learn individual time-estimation patterns.

**Q1: Minimum Feature Complexity — 3 (Moderate)**
- MVP requires: (1) task timer with estimation prompt, (2) calendar integration for commitment awareness, (3) estimation-vs-actual tracking and pattern analysis, (4) real-time awareness notifications, (5) AI calibration model that improves over time. Coherent feature set, 1–2 months.
- The simplest version (manual timer + estimation tracking) could be built in 2 weeks, but a manual timer requires the user to remember to start/stop it — which works against ADHD. Automatic detection of what the user is working on is much harder.
- RoutineFlow (solo developer, v0.9.x) is attempting the estimation-vs-actual loop but is very early. This confirms the approach is viable but not trivial.

**Q2: Behavioural Change — 3 (Moderate)**
- Requires the user to estimate task duration before starting — a new micro-habit.
- The estimation prompt itself is a behaviour change, but it's brief (<10 seconds per task) and provides immediate feedback.
- Real-time awareness notifications build on existing calendar-checking behaviour but add a new "time elapsed" dimension.
- Not scored 4 because the estimation habit is genuinely new and must be maintained. ADHD users may resist estimation prompts because they "just want to start."

**Q3: Setup Effort — 3 (Moderate)**
- Needs calendar integration (one-time).
- No meaningful data until the user has estimated and completed several tasks — value emerges within the first day but improves significantly over the first week as calibration data accumulates.
- The "cold start" problem is real: calibration accuracy is low initially.

**Q4: Integration Dependency — 3 (Standard integrations)**
- Requires calendar integration to know commitments.
- Optionally integrates with task tools for richer context.
- Best value when integrated with both calendar and task management, but could provide basic time-awareness with calendar alone.
- All standard APIs (Google Calendar, Outlook, Todoist, etc.).

**Solution Score: 12/20**

| Q1 | Q2 | Q3 | Q4 | Total |
|----|----|----|-----|-------|
| 3 | 3 | 3 | 3 | **12** |

**Key Risk:** The estimation prompt creates friction that ADHD users may resist or skip. If users don't estimate, the calibration loop breaks. Must be extremely low-friction (e.g., "Quick: how long? [15m] [30m] [1h] [2h+]" one-tap interface) and deliver compelling feedback fast.

---

### FP08: Long-Term Project Neglect — "Project Pulse Monitor"

**Solution Description:**
An AI system that monitors engagement with long-term projects (via integration with PM tools, documents, and repos) and detects motivational decay before full abandonment. When a project shows declining engagement, it intervenes with (1) artificially-created urgency — surfacing one small, concrete micro-task from the neglected project within the user's daily task flow, (2) progress visualisation showing what's been achieved (combating the "nothing done" feeling), and (3) AI-generated "bridge" tasks that connect the boring current phase to a more stimulating future phase. Converts distant deadlines into present micro-motivations.

**Q1: Minimum Feature Complexity — 2 (Substantial)**
- MVP requires: (1) project engagement monitoring across multiple tools (PM tool, docs, repos), (2) motivational decay detection algorithm, (3) micro-task generation from project context, (4) daily task injection into existing workflow, (5) progress visualisation. Multiple interdependent features, 3–6 months.
- The decay detection algorithm is the hardest component — defining "declining engagement" requires activity pattern analysis across tools.
- Micro-task generation from project context requires the AI to understand the project's current state and next steps — non-trivial.
- Could simplify to "manual project check-in reminders" but this adds little over existing tools.

**Q2: Behavioural Change — 4 (Minimal)**
- The system injects project micro-tasks into the user's existing daily workflow — they don't need to remember to check on long-term projects.
- Requires the user to occasionally act on injected tasks, but the tasks are designed to be 5–15 minutes and low-activation-energy.
- Not scored 5 because the user must engage with injected tasks — passive monitoring alone doesn't solve the problem.

**Q3: Setup Effort — 2 (Investment)**
- Needs to connect to PM tools, document editors, and potentially code repositories. Multiple integrations.
- User needs to identify which projects are "long-term" and should be monitored.
- Value within first week — needs enough data to establish engagement baselines before it can detect decay.
- Setup is the heaviest of any solution in this set because project monitoring requires rich context.

**Q4: Integration Dependency — 2 (Specific integrations)**
- Depends on specific PM platforms (Asana, Jira, Notion, Linear, etc.) for project state.
- May need document access (Google Docs, Confluence) for engagement tracking.
- May need repo access (GitHub, GitLab) for code projects.
- While each API is standard, the system requires at least 2–3 integrations to function meaningfully, and the specific combination depends on the user's stack.

**Solution Score: 10/20**

| Q1 | Q2 | Q3 | Q4 | Total |
|----|----|----|-----|-------|
| 2 | 4 | 2 | 2 | **10** |

**Key Risk:** Highest complexity of any solution evaluated. The engagement monitoring + decay detection + micro-task generation pipeline is substantial. If the AI-generated micro-tasks aren't genuinely useful (just "check on Project X"), the tool becomes another ignored reminder. The value proposition is strong but execution risk is high.

---

### FP05: Prioritisation Failure — "Interest-Aware Task Surfacer"

**Solution Description:**
An AI layer on top of existing task tools that reorders the user's task list based on *current* neurological accessibility rather than static importance. Uses signals like time of day, recent task completion patterns, energy indicators (if available from mood/energy tracking), and task characteristics (novelty, complexity, stimulation level) to surface the task the user is most likely to actually do right now — which may not be the "most important" one. Includes procrastivity detection: if the user is completing low-priority tasks while high-priority ones stagnate, the system surfaces a specific micro-entry-point for the avoided task.

**Q1: Minimum Feature Complexity — 3 (Moderate)**
- MVP requires: (1) task tool integration, (2) task characteristic tagging (manual or AI-inferred: stimulation level, complexity, novelty), (3) dynamic reordering algorithm, (4) procrastivity detection. Coherent set, 1–2 months.
- The reordering algorithm is the core innovation — it must balance "what the user should do" with "what the user can do right now." This is the ADHD-specific design insight that no current tool implements.
- Could start simpler: just show one task at a time (like Neurolist) with AI selection. The "one task" pattern is proven to reduce overwhelm.

**Q2: Behavioural Change — 4 (Minimal)**
- User keeps their existing task tool — this layer sits on top.
- The only new behaviour is trusting the system's task suggestion rather than scanning the full list — which is actually easier than their current approach (decision paralysis from seeing everything).
- Not scored 5 because the user must occasionally provide feedback (did you do this? was it the right suggestion?) to improve the algorithm.

**Q3: Setup Effort — 3 (Moderate)**
- Needs task tool integration (one-time).
- Initial task characteristic tagging is needed — AI can infer some (complexity from description length, novelty from creation date) but user input improves accuracy.
- Value within first day — even a naive "show one task" approach is immediately useful for ADHD users overwhelmed by full lists.

**Q4: Integration Dependency — 2 (Specific integrations)**
- Fundamentally dependent on the user's existing task tool (Todoist, Notion, Asana, ClickUp, etc.).
- Must deeply integrate with at least one task platform to read and reorder tasks.
- Optionally integrates with calendar for time-awareness.
- The dependency on a specific task tool limits the addressable market per integration built.

**Solution Score: 12/20**

| Q1 | Q2 | Q3 | Q4 | Total |
|----|----|----|-----|-------|
| 3 | 4 | 3 | 2 | **12** |

**Key Risk:** The ADHD prioritisation problem is that users can't override interest with importance. This tool partially concedes that by surfacing "what you can do" — but stakeholders/employers want the important thing done, not just any thing done. The tension between "neurologically accessible" and "actually important" is the core design challenge. Procrastivity detection + micro-entry-points for important-but-avoided tasks is the attempted bridge.

---

### FP07: Meeting Memory Failure — "Encoding Compensator"

**Solution Description:**
An AI meeting companion that compensates for encoding deficit by (1) capturing everything automatically (full transcript, no user action required), (2) generating ADHD-optimised summaries (shorter than standard, focused on commitments, decisions, and action items assigned to the user), (3) proactively resurfacing relevant meeting content at the moment it becomes useful (before the next meeting with same person, when opening a related project, when an action item deadline approaches), and (4) providing spaced-repetition micro-quizzes for critical commitments ("You agreed to send X to Y by Friday — still on track?"). Designed as a layer on top of existing meeting tools (Zoom, Teams, Meet), not a replacement.

**Q1: Minimum Feature Complexity — 3 (Moderate)**
- MVP requires: (1) meeting recording/transcription (can use existing APIs — Zoom, Teams, Meet all have transcript APIs, or whisper-based local processing), (2) AI summarisation tuned for ADHD (commitment extraction, action-item identification), (3) proactive resurfacing engine (calendar-triggered, project-triggered), (4) commitment tracking with follow-up nudges.
- Transcription is commoditised — the value is in the ADHD-specific post-processing and proactive delivery.
- Could MVP with just transcript + ADHD-summary + commitment tracking in 4–6 weeks. Proactive resurfacing and spaced repetition add another 2–4 weeks.

**Q2: Behavioural Change — 5 (Passive)**
- Once connected to meeting platform, works entirely in background during meetings. No note-taking required.
- Post-meeting summaries delivered automatically. Commitment nudges delivered proactively.
- The user doesn't need to change any meeting behaviour — they attend meetings exactly as before.
- Scored 5 because this is the rare tool that truly works in the background. The ADHD user's problem is that they can't encode during meetings — this tool does the encoding for them.

**Q3: Setup Effort — 4 (Quick)**
- Connect meeting platform (Zoom/Teams/Meet) — one-time OAuth, <5 minutes.
- Optionally connect calendar for proactive resurfacing context.
- Value from very first meeting recorded and summarised.
- Scored 4 not 5 because the meeting platform connection is required, but it's quick.

**Q4: Integration Dependency — 3 (Standard integrations)**
- Requires meeting platform integration (Zoom, Teams, or Meet — all have well-documented APIs).
- Enhanced by calendar integration (Google Cal / Outlook) for contextual resurfacing.
- Could optionally integrate with task tools for action-item injection.
- Standard APIs throughout, but meeting platform access is required.

**Solution Score: 15/20**

| Q1 | Q2 | Q3 | Q4 | Total |
|----|----|----|-----|-------|
| 3 | 5 | 4 | 3 | **15** |

**Key Risk:** General meeting tools (Otter, Fireflies, Fathom) already provide transcription and summarisation. The ADHD-specific differentiation (proactive resurfacing, commitment tracking, spaced repetition) must be compelling enough that users choose this over free/cheap general tools. The "meeting bot" social friction (visible bot joining calls) affects self-conscious ADHD users — Granola's "bot-free" approach suggests a local-capture model may be preferable. Distribution is also a challenge: marketing to ADHD users specifically while competing against well-funded general tools requires precise positioning.

---

### FP09: Email Management Failure — "Reply Intent Tracker"

**Solution Description:**
An AI email companion that detects "read but not replied" emails — the core ADHD prospective memory failure — and proactively resurfaces them with a low-friction reply scaffold. Works as a layer on existing email (Gmail/Outlook plugin), not a replacement client. Core loop: (1) detects emails opened and read but not replied to within a configurable window, (2) surfaces forgotten reply-intentions at a chosen daily moment (not as another inbox notification — as a separate, calmer "reply queue"), (3) provides AI-drafted reply suggestions to reduce composition initiation barrier, (4) uses non-shaming language and progressive nudges (not "you forgot!" but "ready to reply to Sarah's question about the Q3 report?").

**Q1: Minimum Feature Complexity — 3 (Moderate)**
- MVP requires: (1) email read-state tracking (Gmail/Outlook API — detect opened emails), (2) reply-state tracking (did user reply?), (3) configurable surfacing engine (daily digest, or contextual — before meeting with sender), (4) AI reply draft generation, (5) non-shaming UX design. Coherent set, 1–2 months.
- Email read-tracking is technically straightforward (Gmail API provides read/unread state; detecting "opened then moved on" requires slightly more). Reply-state tracking is simple (check sent folder).
- The value is in the surfacing logic + AI drafts + UX tone, not in novel technology.

**Q2: Behavioural Change — 4 (Minimal)**
- User keeps their existing email client entirely — this is a plugin/companion.
- The only new behaviour is checking the "reply queue" when prompted — but the system does the prompting, so it's not a new habit to form.
- AI draft suggestions reduce the initiation barrier for actually replying.
- Not scored 5 because the user must act on surfaced reply-intentions — the system can't reply for them (unless they approve AI drafts, which approaches score 5).

**Q3: Setup Effort — 4 (Quick)**
- Connect email (Gmail/Outlook OAuth) — <5 minutes.
- Optionally configure reply-window threshold (default: 24 hours).
- Value from first surfaced forgotten reply — likely within first day.

**Q4: Integration Dependency — 2 (Specific integrations)**
- Fundamentally dependent on email platform (Gmail or Outlook). Must deeply integrate with at least one.
- The email API dependency is the primary constraint — building for Gmail first covers the largest segment but locks out Outlook users until a second integration is built.
- Optionally integrates with calendar (for contextual surfacing — "you're meeting Sarah in 1 hour, you haven't replied to her email") which significantly increases value.
- Scored 2 because deep email integration is required and platform-specific.

**Solution Score: 13/20**

| Q1 | Q2 | Q3 | Q4 | Total |
|----|----|----|-----|-------|
| 3 | 4 | 4 | 2 | **13** |

**Key Risk:** Email is deeply personal — users are wary of giving tools access to their inbox. Trust and privacy are paramount. The Grammarly-Superhuman consolidation creates a powerful competitor that could add "reply tracking" as a feature. Speed to market matters. Also, the "reply queue" creates yet another place to check — must be extremely well-designed to avoid becoming another inbox the user ignores.

---

### FP11: Documentation Paralysis — "Voice-to-Doc Bridge"

**Solution Description:**
A voice-first documentation tool that lets ADHD users bypass the writing initiation barrier entirely by talking through what they need to document, then uses AI to transform unstructured verbal output into structured professional documentation. Core loop: (1) user taps one button and starts talking ("So what happened in the project this week was..."), (2) AI transforms the ramble into a structured document matching the required format (report template, meeting notes, status update, etc.), (3) user reviews and approves (or edits). The key insight is that speaking is a lower-activation-energy modality than writing for many ADHD users — the initiation barrier for talking is substantially lower than for typing.

**Q1: Minimum Feature Complexity — 4 (Light)**
- MVP requires: (1) voice recording with speech-to-text (commoditised — Whisper API or similar), (2) AI transformation from unstructured speech to structured document (prompt engineering + template library), (3) output editor for review/approval. 2–4 features, 2–4 weeks.
- This is technically the simplest solution in the set. Speech-to-text is a solved problem. The AI transformation is primarily prompt engineering with template matching.
- The innovation is in the UX (one-tap voice start, no blank page) and the template-matching AI (transforming "so basically we did X and then Y happened" into a professional format).

**Q2: Behavioural Change — 3 (Moderate)**
- Requires the user to talk through documentation instead of writing — this is a workflow change, even if it's an easier one.
- Speaking about work in a quasi-professional way (even if rambling) is a learned skill. Some users will struggle to articulate structure verbally.
- Not scored 4 because the modality change (writing → speaking) is genuinely new, even though it may be easier.
- Not scored 2 because speaking is building on an existing capability (people talk about their work all day) rather than requiring new discipline.

**Q3: Setup Effort — 4 (Quick)**
- No integrations required for basic function — open app, tap record, talk, get document.
- Optional template configuration (what format should outputs take?) but defaults can work.
- Value from first recording — user gets a structured document from a 2-minute voice note.

**Q4: Integration Dependency — 4 (Optional integrations)**
- Standalone value: record voice → get document. No dependencies required.
- Enhanced by integrations: output to Google Docs, Notion, Confluence, email. But valuable without them.
- Calendar integration could prompt "you have a status report due — ready to talk through it?" which addresses initiation.
- Scored 4 because the core value is standalone, integrations are enhancements.

**Solution Score: 15/20**

| Q1 | Q2 | Q3 | Q4 | Total |
|----|----|----|-----|-------|
| 4 | 3 | 4 | 4 | **15** |

**Key Risk:** The "dictation-to-document" approach has a ceiling identified in S6: the AI-structured output still needs editing, and editing can re-trigger the same paralysis. The tool must produce output good enough that minimal editing is needed. Also, the modality works poorly in open offices or shared spaces — discreet input (whisper mode, or text-based alternative) may be necessary. Competition from general AI (ChatGPT voice mode, Otter.ai voice journaling) could commoditise this quickly.

---

### Cross-Cutting: Prospective Memory Platform — "Remember For Me"

**Solution Description:**
A cross-context AI system that tracks intentions and commitments the ADHD user makes across communication channels — meeting commitments, email reply intentions, Slack promises, project deadlines — and proactively resurfaces them at the right moment. Unlike a to-do list (which the user must remember to check), this system monitors ongoing communications, extracts implicit and explicit commitments ("I'll send that by Friday," reading an email and not replying, agreeing to an action item in a meeting), and delivers contextual reminders at the optimal moment (before a relevant meeting, when the related project is open, at the committed deadline). Addresses FP07 + FP09 + partially FP08 and FP11 simultaneously.

**Q1: Minimum Feature Complexity — 2 (Substantial)**
- MVP requires: (1) multi-channel monitoring (email + meeting transcript + optionally Slack/Teams), (2) commitment extraction AI (NLP to identify promises, deadlines, action items across channels), (3) contextual resurfacing engine (calendar-aware, project-aware), (4) unified commitment dashboard. Multiple interdependent features, 3–6 months.
- The commitment extraction across multiple channels is the hardest component — natural language promises are varied ("I'll look into that," "let me get back to you," "should be done by Thursday").
- Could MVP with email-only commitment tracking (2–3 months), then expand to meetings and chat.

**Q2: Behavioural Change — 5 (Passive)**
- This is the purest "external executive function" in the set. The system monitors existing communication and extracts commitments automatically.
- The user communicates exactly as before. They don't need to write things down, tag items, or create reminders.
- The system compensates for the prospective memory failure that is the root cause of both FP07 and FP09.
- Scored 5 because the entire value proposition is that the user doesn't need to change any behaviour — the system remembers for them.

**Q3: Setup Effort — 3 (Moderate)**
- Needs email + meeting platform connection (two OAuth flows, ~5–10 minutes).
- Optionally add Slack/Teams for chat monitoring.
- Value begins accumulating from first meeting/email interaction but the commitment database needs a few days to populate meaningfully.
- Scored 3 not 4 because multiple integrations are needed and value improves over time rather than being instant.

**Q4: Integration Dependency — 2 (Specific integrations)**
- Fundamentally dependent on deep integration with email (Gmail/Outlook) AND meeting platform (Zoom/Teams/Meet) AND calendar. Without at least two of these, the cross-context value proposition collapses.
- Optionally Slack/Teams chat for richer commitment capture.
- All APIs are standard and well-documented, but the multi-integration requirement is the highest in the set.

**Solution Score: 12/20**

| Q1 | Q2 | Q3 | Q4 | Total |
|----|----|----|-----|-------|
| 2 | 5 | 3 | 2 | **12** |

**Key Risk:** Highest complexity solution but also the most differentiated — no product in any market does this. The multi-channel integration requirement means long build time before full value. The commitment extraction AI must be highly accurate — false positives (surfacing non-commitments) erode trust, false negatives (missing real commitments) defeat the purpose. Privacy concerns are acute: the system reads all email, meeting transcripts, and chat — users must deeply trust the product. Could be seen as "surveillance" if not positioned carefully. However, this is the solution most aligned with the clinical mechanism (prospective memory failure) and the one that addresses the most problems simultaneously.

---

## Score Summary Table

| Rank | Solution | Problem(s) | Solution Score | Problem Score | Market Gap | **Combined** |
|------|----------|-----------|---------------|---------------|------------|-------------|
| 1 | **Encoding Compensator** (Meeting Memory) | FP07 | 15 | 11 | 8 | **34** |
| 2 | **Voice-to-Doc Bridge** (Documentation) | FP11 | 15 | 10 | 10 | **35** |
| 3 | **Activation Engine** (Task Initiation) | FP01 | 13 | 14 | 10 | **37** |
| 4 | **Reply Intent Tracker** (Email) | FP09 | 13 | 11 | 8 | **32** |
| 5 | **Interest-Aware Surfacer** (Prioritisation) | FP05 | 12 | 13 | 8 | **33** |
| 6 | **Time Perception Calibrator** (Time Blindness) | FP03 | 12 | 14 | 9 | **35** |
| 7 | **Project Pulse Monitor** (Project Neglect) | FP08 | 10 | 12 | 10 | **32** |
| 8 | **Remember For Me** (Prospective Memory Platform) | FP07+FP09+FP08+FP11 | 12 | N/A (multi) | N/A (multi) | *see below* |

### Interpreting the Combined Scores

The combined score is **indicative, not determinative** (per the methodology). Key interpretive notes:

1. **FP01 (Activation Engine) has the highest combined score (37)** because of its massive problem score (14). Task initiation is the most frequently discussed, highly differentiated problem — but the solution is only moderately feasible (13/20). The core challenge is making nudges work without fatigue.

2. **FP11 (Voice-to-Doc) and FP03 (Time Calibrator) tie at 35** but for very different reasons. Voice-to-Doc has the highest solution feasibility (15) but lower problem/market scores. Time Calibrator has the highest problem score (14) but moderate feasibility. Voice-to-Doc is easier to build; Time Calibrator addresses a bigger problem.

3. **FP07 (Encoding Compensator) scores 34 with the joint-highest solution score (15).** The passive, zero-behaviour-change design is ideal for ADHD. The challenge is competing in a noisy general market.

4. **The Prospective Memory Platform doesn't score on the same scale** because it addresses 4 problems simultaneously. Its solution score (12) is moderate, reflecting higher complexity and integration dependency. However, its strategic value lies in addressing the *mechanism* rather than the *symptoms*. If Humble's thesis is "AI as external executive function," this is the most aligned approach.

---

## Strategic Groupings

### Path A: "Quick Win + Expand" (fastest to market, lowest risk)
- **Start:** Voice-to-Doc Bridge (FP11) — lightest build, standalone, immediate value
- **Then:** Encoding Compensator (FP07) — passive, high retention potential
- **Then:** Reply Intent Tracker (FP09) — extends into email
- **Narrative:** "We replace your broken prospective memory, one channel at a time"

### Path B: "Hub Problem First" (highest impact, moderate risk)
- **Start:** Activation Engine (FP01) — addresses #1 user pain point
- **Add:** Time Perception Calibrator (FP03) — addresses #1 hub problem
- **Add:** Interest-Aware Surfacer (FP05) — addresses prioritisation root cause
- **Narrative:** "We provide the external executive function your brain needs to start and stay on track"

### Path C: "Platform Play" (highest ambition, highest risk)
- **Start:** Prospective Memory Platform (cross-cutting) — multi-channel commitment tracking
- **Initial scope:** Email reply tracking + meeting commitment extraction
- **Expand:** Slack/Teams monitoring, project engagement tracking
- **Narrative:** "We remember what you meant to do, across every channel"

### Path D: "Niche Beachhead" (most defensible, narrowest)
- **Focus:** Encoding Compensator (FP07) only — ADHD-specific meeting memory
- **Differentiate:** Proactive resurfacing, spaced repetition, commitment tracking
- **Expand only after:** Proven retention and word-of-mouth in ADHD community
- **Narrative:** "Never lose what happened in a meeting again"

---

## Limitations

1. **Solution scores are prospective estimates.** No prototyping or user testing has been conducted. Actual feasibility may differ significantly.
2. **Behavioural change scores assume ideal UX.** A poorly-designed passive tool can still create friction; a well-designed active tool can feel effortless. Execution quality dominates.
3. **Integration dependency scores assume current API availability.** API changes (especially by Google, Microsoft, or Zoom) could increase dependency risk.
4. **The "app graveyard" problem applies to all solutions.** Retention design — the ability to maintain user engagement beyond the initial dopamine hit — may be more important than any feature design. This is not captured in the scoring framework.
5. **Combined scores weight all three layers equally.** The methodology explicitly states scores are indicative, not mechanically determinative. A high-problem, high-gap, low-solution opportunity may still be preferable to a low-problem, low-gap, high-solution one.
