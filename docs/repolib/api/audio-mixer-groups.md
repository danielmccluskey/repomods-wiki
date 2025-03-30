# Fixing Audio Mixer Groups with REPOLib

Fixing audio mixer groups on a prefab and their children:

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
        GameObject prefab = assetBundle.LoadAsset<GameObject>("your_prefab");

        // Fix the audio mixer groups on a prefab and their children.
        REPOLib.Modules.Utilities.FixAudioMixerGroups(prefab);
    }
}
```

Registering any features will automatically fix their prefabs audio mixer groups.
