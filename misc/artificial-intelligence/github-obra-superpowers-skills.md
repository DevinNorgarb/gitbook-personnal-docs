---
title: "Superpowers Skills Library (obra/superpowers)"
description: "Imported notes on the Superpowers agent methodology and its composable skills library."
---

# Superpowers Skills Library (obra/superpowers)

![Superpowers logo](./assets/github-obra-superpowers-skills/01-superpowers-small.svg)

## Source

- Type: webpage
- Origin: https://github.com/obra/superpowers/tree/main/skills
- Imported: 2025-06-25
- Images: 2 (logo SVG and app icon PNG saved under `./assets/github-obra-superpowers-skills/`)

## Content

[Superpowers](https://github.com/obra/superpowers) is a complete software development methodology for coding agents, built on composable skills and bootstrap instructions that ensure the agent uses them automatically.

![Superpowers app icon](./assets/github-obra-superpowers-skills/02-app-icon.png)

### How it works

When you start a coding agent session, Superpowers does not jump straight into writing code. Instead it:

1. Steps back and asks what you are really trying to do.
2. Teases out a spec through conversation, then shows it in digestible chunks.
3. After design sign-off, produces an implementation plan clear enough for a junior engineer with no project context to follow — emphasizing red/green TDD, YAGNI, and DRY.
4. On "go", launches **subagent-driven-development** (or **executing-plans**): agents work through tasks, inspect and review work, and continue autonomously — often for hours without deviating from the plan.

Skills trigger automatically; no special invocation is required once installed.

### Installation (Cursor)

In Cursor Agent chat:

```text
/add-plugin superpowers
```

Or search for "superpowers" in the plugin marketplace.

Other harnesses (Claude Code, Codex, Gemini CLI, Copilot CLI, Pi, OpenCode, etc.) have separate install paths — see the [full README](https://github.com/obra/superpowers#installation).

### The basic workflow

| Step | Skill | What it does |
| --- | --- | --- |
| 1 | **brainstorming** | Refines rough ideas through questions, explores alternatives, presents design in sections for validation. Saves a design document. |
| 2 | **using-git-worktrees** | After design approval, creates an isolated workspace on a new branch, runs project setup, verifies a clean test baseline. |
| 3 | **writing-plans** | With approved design, breaks work into bite-sized tasks (2–5 minutes each) with exact file paths, complete code, and verification steps. |
| 4 | **subagent-driven-development** or **executing-plans** | Dispatches a fresh subagent per task with two-stage review (spec compliance, then code quality), or executes in batches with human checkpoints. |
| 5 | **test-driven-development** | Enforces RED-GREEN-REFACTOR during implementation: write failing test, watch it fail, write minimal code, watch it pass, commit. |
| 6 | **requesting-code-review** | Between tasks, reviews against the plan and reports issues by severity. Critical issues block progress. |
| 7 | **finishing-a-development-branch** | When tasks complete, verifies tests, presents options (merge/PR/keep/discard), cleans up worktree. |

The agent checks for relevant skills before any task. These are mandatory workflows, not suggestions.

### Skills library

All skills live under [`skills/`](https://github.com/obra/superpowers/tree/main/skills) in the repository.

#### Testing

- [**test-driven-development**](https://github.com/obra/superpowers/blob/main/skills/test-driven-development/SKILL.md) — RED-GREEN-REFACTOR cycle. Write the test first, watch it fail, write minimal code to pass. Includes testing anti-patterns reference. Use for new features, bug fixes, refactoring, and behavior changes.

#### Debugging

- [**systematic-debugging**](https://github.com/obra/superpowers/blob/main/skills/systematic-debugging/SKILL.md) — Four-phase root cause process. **Iron law:** no fixes without root cause investigation first. Includes root-cause-tracing, defense-in-depth, and condition-based-waiting techniques.
- [**verification-before-completion**](https://github.com/obra/superpowers/blob/main/skills/verification-before-completion/SKILL.md) — Evidence before claims. Run fresh verification commands before declaring work complete, fixed, or passing.

#### Collaboration

- [**brainstorming**](https://github.com/obra/superpowers/blob/main/skills/brainstorming/SKILL.md) — Socratic design refinement before any creative work. Hard gate: no implementation until design is presented and approved.
- [**writing-plans**](https://github.com/obra/superpowers/blob/main/skills/writing-plans/SKILL.md) — Detailed implementation plans for multi-step tasks. Saves to `docs/superpowers/plans/YYYY-MM-DD-<feature-name>.md`.
- [**executing-plans**](https://github.com/obra/superpowers/blob/main/skills/executing-plans/SKILL.md) — Batch execution with review checkpoints in a separate session. Prefer **subagent-driven-development** when subagents are available.
- [**dispatching-parallel-agents**](https://github.com/obra/superpowers/blob/main/skills/dispatching-parallel-agents/SKILL.md) — One agent per independent problem domain when facing 2+ unrelated failures that can run concurrently.
- [**requesting-code-review**](https://github.com/obra/superpowers/blob/main/skills/requesting-code-review/SKILL.md) — Dispatch a reviewer subagent with crafted context. Mandatory after each subagent-driven task and before merge.
- [**receiving-code-review**](https://github.com/obra/superpowers/blob/main/skills/receiving-code-review/SKILL.md) — Verify before implementing feedback. Technical correctness over performative agreement.
- [**using-git-worktrees**](https://github.com/obra/superpowers/blob/main/skills/using-git-worktrees/SKILL.md) — Isolated workspace via native tools or git worktree fallback. Detect existing isolation before creating anything new.
- [**finishing-a-development-branch**](https://github.com/obra/superpowers/blob/main/skills/finishing-a-development-branch/SKILL.md) — Verify tests → detect environment → present merge/PR/keep/discard options → execute → clean up.
- [**subagent-driven-development**](https://github.com/obra/superpowers/blob/main/skills/subagent-driven-development/SKILL.md) — Fresh subagent per task + task review (spec + quality) + broad final review. Continuous execution without pausing between tasks.

#### Meta

- [**writing-skills**](https://github.com/obra/superpowers/blob/main/skills/writing-skills/SKILL.md) — TDD applied to process documentation. Create, edit, and verify skills before deployment.
- [**using-superpowers**](https://github.com/obra/superpowers/blob/main/skills/using-superpowers/SKILL.md) — Bootstrap skill loaded at session start. If a skill might apply (even 1% chance), you must invoke it. User instructions override skill defaults.

### Philosophy

- **Test-Driven Development** — Write tests first, always.
- **Systematic over ad-hoc** — Process over guessing.
- **Complexity reduction** — Simplicity as primary goal.
- **Evidence over claims** — Verify before declaring success.

### Related links

- [Original release announcement](https://blog.fsck.com/2025/10/09/superpowers/)
- [Superpowers marketplace](https://github.com/obra/superpowers-marketplace) (Claude Code / Copilot CLI)
- [superpowers-evals](https://github.com/prime-radiant-inc/superpowers-evals/) — skill-behavior test harness
- [Discord community](https://discord.gg/35wsABTejz)
- [Release announcements signup](https://primeradiant.com/superpowers/)

### License

MIT License — see [LICENSE](https://github.com/obra/superpowers/blob/main/LICENSE).

## Key Takeaways

- Superpowers is a composable agent methodology: design → plan → isolated worktree → TDD implementation → review → branch completion.
- Fourteen skills under `skills/` cover testing, debugging, collaboration, and meta skill authoring; they auto-trigger once the plugin is installed.
- Cursor install: `/add-plugin superpowers` or search the plugin marketplace.
- Core philosophy: TDD, systematic debugging, simplicity, and evidence-based completion claims.
- Two branding assets (SVG logo + PNG app icon) are saved locally under `assets/github-obra-superpowers-skills/`.
