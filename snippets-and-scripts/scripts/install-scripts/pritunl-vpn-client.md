# Pritunl VPN Client

[https://client.pritunl.com/](https://client.pritunl.com/)

{% code title="Ubuntu 20.04" overflow="wrap" lineNumbers="true" %}
```bash
sudo tee /etc/apt/sources.list.d/pritunl.list << EOF
deb https://repo.pritunl.com/stable/apt focal main
EOF

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com --recv 7568D9BB55FF9E5287D586017AE645C0CF8E292A
sudo apt-get update
sudo apt-get install pritunl-client-electron
```
{% endcode %}

{% code title="Ubuntu 22.04" overflow="wrap" lineNumbers="true" %}
```bash
sudo tee /etc/apt/sources.list.d/pritunl.list << EOF
deb https://repo.pritunl.com/stable/apt jammy main
EOF

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com --recv 7568D9BB55FF9E5287D586017AE645C0CF8E292A
sudo apt-get update
sudo apt-get install pritunl-client-electron
```
{% endcode %}
