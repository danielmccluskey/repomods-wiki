# Creating Enemies with REPOLib SDK

::: warning NOTICE
This page is currently Work in Progress!
:::

::: info NOTE
**This guide assumes you have a REPOLib Unity project set up for REPOLib modding.\
If not, follow [Getting Started](./start.md) first.**
:::

- Create an `EnemySetup` asset by right-clicking and choosing `Create > Other > Enemy Setup`.
  - As with Valuables, you can use the vanilla Enemies as reference.
- Right click in your mod folder (or any subfolder) and choose `Create > REPOLib > Enemy`. Configure the fields:
  - `Setup`: The reference to the `EnemySetup` asset you created prior.
  - `Spawn Objects`: A list of prefabs that will be spawned when your Enemy is chosen. Usually, you'll only need to add your single Enemy prefab here.
