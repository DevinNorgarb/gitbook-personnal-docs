# Captive Portal Attack

The `Captive Portal` attack attempts to retrieve the target access point’s WPA/WPA2 key by means of a rogue network with a border authentication captive portal. It is recommended this attack is done in close, to semi-close, proximity to the target access point. This is due to the fact the attack host (your machine) will be serving the captive portal, meaning, clients will need to have a decent Wi-Fi connection to your machine.

To successfully execute a `Captive Portal` attack with fluxion, the following steps must be completed.

* From the fluxion directory, execute fluxion, optionally passing parameters:

```
./fluxion.sh
```

or with parameters:

```
# Kills any processes utilizing wireless interfaces selected.
# NOTICE: For a complete list of parameters, read the Flags & Preferences section.
./fluxion.sh -k

# Or using legacy flags like below.
export FLUXIONWIKillProcesses=1; ./fluxion.sh
```

1. Select an attack on the target network, in this case, we’ll use the `Captive Portal` attack.

* The `Captive Portal` attack requires the handshake `.cap` file from the target access point. This file may be given to fluxion manually (by inputting the path when prompted), or automatically by running and retrieving it with the `Handshake Snooper` attack at which point fluxion will auto-detect the handshake file and will not ask for it again.
* **If you do not have the `.cap` file, you must first complete the `Handshake Snooper` attack.** Once you've got the handshake file, you may use the `Captive Portal` attack.

2. Select a target network; if one was previously selected, you'll have the option to continue with it.

* You must select a network interface which **supports monitor mode**.
* Optionally, you'll have the chance to select an interface for target-tracking.
* The **target-tracking** interface must be an **independent interface** due to the fact it requires channel hopping, which will cause issues for interfaces which require a fixed-channel.

3. Select a wireless network interface for jamming to deauthenticate target clients.

* The wireless interface selected **must support injection**.

4. Select a network interface which will be used to serve the captive portal.

* If the selected network interface is a wireless interface, you'll be prompted to select an access point service (recommendations are there for a reason). We recommend avoiding `airbase-ng`, since it is essentially a “hack”, using packet injection and monitor mode to mimic master mode.
* If the selected network interface is an ethernet interface, you must connect, configure, and manage a wireless access point manually with the configuration displayed on fluxion at attack launch time. You'll be responsible for starting, stopping, and changing the channels of the access point when the attack begins, stops, or when the target changes channels, respectively.

5. Set the path to the verification hash/handshake file; if a corresponding hash was previously caught with the `Handshake Snooper` attack, you'll have the option to continue with it.

* Once the path has been chosen, the authenticity of the hash must be checked with a verifier (recommendations are there for a reason).

6. Select an SSL/TLS certificate source for the captive portal, otherwise, choose to disable SSL.

* SSL/TLS is a method of encryption used to establish a secure connection between two points. In this case, the two points are the captive portal’s web server, and the target client.
* If you've got a personal certificate, you must save it at `fluxion/attacks/Captive Portal/certificate/server.pem` and the attack will automatically detect it and auto-select it.
* If you don't have a personal certificate, you may select to automatically generate one. **The downside is that the certificate, having been created by a random individual, will not be trusted by any device, which will likely trigger warnings for clients attempting a secure connection to the captive portal.**
* If you would rather not bother with SSL/TLS, you can choose to disable it. Once disabled, the captive portal’s web server will only accept unencrypted connections, which exposes the information clients send to fluxion. This can be particularly unsafe if someone’s spying on network traffic. **This might also trigger warnings for some clients, since the browser will need to send forms over an unencrypted connection.**

7. Select whether the captive portal web server should attempt emulating an internet connection.

* **This option only affects iOS clients, and some Android clients.**
* This could be useful for people that don’t want to make the captive portal obvious. The clients will connect, but will be fooled into believing internet access is available. This will cause all iOS clients, and some Android clients to not show the captive portal immediately upon connecting to the rogue network, however, the captive portal will still show up once the clients try accessing any web site.
* **Warning: This could cause clients to hang while trying to load sites, including iOS clients.** The issue occurs when this option is selected, and SSL/TLS is disabled. The cause is clients attempting to access an SSL/TLS capable site, such as google.com, but hanging while waiting for a connection from the captive portal’s web server. The hanging is caused by the clients believing there’s internet access, but no responses received for SSL/TLS enabled sites.

8. Select a user interface for the captive portal.

* By default, fluxion comes with the generic interfaces only. If cloned properly, all the interfaces, including some manufacturer specific, and some custom ones are included. These extra interfaces can be downloaded separately from [the sites' repository](https://github.com/FluxionNetwork/sites).
* Select an interface suitable to the manufacturer of the device (scroll up if you don't see the manufacturer).

After selecting a suitable interface, the attack will start. The rogue network will be created and the captive portal will be accessible through it. Note, **fluxion can only find the WPA/WPA2 key if the clients enter the corresponding password.** If a client enters an invalid/wrong password, the captive portal will notify the client of the invalid password and will give the option to enter a new password.

Once a corresponding password has been given and Fluxion detects it, the rogue network will be killed, the deauthenticator will stop jamming the target access point, and the clients will be allowed to reconnect to the original access point.
