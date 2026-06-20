---
title: "SITL"
description: "Notes on SITL."
---

# SITL

**SITL** (Software In The Loop) runs autopilot firmware on your dev machine so you can test missions without airframe hardware.

## Source

- [YouTube: SITL basics](https://www.youtube.com/watch?v=mKt4ZTaE2bk)

## What SITL gives you

- ArduPilot (or compatible stacks) built for desktop — physics simulated
- Test **DroneKit**, MAVLink tools, and mission scripts from your IDE
- Reproduce failsafes, RTL, and waypoint logic before flying

## Typical workflow

1. Install ArduPilot SITL dependencies for your OS
2. Launch a simulated vehicle (copter/plane/rover profile)
3. Connect GCS (Mission Planner, QGroundControl) or Python via MAVLink on UDP/TCP
4. Iterate on code against the simulated MAV

## Related

- [SITL section](./sitl/README.md)
- [Simulated Vehicle (SITL)](./sitl/simulated-vehicle-sitl.md)
- [Robotics](./README.md)
