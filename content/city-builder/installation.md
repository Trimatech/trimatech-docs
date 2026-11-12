---
title: Installation
sidebar_position: 2
description: Install City Builder from the Creator Store and allow the map requests the City Generator makes.
---

## Install from the Creator Store

1. Open the [City Builder page on the Creator Store](https://create.roblox.com/store/asset/136382184501618).
2. Press **Get Plugin**, or **Install** if you already own it.
3. Open Roblox Studio, or restart it if it was running.
4. Open the **Plugins** tab. The **City Builder** toolbar holds the plugin's buttons.

Press **City Builder** to open the main dock. Each button opens its own dock, and Studio remembers where you left them.

## Permissions

Most of the plugin works offline. Two things ask Studio for permission.

- **Map requests.** The City Generator downloads streets, building outlines and ground heights when you build from a real place. Studio asks once per map server before the plugin may reach it. Press **Allow**. If you refused by mistake, open **Plugins > Manage Plugins**, find City Builder and turn the HTTP permission back on.
- **Mesh upload.** A road mesh made in Studio is lost if you save the place before uploading it. With **Upload meshes automatically** on, the plugin uploads every road mesh to the signed-in Roblox account as soon as it is built. This only applies when roads are built as meshes.

A generated layout needs no map server. Pick **Generated** as the City Generator's **Source** to build a city with no downloads at all.

## Updating

Studio updates plugins from the Creator Store on its own when **Plugins > Manage Plugins** shows an update. After an update, the plugin's changelog shows a dot until you have read the new entries.

Buildings placed with an older version keep their geometry. To re-bake one with the current plugin, load it in the Building Designer and press **Update building generator** once.
