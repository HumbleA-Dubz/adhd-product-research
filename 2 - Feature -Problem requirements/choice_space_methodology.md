# ADHD Product Choice-Space Mapping: Methodology

## Purpose

Map the structural choices available within the ADHD workplace productivity problem space, and the requirements each choice imposes, so that Humble's constraints can be overlaid later to evaluate feasibility and cost.

This methodology does not select a product. It produces a map of the decision architecture that any product in this space must navigate.

## Inputs

- The completed problem cluster analysis from the ADHD research project (Layer 1)
- The full research corpus (raw retrieval, gate assessments, scoring, market gap analysis)

## Outputs

- A populated choice map across three layers, with attributes and downward requirement flows
- A set of identified meta-challenges with their interaction patterns across all layers
- For each item at each layer: the requirements it imposes on subsequent layers

The output does not include evaluation against Humble's situation. That is a separate, subsequent step.

---

## Analytical Structure

```
LAYER 1: PROBLEM CLUSTERS                    [COMPLETE]
  "Which cluster(s) of functional problems 
   are we addressing?"
  │
  │ Each cluster has:
  │   - constituent functional problems
  │   - severity / frequency scores
  │   - co-occurrence patterns
  │   - evidence confidence level
  │
  │ Choosing a cluster imposes requirements 
  │ on what engagement models are viable
  │
  ▼

LAYER 2: ENGAGEMENT MODELS
  "How does the user interact with the product 
   relative to the problem?"
  │
  │ Choosing an engagement model imposes 
  │ requirements on what must be built
  │
  ▼

LAYER 3: IMPLEMENTATION REQUIREMENTS
  "What does this require us to build, 
   integrate, acquire, or design?"
  │
  │ Sub-categories (see below)


CROSS-CUTTING: META-CHALLENGES
  Challenges that apply regardless of path 
  through Layers 1-3. Interact with all layers.
```

---

## Layer 1: Problem Clusters

### Status

Complete. The research project produced scored, gate-filtered functional problems grouped into clusters.

### Role in this methodology

Layer 1 is the input. Each cluster's attributes determine which engagement models (Layer 2) are viable for addressing it. The key attributes that constrain Layer 2 are:

| Cluster attribute          | How it constrains Layer 2                          |
|----------------------------|---------------------------------------------------|
| Problem frequency          | High-frequency problems support passive/ambient    |
|                            | models. Low-frequency problems require on-demand   |
|                            | or scheduled models.                               |
| Problem context            | Where/when the problem occurs determines which     |
|                            | surfaces and interaction points are viable.         |
| User awareness of problem  | Problems the user notices in real-time support      |
|                            | reactive models. Problems only visible in           |
|                            | retrospect require proactive/capture models.        |
| Co-occurrence patterns     | Clusters with tightly co-occurring problems may     |
|                            | require engagement models that address multiple     |
|                            | problems in a single interaction.                   |

### Work required

Review each completed cluster and document which Layer 2 engagement models it is compatible with, and which it rules out. Record the rationale.

---

## Layer 2: Engagement Models

### Definition

An engagement model describes the structural relationship between the user and the product: when interaction occurs, who initiates it, what effort the user expends, and what the product does without user input.

This is not a feature list. It is the category of interaction pattern the product uses.

### How to populate

#### Step 1: Extract from research

Review the research corpus for any engagement patterns described, implied, or studied. Sources include:

- Solution-layer analysis (where engagement models were assessed for specific products)
- Market gap analysis (where existing products' engagement models were critiqued)
- Clinical/occupational therapy literature (where intervention delivery methods were described)
- Community discussions (where users describe how they actually use or abandon tools)

For each engagement pattern found, record:

- A short descriptor (e.g., "passive ambient capture", "scheduled prompt", "reactive on-demand")
- The source(s) it came from
- Any evidence about its effectiveness or failure modes with ADHD users

#### Step 2: Test for completeness

Check whether the extracted set covers the full range of possibilities by testing against these structural dimensions. Each dimension is a spectrum, not a binary.

```
DIMENSION A: Initiation
  Who starts the interaction?
  
  user-initiated ◄─────────────────► product-initiated
  (user opens app,       (notification, ambient
   searches, clicks)      trigger, scheduled prompt)


DIMENSION B: Effort
  How much does the user do per interaction?
  
  high effort ◄─────────────────────► zero effort
  (manual entry,          (auto-capture, background
   active decisions)       processing, passive logging)


DIMENSION C: Timing
  When does the interaction happen relative 
  to the problem?
  
  before ◄────────► during ◄────────► after
  (preventive,      (real-time        (retrospective,
   planning)         intervention)     review/reflect)


DIMENSION D: Continuity
  How does the product relate to the user's 
  existing workflow?
  
  separate surface ◄───────────────► embedded in 
  (standalone app,        existing tools
   dedicated interface)   (extension, plugin,
                           integration layer)
```

Any viable engagement model occupies a position on each dimension. If the extracted set leaves a quadrant empty that could plausibly apply to the problem clusters, investigate whether something was missed.

#### Step 3: Record attributes

For each identified engagement model, capture:

| Attribute                    | Description                                       |
|------------------------------|---------------------------------------------------|
| Descriptor                   | Short name                                         |
| Position on dimensions A-D   | Where it sits on each spectrum                     |
| Retention profile            | Structural retention characteristics. Does usage   |
|                              | depend on habit formation? Does it degrade without |
|                              | active user effort?                                |
| Habit-formation burden       | What the user must learn or change to use this.    |
|                              | Distinct from effort-per-interaction.              |
| Data access requirements     | What data sources the model needs access to        |
|                              | (calendar, email, meetings, browsing, etc.)        |
| User trust requirements      | What the user must trust the product with           |
|                              | (reading emails, accessing meetings, etc.)         |
| Compatible problem clusters  | Which Layer 1 clusters this model can address,     |
|                              | with rationale                                     |
| Incompatible clusters        | Which clusters this model cannot address,          |
|                              | with rationale                                     |

#### Step 4: Map downward requirements

For each engagement model, document what it requires from Layer 3. Use the question: "If we chose this engagement model, what categories of things would we need to build, integrate, or acquire?"

Do not answer with specific solutions. Answer with requirement categories.

Example (illustrative, not prescriptive):

```
Engagement model: "Passive ambient capture from meetings"

  Requires from Layer 3:
  ├── Data processing:    audio/text transcription capability
  ├── Integrations:       meeting platform access (Zoom, Teams, Meet)
  ├── Permissions:        user grants access to meeting content
  ├── Storage/structure:  extracted commitments stored and retrievable
  ├── Interface:          surface for reviewing captured items
  └── Design patterns:    low-friction review flow (not a second inbox)
```

---

## Layer 3: Implementation Requirements

### Definition

The categories of things that must be built, integrated, acquired, or designed to support a given engagement model addressing a given problem cluster. These are not features or solutions. They are categories of capability, each of which carries its own cost profile, team skill requirements, and build-vs-buy options.

### Sub-categories

Layer 3 is broad. Organise items into the following sub-categories. This list is a starting framework; add sub-categories if the research surfaces requirements that do not fit.

```
SUB-CATEGORY        DESCRIPTION                         EXAMPLES OF ITEMS
─────────────────────────────────────────────────────────────────────────
Data processing     Transforming raw input into          Transcription, NLP,
                    structured/usable information        classification, 
                                                         entity extraction

AI/ML models        Learning, predicting, generating,    Personalisation, 
                    or adapting based on user data        pattern detection,
                                                         priority inference

Logic/rules         Deterministic processing,            Scheduling logic,
                    conditional flows, state             trigger conditions,
                    management                           commitment tracking

Storage/structure   Persistent data models,              Knowledge graphs,
                    retrieval patterns,                   user models,
                    data architecture                     history/context stores

Real-time systems   Time-sensitive delivery,              Notifications,
                    awareness of temporal context          contextual nudges,
                                                          time-perception aids

Interfaces          Surfaces the user interacts with      Browser extension,
                                                          mobile app, Slack bot,
                                                          web app, widget

Integrations        Connections to external tools          Calendar, email,
                    and data sources                       meeting platforms,
                                                           task managers

Permissions/access  What the product must be granted       OAuth scopes,
                    access to, and the trust               data access levels,
                    implications                           privacy boundaries

Design patterns     UX/interaction patterns that           Onboarding flows,
                    the engagement model requires,         review interfaces,
                    particularly ADHD-specific             interruption handling,
                    design considerations                  cognitive load mgmt
```

### How to populate

#### Step 1: Derive from Layer 2 outputs

For each engagement model's downward requirements (from Layer 2, Step 4), assign each requirement to a sub-category. This should produce a matrix:

```
                    Sub-cat  Sub-cat  Sub-cat  Sub-cat  ...
                       A        B        C        D
Engagement 
Model 1               X                 X        X
Engagement 
Model 2               X        X                 X
Engagement 
Model 3                        X        X
```

Where X indicates "this engagement model requires something from this sub-category."

#### Step 2: Characterise each required item

For each X in the matrix, record:

| Attribute              | Description                                        |
|------------------------|----------------------------------------------------|
| What is required       | Description of the capability needed (category      |
|                        | level, not specific implementation)                 |
| Complexity estimate    | Rough scale: trivial / moderate / significant /     |
|                        | major (with brief rationale)                        |
| Build vs. buy          | Can this be acquired off-the-shelf, or must it be   |
|                        | custom-built? Are there intermediate options?       |
| Skill requirements     | What expertise is needed to build/integrate this?   |
| Dependencies           | Does this require other Layer 3 items to exist      |
|                        | first?                                              |
| Maturity of tooling    | How mature are the available tools/APIs/libraries   |
|                        | for this category? (affects risk and timeline)      |

#### Step 3: Identify shared requirements

Some Layer 3 items will appear across multiple engagement models. Flag these. They represent:

- **Common foundations:** Required regardless of engagement model choice. These are not choices; they are prerequisites.
- **Leverage points:** Building one enables multiple engagement models. Relevant to later cost evaluation.

---

## Meta-Challenges

### Definition

A meta-challenge is a problem or constraint that:

1. Applies to any product in this problem space, regardless of which problem cluster, engagement model, or implementation path is chosen
2. Cannot be resolved by a specific feature or capability — it is structural
3. Interacts with multiple layers, potentially constraining choices at each

Meta-challenges are distinct from:

- **Problem-cluster-specific risks** (which belong in Layer 1 attributes)
- **Engagement-model-specific failure modes** (which belong in Layer 2 attributes)
- **Implementation complexity** (which belongs in Layer 3 attributes)

### How to identify

#### Step 1: Extract candidates from research

Review the full research corpus for challenges, risks, or failure patterns that were described as applying broadly rather than to specific solutions. Likely sources:

- The "meta-problems" identified in gate assessment (FP-07, FP-08, FP-14 or equivalent — problems about tool failure itself)
- Market gap analysis where failure patterns were consistent across all existing products
- Community discussions describing frustrations that transcend any specific tool
- Clinical literature on intervention adherence in ADHD populations

For each candidate, record:

- Description of the challenge
- Source(s)
- Initial assessment: does this apply broadly, or is it actually specific to certain engagement models?

#### Step 2: Apply inclusion criteria

A candidate qualifies as a meta-challenge if it meets ALL of:

| Criterion                  | Test                                               |
|----------------------------|----------------------------------------------------|
| Cross-cluster              | Does it apply to at least 2 problem clusters?      |
|                            | If it only affects one, it belongs in Layer 1.      |
| Cross-engagement-model     | Does it apply to at least 2 engagement models?     |
|                            | If it only affects one, it belongs in Layer 2.      |
| Not implementation-solvable| Can it be resolved by building a specific feature?  |
|                            | If yes, it belongs in Layer 3.                      |
| Evidenced                  | Is there evidence for it beyond speculation?        |
|                            | Flag confidence level.                              |

Candidates that fail these criteria should be relocated to the appropriate layer rather than discarded.

#### Step 3: Map interactions

For each confirmed meta-challenge, document how it interacts with each layer:

```
META-CHALLENGE: [name]

  Description: [what it is]
  Evidence:    [sources, confidence]

  Layer 1 interaction:
    [How does this constrain or affect problem cluster selection?
     Does it make some clusters harder to address than others?]

  Layer 2 interaction:
    [How does this constrain or affect engagement model viability?
     Does it favour some models over others?]

  Layer 3 interaction:
    [What additional implementation requirements does this create?
     Are there sub-categories it affects universally?]

  Implication for cost/risk evaluation:
    [What does this mean for the subsequent overlay step?
     What should be checked when evaluating feasibility?]
```

---

## Process Summary

```
STEP    ACTION                              OUTPUT
────────────────────────────────────────────────────────
 1      Review Layer 1 clusters.            Cluster-to-engagement-model
        Document which engagement           compatibility matrix with
        models each is compatible with.     rationale.

 2      Extract engagement models from      Set of engagement models with
        research. Test for completeness     attributes (Step 3) and
        against structural dimensions.      downward requirements (Step 4).
        Record attributes.

 3      Derive Layer 3 requirements from    Engagement-model-to-sub-category
        Layer 2 outputs. Characterise       matrix. Each cell characterised
        each. Identify shared               with attributes. Shared items
        requirements.                       flagged.

 4      Extract meta-challenge candidates   Set of confirmed meta-challenges
        from research. Apply inclusion      with layer interaction maps.
        criteria. Map interactions.         Rejected candidates relocated.

 5      Compile into single reference       The choice-space map. Ready for
        document.                           constraint overlay (separate
                                            step, not part of this
                                            methodology).
```

---

## Constraints on this analysis

- **No solution selection.** The output is a map, not a recommendation. Features and capabilities appear as requirement categories, not as "the answer."
- **No evaluation against Humble's situation.** That overlay is a separate subsequent step. This methodology produces the thing that gets overlaid onto.
- **Layer 1 is taken as given.** The problem cluster analysis is complete and is not revisited here, except to extract the attributes that constrain Layer 2.
- **Compartmentalisation of features.** Where specific features or capabilities are identified, they are recorded as items within Layer 3 sub-categories, with their own attributes. They are not assembled into product concepts. A feature is a component with requirements, not a solution.
