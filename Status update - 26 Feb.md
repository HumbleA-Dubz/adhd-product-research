# Where we're at, and why
## Context (30 seconds)

You've seen the research outputs — problems, mechanisms, engagement models, meta-challenges. All useful individually, but not enough to tell us where to focus dev resources with any confidence.

The problem was: each new finding needed to be considered against everything else, the cross-references lived in people's heads or scattered across documents, and the analysis was starting to degrade — hallucinations, context bleeds, lost insights, and an admin overhead that was killing velocity. We couldn't draw a line from research to "test this thing" without guessing.

I spent the last week decomposing all of it into a single structured system (the System of Record) — 120+ typed entities with explicit relationships, confidence ratings, and evidence chains. Every claim is traceable. Every gap is ticketed. It's designed so that AI agents (or humans) can query across the full research base without anyone needing to hold it all in their head.

That's done. The question now is what to do with it.

---

## What I'm Proposing

Three stages. Each produces something usable — they build on each other but aren't wasted if we stop.

---

### Stage 1: First cross-layer map of candidate directions

**My time:** 1–1.5 days

**What I do:**
- Final tidying on a few definitions and evaluations (~2 hrs)
- Re-run the cross-comparison matrices that broke down last time — the SoR should fix the root causes of that degradation, but this is the load-bearing bet in the plan. If the matrices degrade again, this stage takes longer. (~3-4 hrs including manual checking)
- Template the outputs so they're regenerable and someone else can maintain them (brief needed, ideally someone else builds the templates)

**Mahdi receives:** Something like a shortlist of the strongest candidate directions — where problem clusters, engagement models, mechanism fits, and meta-challenge resilience all converge. Ranked or grouped, with the reasoning visible and traceable. I'd want to work out the exact format with you so it's something you can actually react to and interrogate rather than just read.

**Main risk to estimate:** The cross-comparison matrices. Last time they degraded as context got too large. The SoR was built specifically to fix that — atomic entities, explicit relationships, no ambiguity for the AI to hallucinate into. But until I run them, I can't guarantee it. If it breaks again, I'll know within the first hour and can flag it.

---

### Stage 2: Add cost layer and testing guidance

**My time:** 0.5–1 day

**What I do:**
- Create a general testing best-practice layer — what makes a good test in this space, what the common confounds are, how to isolate signal from noise (~1 hr)
- Create "candidate test" entities in the SoR with requirements: what you'd need to build, what you'd need to measure, what confounds to control for (~3 hrs)
- Hook up to the Humble capabilities map so we can see what we can already do vs. what would need building (~1 hr)

**Mahdi receives:** The Stage 1 shortlist, now with a rough cost/feasibility dimension. Something like: "To test this candidate, you'd need X — we already have Y, we'd need to build Z." Plus guidance on how to actually run each test so the signal means something. Enough for you and Jordan to react to build estimates without starting from scratch.

**Main risk to estimate:** The translation from research entities to test requirements is a new schema — I haven't done it before in this system. The logic is straightforward but the first pass may need iteration. The capabilities map (built last week with the devs) works as-is for rough indicators, which is good enough for this stage. The real unlock with capabilities is in continuing to capture information into it and automating/expanding it over time — that's a separate project, smaller than this one but would need dev support to do properly.

**Help needed:** Jordan for ~1 hour if I need to validate feasibility assumptions on specific build requirements.

---

### Stage 3: Operationalise — make it live, queryable, and maintainable

**My time:** 1–2 days (but will need help)

**What I do:**
- Write ingest/triage logic so new data (interview transcripts, test results, desk research) can be processed into the SoR by agents (~1-2 hrs, mostly drafted)
- Integrate with Linear for automatic ticket triage/updates (~1 hr)
- Write health checks and review functions so the system flags when things are stale or inconsistent (~1 hr)
- Productise the capabilities — make it so anyone on the team can query the system, get traceable answers, and contribute to it without understanding the full schema (~1 hr for the logic, but the interface/front-end piece I genuinely don't know yet)

**Mahdi receives:** A living system. New findings from user research or experiments get processed in automatically. The team can ask questions and get answers with full evidence chains. The analysis updates as new data comes in rather than requiring someone to re-read everything. It becomes a shared operational tool, not a reference document only I can navigate.

**Main risk to estimate:** The interface question. I can make the backend work — the logic, the ingestion, the queries. But making it accessible and usable for people who aren't me is a design and potentially engineering problem I'll need help with. I don't know what that looks like yet. I'd want a scoping conversation (~30 mins) with whoever would be involved to figure out what's realistic.

**Help needed:** A scoping session at the start (~30 mins) to define what the interface needs to look like and what support I'd need to build it. The specifics of ongoing help come out of that session.

---

## Summary

| Stage | My time | Mahdi receives | Depends on |
|-------|---------|---------------|------------|
| 1. Cross-layer map | 1–1.5 days | Shortlist of strongest candidate directions with visible reasoning | Matrices not degrading again |
| 2. Cost layer | 0.5–1 day | Candidates with rough feasibility, build requirements, and testing guidance | Stage 1 + current capabilities map |
| 3. Operationalise | 1–2 days | Living system the whole team can use and contribute to | Stages 1-2 + help on interface |

Total if all three: 2.5–4.5 days of my time, staged so each delivers something usable.

---

## What I'd recommend

Start with Stage 1. It's the highest-value, lowest-dependency piece and it tests the load-bearing assumption (that the SoR fixes the analysis degradation). If it works, Stage 2 follows naturally. Stage 3 is where the long-term value lives but it's also where I need the most help, so it makes sense to scope that properly rather than rush it.

---

## One thing worth noting

This system is, in a fairly literal sense, a version of the problem we're trying to solve: building structured support so that people with ADHD can act on complex knowledge without having to hold it all in their heads. If it works well for us — if it actually sticks, improves decisions, and survives contact with real use — that's not just internal tooling. It's a live case study in exactly the kind of system design our product space needs. I expect Stage 3 in particular to surface a bunch of learnings about what makes these systems work (or not) for ADHD people in a work context.
