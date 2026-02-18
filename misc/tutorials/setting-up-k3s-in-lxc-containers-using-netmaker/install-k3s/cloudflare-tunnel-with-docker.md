# Cloudflare Tunnel with Docker

There’s been a few times where I needed to setup access to an internal web application but I couldn’t put it on 443 or 80 because something else was using those ports and a reverse proxy would break one of the applications. A solution to this is Cloudflare Tunnel.

Cloudflare Tunnel used to be called Warp when it was in beta and was eventually renamed to Argo Tunnel. When Cloudflare made Argo Tunnel free they renamed it to Cloudflare Tunnel. The magic of Cloudflare Tunnel is handled by a small but powerful client that is known as cloudflared.

What makes a Cloudflare Tunnel awesome is the fact that you can use it to host an application externally without opening any ports on your firewall. It does this by creating an outbound only tunnel directly to Cloudflare.

For my situation I needed to setup access to an internal web application but I didn’t want to do another port forward to make it work. My solution was Cloudflare Tunnel with Docker.

The way I set it up is slight different than what Cloudflare’s documentation says as I wanted to use the Zero Trust dashboard and Docker but also have it in a Docker Compose file, as cloudflared seems to get updated at least once a month and I wanted it to be easy enough to recreate. Here’s how I did it and how everything works.

## Tunnel Setup

* Login to Cloudflare Zero Trust Dashboard (it used to be called Cloudflare Teams): https://dash.teams.cloudflare.com/
* Click on Access > Tunnels

![](<../../../../.gitbook/assets/image (62)>)

* Click on Create a tunnel

![](<../../../../.gitbook/assets/image (63)>)

* Give your tunnel a name (example: Blog Example)

![](<../../../../.gitbook/assets/image (64)>)

## Base64

After saving your tunnel you are presented with the install command for cloudflared which contains a Base64 encoded string that has a lot of useful info in it that we will need.

![](<../../../../.gitbook/assets/image (65)>)

Note: I altered the Base64 encoding to better show how it works.

* Use something like CyberChef (https://gchq.github.io/CyberChef/) or another Base64 decoder to decode the install command that Cloudflare provided.

This is the Base64 encoded string in my example:

`eyJhIjoiTXlBY2NvdW50VGFnMTIzIiwidCI6Ik15VHVubmVsSUQxMjMiLCJzIjoiTXlUdW5uZWxTZWNyZXQxMjMifQ==`

Once you decode the Base64 you will get an output that looks similar to this:

`{"a":"MyAccountTag123","t":"MyTunnelID123","s":"MyTunnelSecret123"}`

Here is the same input and output directly on CyberChef:

https://gchq.github.io/CyberChef/#recipe=From\_Base64('A-Za-z0-9%2B/%3D',true,false)\&input=ZXlKaElqb2lUWGxCWTJOdmRXNTBWR0ZuTVRJeklpd2lkQ0k2SWsxNVZIVnVibVZzU1VReE1qTWlMQ0p6SWpvaVRYbFVkVzV1Wld4VFpXTnlaWFF4TWpNaWZRPT0

* Make note of the decoded Base64 as we will need it later on.

## URLs

Now we need to create what the external URL will be for the web application.

* Enter what you want the external URL to be for the web application. Example: blogexample.thedxt.ca

![](<../../../../.gitbook/assets/image (66)>)

* Enter the internal URL for the web application. Example: http://192.168.3.41:3343

![](<../../../../.gitbook/assets/image (67)>)

You should now see your tunnel summary page.

![](<../../../../.gitbook/assets/image (68)>)

## Docker Compose Setup

This is how I like to build my Docker Compose setups — feel free to do it whichever way you prefer.

* Make a new folder for your Docker Compose setup (example: cloudflared-blog-example).
* Make another new folder for the persistent data for the cloudflared client (example: cloudflared-example-data).

## Credentials File

We need to create a credentials file for cloudflared to use, using the Base64 info we decoded earlier from the cloudflared install command.

* In the cloudflared-example-data folder make a new JSON file named with your Tunnel ID. Example: MyTunnelID123.json
* In the Tunnel ID JSON file enter your Account Tag, your Tunnel Secret and your Tunnel ID in this format:

`{"AccountTag":"Your Account Tag","TunnelSecret":"Your Tunnel Secret","TunnelID":"Your Tunnel ID"}`

Example (MyTunnelID123.json):

`{"AccountTag":"MyAccountTag123","TunnelSecret":"MyTunnelSecret123","TunnelID":"MyTunnelID123"}`

We have just created the cloudflared credentials file.

## Config File

* In the cloudflared-example-data folder create a file called config.yml
* Add the following information to config.yml:
  * Tunnel ID: `tunnel: Your Tunnel ID`
  * Reference the credentials file you created earlier: `credentials-file: /root/.cloudflared/YourTunnelID.json`
* Create the ingress section:
  * Start with: `ingress:`
  * Add your external hostname and the internal service mapping, for example:
    * hostname: blogexample.thedxt.ca service: http://192.168.3.41:3343
  * Add the catch-all rule to return 404 if nothing matches:
    * service: http\_status:404

Example config.yml:

```
tunnel: MyTunnelID123
credentials-file: /root/.cloudflared/MyTunnelID123.json

ingress:
   - hostname: blogexample.thedxt.ca
     service: http://192.168.3.41:3343
   - service: http_status:404
```

## Docker Compose File

Create docker-compose.yml in the cloudflared-blog-example folder.

Example docker-compose.yml:

```
---
version: "3.2"
services:
  cloudflared-example:
    image: cloudflare/cloudflared:2022.10.0-amd64
    container_name: cloudflared-example
    volumes:
      - ./cloudflared-example-data:/root/.cloudflared/
    command: 'tunnel --config /root/.cloudflared/config.yml run'
    user: root
    restart: unless-stopped
```

* Start your Docker container.

If everything is configured correctly your tunnel should now be up and showing as active in your Cloudflare Zero Trust dashboard.

![](<../../../../.gitbook/assets/image (69)>)

If you check your DNS entries in Cloudflare you will see a new CNAME record pointing to YourTunnelID.cfargotunnel.com

![](<../../../../.gitbook/assets/image (70)>)

Here is my internal web application running internally.

![](<../../../../.gitbook/assets/image (71)>)

Now that the Cloudflare Tunnel is up and running I can reach it externally via blogexample.thedxt.ca

![](<../../../../.gitbook/assets/image (72)>)

You have now just created a web application that can run without any port forwards. I think this will keep working even if you have a dynamic WAN IP, however I haven’t tested it. I suspect that if you have a dynamic WAN IP you could just stop and start your Docker container to reestablish your tunnel with your new WAN IP.

When you are ready to update your cloudflared Docker image just make sure you update the cloudflared tag as in my example I version locked it. Here is the list of Docker tags:

https://hub.docker.com/r/cloudflare/cloudflared/tags

If you want to take this a step further you can also put Cloudflare Access in front of it too. If you want to know how to do that read my previous post: https://thedxt.ca/2022/06/settings-up-cloudflare-access/

## An Easier Way

An alternative approach uses the token form of the install command and avoids creating the credentials/config files manually. I’m showing both methods because the more verbose method explains how everything ties together; the token method is simpler to deploy.

* Make a docker-compose.yml file.
* Copy the cloudflared install command — you need everything after --no-autoupdate including the Base64 token.

Example docker-compose.yml using the token method:

```
---
version: "3.2"
services:
   cloudflared-example:
     image: cloudflare/cloudflared:2022.10.0-amd64
     container_name: Cloudflared-token
     command: 'tunnel run --token eyJhIjoiTXlBY2NvdW50VGFnMTIzIiwidCI6Ik15VHVubmVsSUQxMjMiLCJzIjoiTXlUdW5uZWxTZWNyZXQxMjMifQ=='
     user: root
     restart: unless-stopped
```

## Further reading

* Cloudflare Tunnel documentation: https://developers.cloudflare.com/cloudflare-one/connections/connect-apps
* Cloudflare cloudflared Docker tags: https://hub.docker.com/r/cloudflare/cloudflared/tags
* Related post: https://thedxt.ca/2022/06/settings-up-cloudflare-access/

Last updated 2 years ago
