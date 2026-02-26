# Derivability Options Analysis

> **Scope**: Per-document assessment of what data S1, CS1-CS5, S0, and CQ Reference contain, what's already in the SoR, what's missing, and the options/tradeoffs for making each fully derivable from the SoR.

## Reading Guide

For each document: what it contains, what's already encoded, what's missing, options for closing the gap, tradeoffs, and a verdict. "Derivable" means an AI agent with only the SoR in context could regenerate the document's substantive content without loss.

---

## S1: Master Problem List

### What it contains
18 functional problem entries (FP01-FP20), each with:
- Formal functional definition (3-4 sentences)
- Source file references (P1A, P2A, etc. with section markers)
- Evidence tier
- Key quantitative data (3-5 specific data points with numbers, sample sizes, percentages)
- Symptom-to-function translation notes (whether clinical language was reframed, confidence)
- Key citations with URLs (1-3 per problem)
- Summary table (all 18 problems, tier, source count, key prevalence)
- 7 deduplication decisions with rationale

### What's already in SoR
- 14 of 18 problems exist as entities (FP01-FP13, FP18)
- `plain_language` field on each (shorter than S1's functional definition)
- Full scoring evaluations with per-dimension rationale and evidence
- Gate evaluations (pass/fail with rationale)
- Refs to mechanisms and claims
- Source entities carry URLs and analysis_docs fields
- Quantitative data points partially embedded in scoring `assessment` text

### What's missing
1. **6 gate-failed problems absent**: FP14 (Supervisor Conflict), FP15 (Team Collaboration), FP16 (Emotional Dysregulation), FP17 (Impulsive Quitting), FP19 (Safety Errors), FP20 (Underperformance). The schema defines `filtered_out` status for these — they should exist with gate evaluations per the schema, but don't.
2. **Formal functional definitions**: SoR `plain_language` is a condensed rewrite, not the S1 definition. S1 definitions are more precise (3-4 sentences vs. 2-3 in SoR).
3. **Per-problem quantitative data**: Specific numbers (40.7%, n=134, 22.1 days/year) are scattered across scoring rationale text but not structured. No field-level access.
4. **Symptom-to-function translation notes**: Whether and how clinical language was reframed. Not in any SoR field.
5. **Per-problem citation URLs**: URLs exist on source entities but the S1-style mapping (which URL supports which specific claim for which problem) requires tracing through claims.
6. **Deduplication decisions**: 7 merge/split rationale entries. Not in SoR.

### Options

**Option A: Full encoding** — Add all missing problems (6 entities with `filtered_out` status and gate evaluations). Add `functional_definition` field to problem type. Add `quantitative_data` field (structured list of data points). Add `symptom_translation` field. Add `deduplication_log` to _framework.
- Schema cost: 3 new optional fields on problem type + 6 new entities (~60 lines each = ~360 lines) + framework section (~50 lines)
- SoR growth: ~500-600 lines
- Derivability: Full — S1 regenerable

**Option B: Partial encoding** — Add 6 gate-failed problems (required by schema anyway). Upgrade `plain_language` to include the full functional definition. Skip quantitative data structuring (it's in scoring rationale and source entities already). Skip symptom-translation (one-time process note). Skip deduplication log (process documentation).
- Schema cost: No new fields. 6 new entities (~40 lines each minimal).
- SoR growth: ~250-300 lines
- Derivability: ~85%. Missing: per-problem quantitative data as structured fields, symptom-translation notes, deduplication rationale.

**Option C: Keep as source** — S1 is a document the SoR was derived from. Its value was in feeding the problem entities. The entities now carry the analytical conclusions (scores, rationale) that matter for decisions. The raw data (prevalence percentages, sample sizes) is accessible via source entities.
- Schema cost: None
- SoR growth: None
- Derivability: ~60%. The summary table and deduplication log cannot be regenerated. Problem definitions would use plain_language (shorter). Quantitative data requires source-entity traversal.

### Tradeoffs
- Full functional definitions vs. `plain_language`: The definitions are better — more precise, more useful for downstream work. Upgrading `plain_language` is cheap.
- Quantitative data structuring: High encoding cost for marginal decision value. The numbers are cited in scoring rationale already. Structured access would only matter if someone needed to query "all problems with >25% WFIRS prevalence" — possible but not a current use case.
- Gate-failed problems: The schema explicitly says these should exist. This is a data gap, not a design choice.
- Deduplication log: Process documentation. Useful for audit trail but doesn't inform decisions. Low priority.
- Symptom-translation: One-time methodological note per problem. Doesn't inform ongoing work.

### Verdict: Option B — partial encoding
Add the 6 missing gate-failed problems (this is a schema compliance issue). Upgrade `plain_language` to full functional definitions. Everything else is either already accessible through source/claim traversal or is process documentation with no ongoing decision value.

**Residual gap**: S1's summary table (all 18 problems with tier and prevalence) cannot be regenerated without structured quantitative data fields. Acceptable — the SoR's scoring evaluations carry more analytical depth than the summary table.

---

## CS1: Choice Space Methodology

### What it contains
- Three-layer framework definition (L1 Problem Clusters → L2 Engagement Models → L3 Implementation Requirements)
- ASCII structural diagram
- L1 constraint attributes table (frequency, context, awareness, co-occurrence → L2 constraints)
- L2 dimensional framework (4 spectra: Initiation, Effort, Timing, Continuity)
- L2 population methodology (4-step extraction process)
- L3 sub-categories (9: data processing, AI/ML, logic/rules, storage, real-time, interfaces, integrations, permissions, design patterns)
- Meta-challenge inclusion criteria (4 tests)
- 5-step process summary
- Structural constraints and limitations

### What's already in SoR
- L2 dimensional framework: engagement_model entity type has `dimensions` with all 4 fields (initiation, effort, timing, continuity) ✓
- MC inclusion criteria: meta_challenge entity type defines all 4 criteria with test descriptions ✓
- Cluster concept and structure: cluster entity type with members, hub, causal_direction ✓
- Engagement model concept: engagement_model entity type with all fields ✓

### What's missing
1. **L3 sub-categories**: The 9 implementation requirement categories are not encoded. Technologies are deferred (line 8-10 of SoR).
2. **L1→L2 constraint flow model**: The table showing how cluster attributes constrain model compatibility isn't encoded as a formal mapping.
3. **Population methodology**: The 4-step process for extracting engagement models.
4. **Structural diagram**: Visual representation.

### Options

**Option A: Encode L3 categories and constraint flow** — Add `implementation_categories` list to _framework. Add `constraint_flow` mapping showing how cluster attributes map to L2 compatibility.
- Schema cost: ~30-40 lines in _framework
- Derivability: ~80%. Methodology steps and diagram remain non-derivable.

**Option B: Keep as external reference** — CS1 is pure methodology. It describes HOW the choice space was built, not WHAT it contains. The outputs (models, clusters, meta-challenges) are all in the SoR.
- Schema cost: None
- Derivability: ~40%. But the question is whether regenerating CS1 matters. The methodology was consumed to produce the SoR entities. The entities are the durable output.

### Tradeoffs
- CS1 is 90% process documentation. It describes extraction methods, analytical steps, and structural thinking that produced the entities now in the SoR. Encoding the methodology would mean encoding "how we worked" inside the data store, which conflates data and process.
- L3 sub-categories are the only substantive structural content not yet in SoR, and they're explicitly deferred until technologies are parsed.
- The constraint flow (how cluster attributes constrain model compatibility) is useful structural logic, but it's also implicitly encoded: an AI reading cluster attributes and engagement model dimensions can derive compatibility without an explicit mapping.

### Verdict: Do not encode
CS1 is process documentation. Its outputs (entities) are in the SoR. The one substantive gap (L3 sub-categories) is already tagged as deferred pending technology parsing. Keep CS1 as a methodology reference document — it explains how the SoR was built, which is valuable context but not SoR data.

**Exception**: When technologies are parsed, L3 sub-categories should be added to _framework at that point.

---

## CS2: Choice Space Map

### What it contains
- L1 cluster summary table with constraining attributes
- L2 model summary table with dimensional positions
- L1↔L2 compatibility matrix (S/P/X ratings) with per-cell rationale (24 cells)
- L3 implementation requirements per viable L1×L2 combination
- Meta-challenge vulnerability summary
- Five pre-mapped solution paths

### What's already in SoR
- Cluster entities with members, hubs, causal_direction ✓
- Engagement model entities with dimensions, MC vulnerability ✓
- Model→problem refs (primary_problems, secondary_problems) ✓
- MC entities with clusters_affected, amplifies refs ✓

### What's missing
1. **Compatibility matrix**: The S/P/X ratings and per-cell rationale for each cluster↔model pair. 24 cells of structured assessment.
2. **L3 requirements per combination**: Deferred with technologies.
3. **Pre-mapped solution paths**: Five synthesised product-direction candidates.

### Options

**Option A: Encode compatibility matrix** — New section or entity type: `compatibility_assessment` with {cluster_id, model_id, rating, rationale}. 24 entries.
- Schema cost: New entity type definition (~15 lines) + 24 entries (~10 lines each = ~240 lines)
- SoR growth: ~255 lines
- Derivability: ~90%. Solution paths remain synthesis.

**Option B: Derive from existing refs** — The compatibility CAN be approximately derived: if M2's primary_problems are [FP07, FP09] and these belong to no cluster, then M2 is not primary for any cluster. If M5's primary_problems are [FP03] and FP03 is CL_A's hub, then M5 is strongly compatible with CL_A. An AI agent can reason about this.
- Schema cost: None
- Derivability: ~50-60%. The RATINGS are derivable. The RATIONALE is not — why M1 is "S" for Cluster A vs "P" for Cluster B requires the analytical reasoning in CS3 (awareness-to-timing matching, frequency-to-initiation matching, etc.).

**Option C: Hybrid** — Don't encode per-cell rationale. Add a `cluster_compatibility` field to engagement_model with {cluster_id, rating} pairs. The rating is structured; the rationale is derivable from dimensional analysis.
- Schema cost: ~5 lines per engagement_model × 8 = ~40 lines
- SoR growth: ~40 lines
- Derivability: ~70%. Ratings regenerable. Rationale requires re-derivation (which may produce slightly different wording but same conclusions).

### Tradeoffs
- Full compatibility encoding (Option A) is expensive for what it delivers. 240 lines of prose rationale that can be re-derived from entity data.
- The ratings (S/P/X) ARE useful structured data — they're the quick-reference lookup that cluster attributes and model dimensions can produce but require analytical work each time.
- Solution paths are explicitly synthesis and don't belong in the SoR.
- L3 requirements are deferred anyway.

### Verdict: Option C — encode ratings only
Add `cluster_compatibility` to engagement_model entities with rating per cluster. Skip rationale — it's derivable from the dimensional analysis principles already encoded. Skip solution paths — synthesis, not data. Net cost: ~40 lines.

**Residual gap**: Per-cell rationale text is lost. Acceptable — the same rationale can be re-derived by any AI agent applying the constraint-matching principles documented in CS1.

---

## CS3: Cross-Layer Mapping

### What it contains
- Full per-cell rationale for L1↔L2 compatibility (same 24 cells as CS2 but with deeper analysis)
- Judgment consistency principles (4 matching rules)
- L3 implementation requirements per viable combination (tabular)
- Meta-challenge overlay per combination

### What's already in SoR
- Same as CS2 (engagement model→problem refs, MC vulnerability, cluster membership)

### What's missing
- The detailed rationale behind each compatibility rating
- Judgment consistency principles (the 4 matching rules)
- L3 requirements per combination

### Analysis
CS3 is the working document behind CS2. Where CS2 gives the summary matrix, CS3 gives the reasoning. The relationship is: CS3's analysis → CS2's ratings → SoR's entity refs.

### Options

**Option A: Encode judgment principles** — Add the 4 matching rules (frequency→initiation, awareness→timing, co-occurrence→breadth, context→surface) to _framework as `compatibility_principles`.
- Schema cost: ~20 lines in _framework
- Benefit: Any AI re-deriving compatibility will apply consistent principles
- Derivability: ~60%. Principles encoded but per-cell application still requires reasoning.

**Option B: Accept non-derivability** — CS3 is analytical work product. It's the "showing your work" for the compatibility assessments. Once the ratings are in the SoR (via CS2 Option C), CS3 becomes the audit trail.

### Verdict: Option A — encode principles only
The 4 matching rules are structural logic that should be in _framework. They're the "how to think about compatibility" rules that any agent working with the SoR should follow. Per-cell application is analytical work that doesn't need encoding.

**Net cost**: ~20 lines in _framework.

---

## CS4: Engagement Models

### What it contains (per model × 8 models)
- Full description (paragraph)
- Dimensional position table with per-dimension rationale
- Retention profile (paragraph)
- Habit-formation burden (paragraph)
- Data access requirements (bulleted list)
- User trust requirements (bulleted list)
- L3 preliminary requirements (table)
- Evidence from corpus (narrative with specific quotes and source references)
- Summary table of all 8 models
- Dimensional coverage map (ASCII)
- Gap-check analysis (4 rejected combinations)
- Cross-reference table (models → problem clusters)
- Limitations (5 items)

### What's already in SoR (per engagement_model entity)
- `name` ✓
- `plain_language` ✓ (equivalent to CS4's description)
- `dimensions` with initiation, effort, timing, continuity ✓ (but SoR has short strings; CS4 has full rationale tables)
- `retention_risk` ✓
- `habit_burden` ✓
- `evaluations.meta_challenge_vulnerability` ✓
- `refs.primary_problems`, `refs.secondary_problems` ✓
- `refs.claims` ✓

### What's missing
1. **Dimensional rationale**: SoR dimensions are single-line values ("Strongly product-initiated"). CS4 has per-dimension rationale explaining WHY.
2. **Data access requirements**: Not in SoR. Structured list per model.
3. **User trust requirements**: Not in SoR. Paragraph per model.
4. **L3 requirements per model**: Not in SoR. Tabular.
5. **Evidence narrative**: Full corpus evidence with specific quotes. SoR has claim refs but not the narrative.
6. **Gap-check**: 4 rejected dimensional combinations with rationale.
7. **Dimensional coverage map**: Analytical summary.
8. **Limitations**: 5 methodological caveats.

### Options

**Option A: Add key structured fields** — Add `data_access_requirements` (list) and `trust_requirements` (prose) to engagement_model entity type. These are the two fields with clear ongoing decision value.
- Schema cost: 2 new optional fields, ~5-8 lines per model × 8 = ~50 lines
- SoR growth: ~60 lines total (including schema definition)
- Derivability: ~70%. Core structured data encoded. Narrative, gap-check, coverage map remain in CS4.

**Option B: Full encoding** — Add all missing fields. Expand dimensions to include per-dimension rationale.
- Schema cost: 5+ new fields, significant per-entity expansion
- SoR growth: ~300+ lines
- Derivability: ~90%

**Option C: Accept current encoding** — The 8 engagement_model entities already capture the key structured data. CS4's additional richness is analytical narrative that surrounds and explains the structured data.
- Schema cost: None
- Derivability: ~55%

### Tradeoffs
- Data access requirements have real decision value — they determine integration scope and privacy considerations. Worth encoding.
- Trust requirements have real decision value — they determine go-to-market friction. Worth encoding.
- Dimensional rationale: The SoR's single-line values ("Strongly product-initiated") are sufficient for compatibility analysis. The rationale explains the positioning but doesn't change it.
- L3 requirements: Deferred with technologies.
- Evidence narrative: Already accessible through claims. The narrative form is CS4's editorial contribution, not data.
- Gap-check, coverage map, limitations: Analytical/methodological. Process documentation.

### Verdict: Option A — add data access and trust requirements
Two fields with clear decision value that aren't derivable from anything else in the SoR. Everything else is either already encoded, derivable from encoded data, deferred, or analytical narrative.

**Net cost**: ~60 lines.

---

## CS5: Meta-Challenges

### What it contains
- 5 confirmed meta-challenges + MC6 (added later) with full analysis per MC:
  - Multi-paragraph description
  - Evidence broken by tier (Clinical/User/Market)
  - Per-criterion inclusion test table (4 criteria × met/not-met with reasoning)
  - Layer interaction analysis (how the MC interacts with each L1/L2/L3 combination)
- 6 relocated candidates with per-candidate: failed criterion, relocated-to, rationale
- Cross-challenge interaction matrix (5×5 showing amplification/independence)
- 3 compound effects (Triple Decay, Lapse Trap, Stealth Requirement)
- Structural implications (5 conclusions with quantitative framing)

### What's already in SoR (per meta_challenge entity)
- `name` ✓
- `plain_language` ✓
- `severity` + `severity_rationale` + `severity_evidence` ✓
- `evidence_tier` ✓
- `key_evidence` ✓ (condensed narrative)
- `refs.clusters_affected` ✓
- `refs.claims` ✓
- `refs.amplifies` ✓ (partially encodes the interaction matrix)

### What's missing
1. **Inclusion test evaluations**: The schema DEFINES `evaluations.inclusion_test` with per-criterion pass/fail and reasoning — but NO entity has this populated. This is a schema compliance gap.
2. **Tiered evidence breakdown**: SoR has `key_evidence` as a single narrative. CS5 breaks evidence by Clinical (Tier 1), User (Tier 3), and Market (Tier 2-3) categories.
3. **Layer interaction analysis**: Per-MC analysis of how it interacts with each L1/L2/L3 combination. Not in SoR.
4. **Relocated candidates**: 6 candidates that failed inclusion criteria. Not in SoR.
5. **Cross-challenge interaction matrix**: Partially encoded via `refs.amplifies`. Missing: independence relationships, directionality details.
6. **Compound effects**: Three named interaction patterns (Triple Decay, Lapse Trap, Stealth Requirement). Not in SoR.
7. **Structural implications**: 5 analytical conclusions. Not in SoR.

### Options

**Option A: Populate schema-defined fields + add relocated candidates** — Fill in the `evaluations.inclusion_test` that the schema already defines. Add 6 relocated candidates as `filtered_out` meta_challenge entities (or as a reference list in _framework). Add compound effects as claims.
- Schema cost: No new schema needed for inclusion tests — already defined. ~15 lines per MC × 6 = ~90 lines for inclusion tests. Relocated candidates: ~10 lines each × 6 = ~60 lines. Compound effects: ~3 claims = ~30 lines.
- SoR growth: ~180 lines
- Derivability: ~75%. Tiered evidence breakdown, layer interaction analysis, and structural implications remain in CS5.

**Option B: Full encoding** — Everything in Option A plus: break `key_evidence` into tiered structure, add layer interaction data, encode structural implications as claims.
- Schema cost: Modify key_evidence to structured format. Add layer_interaction field. Multiple new claims.
- SoR growth: ~400+ lines
- Derivability: ~90%

**Option C: Populate inclusion tests only** — The minimum schema compliance fix.
- Schema cost: None (schema already defines it)
- SoR growth: ~90 lines
- Derivability: ~60%

### Tradeoffs
- Inclusion test population: Required by the schema. Not optional. This is a data integrity issue.
- Relocated candidates: Valuable reference — they're the "why this ISN'T a meta-challenge" documentation that prevents re-visiting settled questions. Worth encoding.
- Compound effects: These are analytical insights (Triple Decay = MC1+MC5+MC2 compounding) that are partially derivable from `refs.amplifies` but naming them as patterns adds analytical value. Could be claims.
- Tiered evidence: The current `key_evidence` field already captures the key data points. Breaking by tier adds structure but limited decision value — the evidence_tier field on the MC already signals overall tier.
- Layer interaction analysis: This is the deepest analytical content in CS5. Each MC's interaction with each L1/L2/L3 combination is detailed. High encoding cost, moderate decision value (the MC vulnerability on engagement_model entities already captures the L2 dimension).
- Structural implications: Synthesis conclusions. Better as claims if they're decision-relevant.

### Verdict: Option A — schema compliance + relocated candidates
Populate inclusion_test evaluations (schema requires it). Add relocated candidates (prevents re-investigation). Add compound effects as claims (analytical value). Skip tiered evidence breakdown and layer interaction (already partially encoded, high cost for marginal value). Skip structural implications (synthesis, better as claims if needed later).

**Net cost**: ~180 lines.

---

## S0: ADHD Product Pathway Methodology

### What it contains
- Scope, default outcome, decision factors, output description
- Key definitions (functional problem, problem cluster)
- Research sequence (6 steps)
- Evidence quality tiers (4 tiers)
- Gate filters (Gate 1: Software Amenability, Gate 2: Individual Addressability) — full rubric
- Problem Layer scoring (Q1 Frequency, Q2 Differentiation, Q3 Connectedness) — full rubric with anchors
- Market Gap Layer scoring (Q1 Noise, Q2 Product Enumeration, Q3 Maturity, Q4 User Reviews, Q5 Root Cause) — full rubric
- Solution Layer scoring (Q1 Complexity, Q2 Behavioural Change, Q3 Setup Effort, Q4 Integration Dependency) — full rubric
- Recording and usage instructions

### What's already in SoR
- `_framework.scope` ✓ (scope, constraint, default_outcome)
- `_framework.definitions` ✓ (functional_problem, problem_cluster, mechanism, meta_challenge, etc.)
- `_framework.evidence_tiers` ✓ (all 4 tiers with labels and descriptions)
- `_framework.evaluation_rubrics.gates` ✓ (both gates with question, pass/fail criteria, data sources)
- `_framework.evaluation_rubrics.problem_layer` ✓ (Q1-Q3 with full anchors and data sources)
- `_framework.evaluation_rubrics.market_gap_layer` ✓ (Q1-Q5 with full anchors and data sources)
- `_framework.evaluation_rubrics.phase_3_selection` — REMOVED (phase 3 concept retired)
- `_framework.derivation_formulas` ✓ (problem_score, market_gap_score, combined_score)
- `_framework.recording_requirements` ✓

### What's missing
1. **Solution Layer rubric**: Q1-Q4 with anchors. Not in SoR _framework.
2. **Research sequence**: 6-step procedural description.
3. **Decision factors**: "weighs addressable market evidence, competitive density, technical feasibility..." — one sentence.

### Assessment
S0 is **95% already encoded** in the SoR _framework section. The encoding is comprehensive — full rubrics with anchors, data sources, and formulas. The only substantive gap is the Solution Layer rubric (Q1-Q4).

### Options

**Option A: Add Solution Layer rubric** — Encode Q1-Q4 in `_framework.evaluation_rubrics.solution_layer`.
- Schema cost: ~60 lines (4 questions × anchors + data sources)
- SoR growth: ~60 lines
- Derivability: ~98%. Research sequence and decision factors are procedural.

**Option B: Accept 95% derivability** — Solution Layer was used in S7 (Solution Scoring) but is not currently applied to any SoR entity. No entity type references solution_layer evaluations.
- Schema cost: None
- Derivability: ~95%

### Tradeoffs
- The Solution Layer rubric is the only gap and it's small (~60 lines).
- However: no SoR entity currently uses Solution Layer evaluations. Adding the rubric without corresponding entity evaluations creates a schema with no data.
- If Solution Layer evaluations are ever added to problem entities (or a future solution entity type), the rubric should be there first.

### Verdict: Option A — add Solution Layer rubric
60 lines for near-complete derivability. The rubric should be in _framework for completeness even if entity-level solution evaluations aren't populated yet. It's part of the evaluation methodology that the SoR is supposed to encode.

**Net cost**: ~60 lines. S0 becomes fully derivable minus procedural steps.

---

## CQ Reference (Competency Questions)

### What it contains
26 competency questions across 8 categories:
- Phenomena (CQ1-3): What challenges exist, observable behaviors, ADHD vs NT difference
- Mechanism (CQ4-6): Causes, co-requirements, shared mechanisms
- Temporal Shape (CQ7-8): Time unfolding, predictability
- Addressability (CQ9-10): Digital amenability, prior attempts
- Impact (CQ11-13): Downstream effects, cascades, affected parties
- Context (CQ14-16): Work contexts, systems/data, absence contexts
- User Awareness & Coping (CQ17-20): Recognition, strategies, coping-as-problem, tool breakdown
- Value (CQ21-22): Solving value, perceived value
- Meta (CQ23-26): Evidence tier, convergence, contradictions, triangulation

Note on CQ21-22: "Perceived value cannot be directly asked. It must be inferred from behavioral signals."

### What's already in SoR
- Nothing directly. However, the CQs map to existing entity fields:
  - CQ1 → problem.name + problem.plain_language
  - CQ2 → problem.plain_language (observable behaviors)
  - CQ3 → problem.evaluations.scoring.differentiation
  - CQ4 → problem.refs.mechanisms → mechanism entities
  - CQ5 → mechanism.does_not_explain (what else is needed)
  - CQ6 → mechanism entities (shared across problems)
  - CQ7 → not encoded (temporal shape)
  - CQ8 → not encoded (predictability)
  - CQ9 → problem.evaluations.gates.software_amenability
  - CQ10 → market_gap.root_cause_of_failure + market_gap.product_enumeration
  - CQ11 → problem.evaluations.scoring.connectedness
  - CQ12 → cluster.causal_direction (cascade effects)
  - CQ13 → cross_cutting_concern entities (affected parties)
  - CQ14 → not explicitly encoded (work contexts)
  - CQ15 → not explicitly encoded (systems/data types)
  - CQ16 → not explicitly encoded (absence contexts)
  - CQ17 → partially in scoring rationale (user awareness)
  - CQ18 → not explicitly encoded (coping strategies)
  - CQ19 → meta_challenge entities (coping-becomes-problem, e.g. MC3)
  - CQ20 → market_gap evaluations (tool partial-address and breakdown)
  - CQ21-22 → thesis claims (inferred value)
  - CQ23 → evidence_tier on entities
  - CQ24 → not explicitly encoded (convergence/divergence)
  - CQ25 → claim.refs.challenged_by
  - CQ26 → claim.refs.sources (count)

### Coverage assessment
- **Well-covered** (answer derivable from SoR): CQ1-6, CQ9-13, CQ19-20, CQ23, CQ25-26 = 16 of 26
- **Partially covered** (answer partially derivable): CQ17, CQ21-22 = 3
- **Not covered** (no corresponding field): CQ7-8, CQ14-16, CQ18, CQ24 = 7

### Options

**Option A: Encode as validation mapping** — Add `competency_questions` to _framework as a list: each CQ with its ID, question text, and the entity field path(s) that answer it. For unanswered CQs, explicitly mark as "not currently answerable" with what would be needed.
- Schema cost: ~80 lines in _framework
- Benefit: Makes coverage gaps explicit. Serves as validation criteria — any AI modifying the schema can check CQ coverage. Documents the 7 gaps.
- Derivability: CQ Reference becomes fully regenerable from this section.

**Option B: Encode as validation mapping + fill gaps** — Same as A, plus add fields to address the 7 uncovered CQs:
  - `temporal_shape` on problem entities (CQ7-8)
  - `work_contexts` on problem entities (CQ14-16)
  - `coping_strategies` on problem entities (CQ18)
  - `evidence_convergence` on claims (CQ24)
- Schema cost: ~80 lines for mapping + 4 new optional fields on entity types + per-entity data
- SoR growth: Substantial — every problem entity gets 3 new optional fields
- Derivability: CQ Reference regenerable AND all 26 CQs answerable from SoR.

**Option C: Keep as external reference** — CQs are a meta-document about the ontology, not data in it. They define what the schema SHOULD be able to answer. The schema either answers them or it doesn't — encoding the questions doesn't change the answers.

### Tradeoffs
- Option A is the sweet spot: it makes the CQs part of the SoR without requiring entity-level data changes. The mapping IS the CQ Reference — encoded as schema documentation rather than a separate file.
- Option B is expensive and the 7 gap-filling fields would need data population across all 14+ problem entities. The fields (temporal_shape, work_contexts, coping_strategies) are genuinely useful but represent a significant enrichment effort.
- Option C means the CQs remain invisible to any AI agent working purely from the SoR.
- The CQs are most valuable as VALIDATION CRITERIA — "can the schema answer these?" — rather than as data.

### Verdict: Option A — encode as validation mapping
80 lines. Makes CQ coverage explicit. Documents gaps without requiring immediate gap-filling. Any future schema work can check CQ coverage as a quality gate.

**Net cost**: ~80 lines in _framework.

---

## Summary: Recommended Actions

| Document | Verdict | SoR Growth | Key Changes |
|----------|---------|:----------:|-------------|
| **S1** | Partial encoding | ~250-300 lines | Add 6 gate-failed problems; upgrade plain_language to full definitions |
| **CS1** | Do not encode | 0 lines | Process documentation; outputs already in SoR. L3 deferred. |
| **CS2** | Encode ratings only | ~40 lines | Add cluster_compatibility to engagement_model entities |
| **CS3** | Encode principles only | ~20 lines | Add 4 compatibility-matching principles to _framework |
| **CS4** | Add key fields | ~60 lines | Add data_access_requirements and trust_requirements to engagement_model |
| **CS5** | Schema compliance + candidates | ~180 lines | Populate inclusion_tests; add relocated candidates; add compound effect claims |
| **S0** | Add Solution Layer | ~60 lines | Encode Solution Layer rubric (Q1-Q4) in _framework |
| **CQ Ref** | Validation mapping | ~80 lines | Add competency_questions mapping to _framework |

**Total estimated SoR growth**: ~690-750 lines (from current ~4,612 to ~5,300-5,360)

### What remains non-derivable after all changes
- CS1 in full (process documentation — acceptable)
- CS2/CS3 per-cell rationale (re-derivable from principles — acceptable)
- CS4 evidence narratives, gap-check, limitations (analytical narrative — acceptable)
- CS5 tiered evidence breakdown, layer interaction analysis, structural implications (partially encoded via entities — acceptable)
- S1 structured quantitative data per problem, deduplication log, symptom-translation notes (process/raw data — acceptable)

### What becomes derivable
- S0: ~98%
- S1: ~85% (missing: raw quantitative fields, process notes)
- CS2: ~70% (ratings derivable; rationale re-derivable from principles)
- CS3: ~60% (principles encoded; per-cell application is reasoning)
- CS4: ~70% (structured data encoded; narrative is editorial)
- CS5: ~75% (inclusion tests, candidates, compound effects encoded; deep analysis narrative remains)
- CQ Reference: 100%

### Priority order for implementation
1. **CS5 inclusion_tests** — schema compliance issue; the schema defines these and they're empty
2. **S1 gate-failed problems** — schema compliance issue; filtered_out status exists for this purpose
3. **S0 Solution Layer rubric** — small, completes the evaluation methodology
4. **CQ Reference mapping** — small, adds validation capability
5. **CS2/CS3 compatibility ratings + principles** — small, adds structural logic
6. **CS4 data access + trust** — moderate, adds decision-relevant data
7. **S1 functional definition upgrade** — moderate, improves problem entity quality
8. **CS5 relocated candidates + compound effects** — moderate, prevents re-investigation
