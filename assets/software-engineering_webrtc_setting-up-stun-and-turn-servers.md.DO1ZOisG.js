import{_ as i,o as a,c as n,ae as p}from"./chunks/framework.BGHOrOyn.js";const F=JSON.parse('{"title":"Setting up STUN and TURN servers","description":"","frontmatter":{},"headers":[],"relativePath":"software-engineering/webrtc/setting-up-stun-and-turn-servers.md","filePath":"software-engineering/webrtc/setting-up-stun-and-turn-servers.md"}'),t={name:"software-engineering/webrtc/setting-up-stun-and-turn-servers.md"};function l(e,s,h,k,r,d){return a(),n("div",null,[...s[0]||(s[0]=[p(`<h1 id="setting-up-stun-and-turn-servers" tabindex="-1">Setting up STUN and TURN servers <a class="header-anchor" href="#setting-up-stun-and-turn-servers" aria-label="Permalink to &quot;Setting up STUN and TURN servers&quot;">​</a></h1><p><a href="https://www.webrtc-experiment.com/" target="_blank" rel="noreferrer">HOME</a> © <a href="https://muazkhan.com/" target="_blank" rel="noreferrer">Muaz Khan</a> . <a href="http://twitter.com/WebRTCWeb" target="_blank" rel="noreferrer">@WebRTCWeb</a> . <a href="https://github.com/muaz-khan?tab=repositories" target="_blank" rel="noreferrer">Github</a> . <a href="https://github.com/muaz-khan/WebRTC-Experiment/issues?state=open" target="_blank" rel="noreferrer">Latest issues</a> . <a href="https://github.com/muaz-khan/WebRTC-Experiment/commits/master" target="_blank" rel="noreferrer">What&#39;s New?</a></p><blockquote><p>This document is aimed to explain TURN server installation steps for different operating systems.<br></p><ol><li>CoTURN installation on Ubuntu</li><li>restund installation on Ubuntu</li><li>TURN installation on CentOS</li><li>TURN installation on Windows</li><li>reTurnServer installation on Ubuntu</li><li>Pion TURN server</li></ol><p>You can test a TURN <a href="https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice/" target="_blank" rel="noreferrer">here LIVE</a> or use &quot;apt-get install stun&quot; and then &quot;stun domain.com:port&quot;.</p></blockquote><h2 id="top" tabindex="-1">Top <a class="header-anchor" href="#top" aria-label="Permalink to &quot;Top&quot;">​</a></h2><h3 id="coturn-installation-on-ubuntu" tabindex="-1">CoTURN installation on Ubuntu <a class="header-anchor" href="#coturn-installation-on-ubuntu" aria-label="Permalink to &quot;CoTURN installation on Ubuntu&quot;">​</a></h3><p><a href="https://github.com/muaz-khan/RTCMultiConnection/blob/master/dev/IceServersHandler.js" target="_blank" rel="noreferrer">Example LIVE server</a></p><ol><li>Make sure that you&#39;re using latest up-to-dated Ubuntu (TLS 14+)</li><li><h3 id="find-a-useful-ftp-link-for-your-region" tabindex="-1">Find a useful FTP link for your region. <a class="header-anchor" href="#find-a-useful-ftp-link-for-your-region" aria-label="Permalink to &quot;Find a useful FTP link for your region.&quot;">​</a></h3></li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    https://packages.debian.org/jessie/amd64/coturn/download</span></span></code></pre></div><pre><code>\\
Simply copy the link. Don&#39;t try any command yet.
</code></pre><ol start="3"><li><h3 id="modify-sources-list-file" tabindex="-1">Modify sources.list file: <a class="header-anchor" href="#modify-sources-list-file" aria-label="Permalink to &quot;Modify sources.list file:&quot;">​</a></h3></li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    vi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/apt/sources.list</span></span></code></pre></div><pre><code>&lt;br&gt;

### And add above FTP\\_domain in the sources-list. E.g.
</code></pre><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    # at the bottom of the sources.list file</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # assuming that you found this domain:</span></span>
<span class="line"><span>    # http://ftp.hk.debian.org/debian</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    deb http://ftp.hk.debian.org/debian jessie main</span></span>
<span class="line"><span>\`\`\`bash</span></span>
<span class="line"><span>4.  ### Make sure you have installed &quot;Aptitude&quot;:</span></span></code></pre></div><pre><code># https://wiki.debian.org/Aptitude

# update-to-latest version
aptitude update
</code></pre><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ### If </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;aptitude update&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fails</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span></code></pre></div><pre><code># replace &quot;8B48AD6246925553&quot; and &quot;7638D0442B90D010&quot; with the error_key displayed on your OWN-screen

# GPG error: http://ftp.hk.debian.org jessie Release:
# The following signatures could not be verified because the public key is
# not available: NO_PUBKEY 8B48AD6246925553 NO_PUBKEY 7638D0442B90D010 NO_PUBKEY CBF8D6FD518E17E1

# execute below commands

gpg --keyserver pgpkeys.mit.edu --recv-key  8B48AD6246925553
gpg -a --export 8B48AD6246925553 | apt-key add -

gpg --keyserver pgpkeys.mit.edu --recv-key  7638D0442B90D010
gpg -a --export 7638D0442B90D010 | apt-key add -
</code></pre><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">6.</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ### Try &quot;Aptitude&quot; again if failed on initial try:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    aptitude</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">7.</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ### Now install &quot;coturn&quot; package using &quot;aptitude&quot;:</span></span></code></pre></div><pre><code># below command may require [sudo] privileges
aptitude install coturn
</code></pre><div class="language-python vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">python</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Modify following file after &quot;coturn&quot; installation:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-light-font-style:italic;--shiki-dark:#FDAEB7;--shiki-dark-font-style:italic;">\`\`\`python</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    vi </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">etc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">turnserver.conf</span></span></code></pre></div><pre><code>&lt;br&gt;

### Remove all text from the file, and replace with this:
</code></pre><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>    # you can listen ports 3478 and 5349 instead of 80/443</span></span>
<span class="line"><span>    listening-port=80</span></span>
<span class="line"><span>    tls-listening-port=443</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    listening-ip=your-ip-address</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    relay-ip=your-ip-address</span></span>
<span class="line"><span>    external-ip=your-ip-address</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    realm=yourdomain.com</span></span>
<span class="line"><span>    server-name=yourdomain.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    lt-cred-mech</span></span>
<span class="line"><span>    userdb=/etc/turnuserdb.conf</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # use real-valid certificate/privatekey files</span></span>
<span class="line"><span>    cert=/etc/ssl/certificate.pem</span></span>
<span class="line"><span>    pkey=/etc/ssl/private.key</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    no-stdout-log</span></span>
<span class="line"><span>\`\`\`python</span></span>
<span class="line"><span>9.  ### Modify following file after modifying above &quot;turnserver.conf&quot;:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`python</span></span>
<span class="line"><span>    vi /etc/turnuserdb.conf</span></span></code></pre></div><pre><code>&lt;br&gt;

### Remove all text from the file, and replace with this:
</code></pre><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    yourName:yourPassword</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">10.</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ### Instead of &quot;turnuserdb.conf&quot;, you can try following as well:</span></span></code></pre></div><pre><code># rquires: apt-get install sqlite3 libsqlite3-dev
# now: find / -name &#39;turndb&#39;

# vi /etc/turnserver.conf

userdb=/var/lib/turn/turndb

# in this case, please add following:
# lt-cred-mech             # remove or comment this one
oauth                      # add this
user=youruser:yourpassword # add this

# source: askubuntu.com/a/819264
</code></pre><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">11.</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ### Now type following command:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    turnserver</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">12.</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ### Try following if above &quot;turnserver&quot; command fails:</span></span></code></pre></div><pre><code># you can listen ports 3478 and 5349 instead of 80/443

lsof -n -i4TCP:80 | grep LISTEN
lsof -n -i4TCP:443 | grep LISTEN
</code></pre><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>    &lt;br&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    ### Kill &quot;existing&quot; processes using this command:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`bash</span></span>
<span class="line"><span>    kill processId</span></span>
<span class="line"><span>\`\`\`bash</span></span>
<span class="line"><span>13. ### Now type following command again and it should work:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`php</span></span>
<span class="line"><span>    turnserver</span></span>
<span class="line"><span>\`\`\`php</span></span>
<span class="line"><span>14. ### Make sure that ports 80/443 (or 3478/5349) are opened in the firewall:</span></span></code></pre></div><pre><code># you can listen ports 3478 and 5349 instead of 80/443

iptables -A INPUT -p udp --dport 80 -j ACCEPT
iptables -A INPUT -p udp --dport 443 -j ACCEPT
</code></pre><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">15.</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ### Run following command:</span></span></code></pre></div><pre><code># pm2 is strongly recommended
# https://github.com/Unitech/pm2
pm2 start turnserver
pm2 save # after: pm2 startup

# if you do not want to use &quot;pm2&quot;
nohup turnserver &gt; /dev/null 2&gt;&amp;1 &amp;

# or simply
nohup turnserver &amp;
</code></pre><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">16.</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> ### Now check all UDP+TCP ports:</span></span></code></pre></div><pre><code># recommended
netstat -tulpn

# or
netstat -nat | grep LISTEN
</code></pre><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>    \\</span></span>
<span class="line"><span>    You will see that port 80/443 is listened by turnserver (both for UDP/TCP).</span></span>
<span class="line"><span>17. ### Otherwise (alternative coTURN installation solutions):</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`bash</span></span>
<span class="line"><span>    // Please follow this link:</span></span>
<span class="line"><span>    groups.google.com/d/msg/easyrtc/ypjJ5Yu3wZM/u5Lq6VNfabcJ</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // or</span></span>
<span class="line"><span>    apt-get install coturn</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // or: stackoverflow.com/a/37290864</span></span>
<span class="line"><span>    sudo -i     # ignore if you already in admin mode</span></span>
<span class="line"><span>    apt-get update &amp;&amp; apt-get install libssl-dev libevent-dev libhiredis-dev make -y    # install the dependencies</span></span>
<span class="line"><span>    wget -O turn.tar.gz http://turnserver.open-sys.org/downloads/v4.5.0.3/turnserver-4.5.0.3.tar.gz     # Download the source tar</span></span>
<span class="line"><span>    tar -zxvf turn.tar.gz     # unzip</span></span>
<span class="line"><span>    cd turnserver-*</span></span>
<span class="line"><span>    ./configure</span></span>
<span class="line"><span>    make &amp;&amp; make install </span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // or: stackoverflow.com/a/52408246</span></span></code></pre></div><h3 id="top-1" tabindex="-1">Top <a class="header-anchor" href="#top-1" aria-label="Permalink to &quot;Top&quot;">​</a></h3><h3 id="restund-installation-on-ubuntu-via" tabindex="-1">restund installation on Ubuntu (<a href="https://www.html5rocks.com/en/tutorials/webrtc/infrastructure/#deploying-stun-and-turn-servers" target="_blank" rel="noreferrer">via</a>) <a class="header-anchor" href="#restund-installation-on-ubuntu-via" aria-label="Permalink to &quot;restund installation on Ubuntu ([via](https://www.html5rocks.com/en/tutorials/webrtc/infrastructure/#deploying-stun-and-turn-servers))&quot;">​</a></h3><p>&quot;make&quot; and &quot;gcc&quot; are required. <a href="https://github.com/muaz-khan/RTCMultiConnection/blob/master/dev/IceServersHandler.js#L100-L102" target="_blank" rel="noreferrer">Example LIVE server</a></p><ol><li><h3 id="download-re" tabindex="-1">Download &quot;re&quot;: <a class="header-anchor" href="#download-re" aria-label="Permalink to &quot;Download &quot;re&quot;:&quot;">​</a></h3></li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /home/restund</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /home/restund</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # via: http://creytiv.com/pub/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://webrtcweb.com/re-latest.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    tar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> zxvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> re-latest.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> re-0.4.17</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    make</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">          # &quot;sudo&quot; is preferred</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">2.</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ### Download &quot;restund&quot;:</span></span></code></pre></div><pre><code># via: http://www.creytiv.com/pub/
# choose latest version
# replace &quot;0.4.12&quot; with latesat version (06-Oct-2015)
cd ..
wget http://webrtcweb.com/restund-0.4.12.tar.gz
tar zxvf restund-0.4.12.tar.gz
cd restund-0.4.12
make
make install          # &quot;sudo&quot; is preferred
</code></pre><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">3.</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ### Modify &quot;etc/restund.conf&quot; file:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    It</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> will</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> be</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> located</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> at:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restund-0.4.12/etc/restund.conf</span></span></code></pre></div><pre><code># cd etc &amp;&amp; vi restund.conf
# &quot;etc&quot; is a directory inside &quot;restund-0.4.12&quot;

udp_listen      your-ip:4455
tcp_listen      your-ip:5544  # different port than UDP

turn_relay_addr     your-ip

debug           yes
realm           yourdomain.com

# you will get a HTTP server for stats
# example stats:
#       Version:    0.4.12
#       Built:  Nov 10 2016 23:39:41
#       Uptime: 21 hours 25 mins 56 secs
# LIVE Example: http://webrtcweb.com:4050/

status_udp_addr     your-ip
status_udp_port     33000
status_http_addr    your-ip
status_http_port    4050

# filedb (your username/password are stored in this file)
filedb_path     /etc/restund.auth

# modules (STUN messages are processed in module loading order)
module_path     /usr/local/lib/restund/modules
module          stat.so
module          binding.so
module          auth.so
module          turn.so
module          filedb.so
module          syslog.so
module          status.so

syncinterval        600
auth_nonce_expiry   3600
</code></pre><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">4.</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ### Modify &quot;etc/restund.auth&quot; file:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    It</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> will</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> be</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> located</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> at:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restund-0.4.12/etc/restund.auth</span></span></code></pre></div><pre><code># remove default credentials
</code></pre><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>    First of all, execute this command:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`bash</span></span>
<span class="line"><span>    cd ..</span></span>
<span class="line"><span>    util/genha1.sh username yourdomain.com password</span></span></code></pre></div><pre><code>Above command will print something. Copy whatever is printed; and paste inside &quot;etc/restund.auth&quot;:
</code></pre><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    cd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> etc</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    vi</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> restund</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">auth</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # copy/paste inside the &quot;restund.auth&quot; file</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    username</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sha1</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`php</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">5.  ### Copy all &quot;etc&quot; files to &quot;/etc/&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    cd</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ..</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # move .conf and .auth files to /etc/ directory</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    cp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> .</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">etc</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* /etc/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # or use absolute path:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # cp /home/restund/restund-0.4.12/etc/ /etc/</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    \`\`\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">6.  ### Run the &quot;restund&quot; server</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    \`\`\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    restund</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    \`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    Above command will print something like this:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    \`\`\`</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    udp listen: your-ip:4455</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    tcp listen: your-ip:5544</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    stat: module loaded</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    binding: module loaded</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    auth: module loaded (nonce_expiry=3600s)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    turn: lifetime=600 ext=your-ip ext6=::1 bsz=512</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    filedb: module loaded (/etc/restund.auth)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    syslog: module loaded facility=24</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    status: module loaded (udp=your-ip:33000 http=your-ip:4050)</span></span></code></pre></div><pre><code>You can open stats server here: http://your-ip:4050
</code></pre><ol start="7"><li><h3 id="if-webrtc-access-to-restund-fails" tabindex="-1">If webrtc access to &quot;restund&quot; fails: <a class="header-anchor" href="#if-webrtc-access-to-restund-fails" aria-label="Permalink to &quot;If webrtc access to &quot;restund&quot; fails:&quot;">​</a></h3></li></ol><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    iptables</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">I</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> INPUT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> eth0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> udp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> --</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">dport</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 33000</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">j</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ACCEPT</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    iptables</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">I</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> INPUT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> eth0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> udp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> --</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">dport</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4455</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">j</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ACCEPT</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    iptables</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">I</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> INPUT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> eth0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tcp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> --</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">dport</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4455</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">j</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ACCEPT</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    iptables</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">I</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> INPUT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> eth0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> udp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> --</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">dport</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5544</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">j</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ACCEPT</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    iptables</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">I</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> INPUT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> eth0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tcp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> --</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">dport</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5544</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">j</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ACCEPT</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    iptables</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">I</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> INPUT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> eth0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tcp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> --</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">dport</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4050</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">j</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ACCEPT</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`php</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">8. Now open this: http://your-ip.com:4050/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">### Top</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">### TURN installation on CentOS</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&gt; Use &quot;sudo&quot; if you see &quot;permission-denied&quot; errors.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">1.  ### First Step: Download &amp; Install Prerequisite for CentOS</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    yum</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> install</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">y</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> make</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> gcc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> gcc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">c</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> wget</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    yum</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> install</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">y</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> openssl</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">devel</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> libevent</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> libevent</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">devel</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mysql</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">devel</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> mysql</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">server</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`php</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">2.  ### Second Step: Download &amp; Install LibEvent modules</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> https</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//github.com/downloads/libevent/libevent/libevent-2.0.21-stable.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> xvfz</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> libevent</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.0.21</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">stable</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tar</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">gz</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    cd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> libevent</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2.0.21</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">stable</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;&amp;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> .</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">configure</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    make</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;&amp;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> make</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> install</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;&amp;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> cd</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ..</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # you can use &quot;sudo&quot; if permission-denied kind of erros occurred.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # sudo make &amp;&amp; sudo make install &amp;&amp; cd ..</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`bash</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">3.  ### Third Step: [Download &amp; Install](https://code.google.com/p/rfc5766-turn-server/wiki/newDownloadsSite) TURN modules</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">bash</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    wget</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//turnserver.open-sys.org/downloads/v3.2.3.8/turnserver-3.2.3.8.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    tar</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">xvzf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> turnserver</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.2.3.8</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tar</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">gz</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    cd</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> turnserver</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3.2.3.8</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;&amp;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> .</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">configure</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    make</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &amp;&amp;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> make</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> install</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`bash</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">4.  ### Fifth Step: Configure &quot;turnserver.conf&quot; file</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">bash</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    vi</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> /</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">etc</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">turnserver</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">turnserver</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">conf</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # setting static accounts</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Remember, &quot;static&quot; accounts are not dynamically checked by the turnserver process.</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    user</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">username</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">password</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # listen ports</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    listening</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">port</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2222</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    listening</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ip</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">127.1.1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Now press &quot;insert&quot; key; then &quot;Esc&quot; key</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # Then type:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    :</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">wq</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">         #-- this command will save your settings and close turnserver.conf file</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # if you don&#39;t want to save settings; and quite. Simply type:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    :</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">q</span></span></code></pre></div><pre><code>You can:

1. Use Only STUN
2. Use Only TURN
3. Use Both STUN and TURN
4. Discard requests from all SSL/TLS version of protocols
5. Use short-live credentials. Other authentication mechanisms coming soon in next few weeks.
6. You can disable DTLS and TLS.
7. You can set both static and dynamic accounts.
8. You can give anonymous access to TURN server as well.
9. You can set credentials for stun-only option as well; usually STUN-binding requests are anonymous.
</code></pre><ol start="5"><li><h3 id="sixth-step-run-turn-server-instance" tabindex="-1">Sixth Step: Run TURN server instance <a class="header-anchor" href="#sixth-step-run-turn-server-instance" aria-label="Permalink to &quot;Sixth Step: Run TURN server instance&quot;">​</a></h3></li></ol><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/turnserver/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    turnserver</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  ip:port</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> turnuserdb.conf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> turnserver.conf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> turn-username</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ip:port</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> turn-password</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    \`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    1.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Replace &quot;ip:port&quot; with yours! E.g. 127.1.1:2222:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    2.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`\`\`</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">       turnserver</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  127.1.1:2222</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> turnuserdb.conf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> turnserver.conf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> turn-username</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 127.1.1:2222</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> turn-password</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    3.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Replace &quot;turn-username&quot; with custom-username; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;turn-password&quot; with custom-password.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    4.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`\`\`</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">       turnserver</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  127.1.1:2222</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> turnuserdb.conf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> turnserver.conf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> custom-username</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 127.1.1:2222</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> custom-password</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">6.</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ### Last Step: &quot;Permanently&quot; run TURN server instance</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">python</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    nohup</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> turnserver</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  ip:port</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -a</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> turnuserdb.conf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> turnserver.conf</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> turn-username</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ip:port</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> turn-password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;</span></span></code></pre></div><pre><code>1. You can see that the entire TURN execution command is placed between &quot;nohup&quot; and &quot;&amp;&quot;.
2. \`\`\`
   nohup TURN-execution-command &amp;
</code></pre><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>### Top</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### TURN installation on Windows</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; Alternatives: [STUNTMAN](http://www.stunprotocol.org/) or [C# STUN Client](http://www.codeproject.com/Articles/18492/STUN-Client) or [Pion TURN-server for Windows](https://github.com/pions/turn/releases).</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Please check PION link above for a **Windows TURN client**.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Note: Below section is taken from [slideshare](http://www.slideshare.net/amiteshawa/web-rtc-media-stra); and its credit goes to @amiteshawa!</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. Install &quot;Cygwin&quot; application</span></span>
<span class="line"><span>2. Follow all steps from above section. E.g. install all dependencies; LibEvent and TURN modules.</span></span>
<span class="line"><span>3. You&#39;ll face some issues when invoking &quot;./configure&quot; command for TURN configuration:</span></span>
<span class="line"><span>   1. **Missing libpq.a, hiredis, postgreSql**</span></span>
<span class="line"><span>   2. You can ignore them, because these modules are optional</span></span>
<span class="line"><span>4. During &quot;make&quot; command invocation; you&#39;ll face error like &quot;**error: &#39;struct sockaddr\\_in&#39; has no member named &#39;sin\\_len&#39;**&quot;</span></span>
<span class="line"><span>5.  Edit &quot;na\\_turn\\_ioaddr.c&quot; and comment line number &quot;169&quot;:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\`\`\`python</span></span>
<span class="line"><span>    vi /turnserver-1.8.4.0/src/client/na_turn_ioaddr.c</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    # commenting line number #169</span></span>
<span class="line"><span>    # addr-&gt;s4.sin_len = sizeof(struct sockaddr_in);</span></span>
<span class="line"><span>\`\`\`python</span></span>
<span class="line"><span>6. Now, &quot;make&quot; and &quot;make install&quot; commands for TURN modules installation will work.</span></span>
<span class="line"><span>7. Then copy &quot;turnserver.conf&quot; file from &quot;../examples/etc/&quot; directory to &quot;/usr/local/etc/&quot;:</span></span>
<span class="line"><span>8. \`\`\`</span></span>
<span class="line"><span>   cp /turnserver-1.8.4.0/examples/etc/turnserver.conf /usr/local/etc/</span></span>
<span class="line"><span>\`\`\`python</span></span>
<span class="line"><span>9. Now, you can follow &quot;fifth&quot; step from previous section to edit &quot;turnserver.conf&quot; for setting &quot;username&quot;, &quot;password&quot;, &quot;listening-port&quot; and &quot;listening-ip&quot;.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Top</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### reTurnServer installation on Ubuntu</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1.  ### First Step: Install reTurnServer:</span></span></code></pre></div><pre><code># Ubuntu
apt-get install resiprocate-turn-server

# CentOS
yum install resiprocate-turn-server
</code></pre><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">2.</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ### Second Step: Edit &quot;/etc/reTurn/reTurnServer.config&quot; file:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    TurnAddress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> = your-first-ip</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    AltStunAddress</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> = your-second-ip</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    TurnPort</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3478</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    AltStunPort</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5349</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    AuthenticationRealm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> = domain.com</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    UserDatabaseFile</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> = /etc/reTurn/users.txt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    UserDatabaseHashedPasswords</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # required for HashString</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # for more info:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # https://github.com/resiprocate/resiprocate/blob/master/reTurn/reTurnServer.config</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bash</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">3.</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ### Next Step: Edit &quot;/etc/reTurn/users.txt&quot; file:</span></span></code></pre></div><pre><code># first of all, execute this command:
# echo -n username:domain.com:password | md5sum

# you will get a HASH string: 32 chars
# domain.com must match &quot;AuthenticationRealm&quot; above &quot;reTurnServer.config&quot;
username:AboveHashString:domain.com:authorized

# more info:
# https://github.com/resiprocate/resiprocate/blob/master/reTurn/users.txt
</code></pre><div class="language-php vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4.</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  ### Last Step: ReStart reTurnServer:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`php</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    service resiprocate-turn-server restart</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  You</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> can</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> check</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> and</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> addresses</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> reTurnServer</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> is</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> listenning</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`php</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    netstat -nlp | grep reTurnServer</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">php</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  In</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> your</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> HTML</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JavaScript</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> file</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">you</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> will</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> original</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">NOT</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> the</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> HashString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\`\`\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">bash</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    iceServer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> =&gt; {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      urls</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: &#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">turn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">domain</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">com</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:3478&#39;,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      credential</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: &#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">orignal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">password</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&#39;, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// NOT Hash</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      username</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: &#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">username</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span></code></pre></div><h3 id="top-2" tabindex="-1">Top <a class="header-anchor" href="#top-2" aria-label="Permalink to &quot;Top&quot;">​</a></h3><h3 id="pion-turn-server" tabindex="-1">Pion TURN server <a class="header-anchor" href="#pion-turn-server" aria-label="Permalink to &quot;Pion TURN server&quot;">​</a></h3><p>A simple extendable Golang TURN server for Windows, Linux, Darwin and FreeBSD.</p><ol><li>Create a new directory (optional):</li></ol><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    mkdir pions</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cd pions</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`javascript</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">2.  Download the TURN server&#39;s source: (replace &quot;1.0.3&quot; with [latest release](https://github.com/pions/turn/releases))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">javascript</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    wget </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">q </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">https</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//github.com/pions/turn/releases/download/1.0.3/simple-turn-linux-amd64</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    # </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">linux</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:   simple</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">turn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">linux</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">386</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> or simple</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">turn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">linux</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">amd64</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    # </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">darwin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:  simple</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">turn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">darwin</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">amd64</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    # </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">freebsd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: simple</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">turn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">freebsd</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">386</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> and simple</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">turn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">freebsd</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">amd64</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    # </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">windows</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: simple</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">turn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">windows</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">386.exe and simple</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">turn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">windows</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">amd64.exe</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`php</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">3.  Give read-write permissions to the DIR:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">php</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    chmod </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">x simple</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">turn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">linux</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">amd64</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`php</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">4.  Set username, password and port: (using EXPORT commands)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">php</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    export</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> USERS</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;username=password&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    export</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> REALM</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">domain.com</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    export</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> UDP_PORT</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3478</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`php</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">5.  Now run the pions turn server:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">php</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">simple</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">turn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">linux</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">amd64</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    # or use nohup</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    nohup .</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">simple</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">turn</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">linux</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">amd64 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`\`\`html</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">6. To check latest releases: [https://github.com/pions/turn/releases](https://github.com/pions/turn/releases)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&lt;br&gt;</span></span></code></pre></div>`,63)])])}const c=i(t,[["render",l]]);export{F as __pageData,c as default};
