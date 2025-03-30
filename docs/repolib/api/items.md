# Registering Shop Items with REPOLib

Registering an item:

```c#
[BepInPlugin("You.YourMod", "YourMod", "1.0.0")]
[BepInDependency(REPOLib.MyPluginInfo.PLUGIN_GUID, BepInDependency.DependencyFlags.HardDependency)]
public class YourMod : BaseUnityPlugin
{
    // ...

    private void Awake()
    {
        // ...

        AssetBundle assetBundle = AssetBundle.LoadFromFile("your_assetbundle_file_path");
        Item item = assetBundle.LoadAsset<Item>("your_item");

        // Register an item.
        REPOLib.Modules.Items.RegisterItem(item);
    }
}
```
