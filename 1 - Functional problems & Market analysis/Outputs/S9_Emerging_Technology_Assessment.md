# S9: Emerging Technology Assessment for ADHD Workplace Product

**Date:** 2026-02-06
**Scope:** Technologies and capabilities (2024-2026) that could provide step-change advantage for solving top-ranked ADHD workplace problems
**Methodology:** Systematic web search across six technology categories, focused on what is available now vs. announced vs. speculative. Each finding assessed for maturity, relevance to specific functional problems, and strategic advantage potential.

**Relevant Problem Codes:**
- FP01: Task Initiation Failure
- FP03: Time Blindness
- FP07: Meeting Memory Failure
- FP08: Long-Term Project Neglect
- FP09: Email Management Failure
- FP11: Documentation Paralysis
- Cross-cutting: Prospective Memory Platform

---

## Category 1: AI Agent & Automation Capabilities

### 1.1 Computer-Use Agents (Screen Control AI)

**What it is:** AI models that can see a user's screen, move cursors, click buttons, and type text -- controlling a computer the same way a human does, without needing custom API integrations for each application.

**Current state:** Available now (multiple vendors). Anthropic Computer Use launched October 2024; OpenAI Operator (CUA) launched January 2025; Google Project Mariner launched at Google I/O May 2025.

**Performance (late 2025):**
- OSWorld benchmark (complex desktop tasks): Anthropic ~60%+, OpenAI CUA 38.1%, humans 72.4%
- WebVoyager benchmark (browser tasks): OpenAI CUA 87%, Google Mariner 83.5%, Anthropic 56%
- Claude 4.5 reported maintaining focus for 30+ hours on multi-step tasks
- Late-2025 CUB benchmark: highest overall score 10.4% (Writer's Action Agent), suggesting complex real-world tasks remain challenging

**Which ADHD problems it's relevant to:** FP01, FP03, FP08, FP09, Cross-cutting
**How it could provide advantage:**
- Could detect task-switching and stalling patterns by monitoring screen activity, then intervene with nudges (FP01)
- Could automate multi-step "resurfacing" workflows -- e.g., opening a forgotten email draft, navigating to a project board, creating a reminder -- across any application without requiring API access (FP09, Cross-cutting)
- Could track actual time spent on tasks by observing application usage vs. planned time (FP03)
- Could perform "check-ins" on long-term projects by navigating to project tools and reporting status back to the user (FP08)

**Maturity/reliability:** Experimental-to-production. Standard office tasks scoring in high 80s; complex real-world tasks still single-digit percentages on hardest benchmarks. Reliability for sensitive autonomous actions remains a concern. Safety sandboxing (Docker containers, virtual machines) is recommended.

**Key sources:**
- Anthropic Computer Use: https://www.anthropic.com/news/3-5-models-and-computer-use
- OpenAI CUA: https://openai.com/index/computer-using-agent/
- Google Mariner: https://techcrunch.com/2025/05/20/google-rolls-out-project-mariner-its-web-browsing-ai-agent/
- Benchmarks comparison: https://o-mega.ai/articles/the-2025-2026-guide-to-ai-computer-use-benchmarks-and-top-ai-agents

---

### 1.2 Model Context Protocol (MCP) -- Cross-App Awareness Standard [STEP-CHANGE]

**What it is:** An open standard (created by Anthropic, now under Linux Foundation) that provides a universal protocol for AI agents to connect to external tools, data sources, and applications. Functions like "USB-C for AI" -- build one connector, and any AI agent can use it.

**Current state:** Available now. Launched November 2024. Adopted by OpenAI (March 2025), Google DeepMind, and thousands of community-built connectors. Donated to the Agentic AI Foundation (Linux Foundation) in December 2025. SDKs exist for all major programming languages.

**Which ADHD problems it's relevant to:** ALL (FP01, FP03, FP07, FP08, FP09, FP11, Cross-cutting)
**How it could provide advantage:**
- Enables a single ADHD product to have simultaneous awareness of a user's calendar, email, Slack messages, project management tools, documents, and meeting transcripts -- without building custom integrations for each
- The "commitment extraction" use case (Cross-cutting, FP09) becomes dramatically more feasible when an AI agent can read across email, Slack, meeting transcripts, and task managers through a single protocol
- Eliminates the N-by-M integration problem: instead of building separate connectors for Gmail + Outlook + Slack + Teams + Asana + Jira, each service just needs one MCP server
- Enables "detect a forgotten commitment in email, check if it exists in task manager, create task if missing, send reminder" as a single agent workflow

**Maturity/reliability:** Production-ready for tool connectivity. Security concerns remain (prompt injection, tool poisoning, cross-server shadowing identified April 2025). Scaling challenges with too many connected tools being addressed through code-execution patterns.

**Key sources:**
- MCP specification: https://modelcontextprotocol.io/
- One Year of MCP: https://blog.modelcontextprotocol.io/posts/2025-11-25-first-mcp-anniversary/
- Anthropic announcement: https://www.anthropic.com/news/model-context-protocol
- Security analysis concerns: noted in Wikipedia entry https://en.wikipedia.org/wiki/Model_Context_Protocol

---

### 1.3 Autonomous Workflow Agents (n8n, Zapier, Make)

**What it is:** No-code/low-code platforms that now support AI-powered autonomous agents capable of making decisions, adapting to new situations, and executing multi-step workflows without constant human input.

**Current state:** Available now. n8n leads with open-source, self-hostable agent orchestration; 500+ integrations; 5,288+ community AI workflow templates. Zapier and Make offer cloud-based alternatives with simpler interfaces.

**Which ADHD problems it's relevant to:** FP08, FP09, Cross-cutting
**How it could provide advantage:**
- Could automate the "resurfacing" loop: periodically scan email for unreplied messages, check calendar for upcoming deadlines, scan project boards for stale tasks, and send personalized nudges (FP09, FP08)
- Multi-agent "swarm" patterns allow specialized agents for different functions (email watcher, meeting commitment extractor, deadline tracker) that coordinate via webhooks (Cross-cutting)
- Human-in-the-loop interventions allow safety checks before agents take action -- important for ADHD users who may not want fully autonomous systems

**Maturity/reliability:** Production-ready for workflow automation. Agent decision-making quality depends on underlying LLM. Risks include hallucinations, runaway loops, and unintended actions. n8n provides controls for what agents can/cannot do.

**Key sources:**
- n8n AI agents: https://n8n.io/ai-agents/
- Low/no-code AI agent builders comparison: https://research.aimultiple.com/no-code-ai-agent-builders/

---

## Category 2: Context & Activity Understanding

### 2.1 Always-On Screen/Activity Monitoring AI

**What it is:** Software that continuously records and indexes screen activity, creating a searchable "memory" of everything a user does on their computer.

**Current state:** Fragmented. Rewind.ai/Limitless was the pioneer but was acquired by Meta in December 2025; the Rewind app was sunset (kill switch activated December 19, 2025). Microsoft Recall is in preview on Copilot+ PCs (April 2025), but limited to <2% of Windows laptops. New entrants at CES 2026 (SwitchBot MindClip, Omi, Lenovo Qira) are filling the gap.

**Microsoft Recall specifics:**
- Captures screen snapshots every few seconds, processes locally with OCR and semantic indexing
- Encrypted, biometric-authenticated, opt-in only
- Requires Copilot+ PC with NPU (extremely limited installed base)
- Privacy backlash led to Signal, Brave, and AdGuard adding blocking features

**Which ADHD problems it's relevant to:** FP01, FP03, FP07, FP09, Cross-cutting
**How it could provide advantage:**
- Time Blindness (FP03): Could provide actual time-spent data on tasks vs. estimated time, enabling the calibration feedback loop that no current tool provides
- Task Initiation (FP01): Could detect when a user has been stalling (e.g., 30 minutes on social media when a report is due) and trigger an intervention
- Meeting Memory (FP07): Continuous screen recording means meeting content is captured even if no dedicated meeting recorder was running
- Email Management (FP09): Could detect "read but didn't reply" patterns by observing email open/close behavior

**Maturity/reliability:** Experimental. The Limitless sunset leaves a vacuum. Microsoft Recall is technically functional but has extremely limited hardware reach and ongoing privacy concerns. The concept is validated but no dominant, reliable platform exists in early 2026.

**Key sources:**
- Limitless/Meta acquisition: https://techcrunch.com/2025/12/05/meta-acquires-ai-device-startup-limitless/
- Microsoft Recall overview: https://learn.microsoft.com/en-us/windows/apps/develop/windows-integration/recall/
- CES 2026 wearable AI: https://www.androidcentral.com/wearables/ces-2026-laid-out-black-mirror-future-of-wearable-ai-thats-always-listening-and-knows-everything-about-you

---

### 2.2 On-Device LLMs for Privacy-Preserving Processing [STEP-CHANGE]

**What it is:** AI language models small enough to run entirely on a user's device (phone, laptop), processing sensitive data locally without sending it to the cloud.

**Current state:** Available now and rapidly improving. Apple's Foundation Models framework (~3B parameters, on-device, free for developers, offline-capable). Open-source models (Llama 3.2 3B, Gemma 3 1B, SmolLM2 1.7B, DeepSeek R1 1.5B) run on consumer hardware. Tools like Ollama, LM Studio, and LocalAI make local deployment accessible.

**Apple's offering is particularly notable:**
- Foundation Models framework opened to developers at WWDC 2025
- Native Swift integration, works offline, no cost per request
- Supports guided generation, constrained tool calling, and LoRA adapter fine-tuning
- Available on all M-series Macs, iPads, and iPhones with A17 Pro+

**Which ADHD problems it's relevant to:** ALL (enables privacy-safe processing for any ADHD feature)
**How it could provide advantage:**
- Removes the privacy barrier that prevents users from granting AI access to their email, messages, meeting recordings, and screen activity
- An ADHD product could process highly sensitive workplace data (emails about performance reviews, private Slack messages, meeting recordings where people discuss sensitive topics) entirely on-device
- Apple's framework specifically enables developers to build always-on, intelligent apps that work offline -- exactly the "ambient ADHD support" architecture needed
- On-device processing eliminates latency for real-time interventions (e.g., detecting task stalling and immediately showing a nudge)

**Maturity/reliability:** Production-ready for Apple ecosystem (WWDC 2025 developer access). Open-source models are production-ready on desktop, still limited on mobile. Models at 1-3B parameters are capable for classification, summarization, and extraction tasks but cannot match cloud models for complex reasoning.

**Key sources:**
- Apple Foundation Models: https://developer.apple.com/apple-intelligence/
- Apple tech report: https://machinelearning.apple.com/research/apple-foundation-models-tech-report-2025
- Local LLM landscape: https://enclaveai.app/blog/2025/09/06/latest-advancements-local-llms-september-2025/

---

### 2.3 Wearable AI for Cognitive Support

**What it is:** Smart glasses, pendants, earbuds, and watches with AI capabilities for memory capture, focus tracking, and proactive assistance.

**Current state:** Rapidly growing market. Smart glasses shipments up 110% YoY in H1 2025; AI-enabled models represent 78% of shipments. Analysts expect sales to quadruple in 2026. Key devices include Meta smart glasses (post-Limitless acquisition), Samsung/Google smart glasses (expected early 2026), Narbis neurofeedback glasses, Omi AI pendant, Plaud NotePin.

**Which ADHD problems it's relevant to:** FP07, FP11, Cross-cutting
**How it could provide advantage:**
- Meeting Memory (FP07): Wearable pendants/pins continuously record conversations, auto-generate transcripts and action items, addressing the encoding deficit by creating a persistent external record
- Documentation Paralysis (FP11): Wearable voice capture devices enable "talk instead of write" workflows, with AI structuring the output
- Prospective Memory (Cross-cutting): Devices like Omi turn conversations into reminders and tasks automatically

**Maturity/reliability:** Mixed. Voice recording pendants (Plaud NotePin, Omi) are production-ready. Neurofeedback glasses (Narbis) lack large clinical validation. Smart glasses with AI are approaching mainstream pricing ($300-400) but ADHD-specific features are not built in. The Limitless pendant is effectively discontinued (Meta acquisition).

**Key sources:**
- Wearables in ADHD research: https://pmc.ncbi.nlm.nih.gov/articles/PMC12468562/
- CES 2026 wearables: https://www.wareable.com/ces/ces-2026-what-to-expect-wearables-smart-glasses-watches-rings
- Smart glasses market: https://www.businessoffashion.com/articles/technology/the-state-of-fashion-2026-report-smart-glasses-ai-wearables/

---

## Category 3: Communication Intelligence

### 3.1 Meeting AI -- Action Item & Commitment Extraction [STEP-CHANGE]

**What it is:** AI tools that join meetings, transcribe in real-time, and automatically extract action items, decisions, commitments, and responsible parties.

**Current state:** Available now, mature market. Transcription accuracy has converged at 90-95%+ across leading tools. Zoom AI Companion claims 99.05% accuracy. Market projected to reach $1.5B by 2032.

**Key players and differentiators:**
- **Granola** (G2 rating 5/5, Oct 2025): Desktop-based, no "bot joining" notification, combines user notes with AI transcript, syncs action items to Notion/Asana/Jira. Requires Google Workspace.
- **Otter.ai**: 95% accuracy, 300 free minutes/month, best for multi-speaker sessions. Limited to meeting content only.
- **Fireflies.ai**: Strong summaries, 69 languages, API access. Slower processing (10-15 min delay).
- **Microsoft Teams Copilot Facilitator**: Generally available, proactively takes notes, captures decisions, assigns follow-ups, integrates with Project Manager Agent. Requires Microsoft 365 Copilot license.
- **Read.ai**: Cross-platform search across meetings, messages, emails, CRM, and documents.

**Which ADHD problems it's relevant to:** FP07, Cross-cutting
**How it could provide advantage:**
- Meeting Memory (FP07): Directly addresses the encoding deficit -- even if the ADHD user's brain fails to store meeting information, the AI creates a complete external record with structured summaries, decisions, and action items
- Prospective Memory (Cross-cutting): Automatic commitment extraction from meetings means promises are captured even when the user forgets they made them
- The gap is NOT in recording/transcribing meetings (solved) but in connecting meeting commitments to task management and resurfacing them at the right time

**Maturity/reliability:** Production-ready. Transcription is table stakes. The competitive differentiator is summary quality, action item accuracy, and integration depth. Audio quality remains the primary accuracy bottleneck. Domain-specific jargon and overlapping speakers still challenge accuracy.

**Key sources:**
- AI meeting assistants comparison: https://krisp.ai/blog/best-ai-meeting-assistant/
- Otter vs Fireflies vs Fathom: https://www.index.dev/blog/otter-vs-fireflies-vs-fathom-ai-meeting-notes-comparison
- Teams Facilitator: https://support.microsoft.com/en-us/office/facilitator-in-microsoft-teams-meetings-37657f91-39b5-40eb-9421-45141e3ce9f6

---

### 3.2 Email API Capabilities for Intent Tracking

**What it is:** Gmail and Outlook APIs that enable programmatic access to email read state, threading, and reply detection -- the building blocks for tracking "read but forgot to reply" patterns.

**Current state:** Available now (stable APIs). Both Gmail API and Microsoft Graph API provide the necessary primitives.

**Key capabilities:**
| Capability | Gmail API | Microsoft Graph API |
|---|---|---|
| Read State | `UNREAD` label | `isRead` boolean |
| Reply Detection | Thread ID + `In-Reply-To` headers | `conversationId` + `In-Reply-To` |
| Read Receipts | Workspace only (admin-enabled) | Built-in (recipient can decline) |
| Open Tracking | Pixel-based (unreliable in 2025) | Pixel-based (unreliable) |

**Which ADHD problems it's relevant to:** FP09, Cross-cutting
**How it could provide advantage:**
- FP09 (Email Management Failure): Can detect the exact pattern of "opened email, didn't reply" by tracking read state changes and thread status. Can calculate time-since-read for unreplied emails. Can identify emails where user was mentioned or made a commitment but never followed up.
- Cross-cutting: Combined with NLP commitment extraction, can identify promises made in email threads and track whether they were fulfilled.
- Best engagement signal in 2025 is reply rate (not open rate), which aligns perfectly with the FP09 use case.

**Maturity/reliability:** Production-ready. These are stable, well-documented APIs. The challenge is not API access but building the intelligence layer on top (commitment extraction, priority scoring, nudge timing).

**Key sources:**
- Gmail API threads: https://developers.google.com/workspace/gmail/api/guides/threads
- Gmail response time tracking: https://hiverhq.com/blog/gmail-response-time-tracking
- Microsoft Graph mail filtering: https://learn.microsoft.com/en-us/answers/questions/2280135/setting-mail-message-isread-to-true-using-graph-ap

---

### 3.3 Slack/Teams as AI Agent Platforms [STEP-CHANGE]

**What it is:** Slack and Microsoft Teams are transforming from messaging platforms into AI agent orchestration layers, with deep API access for bots that can read conversations, extract commitments, and take actions.

**Current state:** Available now (rolling out Q1 2026).

**Slack (new Slackbot, January 2026):**
- Powered by Anthropic's AI model via Agentforce 360
- Can access files, DMs, channels, conversations, calendar, and connected services
- Agent-Ready APIs: Real-Time Search (RTS) API, MCP integration (both in closed beta, GA expected early 2026)
- 2,600+ third-party apps; "most net new apps being deployed in Slack are AI agents"
- Available on Business+ and Enterprise+ plans

**Microsoft Teams (Copilot agents):**
- Facilitator Agent: proactive note-taking, decision capture, action item assignment (GA)
- Channel Agent: domain expert for team channels
- Multi-agent orchestration (Build 2025): agents can work together as teams
- Teams AI Library supports MCP and A2A protocols
- Work IQ intelligence layer learns from emails, files, meetings, and chats

**Which ADHD problems it's relevant to:** FP07, FP09, Cross-cutting
**How it could provide advantage:**
- The new Slackbot can access the full conversation history and extract commitments across channels and DMs -- exactly the "prospective memory platform" described in the Cross-cutting problem
- Teams Copilot Facilitator already captures meeting commitments and assigns follow-ups automatically (FP07)
- Both platforms provide the distribution channel: an ADHD product could be an AI agent within Slack or Teams rather than a standalone app, meeting users where they already work
- Agent-to-agent orchestration means an ADHD-focused agent could delegate to specialized agents (email tracker, calendar manager, task creator)

**Maturity/reliability:** Slack's new Slackbot is in initial rollout (GA by Feb 2026 for Enterprise). Teams Copilot agents are in production. RTS and MCP APIs are in closed beta. Third-party agent ecosystem is early but growing rapidly.

**Key sources:**
- Slackbot as AI agent: https://techcrunch.com/2026/01/13/slackbot-is-an-ai-agent-now/
- Slack Agent-Ready APIs: https://salesforcedevops.net/index.php/2025/10/01/slack-agent-ready-apis/
- Teams Copilot multi-agent: https://www.microsoft.com/en-us/microsoft-365/blog/2025/05/19/introducing-microsoft-365-copilot-tuning-multi-agent-orchestration-and-more-from-microsoft-build-2025/

---

## Category 4: Neuroscience-Informed Tech

### 4.1 Consumer EEG for Real-Time Focus Detection

**What it is:** Miniature, dry EEG sensors being embedded into consumer headphones, earbuds, and glasses that can detect attention state, cognitive load, and focus levels in real-time.

**Current state:** Emerging. At CES 2026, Neurable announced EEG headphones for preorder (gaming/focus tracking); Naox is bringing in-ear EEG to consumer earbuds. Narbis neurofeedback glasses ($690) use NASA-licensed engagement index algorithm -- lenses darken when attention slips, clear when focus returns.

**Which ADHD problems it's relevant to:** FP01, FP03, FP08
**How it could provide advantage:**
- Task Initiation (FP01): Could detect the precise moment executive function drops and trigger an intervention (body doubling prompt, task breakdown, environment change suggestion)
- Time Blindness (FP03): Real-time cognitive state data could be correlated with time-on-task to create personalized "this is what 30 minutes of focused work feels like" feedback
- Long-Term Project Neglect (FP08): Could detect motivational decay pattern (declining engagement over days/weeks) and trigger re-engagement strategies

**Maturity/reliability:** Experimental-to-early-consumer. Neurable and Naox products are entering preorder/early availability in 2026. Clinical validation for ADHD-specific claims is limited. The technology works for broad attention-state classification but fine-grained executive function assessment remains research-grade. A 2025 EEG-adaptive interface study showed 12.4% reduction in task completion time and 18% reduction in perceived workload.

**Key sources:**
- Consumer EEG as platform: https://arctop.com/deep-dives/consumer-eeg-hardware
- CES 2026 EEG: https://spectrum.ieee.org/ces-2026-preview
- EEG-adaptive interfaces study: https://www.hillpublisher.com/ArticleDetails/5438

---

### 4.2 Eye Tracking for ADHD Assessment and Monitoring

**What it is:** Eye movement analysis (saccades, fixations, blink rates, pupil dilation) as objective biomarkers for ADHD-related attention deficits, increasingly combined with machine learning.

**Current state:** Research-to-clinical. A comprehensive 2025 review of 74 studies confirmed eye-tracking as a reliable, non-invasive approach. Integration with ML achieves AUC of 0.889 for ADHD identification (vs. 0.769 for traditional tests alone). Mobile eye-tracking on smartphones and tablets is enabling deployment outside clinical settings.

**Which ADHD problems it's relevant to:** FP01, FP03, Cross-cutting
**How it could provide advantage:**
- Could serve as an objective measure of when executive function is low, enabling the product to adapt its intervention strategy (more aggressive nudging during low-function periods, lighter touch during high-function periods)
- Pupil diameter fluctuation and fixation patterns could detect the "staring at screen but not processing" state common in ADHD task initiation failure
- Could provide the "digital biomarker" needed to answer "is now a good time to start this difficult task?"

**Maturity/reliability:** Research-grade for ADHD diagnosis; not yet integrated into mainstream consumer products for ongoing monitoring. Mobile eye-tracking hardware (front-facing cameras on phones/laptops) is increasingly capable but requires significant software development. Consumer eye-tracking in VR headsets and smart glasses is advancing but not yet ADHD-targeted.

**Key sources:**
- Eye-tracking ADHD review 2025: https://www.tandfonline.com/doi/full/10.1080/17483107.2025.2497305
- Eye-tracking + ML for ADHD: https://mhealth.jmir.org/2024/1/e58927
- VR + EEG + eye tracking multimodal: https://pubmed.ncbi.nlm.nih.gov/39741130/

---

### 4.3 Digital Biomarkers from Smartphone Usage Patterns

**What it is:** Passive monitoring of smartphone interaction patterns (tap patterns, app switching frequency, idle time, movement, sleep, social activity) as indicators of ADHD severity and executive function state.

**Current state:** Active research. The ADHD Remote Technology (ART) system (JMIR, January 2025) identified candidate digital signals for restlessness, inconsistent attention, and task-completion difficulties using the RADAR-base platform. Companies like Behavidence calculate scores comparing user interaction patterns against diagnosed ADHD profiles. A Frontiers in AI review (September 2025) confirmed AI's potential for objective ADHD assessment using multimodal data.

**Which ADHD problems it's relevant to:** FP01, FP03, FP08, Cross-cutting
**How it could provide advantage:**
- Tab switching frequency, idle time, and app usage patterns could serve as real-time executive function indicators without requiring any special hardware (FP01)
- Could detect "bad ADHD days" vs. "good days" and adjust product behavior accordingly (more structure/support on bad days, less intrusion on good days)
- Could build personalized models of when executive function typically drops (time of day, day of week, medication timing) for predictive intervention

**Maturity/reliability:** Research-grade. Promising results in controlled studies but larger replication studies are needed. No consumer product currently offers real-time ADHD-specific smartphone biomarker tracking. Privacy and data collection concerns are significant. The gap between research findings and production-ready features is substantial.

**Key sources:**
- ADHD Remote Technology system: https://formative.jmir.org/2025/1/e54531
- AI in ADHD assessment review: https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2025.1624485/full
- Smartphone sensors as biomarkers: https://www.feeltherapeutics.com/post/smartphone-sensors-mental-health

---

### 4.4 Adaptive Interfaces That Respond to Cognitive State

**What it is:** User interfaces that dynamically reconfigure layout, content density, notification timing, and visual complexity based on detected cognitive load or attention state.

**Current state:** Emerging research with early applications. A 2025 study demonstrated EEG-driven adaptive interfaces reduced task completion time by 12.4% and perceived workload by 18%. Eye-tracking enables gaze-responsive layouts. ML frameworks dynamically update user profiles based on interaction patterns (57 studies reviewed, 83% using supervised learning).

**Which ADHD problems it's relevant to:** FP01, FP11, Cross-cutting
**How it could provide advantage:**
- Task Initiation (FP01): Interface could simplify and reduce stimuli when it detects the user is overwhelmed, presenting only the single next action
- Documentation Paralysis (FP11): Writing interface could reduce visual complexity, hide formatting options, and present a minimal "just start typing" view when it detects avoidance behavior
- Could preemptively reduce notifications and distractions when cognitive load is high, and surface important reminders when the user is in a receptive state

**Maturity/reliability:** Research-to-prototype. The underlying sensing technologies (EEG, eye-tracking, behavioral signals) are advancing, but integrated adaptive ADHD interfaces do not exist as products. Requires combining multiple signal sources (biometric + behavioral) for reliable state detection. Most practical near-term approach is behavioral-only adaptation (interaction patterns, time-of-day) rather than biometric.

**Key sources:**
- EEG-adaptive interfaces: https://www.hillpublisher.com/ArticleDetails/5438
- ML for adaptive accessible UIs review: https://www.mdpi.com/2076-3417/15/23/12538
- Real-time adaptive interfaces: https://medium.com/design-bootcamp/how-to-build-real-time-adaptive-interfaces-with-ai-in-2025-db7db56ddc0c

---

## Category 5: Voice & Speech AI

### 5.1 Voice-to-Structured-Document AI [STEP-CHANGE]

**What it is:** AI that goes beyond raw transcription to automatically organize, format, summarize, and structure spoken content into ready-to-use documents, notes, and task lists.

**Current state:** Available now, rapidly maturing. Modern tools generate instant transcripts, create AI summaries, correct grammar, and adapt tone. Key players include Granola (GPT-4 powered structured notes from meetings, customizable templates), Wispr Flow (speech to polished text), VoiceToNotes (structure over transcription), Grain (meeting-to-CRM intelligence), and Soniox (real-time multi-speaker, multi-language structured transcripts).

**Underlying models (2025-2026):**
- OpenAI Whisper Large-v3: 2.7% WER clean audio, 4.1M monthly Hugging Face downloads
- Whisper Large-v3 Turbo: 6x faster, transcribes 60 min in ~17 seconds
- GPT-4o-transcribe: surpasses Whisper across all language evaluations
- Whale: ~2.4% WER on Librispeech, outperforming Whisper Large-v3
- ElevenLabs Scribe: 96.7% accuracy, 99 languages, speaker diarization

**Which ADHD problems it's relevant to:** FP11, FP07, Cross-cutting
**How it could provide advantage:**
- Documentation Paralysis (FP11): Directly addresses the initiation barrier by removing the need to "write" at all. User speaks freely; AI structures the output into the required document format. The barrier shifts from "start writing" to "start talking," which is dramatically lower for most ADHD users.
- Meeting Memory (FP07): Structured meeting notes with decisions, action items, and owner assignments are generated automatically without relying on the ADHD user's encoding ability.
- Prospective Memory (Cross-cutting): Spoken commitments ("I'll get that to you by Friday") can be detected and extracted even from casual conversation.

**Maturity/reliability:** Production-ready for core transcription and summarization. Voice-to-structured-document is mature for meeting notes (Granola, Otter). General-purpose "speak and get a formatted document" is production-ready for simple formats but still requires human review for complex documents. Accuracy depends heavily on audio quality.

**Key sources:**
- Soniox: https://soniox.com/
- Wispr Flow: https://wisprflow.ai
- Best real-time STT apps: https://www.assemblyai.com/blog/best-real-time-speech-to-text-apps
- OpenAI audio models: https://openai.com/index/introducing-our-next-generation-audio-models/

---

### 5.2 Discreet Voice Input

**What it is:** Technology that makes voice interaction work reliably in noisy, quiet, or shared environments -- removing the social friction that prevents voice input adoption in workplaces.

**Current state:** Emerging. Subtle Computing launched from stealth with $6M seed funding (late 2025), specifically focused on voice computing that works in extreme noise and extreme quiet. Consumer hardware product planned for early 2026. Wearable voice recorders (Plaud NotePin, 0.6 oz) enable discreet recording. OpenAI Realtime API (GA August 2025) enables low-latency voice agent interactions.

**Which ADHD problems it's relevant to:** FP11, Cross-cutting
**How it could provide advantage:**
- Documentation Paralysis (FP11): If voice input works reliably in an open office, the "just talk" approach to documentation becomes viable in workplace settings where it currently isn't
- Prospective Memory (Cross-cutting): Discreet wearable recording means casual workplace commitments ("Sure, I'll review that PR") are captured without the social awkwardness of visibly recording

**Maturity/reliability:** Experimental-to-early-product. Subtle Computing has partnerships with consumer hardware and automotive brands but hasn't shipped yet. Plaud NotePin and similar pendants are available but not workplace-normalized. The Realtime API is production-ready but requires custom integration.

**Key sources:**
- Subtle Computing: https://www.prnewswire.com/news-releases/subtle-computing-launches-from-stealth-with-6m-to-power-a-new-era-of-voice-computing-that-works-in-the-real-world-302607598.html
- OpenAI Realtime API: https://openai.com/index/introducing-gpt-realtime/
- Voice AI 2026 trends: https://www.kardome.com/resources/blog/voice-ai-engineering-the-interface-of-2026/

---

## Category 6: Platform & Distribution

### 6.1 Apple Intelligence as ADHD Product Platform [STEP-CHANGE]

**What it is:** Apple's on-device AI framework, now open to developers, enabling always-on, privacy-preserving, intelligent apps across iPhone, iPad, Mac, and Apple Watch -- with deep system integration through App Intents and Siri.

**Current state:** Available now for developers (WWDC 2025). Foundation Models framework in Swift. App Intents enable deep Siri and system integration. Full cross-app Siri actions expected ~Spring 2026 (iOS 26.4). No dedicated ADHD features exist, but the building blocks are uniquely powerful.

**Key capabilities for ADHD product development:**
- On-device LLM: free, offline, private -- can process sensitive workplace data
- App Intents: allows ADHD app actions to be triggered via Siri, Shortcuts, and from within other apps
- Foundation Models framework: guided generation, tool calling, LoRA fine-tuning
- Shortcuts integration: "Use Model" action lets users tap into Apple Intelligence models directly
- Apple Watch support: always-on wrist device for nudges and reminders

**Which ADHD problems it's relevant to:** ALL
**How it could provide advantage:**
- Enables a "system-level ADHD assistant" that is deeply woven into the OS rather than being a standalone app the user has to remember to open
- App Intents mean Siri could become the voice interface for an ADHD product: "Hey Siri, what did I commit to in today's standup?" processed entirely on-device
- The always-on nature of Apple Watch + Apple Intelligence could deliver time-calibrated nudges (FP03), task initiation prompts (FP01), and commitment reminders (Cross-cutting) without the user needing to open any app
- Privacy-first architecture removes the biggest objection enterprise users would have to an AI reading their work communications

**Maturity/reliability:** Production-ready for on-device model access and App Intents integration. The full "agentic Siri" (cross-app actions) has been delayed multiple times and is expected Spring 2026. Apple's ecosystem lock-in limits reach to Apple device users only. Developer adoption of Foundation Models framework is early.

**Key sources:**
- Apple Intelligence developer: https://developer.apple.com/apple-intelligence/
- WWDC 2025 developer tools: https://www.apple.com/newsroom/2025/06/apple-supercharges-its-tools-and-technologies-for-developers/
- App Intents & Siri integration: https://developer.apple.com/documentation/appintents/integrating-actions-with-siri-and-apple-intelligence

---

### 6.2 Chrome Built-in AI (Gemini in Chrome)

**What it is:** Google's integration of Gemini AI directly into the Chrome browser, including an always-present side panel, on-device processing via Gemini Nano, and agentic browsing capabilities.

**Current state:** Rolling out (January 2026). Gemini 3 powers side panel with real-time page awareness. Auto Browse (agentic browsing) available to AI Pro and Ultra subscribers. Chrome Built-in AI APIs (Prompt, Summarizer, Translator, Writer, Rewriter) available for extensions. Gemini Nano runs on-device for privacy-sensitive processing and scam detection.

**Which ADHD problems it's relevant to:** FP09, FP11, Cross-cutting
**How it could provide advantage:**
- A Chrome extension could use built-in AI APIs to: summarize long email threads (FP09, FP11), detect commitments in web-based email (Cross-cutting), provide context-aware prompts while browsing ("You've been on this site for 20 minutes -- is this what you planned to work on?" for FP03)
- Gemini side panel's page awareness means an extension could understand what the user is working on without needing screen recording
- Auto Browse could automate multi-step web tasks that ADHD users procrastinate on (filling out expense reports, updating project trackers)
- Chrome's 65% global market share = massive distribution advantage

**Maturity/reliability:** Production-ready for built-in AI APIs. Auto Browse is early/experimental (rolling out to paid subscribers). The Gemini side panel is in initial rollout. Extension ecosystem for AI-powered productivity is nascent but growing. Competition from OpenAI's Atlas browser (launched October 2025) is intensifying.

**Key sources:**
- Gemini in Chrome announcement: https://blog.google/products-and-platforms/products/chrome/gemini-3-auto-browse/
- Chrome AI features: https://blog.google/products/chrome/new-ai-features-for-chrome/
- Chrome built-in AI developer challenge: https://googlechromeai2025.devpost.com/

---

### 6.3 Windows Copilot as OS-Level Agent Platform

**What it is:** Microsoft's transformation of Windows from a traditional OS into an AI-first platform with Copilot as always-available intelligent layer across voice ("Hey Copilot"), vision (screen sharing), and actions (autonomous task execution).

**Current state:** Rolling out via Windows Insider program (2025-2026). Three pillars: Copilot Voice (wake word, hands-free), Copilot Vision (screen understanding), Copilot Actions (autonomous task execution in Agent Workspace). Deep integration into File Explorer, Search, Widgets, Game Bar. Requires Windows 11; some features limited to Copilot+ PCs.

**Which ADHD problems it's relevant to:** FP01, FP03, FP08, Cross-cutting
**How it could provide advantage:**
- Copilot Actions runs in a separate Agent Workspace environment, which could execute "check on my projects and summarize what needs attention" autonomously (FP08)
- Copilot Voice enables hands-free interaction for task capture and reminders without breaking flow (Cross-cutting)
- Copilot Vision's screen awareness could detect what the user is working on and provide contextual reminders (FP03)
- File Explorer AI integration could help with "find that document I was working on" (common ADHD struggle)

**Maturity/reliability:** Experimental-to-preview. Core features are in Windows Insider channel, not broadly available. Significant user backlash against AI over-integration has caused Microsoft to pause some features. Copilot Actions and Vision require opt-in and are still limited in capability. The agent ecosystem (Copilot Studio agents) is early but has enterprise backing.

**Key sources:**
- Windows Copilot evolution: https://techcommunity.microsoft.com/blog/windows-itpro-blog/evolving-windows-new-copilot-and-ai-experiences-at-ignite-2025/4469466
- Copilot Actions: https://blogs.windows.com/windows-insider/2025/11/17/copilot-on-windows-copilot-actions-begins-rolling-out-to-windows-insiders/
- Hey Copilot: https://blogs.windows.com/windows-insider/2025/05/14/copilot-on-windows-hey-copilot-begins-rolling-out-to-windows-insiders/

---

## Category 7 (Bonus): AI Body Doubling & Task Initiation

### 7.1 AI Body Doubling for Task Initiation [STEP-CHANGE]

**What it is:** AI companions that replicate the effect of body doubling (working alongside another person) to help ADHD users overcome task initiation barriers, without requiring a human partner.

**Current state:** Research + early products. A 2025 VR study found AI body doubles performed nearly as well as human ones for task completion speed and sustained attention. One individual's custom AI body double ("Margo") showed 27-33% increase in sustained attention and 21% improvement in task completion speed. Virtual coworking platforms (Flow Club, Focusmate, Cohorty) provide human body doubling; AI alternatives are emerging. A Malmo University study developed a chatbot prototype specifically for ADHD body doubling.

**Neuroscience basis:** Social encounters activate dopamine pathways important for motivation and reward. Regular accountability check-ins increase goal achievement from 25% to 95%. Body doubling helps ADHD brains complete 37% more tasks.

**Which ADHD problems it's relevant to:** FP01, FP08
**How it could provide advantage:**
- Task Initiation (FP01): AI body doubling directly addresses the core problem -- human presence helps but doesn't scale. An AI body double is available 24/7, doesn't require scheduling, and doesn't judge.
- Long-Term Project Neglect (FP08): Regular AI-driven check-ins on project progress, combined with body doubling for work sessions, could maintain engagement with distant deadlines.
- Key framework insight: the value is in "presence and task initiation" with "clear boundaries," not therapy or emotional support. The AI lowers activation barriers through environmental scaffolding.

**Maturity/reliability:** Research-to-prototype. Academic research validates the concept. Consumer platforms (Flow Club, Focusmate) exist for human body doubling. AI body doubling is limited to custom builds, chatbot prototypes, and VR experiments. No production-quality AI body doubling product exists specifically for ADHD workplace support. This is an open product opportunity.

**Key sources:**
- VR body doubling study: https://arxiv.org/abs/2509.12153
- AI body doubling 2026: https://aiinsightsnews.net/ai-body-doubling-for-adhd/
- ADHD-aware productivity framework: https://arxiv.org/html/2507.06864
- Flow Club: https://www.flow.club/coworking-for-adhd

---

## Category 8 (Bonus): AI Memory & Prospective Memory Systems

### 8.1 Context-Aware AI Memory for Commitment Tracking

**What it is:** AI systems with long-term memory that remember user commitments, preferences, and patterns across sessions, enabling proactive resurfacing of forgotten intentions.

**Current state:** Rapidly emerging. OpenAI, Google, xAI, and Anthropic all launched persistent memory features in 2025. Research on AI prospective memory architectures is active (COgnitive Layered Memory Architecture -- COLMA). Key challenge: balancing infinite memory with intentional forgetting and avoiding memory corruption from hallucinated content.

**Relevant research:**
- "In Prospect and Retrospect: Reflective Memory Management for Long-term Personalized Dialogue Agents" (March 2025)
- "MemGuide: Intent-Driven Memory Selection for Goal-Oriented Multi-Session LLM Agents" (May 2025)
- COLMA framework integrating cognitive scenarios with memory processes

**Which ADHD problems it's relevant to:** FP09, Cross-cutting
**How it could provide advantage:**
- Prospective Memory Platform: AI memory systems can store commitments from across communication channels and proactively resurface them at relevant moments. The AI remembers what the user promised even when the user forgets.
- Email Management (FP09): AI memory could track "you read this email 3 days ago and seemed to intend to reply" even across sessions
- The key innovation is "living memory" with check-ins: "You haven't referenced this commitment in a while -- is it still relevant?" This prevents overwhelm from stale reminders.

**Maturity/reliability:** Experimental. The underlying memory architectures are being developed by major AI labs, but no product specifically applies AI prospective memory to ADHD workplace needs. Memory corruption (hallucinated commitments) is a real risk. Privacy regulations (GDPR right to be forgotten) add complexity. The concept is sound but production implementation requires careful engineering.

**Key sources:**
- AI and memory: https://www.cambridge.org/core/journals/memory-mind-and-media/article/ai-and-memory/BB2E4B113B826133E1B6C8DB6BACD192
- Context-aware memory systems: https://www.tribe.ai/applied-ai/beyond-the-bubble-how-context-aware-memory-systems-are-changing-the-game-in-2025
- Cognitive memory architecture: https://arxiv.org/html/2509.13235

---

## Category 9: Knowledge Management & Structured Memory

### 9.1 Knowledge Graphs for Automatic Organisation — No Manual Tagging [STEP-CHANGE]

**What it is:** AI systems that automatically extract entities (people, projects, commitments, concepts), infer relationships between them, and build a structured, queryable graph — without requiring the user to manually tag, categorise, or file anything. This replaces the traditional "folder and tag" paradigm with automatic semantic organisation.

**Current state:** Production-ready across multiple layers. The AI personal knowledge base market reached $4.74B in 2024 (GlobeNewsWire). The broader AI knowledge management market grew from $5.23B to $7.71B in 2025 alone (47.2% CAGR), projected to hit $35.83B by 2029.

**Key implementations:**

**Microsoft GraphRAG (open-source, 2024-2025):**
- LLM-automated extraction of entities, relationships, and claims from unstructured text
- Hierarchical community detection (Leiden algorithm) creates multi-level summaries — from fine-grained entity clusters to high-level theme summaries
- Enables both local (specific fact retrieval) and global (thematic summarisation) queries over the knowledge graph
- Open-source on GitHub; now integrated into Microsoft Discovery for research applications
- GraphRAG-Bench benchmark released June 2025; LinearRAG (relation-free efficient variant) released October 2025
- Production consideration: graph construction is LLM-intensive (cost), but the output enables multi-hop reasoning that standard vector RAG cannot do

**Anthropic Knowledge Graph Memory MCP Server:**
- Provides persistent memory for Claude through a local knowledge graph — stores entities with observations and directed relations
- Uses MCP protocol, so any MCP-compatible client can read/write to it
- Shared memory across Claude Desktop and Claude Code via SQLite — same knowledge base accessible from multiple tools
- Structured graph (entities + observations + relations) rather than unstructured conversation summaries — fundamentally different from ChatGPT's memory approach
- Open-source with community visualisation tools (Memory Visualizer)

**Claude API Memory Tool (Beta, June 2025):**
- Official API-level persistent memory: Claude can create, read, update, and delete files across conversations
- Client-side execution — complete control over storage location and privacy
- Claude automatically checks memory directory before starting tasks
- Enables building knowledge over time without user having to restate context

**Personal Knowledge Management tools with auto-organisation:**
- **Mem**: AI automatically tags and organises notes based on intention and context; surfaces relevant notes when questions are asked
- **Guru**: Unifies knowledge from Slack, Google Drive, CRM, and project tools into one permission-aware graph; automatic tagging and grouping
- **Heptabase**: Visual whiteboard-based knowledge mapping with emerging AI relationship discovery
- **Reflect**: Networked notes with AI-powered backlink suggestions and relationship discovery

**Which ADHD problems it's relevant to:** FP07, FP09, FP08, FP11, Cross-cutting (Prospective Memory Platform)

**How it could provide advantage — this is significant:**

The knowledge graph paradigm directly addresses the ADHD "out of sight, out of mind" failure in ways that lists and folders cannot:

1. **Automatic capture eliminates the filing bottleneck (FP11, Cross-cutting).** The #1 reason ADHD productivity systems fail is maintenance burden — the user must manually file, tag, and organise. Knowledge graphs built automatically from communication streams (via MCP + meeting transcripts + email) remove this entirely. The system builds the graph as the user works, not as a separate task.

2. **Relational structure enables contextual resurfacing (FP07, FP09, Cross-cutting).** A knowledge graph knows that "Sarah" is connected to "Q3 Budget Review" which is connected to "action item: send revised figures by Friday" which is connected to "email from Sarah read but not replied." When the user opens their calendar and sees a meeting with Sarah, the graph can surface all related pending items — not because they were manually linked, but because the graph inferred the connections. This is the architecture the Prospective Memory Platform needs.

3. **Multi-hop reasoning replaces manual memory (FP07, FP08).** Standard RAG retrieves text chunks matching a query. GraphRAG traverses relationships: "What commitments did I make this week that I haven't acted on?" requires connecting meetings → extracted action items → task system → status check. This multi-hop traversal is exactly what prospective memory failure prevents the ADHD user from doing mentally.

4. **Hierarchical summarisation matches ADHD cognitive needs (FP08).** GraphRAG's Leiden-based community detection creates summaries at multiple levels of granularity. For project neglect, this means the system can provide "here's the 30-second summary of where Project X stands" without requiring the user to re-read everything — the graph maintains the context even when the user's memory doesn't.

5. **Graph-based memory compounds over time.** Unlike lists (which grow linearly and become overwhelming), knowledge graphs become *more* useful as they grow — more connections, better contextual retrieval, richer entity understanding. This is one of the few architectures where the "app graveyard" problem may be structurally mitigated: the longer you use it, the more it knows, the harder it is to replace.

**Maturity/reliability:** Production-ready for the core components. Microsoft GraphRAG is open-source and battle-tested. Anthropic's MCP Knowledge Graph Memory Server is production-ready. The "auto-build a personal knowledge graph from workplace communications" application is architecturally feasible today (MCP for ingestion + GraphRAG for construction + on-device LLM for privacy) but has not been built as a product. Key risks: graph construction cost (LLM-intensive), accuracy of entity/relationship extraction from messy workplace communication, and managing graph growth over time.

**Key sources:**
- Microsoft GraphRAG: https://github.com/microsoft/graphrag
- Anthropic Knowledge Graph Memory MCP: https://www.pulsemcp.com/servers/modelcontextprotocol-knowledge-graph-memory
- Claude Memory Tool API: https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool
- AI Knowledge Base market ($4.74B): https://www.globenewswire.com/news-release/2026/01/29/3228466/28124/en/Artificial-Intelligence-AI-Personal-Knowledge-Base-Research-Report-2025
- Knowledge graphs reshaping AI workflows: https://beam.ai/agentic-insights/5-ways-knowledge-graphs-are-quietly-reshaping-ai-workflows-in-2025-2026
- Graph RAG & LLMs: https://onereach.ai/blog/graph-rag-the-future-of-knowledge-management-software/
- Glean knowledge graph: https://www.glean.com/blog/knowledge-graph-agentic-engine
- Neo4j LLM Knowledge Graph Builder: https://neo4j.com/blog/developer/llm-knowledge-graph-builder-release/

---

## Strategic Synthesis

### Technologies Flagged as Step-Change Advantages

Seven technologies represent genuine step-changes (not incremental improvements) for an ADHD workplace product:

1. **MCP (Model Context Protocol)** -- Eliminates the integration barrier. A single ADHD product can now have awareness across email, Slack, Teams, calendar, project management, and documents through one standardized protocol. This transforms the "prospective memory platform" from requiring years of individual API integrations to being architecturally feasible today.

2. **On-Device LLMs (especially Apple Foundation Models)** -- Removes the privacy barrier. Processing sensitive workplace communications on-device means users can grant the AI access to their email, messages, and meetings without data leaving their device. This is essential for enterprise adoption.

3. **Voice-to-Structured-Document AI** -- Directly solves Documentation Paralysis (FP11) by changing the task from "write" to "speak." With transcription accuracy at 95-99% and AI structuring capabilities mature, the technology is production-ready.

4. **Meeting AI Commitment Extraction** -- Meeting transcription and action item extraction are solved problems. The step-change is connecting these extracted commitments to a persistent tracking system that proactively resurfaces them -- which MCP now makes feasible.

5. **Slack/Teams as Agent Platforms** -- Both platforms are becoming AI agent orchestration layers with deep access to workplace communication. An ADHD-focused agent living inside Slack or Teams would meet users where they work, not require them to adopt another tool.

6. **AI Body Doubling** -- Research validates that AI body doubles work nearly as well as human ones for task initiation and sustained attention. No production-quality product exists. This is the most direct technological solution for the #1 ranked problem (FP01: Task Initiation Failure).

7. **Knowledge Graph / Auto-Organisation Memory** -- Automatic entity extraction and relationship mapping from unstructured communication eliminates the manual filing/tagging that kills every ADHD productivity system. Microsoft GraphRAG (open-source) builds structured knowledge graphs from text automatically. Anthropic's MCP Knowledge Graph Memory Server provides persistent, structured, graph-based memory across tools. Combined with MCP ingestion from workplace channels, this provides the architectural foundation for a "living memory" that compounds over time rather than becoming another system to maintain. Directly enables the Prospective Memory Platform's core requirement: knowing what the user committed to, when, to whom, and in what context — without the user having to write any of it down.

### Technology Readiness Matrix

| Technology | Readiness | Time to Production | ADHD Problem Coverage |
|---|---|---|---|
| MCP cross-app integration | Production-ready | 0-3 months | ALL problems |
| Knowledge graph auto-construction | Production-ready (components) | 0-3 months | FP07, FP08, FP09, Cross-cutting |
| Meeting AI (action items) | Production-ready | 0-3 months | FP07, Cross-cutting |
| Voice-to-structured docs | Production-ready | 0-3 months | FP11, FP07 |
| Email API intent tracking | Production-ready | 0-3 months | FP09, Cross-cutting |
| Apple Foundation Models | Production-ready | 3-6 months | ALL (Apple only) |
| Slack/Teams agent platform | Early production | 3-6 months | FP07, FP09, Cross-cutting |
| Workflow automation agents | Production-ready | 0-3 months | FP08, FP09, Cross-cutting |
| Chrome built-in AI | Rolling out | 3-6 months | FP09, FP11, Cross-cutting |
| Computer-use agents | Experimental | 6-12 months | FP01, FP03, FP08 |
| AI body doubling | Research/prototype | 6-12 months | FP01, FP08 |
| Consumer EEG focus detection | Early consumer | 12-18 months | FP01, FP03 |
| Digital biomarkers (smartphone) | Research | 12-24 months | FP01, FP03, FP08 |
| Adaptive cognitive interfaces | Research | 12-24 months | FP01, FP11 |
| Discreet voice input | Early product | 6-12 months | FP11, Cross-cutting |
| Windows Copilot platform | Preview/insider | 6-12 months | FP01, FP03, FP08 |
| Screen activity monitoring | Fragmented/gap | 6-12 months | FP01, FP03, FP09 |

### Recommended Architecture

Based on this technology assessment, the optimal product architecture for an ADHD workplace tool in 2026 would combine:

1. **MCP as the integration backbone** -- connecting to email, calendar, Slack/Teams, project management, and documents through a single standardized protocol
2. **Knowledge graph as the memory layer** -- using GraphRAG-style automatic entity/relationship extraction to build a persistent, structured representation of the user's commitments, projects, relationships, and context — without requiring manual tagging or filing. This graph becomes the "external memory" that compensates for prospective memory failure. Anthropic's MCP Knowledge Graph Memory Server provides the storage protocol; Microsoft GraphRAG provides the construction methodology.
3. **On-device LLM for sensitive processing** -- using Apple Foundation Models (iOS/Mac) or local open-source models (cross-platform) to process communication content without cloud exposure
4. **Meeting AI integration** -- consuming structured outputs from existing meeting AI tools (Granola, Otter, Teams Copilot) rather than building transcription from scratch
5. **Slack/Teams distribution** -- deploying as an agent within existing workplace platforms to avoid the "another app to check" problem
6. **Voice-first capture for documentation** -- leveraging mature STT + AI structuring for the Documentation Paralysis use case
7. **AI body doubling as differentiated feature** -- building on validated research to create a scalable task-initiation intervention that no competitor currently offers

### Key Risks and Gaps

- **Screen monitoring vacuum:** The Limitless sunset and Recall's limited reach create a gap in activity understanding. No reliable, cross-platform, privacy-respecting activity monitoring solution exists.
- **Agentic Siri delays:** Apple's full cross-app Siri integration has been repeatedly delayed. Building on App Intents is safe; depending on agentic Siri capabilities is risky for near-term roadmap.
- **Enterprise privacy concerns:** Even with on-device processing, enterprises may resist AI that reads employee communications. The product must offer strong audit controls and clear data boundaries.
- **AI reliability for autonomous actions:** Computer-use agents and workflow automation still produce errors. ADHD users are particularly vulnerable to "AI did the wrong thing" scenarios that could damage professional reputation. Human-in-the-loop safeguards are essential.
- **Body doubling evidence is thin:** While promising, AI body doubling research has small sample sizes and some controlled studies show no significant effect. More validation is needed before making this a primary feature.

---

*Assessment prepared 2026-02-06. Technology landscape is evolving rapidly; findings should be re-validated quarterly.*
