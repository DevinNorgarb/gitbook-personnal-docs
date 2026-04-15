import{_ as a,o as i,c as n,ae as e}from"./chunks/framework.BGHOrOyn.js";const k=JSON.parse('{"title":"Docker for PHP Devs","description":"","frontmatter":{},"headers":[],"relativePath":"software-engineering/php/docker-for-php-devs.md","filePath":"software-engineering/php/docker-for-php-devs.md"}'),l={name:"software-engineering/php/docker-for-php-devs.md"};function p(t,s,o,r,h,d){return i(),n("div",null,[...s[0]||(s[0]=[e(`<h1 id="docker-for-php-devs" tabindex="-1">Docker for PHP Devs <a class="header-anchor" href="#docker-for-php-devs" aria-label="Permalink to &quot;Docker for PHP Devs&quot;">​</a></h1><p><a href="https://github.com/DevinNorgarb/docker" target="_blank" rel="noreferrer">https://github.com/DevinNorgarb/docker</a></p><h2 id="docker-guideline-for-php-developer" tabindex="-1">Docker guideline for PHP Developer <a class="header-anchor" href="#docker-guideline-for-php-developer" aria-label="Permalink to &quot;Docker guideline for PHP Developer&quot;">​</a></h2><h3 id="images" tabindex="-1">Images <a class="header-anchor" href="#images" aria-label="Permalink to &quot;Images&quot;">​</a></h3><ul><li>Nginx: <code>nginx:1.17.2</code></li><li>PHP-FPM: <code>php:5.6-fpm-stretch</code> <code>php:7.3-fpm-stretch</code> <code>php:8.0-fpm-buster</code></li></ul><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[PHP Modules]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">apcu</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">bcmath</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Core</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctype</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">curl</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">date</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">dom</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fileinfo</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">filter</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ftp</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gd</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gmp</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hash</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">iconv</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">inotify</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">intl</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">libxml</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mbstring</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mcrypt</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">memcached</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mongodb</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">mysqlnd</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">openssl</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pcntl</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pcov</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pcre</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PDO</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pdo_mysql</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">pdo_sqlite</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Phar</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">posix</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">rdkafka</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">readline</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">redis</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Reflection</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">session</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SimpleXML</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sodium</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">SPL</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sqlite3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">standard</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">swoole</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">tokenizer</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">xml</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">xmlreader</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">xmlwriter</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Zend OPcache</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">zlib</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[Zend Modules]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Zend OPcache</span></span></code></pre></div><ul><li>Composer 2</li></ul><p>&quot;PHP Fatal error: Class UpdateHelper\\ComposerPlugin contains 2 abstract methods and must therefore be declared abstract or implement the remaining methods (Composer\\Plugin\\PluginInterface::deactivate, Composer\\Plugin\\PluginInterface::uninstall) &quot;</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## Fix the above problem</span></span>
<span class="line"><span>rm -rf vendor/kylekatarnls</span></span>
<span class="line"><span>composer update kylekatarnls/update-helper</span></span></code></pre></div><ul><li>Redis: <code>redis:5.0</code></li><li>SSDB: <code>https://github.com/ideawu/ssdb/archive/master.zip</code></li><li>MySQL: <code>mysql:5.7.28</code></li><li>PostgrelSQL: <code>postgres:11.2</code></li><li>Prometheus: <code>prometheus:v2.30.3</code></li><li>Grafana: <code>grafana:7.5.11</code></li><li>Zookeeper: <code>wurstmeister/zookeeper</code></li><li>Kafka: <code>wurstmeister/kafka:2.11-1.1.1</code></li><li>Kafdrop: <code>obsidiandynamics/kafdrop</code></li><li>Kafka Manager: <code>hlebalbau/kafka-manager:stable</code></li></ul><h3 id="steps" tabindex="-1">Steps <a class="header-anchor" href="#steps" aria-label="Permalink to &quot;Steps&quot;">​</a></h3><p>1.Install Docker</p><ul><li><a href="https://docs.docker.com/docker-for-mac/install/" target="_blank" rel="noreferrer">Mac</a></li><li><a href="https://docs.docker.com/install/linux/docker-ce/debian/" target="_blank" rel="noreferrer">Linux</a></li><li><a href="https://docs.docker.com/docker-for-windows/install/" target="_blank" rel="noreferrer">Windows</a></li></ul><p>2.Modify the directory in file <code>docker-compose.yml</code>, default mount <code>~/Documents/docker/www</code> <code>~/Documents/docker/log</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## On the host</span></span>
<span class="line"><span>mkdir -p ~/Documents/docker/log/php7 ~/Documents/docker/log/php ~/Documents/docker/log/nginx</span></span></code></pre></div><p>3.Build images, create containners, and start them:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker-compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> up</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span></span></code></pre></div><p>4.Maybe you need to do something:</p><ul><li>Modify Nginx configuration in <code>./nginx/conf.d</code>, the default configuration for Laravel and LaravelS already exists</li><li>Bind domain into your host machine. Linux/Mac: <code>/etc/hosts</code>, Windows: <code>C:\\Windows\\System32\\drivers\\etc\\hosts</code></li><li>Run <code>docker-compose restart</code></li></ul><p>5.<a href="https://docs.docker.com/docker-for-mac/networking/#use-cases-and-workarounds" target="_blank" rel="noreferrer">I WANT TO CONNECT FROM A CONTAINER TO A SERVICE ON THE HOST</a> The host has a changing IP address (or none if you have no network access). From 18.03 onwards our recommendation is to connect to the special DNS name <code>host.docker.internal</code>, which resolves to the internal IP address used by the host. This is for development purpose and will not work in a production environment outside of Docker Desktop for Mac.</p>`,20)])])}const E=a(l,[["render",p]]);export{k as __pageData,E as default};
