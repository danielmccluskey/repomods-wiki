# Registering Valuables with REPOLib

::: info NOTE
This page assumes you have a HarmonyX project setup for R.E.P.O. modding.\
If not, first follow the guide in [HarmonyX Project Setup](../../../harmonyx.md).
:::

Registering a valuable:

```C#
private void Awake()
{
    REPOLib.BundleLoader.LoadBundle("your_assetbundle_file_path", assetBundle => 
    {
        var prefab = assetBundle.LoadAsset<GameObject>("your_valuable_prefab");
        REPOLib.Modules.Valuables.RegisterValuable(prefab);
    });
}
```

Registering a valuable to a specific level:

```C#
private void Awake()
{
    REPOLib.BundleLoader.LoadBundle("your_assetbundle_file_path", assetBundle => 
    {
        var prefab = assetBundle.LoadAsset<GameObject>("your_valuable_prefab");

        // Vanilla Valuable Presets:
        // - "Valuables - Generic"
        // - "Valuables - Wizard"
        // - "Valuables - Manor"
        // - "Valuables - Arctic"
        // - "Valuables - Museum"

        var presets = new List<string> { "Valuables - Wizard" };
        REPOLib.Modules.Valuables.RegisterValuable(prefab, presets);
    });
}
```

The `Valuables - Generic` preset applies to every Vanilla Level.

<!-- BLOKBUSTR TODO: "Recommended" and "Not Recommended" terminology feels insufficient and inexact. -->
::: tip MODDED LEVELS
There are two options for your valuable to spawn in modded levels:
1. You include the modded level's preset alongside the other presets you want to use. (**Recommended**)
2. The level author includes the `Valuables - Generic` preset in their level, and your valuable uses the `Valuables - Generic` preset. (**Not Recommended**)
:::
