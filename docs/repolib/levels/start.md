# Creating Levels with REPOLib-Sdk

- Create a `Level` by right clicking and going to `Create > Level > Level Preset`.
  - The patcher outputs vanilla levels to `Assets/REPO/Game/ScriptableObjects/Level` and their assets to `Assets/REPO/Game/Resources/level`.
- On the `Level` asset, make sure that the `Valuable Presets` list is empty.
  - This will make generic valuables spawn in your level. If you'd like specific valuables to also spawn, see [Proxy Valuable Presets](#proxy-Valuable-Presets).
- Right click in your mod folder (or any subfolder) and choose `Create > REPOLib > Level`.
- Fill in the fields.

## Proxy Valuable Presets

To use non-generic valuable presets in your level, you should not simply reference them in the `Level` asset. This is because the bundle will then contain duplicates of the valuables from that preset. Instead, you have to create a "proxy" preset:

- Create a `Level Valuables` anywhere in your project by going to `Create > Level > Level Valuable Preset`
  - For vanilla presets, name it exactly as the original (see [Create a valuable](#create-a-valuable) for those values).
  - For custom presets, you are free to choose any name. However, it's recommended to stick to the `Valuables - ` naming convention.
- Add your newly created preset to `Level Valuables` list in your `Level` asset.

At runtime, REPOLib will match the name and replace your proxy with the real thing.
