# S0: ADHD Product Pathway Methodology

> **Scope**: Evaluation framework defining gates, scoring rubrics, and evidence tiers for assessing ADHD workplace functional problems as product opportunities.

---

## Overview

**Purpose**: Structured evaluation of ADHD workplace productivity problems to identify viable product opportunities.

**Scope**: Software products addressing functional problems experienced by working adults with ADHD in the UK. No clinical validation dependencies, no service or content dependencies.

**Default outcome**: Do not pursue this pathway. Analysis must surface something compelling enough to override this default.

**Decision factors**: The decision will weigh addressable market evidence, competitive density, technical feasibility given existing stack, time-to-meaningful-signal, and capital requirements.

**Output**: Structured exposure to the problem/market/solution landscape with explicit risks, costs, and thesis for promising directions.

---

## Key Definitions

**Functional problem**: An observable failure to complete, maintain, or perform a work-relevant task or behaviour. Defined by what goes wrong in practice, not by underlying symptom or internal experience. Examples: missing deadlines, losing track of tasks, failing to follow up on commitments, inability to start known-important work.

**Problem cluster**: A set of functional problems that share root causes, co-occur frequently, or where addressing one meaningfully affects others. Clusters are identified during analysis, not assumed in advance. A problem may be standalone or part of a cluster; this is an emergent property of the research.

---

## Research Sequence

1. **Problem identification**: Identify functional problems experienced by working adults with ADHD. Source from existing research, practitioner literature, and user communities.
2. **Gate filtering**: Apply binary pass/fail filters for software amenability and individual addressability. Discard problems that fail either gate.
3. **Problem scoring**: Apply Problem Layer questions to each problem that passes gates. Identify clusters where they emerge.
4. **Market gap analysis**: For viable problems, assess the competitive landscape using Market Gap Layer questions.
5. **Solution specification**: For problems with meaningful gaps, define solution characteristics using Solution Layer questions.
6. **Synthesis**: Compile findings into decision material for evaluation against Humble's capabilities and constraints.

---

## Evidence Quality Tiers

Confidence scores are assigned based on the quality of evidence supporting each assessment. Higher tiers indicate more reliable evidence.

| Tier | Evidence Type |
|------|--------------|
| 1 (High) | Peer-reviewed research, government/NHS data, systematic reviews |
| 2 | Industry reports, large-scale surveys (n>500), expert opinion, user reviews/forum synthesis |
| 3 | Smaller surveys, multiple consistent anecdotal sources |
| 4 (Low) | Single studies, individual anecdotes, extrapolation from adjacent domains |

---

## Gate Filters

Apply these binary filters before scoring. Problems that fail either gate are discarded.

### Gate 1: Software Amenability

**Question**: Can software provide meaningful support for this problem without requiring clinical validation or human services?

| Result | Criteria |
|--------|---------|
| PASS | Software can fully address, substantially reduce impact, or provide meaningful support as part of a broader approach |
| FAIL | Software can only assist while primary intervention requires human/clinical support, or problem fundamentally requires clinical intervention |

**Data sources**: Clinical guidelines on ADHD workplace interventions, occupational therapy literature, intervention studies comparing software vs. human-supported approaches

### Gate 2: Individual Addressability

**Question**: Can the user achieve meaningful improvement through their own actions, without requiring cooperation from managers, colleagues, or organisational systems?

| Result | Criteria |
|--------|---------|
| PASS | User can address fully through own actions, or external cooperation is helpful but not required, or partial solution possible alone with full solution requiring some cooperation |
| FAIL | Requires manager/colleague/system cooperation for meaningful improvement, or problem primarily resides in workplace/systems such that individual action is insufficient |

**Data sources**: Workplace accommodation literature, ADHD coaching case studies, user community discussions about what they can vs. cannot control

---

## Problem Layer

**Purpose**: Score and compare functional problems that pass gate filters.

**Scoring convention**: Higher scores are better (more attractive problem to address).

### Q1: How frequently does this problem disrupt work tasks or workflow?

| Score | Description |
|-------|------------|
| 5 | Multiple times per day |
| 4 | Daily |
| 3 | Several times per week |
| 2 | Weekly |
| 1 | Monthly or less |

**Data sources**: ADHD prevalence studies with frequency data, workplace productivity research, self-report surveys from ADHD communities, time-tracking or diary studies

### Q2: How differentiated is the ADHD experience of this problem?

This measures whether ADHD-specific design would provide meaningful advantage, not whether the problem is exclusive to ADHD.

| Score | Description |
|-------|------------|
| 5 | Highly differentiated: ADHD users experience this problem in qualitatively different ways (different triggers, patterns, or failure modes) that require specific design |
| 4 | Substantially differentiated: same problem but significantly more severe/frequent for ADHD, standard solutions often fail |
| 3 | Moderately differentiated: common problem with ADHD-specific aspects that affect which solutions work |
| 2 | Slightly differentiated: general problem, ADHD adds some nuance but standard solutions mostly work |
| 1 | Not differentiated: ADHD users experience this the same way as everyone else |

**Data sources**: Comparative studies of ADHD vs. neurotypical task performance, qualitative research on ADHD lived experience, user reviews comparing ADHD vs. general user feedback on existing tools

### Q3: Does this problem connect to other functional problems?

Problems that act as hubs — causing or exacerbating multiple downstream failures — are more valuable to solve.

| Score | Description |
|-------|------------|
| 5 | Hub problem: addressing this would meaningfully reduce 4+ other identified functional problems |
| 4 | Cluster centre: addressing this would meaningfully reduce 2-3 other identified functional problems |
| 3 | Connected: addressing this would meaningfully reduce 1 other identified functional problem |
| 2 | Loosely related: shares context with other problems but addressing it wouldn't directly reduce them |
| 1 | Isolated: standalone problem with no meaningful connection to others |

**Data sources**: Causal models of ADHD workplace dysfunction, coaching/therapy literature on intervention sequencing, user narratives describing cascading failures

---

## Market Gap Layer

**Purpose**: Assess competitive landscape and identify underserved areas.

**Scoring convention**: Higher scores indicate larger opportunity (less competition, poorer existing solutions).

### Q1: How noisy is the market for solutions to this problem?

| Score | Description |
|-------|------------|
| 5 | Very quiet: few products, clear signal for someone searching for help |
| 4 | Quiet: small number of identifiable solutions, easy to evaluate options |
| 3 | Moderate: established players exist, some effort to find and compare |
| 2 | Noisy: crowded market, difficult to differentiate options |
| 1 | Very noisy: saturated market, heavy marketing spend required for visibility |

**Data sources**: App store searches, Google search results for problem-related terms, Product Hunt, G2/Capterra listings, ADHD community tool recommendation threads

### Q2: What products exist that target this problem?

**Format**: Enumerated list with: product name, brief description, positioning (ADHD-specific vs. general), estimated maturity (years in market, funding if known).

**Data sources**: App stores, ProductHunt, Crunchbase, company websites, ADHD community recommendations (Reddit r/ADHD, ADDitude forums), review aggregators

### Q3: How mature are the leading products in this space?

| Score | Description |
|-------|------------|
| 5 | Nascent: no established players, early-stage products or none |
| 4 | Emerging: products exist but still evolving, limited feature completeness |
| 3 | Established: clear market leaders exist, 2-5 years in market, funded |
| 2 | Mature: dominant players, 5+ years in market, feature-complete |
| 1 | Consolidated: category owned by 1-2 players, high switching costs |

**Data sources**: Crunchbase funding history, company about pages, Wayback Machine for launch dates, press coverage

### Q4: What do user reviews indicate about effectiveness for ADHD users?

| Score | Description |
|-------|------------|
| 5 | Consistently negative: complaints about ineffectiveness for ADHD users, high abandonment reported |
| 4 | Mixed-negative: some positive experiences but frequent frustrations, workarounds needed |
| 3 | Mixed: roughly balanced positive and negative feedback from ADHD users |
| 2 | Mixed-positive: generally positive but with common specific complaints |
| 1 | Consistently positive: ADHD users report effectiveness, strong retention |

**Data sources**: App store reviews filtered for ADHD mentions, Reddit threads reviewing specific tools, ADDitude magazine tool reviews, ADHD coach/therapist recommendations

### Q5: Where existing solutions fall short, what appears to be the root cause?

**Format**: Descriptive assessment identifying patterns in why existing solutions fail. Do not force categories; describe what you observe.

Examples of root causes observed in other domains (for reference, not prescription): technical difficulty, misunderstanding of user needs, business model misalignment, lack of domain-specific design, insufficient investment, timing issues, distribution challenges.

**Data sources**: Negative review patterns, product shutdown post-mortems, founder interviews, user community complaints about why they stopped using tools

---

## Solution Layer

**Purpose**: Define solution characteristics for problems with meaningful market gaps.

**Prerequisite**: Before scoring, write a brief description of the proposed solution approach (2-3 sentences covering core mechanism and value proposition).

**Scoring convention**: Higher scores indicate more favourable solution characteristics (easier to build, easier to adopt).

### Q1: How complex is the minimum feature set required to deliver first meaningful value?

| Score | Description |
|-------|------------|
| 5 | Minimal: single core feature, could prototype in days |
| 4 | Light: 2-3 features, 2-4 weeks engineering effort |
| 3 | Moderate: coherent feature set, 1-2 months engineering effort |
| 2 | Substantial: multiple interdependent features, 3-6 months effort |
| 1 | Complex: requires extensive feature development, 6+ months before meaningful value |

**Data sources**: Competitor feature sets, MVP case studies in adjacent spaces, technical architecture patterns for similar problems

### Q2: How much behavioural change or ongoing effort is required from the user?

| Score | Description |
|-------|------------|
| 5 | Passive: works in background, no habit formation needed |
| 4 | Minimal: occasional interaction, fits into existing workflows |
| 3 | Moderate: requires regular engagement but builds on existing behaviours |
| 2 | Significant: new habits required, ongoing discipline needed |
| 1 | Demanding: major workflow change, high ongoing effort, works against ADHD tendencies |

**Data sources**: Habit formation research for ADHD populations, retention/churn data from similar products, user testimonials about what made tools stick or fail

### Q3: How much user input or setup effort is needed before first value is realised?

| Score | Description |
|-------|------------|
| 5 | Instant: value on first use, no setup required |
| 4 | Quick: brief setup (<5 minutes), value within first session |
| 3 | Moderate: some configuration needed, value within first day of use |
| 2 | Investment: requires data entry or learning curve, value within first week |
| 1 | Heavy: extensive setup, training, or data migration before any value |

**Data sources**: Onboarding flow analysis of competitors, time-to-value metrics from similar products, user complaints about setup friction

### Q4: How dependent is the solution on integrations with external systems or specific usage contexts?

| Score | Description |
|-------|------------|
| 5 | Standalone: works independently, no external dependencies |
| 4 | Optional integrations: enhanced by connections but valuable alone |
| 3 | Standard integrations: requires common tools (e.g., calendar, email) with well-documented APIs |
| 2 | Specific integrations: depends on particular platforms or workplace systems |
| 1 | Deep integration: requires enterprise deployment, IT approval, or specific contexts to function |

**Data sources**: API documentation review, competitor integration lists, enterprise vs. consumer product positioning

---

## Recording and Usage

For each problem evaluated, record:

- Problem name and brief description (per functional problem definition)
- Gate filter results (pass/fail for each, with brief rationale)
- Scores for each applicable question (with evidence tier noted)
- Key sources consulted
- Descriptive outputs for non-scale questions
- Cluster relationships (if any emerge)
- Notable uncertainties or data gaps

**Interpretation**: Scores are indicative. They provide structure for comparison but do not mechanically determine outcomes. The decision will be a judgment call informed by the pattern of scores, the quality of evidence, and factors outside this framework.
