# Registering Valuables with REPOLib

Registering a valuable:

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
        GameObject prefab = assetBundle.LoadAsset<GameObject>("your_valuable_prefab");

        // Register a valuable.
        REPOLib.Modules.Valuables.RegisterValuable(prefab);
    }
}
```

Registering a valuable to a specific level:

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
        GameObject prefab = assetBundle.LoadAsset<GameObject>("your_valuable_prefab");

        // Valuables Presets:
        // "Valuables - Generic"
        // "Valuables - Wizard"
        // "Valuables - Manor"
        // "Valuables - Arctic"

        List<string> presets = new List<string> { "Valuables - Wizard" };

        // Register a valuable.
        REPOLib.Modules.Valuables.RegisterValuable(prefab, presets);
    }
}
```
