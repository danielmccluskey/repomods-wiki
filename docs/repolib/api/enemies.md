# Registering Enemies with REPOLib

Registering an enemy:

```c#
private void Awake()
{
    REPOLib.BundleLoader.LoadBundle("your_assetbundle_file_path", assetBundle => 
    {
        var enemySetup = assetBundle.LoadAsset<EnemySetup>("your_enemy_setup");
        REPOLib.Modules.Enemies.RegisterEnemy(enemySetup);
    });
}
```
