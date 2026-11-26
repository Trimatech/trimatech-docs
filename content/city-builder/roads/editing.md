---
title: Editing roads
sidebar_position: 4
description: Move and bend roads, set lane, sidewalk and island widths, round corners, and remove roads.
---

Pick **Edit** under **Action**. Roads drawn by hand and roads of a generated city edit the same way.

<img src={require("../img/dock-edit.png").default} alt="The Edit settings card with the Height, Hug ground, Level and Bridge water rows" width="380" />

## Move and bend

- Drag a junction to move it. Every road that meets there follows.
- Drag the end of a road to move it. Drop it on another road to join them.
- Drag the middle of a road to bend it.

An edit rebuilds only the roads it touches. A large change takes longer but is never refused for its size.

## The dots

Point at a road and dots appear on it. Each dot sets one thing when you drag it.

| Dot | Color | Sets |
| --- | --- | --- |
| Car | Blue | The width of the carriageway. Its lanes share the width. |
| Footprints | Sand | The width of the sidewalk. |
| Leaf | Green | The width of the island. Hold **Shift** to set it along the whole road. |
| Compass | White | The curb radius of a corner. |
| Tilt | Pink | The banking of a race track. Hold **Shift** to tilt the whole road. |
| Arrows | Yellow | Where the center line stands, and so how many lanes run each way. |
| Chevrons | White | A painted gore between two lanes. Hold **Shift** to set it along the whole road. |
| Left-right arrows | Teal | Where the road meets a junction: centered, or with one curb lined up with the road across. |
| Flag disc | Violet | How a dead end finishes. |
| Walking figure disc | Violet | A junction arm's crosswalk and stop or yield line. Click it and pick one to turn it off or back on. |

![A crossroads in the Edit tool with white compass dots and sand footprints dots at its corners, blue car dots on one arm, and a card that reads Curb radius 48](../img/edit-dots.jpg)

*The dots around a crossroads. The white compass dot under the mouse says what it sets, and the blue car dots sit across the road pointed at.*

Each corner of a junction has two dots. The compass dot rounds the curb. The footprints dot sets how wide the sidewalk is around that corner, so you can carry the pavement up to a building's corner. The sidewalk shows as it will be laid while you drag.

A corner radius that does not fit is not refused. The corner takes the nearest radius that does fit.

<video src={require("../img/edit-corners.mp4").default} poster={require("../img/edit-corners-poster.jpg").default} autoPlay loop muted playsInline controls style={{ width: "100%", borderRadius: 8 }} />

| Before | After |
| :-: | :-: |
| ![A crossroads with tight corners and four rounded dead ends](../img/edit-before.jpg) | ![The same crossroads with wide corners, a turning circle on one arm and a flat end on another](../img/edit-after.jpg) |

*One crossroads before and after three edits. The corners got a wider curb radius, the far arm ends in a **Turning circle**, and the right arm ends **Open**.*

## Lanes each way

A two-way road of three lanes or more has a yellow dot on its center line. Drag it across the road and the center line moves with it, from one lane line to the next, giving one way more lanes than the other. Drag it back to the middle to share the lanes evenly again. The junctions at the road's ends mark their lanes to match. One drag is one undo step.

Where two roads with different splits meet, the center line eases across over about 40 studs for each lane it moves.

## Gores between lanes

A road of two lanes or more has a white chevrons dot on each lane line. Drag one across its line to open a painted gore there: two solid lines with chevrons between them. The lanes keep their width, and the road widens by the gore, half on each side.

Once a road has a gore, its line shows a dot at each of five stations along the road. Drag each to taper the gore, such as opening it from nothing to 16 studs on the way into a junction, where one lane parts from the others. Hold **Shift** to set the gore's width along the whole road. Drag every station shut to take the gore away. A road has one gore.

The junction's arrows and lane wiring stay in the lanes either side of the gore. Inside the junction the gore carries on between the same two lanes, as far as they part or until they meet again. The car dot still sets the lanes' own width.

## Line up a curb through a junction

Where the focused road meets a junction of three roads or more, a teal dot with left-right arrows sits on it near the junction. Drag it across the road to move where the road meets the junction. It snaps to the middle, and to lining either curb up with the road across the junction. That lets a wider road, such as one with a gore, keep one curb straight into a narrower road while the extra width goes to the other side.

The road bends over from its drawn line to meet the junction off center, and the junction's lanes, lines and curbs follow. Roads you draw always meet a junction in the middle.

## Remove a road

Pick **Remove** and click a segment. On Terrain and part ground the plugin puts the ground back the way it was before the road.

## Rebuild all roads

**Rebuild all roads** lays every road in the place again from the saved network. Use it once after a plugin update that changes how roads are built, or when the changelog tells you to. Roads opened from an old save rebuild by themselves on the first edit.

## After reopening the place

The road network is saved in the place. Open the place later, start the road builder, and every road is editable again.
