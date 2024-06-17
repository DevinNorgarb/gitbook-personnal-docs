# Backup VPS using rsync

The command provided is an `rsync` command used for backing up files from a remote server to a local directory. Here’s a breakdown of what it does:

* `root@contabo-small.devsdev.com:/` specifies the source directory on the remote server.
* `-avh` options stand for:
  * `-a`: archive mode, which preserves permissions, symlinks, and other attributes.
  * `-v`: verbose, providing detailed output of the transfer process.
  * `-h`: human-readable, making file sizes more readable.
* `--exclude={...}` options exclude certain directories and files from being copied.
* `/Volumes/mac_partition/VPS_backup2` specifies the local destination directory.

```shell
rsync user@remotehost.com:/ -avh --exclude={"/swapfile*","/dev/*","/proc/*","/sys/*","/tmp/*","/run/*","/mnt/*","/media/*","/lost+found"} /path/to/local/backup
```
