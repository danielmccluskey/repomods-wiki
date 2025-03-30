# Registering Enemies with REPOLib

Registering an enemy:

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
        EnemySetup enemy = assetBundle.LoadAsset<EnemySetup>("your_enemy_setup");

        // Register an enemy.
        REPOLib.Modules.Enemies.RegisterEnemy(enemy);
    }
}
```
