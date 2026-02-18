# Cloud Init Script to Create a new user

In order to set a hashed password, run this command and enter your password when prompted:



```
mkpasswd --method=SHA-512
```

The output of the password "test" looks like:

<pre><code><strong>$6$JhSQSLFN2/bd6u5N$BHAfXwewZ4aqNvtaYxFWfWq8BFU.uYvJc0nHulEZfbWkw3YLKM.1Aql5DHnz0FsTitZUZ8xn1EzxfQLDJin.B0
</strong></code></pre>

```yaml
#cloud-config
users:
  - default
  - name: devin
    passwd: "$6$JhSQSLFN2/bd6u5N$BHAfXwewZ4aqNvtaYxFWfWq8BFU.uYvJc0nHulEZfbWkw3YLKM.1Aql5DHnz0FsTitZUZ8xn1EzxfQLDJin.B0"
    shell: /bin/bash
    lock_passwd: false
    ssh_pwauth: true
    chpasswd: { expire: false }
    sudo: ALL=(ALL) NOPASSWD:ALL
    groups: users, admin, sudo
    ssh_authorized_keys:
     - "ssh-rsa key goes here"

autoinstall:
    version: 1
    identity:
        username: devin
        password: "$6$JhSQSLFN2/bd6u5N$BHAfXwewZ4aqNvtaYxFWfWq8BFU.uYvJc0nHulEZfbWkw3YLKM.1Aql5DHnz0FsTitZUZ8xn1EzxfQLDJin.B0"
    refresh-installer:
        update: yes
```

Remember to always include `#cloud-config` at the start of the file

```yaml
#cloud-config
```
