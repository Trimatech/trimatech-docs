---
title: FAQ and troubleshooting
sidebar_position: 11
description: Common questions about maps, lights, performance, old places and assets.
---

## City Generator

### The map does not load

Studio asks for permission the first time the plugin reaches a map server. If you refused, open **Plugins > Manage Plugins**, find City Builder and allow its HTTP requests. Then press **Retry map**.

If you only want a city and not a real one, set **Source** to **Generated**. It needs no download.

### The build is slow

Build time grows with the number of buildings. The estimate above the build button says how long it will take. Pick a smaller rectangle or lower **Max count** first. To test a layout, set **Build as** to **Graybox**, then use **Change buildings** once the streets look right.

### Some streets from the map are missing

A city holds at most 4,000 road segments, and tiny networks cut off from the rest are dropped. Where two mapped roads cannot both stand, one of them goes. The city folder's `DroppedRoads` attribute counts them.

### Change buildings is blocked

You edited a building or the road layout by hand, and the plugin will not overwrite that. The status line says what blocks it. See [editing a finished city](./city-generator/editing-a-city.md#hand-edits-are-protected).

## Roads

### A road will not build where I click

Read the message by the cursor. Most refusals are about room: a rail bend under 40 studs, or a layout that would cross other roads. Steep roads warn and build anyway.

### Roads look wrong after a plugin update

Press **Rebuild all roads** once. It lays every road again with the current code.

### My mesh roads are empty after reopening the place

The place was saved before the meshes were uploaded. Press **Rebuild them** under Road settings, and turn on **Upload meshes automatically** so it does not happen again.

## Buildings

### Buildings stopped changing when I resize them

With **Generator code** set to **In the plugin**, buildings re-bake only while the plugin is installed and enabled. Pick a copy in ServerStorage or ReplicatedStorage if they have to re-bake without it.

### An old building is missing a new feature

Load it in the Building Designer and press **Update building generator**.

## In the game

### The street lights are off

That is deliberate. Lights are placed switched off and tagged `CityLight`. The code to turn them on is in [using a city in your game](./game-integration.md#lights).

### Does the plugin add scripts to my game?

No. With the default settings a place holds geometry, tags and attributes. Drivable cars from **Spawn Car** are the exception, since a car needs its own scripts to drive.

### Can I use the cities in a published game?

Yes. Some models and textures come from Roblox's free Creator Store packs: Modular Building Kit - Modern City, Forest Pack, Landscaping Pack - Duvall Drive, City Props Pack, City Road Pack and Realistic Material Variants - Duvall Drive. Roblox owns those. Every asset the plugin ships is open for use in any experience.
