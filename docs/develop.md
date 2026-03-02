# Developing Mods

Ready to start making mods for R.E.P.O.? When you're setting up a new project, you generally have two main paths to choose from.\
The best approach depends entirely on your experience level and what your mod actually needs to do.

### 1. The Unity Workflow
- [**Via a Patched Unity Project**](unity.md)

If you are new to modding or just want to create content without writing any code, this is the way to go. Using a patched Unity project is perfect for adding new items, models, and standard assets, especially when paired with tools like REPOLib.

### 2. The HarmonyX Workflow
- [**Via a HarmonyX Project**](harmonyx.md)

If your mod needs to change how the game plays or requires custom logic, you'll need to write some C# scripts. This workflow relies on BepInEx and HarmonyX to patch and modify the game's code directly.

## Combining Both Methods
While we list these as two separate methods, **combining them is standard practice** for larger mods. Most advanced projects use the Unity workflow to build and bundle their custom assets, alongside a HarmonyX project to handle the custom C# code that actually brings those assets to life in-game.