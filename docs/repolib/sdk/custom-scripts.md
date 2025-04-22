# Using Custom Scripts with REPOLib-Sdk

Unfortunately, custom scripts cannot be developed from inside the Unity editor. Instead, you have to write your scripts elsewhere:

- Create a new C# project for R.E.P.O. modding (see [Developing Mods](../../develop.md)).
- Add `REPOLib` as a dependency to the project (see [Getting Started in the API section](../api/start.md)).
- Write your scripts in that project.
- Build the project and copy the output DLL into your Unity project.
- If needed, copy the BepInEx dlls to your project.
  - If you used the [R.E.P.O. Project Patcher](https://github.com/Kesomannen/unity-repo-project-patcher), these will already be in your project.
- Attach the scripts to your prefabs.
- Include the DLL in the `Extra Files` field on your `Mod` asset.

::: tip
You can use a MSBuild target to automatically copy the DLL on each build.
:::
