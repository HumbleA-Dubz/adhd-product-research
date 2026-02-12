# S4: Problem Cluster Map

## Methodology Note

Clusters are identified based on evidence of co-occurrence, shared root causes, and cascading effects between problems. Per the methodology: "Do not force clustering; record what emerges." Clusters here emerged from three evidence sources:

1. **P2C's overwhelm-burnout cycle** — an explicitly mapped cascading chain from practitioner observation
2. **P1A's multi-domain impairment data** — 60% report 3+ problems; inattention-linked behaviours are central
3. **P1C's mediation analysis** — self-management to time and self-organisation/problem-solving are the key mediating EF deficits
4. **P2A's user narratives** — frequent descriptions of chain reactions between problems

Causal direction matters: a hub problem *causes or exacerbates* others; a receiving problem is *caused by* others. Products that address hub problems create disproportionate value.

---

## Identified Clusters

### Cluster A: The Time-Perception Cascade

**Core problems:**
- **FP03 Time Estimation / Time Blindness** (Score: 14 — HUB)
- FP04 Deadline Misses (Score: 10 — receiver)
- FP12 Chronic Lateness (Score: 10 — receiver)
- FP08 Long-Term Project Neglect (Score: 12 — receiver/amplifier)

**Relationship type:** Causal chain with single hub

**Causal map:**
```
FP03 Time Blindness (HUB)
  │
  ├──▶ FP04 Deadline Misses
  │       (misjudged duration → insufficient time → missed deadline)
  │
  ├──▶ FP12 Chronic Lateness
  │       (misjudged preparation/travel time → late arrival)
  │
  └──▶ FP08 Long-Term Project Neglect (partial)
          (delay discounting is a time-perception failure;
           distant deadlines don't create urgency because time
           horizon is compressed)
```

**Evidence:**
- P1C mediation analysis identifies "self-management to time" as the primary EF deficit mediating ADHD → occupational impairment [Tier 1]
- P2C practitioners prioritise time management first specifically because "these executive function deficits create cascading effects on other work performance areas" [Tier 2]
- P2C overwhelm-burnout cycle begins with "time management difficulties → missed deadlines and unfinished work" [Tier 2]
- P2A: user lost 3 jobs from estimation failures; chronic lateness described alongside deadline misses [Tier 3]

**Hub problem:** FP03 (Time Blindness)
- Q3 connectedness score: 5/5 — affects 5+ other problems
- Addressing time blindness would directly reduce deadline misses (FP04) and chronic lateness (FP12), and partially reduce long-term project neglect (FP08)
- This is the strongest hub in the entire problem set

**Implication for product:**
A product that meaningfully externalises time perception — making the passage of time visible, tracking actual vs estimated durations, and creating artificial urgency for distant deadlines — could reduce three downstream problems simultaneously. This is the highest-leverage intervention point. Practitioners already use this strategy (visual timers, alarms, block scheduling) but current software implementations are generic rather than ADHD-optimised.

---

### Cluster B: The Initiation-Execution Bottleneck

**Core problems:**
- **FP01 Task Initiation Failure** (Score: 14 — HUB)
- FP08 Long-Term Project Neglect (Score: 12 — receiver)
- FP11 Documentation Paralysis (Score: 10 — receiver)

**Relationship type:** Shared mechanism — initiation barrier applied to different task types

**Causal map:**
```
FP01 Task Initiation Failure (HUB)
  │
  ├──▶ FP08 Long-Term Project Neglect
  │       (initiation barrier is highest for low-urgency,
  │        low-stimulation strategic work)
  │
  └──▶ FP11 Documentation Paralysis
          (documentation is maximally aversive to initiate:
           low stimulation + high effort + no immediate reward)
```

**Evidence:**
- P2A describes task initiation as the #1 user-discussed problem, with documentation and project work identified as particularly initiation-resistant [Tier 3]
- P2C identifies procrastination/initiation as driven by "altered rewards-processing systems" — tasks without novelty, urgency, or immediate reward are hardest to start [Tier 2]
- P2B documents that tools fail because they "assume once you write a task down, you'll naturally take the next step" — the gap between planning and doing [Tier 3]
- P2C: "procrastivity" — tackling easier tasks to avoid harder initiation targets [Tier 2]

**Hub problem:** FP01 (Task Initiation Failure)
- Q3 connectedness score: 4/5 — affects 2–3 other problems
- Addressing initiation would directly reduce project neglect (FP08) and documentation paralysis (FP11)

**Implication for product:**
A product addressing initiation needs to *lower the activation energy* for starting tasks — not just list or remind. Key design insight from P2B: users already know what to do; the barrier is the transition from knowing to doing. Effective approaches might include momentum-building (start with a micro-action), external accountability (body doubling), or environmental triggers (proactive intervention rather than passive reminder). The "next best step" concept from P2B user wants is directly relevant.

---

### Cluster C: The Attention-Quality Chain

**Core problems:**
- **FP02 Inconsistent Focus** (Score: 13 — HUB)
- FP06 Attention-to-Detail Errors (Score: 10 — receiver)
- FP04 Deadline Misses (Score: 10 — receiver, shared with Cluster A)

**Relationship type:** Causal chain — focus lapses produce both errors and insufficient output

**Causal map:**
```
FP02 Inconsistent Focus (HUB)
  │
  ├──▶ FP06 Attention-to-Detail Errors
  │       (focus lapses during execution → errors of oversight)
  │
  └──▶ FP04 Deadline Misses
          (low-productivity days accumulate → insufficient
           output by deadline)
```

**Evidence:**
- P1A: inattention-linked behaviours are central to most work impairments [Tier 1]
- P1A: "more than half the total ADHD-related productivity loss occurs on days when the worker is present" — presenteeism driven by focus failure [Tier 1]
- P2A: "Tasks that take others 5 min take me 30" — focus failure extending task duration [Tier 3]
- DSM-5: "often fails to give close attention to details" is a diagnostic criterion for the inattentive presentation [Tier 1]

**Hub problem:** FP02 (Inconsistent Focus)
- Q3 connectedness score: 4/5 — affects 2–3 other problems
- Addressing focus consistency would reduce detail errors (FP06) and contribute to fewer deadline misses (FP04)

**Implication for product:**
Focus solutions must account for the *variability* that defines the ADHD experience — what works Monday may fail Tuesday (P2A). Static approaches (fixed Pomodoro intervals, uniform focus sessions) fail because they don't adapt. An effective focus tool would need to accommodate hyperfocus when it occurs, provide structure when focus is absent, and avoid the "sour spot" of interrupting productive flow (P2B — Pomodoro critique).

---

### Cross-Cluster Interactions

**FP04 (Deadline Misses) appears in two clusters** — it receives causal pressure from both Cluster A (time blindness → insufficient time) and Cluster C (focus failure → insufficient output). This makes it a convergence point but not a hub. Addressing either time blindness or focus consistency would partially reduce deadline misses, but eliminating them entirely likely requires both.

**FP05 (Prioritisation Failure) is a cross-cluster amplifier** — it doesn't neatly belong to any single cluster but worsens all of them:
- Makes Cluster A worse: can't prioritise which deadlines matter most
- Makes Cluster B worse: prioritising easier tasks over strategic work (procrastivity)
- Makes Cluster C worse: focusing on wrong tasks amplifies the impact of limited focus capacity

```
                    FP05 Prioritisation (Amplifier)
                    /          |            \
                   ▼           ▼             ▼
           Cluster A    Cluster B     Cluster C
          (Time)       (Initiation)   (Focus)
```

**FP08 (Long-Term Project Neglect) appears in two clusters** — it receives pressure from both Cluster A (time blindness / delay discounting) and Cluster B (initiation failure for low-urgency work). This overlap suggests that effective interventions for project neglect may need to address *both* time perception and initiation barriers.

---

## Standalone Problems

The following problems did not cluster meaningfully:

### FP07: Meeting / Instruction Memory Failure (Score: 10)
- **Why standalone:** Working memory encoding failure operates independently of time perception, initiation, and focus. It occurs even when the user is fully engaged and focused during the meeting. It shares a root cause (working memory deficit) with FP09 (email) but solving one wouldn't solve the other — the contexts and failure modes are different.
- **Note:** This may represent a distinct product opportunity — AI meeting capture/summarisation is a growing market.

### FP09: Email / Communication Management Failure (Score: 10)
- **Why standalone:** Email management failure involves a specific combination of initiation (to reply), memory (to check), and overwhelm (from accumulated messages) but operates in a contained domain. It connects loosely to FP01 (initiation) and FP07 (memory) but addressing either wouldn't fully solve email problems because the email-specific avoidance cycle is distinct.
- **Note:** Email-specific ADHD solutions may exist as a product opportunity, but the market for email management tools is extremely noisy.

### FP10: Context Switching Cost (Score: 9)
- **Why standalone:** Context switching is an environmental/workload interaction rather than a core executive function failure. It is influenced by meeting culture and notification environment (partially outside individual control — flagged as borderline in S2). It shares context with FP02 (focus) but is mechanistically different — focus failure is about sustaining attention on *one* task, while switching cost is about transitioning *between* tasks.

### FP18: Workspace Disorganisation (Score: 8)
- **Why standalone:** Workspace disorganisation shares the self-organisation EF deficit with Cluster B but operates in a different domain (physical/digital environment rather than task execution). Solving initiation failure wouldn't make desks tidier. It has the lowest score in the set and limited connectedness.

---

## Cluster Summary

| Cluster | Hub Problem | Hub Score | Downstream Problems | Combined Score | Key Mechanism |
|---------|-------------|-----------|---------------------|----------------|---------------|
| **A: Time-Perception Cascade** | FP03 Time Blindness | 14 | FP04 (10), FP12 (10), FP08 (12 partial) | 46 | External time sense is absent; all time-dependent tasks fail |
| **B: Initiation-Execution Bottleneck** | FP01 Task Initiation | 14 | FP08 (12), FP11 (10) | 36 | Activation energy for starting exceeds neurological capacity |
| **C: Attention-Quality Chain** | FP02 Inconsistent Focus | 13 | FP06 (10), FP04 (10 shared) | 33 | Focus variability produces both errors and insufficient output |
| **Amplifier** | FP05 Prioritisation | 13 | Cross-cluster | — | Wrong sequencing worsens all clusters |

**Highest-leverage intervention points** (ranked by cluster impact):
1. **FP03 Time Blindness** — Cluster A hub, 5/5 connectedness, reduces 3+ downstream problems
2. **FP01 Task Initiation** — Cluster B hub, 4/5 connectedness, qualitatively distinct ADHD mechanism
3. **FP02 Inconsistent Focus** — Cluster C hub, but hardest to address with software (attention is the core ADHD deficit)
4. **FP05 Prioritisation** — Cross-cluster amplifier, high score, strong software amenability

---

## Visual: Full Causal Map

```
FP05 Prioritisation Failure (13) ─── amplifies ──┐
                                                   │
FP03 Time Blindness (14) ────────────────────┐    │
  │                                           │    │
  ├──▶ FP12 Chronic Lateness (10)            │    │
  │                                           │    │
  ├──▶ FP04 Deadline Misses (10) ◀───────────┤    │
  │         ▲                                 │    │
  │         │                                 │    │
  │    FP02 Inconsistent Focus (13) ──────────┘    │
  │         │                                      │
  │         └──▶ FP06 Detail Errors (10)           │
  │                                                │
  └──▶ FP08 Long-Term Project Neglect (12) ◀──┐   │
              ▲                                │   │
              │                                │   │
         FP01 Task Initiation Failure (14) ────┘   │
              │                                    │
              └──▶ FP11 Documentation Paralysis (10)
                                                   │
    ◀──────────── all clusters amplified by ◀──────┘

STANDALONE:
  FP07 Meeting Memory Failure (10)
  FP09 Email Management Failure (10)
  FP10 Context Switching Cost (9)
  FP18 Workspace Disorganisation (8)
```
