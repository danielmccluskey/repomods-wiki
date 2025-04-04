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

        var presets = new List<string> { "Valuables - Wizard" };
        REPOLib.Modules.Valuables.RegisterValuable(prefab, presets);
    });
}
```
