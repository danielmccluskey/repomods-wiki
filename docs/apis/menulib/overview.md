# MenuLib Overview

[MenuLib](https://thunderstore.io/c/repo/p/nickklmao/MenuLib) is a programming API designed to simplify the creation and management of custom UI menus within R.E.P.O.

::: warning Work in Progress
This documentation page is currently a placeholder. Detailed API references and usage examples will be added soon.
:::

### Features

- **Easy Menu Registration**: Quickly add custom buttons and panels to the game's existing UI.
- **Standardized UI Elements**: Use pre-built components that match the game's aesthetic.
- **Event Handling**: Simple hooks for button clicks and value changes.

### Quick Start

1. Ensure you have added the dependency to your `.csproj` as described in the [HarmonyX Project Setup](../../harmonyx.md#adding-thunderstore-dependencies).
2. Add a `BepInDependency` attribute to your plugin class:
   ```C#
   using System;
   using BepInEx;
   
   [BepInPlugin("You.YourMod", "YourMod", "1.0.0")]
   [BepInDependency("nickklmao.menulib")] // [!code focus]
   private class YourMod : BaseUnityPlugin
   {
       // ...
   }
   ```

## Resources
- [Thunderstore Page](https://thunderstore.io/c/repo/p/nickklmao/MenuLib)
- [GitHub Repository](https://github.com/Nickklmao/MenuLib)
