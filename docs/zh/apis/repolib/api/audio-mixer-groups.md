# 使用 REPOLib 修复音频混音器组

::: info 注意
本页面假设你已经为 R.E.P.O. modding 搭建了 HarmonyX 项目。\
如果还没有，请先参考 [HarmonyX 项目搭建](../../../harmonyx.md) 指南。
:::

将 bundle 资源中的音频混音器组与实际运行时的等效项进行匹配。

修复预制体及其子对象的音频混音器组：

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
你很少需要手动执行此操作，因为注册功能时会自动修复其预制体的混音器组。
:::
