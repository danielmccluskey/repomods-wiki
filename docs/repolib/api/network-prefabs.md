# Registering Network Prefabs with REPOLib

Registering a network prefab:

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
        GameObject prefab = assetBundle.LoadAsset<GameObject>("your_network_prefab");

        // Register a network prefab.
        REPOLib.Modules.NetworkPrefabs.RegisterNetworkPrefab(prefab);
    }
}
```
