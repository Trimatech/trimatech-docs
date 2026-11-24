---
title: Junctions
sidebar_position: 5
description: Lay premade crossroads, roundabouts and highway interchanges, and set how a junction is controlled.
---

Any two roads that meet make a junction on their own. The **Junctions** tool is for the ones that take many roads to draw: roundabouts, gyratories and highway interchanges.

| Signalized crossroads | Single-lane roundabout |
| :-: | :-: |
| ![A signalized crossroads of a four-lane road and a two-lane street](../img/junction-crossroads.jpg) | ![A single-lane roundabout with four arms](../img/junction-roundabout.jpg) |

| Diamond interchange | Roundabout interchange |
| :-: | :-: |
| ![A highway on a deck over a street, with four ramps](../img/junction-diamond.jpg) | ![A highway on a deck over a roundabout](../img/junction-roundabout-interchange.jpg) |

![A cloverleaf interchange with four loops](../img/junction-cloverleaf.jpg)

*A cloverleaf. One click lays all of it: the highway, the road it crosses, four loops and four outer ramps.*

## Lay a junction

1. Pick **Junctions** under **Action**.
2. Pick a junction from the list and change its settings.
3. Click to place it.

<img src={require("../img/dock-junctions.png").default} alt="The Junctions settings card for a single-lane roundabout, with rows for the roads meeting, the road types, the diameter and the ring lanes" width="380" />

*The settings of a single-lane roundabout. Each junction in the list has its own rows.*

Where you point decides what happens.

- On open ground the junction is laid whole. **X** or **R** turns it 5 degrees forward, **Z** or **Shift+R** back.
- On an existing junction, that junction becomes the one you picked and its roads become the arms.
- On a road, the junction is laid across it.

What the tool lays is ordinary roads. Edit them afterwards like any other.

## What is in the list

**Junctions.** Signalized crossroads, boulevard crossroads, crossroads with slip lanes, jughandle crossroads, T junction with stop sign, Y junction, five-way star and staggered crossroads.

**Roundabouts.** Compact, single-lane, three-arm, five-arm skewed, with splitter islands, two-lane, two-lane with bypass lanes, three-lane, three lanes on the main flow, four-lane, signalized gyratory, star square with eight avenues, through-about and dogbone.

**Interchanges.** Overpass, diamond, cloverleaf, cloverleaf with loops only, trumpet and roundabout interchange.

## Change how a junction is controlled

Pick **Add items**, then the junction control item, and click a junction.

| Option | Result |
| --- | --- |
| **Automatic** | The road types decide. A narrower side street that meets a road running straight through gets a give-way sign. |
| **Traffic signals** | Lights on every arm. |
| **Stop signs**, **Yield signs** | Signs on the minor arms. |
| **Uncontrolled** | No lights, signs or stop lines. |
| **Roundabout** | A circle with an island and yield signs, if the approaches have room. |

## Lane markings

Every junction works out where each lane goes and marks its roads to match. Nothing needs setting.

- **Arrows** show what each lane may do. If the road ahead has fewer lanes, the spare lanes turn instead, right turns first.
- **Lines through the junction** continue the lane lines. Where a turn enters a wider road, lines fan out so the turn can take any free lane.
- **Hatched wedges** fill asphalt no lane uses, such as the nose between two roads that part at a shallow angle.
- **Solid lane lines** run up to the stop line, so drivers pick a lane before the junction.
- **A lane with nowhere to go** ends before the junction. Beside the curb it tapers away over hatching. Between a right-turn lane and the lanes going straight, it ends in a hatched wedge.

Junctions only side streets meet stay unmarked, and a road that runs straight past a narrower side street keeps its own lines.

## Corners and dead ends

Also under **Add items**:

- The corner item sets a junction's curbs. **Sweeping curve** is a wide bend that needs room. The other options set a fixed radius.
- The end item sets how a dead end finishes. **Rounded curb** closes it, **Open** cuts it flat so a later road can carry on from it, and **Turning circle** widens it into a cul-de-sac.
