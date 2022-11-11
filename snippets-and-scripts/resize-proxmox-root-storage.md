# Resize Proxmox root storage

```bash
# Check disk space before
df -h

    # Delete local-lvm storage in gui
lvremove /dev/pve/data
lvresize -l +100%FREE /dev/pve/root
resize2fs /dev/mapper/pve-root

# Check disk space after
df -h
```
