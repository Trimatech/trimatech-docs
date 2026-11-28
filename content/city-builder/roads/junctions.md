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

If the junction cannot go where you clicked, nothing is laid. The outline turns red and the status line says which of its roads was refused and why, for example an arm that would climb too steeply out of the junction.

What the tool lays is ordinary roads. Edit them afterwards like any other. On a slope, the new roads stand inside the hill until the ground is shaped behind them (see [Ground](./ground.md)).

## What is in the list

**Junctions.** Signalized crossroads, boulevard crossroads, crossroads with slip lanes, jughandle crossroads, T junction with stop sign, Y junction, five-way star and staggered crossroads.

**Roundabouts.** Compact, single-lane, three-arm, five-arm skewed, with splitter islands, two-lane, two-lane with bypass lanes, three-lane, three lanes on the main flow, four-lane, signalized gyratory, star square with eight avenues, through-about and dogbone.

**Interchanges.** Overpass, diamond, cloverleaf, cloverleaf with loops only, trumpet and roundabout interchange.

## Change how a junction is controlled

Pick **Junctions**, set **Click to** to **Control**, pick a **Type / control** and click a junction.

| Option | Result |
| --- | --- |
| **Automatic** | The road types decide. A narrower side street that meets a road running straight through gets a give-way sign. |
| **Traffic signals** | Lights and a stop line on every arm. |
| **Stop signs**, **Yield signs** | Signs on the minor arms, with a solid stop line or a broken yield line. |
| **Uncontrolled** | No lights, signs or lines. |
| **Roundabout** | A circle with an island, and yield signs and yield lines on the arms, if the approaches have room. |

The line across an arm always matches its sign or signal. An arm with neither gets no line, so a crossroads of side streets has none. A stop line stands before the arm's crosswalk. A yield line stands at the edge of the junction, past the crosswalk when there is room between them. With no crosswalk, either line stands at the junction's edge.

To turn off one arm's crosswalk or line, use **Details** → **Remove**, or click the violet disc on that arm in **Edit**. A removed crosswalk takes its gap with it: the stop line moves up to the junction's edge, and the lanes through the junction start there too.

## Lane markings

Every junction works out where each lane goes and marks its roads to match. Nothing needs setting.

- **Arrows** show what each lane may do. If the road ahead has fewer lanes, the spare lanes turn instead, right turns first.
- **Lines through the junction** continue the lane lines. Where a turn enters a wider road, lines fan out so the turn can take any free lane.
- **Hatched wedges** fill asphalt no lane uses, such as the nose between two roads that part at a shallow angle. Hatching stops where any lane's way crosses it, and a wedge ends once the lanes either side close up to it.
- **Hatched islands** fill the gap where two lanes side by side split up to let another lane in between, or close up again after one, as long as no lane beside the gap runs against them. An island is lined all round and starts with a blunt nose once the gap is 6 studs wide.
- **Solid lane lines** run up to the stop or yield line, so drivers pick a lane before the junction.
- **A road's own hatched gores** each carry on into the junction at the width the road paints them. Where nothing lies across the arm, no crosswalk and no line, each pair is one gore, its edge lines meeting and its chevrons evenly spaced across the edge of the junction. A crosswalk or a line between them closes each one a little short of it.
- **Edge lines** carry on through the junction along the curb where a one-way road runs on into another, round the corner at the curb's own radius or straight across where the curbs line up.
- **A lane with nowhere to go** ends before the junction. Beside the curb it tapers away over hatching. Between a right-turn lane and the lanes going straight, it ends in a hatched wedge.

Junctions only side streets meet stay unmarked, and a road that runs straight past a narrower side street keeps its own lines.

To see and change the plan, keep **Show lane paths** on under Draw settings, or **Lane paths** under **Visual indicators** in Edit settings. Near a junction, each way through it shows as a colored wire most of a lane wide, one color for each road it comes from. The wires stay up while the pointer is anywhere over the junction, and while you drag one, the rest stay in view:

- A **plus** disc sits where each lane enters the junction. Drag it onto a lane of another road to send the lane there as well.
- A **link** disc sits at the end of each wire, in the lane it lands in. Drag it onto another lane to send the way there instead. To take that way out, Shift+click the disc, or drop it away from every lane. A lane left with no way ends before the junction.

A road never gains a lane between two others on its own. If your wiring leaves a lane in the middle of a road with nothing feeding it, the lane feeding its neighbor and lined up most nearly with it fans out into it as well. Taking a way out with Shift+click or a drag is the exception: the lane it fed stays empty until you wire a lane into it again.

The junction's arrows, lines and hatching follow the wiring. Each change is one undo step.

A way that turns into the next road round follows the corner's curb at its lane's distance, so it never cuts across the curb. Where a corner is too tight for the turn, drag the white compass dot in that corner outward. A wider curb radius gives the junction room: the two roads beside that corner stand back as far as the curve needs, and the junction's other roads keep their ends. The dot goes up to a radius of 120, as far as the roads are long enough to hold the curve.

Where a junction's box is long, as where a side road bends in at a slant, its zebra crossings and stop lines move in along the straight curbs to stand by the corners, and the road's lines carry on up to them.

## Corners and dead ends

Both are changed with **Edit**:

- Drag the white compass dot inside a corner to set its curb radius, or into the corner to make it square.
- Click the violet flag disc past a dead end to pick how it finishes. **Rounded curb** closes it, **Open** cuts it flat so a later road can carry on from it, and **Turning circle** widens it into a cul-de-sac. The rotate disc beside it angles an open cut.
