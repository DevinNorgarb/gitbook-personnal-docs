# Using ChatGPT to build System Diagrams — Part I

Interested in Mindmaps — read our blog post on using plantUML with ChatGPT to create awesome Mindmaps: https://link.medium.com/q5YglIQ74wb

The popularity of ChatGPT keeps growing and it’s now being used in a wide range of applications. As a software architect, I had the opportunity to explore ChatGPT’s capabilities for use within the financial domain, specifically for Wealth Management.

![](<../../../../.gitbook/assets/image (20)>)

Photo by [Christina @ wocintechchat.comarrow-up-right](https://unsplash.com/@wocintechchat?utm_source=medium\&utm_medium=referral) on [Unsplasharrow-up-right](https://unsplash.com/?utm_source=medium\&utm_medium=referral)

I wanted to confirm if ChatGPT could generate diagrams for a use case explanation and analyze multiple factors at the same time.

So, I logged into http://chat.openai.com/ and here is my conversation.

{% stepper %}
{% step %}
### Step 1: Let’s define the use-case

I could have defined my own use-case, but I wanted to test all aspects of ChatGPT, so I asked it to define one for me.

![](<../../../../.gitbook/assets/image (21)>)

Use case definition
{% endstep %}

{% step %}
### Step 2: Let’s define a Data Model for the use-case

Looks good to me, let’s start by defining the data model — so I asked ChatGPT to do it and this is what I got:

![](<../../../../.gitbook/assets/image (22)>)

data model definition

That sounds about right, let's see what it can do for diagrams. I wanted to drill a bit deeper on the data model so my next prompt was:

Prompt: `describe the data model in more detail or tabular format using markdown`\
ChatGPT: I can describe the structure of the data model in a tabular format using markdown.

![](<../../../../.gitbook/assets/image (23)>)

data structure
{% endstep %}

{% step %}
### Step 3: Let’s define relationships — Entity Relationship Diagram

Prompt: this is perfect, I would like to depict the relationships in a mermaid diagram, can you give me the markdown code to do this\
ChatGPT: I apologize, but as a text-based model, I am not able to generate Mermaid diagrams or any other visual diagrams. However, I can provide you with an example of how the relationships could be represented in Mermaid syntax:

![](<../../../../.gitbook/assets/image (24)>)

mermaid syntax for data relationships

And copying this in a markdown editor enclosed within {mermaid} tags, I got:

![](<../../../../.gitbook/assets/image (25)>)

data model in mermaid
{% endstep %}

{% step %}
### Step 4: Sequence Diagram

Next, I tried to make hypothetical prompts to check responses. My first intention was to get a sequence diagram created.

Prompt: how would a Buy transaction for an asset impact the tables mentioned above, I would like to depict this as a sequence diagram. Can you help describe the diagram in markdown format for mermaid\
ChatGPT: Sure, a `Buy` transaction would have an impact on the following tables:

* `Asset` table: the `current_value` of the asset would be updated to reflect the current market value of the asset
* `Portfolio` table: the `current_value` of the portfolio would be updated to reflect the new asset and its market value, and the `asset_allocation` would be updated to reflect the new asset.
* `Transaction` table: a new transaction would be added with the transaction details such as the transaction type, transaction date, asset\_id, and portfolio\_id

Here is an example of how the process could be represented in a Mermaid sequence diagram:

![](<../../../../.gitbook/assets/image (26)>)

sequence diagram for a buy transaction

and copying this is in a markdown editor:

![](<../../../../.gitbook/assets/image (27)>)

sequence diagram
{% endstep %}

{% step %}
### Step 5: State Transition Diagram

Let me ask about a `State Transition` diagram.

Prompt: Will the account have states like new, closed, active inactive etc? I would like to depict the states in a state diagram using mermaid. Can you help describe the diagram in markdown format\
ChatGPT: It is common for financial accounts to have different states, such as new, closed, active, and inactive, to reflect the current status of the account.

* `new` account would be one that has just been opened and is awaiting funding or verification.
* `active` account would be one that is currently open and being used for transactions.
* `inactive` account would be one that is not currently being used but has not been closed.
* `closed` account would be one that has been closed by the customer or the financial institution, and no longer able to be used for transactions.
* `Pending` state could be used to indicate that the account is under review or awaiting verification.
* `Suspended` state could be used to indicate that the account has been temporarily suspended, for example, due to suspicious activity or non-compliance with terms and conditions.
* `Frozen` state could be used to indicate that the account has been frozen, for example, due to a legal dispute or regulatory action.
* `Expired` state could be used to indicate that the account has reached its expiration date and is no longer in use.

Here is an example of how the states of an account could be represented in a Mermaid state diagram:

![](<../../../../.gitbook/assets/image (28)>)

Sequence Diagram (state diagram image)

Looks like this format is older and may break due to cyclical dependencies. So I asked ChatGPT to improve this.

Prompt: can you try giving the state diagram markdown syntax in new format using `[*]`\
ChatGPT: Sure, here is an example of how a state diagram for a wealth management system's account management component could be represented in Mermaid using the new format with `[*]`:

![](<../../../../.gitbook/assets/image (29)>)

mermaid representation of state diagram

Markdown Editor Representation:

![](<../../../../.gitbook/assets/image (30)>)

This diagram shows the different states of an account and the possible transitions between them.

* The initial state is `[*]` which denotes the start state.
* The account can transition from `New` state to `Active` state by activating it.
* The account can transition from `New` state to `Closed` state by closing it.
* The account can transition from `Active` state to `Inactive` state by deactivating it.
* The account can transition from `Active` state to `Closed` state by closing it.
* The account can transition from `Inactive` state to `Active` state by activating it.
* The account can transition from `Inactive` state to `Closed` state by closing it.

Now we are getting somewhere. Let’s extend this further to include other states as well.

Prompt: please include expired, frozen and other relevant states as well\
ChatGPT: Sure, here is an example of how a state diagram for a wealth management system’s account management component could be represented in Mermaid including additional states such as `Expired`, `Frozen`, etc:

Description:\
This diagram shows the different states of an account and the possible transitions between them.

* The initial state is `[*]` which denotes the start state.
* The account can transition from `New` state to `Active` state by activating it.
* The account can transition from `New` state to `Closed` state by closing it.
* The account can transition from `Active` state to `Inactive` state by deactivating it.
* The account can transition from `Active` state to `Frozen` state by freezing it.
* The account can transition from `Active` state to `Closed` state by closing it.
* The account can transition from `Inactive` state to `Active` state by activating it.
* The account can transition from `Inactive` state to `Frozen` state by freezing it.
* The account can transition from `Inactive` state to `Closed` state by closing it.
* The account can transition from `Frozen` state to `Active` state by unfreezing it.
* The account can transition from `Frozen` state to `Closed` state by closing it.
* The account can transition from `Closed` state to `Expired` state if the account is expired.

![](<../../../../.gitbook/assets/image (31)>)

extended state diagram

Diagrammatic Representation:

![](<../../../../.gitbook/assets/image (32)>)

This is awesome. Truly impressive on what can be achieved with ChatGPT and Mermaid
{% endstep %}
{% endstepper %}

I next moved on to describing and building more diagrams using the C4 model and will add them to a follow up post: https://medium.com/@aruva/using-chatgpt-to-build-system-diagrams-part-ii-a17d02f0dcb7

Thanks for reading!

Please subscribe here to never miss our new posts and don’t forget to clap if you enjoyed reading this post: https://aruva.medium.com/membership
