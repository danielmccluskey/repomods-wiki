# Registering Network Prefabs with REPOLib

::: info NOTE
This page assumes you have a Harmony project setup for R.E.P.O. modding.\
If not, first follow the guide in [Harmony Project Setup](../../../harmonyx.md).
:::

Registering a network prefab:

```c#
private void Awake()
{
    REPOLib.BundleLoader.LoadBundle("your_assetbundle_file_path", assetBundle =>
    {
        var prefab = assetBundle.LoadAsset<GameObject>("your_network_prefab");
        REPOLib.Modules.NetworkPrefabs.RegisterNetworkPrefab(prefab);
    });
}
```
