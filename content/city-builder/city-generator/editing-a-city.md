---
title: Editing a finished city
sidebar_position: 5
description: Reopen a city later, change its buildings, props and roads, and edit it by hand.
---

A city saves its lot plan and build settings inside its own folder. You can close the place, come back, and keep working on it.

## Pick the city up again

Select anything inside the city, or the city's folder. The City Generator shows a button named **Edit** plus the city's name. Press it and the dock loads the settings the city was built with. A note at the top of the dock names the city your changes go to.

## Change one layer

| Button | What it rebuilds |
| --- | --- |
| **Change buildings** | Every building, on the saved lots and seeds. Use it to switch between Bundle, Facade and Graybox. |
| **Change props** | Plants, parked cars and street furniture. |
| **Change roads** | The road style of the city's streets. |
| **Add details** | Door paths, ground variation and footpaths you ticked after the build. |
| **Regenerate** | Only the stages you tick. Everything else is kept. |

A button appears once a setting in its group differs from what the city was built with. Each is one undo step.

## Edit by hand

A generated city is made of the same things you place by hand.

- Its streets are ordinary roads. The Roads tool's **Edit**, **Upgrade**, **Roadside** and **Add items** all work on them.
- Its buildings are ordinary buildings. Move, resize or restyle them, or open one in the Building Designer.
- A **Hole** model cuts a city building the same way it cuts any other.

## Hand edits are protected

Once you move, resize, remove or restyle a building by hand, or change the road layout, the plugin stops replacing buildings city-wide. The status line says what blocks it. For a road edit, the way on is to undo the edit or generate a new city.

The plugin protects your edits. It does not replan the city around them. So do the city-wide passes first: settle on a bundle and a building mode, then start editing by hand.

## Checking a city

The city folder records counts as attributes, for example `Seed`, `DroppedRoads`, `UnfilledLots`, `UnreachableEntrances`, `GeneratedInstances` and `RenderedParts`. Select the folder and read them in the Properties panel. `RenderedParts` is the number to watch if the city has to run on phones.
