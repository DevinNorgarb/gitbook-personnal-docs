---
title: "Gauntlet Loop (DevinNorgarb/gauntlet-loop)"
description: "Imported notes on the Gauntlet Loop agent skill — builder/critic pairs, blind comparison against a real quality bar, loop until it wins."
---

# Gauntlet Loop

![Gauntlet Loop banner](./assets/github-gauntlet-loop/01-banner.png)

## Source

- Type: webpage
- Origin: https://github.com/DevinNorgarb/gauntlet-loop
- Imported: 2026-08-20
- Images: 1 (banner PNG saved under `./assets/github-gauntlet-loop/`)

## Content

[Gauntlet Loop](https://github.com/DevinNorgarb/gauntlet-loop) is a skill that turns any goal into one short, paste-ready prompt. That prompt makes your agent pick a real quality bar, split the work into small pieces, run a builder and a separate harsh critic on each one, compare blind against the bar, and keep looping until it wins.

Most agent output stops at "good enough" because nothing is holding it to a standard. This gives it a standard it cannot argue with.

> The gauntlet loop is [Matt Shumer's](https://github.com/mshumer) idea. He wrote the original prompt and named the technique while building [Claude of Duty](https://github.com/mshumer/Claude-of-Duty). This repo packages that pattern as a reusable skill.

### Quick start

```bash
git clone https://github.com/DevinNorgarb/gauntlet-loop
```

Copy the skill folder into your project:

```bash
cp -r gauntlet-loop/.claude/skills/gauntlet-loop your-project/.claude/skills/
```

Then in your agent:

```text
/gauntlet-loop build me a pricing page for my SaaS
```

It offers you 2 or 3 quality bars to aim at, you pick one, and it hands back a single prompt you paste into a fresh session.

### What's included

```text
.claude/skills/gauntlet-loop/
└── SKILL.md      # the whole skill, one file
README.md
LICENSE           # CC BY 4.0
```

### How it works

1. **You give a goal.** Anything — a site, an essay, a CLI tool, a research brief.
2. **It offers 2 or 3 bars.** Each one is a specific, real thing your agent can actually fetch and compare against. Not "award-winning design", but a named page, a named post, a named repo.
3. **You pick one.** It writes one short prompt, around 150 words, and stops.
4. **You paste it into a fresh session.** That agent splits the work, runs builder and critic pairs, and loops.

The critic is the part that matters. It is a separate agent with fresh context, it opens the actual output, it puts your work next to the bar with the labels stripped, and it says which one is better. Not a score out of 10, which drifts upward every round — a pick.

The loop exits when your work wins the blind comparison, or when you stop the run. Never after a fixed number of rounds.

### Why a bar and not a rubric

A rubric asks the agent to grade itself against words it wrote. A bar makes it compare against something that already exists and is undeniably good.

The skill will not accept a vague bar. It checks three things before it writes anything:

- **Named.** A specific thing, not a category.
- **Fetchable.** The critic can screenshot it, read it, run it, or open it. If the agent cannot get the reference, it hallucinates the comparison and approves everything.
- **Comparable.** Both can sit side by side and a judge can pick one.

| Goal | Bar that works |
| --- | --- |
| Website, app, UI | The live site of a specific best-in-class product, screenshotted at the same viewport |
| Game, 3D, visual | Real footage or screenshots from a named shipped title |
| Writing | A specific published piece by a named author or publication, same length and format |
| Code, tooling | A named repo's implementation, plus its benchmark or test suite as the measurable half |
| Research, analysis | A named analyst report or a paper's methods section, judged on rigour and coverage |
| Deck, doc, deliverable | A real artifact from a firm known for it, same page count |

### Prompt template

Adapt the wording every time. Fill the brackets, keep it short, keep the last line.

```text
Build [GOAL].

The bar is [BAR]. Get the real thing first and compare against it directly, not against a description of it.

Break this into the smallest pieces that can be improved and judged on their own. For each piece, fan out a builder and a separate critic with fresh context. The critic inspects the actual output, puts it next to the bar blind with the labels stripped, says which one is better, and names the single biggest remaining gap. Then it goes back to the builder.

The critic should be a harsh critic. Praise is not useful. If ours does not win, it keeps going.

/loop on each piece until the critic picks ours blind. Do not stop before that.

Keep a live progress page updating as the work evolves so I can watch it.

Fan out subagents and ultracode.
```

### Examples

```text
/gauntlet-loop a landing page for my running brand, dark and green, has to feel alive
```

Bar becomes a specific brand's live campaign page, screenshotted at desktop and mobile.

```text
/gauntlet-loop a 2000 word explainer on vector databases for non-engineers
```

Bar becomes a named writer's actual published posts, judged on which one a non-engineer understands faster.

```text
/gauntlet-loop a CLI that formats JSON logs
```

Bar becomes a named tool's implementation plus its benchmark, so taste and a number both have to win.

### Works with any agent

`/loop` and `ultracode` are Claude Code features. `/loop` reruns a prompt until you stop it, and `ultracode` opts a turn into multi-agent orchestration.

For any other agent, the skill swaps those two lines for plain instructions: keep looping until the critic picks ours, and run the builders and critics as parallel subagents. The structure is identical.

### What breaks it

- **A vague bar.** The critic invents a comparison and approves everything. By far the most common failure.
- **The builder judging its own work.** The critic needs fresh context and no knowledge of how hard the builder tried.
- **A soft critic.** Give it a binary job, not a score.
- **A fixed round count.** The exit is winning, or you calling it.
- **Over-specifying.** Every extra instruction is one fewer decision the agent makes with its own judgment.

### Credit and license

The gauntlet loop technique is **[Matt Shumer's](https://github.com/mshumer)**. He built [Claude of Duty](https://github.com/mshumer/Claude-of-Duty), wrote the [original prompt](https://github.com/mshumer/Claude-of-Duty/blob/main/prompt.md), and named the loop. Every idea underneath this skill — the harsh critic, the blind comparison, the refusal to stop until the work wins — comes from that prompt.

This repo is not the technique. It is a skill that writes a gauntlet loop prompt for you, for any goal, so you do not have to hand-write one each time.

Related reading: [Anthropic on building effective agents](https://www.anthropic.com/engineering/building-effective-agents), which covers the evaluator pattern the loop is built on.

Licensed **CC BY 4.0**. Skill by Jay E at [RoboNuggets](https://robonuggets.com). Technique by Matt Shumer.

## Key Takeaways

- A gauntlet loop holds agent output to a **real, fetchable reference** — not a self-written rubric.
- Each piece gets a **builder + separate harsh critic**; the critic picks blind (A or B), not a drifting score.
- The loop **only exits when your work wins** the comparison or you stop the run — never after a fixed round count.
- The skill's job is to **write the ~150-word paste-ready prompt**; you run it in a fresh session for best results.
