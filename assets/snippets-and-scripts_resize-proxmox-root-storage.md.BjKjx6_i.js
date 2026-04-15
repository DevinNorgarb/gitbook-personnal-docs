import{_ as a,o as e,c as n,ae as o}from"./chunks/framework.BGHOrOyn.js";const x=JSON.parse('{"title":"Resize Proxmox root storage","description":"","frontmatter":{},"headers":[],"relativePath":"snippets-and-scripts/resize-proxmox-root-storage.md","filePath":"snippets-and-scripts/resize-proxmox-root-storage.md"}'),p={name:"snippets-and-scripts/resize-proxmox-root-storage.md"};function t(r,s,i,l,c,d){return e(),n("div",null,[...s[0]||(s[0]=[o(`<h1 id="resize-proxmox-root-storage" tabindex="-1">Resize Proxmox root storage <a class="header-anchor" href="#resize-proxmox-root-storage" aria-label="Permalink to &quot;Resize Proxmox root storage&quot;">​</a></h1><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>## Check disk space before</span></span>
<span class="line"><span>df -h</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # Delete local-lvm storage in gui</span></span>
<span class="line"><span>lvremove /dev/pve/data</span></span>
<span class="line"><span>lvresize -l +100%FREE /dev/pve/root</span></span>
<span class="line"><span>resize2fs /dev/mapper/pve-root</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Check disk space after</span></span>
<span class="line"><span>df -h</span></span></code></pre></div>`,2)])])}const _=a(p,[["render",t]]);export{x as __pageData,_ as default};
