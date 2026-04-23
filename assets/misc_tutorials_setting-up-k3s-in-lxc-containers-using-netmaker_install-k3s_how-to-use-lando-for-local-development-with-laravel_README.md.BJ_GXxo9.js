import{_ as i,o as a,c as n,ag as l}from"./chunks/framework.DXGyWiRo.js";const o=JSON.parse('{"title":"How to use Lando for local development with Laravel","description":"","frontmatter":{},"headers":[],"relativePath":"misc/tutorials/setting-up-k3s-in-lxc-containers-using-netmaker/install-k3s/how-to-use-lando-for-local-development-with-laravel/README.md","filePath":"misc/tutorials/setting-up-k3s-in-lxc-containers-using-netmaker/install-k3s/how-to-use-lando-for-local-development-with-laravel/README.md"}'),p={name:"misc/tutorials/setting-up-k3s-in-lxc-containers-using-netmaker/install-k3s/how-to-use-lando-for-local-development-with-laravel/README.md"};function h(e,s,t,k,F,r){return a(),n("div",null,[...s[0]||(s[0]=[l(`<h1 id="how-to-use-lando-for-local-development-with-laravel" tabindex="-1">How to use Lando for local development with Laravel <a class="header-anchor" href="#how-to-use-lando-for-local-development-with-laravel" aria-label="Permalink to &quot;How to use Lando for local development with Laravel&quot;">​</a></h1><p>One of the common problems when working on web apps is that you need to have a local environment that is as close as possible to the production environment. If you are working in a team it is important that you can share the local environment one way or the other too. If you only have one project it is not that big of a deal to install the needed services in the same versions as in your production environment. But as soon as you have multiple projects, chances are high that the production environments differ from project to project. And I&#39;m not even talking about legacy projects with outdated dependencies like end-of-life PHP versions.</p><p>There are a lot of solutions which solve this problem in one way or the other. A common way is using Docker (<a href="https://www.docker.com/" target="_blank" rel="noreferrer">https://www.docker.com/</a>) images. Docker images can be combined to provide all the services you need for your project to run. There are a lot of predefined images available at the Docker Hub (<a href="https://hub.docker.com/" target="_blank" rel="noreferrer">https://hub.docker.com/</a>) for different purposes. For example Docker images with all different PHP versions, Docker images with webservers, Docker images with different database servers, Docker images with Redis and so on. As you can imagine with these already available images you can combine nearly every setup you need. But that also comes at a cost. You have to dig into a new technology and learn how you can combine and configure all the different images so that they work together and all the images can talk to each other. All you want in reality is an easy way to list what you need in which version and start developing.</p><p>That&#39;s why we choose to use Lando (<a href="https://docs.lando.dev/" target="_blank" rel="noreferrer">https://docs.lando.dev/</a>) at Ideenreich (<a href="https://web-ideenreich.at/" target="_blank" rel="noreferrer">https://web-ideenreich.at/</a>), the company I co-founded.</p><p>What exactly is Lando? Let&#39;s see how Lando describes itself:</p><blockquote><p>It&#39;s a free, open source, cross-platform, local development environment and DevOps tool built on Docker container technology.</p></blockquote><p>But what does this mean in practice? Basically it means that you have a <code>.lando.yml</code> YAML file in the root of your project. This file describes everything you need to run your project. From the PHP version to the webserver and the database. The advantage of this approach is that you can share this single configuration file with your team. Even better, you can add it to your version control and can ensure that everyone working on the project has the same and latest version of the file and therefore the latest environment configuration.</p><p>Another advantage of Lando is that it provides a lot of so called recipes. Recipes are predefined config files for common projects like Laravel (<a href="https://laravel.com/" target="_blank" rel="noreferrer">https://laravel.com/</a>), Symfony (<a href="https://symfony.com/" target="_blank" rel="noreferrer">https://symfony.com/</a>) or Wordpress (<a href="https://wordpress.org/" target="_blank" rel="noreferrer">https://wordpress.org/</a>) to name just a few. Every recipe contains sensible defaults for the different projects which makes the start with Lando extremely easy.</p><p>But enough of all the theory, let&#39;s get into practice and see which steps you need to take to get your Laravel project up and running locally with Lando.</p><h2 id="install-lando" tabindex="-1">Install Lando <a class="header-anchor" href="#install-lando" aria-label="Permalink to &quot;Install Lando&quot;">​</a></h2><p>Lando is available for macOS (10.13 or later), Windows (Windows 10 Pro+ or equivalent) and Linux systems (kernel version 4.x or higher). The only requirement is that you have Docker installed on Linux; on macOS and Windows the Lando installer will install Docker for you if needed. You can find detailed instructions on how to install Docker on Linux in the Lando docs: <a href="https://docs.lando.dev/basics/installation.html#linux" target="_blank" rel="noreferrer">https://docs.lando.dev/basics/installation.html#linux</a>.</p><p>You can find detailed instructions how to install Lando on your system in the docs too: <a href="https://docs.lando.dev/basics/installation.html#installation" target="_blank" rel="noreferrer">https://docs.lando.dev/basics/installation.html#installation</a></p><p>On a Debian Linux for example you have to run the following two commands in a terminal:</p><p><strong>Install Lando on Debian</strong></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://files.devwithlando.io/lando-stable.deb</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dpkg</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lando-stable.deb</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Setting up Lando for Laravel</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Open</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a terminal, navigate to the root folder of your Laravel project and run:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Initialize Lando </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Laravel</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lando</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cwd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --recipe</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> laravel</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --webroot</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> public</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> myapp</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">This</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> command will create a basic \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.lando.yml</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\` </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in your project root. This file is the starting point for customizing the services and versions you want to use.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Parameters</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> explained:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cwd\` </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tells</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Lando that the source code of your project lives in the current working directory.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--recipe</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> laravel\` </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">initializes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the Lando file with the Laravel recipe.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--webroot</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> public\` </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tells</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Lando which directory will be the webroot of your project. In Laravel this is typically the \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">public</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\` </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">folder.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> myapp\` </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">defines</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the name of your app. Lando will generate a subdomain based on the app name for you to access your project.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">The</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> generated \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.lando.yml</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\` </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">looks</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> like this:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.lando.yml (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">generated</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yaml</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> myapp</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">recipe:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> laravel</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">config:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  webroot:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> public</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">At</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> this point you can already stop and start your development environment:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Start Lando</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lando</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Lando</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> will bring up the whole environment. You may have to make small changes to your \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.env</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\` </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> (shown later). The simple Lando file above is enough to start a webserver and a database </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Laravel.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> **</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Note</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> The \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lando</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init\` </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">command</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> has an interactive mode. If you start the command without parameters or skip parameters, it will ask for the missing information interactively.</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Customizing the environment</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">There</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> are many options for customizing the services and versions you want to use. See the Lando docs for Laravel config: https://docs.lando.dev/config/laravel.html#getting-started</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Below</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> are some commonly used customizations.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Setting a PHP version</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to the \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">config</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\` </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">section</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.lando.yml</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">PHP version</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yaml</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">config:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  php:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;7.4&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Available:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PHP 5.6, 7.0, 7.1, 7.2, 7.3, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7.4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and 8.0. The current default for the Laravel recipe was PHP </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">7.3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> at the time of the original article.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Setting a Composer version</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Composer version</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yaml</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">config:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  composer_version:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;1.10.1&#39;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">The</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> current default in the Laravel recipe was </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.0.7</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> at the time of writing.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Choosing a webserver</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">By</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> default the Laravel recipe runs Apache 2.4. To switch to nginx:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Use nginx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yaml</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">config:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  via:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx:1.18</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Setting a database</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Default</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is MySQL 5.7. To use MariaDB or Postgres:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Use MariaDB</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yaml</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">config:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  database:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mariadb</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Use Postgres 9.6</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yaml</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">config:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  database:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> postgres:9.6</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Setting a caching backend</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redis or memcached:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Use Redis</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yaml</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">config:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  cache:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redis:2.8</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Use Memcached</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yaml</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">config:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  cache:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> memcached</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">You</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> can request specific versions for services as shown.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Further customizations</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">You</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> can enable Xdebug:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Enable Xdebug</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yaml</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">config:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  xdebug:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">You</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> can also add custom config files for services (e.g., custom Nginx config or php.ini). See Lando docs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> more details: https://docs.lando.dev/config/laravel.html#configuration</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">The</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Lando docs include which PHP extensions are installed by default per PHP version and how to add/remove extensions: https://docs.lando.dev/config/php.html#installed-extensions</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Changes in your .env file</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">To</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> connect your app to the Lando environment you need to tweak your \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.env</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\` </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">file.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Change \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">DB_HOST</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\` </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">database</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">For</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> MySQL/MariaDB the database settings should look like:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.env (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">MySQL/MariaDB</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">env</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DB_CONNECTION</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">mysql</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DB_HOST</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">database</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DB_PORT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">3306</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DB_DATABASE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">laravel</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DB_USERNAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">laravel</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DB_PASSWORD</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">laravel</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">For</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Postgres:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.env (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Postgres</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">env</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DB_CONNECTION</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pgsql</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DB_HOST</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">database</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DB_PORT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">5432</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DB_DATABASE</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">laravel</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DB_USERNAME</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">postgres</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">DB_PASSWORD</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">null</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Configure cache driver host names according to your Lando config. Example for Redis:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Redis config in .env</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">env</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">REDIS_HOST</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">cache</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">REDIS_PASSWORD</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">null</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">REDIS_PORT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">6379</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">json</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Set \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">APP_URL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\` </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the domain Lando generates. If you used \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">myapp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\` </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">as</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the app name, Lando generates \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">myapp.lndo.site</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Lando has a wildcard DNS entry for \`</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.lndo.site</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\` </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mapped</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to 127.0.0.1, so:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">APP_URL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">env</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">APP_URL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">http://myapp.lndo.site</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Starting Lando</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lando</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start\` in the project root. The first </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">time</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> will take longer as images are downloaded. After startup Lando shows a summary of services and available URLs (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">subdomain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and localhost with a port). Note: the localhost port can change each </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">time</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> you start the project.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Open</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the generated URL (e.g., http://myapp.lndo.site) to see your Laravel app.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Working with Lando</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Common</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Lando commands:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lando</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Starts the development environment and all services.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lando</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Stops the development environment and all services.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lando</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> destroy\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Destroys the whole environment and removes images from disk.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> **</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Warning</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Caution: \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lando</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> destroy\` </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">will</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> also delete your database and everything inside the storage folder!</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lando</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Runs artisan commands inside the container (e.g., \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lando</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> artisan</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> migrate\`).</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lando</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> composer\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Runs composer inside the container (e.g., \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lando</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> composer</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install\`).</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lando</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mysql\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Opens a MySQL shell in the container.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lando</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> php\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Runs PHP commands inside the container.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lando</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ssh\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> SSHs into your app container (where your source code runs).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Database</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> import/export:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lando</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> db-export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [file]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Exports your database to a file.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lando</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> db-import</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">fil</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Imports a database dump into your database service.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">If</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> you change the \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.lando.yml</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\` </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">after</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> you already started the environment at least once, run:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Rebuild Lando</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> lando</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rebuild</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">This</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> recreates the environment with your changes. Persistent data (database, storage folder) remains after rebuild.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Connecting to your database</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">You</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> can use any database client (DBeaver, SequelPro, etc.) with the same credentials from your \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.env</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Use host \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">database</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\` </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> container-internal access.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Alternatively,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add phpMyAdmin as an extra service in \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.lando.yml</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\` </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> provide a unified web UI for different projects:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Add phpMyAdmin to .lando.yml</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">**</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yaml</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">services:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  pma:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> phpmyadmin</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    hosts:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> database</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">proxy:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  pma:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> pma.lndo.site</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">php</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">This</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> adds a phpMyAdmin service, allows access to the \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">database</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\` </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">host,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and proxies it to \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pma.lndo.site</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\` </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">so</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> you can access phpMyAdmin for each project at that subdomain.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## Conclusion</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Laravel</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Sail (https://laravel.com/docs/8.x/sail) is another option provided by the Laravel team. Sail is similar in many ways but:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Sail targets Laravel projects specifically; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Lando</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> can be used for any project.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Sail has more limited infrastructure version customization (e.g., at the time of writing, limited PHP version choices).</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">You</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> can always customize via Dockerfiles, but Lando provides a simpler layer on top of Docker and Docker Compose to easily configure shareable environments per project.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">We</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> at Ideenreich (https://web-ideenreich.at/) use Lando in all our projects daily and are happy with it. I hope this guide shows how powerful it is.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">If</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> you have any questions about how we use Lando feel free to contact me on Twitter or by mail.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Last</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> updated </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> years ago</span></span></code></pre></div>`,15)])])}const y=i(p,[["render",h]]);export{o as __pageData,y as default};
