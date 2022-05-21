# How to inspect and copy an element's CSS the easy way

Here are simple steps you can do to inspect and copy the CSS of an element from a website.

#### With CSS Scan (Chrome, Firefox, Safari, and Edge): <a href="#with-css-scan-chrome-firefox-safari-and-edge" id="with-css-scan-chrome-firefox-safari-and-edge"></a>

CSS Scan is by far the easiest way to copy an element’s CSS nowadays.

It’s simple, it works on every website, and it’s fast.

It’s available on all of the four browsers above (Chrome, Firefox, Safari, and Edge) as an extension.

To copy the CSS code of any element with [CSS Scan](https://getcssscan.com/?ref=blog-2), click on the element you want to copy.

It’s as simple as that. A single click and it’s yours.

Once the code is copied, you can paste it anywhere. And it copies not only the selected element but also all its child elements, pseudo-classes, and pseudo-elements.

[![Copying CSS with CSS Scan is as easy as a single click](https://d33wubrfki0l68.cloudfront.net/d307435949d777c8e94c8225531ce3de19809f8e/a31a7/assets/images/copy-css.gif)](https://getcssscan.com/?ref=blog-1)

And any element that you hover over, you’ll instantly inspect its CSS code, so it’ll save you a lot of time.

To use the extension, you can try it out a free demo on the [home page](https://getcssscan.com/?ref=blog-2).

#### On Chrome (without CSS Scan): <a href="#on-chrome-without-css-scan" id="on-chrome-without-css-scan"></a>

First, hover over the element you want to copy.

Then, right-click on it and choose the option “Inspect”.

It should look like this:

![Chrome Devtools](https://d33wubrfki0l68.cloudfront.net/4b140d6362edad687292423157422a6bf5d3b7c4/d8e26/assets/images/devtools-min.jpg)

On the left side is the HTML DOM tree, and on the right side, the CSS styles of the selected element.

Having the right element selected on the HTML DOM tree, right-click on it and choose “Copy” > “Copy styles”.

![Chrome Devtools Copy styles](https://d33wubrfki0l68.cloudfront.net/2609500d74a7729f99920c744d807d6cf5302d1c/e8304/assets/images/copy-styles-devtools-min.jpg)

And done, the CSS was copied! That’s how you copy CSS from “Inspect element”.

⚠️ The biggest downsides of this approach are that:

* it doesn’t copy child elements (you’ll have to copy element by element, while with [CSS Scan](https://getcssscan.com/?ref=blog-2) you can copy thousands of elements with a single click)
* it doesn’t copy the element’s pseudo-classes (such as :hover, :active, etc) styles, which are special states, and for example, can be used to change a button’s color when the user’s pointer hovers over it, and many other purposes
* it copies all CSS variables declared on the :root (even if they aren’t used on the selected element), polluting the code depending on the website.
* it might take some time if you need to copy lots of elements.

While with [CSS Scan](https://getcssscan.com/?ref=blog-2), you can copy not only the selected element but also all its child elements, their pseudo-classes (:hover, :active, etc) styles, all the computed CSS variables, and copy all the elements you want in a faster and easier way - without making all these steps, again, and again.

#### On Firefox (without CSS Scan): <a href="#on-firefox-without-css-scan" id="on-firefox-without-css-scan"></a>

First, hover over the element you want to copy. Then, right-click on it and choose the option to Inspect Element.

![Firefox Devtools](https://d33wubrfki0l68.cloudfront.net/10d6a1474cee3bdbd2ab5064d75f2bf3ad675916/634b3/assets/images/ffx-devtools-min.jpg)

Firefox doesn’t have the option “Copy styles” that Chrome has so it’s a bit harder. On the right panel of the Devtools, it’s the CSS code (styles) we want to copy:

![Firefox Devtools (styles panel)](https://d33wubrfki0l68.cloudfront.net/33e34058311b007780b59e094e144cd454cc1132/840d0/assets/images/ffx-devtools-styles-min.jpg)

As you can see, some rules are striked-through (canceled) because they are overriden by properties above that has higher CSS specificity.

To copy the element’s CSS on Firefox, you’ll need to select all the text that you’re seeing:

![Firefox Devtools](https://d33wubrfki0l68.cloudfront.net/b4f4c7400e0c3231f2a06c7ff4cb939053419e83/fab46/assets/images/ffx-devtools-styles-copy-min.jpg)

But most of the time this is going to give you a very polluted and big code, and it doesn’t copy multiple elements at once.

If you want the code to be smaller and cleaner, you’ll have to remove the overriden rules and selectors by yourself, one by one, or use a tool like [CSS Scan](https://getcssscan.com/?ref=blog-2), which can also copy not only the selected element but also all its child elements with a single click.

#### On Safari (without CSS Scan): <a href="#on-safari-without-css-scan" id="on-safari-without-css-scan"></a>

On Safari, the Development tools are hidden by default. So first, you’ll need to toggle it on.

To do that, open: Safari > Preferences (⌘ ,) > Advanced > “Show Develop menu in menu bar”

![Enabling Devtools on Safari](https://d33wubrfki0l68.cloudfront.net/d1b943bfec3ad7fae95cc04e00b3c11d1ad3be94/4a000/assets/images/safari-enabling-devtools-min.jpg)

Now, hover over the element you want to copy. Then, right-click on it and choose the option to Inspect Element. You just opened Safari Devtools:

![Safari's Devtools](https://d33wubrfki0l68.cloudfront.net/25e0254ec19ca1293ff7252dd5faaef928136369/37cd3/assets/images/safari-devtools-min.jpg)

On the right panel of the Devtools, it’s the CSS code (styles) we want to copy.

As you can see, some rules are striked-through (canceled) because they are overriden by properties above that has higher CSS specificity.

To copy the element’s CSS on Safari, you’ll need to select all the text that you’re seeing:

![Safari Devtools (copying styles from the styles panel)](https://d33wubrfki0l68.cloudfront.net/3ef15ba20dbead93fabf3d74fa8647cbe4210637/893d3/assets/images/safari-devtools-styles-copy-min.jpg)

But most of the time this is going to give you a very polluted and big code, and it doesn’t copy multiple elements at once.

If you want the code to be smaller and cleaner, you’ll have to remove the overriden rules and selectors by yourself, one by one, or use a tool like [CSS Scan](https://getcssscan.com/?ref=blog-2), which can also copy not only the selected element but also all its child elements with a single click.

