# Getting Started with REPOLib (C#)

::: info NOTE
This page assumes you have a HarmonyX project setup for R.E.P.O. modding.\
If not, first follow the guide in [HarmonyX Project Setup](../../../harmonyx.md).
:::

## Installation

Reference [REPOLib](https://www.nuget.org/packages/Zehs.REPOLib) in your project's `.csproj` file:

```XML {2}
<ItemGroup>
  <PackageReference Include="Zehs.REPOLib" Version="4.*" />
</ItemGroup>
```

Add REPOLib as a dependency to your plugin class:

```C# {2}
[BepInPlugin("You.YourMod", "YourMod", "1.0.0")]
[BepInDependency("REPOLib", BepInDependency.DependencyFlags.HardDependency)]
public class YourMod : BaseUnityPlugin
{
    // ...
}
```

You are now ready to start coding using REPOLib!
