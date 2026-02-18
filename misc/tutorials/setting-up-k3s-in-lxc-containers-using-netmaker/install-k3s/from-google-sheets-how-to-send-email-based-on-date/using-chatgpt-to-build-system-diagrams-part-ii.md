# Using ChatGPT to build system diagrams — Part II

Continuing from my [previous post](https://aruva.medium.com/using-chatgpt-to-build-system-diagrams-part-i-69efc7603926), I wanted to focus on the [C4 diagramming model](https://c4model.com/). To keep ChatGPT from deviating from the intention, I started with this prompt:

> **Prompt**: Going forward, I want you to act as a software architect and build C4 diagrams using mermaid.js. Keep the answers to markdown syntax and always keep in mind software functional and non-functional aspects including but not limited to scalability, availability, redundancy, containerization, security and disaster recovery.
>
> **ChatGPT**: Sure, as a software architect, I can help you create C4 diagrams using Mermaid.js that take into account functional and non-functional aspects such as scalability, availability, redundancy, containerization, security, and disaster recovery.

C4 diagrams are a way to represent the architecture of a software system and are divided into four main levels:

* Context level — external factors that interact with the system
* Container level — deployment units and their dependencies
* Component level — different components of the system
* Code level — implementation details of the system

{% stepper %}
{% step %}
### Context Diagram

> **Prompt**: Let’s start by creating a context diagram of the services in Wealth Management\
> **ChatGPT**: Sure, here’s an example of a context diagram in Mermaid format for a Wealth Management System:

![](<../../../../../.gitbook/assets/image (35)>)

context diagram

and in the markdown editor

![](<../../../../../.gitbook/assets/image (36)>)

context diagram

This diagram shows the main actors that interact with the Wealth Management System and the main services provided by the system.

* The `User` interacts with the `Account Management Service`, `Portfolio Management Service`, `Asset Management Service`, and `Transaction Management Service`.
* The `Financial Institution` also interacts with the `Account Management Service`, `Portfolio Management Service`, `Asset Management Service`, and `Transaction Management Service`.
* The `Market` interacts with the `Market Data Service`.

This gives an overview of the main interactions between actors and services, useful for understanding the high-level architecture.
{% endstep %}

{% step %}
### Container Diagram

Looks good so far. Next, let’s build a container-level diagram for one of the services.

> **Prompt**: Let’s take the Portfolio service and break it down by creating a container diagram for its sub-functionalities\
> **ChatGPT**: Sure, here’s an example of a container diagram in Mermaid format for the Portfolio Management Service of a Wealth Management System:

![](<../../../../../.gitbook/assets/image (37)>)

Container diagram

and markdown diagram

![](<../../../../../.gitbook/assets/image (38)>)

This diagram shows the containers that comprise the Portfolio Management Service and their dependencies.

* The `Portfolio Management API` is the entry point for the users and other systems to interact with the service.
* The `Portfolio Management Worker` performs background tasks like updating portfolios based on market changes.
* The `Portfolio Management Database` stores portfolio-related data, such as assets and current value.
* The `Load Balancer` distributes incoming traffic among instances of the `Portfolio Management API` running in the `Kubernetes Cluster`.
* The `Kubernetes Cluster` manages scaling, availability, and deployment of the containers.
{% endstep %}

{% step %}
### Component Diagram

> **Prompt**: Next lets create the component level diagram for portfolio management api with all relevant details\
> **ChatGPT**: Here’s an example of a component diagram in Mermaid format for the Portfolio Management API

![](<../../../../../.gitbook/assets/image (39)>)

and the corresponding mermaid diagram

![](<../../../../../.gitbook/assets/image (40)>)

Component diagram for Portfolio Management API

Description:

* `API Gateway` — entry point for incoming requests.
* `Authentication` — authenticates users.
* `Authorization` — checks user access rights.
* `Request Validator` — validates incoming requests.
* `Business Logic` — processes requests and applies business rules.
* `Response Formatter` — formats responses sent to clients.
* `Portfolio Service` — performs CRUD operations for portfolios and communicates with the `Portfolio Management Database`.

Follow-up:

> **Prompt**: can we do the same for portfolio management worker container\
> **ChatGPT**: Sure, here’s an example of a component diagram in Mermaid format for the Portfolio Management Worker container:

![](<../../../../../.gitbook/assets/image (41)>)

and the mermaid diagram

![](<../../../../../.gitbook/assets/image (42)>)

Component Diagram for Portfolio Management Worker

* `Task Scheduler` — schedules background tasks to update portfolios.
* `Portfolio Updater` — updates portfolios based on market changes; communicates with `Market Data Service`.
* `Market Data Service` — provides market data to the updater.
* `Portfolio Service` — performs portfolio management operations and persists data to the `Portfolio Management Database`.
{% endstep %}

{% step %}
### Code Diagram

> **Prompt:** Can you also do the code diagram for Portfolio Management API\
> **ChatGPT**: Sure, here’s an example of a code diagram in Mermaid format for the Portfolio Management API:

![](<../../../../../.gitbook/assets/image (43)>)

However, when creating this in the markdown editor with Mermaid.js, it failed to indicate cyclical dependencies. The corrected graph removes those cycles:

![](<../../../../../.gitbook/assets/image (44)>)

Corrected Code Graph

and the mermaid diagram

![](<../../../../../.gitbook/assets/image (45)>)

Portfolio Management API code packages:

* `api` — entry point, defines routes and middleware.
* `auth` — handles authentication and authorization.
* `config` — loads configuration files.
* `controllers` — handles requests and calls services.
* `errors` — defines custom errors.
* `middleware` — provides middleware (CORS, request validation, etc.).
* `models` — defines ORM models for database entities.
* `services` — performs business logic and communicates with the database.
* `utils` — utility functions.

This was a blog post to depict the capabilities of ChatGPT, especially on the C4 diagramming model. Thanks for reading!

Interested in Mindmaps — read the blog post on using PlantUML with ChatGPT to create awesome Mindmaps: https://link.medium.com/q5YglIQ74wb

Last updated 2 years ago
{% endstep %}
{% endstepper %}
