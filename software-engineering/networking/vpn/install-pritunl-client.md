# Install Pritunl Client

```
sudo tee /etc/apt/sources.list.d/pritunl.list << EOF
deb https://repo.pritunl.com/stable/apt focal main
EOF

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com --recv 7568D9BB55FF9E5287D586017AE645C0CF8E292A
sudo apt-get update
sudo apt-get install pritunl-client-electron
```

```
pritunl-client add pritunl://pritunl.url.com/ku/cdscdscdcds
pritunl-client list
pritunl-client start 

```
