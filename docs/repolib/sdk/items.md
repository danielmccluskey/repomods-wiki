# Creating Shop Items with REPOLib-Sdk

- Create an item prefab.
  - More documentation is on its way here. For now, use the vanilla item prefabs as a reference. If you used the patcher, they are located in `Assets/REPO/Game/Resources/items`.
- Create an `Item` by right clicking and going to `Create > Other > Item`.
  - More documentation is on its way here. For now, use the vanilla items as a reference. If you used the patcher, they are located in `Assets/REPO/Game/Resources/items/items`.
- Right click in your mod folder (or any subfolder) and choose `Create > REPOLib > Item`.
- Fill in the fields:
  - `Prefab`: A reference to your prefab. The prefab does not have to be in the mod folder.

**If you aren't able to fill in the `Prefab` field:** This is due to a check in the vanilla game code. To disable the check, do the following:

- Find the `Item.cs` file under `REPO/Game/Scripts/Assembly-Csharp`.
- Open the file and remove the `OnValidate` method, that is:

```c#
// delete from here...
private void OnValidate()
{
	// other code
}
// ...to here
```
