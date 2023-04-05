# Scripts

**Resize LXD btrfs loop file in one line**

```
 grow_lxd_btrfs_file() { STORAGE_POOL="$1" ; NEW_SIZE="$2" ; STORAGE_POOL_SOURCE="$(lxc storage get "$STORAGE_POOL" source)" ; sudo truncate -s "$NEW_SIZE" "$STORAGE_POOL_SOURCE" ; STORAGE_POOL_LOOP_DEVICE="$(losetup -j "$STORAGE_POOL_SOURCE" | awk -F': ' '{print $1}' | head -1)" ; sudo losetup -c "$STORAGE_POOL_LOOP_DEVICE" ; LXD_PID=$(pgrep lxd | head -1) ; NS_MOUNT_POINT=$(sudo nsenter -t "$LXD_PID" -m -- findmnt -no target "$STORAGE_POOL_LOOP_DEVICE") ; sudo btrfs filesystem resize max "/proc/$LXD_PID/root/$NS_MOUNT_POINT" ; lxd sql global "UPDATE storage_pools_config SET value = '$NEW_SIZE' WHERE key = 'size' AND storage_pool_id IN (SELECT id FROM storage_pools WHERE name = '$STORAGE_POOL')" ; }
```

```
grow_lxd_btrfs_file pritunl-storage-pool 50GB
```

`lxc storage list`



#### Kill process running on port

`lsof -t -i tcp:1234 | xargs kill`

#### Run a speedtest from the CLI

```
watch "curl -s https://raw.githubusercontent.com/sivel/speedtest-cli/master/speedtest.py | python -"
```

#### Top Files Sizes &#x20;

```
 du -a / | sort -n -r | head -n 20
```

#### Top Memory Usage

```
ps aux --sort=-%mem | head
```
