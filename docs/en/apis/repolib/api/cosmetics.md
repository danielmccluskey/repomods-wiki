# Registering Cosmetics with REPOLib

::: info NOTE
This page assumes you have a HarmonyX project setup for R.E.P.O. modding.\
If not, first follow the guide in [HarmonyX Project Setup](../../../harmonyx.md).
:::

Registering a cosmetic:

```c#
using REPOLib.Objects.Sdk;

private void Awake()
{
    REPOLib.BundleLoader.LoadBundle("your_assetbundle_file_path", assetBundle =>
    {
        var cosmeticContent = assetBundle.LoadAsset<CosmeticContent>("your_cosmetic_content");
        REPOLib.Modules.Cosmetics.RegisterCosmetic(cosmeticContent);
    });
}
```
