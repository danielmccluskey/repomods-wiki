# Registering Shop Items with REPOLib

::: info NOTE
This page assumes you have a HarmonyX project setup for R.E.P.O. modding.\
If not, first follow the guide in [HarmonyX Project Setup](../../../harmonyx.md).
:::

Registering an item:

```C#
using REPOLib.Objects.Sdk;

private void Awake()
{
    REPOLib.BundleLoader.LoadBundle("your_assetbundle_file_path", assetBundle =>
    {
        var item = assetBundle.LoadAsset<ItemContent>("your_item_content");
        REPOLib.Modules.Items.RegisterItem(item);
    });
}
```
