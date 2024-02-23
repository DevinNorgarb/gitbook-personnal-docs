# Shopify Remote UI

{% embed url="https://shopify.engineering/remote-rendering-ui-extensibility" %}

## Remote Rendering: Shopify’s Take on Extensible UI

Shopify is one of the world's largest e-commerce platforms. With millions of merchants worldwide, we support an increasingly diverse set of use cases, and we wouldn't be successful at it without our developer community. Developers build apps that add immense value to Shopify and its merchants, and solve problems such as marketing automation, sales channel integrations, and product sourcing.

In this post, we will take a deep dive into the latest generation of our technology that allows developers to extend Shopify’s UI. With this technology, developers can better integrate with the Shopify platform and offer native experiences and rich interactions that fit into users' natural workflow on the platform.

<figure><img src="https://cdn.shopify.com/s/files/1/0779/4361/files/ShopifyCheckout.gif?v=1638305462" alt="A GIF showing how a 3rd party extension inserting a page highlighting an upsell purchase before the user completes purchase is completed in the Shopify checkout"><figcaption><p>3rd party extension adding a post-purchase page directly into the Shopify checkout</p></figcaption></figure>

To put the technical challenges into context, it's important to understand our main objectives and requirements:

* The user experience of 3rd party extensions must be consistent with Shopify's native content in terms of look & feel, performance, and accessibility features.
* Developers should be able to extend Shopify using standard technologies they are already familiar with.
* Shopify needs to run extensions in a secure and reliable manner, and prevent them from negatively impacting the platform (naively or maliciously).
* Extensions should offer the same delightful experience across all supported platforms (web, iOS, Android).

With these requirements in mind, it's time to peel the onion.

### Remote Rendering

At the heart of our solution is a technique we call _remote rendering_. With remote rendering, we separate the code that defines the UI from the code that renders it, and have the two communicate via message passing. This technique fits our use case very well because _extensions_ (code that defines UI) are typically 3rd party code that needs to run in a restricted sandbox environment, while the _host_ (code that renders UI) is part of the main application.

<figure><img src="https://cdn.shopify.com/s/files/1/0779/4361/files/ExtensionsVsHosts.png?format=webp&#x26;v=1638305724" alt="A diagram showing that Extensions define the UI and run in a sandbox and the Host renders the UI and is part of the main application. Extensions and Host communicate via messages between them."><figcaption><p>Separating extensions (3rd party code) from host (1st party code)</p></figcaption></figure>

Communication between an extension and a host is done via a [`MessageChannel`](https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel). Using message passing for all communication means that hosts and extensions are completely agnostic of each other’s implementation and can be implemented using different languages. In fact, at Shopify, we have implemented hosts in JavaScript, Kotlin, and Swift to provide cross-platform support.

### The `remote-ui` Library

Remote rendering gives us the flexibility we need, but it also introduces non-trivial technical challenges such as defining an efficient message-passing protocol, implementing function calls using message passing (aka remote procedure call), and applying UI updates in a performant way. These challenges (and more) are tackled by [`remote-ui`](https://github.com/Shopify/remote-ui/), an open-source library developed at Shopify.

Let's take a closer look at some of the fundamental building blocks that `remote-ui` offers and how these building blocks fit together.

#### RPC

At the lower level, [the `@remote-ui/rpc` package](https://github.com/Shopify/remote-ui/tree/main/packages/rpc) provides a powerful remote procedure call (RPC) abstraction. The key feature of this RPC layer is the ability for functions to be passed (and called) across a `postMessage` interface, supporting the common need for passing event callbacks.

<figure><img src="https://cdn.shopify.com/s/files/1/0779/4361/files/RemoteProcedureCalls_ebd119fd-7c6d-434d-b6b7-d4bc3bea3cb4.png?format=webp&#x26;v=1638306153" alt="Two code snippets displayed side by side showing remote procedure calls using endpoint.expose and endpoint.call"><figcaption><p>Making remote procedure calls using <code>endpoint.call</code> (<a href="https://gist.github.com/ShopifyEng/05c1a47b3b69ed833fe4a3fc99a009b7">script1.js</a>) and <code>endpoint.expose</code> (<a href="https://gist.github.com/ShopifyEng/5f63d95f7a88b3e695cb87fe39eb9015">script2.js</a>)</p></figcaption></figure>

`@remote-ui/rpc` introduces the concept of an endpoint for exposing functions and calling them remotely. Under the hood, the library uses `Promise` and `Proxy` objects to abstract away the details of the underlying message-passing protocol.

It's also worth mentioning that `remote-ui`’s RPC has very smart [automatic memory management](https://github.com/Shopify/remote-ui/tree/main/packages/rpc#memory-management). This feature is especially useful when rendering UI, since properties (such as event handlers) can be automatically retained and released as UI component mount and unmount.&#x20;

#### Remote Root

After RPC, the next fundamental building block is the `RemoteRoot` which provides a familiar DOM-like API for defining and manipulating a UI component tree. Under the hood, `RemoteRoot` uses RPC to serialize UI updates as JSON messages and send them to the host.

<figure><img src="https://cdn.shopify.com/s/files/1/0779/4361/files/UIConvertedtoJSONMessage.png?format=webp&#x26;v=1638306938" alt="Two code snippets showing appending a child to a &#x60;RemoteRoot&#x60; object and getting converted to a JSON message"><figcaption><p>UI is defined with a <a href="https://gist.github.com/ShopifyEng/eee3705a204b34fce68e0e4e83d2e5fa">DOM-like API</a> and gets converted to a <a href="https://gist.github.com/ShopifyEng/fc9904fc20be4e0fde65e5561ad8a991">JSON message</a></p></figcaption></figure>

For more details on the implementation of `RemoteRoot`, see the documentation and source code of [the `@remote-ui/core` package](https://github.com/Shopify/remote-ui/tree/main/packages/core).

#### Remote Receiver

The "opposite side" of a `RemoteRoot` is a `RemoteReceiver`. It receives UI updates (JSON messages sent from a remote root) and reconstructs the remote component tree locally. The remote component tree can then be rendered using native components.

![Code snippets showing RemoteRoot and RemoteReceiver working together](https://cdn.shopify.com/s/files/1/0779/4361/files/HostExtensionWorkTogether.png?format=webp\&v=1638307854)

_Basic example setting up a `RemoteRoot` and `RemoteReceiver` to work together (_[_host.jsx_](https://gist.github.com/ShopifyEng/6424c586d24007d56c9323178399bf6e) _and_ [_extension.js_](https://gist.github.com/ShopifyEng/7cf24489f098ed973f1ae0f270bc2634)_)_

With `RemoteRoot` and `RemoteReceiver` we are very close to having an implementation of the remote rendering pattern. Extensions can define the UI as a remote tree, and that tree gets reconstructed on the host. The only missing thing is for the host to traverse the tree and render it using native UI components.

#### DOM Receiver

`remote-ui` provides a number of packages that make it easy to convert a remote component tree to a native component tree. For example, a `DomReceiver` can be initialized with minimal configuration and render a remote root into the DOM. It abstracts away the underlying details of traversing the tree, converting remote components to DOM elements, and attaching event handlers.

|   | import { DomReceiver, withEventListeners } from "@remote-ui/dom"; |
| - | ----------------------------------------------------------------- |
|   |                                                                   |
|   | // ...                                                            |
|   |                                                                   |
|   | const receiver = new DomReceiver({                                |
|   | bind: document.getElementById("container"),                       |
|   | customElement: {                                                  |
|   | Button: "button",                                                 |
|   | LineBreak: "br"                                                   |
|   | },                                                                |
|   | applyProperty: withEventListeners                                 |
|   | });                                                               |
|   |                                                                   |
|   | // ...                                                            |

[view raw](https://gist.github.com/ShopifyEng/eaf768e0edc945ecc2a509fffa63064a/raw/3ea20c7571b5c541eb61ae29c335bf6d9a41b220/host.js)[host.js ](https://gist.github.com/ShopifyEng/eaf768e0edc945ecc2a509fffa63064a#file-host-js)hosted with ❤ by [GitHub](https://github.com/)

In the snippet above, we create a receiver that will render the remote tree inside a DOM element with the id `container`. The receiver will convert `Button` and `LineBreak` remote components to `button` and `br` DOM elements, respectively. It will also automatically convert any prop starting with `on` into an event listener.

For more details, check out [this complete standalone example](https://github.com/Shopify/remote-ui/tree/main/examples/vanilla-dom) in the `remote-ui` repo.

#### Integration with React

The `DomReceiver` provides a convenient way for a host to map between remote components and their native implementations, but it’s not a great fit for our use case at Shopify. Our frontend application is built using React, so we need a receiver that manipulates React components (instead of manipulating DOM elements directly).

Luckily, [the `@remote-ui/react` package](https://github.com/Shopify/remote-ui/tree/main/packages/react) has everything we need: a receiver (that receives UI updates from the remote root), a controller (that maps remote components to their native implementations), and the `RemoteRenderer` React component to hook them up.

|   | // Host                                                                                       |
| - | --------------------------------------------------------------------------------------------- |
|   | import {useMemo} from 'react';                                                                |
|   | import {createRemoteReceiver, RemoteRenderer, createController} from '@remote-ui/react/host'; |
|   | import {Button, Card} from '../component-implementations';                                    |
|   |                                                                                               |
|   |                                                                                               |
|   | const controller = createController({Button, Card});                                          |
|   |                                                                                               |
|   |                                                                                               |
|   | export function Renderer() {                                                                  |
|   | const receiver = useMemo(() => createRemoteReceiver());                                       |
|   |                                                                                               |
|   | // Run 3rd party script in a sandbox environment                                              |
|   | // with the receiver as a communication channel ...                                           |
|   |                                                                                               |
|   | return \<RemoteRenderer receiver={receiver} controller={controller} />;                       |
|   | }                                                                                             |

[view raw](https://gist.github.com/ShopifyEng/bfc528674af4c4c468efc3edefa2e843/raw/d0cfd1550835c804a5e8c066148f864fa23e72ba/host.jsx)[host.jsx ](https://gist.github.com/ShopifyEng/bfc528674af4c4c468efc3edefa2e843#file-host-jsx)hosted with ❤ by [GitHub](https://github.com/)

There's nothing special about the component implementations passed to the controller; they are just regular React components:

|   | // "Native" component implementations                                       |
| - | --------------------------------------------------------------------------- |
|   |                                                                             |
|   | function Button({children, onPress}) {                                      |
|   | return \<button type="button" onClick={() => onPress}>{children}\</button>; |
|   | }                                                                           |
|   |                                                                             |
|   | function Card({children}) {                                                 |
|   | return \<div className="Card">{children}\</div>;                            |
|   | }                                                                           |

[view raw](https://gist.github.com/ShopifyEng/ab233f5317890bb8e7c1b80e17ae45fe/raw/bcdf2786bf496c5f64df716c9b91cd5ae42ed061/component-implementations.jsx)[component-implementations.jsx ](https://gist.github.com/ShopifyEng/ab233f5317890bb8e7c1b80e17ae45fe#file-component-implementations-jsx)hosted with ❤ by [GitHub](https://github.com/)

However, there's a part of the code that is worth taking a closer look at:

`// Run 3rd party script in a sandbox environment`\
`// with the receiver as a communication channel ...`

### Sandboxing

When we introduced the concept of remote rendering, our high-level diagram included only two boxes, extension and host. In practice, the diagram is slightly more complex.

<figure><img src="https://cdn.shopify.com/s/files/1/0779/4361/files/SandboxExtensionHost.png?format=webp&#x26;v=1638308258" alt="An image showing the Sandbox as a box surrounding the Extension and a box representing the Host. The two communicate via messages"><figcaption><p>The sandbox is an additional layer of indirection between the host and the extension</p></figcaption></figure>

The sandbox, an additional layer of indirection between the host and the extension, provides platform developers with more control. The sandbox code runs in an isolated environment (such as a web worker) and loads extensions in a safe and secure manner. In addition to that, by keeping all boilerplate code as part of the sandbox, extension developers get a simpler interface to implement.

Let's look at a simple sandbox implementation that allows us to run 3rd party code and acts as “the glue” between 3rd party extensions and our host.

|   | // Sandbox                                                                               |
| - | ---------------------------------------------------------------------------------------- |
|   |                                                                                          |
|   | import { createEndpoint, retain } from "@remote-ui/rpc";                                 |
|   | import { createRemoteRoot } from "@remote-ui/core";                                      |
|   |                                                                                          |
|   | // The \`regsiter\` function will be available (as a global) for extensions to use       |
|   |                                                                                          |
|   | let renderCallback;                                                                      |
|   | self.register = (callback) => {                                                          |
|   | renderCallback = callback;                                                               |
|   | };                                                                                       |
|   |                                                                                          |
|   |                                                                                          |
|   | // The \`load\` and \`render\` functions will be available (via RPC) for the host to use |
|   |                                                                                          |
|   | async function load(scriptUrl) {                                                         |
|   | await import(scriptUrl);                                                                 |
|   | }                                                                                        |
|   |                                                                                          |
|   | function render(remoteChannel, api) {                                                    |
|   | retain(\[remoteChannel, api]);                                                           |
|   | const root = createRemoteRoot(remoteChannel);                                            |
|   | renderCallback(root, api);                                                               |
|   | }                                                                                        |
|   |                                                                                          |
|   | createEndpoint(self).expose({ load, render });                                           |

[view raw](https://gist.github.com/ShopifyEng/3daf1f47da96be35a7f0df4f18866dd5/raw/b6387c3905ffa72bbc9a259c67ae50f48866725e/sandbox.js)[sandbox.js ](https://gist.github.com/ShopifyEng/3daf1f47da96be35a7f0df4f18866dd5#file-sandbox-js)hosted with ❤ by [GitHub](https://github.com/)

The sandbox allows a host to `load` extension code from an external URL. When the extension is loaded, it will `register` itself as a callback function. After the extension finishes loading, the host can `render` it (that is, call the registered callback).

Arguments passed to the `render` function (from the host) provide it with everything it needs. `remoteChannel` is used for communicating UI updates with the host, and `api` is an arbitrary object containing any native functionality that the host wants to make available to the extension.

Let's see how a host can use this sandbox:

|   | // Host                                                             |
| - | ------------------------------------------------------------------- |
|   |                                                                     |
|   | import { createEndpoint } from "@remote-ui/rpc";                    |
|   | import { createRemoteReceiver } from "@remote-ui/core";             |
|   |                                                                     |
|   | const endpoint = createEndpoint(new Worker("./sandbox.js"));        |
|   | const receiver = createRemoteReceiver();                            |
|   |                                                                     |
|   | endpoint.call.load("https://somewhere.com/extension.js").then(() => |
|   | endpoint.call.render(receiver.receive, {                            |
|   | setTitle: (title) => document.title = title                         |
|   | });                                                                 |
|   | );                                                                  |

[view raw](https://gist.github.com/ShopifyEng/620e2645983d75382dd3a7e31b94e509/raw/74f23fe19bb578e076734e3cc2a229034376b9fb/host.js)[host.js ](https://gist.github.com/ShopifyEng/620e2645983d75382dd3a7e31b94e509#file-host-js)hosted with ❤ by [GitHub](https://github.com/)

In the code snippet above, the host makes a `setTitle` function available for the extension to use. Here is what the corresponding extension script might look like:

|   | // Extension                                       |
| - | -------------------------------------------------- |
|   |                                                    |
|   | register((root, api) => {                          |
|   | api.setTitle("This is a demo");                    |
|   | root.appendChild(root.createText("Hello World!")); |
|   | root.mount();                                      |
|   | });                                                |

[view raw](https://gist.github.com/ShopifyEng/1c20c9a57cfc36eafb5323fdb5230397/raw/7904eeec9666050ecaed931cd372274e0191ade9/extension.js)[extension.js ](https://gist.github.com/ShopifyEng/1c20c9a57cfc36eafb5323fdb5230397#file-extension-js)hosted with ❤ by [GitHub](https://github.com/)

Notice that 3rd party extension code isn't aware of any underlying aspects of RPC. It only needs to know that the `api` (that the host will pass) contains a `setTitle` function.

#### Implementing a Production Sandbox

The implementation above can give you a good sense of our architecture. For the sake of simplicity, we omitted details such as error handling and support for registering multiple extension callbacks.

In addition to that, our production sandbox restricts the JavaScript environment where untrusted code runs. Some globals (such as `importScripts`) are made unavailable and others are replaced with safer versions (such as `fetch`, which is restricted to specific domains). Also, the sandbox script itself is loaded from a separate domain so that the browser provides extra security constraints.

Finally, to have cross-platform support, we implemented our sandbox on three different platforms using web workers (web), web views (Android), and JsCore (iOS).

### What’s Next?

The technology we presented in this blog post is relatively new and is currently used to power two types of extensions, [product subscriptions](https://shopify.dev/apps/subscriptions/app-extensions) and [post-purchase](https://shopify.dev/apps/checkout/post-purchase), in two different platform areas.

We are truly excited about the potential we’re unlocking, and we also know that there's a lot of work ahead of us. Our plans include improving the experience of 3rd party developers, supporting new UI patterns as they come up, and making more areas of the platform extensibile.

If you are interested in learning more, you might want to check out the `remote-ui` [comprehensive example](https://github.com/Shopify/remote-ui/blob/main/documentation/comprehensive-example.md) and this [recent React Summit talk](https://portal.gitnation.org/contents/remote-rendering-with-web-workers).

Special thanks to [Chris Sauve](https://github.com/lemonmade), [Elana Kopelevich](https://github.com/elanalynn), [James Woo](https://github.com/james-woo), and [Trish Ta](https://github.com/vividviolet) for their contribution to this blog post.

**Joey Freund** is a manager on the core extensibility team, focusing on building tools that let Shopify developers extend our platform to make it a perfect fit for every merchant.

***
