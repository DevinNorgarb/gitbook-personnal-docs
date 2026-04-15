import{_ as a,o as n,c as e,ae as p}from"./chunks/framework.BGHOrOyn.js";const h=JSON.parse('{"title":"Cloud Init Script to Create a new user","description":"","frontmatter":{},"headers":[],"relativePath":"software-engineering/devops/cloud-init/cloud-init-script-to-create-a-new-user.md","filePath":"software-engineering/devops/cloud-init/cloud-init-script-to-create-a-new-user.md"}'),t={name:"software-engineering/devops/cloud-init/cloud-init-script-to-create-a-new-user.md"};function i(l,s,o,c,r,d){return n(),e("div",null,[...s[0]||(s[0]=[p(`<h1 id="cloud-init-script-to-create-a-new-user" tabindex="-1">Cloud Init Script to Create a new user <a class="header-anchor" href="#cloud-init-script-to-create-a-new-user" aria-label="Permalink to &quot;Cloud Init Script to Create a new user&quot;">​</a></h1><p>In order to set a hashed password, run this command and enter your password when prompted:</p><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">mkpasswd</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> --</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">method</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">SHA</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">512</span></span></code></pre></div><p>The output of the password &quot;test&quot; looks like:</p><pre><code><strong>$6$JhSQSLFN2/bd6u5N$BHAfXwewZ4aqNvtaYxFWfWq8BFU.uYvJc0nHulEZfbWkw3YLKM.1Aql5DHnz0FsTitZUZ8xn1EzxfQLDJin.B0
</strong></code></pre><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## cloud-config</span></span>
<span class="line"><span>users:</span></span>
<span class="line"><span>  - default</span></span>
<span class="line"><span>  - name: devin</span></span>
<span class="line"><span>    passwd: &quot;$6$JhSQSLFN2/bd6u5N$BHAfXwewZ4aqNvtaYxFWfWq8BFU.uYvJc0nHulEZfbWkw3YLKM.1Aql5DHnz0FsTitZUZ8xn1EzxfQLDJin.B0&quot;</span></span>
<span class="line"><span>    shell: /bin/bash</span></span>
<span class="line"><span>    lock_passwd: false</span></span>
<span class="line"><span>    ssh_pwauth: true</span></span>
<span class="line"><span>    chpasswd: { expire: false }</span></span>
<span class="line"><span>    sudo: ALL=(ALL) NOPASSWD:ALL</span></span>
<span class="line"><span>    groups: users, admin, sudo</span></span>
<span class="line"><span>    ssh_authorized_keys:</span></span>
<span class="line"><span>     - &quot;ssh-rsa key goes here&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>autoinstall:</span></span>
<span class="line"><span>    version: 1</span></span>
<span class="line"><span>    identity:</span></span>
<span class="line"><span>        username: devin</span></span>
<span class="line"><span>        password: &quot;$6$JhSQSLFN2/bd6u5N$BHAfXwewZ4aqNvtaYxFWfWq8BFU.uYvJc0nHulEZfbWkw3YLKM.1Aql5DHnz0FsTitZUZ8xn1EzxfQLDJin.B0&quot;</span></span>
<span class="line"><span>    refresh-installer:</span></span>
<span class="line"><span>        update: yes</span></span></code></pre></div><p>Remember to always include <code>#cloud-config</code> at the start of the file</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## cloud-config</span></span></code></pre></div>`,8)])])}const k=a(t,[["render",i]]);export{h as __pageData,k as default};
