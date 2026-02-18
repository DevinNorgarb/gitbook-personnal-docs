# Setting up STUN and TURN servers

[HOME](https://www.webrtc-experiment.com/) © [Muaz Khan](https://muazkhan.com/) . [@WebRTCWeb](http://twitter.com/WebRTCWeb) . [Github](https://github.com/muaz-khan?tab=repositories) . [Latest issues](https://github.com/muaz-khan/WebRTC-Experiment/issues?state=open) . [What's New?](https://github.com/muaz-khan/WebRTC-Experiment/commits/master)

> This document is aimed to explain TURN server installation steps for different operating systems.<br>
>
> 1. CoTURN installation on Ubuntu
> 2. restund installation on Ubuntu
> 3. TURN installation on CentOS
> 4. TURN installation on Windows
> 5. [reTurnServer installation on Ubuntu](/broken/pages/1zkA8mihm9xdxUJI60IS)
> 6. Pion TURN server
>
> You can test a TURN [here LIVE](https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice/) or use "apt-get install stun" and then "stun domain.com:port".

### Top

### CoTURN installation on Ubuntu

[Example LIVE server](https://github.com/muaz-khan/RTCMultiConnection/blob/master/dev/IceServersHandler.js)

1. Make sure that you're using latest up-to-dated Ubuntu (TLS 14+)
2.  ### Find a useful FTP link for your region.

    ```
    https://packages.debian.org/jessie/amd64/coturn/download
    ```

    \
    Simply copy the link. Don't try any command yet.
3.  ### Modify sources.list file:

    ```
    vi /etc/apt/sources.list
    ```

    <br>

    ### And add above FTP\_domain in the sources-list. E.g.

    ```
    # at the bottom of the sources.list file

    # assuming that you found this domain:
    # http://ftp.hk.debian.org/debian

    deb http://ftp.hk.debian.org/debian jessie main
    ```
4.  ### Make sure you have installed "Aptitude":

    ```
    # https://wiki.debian.org/Aptitude

    # update-to-latest version
    aptitude update
    ```
5.  ### If "aptitude update" fails:

    ```
    # replace "8B48AD6246925553" and "7638D0442B90D010" with the error_key displayed on your OWN-screen

    # GPG error: http://ftp.hk.debian.org jessie Release:
    # The following signatures could not be verified because the public key is
    # not available: NO_PUBKEY 8B48AD6246925553 NO_PUBKEY 7638D0442B90D010 NO_PUBKEY CBF8D6FD518E17E1

    # execute below commands

    gpg --keyserver pgpkeys.mit.edu --recv-key  8B48AD6246925553
    gpg -a --export 8B48AD6246925553 | apt-key add -

    gpg --keyserver pgpkeys.mit.edu --recv-key  7638D0442B90D010
    gpg -a --export 7638D0442B90D010 | apt-key add -
    ```
6.  ### Try "Aptitude" again if failed on initial try:

    ```
    aptitude update
    ```
7.  ### Now install "coturn" package using "aptitude":

    ```
    # below command may require [sudo] privileges
    aptitude install coturn
    ```
8.  ### Modify following file after "coturn" installation:

    ```
    vi /etc/turnserver.conf
    ```

    <br>

    ### Remove all text from the file, and replace with this:

    ```
    # you can listen ports 3478 and 5349 instead of 80/443
    listening-port=80
    tls-listening-port=443

    listening-ip=your-ip-address

    relay-ip=your-ip-address
    external-ip=your-ip-address

    realm=yourdomain.com
    server-name=yourdomain.com

    lt-cred-mech
    userdb=/etc/turnuserdb.conf

    # use real-valid certificate/privatekey files
    cert=/etc/ssl/certificate.pem
    pkey=/etc/ssl/private.key

    no-stdout-log
    ```
9.  ### Modify following file after modifying above "turnserver.conf":

    ```
    vi /etc/turnuserdb.conf
    ```

    <br>

    ### Remove all text from the file, and replace with this:

    ```
    yourName:yourPassword
    ```
10. ### Instead of "turnuserdb.conf", you can try following as well:

    ```
    # rquires: apt-get install sqlite3 libsqlite3-dev
    # now: find / -name 'turndb'

    # vi /etc/turnserver.conf

    userdb=/var/lib/turn/turndb

    # in this case, please add following:
    # lt-cred-mech             # remove or comment this one
    oauth                      # add this
    user=youruser:yourpassword # add this

    # source: askubuntu.com/a/819264
    ```
11. ### Now type following command:

    ```
    turnserver
    ```
12. ### Try following if above "turnserver" command fails:

    ```
    # you can listen ports 3478 and 5349 instead of 80/443

    lsof -n -i4TCP:80 | grep LISTEN
    lsof -n -i4TCP:443 | grep LISTEN
    ```

    <br>

    ### Kill "existing" processes using this command:

    ```
    kill processId
    ```
13. ### Now type following command again and it should work:

    ```
    turnserver
    ```
14. ### Make sure that ports 80/443 (or 3478/5349) are opened in the firewall:

    ```
    # you can listen ports 3478 and 5349 instead of 80/443

    iptables -A INPUT -p udp --dport 80 -j ACCEPT
    iptables -A INPUT -p udp --dport 443 -j ACCEPT
    ```
15. ### Run following command:

    ```
    # pm2 is strongly recommended
    # https://github.com/Unitech/pm2
    pm2 start turnserver
    pm2 save # after: pm2 startup

    # if you do not want to use "pm2"
    nohup turnserver > /dev/null 2>&1 &

    # or simply
    nohup turnserver &
    ```
16. ### Now check all UDP+TCP ports:

    ```
    # recommended
    netstat -tulpn

    # or
    netstat -nat | grep LISTEN
    ```

    \
    You will see that port 80/443 is listened by turnserver (both for UDP/TCP).
17. ### Otherwise (alternative coTURN installation solutions):

    ```
    // Please follow this link:
    groups.google.com/d/msg/easyrtc/ypjJ5Yu3wZM/u5Lq6VNfabcJ

    // or
    apt-get install coturn

    // or: stackoverflow.com/a/37290864
    sudo -i     # ignore if you already in admin mode
    apt-get update && apt-get install libssl-dev libevent-dev libhiredis-dev make -y    # install the dependencies
    wget -O turn.tar.gz http://turnserver.open-sys.org/downloads/v4.5.0.3/turnserver-4.5.0.3.tar.gz     # Download the source tar
    tar -zxvf turn.tar.gz     # unzip
    cd turnserver-*
    ./configure
    make && make install 

    // or: stackoverflow.com/a/52408246
    ```

### Top

### restund installation on Ubuntu ([via](https://www.html5rocks.com/en/tutorials/webrtc/infrastructure/#deploying-stun-and-turn-servers))

"make" and "gcc" are required. [Example LIVE server](https://github.com/muaz-khan/RTCMultiConnection/blob/master/dev/IceServersHandler.js#L100-L102)

1.  ### Download "re":

    ```
    mkdir /home/restund
    cd /home/restund

    # via: http://creytiv.com/pub/
    wget http://webrtcweb.com/re-latest.tar.gz
    tar zxvf re-latest.tar.gz
    cd re-0.4.17
    make
    make install          # "sudo" is preferred
    ```
2.  ### Download "restund":

    ```
    # via: http://www.creytiv.com/pub/
    # choose latest version
    # replace "0.4.12" with latesat version (06-Oct-2015)
    cd ..
    wget http://webrtcweb.com/restund-0.4.12.tar.gz
    tar zxvf restund-0.4.12.tar.gz
    cd restund-0.4.12
    make
    make install          # "sudo" is preferred
    ```
3.  ### Modify "etc/restund.conf" file:

    It will be located at: restund-0.4.12/etc/restund.conf

    ```
    # cd etc && vi restund.conf
    # "etc" is a directory inside "restund-0.4.12"

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
    ```
4.  ### Modify "etc/restund.auth" file:

    It will be located at: restund-0.4.12/etc/restund.auth

    ```
    # remove default credentials
    ```

    First of all, execute this command:

    ```
    cd ..
    util/genha1.sh username yourdomain.com password
    ```

    Above command will print something. Copy whatever is printed; and paste inside "etc/restund.auth":

    ```
    cd etc
    vi restund.auth


    # copy/paste inside the "restund.auth" file
    username:sha1
    ```
5.  ### Copy all "etc" files to "/etc/"

    ```
    cd ..

    # move .conf and .auth files to /etc/ directory
    cp ./etc/* /etc/

    # or use absolute path:
    # cp /home/restund/restund-0.4.12/etc/ /etc/
    ```
6.  ### Run the "restund" server

    ```
    restund
    ```

    Above command will print something like this:

    ```
    udp listen: your-ip:4455
    tcp listen: your-ip:5544
    stat: module loaded
    binding: module loaded
    auth: module loaded (nonce_expiry=3600s)
    turn: lifetime=600 ext=your-ip ext6=::1 bsz=512
    filedb: module loaded (/etc/restund.auth)
    syslog: module loaded facility=24
    status: module loaded (udp=your-ip:33000 http=your-ip:4050)
    ```

    You can open stats server here: http://your-ip:4050
7.  ### If webrtc access to "restund" fails:

    ```
    iptables -I INPUT 1 -i eth0 -p udp --dport 33000 -j ACCEPT

    iptables -I INPUT 1 -i eth0 -p udp --dport 4455 -j ACCEPT
    iptables -I INPUT 1 -i eth0 -p tcp --dport 4455 -j ACCEPT

    iptables -I INPUT 1 -i eth0 -p udp --dport 5544 -j ACCEPT
    iptables -I INPUT 1 -i eth0 -p tcp --dport 5544 -j ACCEPT

    iptables -I INPUT 1 -i eth0 -p tcp --dport 4050 -j ACCEPT
    ```
8. Now open this: http://your-ip.com:4050/

### Top

### TURN installation on CentOS

> Use "sudo" if you see "permission-denied" errors.

1.  ### First Step: Download & Install Prerequisite for CentOS

    ```
    yum install -y make gcc cc gcc-c++ wget
    yum install -y openssl-devel libevent libevent-devel mysql-devel mysql-server
    ```
2.  ### Second Step: Download & Install LibEvent modules

    ```
    wget https://github.com/downloads/libevent/libevent/libevent-2.0.21-stable.tar.gz
    tar xvfz libevent-2.0.21-stable.tar.gz
    cd libevent-2.0.21-stable && ./configure
    make && make install && cd ..

    # you can use "sudo" if permission-denied kind of erros occurred.
    # sudo make && sudo make install && cd ..
    ```
3.  ### Third Step: [Download & Install](https://code.google.com/p/rfc5766-turn-server/wiki/newDownloadsSite) TURN modules

    ```
    wget http://turnserver.open-sys.org/downloads/v3.2.3.8/turnserver-3.2.3.8.tar.gz
    tar -xvzf turnserver-3.2.3.8.tar.gz
    cd turnserver-3.2.3.8 && ./configure
    make && make install
    ```
4.  ### Fifth Step: Configure "turnserver.conf" file

    ```
    vi /etc/turnserver/turnserver.conf

    # setting static accounts
    # Remember, "static" accounts are not dynamically checked by the turnserver process.
    user=username:password

    # listen ports
    listening-port=2222
    listening-ip=127.1.1

    # Now press "insert" key; then "Esc" key
    # Then type:
    :wq         #-- this command will save your settings and close turnserver.conf file

    # if you don't want to save settings; and quite. Simply type:
    :q
    ```

    You can:

    1. Use Only STUN
    2. Use Only TURN
    3. Use Both STUN and TURN
    4. Discard requests from all SSL/TLS version of protocols
    5. Use short-live credentials. Other authentication mechanisms coming soon in next few weeks.
    6. You can disable DTLS and TLS.
    7. You can set both static and dynamic accounts.
    8. You can give anonymous access to TURN server as well.
    9. You can set credentials for stun-only option as well; usually STUN-binding requests are anonymous.
5.  ### Sixth Step: Run TURN server instance

    ```
    cd /etc/turnserver/

    turnserver -v -r  ip:port -a -b turnuserdb.conf -c turnserver.conf -u turn-username -r ip:port -p turn-password
    ```

    1. Replace "ip:port" with yours! E.g. 127.1.1:2222:
    2. ```
       turnserver -v -r  127.1.1:2222 -a -b turnuserdb.conf -c turnserver.conf -u turn-username -r 127.1.1:2222 -p turn-password
       ```
    3. Replace "turn-username" with custom-username; and "turn-password" with custom-password.
    4. ```
       turnserver -v -r  127.1.1:2222 -a -b turnuserdb.conf -c turnserver.conf -u custom-username -r 127.1.1:2222 -p custom-password
       ```
6.  ### Last Step: "Permanently" run TURN server instance

    ```
    nohup turnserver -v -r  ip:port -a -b turnuserdb.conf -c turnserver.conf -u turn-username -r ip:port -p turn-password &
    ```

    1. You can see that the entire TURN execution command is placed between "nohup" and "&".
    2. ```
       nohup TURN-execution-command &
       ```

### Top

### TURN installation on Windows

> Alternatives: [STUNTMAN](http://www.stunprotocol.org/) or [C# STUN Client](http://www.codeproject.com/Articles/18492/STUN-Client) or [Pion TURN-server for Windows](https://github.com/pions/turn/releases).

Please check PION link above for a **Windows TURN client**.

Note: Below section is taken from [slideshare](http://www.slideshare.net/amiteshawa/web-rtc-media-stra); and its credit goes to @amiteshawa!

1. Install "Cygwin" application
2. Follow all steps from above section. E.g. install all dependencies; LibEvent and TURN modules.
3. You'll face some issues when invoking "./configure" command for TURN configuration:
   1. **Missing libpq.a, hiredis, postgreSql**
   2. You can ignore them, because these modules are optional
4. During "make" command invocation; you'll face error like "**error: 'struct sockaddr\_in' has no member named 'sin\_len'**"
5.  Edit "na\_turn\_ioaddr.c" and comment line number "169":

    ```
    vi /turnserver-1.8.4.0/src/client/na_turn_ioaddr.c

    # commenting line number #169
    # addr->s4.sin_len = sizeof(struct sockaddr_in);
    ```
6. Now, "make" and "make install" commands for TURN modules installation will work.
7. Then copy "turnserver.conf" file from "../examples/etc/" directory to "/usr/local/etc/":
8. ```
   cp /turnserver-1.8.4.0/examples/etc/turnserver.conf /usr/local/etc/
   ```
9. Now, you can follow "fifth" step from previous section to edit "turnserver.conf" for setting "username", "password", "listening-port" and "listening-ip".

### Top

### [reTurnServer installation on Ubuntu](/broken/pages/1zkA8mihm9xdxUJI60IS)

1.  ### First Step: Install reTurnServer:

    ```
    # Ubuntu
    apt-get install resiprocate-turn-server

    # CentOS
    yum install resiprocate-turn-server
    ```
2.  ### Second Step: Edit "/etc/reTurn/reTurnServer.config" file:

    ```
    TurnAddress = your-first-ip
    AltStunAddress = your-second-ip

    TurnPort = 3478
    AltStunPort = 5349

    AuthenticationRealm = domain.com

    UserDatabaseFile = /etc/reTurn/users.txt
    UserDatabaseHashedPasswords = true # required for HashString

    # for more info:
    # https://github.com/resiprocate/resiprocate/blob/master/reTurn/reTurnServer.config
    ```
3.  ### Next Step: Edit "/etc/reTurn/users.txt" file:

    ```
    # first of all, execute this command:
    # echo -n username:domain.com:password | md5sum

    # you will get a HASH string: 32 chars
    # domain.com must match "AuthenticationRealm" above "reTurnServer.config"
    username:AboveHashString:domain.com:authorized

    # more info:
    # https://github.com/resiprocate/resiprocate/blob/master/reTurn/users.txt
    ```
4.  ### Last Step: ReStart reTurnServer:

    ```
    service resiprocate-turn-server restart
    ```
5.  You can check ports and addresses reTurnServer is listenning on:

    ```
    netstat -nlp | grep reTurnServer
    ```
6.  In your HTML-JavaScript file, you will use original password, NOT the HashString:

    ```
    iceServer => {
      urls: 'turn:domain.com:3478',
      credential: 'orignal-password', // NOT Hash
      username: 'username'
    }
    ```

### Top

### Pion TURN server

A simple extendable Golang TURN server for Windows, Linux, Darwin and FreeBSD.

1.  Create a new directory (optional):

    ```
    mkdir pions
    cd pions
    ```
2.  Download the TURN server's source: (replace "1.0.3" with [latest release](https://github.com/pions/turn/releases))

    ```
    wget -q https://github.com/pions/turn/releases/download/1.0.3/simple-turn-linux-amd64

    # linux:   simple-turn-linux-386 or simple-turn-linux-amd64
    # darwin:  simple-turn-darwin-amd64
    # freebsd: simple-turn-freebsd-386 and simple-turn-freebsd-amd64
    # windows: simple-turn-windows-386.exe and simple-turn-windows-amd64.exe
    ```
3.  Give read-write permissions to the DIR:

    ```
    chmod +x simple-turn-linux-amd64
    ```
4.  Set username, password and port: (using EXPORT commands)

    ```
    export USERS='username=password'
    export REALM=domain.com
    export UDP_PORT=3478
    ```
5.  Now run the pions turn server:

    ```
    ./simple-turn-linux-amd64

    # or use nohup
    nohup ./simple-turn-linux-amd64 &
    ```
6. To check latest releases: [https://github.com/pions/turn/releases](https://github.com/pions/turn/releases)

<br>
