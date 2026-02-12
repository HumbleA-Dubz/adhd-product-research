# S2: Gate Filter Results

## Methodology Note

Two binary pass/fail gates are applied to each functional problem before scoring. Problems that fail either gate are discarded from further analysis but retained in this document for transparency.

**Gate 1: Software Amenability**
Can software provide meaningful support for this problem without requiring clinical validation or human services?
- PASS: Software can fully address, substantially reduce impact, or provide meaningful support as part of a broader approach
- FAIL: Software can only assist while primary intervention requires human/clinical support, or problem fundamentally requires clinical intervention

**Gate 2: Individual Addressability**
Can the user achieve meaningful improvement through their own actions, without requiring cooperation from managers, colleagues, or organisational systems?
- PASS: User can address fully through own actions, or external cooperation is helpful but not required, or partial solution possible alone
- FAIL: Requires manager/colleague/system cooperation for meaningful improvement, or problem primarily resides in workplace/systems

---

## Summary

| Metric | Count |
|--------|-------|
| Total problems assessed | 20 |
| **Passed both gates** | **13** |
| Failed Gate 1 (Software Amenability) | 3 |
| Failed Gate 2 (Individual Addressability) | 2 |
| Failed both gates | 1 |
| Borderline (passed with caveats) | 3 |

---

## Detailed Results

### FP01: Task Initiation Failure — PASS

**Gate 1: Software Amenability — PASS**
- Rationale: Software can provide meaningful support through external prompts, task decomposition, environmental cues, and momentum-building mechanisms. P2B documents that users actively seek software solutions for this problem — the tool failure patterns (assumption of existing discipline, out-of-sight-out-of-mind) indicate design failures, not fundamental software unsuitability. P1B's Work-MAP trial shows that strategy-based interventions (which could be partially automated) improve initiation. Software cannot eliminate the neurological barrier but can substantially reduce its impact.
- Evidence: P2B (users attempt software solutions), P1B (Work-MAP strategy development), P2C (coaches use external accountability systems)

**Gate 2: Individual Addressability — PASS**
- Rationale: Task initiation is primarily an individual-level failure. Users can adopt tools, strategies, and environmental modifications without employer cooperation. Body doubling (digital), self-set timers, and task decomposition are all individual actions. No organisational permission or colleague cooperation required.
- Evidence: P2A (users describe individual workarounds), P2C (coaching addresses this individually)

---

### FP02: Inconsistent Focus / Sustained Attention Failure — PASS

**Gate 1: Software Amenability — PASS**
- Rationale: Software can support focus through distraction blocking, environment management, session structuring, and progress tracking. P2B documents multiple tool categories targeting this (Pomodoro apps, focus apps, website blockers). While the neurological basis of attention failure means software cannot "fix" it, interventions like timed work sessions, notification management, and ambient focus tools provide meaningful support. The failure of existing tools (P2B) reflects design problems, not software unsuitability.
- Evidence: P2B (extensive tool ecosystem exists), P1B (Pomodoro, focus apps recommended by experts)

**Gate 2: Individual Addressability — PASS**
- Rationale: Focus management is primarily within individual control. Users can install focus tools, manage their notification environment, structure their own work sessions, and modify their personal workflow. Environmental distractions (open offices) involve some employer dependency, but the core focus failure is individually addressable.
- Evidence: P2A (users describe individual strategies), P1B (noise-cancelling headphones as individual accommodation)

---

### FP03: Time Estimation Errors / Time Blindness — PASS

**Gate 1: Software Amenability — PASS**
- Rationale: Software can externalise time perception — visual timers, elapsed-time displays, historical tracking of task durations, and automated estimation based on past performance. P2C identifies "externalise time" as the primary coaching intervention; software is the natural delivery mechanism. P1B lists calendar/reminder systems and visual timers among recommended accommodations. The problem is fundamentally about information the brain fails to generate internally — software can provide that information externally.
- Evidence: P2C (externalise time as intervention), P1B (timers, calendars recommended), P2A (users describe this as practically damaging but potentially solvable)

**Gate 2: Individual Addressability — PASS**
- Rationale: Time estimation is an individual cognitive function. Users can adopt timers, tracking tools, and estimation systems without employer involvement. The downstream consequence (missed deadlines) sometimes involves others, but the estimation failure itself is individually addressable.
- Evidence: P2A (individual workarounds attempted — doubling estimates), P2C (individual coaching interventions)

---

### FP04: Deadline Misses / Late Delivery — PASS

**Gate 1: Software Amenability — PASS**
- Rationale: Software can provide escalating deadline alerts, progress tracking against milestones, automated status updates, and early-warning systems when pace is insufficient to meet deadlines. This is a downstream consequence of FP02 (focus), FP03 (time blindness), and FP05 (prioritisation), so software addressing upstream causes also addresses this. P1B documents calendar/reminder systems specifically targeting deadline management.
- Evidence: P1B (calendar/reminder systems), P2B (task management tools attempt this)

**Gate 2: Individual Addressability — PASS**
- Rationale: While deadlines are set by others, the failure to meet them is primarily an individual execution problem. Users can adopt tools for tracking, pacing, and self-monitoring without employer cooperation. Requesting deadline extensions involves others but is a coping mechanism, not a core requirement.
- Evidence: P2A (users describe individual failures and strategies)

---

### FP05: Prioritisation Failure — PASS

**Gate 1: Software Amenability — PASS**
- Rationale: Software can reduce prioritisation decisions through automated sorting, forced-ranking interfaces, "next action" recommendations, and AI-driven task sequencing. P2B's finding that users want "reduced decisions, not more options" and "the next best step, not a demanding list of decisions" directly describes a software-solvable need. P1B lists AI planning tools (e.g., Motion) that automatically sequence tasks.
- Evidence: P2B (users want automated prioritisation), P1B (AI planning tools recommended)

**Gate 2: Individual Addressability — PASS**
- Rationale: Prioritisation is an individual cognitive task. While priorities are sometimes set by managers, the failure to execute against known priorities is individually addressable through tools and frameworks.
- Evidence: P2A (21.86% cite this as top individual challenge), P2C (coaches address this individually)

---

### FP06: Attention-to-Detail Errors — PASS

**Gate 1: Software Amenability — PASS**
- Rationale: Software can provide automated checking, verification prompts, error detection (spell-check, linters, validation rules), checklists with completion verification, and review workflows. The problem is about errors slipping through despite effort — software that catches errors independently of human attention directly addresses this. Domain-specific tools (code linters, accounting validators) already partially solve this in specific contexts.
- Evidence: P2A (programmers describe specific error types software could catch), P1B (checklists and structured processes recommended)

**Gate 2: Individual Addressability — PASS**
- Rationale: Error-checking is primarily an individual activity. Users can adopt checking tools, create personal checklists, and use verification software without employer cooperation.
- Evidence: P2A (users describe individual checking strategies — "checking my work 2 or 3x")

---

### FP07: Meeting / Instruction Memory Failure — PASS

**Gate 1: Software Amenability — PASS**
- Rationale: Software can record, transcribe, summarise, and extract action items from meetings and conversations. AI-powered meeting assistants (Otter, Fireflies, etc.) directly address this. The problem is about information not being retained after processing — software that captures and resurfaces information compensates for the retention failure.
- Evidence: P1B (working memory aids recommended), P2A (users describe the specific failure software could address)

**Gate 2: Individual Addressability — PASS (with caveat)**
- Rationale: Meeting recording/transcription tools can be adopted individually in many contexts. However, some workplaces restrict recording, and some meeting platforms require host permission for AI assistants. The core strategy (capturing and reviewing information) is individually actionable, but implementation may require organisational tolerance.
- Caveat: In workplaces that prohibit recording, this becomes harder to address individually. Partial solutions (manual note-taking aids, structured note templates) remain available.
- Evidence: P2A (users describe individual failure), market reality (meeting AI tools are widely adopted individually)

---

### FP08: Long-Term Project Neglect — PASS

**Gate 1: Software Amenability — PASS**
- Rationale: Software can address delay discounting through milestone tracking, progress visualisation, automatic task surfacing for neglected projects, and breaking distant deadlines into proximate milestones. The core failure is that distant rewards don't motivate action — software can create artificial urgency and intermediate checkpoints. P2B's insight that users want "proactive intervention" directly applies here.
- Evidence: P2B (users want tools that "intervene before we get stuck"), P2A (delay discounting mechanism is well-understood)

**Gate 2: Individual Addressability — PASS**
- Rationale: Project management is primarily individual. Users can set up milestone systems, progress tracking, and self-accountability without employer cooperation. The projects themselves come from employers, but the management of progress toward them is individual work.
- Evidence: P2A (user terminated for individual failure on long-term projects)

---

### FP09: Email / Communication Management Failure — PASS

**Gate 1: Software Amenability — PASS**
- Rationale: Software can triage, prioritise, surface unanswered messages, draft responses, and manage inbox workflows. AI email assistants, auto-categorisation, and follow-up reminders directly address the specific failures described (forgetting to reply, inbox accumulation, paralysis facing large queues).
- Evidence: P2A (specific failures are software-addressable), P1B (working memory aids)

**Gate 2: Individual Addressability — PASS**
- Rationale: Email management is primarily individual. Users can adopt email tools, set up rules, and modify their communication habits without employer cooperation.
- Evidence: P2A (users describe individual strategies and failures)

---

### FP10: Context Switching Cost — PASS (Borderline)

**Gate 1: Software Amenability — PASS (borderline)**
- Rationale: Software can partially address this through context-saving features (saving work state before interruptions), quick-return mechanisms, and interruption management (batching notifications, protecting focus periods). However, the core problem — the neurological cost of switching attentional context — is not directly software-solvable. Software can reduce the frequency of unnecessary switches and speed up reorientation, but cannot eliminate the cognitive cost.
- Borderline because: The most impactful intervention (reducing interruptions) depends partly on workplace culture and meeting load that the individual doesn't control. The software component (context capture/restore) provides meaningful but partial support.
- Evidence: P2A (programmers describe specific reorientation patterns), P1B (focus tools)

**Gate 2: Individual Addressability — PASS (borderline)**
- Rationale: Users can adopt notification management, block focus time on their calendars, and use context-saving tools individually. However, meetings, colleague interruptions, and organisational communication norms are partly outside individual control.
- Borderline because: In meeting-heavy workplaces, the individual cannot meaningfully reduce context switches without organisational change.
- Evidence: P2A (users describe individual strategies — protecting focus time)

---

### FP11: Documentation / Administrative Paralysis — PASS

**Gate 1: Software Amenability — PASS**
- Rationale: Software can reduce documentation burden through templates, auto-generation, voice-to-text dictation, and AI-assisted drafting. The problem is that documentation is uniquely aversive for ADHD brains due to its low-stimulation, high-effort nature — software can reduce the effort required and provide scaffolding to get started. P1B documents TTS/STT tools and AI assistance as relevant accommodations.
- Evidence: P1B (TTS/STT tools, AI writing assistance), P2A (specific aversion described)

**Gate 2: Individual Addressability — PASS**
- Rationale: Documentation is individual work. Users can adopt dictation tools, templates, and AI writing assistants without employer cooperation.
- Evidence: P2A (users describe individual struggle and attempted strategies)

---

### FP12: Chronic Lateness — PASS

**Gate 1: Software Amenability — PASS**
- Rationale: Software can provide departure-time alerts (accounting for travel time and preparation), escalating reminders, and time-awareness prompts. Smart calendar apps already incorporate "time to leave" notifications. The core failure is losing track of time before commitments — software that externalises time awareness directly addresses this.
- Evidence: P1B (calendar/reminder systems), P2C (externalise time)

**Gate 2: Individual Addressability — PASS**
- Rationale: Arriving on time is individually controllable. Users can set alarms, departure reminders, and preparation routines without employer cooperation.
- Evidence: P1A (individual behaviour), P2C (coaches address this individually)

---

### FP13: Attendance / Sickness Absence — FAIL (Gate 2)

**Gate 1: Software Amenability — FAIL (borderline)**
- Rationale: Software has very limited ability to address attendance problems. Sickness absence is primarily medical (ADHD comorbidities — depression, anxiety, burnout). Software cannot prevent illness. Reminder apps cannot address the health conditions driving excess absence. The 2.7x higher risk of long-term sickness absence reflects medical/psychological factors beyond software's reach.
- Evidence: P1A (driven by comorbid conditions), P1C (medical — 34 days vs 8 days siblings)

**Gate 2: Individual Addressability — FAIL**
- Rationale: While some absence is individually influenced (morning routine, sleep management), the primary drivers — comorbid mental health conditions, burnout cycles, and long-term sickness — require clinical support. The 10-fold higher disability pension risk indicates systemic/medical factors. Employer policies on sick leave, flexible working, and return-to-work support are also critical factors outside individual control.
- Evidence: P1A (2.7x long-term sickness risk, 10x disability pension risk — systemic/medical), P2C (burnout cycle requires systemic change)

---

### FP14: Interpersonal Conflict with Supervisors — FAIL (Gate 2)

**Gate 1: Software Amenability — FAIL**
- Rationale: Supervisor relationships are fundamentally interpersonal. Software cannot meaningfully mediate supervisor-employee dynamics, manage perceived insubordination, or prevent arguments. The problem resides in real-time social interactions that require emotional regulation and communication skills — domains where software provides negligible support. Self-monitoring tools could offer marginal awareness, but the primary intervention is interpersonal skill development through coaching or therapy.
- Evidence: P1B (OT consensus identifies social awareness as requiring interpersonal intervention, not technology), P2C (coaches address this through relationship coaching)

**Gate 2: Individual Addressability — FAIL**
- Rationale: Supervisor conflict is inherently bilateral. Meaningful improvement requires the supervisor's willingness to understand ADHD, adjust communication style, and provide appropriate feedback. P2C notes that disclosure to supervisors is itself a complex challenge, and that managers who "don't know how to respond appropriately" are a primary barrier. Individual behaviour change helps, but the problem fundamentally resides in a relationship requiring both parties.
- Evidence: P2C (disclosure dilemma, manager understanding required), P1C (supervisor conflict as termination trigger involves manager decisions)

---

### FP15: Team Collaboration Failure — FAIL (Gate 2)

**Gate 1: Software Amenability — PASS (marginal)**
- Rationale: Software could partially support team collaboration through automated hand-off tracking, commitment logging, and follow-up reminders. However, the core failures (interrupting, appearing disengaged, dominating discussions) are real-time interpersonal behaviours that software cannot meaningfully address.

**Gate 2: Individual Addressability — FAIL**
- Rationale: Team collaboration failures require the cooperation of team members. Strained relationships, missed hand-offs, and communication friction are bilateral. While the individual can adopt reminders for commitments, the perception of being disengaged or disruptive is shaped by colleagues' reactions and workplace culture. Meaningful improvement requires both individual strategy and team understanding.
- Evidence: P1A (employer/team perception-dependent), P2C (requires workplace culture adaptation)

---

### FP16: Emotional Outbursts / Dysregulation at Work — FAIL (Gate 1)

**Gate 1: Software Amenability — FAIL**
- Rationale: Emotional dysregulation in the moment — reacting with disproportionate frustration, anger, or sensitivity to criticism — is not software-addressable. The failure occurs in real-time social interactions faster than any software intervention could intercept. P2C identifies CBT and psychosocial interventions (d=.56 effect size) as the effective approach. Emotion-tracking apps exist but do not prevent outbursts. The primary intervention is therapeutic skill development.
- Evidence: P2C (psychosocial interventions required), P1B (OT consensus — self-management through sensory regulation and stress management, requiring clinical guidance)

**Gate 2: Individual Addressability — PASS (partial)**
- Rationale: Emotional regulation is individually practised, though learning the skills typically requires professional support (therapy, coaching). Once learned, strategies can be applied individually.

---

### FP17: Impulsive Job Quitting — FAIL (Gate 1)

**Gate 1: Software Amenability — FAIL**
- Rationale: Impulsive quitting is a momentary, high-stakes decision driven by boredom, conflict, or emotional reactivity. Software cannot prevent someone from submitting a resignation. A "cooling-off" app would be ignored in the moment of impulsive action. The problem requires impulse control and emotional regulation skills that are clinical/coaching domains.
- Evidence: P1A (impulsive behaviour), P1C (3x more likely — driven by impulsivity trait)

**Gate 2: Individual Addressability — PASS**
- Rationale: The decision to quit is individual. However, addressing it requires impulse control skills typically developed through therapy or coaching, not software.

---

### FP18: Workspace Disorganisation — PASS

**Gate 1: Software Amenability — PASS**
- Rationale: Digital workspace disorganisation is directly software-addressable — automated file organisation, search, tagging, and retrieval systems can compensate for poor filing habits. Physical workspace disorganisation is partially addressable through digital reminders, photo-based organisation systems, and habit-prompting tools. P1B's OT consensus identifies environmental modification as a key intervention area; software supports the digital component.
- Evidence: P1B (OT consensus — organising environments), P2C (structure as foundational intervention)

**Gate 2: Individual Addressability — PASS**
- Rationale: Workspace organisation is individual. Users can adopt filing systems, digital organisation tools, and decluttering routines without employer cooperation.
- Evidence: P2C (coaches address this individually), P1B (individual accommodation)

---

### FP19: Safety Errors / Workplace Accidents — FAIL (Both Gates)

**Gate 1: Software Amenability — FAIL**
- Rationale: Workplace safety involves physical operations (machinery, vehicles, PPE) in real-time environments. Software cannot prevent inattentive equipment operation or ensure PPE compliance in the moment. While checklists and safety reminders exist, they address a tiny fraction of the risk. The 2x+ accident risk reflects real-time attentional failures in physical environments that software cannot meaningfully address.
- Evidence: P1A (physical safety incidents — machinery, traffic, PPE)

**Gate 2: Individual Addressability — FAIL**
- Rationale: Workplace safety is governed by organisational safety systems, procedures, supervision, and regulatory requirements. Individual behaviour is one factor, but the safety system is organisational. Meaningful improvement requires employer-level safety accommodations (role modification, reduced operation of dangerous equipment).
- Evidence: P1A (organisational safety systems required)

---

### FP20: Underperforming Relative to Capability — PASS (with note)

**Gate 1: Software Amenability — PASS**
- Rationale: As a meta-outcome of FP01–FP11, underperformance is addressed by addressing the upstream problems. Software that improves task initiation, focus, time management, and prioritisation will collectively reduce underperformance. No standalone "anti-underperformance" tool is needed; the aggregate effect of addressing component problems creates the improvement.
- Evidence: P1A (composite of multiple WFIRS items)

**Gate 2: Individual Addressability — PASS**
- Rationale: If the component problems (FP01–FP11) are individually addressable (which they are), then the meta-outcome is also individually addressable.

**Note:** FP20 will not be scored separately in the Problem Layer because it is a composite outcome. It is retained for reference and will be revisited in the synthesis (Step 8) as a measure of overall impact.

---

## Results Summary

### Problems Passing Both Gates (13) — Proceed to Scoring

| ID | Problem | Gate 1 | Gate 2 | Notes |
|----|---------|--------|--------|-------|
| FP01 | Task Initiation Failure | PASS | PASS | |
| FP02 | Inconsistent Focus / Sustained Attention Failure | PASS | PASS | |
| FP03 | Time Estimation Errors / Time Blindness | PASS | PASS | |
| FP04 | Deadline Misses / Late Delivery | PASS | PASS | |
| FP05 | Prioritisation Failure | PASS | PASS | |
| FP06 | Attention-to-Detail Errors | PASS | PASS | |
| FP07 | Meeting / Instruction Memory Failure | PASS | PASS | Borderline G2 — recording may need org tolerance |
| FP08 | Long-Term Project Neglect | PASS | PASS | |
| FP09 | Email / Communication Management Failure | PASS | PASS | |
| FP10 | Context Switching Cost | PASS | PASS | Borderline both — partial software support, partly org-dependent |
| FP11 | Documentation / Administrative Paralysis | PASS | PASS | |
| FP12 | Chronic Lateness | PASS | PASS | |
| FP18 | Workspace Disorganisation | PASS | PASS | |

### Problems Failing Gates (7) — Discarded from Scoring

| ID | Problem | Failed Gate | Reason |
|----|---------|-------------|--------|
| FP13 | Attendance / Sickness Absence | Both (G1 borderline, G2 fail) | Medical/systemic drivers; software cannot prevent illness; employer policies critical |
| FP14 | Interpersonal Conflict with Supervisors | Both | Interpersonal; requires bilateral relationship change; software negligible |
| FP15 | Team Collaboration Failure | G2 | Requires team cooperation; perception-dependent |
| FP16 | Emotional Outbursts / Dysregulation | G1 | Real-time emotional reactions; requires therapeutic intervention |
| FP17 | Impulsive Job Quitting | G1 | Momentary impulse control; software cannot prevent resignation decisions |
| FP19 | Safety Errors / Workplace Accidents | Both | Physical environment; organisational safety systems required |
| FP20 | Underperforming Relative to Capability | N/A — PASS but excluded | Meta-outcome; addressed via component problems; not scored separately |

---

## Borderline Cases — Rationale for Inclusion

Three problems passed both gates but were flagged as borderline. These are included in scoring but their borderline status should be noted when interpreting scores:

1. **FP07 (Meeting Memory)** — Gate 2 borderline because recording tools may require organisational tolerance. Included because: manual note-taking aids and structured templates remain available without permission, and meeting AI tools are increasingly accepted as individual productivity tools.

2. **FP10 (Context Switching)** — Both gates borderline because the most impactful intervention (reducing interruptions) is partly organisational. Included because: notification management, focus-time blocking, and context-saving tools provide meaningful individual-level support even in meeting-heavy environments.

3. **FP18 (Workspace Disorganisation)** — Not formally borderline but worth noting: physical workspace organisation has limited software support (primarily digital workspace). Included because digital disorganisation (files, folders, bookmarks, downloads) is fully software-addressable and increasingly where work happens.
