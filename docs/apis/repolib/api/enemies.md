# Registering Enemies with REPOLib

::: info NOTE
This page assumes you have a HarmonyX project setup for R.E.P.O. modding.\
If not, first follow the guide in [HarmonyX Project Setup](../../../harmonyx.md).
:::

Registering an enemy:

```C#
using REPOLib.Objects.Sdk;

private void Awake()
{
    REPOLib.BundleLoader.LoadBundle("your_assetbundle_file_path", assetBundle =>
    {
        var enemyContent = assetBundle.LoadAsset<EnemyContent>("your_enemy_content");
        REPOLib.Modules.Enemies.RegisterEnemy(enemyContent);
    });
}
```
