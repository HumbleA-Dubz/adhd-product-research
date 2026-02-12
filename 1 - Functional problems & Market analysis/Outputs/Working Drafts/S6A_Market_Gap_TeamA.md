# S6A: Market Gap Layer Analysis — Team A

**Problems Analysed:** FP03 (Time Estimation Errors / Time Blindness), FP01 (Task Initiation Failure), FP05 (Prioritisation Failure)

**Methodology:** Web search across app stores, product listings, Crunchbase/funding databases, ADHD community forums (Reddit r/ADHD, ADDitude Magazine), product review platforms (G2, Capterra, Trustpilot, App Store), and market research reports. Scoring follows the Market Gap Layer framework from `ADHD_Product_Pathway_Methodology.docx`.

**Date:** 2026-02-06

---

## FP03: Time Estimation Errors / Time Blindness

**Problem Score (from S3):** 14

### Q1: How noisy is the market?

**Score: 2 (Noisy)**

The time management tools market is crowded. Broad-category players (Google Calendar, Apple Calendar, Todoist, TickTick) occupy the general space, while a growing wave of ADHD-marketed tools (Tiimo, Structured, Morgen, Sunsama, Motion, RoutineFlow) compete for the neurodivergent segment. ADDitude Magazine lists 42+ time management apps and hacks for ADHD brains. The ADHD apps market overall was valued at approximately $1.9-2.4 billion in 2024 (The Business Research Company; Business Research Insights) and is projected to reach $4-7.5 billion by the early 2030s at 10-16% CAGR.

However, the noise is somewhat diffuse. Most tools address "time management" broadly (calendaring, reminders, to-do lists) rather than the specific neurological deficit of time perception/estimation. The sub-problem of *time estimation calibration* — helping users learn how long tasks actually take versus how long they think they take — has very few dedicated solutions. This creates a misleading picture: the market is noisy for time management generally, but quieter for the specific mechanism of time blindness.

**Evidence:**
- ADDitude Magazine survey: 1,859 adults with ADHD; one-third said time management/productivity problems contribute the greatest amount of stress to their lives
- Broad time management app category includes hundreds of general-purpose tools
- ADHD-specific segment is smaller but growing rapidly (Tiimo: 3M+ downloads, 50K+ paying subscribers; RoutineFlow: 15K reviews)

### Q2: What products exist?

| Product | Description | ADHD-Specific? | Maturity |
|---------|-------------|----------------|----------|
| **Time Timer** | Visual countdown timer showing time as shrinking red disk; physical device + app | Originally special-ed, now mainstream; strong ADHD adoption | Mature (~25 years, bootstrapped, profitable; no VC) |
| **Tiimo** | Visual timeline planner with icon-based scheduling; AI planning assistant | Yes (founded by ADHD/dyslexia co-founder) | Emerging-Established (~2015 founding; $4.8-6.1M raised; 50K+ paying subscribers; Apple App of the Year 2025) |
| **Structured** | Visual daily timeline planner with drag-and-drop scheduling | General with ADHD marketing | Emerging (#1 downloaded day planner on App Store; Apple ecosystem only) |
| **RoutineFlow** | Routine planner with time tracking analytics showing estimated vs. actual task durations | Yes (ADHD solo developer) | Early (version 0.9.x; 15K reviews; 4.4 stars) |
| **Motion** | AI auto-scheduling that places tasks on calendar based on priority/deadline | General with ADHD marketing | Established (founded 2019; $13M+ Series A; progressed to Series C; $34/mo individual) |
| **Sunsama** | Daily planning flow with time estimation prompts and calendar integration | General with strong ADHD community adoption | Established (founded ~2017; $2.75M seed; 600+ influencer ambassadors; $20/mo) |
| **Morgen** | Calendar consolidation with AI planner, Frames for recurring time blocks, timeboxed alerts | General with ADHD use case | Emerging (multi-calendar sync focus) |
| **TickTick** | Task manager with built-in Pomodoro timer, calendar, habit tracking | General | Established (widely used, freemium) |
| **Reclaim AI** | AI calendar optimization, automatic Focus Time protection, Buffer Builder between meetings | General with ADHD-friendly features | Established (free tier; $10-22/mo paid) |
| **Forest** | Gamified focus timer — plant trees that grow while you stay off your phone | General | Established (popular, millions of downloads) |
| **Flown** | Virtual coworking/body doubling platform with timed sessions, facilitator-guided transitions | ADHD-friendly (not exclusively) | Emerging ($25/mo; 397 Trustpilot reviews at 5 stars; 30-day free trial) |
| **RescueTime** | Automatic background time tracking and analytics; identifies time sinks and hyperfocus patterns | General | Mature (10+ years) |

### Q3: How mature are leading products?

**Score: 3 (Established)**

The time management space has clear market leaders. Time Timer is a 25-year-old mature product that has become the "gold standard" for visual time representation in ADHD/special education. In the digital space, Tiimo has emerged as the leading ADHD-specific visual planner (Apple App of the Year 2025, $4.8-6.1M raised, 50K+ paying subscribers). Motion has raised $13M+ and reached Series C. Sunsama and Reclaim are established SaaS products with meaningful user bases.

However, no single product dominates the *time estimation calibration* sub-problem. RoutineFlow is the closest — tracking estimated vs. actual task durations — but it is early-stage (solo developer, version 0.9.x). Sunsama prompts users to add time estimates but does not track estimation accuracy over time. This specific sub-niche within the broader time management category remains under-served.

### Q4: ADHD user review effectiveness?

**Score: 4 (Mixed-negative)**

ADHD users express consistent frustration that time management tools fail to address the root neurological deficit. The pattern is well-documented: download a promising app, feel initial excitement from novelty, abandon it within 1-2 weeks. One Medium author documented deleting 47 productivity apps in 30 days. A Lunatask testimonial stated: "I've jumped from tool to tool for decades. Abandoned most of them in 6 months."

Specific complaints about time-related tools:
- Standard calendars and reminders assume an internal time sense that does not exist
- Visual timers (Time Timer) help somewhat but only address the *awareness* layer, not the *estimation* layer
- Pomodoro timers impose an arbitrary external rhythm that does not match ADHD attention patterns
- AI scheduling (Motion) auto-plans tasks but does not help users develop time estimation skills; initial setup is overwhelming
- One App Store reviewer warned about Motion: "People with ADHD, put this $300 into your emergency fund and use Reclaim.ai instead"

Positive signals:
- Tiimo gets strong ADHD community love for its visual timeline approach (4.8 stars App Store)
- RoutineFlow users report it "really helped my ADHD related time blindness"
- Flown praised on Reddit r/ADHD as "one of the few productivity tools they've stuck with long-term" (5.0 Trustpilot)

### Q5: Root cause of existing solution failures

Existing tools fail ADHD users on time blindness for three interconnected reasons:

1. **They externalize scheduling, not time perception.** Most tools (Motion, Sunsama, Reclaim) schedule tasks for you based on deadlines and priority, but this does not address the underlying inability to perceive time passage. The user still cannot feel how long 30 minutes is. They solve the *planning* problem but not the *perception* problem. Research shows ADHD individuals may have an "accelerated internal pacemaker" due to dopaminergic dysregulation, causing systematic overestimation of elapsed time (MDPI review, 2023).

2. **They lack calibration feedback loops.** Almost no tool systematically tracks the gap between estimated and actual task duration over time, then uses that data to improve future estimates. RoutineFlow has a nascent version of this feature, but it is early-stage and limited to routine tasks. Sunsama prompts for time estimates but does not close the loop. The research is clear: college students with ADHD show "significantly different" time estimation compared to non-ADHD peers, particularly on retrospective estimates (Prevatt et al., 2011, Journal of Attention Disorders). Tools that do not address this calibration gap are treating a symptom (poor planning) rather than the cause (poor time perception).

3. **They assume consistent engagement.** Time management apps require the user to open them, check them, and respond to them — but ADHD disrupts prospective memory (remembering to do things in the future) and strategic time monitoring. A 2025 study in Scientific Reports found that children with ADHD monitored time "less strategically," and that strategic time monitoring accounted for 22.1% of variance in time-based prospective memory performance. Tools that rely on the user remembering to use them are defeated by the same executive function deficits they aim to address.

### Key Sources Consulted

- ADDitude Magazine: time management survey (n=1,859) and app listings
- The Business Research Company: ADHD apps market report 2024-2029
- Crunchbase/PitchBook: Tiimo ($4.8-6.1M), Motion ($13M+ Series A to Series C), Sunsama ($2.75M)
- App Store/Google Play reviews: Tiimo (4.8 stars), RoutineFlow (4.4 stars, 15K reviews), Structured (#1 day planner)
- MDPI: "Time Perception in Adult ADHD: Findings from a Decade" (2023 review)
- Prevatt et al., 2011: "Time Estimation Abilities of College Students With ADHD," Journal of Attention Disorders
- Scientific Reports 2025: VR study on time-monitoring and prospective memory in ADHD
- Reddit r/ADHD and community discussions referenced via Fluidwave, ADHDAdvisor.org, and product review aggregators

### Notable Uncertainties

- Motion's exact total funding beyond Series A ($13M) is unclear from public sources; Crunchbase lists Series C but amounts are not publicly disclosed
- RoutineFlow is a solo-developer project; longevity and scale are uncertain
- The distinction between "time management" market noise and "time blindness/estimation" market noise is analytically important but hard to measure precisely — most market research does not segment this way
- Research on time perception tools as interventions (not just assessments) is very limited

---

## FP01: Task Initiation Failure

**Problem Score (from S3):** 14

### Q1: How noisy is the market?

**Score: 3 (Moderate)**

The task initiation problem sits at the intersection of task management (very noisy) and clinical executive function support (quiet). The general productivity app space is extremely crowded — hundreds of to-do list apps, planners, and project management tools exist. However, *task initiation specifically* (the inability to start a known task, distinct from prioritisation or planning) is addressed by far fewer products directly. The tools that come closest include:

- Body doubling platforms (Focusmate, Flown, Flow Club) — which address initiation through social presence
- Task breakdown tools (Goblin Tools) — which address initiation by reducing overwhelm
- Gamified focus apps (Forest, Habitica, Finch) — which address initiation through external reward

The broader productivity market is very noisy (Todoist, Notion, ClickUp, Asana, etc.), but these tools largely assume initiation works and focus on task *organisation*. The ADHD-specific initiation space is more moderate, with a growing but still manageable set of dedicated tools.

### Q2: What products exist?

| Product | Description | ADHD-Specific? | Maturity |
|---------|-------------|----------------|----------|
| **Focusmate** | Virtual body doubling — pairs users for timed coworking sessions with real people | ADHD-popular (not exclusively) | Established (founded 2017; Pre-Seed from Nir Eyal; free tier + $6.99-9.99/mo; extensive press coverage: NYT, CNN, Fast Company) |
| **Flown** | Facilitated virtual coworking with Deep Dives, Power Hours, guided transitions | ADHD-friendly | Emerging ($25/mo to $900 lifetime; 5.0 Trustpilot with 397 reviews) |
| **Flow Club** | Virtual coworking community; 2,000+ sessions/week; executive function support design | ADHD-friendly | Emerging (competitor to Focusmate/Flown) |
| **Goblin Tools** | AI task breakdown — type a task, get instant step-by-step decomposition with "spiciness" slider | Yes (built for neurodivergent users) | Emerging (free web tool + paid app; 4.7 stars Google Play, 100K+ downloads; 4.8 stars App Store; viral in ADHD community; indie project by Bran De Buyser) |
| **Forest** | Gamified focus timer — plant virtual trees during work sessions | General | Established (millions of downloads, well-known) |
| **Habitica** | RPG-style gamification of tasks — earn XP, level up, fight monsters | General | Mature (long-running, strong Reddit following) |
| **Finch** | Virtual pet care app tied to task completion and habit building | General with ADHD adoption | Emerging ($9.99/mo premium) |
| **Brain.fm** | Scientifically engineered focus music to reduce initiation friction | General | Established (patented audio technology; subscription model) |
| **Super Productivity** | Timeboxing and task management with satisfying completion animations and progress tracking | General with ADHD features | Established (open-source; no account required) |
| **Tiimo** | Visual timeline planner with routine support and transition nudges | Yes | Emerging-Established (see FP03 above) |
| **Amazing Marvin** | Highly customizable task manager with gamification, focus tools, multiple strategy toggles | ADHD-popular | Established (~5 years; $12/mo; no free plan; fanatical user base; weak mobile app) |
| **Lunatask** | Holistic ADHD planner: tasks, habits, mood, journal, pomodoro, all-in-one | Yes | Emerging |
| **Numo** | Gamified ADHD planner with community "Squads" for social accountability | Yes | Emerging (funded by Google for Startups; 71K Android downloads; 3.13 stars Google Play; $7.99/mo) |

### Q3: How mature are leading products?

**Score: 3 (Established)**

Body doubling as a category has established players: Focusmate (2017, NYT/CNN coverage, investor Nir Eyal), Flown (5-star Trustpilot), and Flow Club (2,000+ sessions/week). Goblin Tools went viral in the ADHD community and has achieved significant organic traction (100K+ downloads, 4.7-4.8 stars) but remains an indie project without VC backing. Amazing Marvin has built a devoted user base over ~5 years but is desktop-centric with a weak mobile app. Gamified focus apps (Forest, Habitica) are mature.

No single product dominates the *task initiation* problem specifically. Body doubling is the closest purpose-built mechanism, but it addresses initiation indirectly (through social presence) rather than directly (by intervening on the neurological initiation failure itself). The task breakdown approach (Goblin Tools) attacks initiation paralysis through overwhelm reduction but does not address the core dopamine/reward processing deficit.

### Q4: ADHD user review effectiveness?

**Score: 4 (Mixed-negative)**

Task initiation is the #1 most discussed problem in ADHD communities, and frustration with tools is widespread. The core complaint is that tools tell you *what* to do or *when* to do it, but cannot make you *start* doing it.

Negative patterns:
- The "app graveyard" phenomenon is acute for task initiation: users download apps, feel initial novelty-driven motivation, then the dopamine wears off and the initiation barrier reasserts itself
- To-do list apps are specifically criticised: "punish missed tasks with glaring overdue labels and shame-inducing red notifications" — this increases anxiety without resolving the initiation deficit
- Gamified apps (Habitica, Forest) get mixed reviews: effective for some ADHD users but the game mechanics themselves become a novelty that fades
- Amazing Marvin: strong devotees but also reports that "ADHD brains generally crave variance in all things" and "no single system is going to be the thing that works forever"
- Numo: 3.13 stars on Google Play; complaints about language quality and billing issues despite useful community features

Positive signals:
- Body doubling platforms (Focusmate, Flown) get the most consistently positive ADHD reviews for task initiation: "one of the few productivity tools they've stuck with long-term" (Reddit r/ADHD on Flown)
- Goblin Tools receives enthusiastic praise: "life-changing app" and "none of them are designed to tackle executive dysfunction like this" (App Store reviews)
- A 2024 study found body doubling is effective for initiating and completing tasks for individuals with ADHD

### Q5: Root cause of existing solution failures

1. **They assume the reward system functions.** The fundamental neurological basis of task initiation failure in ADHD is altered dopamine processing: mundane or routine tasks do not generate sufficient reward signal to overcome the activation threshold. Dr. Russell Barkley describes ADHD as a disorder of "doing what you know." Existing tools create external *structure* (lists, schedules, reminders) but do not create external *activation energy*. The exception is body doubling, which leverages social facilitation to provide the missing activation — but it requires another person's real-time presence, limiting scalability and spontaneity.

2. **They break tasks down but cannot overcome the "invisible barrier."** Task breakdown (Goblin Tools, Amazing Marvin subtasks) helps when the initiation failure is driven by overwhelm or ambiguity. However, many ADHD users report knowing exactly what to do and exactly how to start, yet still being unable to begin — this is a *motor initiation* / *executive activation* problem, not a *planning* problem. No current app addresses this specific mechanism. Dr. Russ Ramsay (University of Pennsylvania) describes body doubling as working because "adults with ADHD are more likely to initiate and engage in a typically avoided task if someone else is present."

3. **They rely on self-initiated engagement.** Every productivity app requires the user to open it and engage with it — but task initiation failure means the user cannot initiate *anything*, including using the help tool itself. This creates a circular dependency: the tool that helps you start tasks requires you to start using it. Push notifications partially address this, but ADHD users routinely report ignoring or disabling notifications. The only tools that partially escape this trap are body doubling platforms (scheduled sessions create external commitment) and coaching/accountability services (another human initiates the interaction).

### Key Sources Consulted

- Focusmate: Crunchbase profile, press coverage (NYT, CNN, Fast Company, Guardian)
- Goblin Tools: App Store (4.8 stars, ~2,700 reviews), Google Play (4.7 stars, 100K+ downloads)
- Amazing Marvin: ToolFinder reviews, Zapier review, MetaFilter discussion, Neurodiversity Blog comparison
- Flown: Trustpilot (5.0 stars, 397 reviews), Shimmer body doubling apps comparison
- ADDA (Attention Deficit Disorder Association): body doubling article
- Cleveland Clinic: Dr. Michael Manos on body doubling as "external executive functioning"
- Dr. Russ Ramsay, University of Pennsylvania: body doubling and task initiation
- 2024 study on body doubling effectiveness for ADHD task initiation/completion
- Arxiv 2025: VR body doubling study (n=12) showing faster task completion with body doubles

### Notable Uncertainties

- Focusmate's exact funding amount beyond "Pre-Seed" is not publicly disclosed; scale of user base is not reported precisely
- Flown's funding details are not publicly available
- The 2024 body doubling effectiveness study's methodology and sample size could not be verified from search results alone
- Whether body doubling effects persist long-term or habituate is unknown — most evidence is anecdotal
- Goblin Tools' sustainability as an indie project without VC funding is uncertain
- The line between "task initiation failure" and "procrastination" in product positioning is blurred, making market sizing for the specific problem difficult

---

## FP05: Prioritisation Failure

**Problem Score (from S3):** 13

### Q1: How noisy is the market?

**Score: 2 (Noisy)**

Prioritisation is embedded in virtually every task management and productivity tool on the market. Every to-do list app offers priority levels (P1/P2/P3, urgent/important, colour-coding, stars). The Eisenhower matrix is built into or marketed by dozens of products. Broader project management tools (Asana, Monday.com, Jira, Trello, ClickUp, Notion) all provide prioritisation features. This makes the market very noisy at the general level.

Within the ADHD-specific segment, a smaller but growing number of tools claim to address ADHD prioritisation challenges: Tiimo (AI-assisted planning), Motion (AI auto-scheduling by priority), Fluidwave (AI auto-prioritisation), Sunsama (guided daily planning with priority sorting), and Todoist (priority-based views). However, these tools still largely rely on the user *assigning* priority levels — which is precisely what ADHD users struggle with.

### Q2: What products exist?

| Product | Description | ADHD-Specific? | Maturity |
|---------|-------------|----------------|----------|
| **Todoist** | Task manager with P1-P4 priority levels, natural language input, 90+ integrations | General | Mature (10+ years; Doist company; widely used) |
| **Motion** | AI auto-scheduling based on priority, deadline, and duration; automatic rescheduling | General with ADHD marketing | Established ($13M+ Series A to Series C) |
| **Fluidwave** | AI auto-prioritisation that surfaces critical tasks; formerly OneTask | Yes (ADHD-focused) | Early (formerly OneTask; Vancouver-based; Web Summit 2025; funding not disclosed) |
| **Sunsama** | Guided daily planning with priority sorting, time estimates, overload warnings | General with strong ADHD adoption | Established ($2.75M seed; $20/mo) |
| **Amazing Marvin** | Customizable strategy toggles including Eisenhower matrix, GTD, priority scoring | ADHD-popular | Established (~5 years; $12/mo) |
| **Tiimo** | AI planner that turns brain dumps into prioritised visual timelines | Yes | Emerging-Established ($4.8-6.1M raised) |
| **TickTick** | Priority levels with deadline-based sorting, built-in Pomodoro, habit tracking | General | Established (freemium, widely used) |
| **Reclaim AI** | AI calendar optimisation; infers priority from behaviour and calendar patterns | General | Established (free tier available) |
| **Goblin Tools** | AI task breakdown with categorisation — reduces overwhelm that blocks prioritisation | Yes | Emerging (indie project, viral) |
| **Notion** | Flexible workspace with databases, kanban boards, priority properties | General | Mature (unicorn status; $10B+ valuation) |
| **Trello** | Visual kanban boards with labels and priority indicators | General | Mature (owned by Atlassian) |
| **Asana** | Project management with priority fields, rules, and automations | General | Mature (public company) |
| **Priority Matrix** | Eisenhower-style 4-quadrant task organiser | General | Established |
| **Recallify** | Voice-to-task AI with automatic priority tagging (High/Medium/Low) | ADHD-specific | Early (new entrant) |
| **Lunatask** | ADHD planner that auto-prioritises tasks and lets you focus on one area at a time | Yes | Emerging |

### Q3: How mature are leading products?

**Score: 2 (Mature)**

The prioritisation tools market is the most mature of the three problems analysed. General project management tools (Asana, Notion, Trello, Todoist) have been in market for 5-15+ years, are feature-complete, and have massive user bases. Notion alone is valued at $10B+. Todoist, TickTick, and Trello are household names in productivity.

In the AI-assisted segment, Motion (Series C) and Reclaim AI are established products. Sunsama has built a strong niche with its guided planning approach. The ADHD-specific AI prioritisation space is newer: Fluidwave/OneTask and Recallify are early-stage, and Tiimo's AI planning features are recent additions to an existing visual planner.

The maturity of general-purpose tools is a competitive barrier: any new entrant must differentiate meaningfully against deeply entrenched products with massive distribution.

### Q4: ADHD user review effectiveness?

**Score: 4 (Mixed-negative)**

The core complaint from ADHD users about prioritisation tools is that they require the very skill that is impaired. The Eisenhower matrix, the most common prioritisation framework, explicitly requires the ability to distinguish "urgent" from "important" — but ADHD brains respond to *interest, novelty, and immediate consequences* rather than importance/urgency.

Specific complaints:
- "For ADHD'ers, mental gridlock often happens when every task feels equally urgent, equally important, and equally impossible to start" (Tiimo blog)
- The ADHD Mompreneur podcast notes that the Eisenhower matrix "can be a helpful tool IF you have the capability to scale importance or determine urgency, but many people with ADHD struggle with importance because of their need to feel inspired or emotionally motivated"
- Dr. Tamara Rosier, PhD: "Prioritizing tasks and knowing what to do first is difficult for those of us with ADHD, so we rely on anxious feelings to tell us what needs to be done" (via Shimmer)
- Motion's AI auto-scheduling is praised by some ADHD users but criticised by others as overwhelming: "its first-time user experience can be overwhelming and off-putting" despite marketing towards ADHD
- To-do list apps generally fail because showing all tasks simultaneously triggers overwhelm and decision paralysis

Positive signals:
- Motion's one-click "Reschedule All" feature gets strong praise from ADHD users who find manual rescheduling debilitating
- Sunsama's daily planning ritual with overload warnings is appreciated by ADHD users who tend to overcommit
- Amazing Marvin's ability to "change my flow or strategy & it feels like a brand new app" combats the ADHD novelty-seeking pattern
- Goblin Tools' instant task breakdown helps overcome the prioritisation paralysis that comes from facing an undifferentiated task list

### Q5: Root cause of existing solution failures

1. **They require the user to assign priority — the exact skill that is broken.** The most fundamental failure: nearly every prioritisation tool asks the user to decide what is P1 vs P2 vs P3, or to place tasks on an urgent/important matrix. But ADHD disrupts the prefrontal cortex functions needed for this judgment. Research shows individuals with ADHD may be 30-40% behind peers in executive function development (Understood.org, citing Barkley). ADHD brains default to "interest-based" rather than "importance-based" prioritisation. Tools that pre-sort by AI (Motion, Fluidwave) partially address this but still require initial task input and parameter setting.

2. **They use static priority in a dynamic attention landscape.** A task marked P1 on Monday morning may be neurologically inaccessible on Monday afternoon if the ADHD user has entered a hyperfocus state on something else, or is experiencing emotional dysregulation. Static priority labels do not account for the fluctuating activation/engagement states that characterise ADHD. Dr. William Dodson's concept of "interest-based nervous system" explains why ADHD individuals can intensely focus on interesting tasks while being unable to engage with objectively more important ones — priority is neurologically *felt*, not *assigned*.

3. **They present all options simultaneously, triggering overwhelm.** Most task managers display the full task list, even when filtered by priority. For ADHD users, seeing 20+ items — even if only 3 are marked "high priority" — triggers decision paralysis and the "everything feels equally urgent" phenomenon. The few tools that show only one task at a time (Lunatask's "focus on one area" mode, some Amazing Marvin configurations) partially address this but are niche features rather than core design philosophies.

4. **They do not account for "procrastivity."** The ADHD-specific pattern of doing *easier but less important tasks* to avoid *harder but more important ones* looks like productivity from the outside but is actually prioritisation failure. Standard tools count completed tasks as progress regardless of whether the right tasks were completed. No current tool effectively detects or intervenes on procrastivity.

### Key Sources Consulted

- Tiimo blog: Eisenhower Matrix for ADHD analysis
- The ADHD Mompreneur podcast: prioritisation framework critique
- Dr. Tamara Rosier, PhD (via Shimmer): anxious prioritisation in ADHD
- Motion: Crunchbase (Series A-C), product reviews (ToolFinder, Choosing Therapy, Life Skills Advocate)
- Sunsama: Crunchbase ($2.75M), GetSARAL influencer case study, ADHD community reviews
- Amazing Marvin: ToolFinder reviews, Zapier "best to-do list for ADHD" designation
- Fluidwave: Yahoo Finance announcement, Dev.to founder post, EU-Startups listing
- Todoist, Notion, Trello, Asana: public market data
- Understood.org: 30-40% executive function development lag in ADHD (citing Barkley)

### Notable Uncertainties

- Fluidwave/OneTask is very early-stage; its AI auto-prioritisation capability is largely unvalidated by independent reviews
- Whether AI-driven prioritisation (Motion, Fluidwave) meaningfully outperforms manual prioritisation for ADHD users is not studied in controlled settings
- The "procrastivity" detection problem has no known product solution; this gap is based on community descriptions rather than market analysis
- Motion's exact total funding and valuation post-Series C are not publicly available
- Recallify is too new to have meaningful user review data

---

## Summary Scoring Table

| Question | FP03: Time Blindness | FP01: Task Initiation | FP05: Prioritisation |
|----------|---------------------|----------------------|---------------------|
| **Q1: Market Noise** | 2 (Noisy) | 3 (Moderate) | 2 (Noisy) |
| **Q2: Products Exist** | 12 identified | 13 identified | 15 identified |
| **Q3: Product Maturity** | 3 (Established) | 3 (Established) | 2 (Mature) |
| **Q4: ADHD User Reviews** | 4 (Mixed-negative) | 4 (Mixed-negative) | 4 (Mixed-negative) |
| **Q5: Root Cause** | Externalise scheduling not perception; no calibration loops; assume engagement | Assume reward system works; break down but can't activate; require self-initiation | Require broken skill; static in dynamic landscape; overwhelm from options; miss procrastivity |

### Market Gap Scores (Q1 + Q3 + Q4)

- **FP03 Time Blindness:** 2 + 3 + 4 = **9 / 15**
- **FP01 Task Initiation:** 3 + 3 + 4 = **10 / 15**
- **FP05 Prioritisation:** 2 + 2 + 4 = **8 / 15**

### Interpretation

**FP01 (Task Initiation Failure) has the largest market gap** at 10/15. The market is only moderately noisy (body doubling and task breakdown are emerging niches rather than crowded categories), products are established but not mature/dominant, and ADHD user reviews consistently indicate that existing tools fail to address the core initiation mechanism. The circular dependency problem (needing to initiate use of the initiation tool) represents a genuine unsolved design challenge.

**FP03 (Time Blindness) has the second-largest gap** at 9/15. While the broad time management market is noisy, the specific sub-problem of time estimation calibration is under-served. No current product systematically helps ADHD users improve the accuracy of their time estimates through feedback loops. RoutineFlow is the closest but is an early-stage solo-developer project.

**FP05 (Prioritisation Failure) has the smallest gap** at 8/15. The market is the most mature and crowded. General-purpose task managers have deep entrenchment and massive distribution. AI auto-scheduling (Motion, Reclaim) is beginning to address the "don't make me prioritise" need. However, the root cause analysis reveals that even AI-assisted tools still require meaningful user input and do not account for the interest-based nervous system or procrastivity patterns.

### Combined Scores (Problem Score + Market Gap Score)

- **FP01 Task Initiation:** 14 + 10 = **24**
- **FP03 Time Blindness:** 14 + 9 = **23**
- **FP05 Prioritisation:** 13 + 8 = **21**

---

## Limitations

1. **Search bias:** Web search results skew towards products with strong SEO and marketing budgets. Smaller or newer tools may be under-represented.
2. **Review selection bias:** ADHD community discussions may over-represent users who have tried and failed many tools (survivorship bias in complaints). Satisfied users are less likely to post.
3. **Market size data inconsistency:** ADHD apps market estimates vary significantly across research firms ($500M to $2.4B for 2024), suggesting different scoping definitions.
4. **Funding data gaps:** Several ADHD-specific tools (Flown, RoutineFlow, Goblin Tools) do not have publicly available funding information, making maturity assessment harder.
5. **Temporal snapshot:** This analysis captures a fast-moving market as of February 2026. New AI-powered tools are launching frequently, and the competitive landscape may shift rapidly.
