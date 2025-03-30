# Getting Started with REPOLib

Reference [REPOLib](https://www.nuget.org/packages/Zehs.REPOLib) in your project's `.csproj` file:

```xml
<ItemGroup>
  <PackageReference Include="Zehs.REPOLib" Version="1.*" />
</ItemGroup>
```

Add REPOLib as a dependency to your plugin class:

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
