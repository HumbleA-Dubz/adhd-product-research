# Derivability Options Analysis (v2)

> **Scope**: Per-document assessment of what data each analysis file contains, what's already in the SoR, what's changed since v1, and what remains to close each gap.
>
> **v2 note (2026-02-26)**: Refreshed against current SoR state. Several v1 recommendations have been actioned (gate-failed problems, inclusion tests, cluster compatibility ratings). New file added (S6). CQ Reference and CS1 noted as absent from repo.

## Reading Guide

For each document: what it contains, what's encoded, what's changed since v1, what's still missing, and a fresh verdict. "Derivable" = an AI agent with only the SoR could regenerate the document's substantive content.

---

## S1: Master Problem List

### What it contains
18 functional problem entries (FP01-FP20), each with:
- Formal functional definition (3-4 sentences)
- Source file references, evidence tier
- Key quantitative data (prevalence percentages, sample sizes)
- Symptom-to-function translation notes
- Key citations with URLs
- Summary table (all 18 problems)
- 7 deduplication decisions with rationale

### What's in the SoR now
- **All 18 problems present** — 14 active + 4 filtered_out (FP13b, FP14-FP17, FP19-FP20) with full gate evaluations. (v1 gap closed)
- `plain_language` on every problem
- `functional_definition` on every problem — **but not in the entity type definition**. This field is used consistently across all problems but is not formally declared in `_framework`. Schema-data mismatch.
- Full scoring evaluations with per-dimension rationale
- Source entities carry URLs and analysis_docs

### What's changed since v1
v1 flagged 6 missing gate-failed problems as a schema compliance issue. **This is now resolved** — all exist with gate evaluations. The `functional_definition` field was also added to all entities since v1 but the schema was not updated.

### What's still missing
1. **Schema declaration for `functional_definition`** — field is used everywhere but not in the type definition. Needs adding to `_framework.entity_types.problem`.
2. **Per-problem structured quantitative data** — specific numbers (40.7%, n=134, 22.1 days/year) are embedded in scoring rationale prose but not field-accessible.
3. **Deduplication decisions** — 7 merge/split rationale entries. Process documentation.
4. **Symptom-to-function translation notes** — one-time methodological notes.

### Verdict: Schema fix only
The substantive encoding work is done. The only action item is adding `functional_definition` to the problem entity type definition (~2 lines). Everything else is either already accessible through scoring rationale or is process documentation with no ongoing decision value.

**Residual gap**: Structured quantitative data per problem. Acceptable — scoring rationale already cites key numbers.

**Action item**: Add `functional_definition` to `_framework.entity_types.problem` field list. (Could be a system ticket.)

---

## CS1: Choice Space Methodology

### Status: Not in repo

CS1 is not in the analysis folder. v1 verdict was "do not encode" — it is process documentation describing how the choice space was built. Its outputs (clusters, engagement models, meta-challenges) are all in the SoR.

### Verdict: No change from v1
Process documentation. Outputs encoded. L3 sub-categories remain deferred until technologies are parsed.

---

## CS2: Choice Space Map

### What it contains
- L1 cluster summary with constraining attributes
- L2 model summary with dimensional positions
- L1-L2 compatibility matrix (S/P/X ratings with per-cell rationale, 24 cells)
- L3 implementation requirements per viable combination
- Meta-challenge vulnerability summary
- Five pre-mapped solution paths

### What's in the SoR now
- Cluster entities with members, hubs, causal_direction
- Engagement model entities with dimensions, MC vulnerability
- **`cluster_compatibility` field on all 8 engagement models** with S/P/X ratings and per-cell rationale (v1 gap closed)
- Model-to-problem refs

### What's changed since v1
v1 recommended "Option C — encode ratings only" (~40 lines). **More than that was done** — both ratings AND rationale were added as `cluster_compatibility` on each engagement model. However, like `functional_definition`, this field is **not declared in the entity type definition**.

### What's still missing
1. **Schema declaration for `cluster_compatibility`** — field populated on all 8 models but not in `_framework.entity_types.engagement_model`. Schema-data mismatch.
2. **L3 requirements** — deferred with technologies.
3. **Pre-mapped solution paths** — synthesis, not data.

### Verdict: Schema fix only
Ratings and rationale are encoded. The only action is adding `cluster_compatibility` to the engagement_model type definition (~3 lines).

**Action item**: Add `cluster_compatibility` to `_framework.entity_types.engagement_model`.

---

## CS3: Cross-Layer Mapping

### What it contains
- Full per-cell rationale for L1-L2 compatibility (deeper than CS2)
- 4 judgment consistency principles (matching rules)
- L3 implementation requirements per viable combination
- Meta-challenge overlay per combination

### What's in the SoR now
- Compatibility ratings and rationale on engagement models (via CS2 encoding)
- No `compatibility_principles` in _framework

### What's changed since v1
v1 recommended encoding the 4 matching principles in _framework. **This has not been done.**

### What's still missing
1. **Compatibility principles** — the 4 matching rules (frequency-to-initiation, awareness-to-timing, co-occurrence-to-breadth, context-to-surface). These are structural logic that any agent re-deriving or validating compatibility ratings should follow.
2. **L3 requirements** — deferred.

### Verdict: Encode principles (~20 lines in _framework)
Same as v1. The principles are the "how to think about compatibility" rules. Without them, the ratings in the SoR are assertions without documented methodology.

**Action item**: Add `compatibility_principles` section to `_framework`. Could be a system ticket or direct action.

---

## CS4: Engagement Models

### What it contains (per model x 8)
- Full description, dimensional position table with rationale
- Retention profile, habit-formation burden
- Data access requirements (bulleted list)
- User trust requirements (bulleted list)
- L3 preliminary requirements
- Evidence from corpus with quotes
- Gap-check analysis, dimensional coverage map, limitations

### What's in the SoR now
- All 8 engagement model entities with: name, plain_language, dimensions, retention_risk, habit_burden, MC vulnerability, problem refs
- `cluster_compatibility` with ratings (undocumented field)
- **No `data_access_requirements` or `trust_requirements`**

### What's changed since v1
v1 recommended adding data_access and trust fields. **Not done.** ST_009 was created to track this but is blocked on ST_007 (requirements layer architecture question).

### What's still missing
1. **data_access_requirements** — what data does each model need? Decision-relevant for product architecture.
2. **trust_requirements** — what trust must the user extend? Decision-relevant for go-to-market.
3. **Dimensional rationale** — SoR dimensions are single-line values. CS4 has per-dimension explanations. Low priority — the positions are sufficient for compatibility analysis.

### Verdict: Blocked on ST_007
The right fields (data_access, trust) are known and tracked (ST_009). Whether they live on engagement_model entities or in a future requirements layer depends on ST_007. No point adding them until that architectural question is resolved.

**Action item**: None beyond existing ST_009. Resolve ST_007 first.

---

## CS5: Meta-Challenges

### What it contains
- 6 meta-challenges with full analysis per MC (description, tiered evidence, inclusion test table, layer interaction)
- 6 relocated candidates with failed criterion and rationale
- Cross-challenge interaction matrix (amplification/independence)
- 3 compound effects (Triple Decay, Lapse Trap, Stealth Requirement)
- Structural implications

### What's in the SoR now
- All 6 MC entities with severity, evidence, key_evidence
- **`inclusion_test` fully populated on all 6 MCs** — per-criterion met/reasoning (v1 gap closed)
- **Relocated candidates referenced in CT_007** — 6 phenomena listed, pending claim-first assessment (v1 gap partially closed)
- `refs.amplifies` on all MCs (encodes the interaction graph)
- **Compound effects NOT encoded** — Triple Decay, Lapse Trap, Stealth Requirement are named interaction patterns not in the SoR

### What's changed since v1
v1 flagged inclusion_tests as a schema compliance issue. **Resolved** — all 6 MCs have full inclusion tests. Relocated candidates are tracked in CT_007 (pending reassessment under claim-first protocol). Amplification graph is encoded.

### What's still missing
1. **Compound effects** — three named interaction patterns (Triple Decay = MC1+MC5+MC2, Lapse Trap = MC2+MC3, Stealth Requirement = MC4+MC1+MC3). The amplifies refs encode the relationships but do not name the patterns. These could be claims.
2. **Tiered evidence breakdown** — key_evidence is a single narrative; CS5 breaks by Clinical/User/Market tiers. Low priority.
3. **Layer interaction analysis** — per-MC interaction with each L1/L2/L3 combination. High encoding cost, moderate value.
4. **Structural implications** — 5 synthesis conclusions. Could be claims if decision-relevant.

### Verdict: Consider compound effects as claims
Inclusion tests and relocated candidates are handled. The remaining gap with clear value is naming the compound effects — these are analytical patterns that an agent working from amplifies refs alone would not discover. Three claims (~30 lines). Everything else is either partially encoded or analytical narrative.

**Action item**: Assess whether compound effects warrant claims. Could be a content ticket.

---

## S0: ADHD Product Pathway Methodology

### What it contains
- Scope, default outcome, definitions
- Research sequence (6 steps)
- Evidence quality tiers (4 tiers)
- Gate filters — full rubric
- Problem Layer scoring — full rubric with anchors
- Market Gap Layer scoring — full rubric
- Solution Layer scoring — full rubric (Q1-Q4)
- Recording and usage instructions

### What's in the SoR now
- `_framework.scope`
- `_framework.definitions`
- `_framework.evidence_tiers`
- `_framework.evaluation_rubrics.gates`
- `_framework.evaluation_rubrics.problem_layer`
- `_framework.evaluation_rubrics.market_gap_layer`
- `_framework.derivation_formulas`
- `_framework.recording_requirements`
- **No `solution_layer` rubric**

### What's changed since v1
Nothing. v1 recommended adding the Solution Layer rubric. **Not done.**

### What's still missing
1. **Solution Layer rubric** — Q1 Complexity, Q2 Behavioural Change, Q3 Setup Effort, Q4 Integration Dependency. With anchors and data sources.

### Verdict: Add Solution Layer rubric (~60 lines)
Same as v1. This completes the evaluation methodology. Note: no SoR entity currently references solution_layer evaluations, so the rubric will exist without corresponding data — but it is part of the defined methodology and should be encoded for completeness.

**Caveat**: ST_013 questions whether `recording_requirements` is still relevant. ST_014 questions derived formula redundancy. These may affect how S0 maps to the framework. Consider resolving those tickets first, or accept that the rubric addition is independent of those questions.

**Action item**: Add `solution_layer` to `_framework.evaluation_rubrics`. Could be direct action or system ticket.

---

## S6: Market Gap Analysis (NEW — not in v1)

### What it contains
Per-problem market gap assessment for 11 qualifying problems:
- Q1 Market Noise score (1-5)
- Q2 Product Enumeration — competitive product tables with names, funding, maturity, ratings
- Q3 Product Maturity score (1-5)
- Q4 ADHD User Review sentiment score (1-5)
- Q5 Root Cause of Failure narrative
- Composite score ranking table (problem_score + market_gap_score)
- Strategic synthesis grouping problems into 3 tiers
- Cross-cutting insights, market entry risk matrix
- ~40+ named products with funding amounts, user counts, ratings

### What's in the SoR now
- `_framework.evaluation_rubrics.market_gap_layer` defines Q1-Q5 with anchors
- `_framework.derivation_formulas.market_gap_score` formula defined
- Problem entities define `evaluations.market_gap` as a conditional section
- **ZERO problems have market_gap evaluations populated**

### Assessment
The SoR has the schema for market_gap evaluations but none of the data. This is the largest gap of any analysis file — the framework is ready but the scores have not been entered.

S6 is roughly 40% source data (product names, funding, ratings) and 60% synthesis (scores, root cause narratives, strategic insights). The source data is primary research that belongs in research files; the scores are evaluations that belong in SoR entities.

### Options

**Option A: Populate market_gap evaluations on qualifying problems** — Enter Q1-Q5 scores and assessment prose on each problem that scored >=10 on the Problem Layer. S6 has scores for 11 problems.
- SoR growth: ~30-40 lines per problem x 11 = ~330-440 lines
- Derivability: ~70%. Scores and rationale encoded. Product tables and strategic synthesis remain in S6.

**Option B: Populate scores only (no product tables)** — Enter Q1-Q4 numeric scores and Q5 summary. Skip per-product enumeration detail.
- SoR growth: ~15-20 lines per problem x 11 = ~165-220 lines
- Derivability: ~55%. Scores queryable. Product landscape detail stays in S6.

**Option C: Treat S6 as source** — S6 is a primary analysis document. The scores are its output. Keep it as a reference; problems do not need market_gap populated because the analysis lives in S6.
- SoR growth: None
- Derivability: ~20%. Framework exists but data is entirely external.

### Tradeoffs
- The schema explicitly expects market_gap evaluations on qualifying problems. Having the framework without data is a larger compliance gap than any other file.
- Product enumeration detail (specific products, funding, ratings) is market intelligence that dates quickly. It is source data, not SoR data.
- Q5 root cause narratives are synthesis — valuable but not structured. They could be shortened to assessment-length prose.
- The composite ranking table and strategic tier groupings are outputs derivable FROM the scores once populated.
- S6 also contains insights that go beyond scoring (cross-cutting market observations, entry risk matrix). These are strategic synthesis, not data.

### Verdict: Option A — populate market_gap evaluations
This is a schema compliance issue equivalent to the inclusion_test gap (now resolved) and the gate-failed problem gap (now resolved). The framework defines these evaluations; the data should exist. Product tables and strategic synthesis stay in S6 as source material.

S6 itself should be reclassified: the product tables and market intelligence are primary research. The file could be split (scores to SoR, product data to research) or kept whole as a source document once scores are in the SoR.

**Action item**: Populate `evaluations.market_gap` on all qualifying problems. Largest single encoding task remaining (~330-440 lines).

---

## CQ Reference (Competency Questions)

### Status: Not in repo

CQ Reference is not in the analysis folder. v1 recommended encoding as a validation mapping in _framework (~80 lines). **Not done** — no `competency_questions` section exists in the SoR.

### Verdict: Deferred
Without the source file in the repo, this cannot be assessed against current SoR state. If the CQ Reference is reintroduced, the v1 recommendation (validation mapping in _framework) remains sound.

---

## Schema-Data Mismatches Discovered

During this review, two fields were found to be consistently used in entities but not declared in `_framework` entity type definitions:

| Field | Entity type | Status |
|-------|------------|--------|
| `functional_definition` | problem | Used on all 18+ problems; not in type def |
| `cluster_compatibility` | engagement_model | Used on all 8 models; not in type def |

These should be added to their respective type definitions. Neither requires data changes — the data already exists.

---

## Summary: Current State vs v1

| Document | v1 Verdict | v1 Done? | Current Gap | Current Action |
|----------|-----------|----------|-------------|----------------|
| **S1** | Partial encoding (~250-300 lines) | **Mostly** | Schema: `functional_definition` undeclared | ~2 lines schema fix |
| **CS1** | Do not encode | N/A | Not in repo | None |
| **CS2** | Encode ratings (~40 lines) | **Yes+** | Schema: `cluster_compatibility` undeclared | ~3 lines schema fix |
| **CS3** | Encode principles (~20 lines) | **No** | No compatibility_principles in framework | ~20 lines in _framework |
| **CS4** | Add data_access + trust (~60 lines) | **No** | Blocked on ST_007/ST_009 | Resolve ST_007 first |
| **CS5** | Schema compliance + candidates (~180 lines) | **Mostly** | Compound effects not encoded | ~30 lines (3 claims) |
| **S0** | Add Solution Layer (~60 lines) | **No** | No solution_layer rubric | ~60 lines in _framework |
| **S6** | *(not assessed in v1)* | N/A | Zero market_gap evaluations populated | ~330-440 lines on 11 problems |
| **CQ Ref** | Validation mapping (~80 lines) | **No** | Not in repo | Deferred |

### Priority order for remaining work

1. **S6 market_gap evaluations** — largest compliance gap; framework exists with no data. ~330-440 lines.
2. **Schema fixes (S1 + CS2)** — two undeclared fields in active use. ~5 lines total. Quick win.
3. **S0 Solution Layer rubric** — completes evaluation methodology. ~60 lines.
4. **CS3 compatibility principles** — documents the logic behind compatibility ratings. ~20 lines.
5. **CS5 compound effects** — three named patterns as claims. ~30 lines.
6. **CS4 data_access + trust** — blocked on ST_007. No immediate action.
7. **CQ Reference mapping** — source file not in repo. Deferred.

### What becomes derivable after all changes

| Document | v1 estimate | Current | After remaining work |
|----------|------------|---------|---------------------|
| S0 | ~98% | ~95% | ~98% |
| S1 | ~85% | ~90% | ~92% |
| CS2 | ~70% | ~80% | ~82% |
| CS3 | ~60% | ~60% | ~70% |
| CS4 | ~70% | ~55% | ~55% (blocked) |
| CS5 | ~75% | ~80% | ~85% |
| S6 | *(n/a)* | ~20% | ~70% |
| CQ Ref | 100% | 0% | 0% (deferred) |

### Files that could move to research/
- **S6** product tables and market intelligence sections (specific products, funding, ratings) are primary research data. Once scores are in the SoR, these become source material.
- **CS1** (if ever added to repo) is process documentation — belongs in research or a methodology folder, not analysis.
- **S0** is methodology — already has a copy in Summaries. Could be moved to research if analysis/ is meant to be purely derivable outputs.
