# P3B: Meeting and Instruction Memory Failure in ADHD — Phase 3 Deep Dive

## Problem Definition

Adults with ADHD process and understand information during meetings and conversations but cannot recall content shortly afterward. They fail to remember action items, instructions, or commitments made in verbal interactions. Users describe "understanding everything being said — walking out and not 'remembering' anything."

**FP07 Current Scores:** Q1 (Frequency) = 4, Q2 (Differentiation) = 4, Q3 (Connectedness) = 2. Total: 10/15. Average evidence tier: 2.7.

---

## 1. Clinical Evidence on Meeting-Memory Failure

### Working Memory as a Core ADHD Deficit

Working memory impairment is one of the most well-documented cognitive deficits in ADHD. A bifactor modelling study found that ADHD is associated with very large magnitude impairments in central executive working memory, with effect sizes of d=1.63–2.03 and **75–81% of ADHD individuals showing measurable impairment** [1]. [Tier 1]

A 2025 review confirmed that cognitive deficits in adult ADHD primarily involve executive functions including inattention, cognitive flexibility, inhibition/impulsivity, and working memory, significantly affecting daily decision-making, interpersonal functioning, and long-term goal achievement [2]. [Tier 1]

### The Encoding Deficit — Not Retrieval, Not Retention

Research published in *Clinical Neurophysiology* (2014) provided the first neural evidence of **impaired encoding in adult ADHD**: the ADHD group showed lower P3 amplitude during working memory encoding, indicating ineffective allocation of attentional resources during the encoding stage [3]. [Tier 1]

A complementary study in *Scientific Reports* (2020) confirmed that while binding processes appear intact in ADHD, **attention-related encoding and retrieval processes are compromised**, resulting in a failure to prioritise relevant information [4]. [Tier 1]

This is the neurological basis for the user experience: "understanding everything being said — walking out and not remembering anything." The information is processed in real-time but not effectively encoded into memory for later retrieval.

**Key distinction:** Neurotypical forgetting typically involves a retrieval failure — information was encoded but cannot be accessed. ADHD forgetting stems primarily from an **encoding deficit** — the brain processes information in a disorganised manner, making it harder for information to be stored successfully [5]. [Tier 1]

### Prospective Memory Impairments

Prospective memory — remembering to do something in the future — is directly relevant to meeting action items. Fuermaier et al. (2013, PLOS ONE) found large-scale impairment in task planning abilities in 45 ADHD adults vs 45 matched controls [6]. [Tier 1]

A separate study found that prospective memory performance partially mediates the link between ADHD symptoms and procrastination behaviour [7]. [Tier 1]

### Effects of Medication on Memory

Fuermaier et al. (2016) found that methylphenidate improved memory performance, but **even treated adults with ADHD still showed considerable impairments** compared to normal functioning, with large deficits persisting in story recall and prospective memory [9]. [Tier 1]

### Memory for Instructions

Yang et al. (2017) found that children with ADHD were significantly impaired in following-instructions tasks. Action-based presentation (physically performing instructions) improved recall, suggesting motor encoding partially bypasses the verbal working memory deficit [10]. [Tier 1]

---

## 2. Frequency and Triggers

### Frequency Assessment: Daily (Score 4 confirmed)

- 75–81% of ADHD individuals have measurable working memory impairment [Tier 1], and knowledge workers attend meetings daily
- User reports describe this as occurring at "virtually every meeting" [Tier 3]
- DSM-5 criterion: "often does not seem to listen when spoken to directly" [Tier 1]
- Practitioners list forgetting instructions as a common presenting problem [Tier 2]

### Key Triggers

- **Meeting length** — virtual meetings require more concentration; "Zoom fatigue" is amplified for ADHD [Tier 2]
- **Topic interest** — neutral/boring material produces largest encoding gaps vs neurotypical [Tier 1]
- **Medication timing** — late-afternoon meetings outside medication coverage have worse outcomes [Tier 1]
- **Cognitive fatigue** — meetings later in the day, after demanding mornings [Tier 2]
- **Virtual format** — strips away encoding-supporting physical/social cues [Tier 2]
- **Multi-speaker dynamics** — tracking multiple speakers exceeds working memory capacity [Tier 2]

---

## 3. ADHD vs Neurotypical Differentiation

The research supports a **qualitative** difference:

1. **Different mechanism:** Neurotypical = retrieval failure (encoded but can't access). ADHD = encoding failure (never stored). The P3 encoding signal is measurably lower in ADHD brains [Tier 1].

2. **Different pattern:** Neurotypical workers forget details gradually but retain gist. ADHD workers often cannot reconstruct even the gist — "it was all just a blur" [Tier 3, consistent with Tier 1 mechanism].

3. **Different relationship to attention during meeting:** ADHD forgetting occurs despite active engagement and comprehension during the meeting [Tier 1 mechanism].

4. **Standard solutions fail differently:** Note-taking creates a dual-task problem for ADHD (listen + decide importance + write — all demanding executive functions). Notes are often incomplete or incomprehensible afterward [Tier 3].

5. **Medication reduces but doesn't eliminate:** Even medicated ADHD adults show large impairments in story recall [Tier 1].

---

## 4. Existing Solutions Landscape

### General AI Meeting Assistants

| Tool | Free Tier | Paid Pricing | Maturity | ADHD-Specific? |
|------|-----------|-------------|----------|----------------|
| Otter.ai | 300 min/month | $16.99–$30/mo | ~$70M raised; $100M ARR; founded 2016; 25M+ users | No |
| Fireflies.ai | Limited | $10–18/mo | $1B valuation (2025); 20M+ users | No |
| Fathom | Unlimited individual | Teams $29/mo | $21.8M raised (Series A 2024) | No |
| Granola | Unknown | Unknown | $20M Series A; bot-free approach | No |
| tl;dv | Free tier | Paid plans | Established | No |

### ADHD-Specific/Adjacent Tools

| Tool | What It Does | Pricing | Notes |
|------|-------------|---------|-------|
| Saner.AI | AI personal assistant; meeting prep via related notes | Free–$16/mo | Not meeting-specific; no transcription |
| Recallify | Voice recorder + transcription + spaced repetition | 7-day trial | Early-stage; uses spaced repetition for retention — unique |
| Goblin Tools | Task breakdown, tone checking | Free/paid | Not meeting-related |

**Key finding: No tool is specifically designed for ADHD meeting-memory failure.** The market has general AI meeting tools (mature, well-funded) and ADHD productivity tools (meeting-unaware). The gap between them is unaddressed.

---

## 5. ADHD User Experience with Existing Tools

### What Works
- Removing dual-task burden (don't need to listen AND take notes) [Tier 3]
- Post-meeting searchable transcripts compensate for encoding failures [Tier 3]
- AI action item extraction addresses prospective memory failure [Tier 3]

### What Fails — ADHD-Specific Gaps

1. **Post-meeting, not in-the-moment** — tools help after the meeting, not during; doesn't address in-meeting freeze or loss of thread [Tier 2–3]
2. **Transcripts too long** — 5,000–20,000+ word transcripts create a new reading problem; summaries feel generic [Tier 3]
3. **No personalised gap-filling** — tools don't know what the individual user failed to encode [Tier 3]
4. **No integration with task execution** — action items face same abandonment patterns as any to-do list [Tier 3]
5. **"Out of sight, out of mind"** — transcripts not revisited without proactive resurfacing [Tier 3]
6. **Meeting bot social friction** — visible bot creates anxiety for self-conscious ADHD users [Tier 3–4]
7. **No spaced repetition** — no tool helps transfer information to long-term memory [Tier 1 mechanism gap]

---

## 6. Scoring Implications

| Dimension | Original | Recommended | Change | Evidence Tier |
|-----------|----------|-------------|--------|---------------|
| Q1: Frequency | 4 | **4** (maintain) | — | Improved: 2–3 → 1–2 |
| Q2: Differentiation | 4 | **5** (raise) | +1 | Improved: 2–3 → 1 |
| Q3: Connectedness | 2 | **2** (maintain) | — | Unchanged: 3 |
| **Total** | **10** | **11** | **+1** | **Avg: 2.7 → 1.7** |

**Rationale for Q2 raise to 5:** The encoding mechanism (P3 amplitude reduction during encoding) is neurologically distinct and directly implies different product design — an ADHD tool must capture everything (encoding failure is unpredictable) and proactively resurface content, not supplement partial encoding like general tools assume.

---

## 7. Key Citations

[1] Alderson et al. (2020). Working memory deficits in ADHD: bifactor model. PMC: https://pmc.ncbi.nlm.nih.gov/articles/PMC7483636/
[2] Cognitive Impairment in Adult ADHD (2025). PMC: https://pmc.ncbi.nlm.nih.gov/articles/PMC12384060/
[3] Missonnier et al. (2013). Impaired encoding in adult ADHD. Clinical Neurophysiology: https://www.sciencedirect.com/science/article/abs/pii/S1388245713013485
[4] Bonilla et al. (2020). Working memory encoding/retrieval in ADHD. Scientific Reports: https://www.nature.com/articles/s41598-020-64678-x
[5] Working memory and information processing in ADHD. PMC: https://pmc.ncbi.nlm.nih.gov/articles/PMC6987009/
[6] Fuermaier et al. (2013). Prospective memory in adults with ADHD. PLOS ONE: https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0058338
[7] Prospective memory mediates ADHD–procrastination link. Springer: https://link.springer.com/article/10.1007/s12402-018-0273-x
[8] EPELI study (2023). Everyday executive problems in ADHD. Scientific Reports: https://pmc.ncbi.nlm.nih.gov/articles/PMC10248336/
[9] Fuermaier et al. (2016). Methylphenidate effects on memory. Taylor & Francis: https://www.tandfonline.com/doi/full/10.1080/23279095.2015.1124108
[10] Yang et al. (2017). Memory for instructions in ADHD. Frontiers in Psychology: https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2017.00039/full
