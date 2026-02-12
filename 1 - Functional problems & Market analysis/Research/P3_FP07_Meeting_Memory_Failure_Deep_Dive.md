# P3: FP07 — Meeting and Instruction Memory Failure: Deep Dive

## Methodology Note

This Phase 3 deep dive was conducted per the methodology's Template 3A (Problem Behaviour Detail), Template 3B (Existing Solutions), and Template 3C (User Experience with Existing Tools). Research was sourced through web searches of clinical literature, product databases, and ADHD community discussions. Evidence tier ratings follow the established framework: Tier 1 (peer-reviewed research), Tier 2 (large surveys, expert consensus), Tier 3 (smaller surveys, consistent community reports), Tier 4 (single anecdotes).

---

## 1. Clinical Evidence on Meeting-Memory Failure

### 1.1 Working Memory as a Core ADHD Deficit

Working memory impairment is one of the most well-documented cognitive deficits in ADHD. A bifactor modelling study found that ADHD is associated with very large magnitude impairments in central executive working memory, with effect sizes of d=1.63-2.03 and 75-81% of ADHD individuals showing measurable impairment [1]. This is not a subtle deficit — it is a defining feature of the condition. **[Tier 1]**

A 2025 review in PMC confirmed that cognitive deficits in adult ADHD primarily involve executive functions including inattention, cognitive flexibility, inhibition/impulsivity, and working memory, significantly affecting daily decision-making, interpersonal functioning, and long-term goal achievement [2]. **[Tier 1]**

### 1.2 The Encoding Deficit — Not Retrieval, Not Retention

A critical finding for understanding meeting-memory failure is where the memory process breaks down. Research published in *Clinical Neurophysiology* (2014) provided the first neural evidence of impaired encoding in adult ADHD: the ADHD group showed lower P3 amplitude during working memory encoding, indicating ineffective allocation of attentional resources during the encoding stage [3]. **[Tier 1]**

A complementary study in *Scientific Reports* (2020) confirmed that while binding processes (combining features into unified representations) appear intact in ADHD, attention-related encoding and retrieval processes are compromised, resulting in a failure to prioritise relevant information [4]. **[Tier 1]**

This is the neurological basis for the user experience described in Phase 2: "understanding everything being said — walking out and not remembering anything." The information is processed in real-time (comprehension is intact) but is not effectively encoded into memory for later retrieval.

**Key distinction:** The research indicates that neurotypical forgetting typically involves a failure at the retrieval stage — the information was encoded but cannot be accessed at the right moment. ADHD-related forgetting appears to stem primarily from an encoding deficit — the ADHD brain processes information in a disorganised manner, making it harder for information to be stored successfully in long-term memory [5]. **[Tier 1]**

### 1.3 Prospective Memory Impairments

Prospective memory — remembering to do something in the future — is directly relevant to meeting-related action items. A study by Fuermaier et al. (2013, PLOS ONE) compared 45 adult ADHD patients with 45 matched controls on a complex prospective memory paradigm. A large-scale impairment was observed in task planning abilities. Interestingly, patients created less elaborate plans but were able to encode, store, and retrieve plan information — suggesting the deficit is in the planning/intention formation phase rather than storage [6]. **[Tier 1]**

A separate study found that prospective memory performance partially mediates the link between ADHD symptoms and procrastination behaviour — individuals with ADHD recalled and executed less of their own real-life intentions [7]. **[Tier 1]**

A naturalistic assessment (EPELI study, n=112 ADHD, n=255 controls) confirmed that ADHD participants showed clearly more everyday executive problems and higher rates of task-irrelevant actions [8]. **[Tier 1]**

### 1.4 Effects of Medication on Memory

A study by Fuermaier et al. (2016) on methylphenidate (MPH) effects found that clinically appropriate doses improved memory performance including short-term memory, word recognition, source memory, and prospective memory. However, even treated adults with ADHD still showed considerable memory impairments compared to normal functioning, with large impairments persisting in story recall and prospective memory [9]. **[Tier 1]**

This finding is significant for meeting-memory failure: medication helps but does not eliminate the problem. Users who are medicated still experience meaningful memory gaps.

### 1.5 Memory for Instructions — Direct Evidence

A study published in *Frontiers in Psychology* (Yang et al., 2017) found that children with ADHD were significantly impaired in all conditions of a following-instructions task relative to typically developing peers. While studied in children, the underlying working memory mechanism is the same in adults. The study found that action-based presentation (physically performing instructions rather than just hearing them) improved recall for both groups, suggesting motor encoding provides an alternative pathway that partially bypasses the verbal working memory deficit [10]. **[Tier 1]**

### Summary of Clinical Evidence

There is strong Tier 1 evidence that:
- Working memory is impaired in 75-81% of ADHD individuals (large effect sizes)
- The primary deficit is in encoding, not retrieval or retention
- Information is processed and understood in real-time but not effectively stored
- Prospective memory (remembering to do future tasks) is independently impaired
- Medication improves but does not normalise memory performance
- No studies specifically examine meeting contexts, but the underlying mechanisms are well-established

**Evidence gap:** No clinical study has specifically measured meeting-memory failure in a workplace context. The evidence base extrapolates from laboratory working memory and prospective memory paradigms to the real-world meeting setting. This is a reasonable extrapolation given the mechanism, but it means frequency data specific to meetings is unavailable from clinical sources.

---

## 2. Frequency and Triggers

### 2.1 Frequency

**How often does meeting-memory failure occur?**

No clinical study quantifies the specific frequency of meeting-memory failure. However, converging evidence supports the current Q1 score of 4 (Daily):

- Knowledge workers attend meetings daily — often multiple per day. For those with ADHD working memory deficits (75-81% of the ADHD population), the failure mechanism is present at every meeting where verbal information must be retained. **[Tier 1, extrapolated]**
- User reports consistently describe the problem as occurring at "virtually every meeting" rather than occasionally. The P2A Reddit thread described it as a regular pattern, not a one-off event. **[Tier 3]**
- Practitioners list forgetting instructions as a common presenting problem in ADHD coaching. Workplace symptoms commonly described include "asking you to repeat things more than once" and "losing focus during meetings or conversations" [11]. **[Tier 2]**
- The DSM-5 diagnostic criterion for inattention includes "often does not seem to listen when spoken to directly" and "often has difficulty organising tasks and activities" — both relevant to meeting information processing. The threshold word "often" implies frequent occurrence. **[Tier 1]**

**Assessment:** Daily frequency is well-supported. The 75-81% working memory impairment rate combined with the daily nature of meetings in knowledge work means the opportunity for failure is daily, and user reports confirm this aligns with actual experience.

### 2.2 Triggers That Worsen It

Research and community reports identify several factors that exacerbate meeting-memory failure:

**Meeting length:** Back-to-back scheduling of virtual meetings increases cognitive fatigue, particularly for people with ADHD. Virtual meetings require more concentration than in-person meetings, making them particularly difficult for ADHD individuals who experience heightened effects of "Zoom fatigue" [12]. Longer meetings place greater sustained demands on working memory, increasing the probability of encoding failure. **[Tier 2]**

**Topic interest/engagement:** The encoding deficit is modulated by engagement level. Research shows that emotionally charged or personally interesting material is encoded significantly better by ADHD individuals, while neutral material produces the largest encoding gaps relative to neurotypical peers [4]. In meetings, this means agenda items that are boring, tangential, or not directly relevant to the individual will be disproportionately lost. **[Tier 1]**

**Medication timing:** Stimulant medication effects wear off after 3-6 hours (short-acting) or 8-12 hours (extended-release). Late-afternoon meetings that fall outside medication coverage windows will see degraded working memory performance. A "rebound effect" — fatigue, reduced function — can occur as medication wears off [13]. **[Tier 1]**

**Cognitive fatigue/time of day:** Executive function is taxing and can be exhausted over the course of a day. Noise, visual distractions, stress, and fatigue all dramatically worsen memory function in ADHD individuals [14]. Meetings later in the day, after a demanding morning, will have worse outcomes. **[Tier 2]**

**Virtual vs. in-person format:** Virtual meetings strip away physical and social cues that can aid encoding (body language, spatial context, physical materials). Research indicates that ADHD individuals find virtual meetings particularly draining [12]. **[Tier 2]**

**Absence of agenda/structure:** When meeting content is unpredictable, the ADHD brain cannot pre-allocate attentional resources. Having an advance agenda significantly improves the ability to direct attention to relevant content [15]. **[Tier 2-3]**

**Multi-speaker dynamics:** The need to track multiple speakers, switch attentional focus, and maintain context across conversational turns places additional working memory demands that exceed ADHD capacity more quickly than neurotypical capacity. **[Tier 2]**

---

## 3. ADHD vs. Neurotypical Differentiation

### 3.1 Is This Qualitatively Different?

**Yes.** The research supports a qualitative, not merely quantitative, difference between ADHD and neurotypical meeting-memory failure:

**Different mechanism:** Neurotypical meeting forgetting is primarily a retrieval failure — information was encoded but fades or becomes inaccessible over time, especially for details. ADHD meeting forgetting is primarily an encoding failure — information is processed and understood in real-time but never effectively committed to memory in the first place [3][4][5]. This is neurologically distinct: the P3 encoding signal is measurably lower in ADHD brains during information intake. **[Tier 1]**

**Different pattern:** Neurotypical workers forget meeting details gradually — they remember the gist and major decisions but lose specific details over hours/days. ADHD workers often cannot reconstruct even the gist shortly after the meeting ends. The P2A user description — "walking out and not remembering anything... it was all just a blur" — describes a near-complete encoding failure, not gradual detail loss. **[Tier 3, consistent with Tier 1 mechanism]**

**Different relationship to attention during the meeting:** Neurotypical forgetting correlates with inattention during the meeting (daydreaming, multitasking). ADHD forgetting can occur despite active attention and engagement during the meeting. The user specifically stated they were "understanding everything being said" — the comprehension was intact, but encoding failed independently. This is consistent with the research showing encoding deficits are separable from attention during processing [3]. **[Tier 1 mechanism, Tier 3 user report]**

**Different response to standard solutions:** Note-taking helps neurotypical workers because it reinforces encoding of material they are already partially encoding. For ADHD workers, note-taking helps but creates a dual-task problem: they must simultaneously listen, decide what is important, and write — all demanding executive functions that are impaired. The result is often notes that are incomplete or incomprehensible afterward. Users describe looking at their notes later and "wondering what they mean" [15]. **[Tier 3]**

**Medication partially addresses it but doesn't eliminate it:** Even medicated ADHD adults show large impairments in story recall and prospective memory relative to normal functioning [9]. This suggests the deficit is not fully attributable to momentary inattention but reflects a persistent encoding inefficiency. **[Tier 1]**

### 3.2 Scoring Implication

The current Q2 score of 4 (Substantially Differentiated) appears well-supported, possibly conservative. The case for 5 (Highly Differentiated) could be made based on:
- The neurologically distinct encoding mechanism (P3 reduction) — Tier 1
- The qualitative difference in failure pattern (gist loss vs. detail loss)
- The failure of standard note-taking approaches
- The persistence despite medication

However, the score of 4 is defensible because the observable workplace outcome (not remembering meeting content) looks similar between ADHD and neurotypical workers from an employer's perspective, even though the mechanism differs. The key question for scoring is whether the mechanism difference demands fundamentally different product design — and it does: an ADHD-optimised tool must capture everything (because the user cannot predict what they will fail to encode) rather than supplementing user notes (which assumes partial encoding).

**Recommendation:** Consider raising Q2 to 5 based on the encoding mechanism evidence. The mechanism difference directly implies different product design requirements, which is the criterion for a score of 5.

---

## 4. Existing Solutions Landscape

### 4.1 General AI Meeting Assistants

| Tool | What It Does | Free Tier | Paid Pricing | Funding/Maturity | ADHD-Specific? |
|------|-------------|-----------|-------------|-------------------|----------------|
| **Otter.ai** | Real-time transcription, AI summaries, action items, collaborative notes | 300 min/month | Pro $16.99/mo, Business $30/user/mo | ~$70M raised; $100M ARR (2025); founded 2016; 25M+ users | No |
| **Fireflies.ai** | Transcription, AI summaries, action items, CRM integration, conversation analytics | Limited (with bot joining all calls) | Pro ~$10/mo (annual), $18/mo (monthly) | $1B valuation (June 2025); ~$11M ARR; 20M+ users | No |
| **Fathom** | AI meeting summaries, transcription, highlights | Unlimited for individuals | Teams $29/mo | $21.8M raised (Series A Sept 2024); founded 2020 | No |
| **Grain** | Video recording, AI analysis, customer insight extraction | Free plan available | ~$19/user/mo (teams) | Focused on customer-facing meetings; Zoom-exclusive | No |
| **Granola** | OS-level desktop agent, captures audio locally, bot-free | Unknown | Unknown | $20M Series A; inverts traditional meeting stack | No |
| **tl;dv** | Transcription, AI summaries, multi-platform (Zoom, Meet, Teams) | Free tier available | Paid plans available | Established player | No |
| **Jamie** | Transcribes computer audio directly, no meeting bot | Free tier available | Paid plans available | Bot-free approach | No |

### 4.2 ADHD-Specific or ADHD-Marketed Tools

| Tool | What It Does | Pricing | Maturity | Notes |
|------|-------------|---------|----------|-------|
| **Saner.AI** | AI personal assistant for notes, email, calendar; marketed as "first ADHD-friendly AI personal assistant" | Free (30 AI req/mo); Starter $8/mo; Standard $16/mo | Beta phase; 4.8/5 on Product Hunt (41 reviews); small user base | Not meeting-specific; helps with meeting prep by surfacing related notes. No meeting transcription/recording. |
| **Recallify** | AI voice recorder, transcription, automatic task extraction, spaced repetition for retention | 7-day free trial | Early-stage product | Specifically designed for ADHD, acquired brain injury, cognitive impairment. Uses spaced repetition to build long-term retention — unique feature addressing encoding deficit. Not meeting-specific but applicable to meetings. |
| **Goblin Tools** | AI task breakdown, time estimation, tone checking | Free on web; paid on mobile | Established; well-known in ADHD community | Not meeting-related — focuses on task decomposition and executive function support pre/during tasks. |

### 4.3 Key Observations

**No tool is specifically designed for ADHD meeting-memory failure.** The market has two categories:
1. General AI meeting assistants (Otter, Fireflies, Fathom, etc.) — powerful transcription and summarisation, but not designed for ADHD-specific needs
2. ADHD productivity tools (Saner, Goblin Tools) — ADHD-aware design philosophy but do not address meeting transcription/capture

Recallify comes closest to bridging this gap with its combination of recording, automatic task extraction, and spaced repetition for retention, but it is early-stage and not specifically a meeting tool.

**The market is mature and well-funded for general meeting AI.** Otter ($100M ARR), Fireflies ($1B valuation), and Fathom ($21.8M raised) are established players. The market is valued at $1.6B (2024) growing to $6.2B by 2033 at 21.3% CAGR.

**None of the major players market to ADHD users or design for ADHD-specific needs.** This represents a potential differentiation opportunity but also suggests the general tools may be "good enough" for most ADHD users — a hypothesis tested in Section 5.

---

## 5. ADHD User Experience with Existing Tools

### 5.1 What Works

ADHD users find general AI meeting tools helpful in several ways:

- **Removing the dual-task burden:** Users no longer need to simultaneously listen and take notes, which is particularly demanding for ADHD brains. As one user noted, these tools let you "focus on listening instead of note-taking" [16]. **[Tier 3]**
- **Post-meeting recall support:** Having a full transcript to search means users can find specific information discussed in meetings they attended, compensating for encoding failures. **[Tier 3]**
- **Action item extraction:** AI-generated action items partially address prospective memory failures by creating an external record of commitments made during meetings. **[Tier 3]**
- **Reducing anxiety:** Captioning and transcription reduce the anxiety that comes from worrying about losing track of conversations — a significant secondary benefit for ADHD users who often experience meeting-related stress. **[Tier 2-3]**

### 5.2 What Fails — The ADHD-Specific Gaps

Despite these benefits, multiple significant gaps remain for ADHD users:

**Gap 1: Post-meeting, not in-the-moment support.** The most critical limitation identified across sources: all major tools "help you after the meeting, not during. If you need help in the moment, you'll want something different." For ADHD users who freeze when called upon, lose track of the discussion thread, or struggle to respond coherently during the meeting, transcription after the fact does not address the core in-meeting experience [17]. **[Tier 2-3]**

**Gap 2: Transcripts are too long and unstructured.** A full meeting transcript is often 5,000-20,000+ words. For ADHD users who struggle with reading long documents, a raw transcript creates a new problem rather than solving the original one. AI summaries help but are often described as reading "like word clouds" rather than providing the specific information the user needs. The ADHD user needs specific, actionable extraction — not a document to read through. **[Tier 3]**

**Gap 3: No personalisation of what matters.** AI meeting tools summarise what they determine to be important, but ADHD users' encoding failures are unpredictable. A user might perfectly remember the first 20 minutes and completely lose the last 10, or retain the emotional discussion but lose the technical details. Existing tools do not know what the individual user failed to encode, so they cannot provide personalised gap-filling. **[Tier 3, implied by Tier 1 mechanism]**

**Gap 4: No integration with task execution.** Extracting action items is useful, but ADHD users also struggle with task initiation (FP01) and follow-through. A list of action items extracted from a meeting faces the same ADHD-specific abandonment patterns as any other to-do list (see P2B on tool abandonment). The action items need to be pushed into the user's workflow with reminders and prompts — not just listed. **[Tier 3]**

**Gap 5: "Out of sight, out of mind" — transcripts are not revisited.** The P2B finding that ADHD users fail to return to check tools applies directly to meeting transcripts. Having a transcript available is only useful if the user remembers to consult it. Without proactive resurfacing, meeting transcripts join the graveyard of unused productivity tools. **[Tier 3]**

**Gap 6: Meeting bot social friction.** Several tools (Otter, Fireflies) join meetings as a visible bot participant. This creates social friction — colleagues notice, clients may object, and some workplaces prohibit recording. Bot-free alternatives (Granola, Jamie) address this but are less established. For ADHD users who may already feel self-conscious about their memory difficulties, the visible presence of a recording bot can add an additional layer of social anxiety. **[Tier 3-4]**

**Gap 7: No spaced repetition or retention support.** The clinical evidence shows that ADHD encoding deficits mean information does not transfer to long-term memory effectively. No major meeting tool addresses this by using evidence-based retention techniques (spaced repetition, retrieval practice, etc.) to help the information stick. Recallify is the only tool that explicitly incorporates spaced repetition, but it is early-stage. **[Tier 1 mechanism, Tier 3 product landscape]**

### 5.3 Why ADHD Users Abandon Meeting Tools

Based on the broader P2B patterns and ADHD-specific meeting tool feedback:

1. **Feature overload:** Tools like Fireflies have extensive dashboards that can overwhelm ADHD users. "The dashboard has so many features that it took a while to find what was actually needed" [17]. The same "setup hyperfocus trap" and "out of sight, out of mind" abandonment patterns identified in P2B apply.
2. **Passive tools require active use:** Meeting transcripts sit in a separate application waiting to be consulted. ADHD users need tools that push information to them, not tools they must remember to check.
3. **Insufficient value relative to friction:** If the tool requires setup (connecting to calendar, granting permissions, managing bot settings), the friction can outweigh the benefit for ADHD users who already struggle with administrative tasks (FP11).

### 5.4 What an ADHD-Optimised Meeting Tool Would Do Differently

Based on the clinical evidence and user experience findings, an ADHD-optimised meeting memory tool would need to:

1. **Capture everything automatically** — because the user cannot predict what they will fail to encode, the tool must be comprehensive, not selective
2. **Provide real-time support during the meeting** — live captions, key-point highlighting as the meeting progresses, not just post-meeting summaries
3. **Extract action items and push them into the user's workflow** — not just list them but integrate with calendar, task manager, and provide proactive reminders
4. **Proactively resurface meeting content** — send the user relevant meeting content when it becomes contextually relevant (e.g., before a follow-up meeting, when a related task is due)
5. **Use spaced repetition** — for critical information, use evidence-based retention techniques to help transfer information from working memory to long-term memory
6. **Be invisible/frictionless** — no meeting bot, minimal setup, automatic activation
7. **Provide personalised recall support** — allow the user to query their meeting history conversationally ("what did Sarah say about the Q3 timeline?") rather than requiring them to read through transcripts

---

## 6. Scoring Implications

### Current Scores (from S3)

| Dimension | Current Score | Current Evidence Tier |
|-----------|--------------|----------------------|
| Q1: Frequency | 4 (Daily) | 2-3 |
| Q2: Differentiation | 4 (Substantially differentiated) | 2-3 |
| Q3: Connectedness | 2 (Loosely related) | 3 |
| **Total** | **10/15** | **Avg: 2.7** |

### Recommended Score Adjustments

**Q1: Frequency — Maintain at 4 (Daily)**
- Evidence now stronger: 75-81% of ADHD individuals have measurable working memory impairment [Tier 1], and knowledge workers attend meetings daily. The opportunity for failure is daily and user reports confirm this.
- Not scored 5 (Multiple times per day) because while some workers attend multiple meetings daily, the memory failure is per-meeting, not per-moment-within-meeting. A worker attending 2-3 meetings daily experiences 2-3 encoding failure events, which sits between 4 and 5.
- **Evidence tier improved from 2-3 to 1-2** (clinical working memory prevalence data now supports the frequency assessment).

**Q2: Differentiation — Consider raising to 5 (Highly differentiated)**
- The Phase 3 evidence strengthens the differentiation case substantially:
  - The encoding mechanism is neurologically distinct (P3 amplitude reduction during encoding) — Tier 1
  - The failure pattern is qualitatively different (near-complete gist loss vs. gradual detail loss)
  - Standard note-taking creates a dual-task problem rather than solving it
  - Medication reduces but does not eliminate the deficit
  - The mechanism difference directly implies different product design requirements: an ADHD meeting tool must capture everything (because encoding failure is unpredictable) and must proactively resurface content (because the user cannot know what they forgot)
- **Case for raising to 5:** The mechanism difference (encoding vs. retrieval) is analogous to the time blindness mechanism difference (absent time perception vs. poor time management) scored at Q2=5 for FP03. Both involve a neurological absence of a capacity that standard tools assume exists.
- **Case for maintaining at 4:** The observable workplace failure (not remembering meeting content) looks similar to neurotypical forgetting from the employer's perspective, even though the cause is different. Standard meeting AI tools provide partial benefit to ADHD users.
- **Recommendation:** Raise to 5. The encoding mechanism is sufficiently distinct that general meeting tools — designed for people who partially encode and need retrieval support — do not adequately address the ADHD use case where encoding itself fails.
- **Evidence tier improved from 2-3 to 1** (neural encoding evidence is peer-reviewed).

**Q3: Connectedness — Maintain at 2 (Loosely related)**
- Phase 3 research does not change the connectedness assessment. Meeting-memory failure remains relatively isolated:
  - It connects to FP04 (deadline misses) via missed action items — but indirectly
  - It shares the working memory root cause with FP09 (email management) — but solving one would not solve the other
  - It does not cause or substantially reduce FP01 (initiation), FP02 (focus), FP03 (time blindness), or FP05 (prioritisation)
- **Maintain at 2.** This is a standalone problem, not a hub or cluster centre.

### Revised Score Summary

| Dimension | Previous Score | Recommended Score | Change | New Evidence Tier |
|-----------|---------------|-------------------|--------|-------------------|
| Q1: Frequency | 4 | **4** (maintain) | No change | 1-2 (improved from 2-3) |
| Q2: Differentiation | 4 | **5** (raise) | +1 | 1 (improved from 2-3) |
| Q3: Connectedness | 2 | **2** (maintain) | No change | 3 (unchanged) |
| **Total** | **10/15** | **11/15** | **+1** | **Avg: 1.7 (improved from 2.7)** |

### Strategic Implication

The revised score of 11/15 would rank FP07 above FP04, FP06, FP09, FP12, FP11, and FP10. More importantly, the dramatically improved evidence tier (from 2.7 to 1.7) means the score is now high-confidence rather than provisional.

The combination of:
- Confirmed high frequency (daily, backed by Tier 1 prevalence data)
- Highly differentiated mechanism (encoding deficit, Tier 1 neurological evidence)
- A mature but undifferentiated solutions market ($1.6B, no ADHD-specific players)
- Clear user-reported gaps in existing tools
- A standalone problem (not addressed by solving other ADHD workplace problems)

...suggests FP07 represents an independent product opportunity worth evaluating in the market gap analysis. The question is not whether a meeting-memory tool could help ADHD users — it clearly could — but whether the ADHD-specific differentiation is sufficient to justify a purpose-built product rather than recommending existing general tools.

---

## 7. Key Citations

### Peer-Reviewed Research (Tier 1)

1. Alderson, R.M. et al. (2020). Working memory and short-term memory deficits in ADHD: A bifactor modeling approach. *PMC*. https://pmc.ncbi.nlm.nih.gov/articles/PMC7483636/

2. Cognitive Impairment in Adult ADHD: Clinical Implications and Novel Treatment Strategies (2025). *PMC*. https://pmc.ncbi.nlm.nih.gov/articles/PMC12384060/

3. Missonnier, P. et al. (2013). Adult ADHD and working memory: Neural evidence of impaired encoding. *Clinical Neurophysiology*. https://www.sciencedirect.com/science/article/abs/pii/S1388245713013485

4. Bonilla, M.L. et al. (2020). Neurocognitive mechanisms underlying working memory encoding and retrieval in ADHD. *Scientific Reports*. https://www.nature.com/articles/s41598-020-64678-x

5. Working Memory and Information Processing in ADHD: Evidence for Directionality of Effects. *PMC*. https://pmc.ncbi.nlm.nih.gov/articles/PMC6987009/

6. Fuermaier, A.B.M. et al. (2013). Complex Prospective Memory in Adults with ADHD. *PLOS ONE*. https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0058338

7. Prospective memory (partially) mediates the link between ADHD symptoms and procrastination. *ADHD Attention Deficit and Hyperactivity Disorders*. https://link.springer.com/article/10.1007/s12402-018-0273-x

8. Assessment of goal-directed behavior and prospective memory in adult ADHD with an online 3D videogame simulating everyday tasks (2023). *Scientific Reports*. https://pmc.ncbi.nlm.nih.gov/articles/PMC10248336/

9. Fuermaier, A.B.M. et al. (2016). Effects of methylphenidate on memory functions of adults with ADHD. *Taylor & Francis*. https://www.tandfonline.com/doi/full/10.1080/23279095.2015.1124108

10. Yang, T.X. et al. (2017). Impaired Memory for Instructions in Children with ADHD Is Improved by Action at Presentation and Recall. *Frontiers in Psychology*. https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2017.00039/full

11. Working memory related functional connectivity in adult ADHD and its amenability to training (2024). *ScienceDirect*. https://www.sciencedirect.com/science/article/pii/S2213158224001372

### Expert and Professional Sources (Tier 2)

12. ADHD and Zoom meetings: Challenges, how to cope, and more. *Medical News Today*. https://www.medicalnewstoday.com/articles/adhd-zoom-meetings

13. ADHD Medications: How They Work & Side Effects. *Cleveland Clinic*. https://my.clevelandclinic.org/health/treatments/11766-adhd-medication

14. Understanding ADHD Working Memory Challenges. *Psychology Today*. https://www.psychologytoday.com/us/blog/on-your-way-with-adhd/202402/understanding-adhd-working-memory-challenges

15. ADHD and Meetings: How To Take and Use Your Notes. *Marla Cummins ADHD Coaching*. https://marlacummins.com/adhd-meetings-notes/

### Product and Market Sources

16. Understood.org. 6 ways AI can help you manage ADHD symptoms. https://www.understood.org/en/articles/adhd-ai-tools

17. Fireflies.ai Review (2026): An Honest Take After Months of Testing. *tl;dv*. https://tldv.io/blog/fireflies-review/

18. The 9 best AI meeting assistants. *Zapier*. https://zapier.com/blog/best-ai-meeting-assistant/

19. AI Meeting Assistant Market Size, Share | CAGR at 34%. *Market.us*. https://market.us/report/ai-meeting-assistant-market/

20. Saner.AI - AI Personal Assistant for ADHD. https://www.saner.ai/

21. Recallify - AI Voice Recorder, Memory & Task Management. https://recallify.ai/

### User Community Sources (Tier 3)

22. P2A: User Reported Work Struggles (Phase 2 research, this workspace) — Reddit threads on meeting memory failure

23. P2B: Tool Failures and Unmet Needs (Phase 2 research, this workspace) — tool abandonment patterns

---

## 8. Limitations

1. **No meeting-specific clinical studies.** All clinical evidence is on general working memory and prospective memory. While the extrapolation to meeting contexts is mechanistically sound, direct measurement of meeting-memory failure rates in ADHD adults would strengthen the evidence.

2. **Limited ADHD-specific user experience data on meeting AI tools.** Most meeting tool reviews are from general users. ADHD-specific feedback is sparse and often anecdotal (Tier 3-4). A dedicated user study with ADHD participants evaluating meeting AI tools would fill this gap.

3. **Encoding mechanism research is primarily from young adult samples.** The neural encoding studies (P3 amplitude) were conducted with college students and young adults. Whether the encoding deficit magnitude differs in older working adults with ADHD is not established.

4. **Product landscape changes rapidly.** The AI meeting assistant market is evolving quickly. Tool features, pricing, and capabilities described here may shift within months. The structural finding — that no major player designs for ADHD — is more durable than specific product details.

5. **No data on ADHD user adoption/retention of meeting AI tools.** We know ADHD users abandon productivity tools (P2B), but there is no data specifically on whether meeting AI tools have different retention patterns for ADHD users. The hypothesis that they would be abandoned less (because they are passive/automatic) versus more (because transcripts require active review) is untested.
