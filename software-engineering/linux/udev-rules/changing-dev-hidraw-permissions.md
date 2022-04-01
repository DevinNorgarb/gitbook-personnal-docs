---
description: https://askubuntu.com/a/15643/593957
---

# Changing /dev/hidraw permissions

I gave up running around trying to figure out some other means of doing it than udev rules, and instead just learned a bit about udev and wrote a flippin' rule. The following line was placed in a `.rules` file (I named mine `99-hidraw-permissions.rules`) located under `/etc/udev/rules.d`.

```
KERNEL=="hidraw*", SUBSYSTEM=="hidraw", MODE="0664", GROUP="plugdev"
```

Basically this assigns all devices coming out of the hidraw subsystem in the kernel to the group `plugdev` and sets the permissions to r/w r/w r (for root \[the default owner], plugdev, and everyone else respectively). With myself added to the plugdev group, everything's dandy.

Not quite as brain melting as I'd expected. Udev rules actually seem pretty straightforward... I mean, they look like they _can_ get ridiculous if you're dealing with individual product IDs and whatnot, but they seem pretty damn tame for what they do.
