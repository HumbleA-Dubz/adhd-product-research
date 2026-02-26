# ADHD Workplace Product Research: Synthesis Report

## 1. Purpose

The question behind all of this work is: **How do we allocate dev resources with high confidence?**

We're committed to a premise — it is possible to build a digital solution that addresses workplace functional problems for people with ADHD, without therapeutic intervention or external organisational change, with the team and resources we have, fast enough to be fundable in 8 months.

This report covers what I've been doing, why, what I found, and what the plan is going forward. Specifically:

- What the research phase produced, and what it revealed about the limits of document-based analysis
- Why this space resists straightforward approaches — structural traps, combinatorial scale, and why obvious methods fail
- The System of Record: what it is, what it can do (+ examples), and what state it's in
- What next (discussion points)

---

## 2. What the Research Phase Produced

### The raw material

You've seen most of the documents. The content isn't the focus here — what matters is what that body of research could and couldn't tell us *as documents*.

| Area | What it covered |
|------|----------------|
| **Clinical evidence** | Impairment prevalence, accommodation effectiveness, job loss patterns |
| **User & community** | Reddit analysis, product reviews, practitioner perspectives, 12 structured interviews |
| **Landscape** | 54-app review, tool failure patterns, market gaps |
| **Deep dives** | Targeted investigation of email management and meeting memory failure |

Source evidence ranges from peer-reviewed studies through large community samples.

### What it produced

| Layer | Count | What they capture |
|-------|:-----:|-------------------|
| **Problems** | 20 identified, 12 scored | Observable task failures — missing deadlines, losing emails — not symptoms |
| **Mechanisms** | 6 | The cognitive processes that produce those failures |
| **Meta-challenges** | 6 | Structural constraints on *any* ADHD workplace product |
| **Engagement models** | 8 | How a product can deliver value — interaction archetypes |
| **Clusters** | 3 | Problem groups with shared hubs and downstream effects |
| **Claims** | 56 | Evidence-backed assertions with confidence ratings and source chains |

The research answered individual questions well — prevalence data, tool failure patterns, feasibility filtering, structural constraints, engagement model profiles. At that level, it's informative and relatively complete.

But as the body of research grew, I could feel that more documents weren't going to get us to resource allocation decisions. I couldn't fully articulate why at the time. Each new output answered its own question clearly, but the questions that actually mattered — where to focus, what to build, in what order — didn't seem to be getting closer. I had a growing sense that the raw ingredients needed to be atomic and structured before any approach to those questions could work, even though I didn't know what shape the solution would take.

### The bet on formalisation

I rebuilt the research — not summarised it, not reorganised it — decomposed it into typed entities with explicit relationships, confidence ratings, and evidence chains. 120+ entities, each with structured fields and cross-references. Alongside that, Humble's platform capabilities — what can actually be built, with what constraints, at what cost. Two sides of the same coin: one without the other doesn't give you enough to navigate against.

No new analysis was done during formalisation — it encoded the existing research, not extended it. Most entities already existed as concepts in the documents: problems, meta-challenges, engagement models, their assessments and scores. What the process added:

- **Claims became discrete.** Assertions that were embedded in prose became citable entities with confidence ratings and traceable evidence chains. You can now ask "what supports this claim?" and get a specific answer.
- **Relationships became structured.** Cross-references that depended on having read the right combination of documents became queryable. Assessments that already existed (vulnerability profiles, compatibility ratings) became consistent and rigorous through the discipline of structured encoding.
- **Gaps became trackable.** 25 open tickets explicitly logging what's missing, what needs re-evaluation, what schema decisions are pending — instead of relying on someone remembering.

### What doing it revealed

Once the entities were formalised, I could name what the ceiling had actually been.

The information was all there in the documents — findings, relationships, assessments. You can reason across documents, and we did. But the drag compounds: every new learning means mentally revisiting its implications across everything else. More documents, more cross-references to hold in your head, more things that need re-evaluating when something changes. And this work is being done by people with ADHD — the working memory load and organisational overhead aren't theoretical constraints, they're the same functional problems we're researching.

Up to a point, that's just increasing difficulty. Beyond a certain scale, it genuinely breaks down. The questions that matter for resource allocation need you to reason across multiple layers simultaneously:

- Which engagement models are compromised across multiple meta-challenges at once?
- Which problem clusters share mechanisms a single prototype could test?
- Where do market gaps, structural resilience, and platform capability overlap — and where do they contradict?

At the scale of this research — 12 scored problems, 8 models, 6 meta-challenges, 6 mechanisms, 3 clusters, all interacting — that's not something you can hold reliably, and you can't tell when your reasoning has gone stale because a finding three documents away changed something. The formalised system makes cross-entity reasoning tractable and auditable rather than heroic and fragile.

### The strategic implication

The same complexity that makes resource allocation difficult — overlapping problems, interacting constraints, contradictory signals across layers — is the reason this space resists conventional approaches. Anyone building here without structured multi-layer visibility is navigating the same complexity with significantly less reliable reasoning. The research base, and the infrastructure to reason across it, isn't just an input to product decisions — it's a structural advantage that would need to be independently replicated by anyone else entering this space.

§3 covers the specific structural reasons this space resists straightforward approaches. §4 covers the system built to navigate it.

---

### What this points toward

- **Targeted prototypes, not whole solutions.** Mechanism-specific tests that carve off sections of the landscape — "does this specific engagement mechanism hold under these specific meta-challenge pressures?" — rather than building a full product and measuring aggregate retention.
- **Two interacting resource decisions.** How much to allocate to building vs. research (building the wrong thing produces false signal that misleads your *next* decision). And what to build vs. what to research (with demand signal unreliable and existing evidence carrying sampling biases).
- **Multi-dimensional visibility.** Both decisions need some way to see tradeoffs across all the layers simultaneously. The expertise required spans clinical psychology, tech, UX, research methodology, and commercial strategy — and the combinatorial scale means synthesis by conversation alone breaks down.

---

## 4. The System of Record

### What it is

A single YAML file (~5,400 lines) containing 120+ typed entities with explicit relationships between them. Entity types: 20 sources, 67 claims, 14 problems, 6 mechanisms, 3 clusters, 6 meta-challenges, 8 engagement models, plus 25 open tickets tracking gaps and schema decisions.

It's not a database or an app — it's a structured text file that an AI agent (or a human) can read, query, and edit. The structure is what makes it useful: every entity has typed fields, cross-references by ID, confidence ratings where applicable, and explicit evidence chains back to sources.

### What it can do — examples

**Example 1: "Which engagement model has the best structural profile?"**

Each engagement model carries a meta-challenge vulnerability assessment across all 6 meta-challenges. Passive Capture (M2) looks like this:

| Meta-challenge | Vulnerability | Why |
|----------------|:------------:|-----|
| Novelty Decay | Low | Compounding value creates switching cost |
| Circular Dependency | Low | Zero user initiation required |
| Shame-Avoidance | Low | Continues working during absence |
| Disclosure / Visibility | Moderate | Meeting bot may be visible to colleagues |
| Notification Desensitisation | Low | Value delivery, not interruption |

Compare with Structured Check-In (M7): Very High on Novelty Decay, Circular Dependency, *and* Shame-Avoidance simultaneously. This comparison is directly readable from the data without parsing any prose.

**Example 2: "What does Time Blindness connect to?"**

Time Blindness (FP03) scores 14/15 (highest alongside Task Initiation). But the score alone doesn't tell you what to do with it. The SoR shows:

- It's the hub of the Time-Perception Cascade cluster — addressing it has downstream effects on Deadline Misses, Chronic Lateness, and Long-Term Project Neglect
- It's driven by a single mechanism (Time Perception Distortion) — which means engagement models need to target that mechanism specifically
- Time Calibration Feedback (M5) has Strong compatibility with this cluster; Passive Capture (M2) has Partial compatibility (captures time context but can't make the user aware of time passing); On-Demand Scaffolding (M1) is Incompatible (requires the user to self-identify being stuck, which a below-awareness problem prevents)

That chain — problem → cluster → mechanism → model compatibility → meta-challenge exposure — is the kind of multi-layer traversal that the SoR was built to support.

**Example 3: "What's missing?"**

25 open tickets. Content tickets track evidence gaps (e.g. "hoard-and-purge cycles with knowledge tools described in interviews — needs encoding as a claim"). System tickets track schema decisions (e.g. "engagement models lack data-access and trust fields," "9 technology research docs haven't been parsed into entities," "no agent instruction block exists for AI navigation").

The tickets are themselves part of the system — they make the gaps explicit and trackable rather than implicit in someone's memory.

### What state it's in

**Complete for its current scope:** The phenomena layer (problems, mechanisms, clusters, meta-challenges) is substantively done — 14 problems fully scored with Tier 1-2 evidence, all meta-challenges and engagement models fully evaluated with vulnerability profiles and cluster compatibility matrices.

**Incomplete by design in forward-looking areas:**
- No requirements layer yet — the research-to-requirements transition is an open schema question
- 9 technology research documents (AI architectures, knowledge graphs, voice processing, etc.) haven't been parsed into entities
- Engagement model compatibility assessments are qualitative (based on structural reasoning, not empirical measurement)
- Source entities carry minimal metadata (no methodology fields, sample sizes, or limitation tracking)

**The honest summary:** the SoR is a well-structured map of what we know about the problem space and how engagement models interact with it. It is not yet a decision-making tool — the capabilities overlay, the requirements layer, and the evidence gap closures all need work before it can support the kind of resource allocation decisions it was designed to inform.

---

## 5. What Next

This section is for discussion rather than presentation. These are the decision points and open questions that the research phase surfaces but can't answer on its own.

### Where the SoR needs to go

- **Capabilities overlay.** The platform capabilities (from capabilities.xml) need to be formalised and mapped against the engagement models and problem clusters. Right now they exist as a separate document — the overlay that makes the SoR navigable for product decisions hasn't been built yet.
- **Evidence gaps.** Several claims in the SoR carry moderate confidence ratings — enough to reason with, not enough to build on. The open tickets track which gaps are most consequential for product decisions.
- **Requirements layer.** The research identifies problems and scores them. The analysis identifies engagement models and evaluates their structural profiles. But the bridge between "this model fits this problem cluster" and "here's what we'd actually build" doesn't exist in the SoR yet.

### Resource allocation questions

- **Build vs. research split.** How much of the next phase should be prototyping vs. continuing to develop the analytical infrastructure? The dependency chain argument says research has high ROI here, but there's a real tension with fundability timelines.
- **What to prototype first.** The SoR points toward mechanism-specific tests rather than whole products. Which mechanisms, for which problems, using which engagement models? This is where the multi-layer analysis is supposed to help — but it hasn't been done yet.
- **Combinatorial reduction.** The solution space is still vast. What additional filters or constraints (beyond the gates, scores, and meta-challenge profiles already applied) would reduce it to a tractable set of options for the business team to evaluate?

### Open risks

- **The passive engagement hypothesis is untested.** The structural analysis favours low-initiation, passive models — but there is no evidence that they work for ADHD workplace improvement. The strongest clinical evidence is for high-structure human-delivered intervention, which is the opposite direction.
- **No user has touched anything.** All findings are research-derived. The gap between "this should work structurally" and "this actually helps someone" is the gap the next phase needs to close.
- **The SoR could be over-engineered for the problem.** It's possible that a simpler approach — a spreadsheet, a decision matrix, a structured workshop — would produce comparable resource allocation confidence with less infrastructure. The research phase invested heavily in formalisation. Whether that investment pays off depends on what happens next.
