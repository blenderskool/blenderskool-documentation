---
title: Setup syncing in Kaleidoscope add-on | Blender Skool Documentation
---

# Setup syncing in Kaleidoscope

<youtube>
	Q3LEvhJx37U
</youtube>

In this video I will be showing you how to setup syncing feature in the Kaleidoscope add-on.The Syncing feature of the Kaleidoscope add-on allows you to sync your saved palettes and values among all your devices with Kaleidoscope add-on.


## Steps to setup syncing
- Register with a Cloud Storage service (Eg. [Dropbox](https://www.dropbox.com/), [Google Drive](https://drive.google.com/), etc). Download their Desktop app and Install it.
- There should now be a folder created by that app. If you put any file in that folder, it will get synced automatically with your cloud storage.
- In the User Preferences of the Kaleidoscope add-on, select the `Path to sync` as the path of the folder created by the app you installed.

## Steps to retrive files from other machine
- Download and install the **same desktop app** of the Cloud Storage service.
- In the User Preferenced of the Kaleidoscope add-on, select `Path to sync` as the path of the folder created by the app you installed.
- Kaledioscope will automatically get the palettes and values saved in that directory

## General folder structure

```text
.
└─ Folder you choose
   ├─ palettes
   │  └─ all your palettes
   └─ values
      └─ all your values
```