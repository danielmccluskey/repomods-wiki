# Creating Levels with REPOLib-Sdk

- Create a `Level` by right clicking and going to `Create > Level > Level Preset`.
  - The patcher outputs vanilla levels to `Assets/REPO/Game/ScriptableObjects/Level` and their assets to `Assets/REPO/Game/Resources/level`.
- On the `Level` asset, make sure that the `Valuable Presets` list is empty.
  - This will make generic valuables spawn in your level. If you'd like specific valuables to also spawn, see [Proxy Valuable Presets](#proxy-Valuable-Presets).
- Right click in your mod folder (or any subfolder) and choose `Create > REPOLib > Level`.
- Fill in the fields.

## Proxy Valuable Presets

To use vanilla `Level Valuables` presets in your levels, you should not simply reference them in the `Level` asset. This is because the bundle will then contain duplicates of all the vanilla valuables from that preset. Instead, you have to create a "proxy" preset:

- Create a `Level Valuables` anywhere in your project by going to `Create > Level > Level Valuable Preset`
- Name the asset exactly as the vanilla one you want to include (see [Create a valuable](#create-a-valuable)).
- Add your newly created preset to `Level Valuables` in your `Level` asset.

At runtime, REPOLib will match the name and replace your proxy with the real thing.
