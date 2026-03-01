# Cloud-Init Validation

To validate the cloud-init config file, I used the Ubuntu cloud-init CLI command like so:

```shell-session
cloud-init devel schema --config-file test.yml
```

On older versions, this worked:

```sh
cloud-init schema --config-file test.yml
```
