# Creating Valuables with REPOLib-Sdk

- Create a valuable prefab.
  - More documentation is on its way here. For now, use the vanilla valuables as a reference. If you used the patcher, they are located in `Assets/REPO/Game/Resources/valuables`.
- Right click in your mod folder (or any subfolder) and choose `Create > REPOLib > Valuable`.
- Fill in the fields:
  - `Prefab`: A reference to your prefab. The prefab does not have to be in the mod folder.
  - `Valuable Presets`: The valuable presets to register the valuable to. The vanilla values are:
    - `Valuables - Generic` (applies to every level)
    - `Valuables - Wizard`
    - `Valuables - Manor`
    - `Valuables - Arctic`
