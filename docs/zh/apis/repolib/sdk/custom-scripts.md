# 在 REPOLib-Sdk 中使用自定义脚本

很遗憾，自定义脚本无法在 Unity 编辑器内开发。你需要在其他地方编写脚本：

- 为 R.E.P.O. modding 创建一个新的 HarmonyX 项目（参见 [HarmonyX 项目设置](../../../harmonyx.md)）。
- 将 `REPOLib` 添加为项目的依赖项（参见 [API 部分的快速入门](../api/start.md)）。
- 在该项目中编写脚本。
- 构建项目并将输出的 DLL 复制到你的 Unity 项目中。
- 如果需要，将 BepInEx dll 复制到你的项目中。
  - 如果你使用了 [R.E.P.O. Project Patcher](https://github.com/ZehsTeam/unity-repo-project-patcher)，这些文件应该已经在你的项目中了。
- 将脚本附加到你的预制体上。
- 在 `Mod` 资产的 `Extra Files` 字段中包含该 DLL。

::: tip
你可以使用 MSBuild 目标在每次构建时自动复制 DLL。
:::
