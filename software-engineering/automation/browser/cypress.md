# Cypress

## Why Cypress?

### &#x20;What you'll learn[​](https://docs.cypress.io/guides/overview/why-cypress#What-youll-learn) <a href="#what-youll-learn" id="what-youll-learn"></a>

* What Cypress is and why you should use it
* Our mission, and what we believe in
* Key Cypress features
* Types of tests Cypress is designed for

### In a nutshell[​](https://docs.cypress.io/guides/overview/why-cypress#In-a-nutshell) <a href="#in-a-nutshell" id="in-a-nutshell"></a>

Cypress is a next generation front end testing tool built for the modern web. We address the key pain points developers and QA engineers face when testing modern applications.

We make it possible to:

* [Set up tests](https://docs.cypress.io/guides/overview/why-cypress#Setting-up-tests)
* [Write tests](https://docs.cypress.io/guides/overview/why-cypress#Writing-tests)
* [Run tests](https://docs.cypress.io/guides/overview/why-cypress#Running-tests)
* [Debug Tests](https://docs.cypress.io/guides/overview/why-cypress#Debugging-tests)

Cypress is most often compared to Selenium; however Cypress is both fundamentally and architecturally different. Cypress is not constrained by the same restrictions as Selenium.

This enables you to **write faster**, **easier** and **more reliable** tests.

### Who uses Cypress?[​](https://docs.cypress.io/guides/overview/why-cypress#Who-uses-Cypress) <a href="#who-uses-cypress" id="who-uses-cypress"></a>

Our users are typically developers or QA engineers building web applications using modern JavaScript frameworks.

Cypress enables you to write all types of tests:

* [End-to-end tests](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test)
* [Component tests](https://docs.cypress.io/guides/component-testing/overview)
* Integration tests
* Unit tests

Cypress can test anything that runs in a browser.

### Cypress ecosystem[​](https://docs.cypress.io/guides/overview/why-cypress#Cypress-ecosystem) <a href="#cypress-ecosystem" id="cypress-ecosystem"></a>

Cypress consists of a free, [open source](https://github.com/cypress-io/cypress), [locally installed](https://docs.cypress.io/guides/getting-started/installing-cypress) application **and** Cypress Cloud for [recording your tests](https://docs.cypress.io/guides/cloud/introduction).

* **First:** Cypress helps you set up and start writing tests every day while you build your application locally. _TDD at its best!_
* **Later:** After building up a suite of tests and [integrating Cypress](https://docs.cypress.io/guides/continuous-integration/introduction) with your CI Provider, [Cypress Cloud](https://docs.cypress.io/guides/cloud/introduction) can record your test runs. You'll never have to wonder: _Why did this fail?_

### Our mission[​](https://docs.cypress.io/guides/overview/why-cypress#Our-mission) <a href="#our-mission" id="our-mission"></a>

Our mission is to build a thriving, open source ecosystem that enhances productivity, makes testing an enjoyable experience, and generates developer happiness. We hold ourselves accountable to champion a testing process **that actually works**.

We believe our documentation should be approachable. This means enabling our readers to understand fully not just the **what** but the **why** as well.

We want to help developers build a new generation of modern applications faster, better, and without the stress and anxiety associated with managing tests. We aim to elevate the art of software development by leveraging test results to generate actionable insights for long-term stability by proactively identifying areas for improvement.

We know that in order for us to be successful we must enable, nurture, and foster an ecosystem that thrives on open source. Every line of test code is an investment in **your codebase**, it will never be coupled to us as a paid service or company. Tests will be able to run and work independently, _always_.

We believe testing needs a lot of ❤️ and we are here to build a tool, a service, and a community that everyone can learn and benefit from. We're solving the hardest pain points shared by every developer working on the web. We believe in this mission and hope that you will join us to make Cypress a lasting ecosystem that makes everyone happy.

### Features[​](https://docs.cypress.io/guides/overview/why-cypress#Features) <a href="#features" id="features"></a>

Cypress comes fully baked, batteries included. Here is a list of things it can do that no other testing framework can:

* **Time Travel:** Cypress takes snapshots as your tests run. Hover over commands in the [Command Log](https://docs.cypress.io/guides/core-concepts/cypress-app#Command-Log) to see exactly what happened at each step.
* **Debuggability:** Stop guessing why your tests are failing. [Debug directly](https://docs.cypress.io/guides/guides/debugging) from familiar tools like Developer Tools. Our readable errors and stack traces make debugging lightning fast.
* **Automatic Waiting:** Never add waits or sleeps to your tests. Cypress [automatically waits](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress#Cypress-is-Not-Like-jQuery) for commands and assertions before moving on. No more async hell.
* **Spies, Stubs, and Clocks:** Verify and [control the behavior](https://docs.cypress.io/guides/guides/stubs-spies-and-clocks) of functions, server responses, or timers. The same functionality you love from unit testing is right at your fingertips.
* **Network Traffic Control:** Easily [control, stub, and test edge cases](https://docs.cypress.io/guides/guides/network-requests) without involving your server. You can stub network traffic however you like.
* **Consistent Results:** Our architecture doesn't use Selenium or WebDriver. Say hello to fast, consistent and reliable tests that are flake-free.
* **Screenshots, Videos, and Test Replay:** View screenshots taken automatically on failure, or videos, if enabled, of your entire test suite when run from the CLI. Record to [Cypress Cloud](https://docs.cypress.io/guides/cloud/introduction) and replay the test as it executed during the run for zero-configuration debugging using [Test Replay](https://docs.cypress.io/guides/cloud/test-replay).
* **Cross Browser Testing:** Run tests within Firefox and Chrome-family browsers (including Edge and Electron) locally and [optimally in a Continuous Integration pipeline](https://docs.cypress.io/guides/guides/cross-browser-testing).
* **Smart Orchestration:** Once you're set up to record to Cypress Cloud, easily [parallelize](https://docs.cypress.io/guides/cloud/smart-orchestration/parallelization) your test suite, rerun failed specs first with [Spec Prioritization](https://docs.cypress.io/guides/cloud/smart-orchestration/spec-prioritization), and cancel test runs on failures with [Auto Cancellation](https://docs.cypress.io/guides/cloud/smart-orchestration/run-cancellation) for tight feedback loops.
* **Flake Detection:** Discover and diagnose unreliable tests with Cypress Cloud's [Flaky test management](https://docs.cypress.io/guides/cloud/flaky-test-management).

#### &#x20;Setting up tests[​](https://docs.cypress.io/guides/overview/why-cypress#Setting-up-tests) <a href="#setting-up-tests" id="setting-up-tests"></a>

There are no servers, drivers, or any other dependencies to install or configure. You can write your first passing test in 60 seconds.

#### &#x20;Writing tests[​](https://docs.cypress.io/guides/overview/why-cypress#Writing-tests) <a href="#writing-tests" id="writing-tests"></a>

Tests written in Cypress are meant to be easy to read and understand. Our API comes fully baked, on top of tools you are familiar with already.

#### &#x20;Running tests[​](https://docs.cypress.io/guides/overview/why-cypress#Running-tests) <a href="#running-tests" id="running-tests"></a>

Cypress runs as fast as your browser can render content. You can watch tests run in real time as you develop your applications. TDD FTW!

#### &#x20;Debugging tests[​](https://docs.cypress.io/guides/overview/why-cypress#Debugging-tests) <a href="#debugging-tests" id="debugging-tests"></a>

Readable error messages help you to debug quickly. You also have access to all the developer tools you know and love.

### Test types[​](https://docs.cypress.io/guides/overview/why-cypress#Test-types) <a href="#test-types" id="test-types"></a>

Cypress can be used to write several different types of tests. This can provide even more confidence that your application under test is working as intended.

#### End-to-end[​](https://docs.cypress.io/guides/overview/why-cypress#End-to-end) <a href="#end-to-end" id="end-to-end"></a>

Cypress was originally designed to run end-to-end (E2E) tests on anything that runs in a browser. A typical E2E test visits the application in a browser and performs actions via the UI just like a real user would.

```
it('adds todos', () => {
  cy.visit('https://example.cypress.io/')
  cy.get('[data-testid="new-todo"]')
    .type('write code{enter}')
    .type('write tests{enter}')
  // confirm the application is showing two items
  cy.get('[data-testid="todos"]').should('have.length', 2)
})
```

#### Component[​](https://docs.cypress.io/guides/overview/why-cypress#Component) <a href="#component" id="component"></a>

You can also use Cypress to mount components from supported web frameworks and execute [component tests](https://docs.cypress.io/guides/component-testing/overview).

```
import TodoList from './components/TodoList'

it('contains the correct number of todos', () => {
  const todos = [
    { text: 'Buy milk', id: 1 },
    { text: 'Learn Component Testing', id: 2 },
  ]

  cy.mount(<TodoList todos={todos} />)
  // the component starts running like a mini web app
  cy.get('[data-testid="todos"]').should('have.length', todos.length)
})
```

#### API[​](https://docs.cypress.io/guides/overview/why-cypress#API) <a href="#api" id="api"></a>

Cypress can perform arbitrary HTTP calls, thus you can use it for API testing.

```
it('adds a todo', () => {
  cy.request({
    url: '/todos',
    method: 'POST',
    body: {
      title: 'Write REST API',
    },
  })
    .its('body')
    .should('deep.contain', {
      title: 'Write REST API',
      completed: false,
    })
})
```

#### Other[​](https://docs.cypress.io/guides/overview/why-cypress#Other) <a href="#other" id="other"></a>

Finally, through a large number of [official and 3rd party plugins](https://docs.cypress.io/plugins) you can write Cypress [a11y](https://github.com/component-driven/cypress-axe), [visual](https://docs.cypress.io/plugins#Visual%20Testing), [email](https://docs.cypress.io/faq/questions/using-cypress-faq#How-do-I-check-that-an-email-was-sent-out) and other types of tests.

### Cypress in the Real World[​](https://docs.cypress.io/guides/overview/why-cypress#Cypress-in-the-Real-World) <a href="#cypress-in-the-real-world" id="cypress-in-the-real-world"></a>

<figure><img src="https://docs.cypress.io/img/guides/overview/v10/real-world-app.png" alt=""><figcaption></figcaption></figure>

Cypress makes it quick and easy to start testing, and as you begin to test your app, **you'll often wonder if you're using best practices or scalable strategies**.

To guide the way, the Cypress team has created the [Real World App (RWA)](https://github.com/cypress-io/cypress-realworld-app), a full stack example application that demonstrates testing with **Cypress in practical and realistic scenarios.**

The RWA achieves full [code-coverage](https://docs.cypress.io/guides/tooling/code-coverage) with end-to-end tests [across multiple browsers](https://docs.cypress.io/guides/guides/cross-browser-testing) and [device sizes](https://docs.cypress.io/api/commands/viewport), but also includes [visual regression tests](https://docs.cypress.io/guides/tooling/visual-testing), API tests, unit tests, and runs them all in an [efficient CI pipeline](https://cloud.cypress.io/projects/7s5okt). Use the RWA to **learn, experiment, tinker, and practice** web application testing with Cypress.

The app is bundled with everything you need, [just clone the repository](https://github.com/cypress-io/cypress-realworld-app) and start testing.
