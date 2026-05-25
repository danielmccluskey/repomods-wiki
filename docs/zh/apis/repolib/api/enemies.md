# 使用 REPOLib 注册敌人

::: info 注意
本页面假设你已经为 R.E.P.O. modding 搭建了 HarmonyX 项目。\
如果还没有，请先参考 [HarmonyX 项目搭建](../../../harmonyx.md) 指南。
:::

注册敌人：

```c#
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
