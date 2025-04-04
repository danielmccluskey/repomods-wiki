# Fixing Audio Mixer Groups with REPOLib

Matches audio mixer groups from bundled assets with the real runtime equivalents.

Fixing audio mixer groups on a prefab and its children:

```c#
private void Awake()
{
    REPOLib.BundleLoader.LoadBundle("your_assetbundle_file_path", assetBundle => 
    {
        var prefab = assetBundle.LoadAsset<GameObject>("your_prefab");
        REPOLib.Modules.Utilities.FixAudioMixerGroups(prefab);
    });
}
```

::: tip
You rarely need to do this manually, as registering features will automatically fix their prefabs' mixer groups.
:::
