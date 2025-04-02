# Registering Network Prefabs with REPOLib

Registering a network prefab:

```c#
private void Awake()
{
    REPOLib.BundleLoader.LoadBundle("your_assetbundle_file_path", bundle => 
    {
        var prefab = assetBundle.LoadAsset<GameObject>("your_network_prefab");
        REPOLib.Modules.NetworkPrefabs.RegisterNetworkPrefab(prefab);
    });
}
```
