# REPOLib 入门（C#）

::: info 注意
本页面假设你已经为 R.E.P.O. modding 搭建了 HarmonyX 项目。\
如果还没有，请先参考 [HarmonyX 项目搭建](../../../harmonyx.md) 指南。
:::

## 安装

在项目的 `.csproj` 文件中引用 [REPOLib](https://www.nuget.org/packages/Zehs.REPOLib)：

```xml
<ItemGroup>
  <PackageReference Include="Zehs.REPOLib" Version="3.*" />
</ItemGroup>
```

在插件类中添加 REPOLib 作为依赖：

```c#
[BepInDependency(REPOLib.MyPluginInfo.PLUGIN_GUID, BepInDependency.DependencyFlags.HardDependency)]
```

```c#
[BepInPlugin("You.YourMod", "YourMod", "1.0.0")]
[BepInDependency(REPOLib.MyPluginInfo.PLUGIN_GUID, BepInDependency.DependencyFlags.HardDependency)]
public class YourMod : BaseUnityPlugin
{
    // ...
}
```

现在你可以开始使用 REPOLib 进行编码了！
