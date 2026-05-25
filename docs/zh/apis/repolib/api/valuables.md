# 使用 REPOLib 注册贵重物品

::: info 注意
本页面假设你已经为 R.E.P.O. modding 搭建了 HarmonyX 项目。\
如果还没有，请先参考 [HarmonyX 项目搭建](../../../harmonyx.md) 指南。
:::

注册贵重物品：

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

将贵重物品注册到特定关卡：

```c#
private void Awake()
{
    REPOLib.BundleLoader.LoadBundle("your_assetbundle_file_path", assetBundle => 
    {
        var prefab = assetBundle.LoadAsset<GameObject>("your_valuable_prefab");

        // 原版贵重物品预设：
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

预设 `Valuables - Generic` 适用于所有原版关卡。

::: tip Mod 关卡提示
你的贵重物品在 Mod 关卡中有两种生成方式：
1. 将 Mod 关卡的预设与其他你想使用的预设一起包含。（**推荐**）

2. 关卡作者在其关卡中包含 `Valuables - Generic` 预设，而你的贵重物品使用 `Valuables - Generic` 预设。（**不推荐**）
:::
