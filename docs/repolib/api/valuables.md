# Registering Valuables with REPOLib

Registering a valuable:

```c#
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

```c#
private void Awake()
{
    REPOLib.BundleLoader.LoadBundle("your_assetbundle_file_path", assetBundle => 
    {
        var prefab = assetBundle.LoadAsset<GameObject>("your_valuable_prefab");

        // Vanilla Valuables Presets:
        // "Valuables - Generic"
        // "Valuables - Wizard"
        // "Valuables - Manor"
        // "Valuables - Arctic"
        // "Valuables - Museum"

        var presets = new List<string> { "Valuables - Wizard" };
        REPOLib.Modules.Valuables.RegisterValuable(prefab, presets);
    });
}
```

The Preset `Valuables - Generic` Applies to every Vanilla Level.

::: tip Tip for Modded Levels
There are two options for your Valuable to spawn in Modded Levels:
1. You include the Modded Level's Preset alongside the other presets you want to use. (**Recommended**)

2. The level Author includes the `Valuables - Generic` preset in their level, and your valuable uses the `Valuables - Generic` preset. (**Not Recommended**)
:::
