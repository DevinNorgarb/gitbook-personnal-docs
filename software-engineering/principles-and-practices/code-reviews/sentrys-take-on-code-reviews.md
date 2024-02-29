# Sentry's take on Code Reviews

{% embed url="https://develop.sentry.dev/code-review/" %}

## Code Review

Code review is mandatory at Sentry. This adds overhead to each change, but ensures that simple, often overlooked problems are more easily avoided. Code review helps build shared context and collective ownership. It is also an opportunity to collaborate with other teams. Finally, code review can identify several classes of problem before customers are exposed to them.

Code review is managed via GitHub’s Pull Requests (see below for rationale). Templates may exist on repositories, but if they do not, consider [creating one](https://help.github.com/articles/creating-a-pull-request-template-for-your-repository/).

### Who should be reviewing code? <a href="#who-should-be-reviewing-code" id="who-should-be-reviewing-code"></a>

All engineers should be reviewing code. As you gain more experience and context on the products we build and technologies we use, you can provide valuable feedback to other engineers who may be working in areas that are new to them but familiar to you.

Code review is an opportunity to improve your mentoring and communication skills. Code review can have the important function of teaching engineers about the languages, frameworks and technologies we use in a collaborative environment that is about the changes being made.

When creating a pull request, reference any tickets or Sentry issues which are being addressed. Additionally **@mention** an appropriate team (or teams) for review.

### Why Pull Requests <a href="#why-pull-requests" id="why-pull-requests"></a>

Because Sentry is an open source project maintained via GitHub we want to ensure that the barrier to entry for external contributions is minimal. By using GitHub features when possible, we make it easy for developers familiar with other projects on GitHub. While GitHub’s tools [aren’t always the best](http://cra.mr/2014/05/03/on-pull-requests), they work well enough.

#### GitHub Teams <a href="#github-teams" id="github-teams"></a>

The following teams are defined in GitHub and can be used when creating Pull Requests:

* [@getsentry/app-backend](https://github.com/orgs/getsentry/teams/app-backend)
* [@getsentry/app-frontend](https://github.com/orgs/getsentry/teams/app-frontend)
* [@getsentry/infrastructure](https://github.com/orgs/getsentry/teams/infrastructure)
* [@getsentry/ops](https://github.com/orgs/getsentry/teams/ops)
* [@getsentry/app](https://github.com/orgs/getsentry/teams/app) – the entire product team, use sparingly

Sentry has more than 200 public repositories. A more comprehensive list of teams and repositories can be found in the [Sentry Structure](https://open.sentry.io/structure/) overview.

### Commit Guidelines <a href="#commit-guidelines" id="commit-guidelines"></a>

See the [Commit Messages](https://develop.sentry.dev/commit-messages/) guide.

### Code Reviews are for … <a href="#code-reviews-are-for" id="code-reviews-are-for"></a>

#### Identifying problematic code <a href="#identifying-problematic-code" id="identifying-problematic-code"></a>

Above all, a code review should try to identify potential bugs that could cause the application to break – either now, or in the future.

* Uncaught runtime exceptions (e.g. potential for an index to be out of bounds)
* Obvious performance bottlenecks (e.g. `O(n^2)` where `n` is unbounded)
* Code alters behavior elsewhere in an unanticipated way
* API changes are not backwards compatible (e.g. renaming or removing a key)
* Complex ORM interactions that may have unexpected query generation/performance
* Security vulnerabilities
* Missing or incorrect Permissions or Access Control.

#### Improving Design <a href="#improving-design" id="improving-design"></a>

When reviewing code, consider if the interactions of the various pieces in the change make sense together. If you are familiar with the project, do the changes conflict with other requirements or goals? Could any of the methods being added be promoted to module level methods? Are methods being passed properties of objects when they could be passed the entire object?

#### Tests Included <a href="#tests-included" id="tests-included"></a>

Look for tests. There should be functional tests, integration tests or end-to-end tests covering the changes. If not, ask for them. At Sentry we rely on our test suite to maintain a high quality bar and ship rapidly.

When reviewing tests double check that the tests cover the requirements of the project or that they cover the defect being fixed. Tests should avoid branching and looping as much as possible to prevent bugs in the test code from gaining a foothold.

Functional tests that simulate how a user would call our APIs or use our UX are key to preventing regressions and avoiding brittle tests that are coupled to the internals of the products we ship.

Tests are also the ideal place to ensure that the changes have considered permissions and access control logic.

#### Assessing and approving long-term impact <a href="#assessing-and-approving-long-term-impact" id="assessing-and-approving-long-term-impact"></a>

If you’re making significant architectural, schema, or build changes that will have long-term ramifications to the software or data, it is necessary to solicit a senior engineer’s acknowledgment and blessing.

* Large refactors
* Database schema changes, like adding or removing columns and tables
* API changes (including JSON schema changes)
* Adopting new frameworks, libraries, or tools
* New product behavior that may permanently alter performance characteristics moving forward

#### Double-checking expected behavior <a href="#double-checking-expected-behavior" id="double-checking-expected-behavior"></a>

The reviewer should make a genuine attempt to double-check that the goals of the PR appear to be satisfied by the code submitted. This requires the submitter to write a good description of the expected behavior, and why. _See also: Guidelines for submitters_ _below_.

#### Information sharing and professional development <a href="#information-sharing-and-professional-development" id="information-sharing-and-professional-development"></a>

Code reviews are an opportunity for more people to understand forthcoming code changes, so that they might in turn teach others down the road, and be in a position to fix something if/when the original author is not be available.

Additionally, code reviews are an opportunity to learn about new techniques or approaches, and be exposed to code you might otherwise not have an opportunity to browse.

#### Reducing code complexity <a href="#reducing-code-complexity" id="reducing-code-complexity"></a>

Research shows that LOC is correlated with a higher bug count. If reviewers see an easy opportunity to significantly reduce the amount of code that is submitted, they should suggest a different approach.

For example, if a submitter has written a `for` loop to find an item in an array:

TextCopied

```
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 'thingiwant') return i;
}
return undefined;
```

It’s fair game to suggest they instead use:

TextCopied

```
return arr.find(x => x === 'thingiwant');
```

This is a mostly objective improvement: there are fewer variables, fewer statements, and fewer branches, and the method name `find` communicates intent. Suggesting these types of uncontroversial improvements is encouraged.

Be careful though – it’s easy to go down a rabbit hole of re-writing code to be as small as possible, and in the end winding up with something ultimately more complicated. Be pragmatic and strive to reach a good balance. _See also: “Code reviews are not for getting it perfect” below._

#### Enforcing coding standards <a href="#enforcing-coding-standards" id="enforcing-coding-standards"></a>

As much as possible, we use automation to enforce code style and test coverage, but there are exceptions that cannot necessarily be automated (or perhaps more accurately, we haven’t automated them _yet_):

* Variable, file, metric, and logger names are sensible, readable, and consistent with existing code
* Migrations have a deployment plan
* Unused or superfluous code isn’t committed accidentally

### Code Reviews are not for … <a href="#code-reviews-arenotfor" id="code-reviews-arenotfor"></a>

#### Passing responsibility onto the reviewer <a href="#passing-responsibility-onto-the-reviewer" id="passing-responsibility-onto-the-reviewer"></a>

It is not the responsibility of the reviewer that your code is correct, is bug free, or achieves its goals. Reviewers are there to help you, but if something is wrong, it’s your responsibility to correct it.

#### Boasting about your programming knowledge <a href="#boasting-about-your-programming-knowledge" id="boasting-about-your-programming-knowledge"></a>

As a reviewer, try to stick to objective improvements and make a best-intent assumption that the submitter has done their homework. Sentry is a No Flex Zone™.

#### Introducing long-term architectural changes for the first time <a href="#introducing-long-term-architectural-changes-for-the-first-time" id="introducing-long-term-architectural-changes-for-the-first-time"></a>

While code reviews are great for discussion, they’re not the place to introduce large, long-term changes for the first time. Before dropping a PR that implements those changes, you should write a proposal and reach out to the relevant parties beforehand.

#### Getting it perfect <a href="#getting-it-perfect" id="getting-it-perfect"></a>

Code reviews are expensive. Every time you request a change, you’re probably delaying that PR by 24 hours or more. This can severely inhibit our ability to move fast.

The goal of code reviews is to **reduce risk**, not to produce perfect code. It’s okay to ship code in stages, and to commit to improving something later. If you’re thinking – _if we don’t get it correct up-front, we’ll never come back to it_ – consider that if it never needs coming back to, perhaps those changes were never necessary in the first place.

> Perfect is the enemy of the good. – Voltaire, probably

Please be pragmatic, and consider the cost of each incremental request for changes.

### Guidelines for _Submitters_ <a href="#guidelines-forsubmitters" id="guidelines-forsubmitters"></a>

#### Try to organize your work in a way that makes it conducive to review <a href="#try-to-organize-your-work-in-a-way-that-makes-it-conducive-to-review" id="try-to-organize-your-work-in-a-way-that-makes-it-conducive-to-review"></a>

* Ideally, a pull request is limited to only a single feature or behavior change.
* This might feel like more work up-front, but it can make code review faster, reduce risk by letting you ship in stages, and ultimately end up being quicker.

#### Describe what your PR does in a few sentences in the description field <a href="#describe-what-your-pr-does-in-a-few-sentences-in-the-description-field" id="describe-what-your-pr-does-in-a-few-sentences-in-the-description-field"></a>

* Additionally explain _**why**_ we’re making these changes.
* If applicable, explain why other approaches were explored but not settled on.
* This gives the reviewer context, and prevents them going down the same rabbit holes that that submitter may have already explored when creating the code.

#### Annotate specific lines in your PR <a href="#annotate-specific-lines-in-your-pr" id="annotate-specific-lines-in-your-pr"></a>

* If you can, give context to specific lines of code that could use elaboration.
* Example: [getsentry/sentry#6330](https://github.com/getsentry/sentry/pull/6330#discussion\_r144441272)

#### Where appropriate, label in-progress PRs as WIP (work in progress) for early feedback <a href="#where-appropriate-label-in-progress-prs-as-wip-work-in-progress-for-early-feedback" id="where-appropriate-label-in-progress-prs-as-wip-work-in-progress-for-early-feedback"></a>

* Labeling your work as WIP helps set expectations about the state of the PR.
* WIP PRs are good for having someone check-in to make sure you’re on the right path.
* Additionally, this is an opportunity to verify CI passes before involving a reviewer.

#### Be your own first reviewer <a href="#be-your-own-first-reviewer" id="be-your-own-first-reviewer"></a>

* After you’ve put up your PR on GitHub, walk through the code yourself, before assigning an external reviewer.
* You’ll often catch code mistakes you didn’t see when writing it.
* This is also a good time to leave comments and refresh your memory in order to write a more helpful description.

#### Assign no more than 1-3 reviewers <a href="#assign-no-more-than-1-3-reviewers" id="assign-no-more-than-1-3-reviewers"></a>

* It’s tempting to want to involve as many people as possible, but it can often be distracting, and create a situation where nobody’s clear on who should actually perform the review.
* If your work spans multiple teams (and thus, many reviewers), consider breaking up your PR into multiple compatible patches (e.g. a back-end change and a front-end change).
* Note: if you don’t know who from a team to assign, you can assign teams like @workflow and @platform.

#### Avoid rebasing unnecessarily <a href="#avoid-rebasing-unnecessarily" id="avoid-rebasing-unnecessarily"></a>

* After a rebase, previous review comments will be orphaned from their now non-existent parent commits, making review more difficult
* Rewriting history makes it difficult for reviewers to isolate the scope of their review

#### Let reviewers know that you’ve made changes <a href="#let-reviewers-know-that-youve-made-changes" id="let-reviewers-know-that-youve-made-changes"></a>

* Request review again via the "Reviewers" dropdown (There should be a yellow dot next to their name again).
* Don’t rely on reviewers' mind-reading skills to know that you’re ready to have them look things over again.
* If you resolve a point of actionable feedback, it's helpful to leave a comment to let the reviewer know that it was addressed, ideally with a reference to the commit that addressed it, e.g. [getsentry/sentry#6683 (comment)](https://github.com/getsentry/sentry/pull/6683#discussion\_r155121800)

### Guidelines for _Reviewers_ <a href="#guidelines-forreviewers" id="guidelines-forreviewers"></a>

#### Be polite and empathetic <a href="#be-polite-and-empathetic" id="be-polite-and-empathetic"></a>

* Avoid accusatory and/or judgmental comments like: “You should have done X”

#### Provide _actionable_ feedback <a href="#provideactionable-feedback" id="provideactionable-feedback"></a>

* Instead of _“This is bad”_, try _“I feel this could be clearer. What if you renamed variable X to Y?”_

#### Distinguish between “requires changes” and “nitpicks” <a href="#distinguish-between-requires-changes-and-nitpicks" id="distinguish-between-requires-changes-and-nitpicks"></a>

* Consider marking a PR as approved if the only requested changes are minor nits, so as not to block the author in another asynchronous review cycle.

#### Respond promptly to code review requests <a href="#respond-promptly-to-code-review-requests" id="respond-promptly-to-code-review-requests"></a>

* We’re a team – [_we ride together, we die together_](https://www.youtube.com/watch?v=1d5Q0vXbODs) – and you need to unblock other developers so that we can all move forward.
* We recommend checking for open code reviews at the start and end of every day.
* [Github's Review Requests tab](https://github.com/pulls/review-requested) can be a helpful place to keep track of these.

#### Example of a _pretty good_ code review <a href="#example-of-apretty-goodcode-review" id="example-of-apretty-goodcode-review"></a>

[getsentry/sentry#5849](https://github.com/getsentry/sentry/pull/5849)

* Submitted early as WIP to solicit feedback early
* Reviewers respond same-day (once the WIP label is removed)
* Reviewers are polite and complimentary
* Feedback is objective and actionable
* Submitter responds to feedback and makes changes promptly
* PR is approved and merged within 48 hours
