# S5: Phase 3 Deep Dive Decisions

## Decision Criteria

Per the methodology, a Phase 3 deep dive is warranted when:

1. **High score + low evidence tier** — Problem scores well (total ≥ 10/15) but key scores rely on Tier 3–4 evidence, meaning additional research could meaningfully change the score
2. **Borderline gate result** — Problem passed gates with caveats; better evidence could flip the decision
3. **Hub status requiring confident scoring** — Problem is a cluster hub, making scoring accuracy especially important for downstream decisions
4. **Market gap assessment needs specific data** — Existing research lacks competitive landscape detail needed for Step 6

Phase 3 prompts use the templates from the methodology:
- **Template 3A**: Problem behaviour detail (frequency, triggers, downstream consequences, ADHD differentiation)
- **Template 3B**: Existing solutions for specific problem (software tools, pricing, maturity, funding)
- **Template 3C**: User experience with specific tools (what works, what fails, why abandoned, what users wish for)

---

## Decisions

### Problems NOT Requiring Phase 3 (Sufficient Evidence)

| ID | Problem | Score | Avg Tier | Rationale |
|----|---------|-------|----------|-----------|
| FP03 | Time Blindness | 14 | 1.3 | Strong Tier 1 evidence from WFIRS, EF mediation analysis, WHO data. All three scoring dimensions well-supported. Hub status confirmed by multiple independent sources (P1C mediation, P2C practitioner consensus, P2A user cascades). |
| FP01 | Task Initiation | 14 | 1.7 | Tier 1 WFIRS prevalence data for frequency. Differentiation well-supported by qualitative evidence from multiple sources (P2A, P2C, P2B). Connectedness confirmed by cluster analysis. |
| FP02 | Inconsistent Focus | 13 | 1.0 | Strongest evidence base in the set — WFIRS, WHO, DSM, ADDitude poll all provide Tier 1–2 data. All scores high-confidence. |
| FP05 | Prioritisation | 13 | 1.7 | ADDitude poll (Tier 2, n≈1,000) for frequency. WFIRS component (Tier 1). Practitioner consensus on importance (Tier 2). Cross-cluster amplifier role well-evidenced. |
| FP08 | Long-Term Project Neglect | 12 | 1.7 | Delay discounting is well-documented in ADHD literature (Tier 1). Frequency based on user reports (Tier 2–3) but consistent with clinical understanding. Sufficient for scoring confidence. |
| FP04 | Deadline Misses | 10 | 1.0 | Tier 1 across all dimensions — WHO, WFIRS, employer ratings. No evidence gaps. |
| FP06 | Detail Errors | 10 | 1.0 | DSM diagnostic criterion (Tier 1). WFIRS data (Tier 1). Employer ratings (Tier 1). No evidence gaps. |
| FP12 | Chronic Lateness | 10 | 1.0 | WFIRS data (Tier 1). Employer ratings (Tier 1). Clear mechanism (FP03 downstream). No gaps. |

### Problems Requiring Phase 3

#### FP09: Email / Communication Management Failure (Score: 10, Avg Tier: 3.0)

**What's missing:**
- **Q1 (Frequency):** No clinical data quantifying how often ADHD adults fail to respond to work communications. The 60% working memory impairment figure cited in P2A needs source verification. Current frequency score (4) is based entirely on Tier 3 user reports.
- **Q2 (Differentiation):** "Out of sight, out of mind" is a compelling differentiator from P2B but is Tier 3 evidence. No comparative studies showing ADHD vs neurotypical email management failure rates exist in the current research.

**Why it matters:** FP09 scored 10/15 — at the scoring threshold for market gap analysis. Better evidence could either elevate it (confirming high frequency and differentiation → proceed to market gap) or deflate it (revealing it's less differentiated than user reports suggest → deprioritise). Its standalone status means it could represent an independent product opportunity if differentiation is confirmed.

**Recommended deep dive:**
- Template 3A (behaviour detail): frequency data, triggers, ADHD-specific patterns
- Template 3C (user experience): which email tools ADHD users have tried and why they failed

**Priority:** Medium — worth investigating but not blocking. If Phase 3 evidence is weak, this can be deprioritised without affecting core cluster analysis.

---

#### FP10: Context Switching Cost (Score: 9, Avg Tier: 3.3)

**What's missing:**
- **Q1 (Frequency):** The "2-3 hours/day" estimate is from a single Reddit user (Tier 4). No clinical data quantifies ADHD-specific context-switching cost. General population research shows ~23 minutes average recovery, but ADHD-specific severity data is absent.
- **Q2 (Differentiation):** Scored 3 based on reasoning that the mechanism is similar to neurotypical experience but more severe. Better data could raise this to 4 (if ADHD switching cost is qualitatively different — e.g., involving emotional distress, longer recovery, or different triggers) or confirm it at 3.

**Why it matters:** FP10 scored 9/15 — below the market gap threshold. However, it was borderline on both gates (S2), and context switching is a widely-discussed ADHD complaint. Better evidence would either confirm it's below threshold (deprioritise) or reveal it's more impactful than current data suggests (re-evaluate).

**Recommended deep dive:**
- Template 3A (behaviour detail): ADHD-specific switching cost data, comparison to neurotypical, frequency and severity

**Priority:** Low — scores below threshold; deep dive would need to substantially change scores to matter. Proceed with market gap analysis for higher-scoring problems first. Return to this only if time allows.

---

#### FP11: Documentation / Administrative Paralysis (Score: 10, Avg Tier: 3.0)

**What's missing:**
- **Q1 (Frequency):** No clinical data on how often documentation avoidance manifests. Current score (4) based on user reports only (Tier 3).
- **Q2 (Differentiation):** Scored 4 based on P2A descriptions, but this is a Tier 3 assessment. The claim that documentation is "uniquely aversive" for ADHD needs clinical support. It may be a specific instance of FP01 (initiation failure) rather than a distinct problem requiring separate attention.

**Why it matters:** FP11 sits within Cluster B as a downstream receiver of FP01 (Task Initiation). If it is merely FP01 applied to a specific domain (documentation), then addressing FP01 would automatically address FP11, and it doesn't need independent analysis. If it has distinct characteristics (e.g., the writing/composition cognitive load creates a separate barrier beyond initiation), it might warrant specific product attention.

**Recommended deep dive:**
- Template 3A (behaviour detail): Is documentation paralysis distinct from general task initiation failure? What specific cognitive demands make it harder than other tasks?

**Priority:** Low — this is a Cluster B receiver. If the product addresses FP01 (initiation), FP11 likely improves. Deep dive would primarily clarify whether a documentation-specific feature is needed within a broader initiation solution.

---

#### FP07: Meeting / Instruction Memory Failure (Score: 10, Avg Tier: 2.7)

**What's missing:**
- **Q1 (Frequency):** Practitioner reports (Tier 2) confirm this is common, but no clinical data quantifies frequency specifically for meeting-memory failure vs general working memory deficit. The problem may be more or less frequent than the score of 4 suggests.
- **Q2 (Differentiation):** The claim that ADHD meeting-memory failure is qualitatively different (processing in real-time but not encoding) is based on user descriptions (Tier 3). Clinical working memory research supports the mechanism (Tier 1) but doesn't specifically study meeting contexts.

**Why it matters:** FP07 is a standalone problem (no cluster membership). If confirmed as highly differentiated and frequent, it represents an independent product opportunity in the AI meeting-assistant space. If differentiation is lower than estimated, the existing meeting-AI market (Otter, Fireflies, Fathom) may already serve ADHD users adequately, and a ADHD-specific product wouldn't add value.

**Recommended deep dive:**
- Template 3A (behaviour detail): clinical data on meeting-specific memory failure
- Template 3B (existing solutions): AI meeting assistants and their ADHD user feedback
- Template 3C (user experience): Do ADHD users find existing meeting AI tools sufficient?

**Priority:** Medium — worth investigating because it could represent a standalone product opportunity or confirm that existing tools already solve it. Also relevant to understanding whether the broader product should include meeting-capture features.

---

### Problems Discarded (Low Score, No Deep Dive Needed)

| ID | Problem | Score | Rationale |
|----|---------|-------|-----------|
| FP18 | Workspace Disorganisation | 8 | Lowest score. Low frequency (3), moderate differentiation (3), low connectedness (2). Evidence is adequate at Tier 2. Score is unlikely to rise with more data — the problem is real but relatively low-impact compared to others. Not worth Phase 3 investment. |

---

## Phase 3 Execution Recommendation

### Execute Before Market Gap Analysis

| Problem | Templates | Priority | Blocking? |
|---------|-----------|----------|-----------|
| FP07 Meeting Memory | 3A + 3B + 3C | Medium | No — proceed with top-5 market gap analysis while running this |
| FP09 Email Management | 3A + 3C | Medium | No — same as above |

### Can Be Deferred

| Problem | Templates | Priority | Blocking? |
|---------|-----------|----------|-----------|
| FP10 Context Switching | 3A | Low | No — below threshold; only pursue if time allows |
| FP11 Documentation | 3A | Low | No — Cluster B receiver; addressed by FP01 intervention |

### Recommendation

**Proceed to Step 6 (Market Gap Analysis) for the top 5 problems immediately** (FP03, FP01, FP05, FP02, FP08 — all scoring ≥ 12 with high evidence confidence). Run Phase 3 deep dives for FP07 and FP09 in parallel. The deep dive results for FP07 and FP09 can be incorporated into market gap analysis when available, but the core analysis should not wait for them.

The top 5 problems have sufficient evidence for confident market gap assessment. The Phase 3 candidates are all score-10 problems that are secondary opportunities at best — useful to investigate but not decision-critical.
