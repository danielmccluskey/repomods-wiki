# R.E.P.O. Unity 项目设置

设置 Unity 项目以创建 R.E.P.O. Mod 的指南。

此 Unity 工作流简化了自定义内容创建。\
通过将 **[REPOLib-Sdk](/en/apis/repolib/sdk/start.md)** Unity Editor 包与核心 **[REPOLib](https://thunderstore.io/c/repo/p/Zehs/REPOLib/)** DLL 结合使用，你可以在完全不编写代码的情况下构建 Mod。

虽然 **REPOLib** 不是强制性的，但*强烈*推荐使用，**特别是**如果你是 R.E.P.O. Mod 新手。\
对于有经验的开发者，**REPOLib** 完全可扩展，意味着你仍然可以无缝地将自己的自定义 C# 脚本与其集成。

::: info 注意
Unity 工作流主要用于创建敌人、关卡、贵重物品和物品！
:::

## 设置 Unity Editor

- **Unity Hub：** 下载并安装 [Unity Hub](https://unity.com/download)。
- **Unity Editor：** 安装 Unity Editor 版本 [2022.3.62f3](unityhub://2022.3.62f3/96770f904ca7)。
- **.NET SDK：** [版本 9.0.x](https://dotnet.microsoft.com/en-us/download/dotnet/9.0)。这是 AssetRipper 运行所需的。
- **Git：** 下载并安装 [Git](https://git-scm.com/downloads)。这是通过 Git URL 在 Unity 中安装包所需的。
<!-- NOTE: AssetRipper may be updated with a more Recent build which will Require .Net SDK 10 in the Future -->

## Unity 项目设置

1. 使用以下配置创建新的 Unity 项目（参见下图）：
    * **Editor 版本：`2022.3.62f3`**
    * **项目位置：** 本地项目
    * **模板：** 3D（内置渲染管线）
    ![Screenshot](/unity/0.png)
2. 在 Unity 菜单栏中转到 **`Window > Package Manager`**。
3. 点击左上角的 **`+`** 按钮，选择 **`Add package from git URL`**。
    ![Screenshot](/unity/1.png)
4. 依次粘贴以下所有 Unity 包链接：
    ![Screenshot](/unity/2.png)

    - **Unity Project Patcher：** 从游戏构建生成 Unity 项目，以便在编辑器中运行游戏。
        ```bash
        https://github.com/nomnomab/unity-project-patcher.git
        ```

    - **Unity Project Patcher BepInEx：** Unity Project Patcher 项目的 BepInEx 处理器。
        ```bash
        https://github.com/Kesomannen/unity-project-patcher-bepinex.git
        ```

    - **Unity Repo Project Patcher：** 从 R.E.P.O. 构建生成 Unity 项目的游戏包装器，用于编辑器内运行。
        ```bash
        https://github.com/ZehsTeam/unity-repo-project-patcher.git
        ```

### 修补项目

1. 成功添加上述三个包后，导航到 Unity 菜单栏并点击 **`Tools > Unity Project Patcher > Configs > UPPatcherUserSettings`**。
    
    ![Screenshot](/unity/3.png)

2. 你将在 **Inspector** 面板中看到新选项。保留所有预填字段不变，只添加游戏文件夹路径。
    
    ![Screenshot](/unity/4.png)

3. 接下来，返回 Unity 菜单栏并点击 **`Tools > Unity Project Patcher > Open Window`**。
    
    ![Screenshot](/unity/5.png)

4. 在新打开的 **`UPPatcher - RepoWrapper`** 窗口中，点击窗口底部的 **`Enable BepInEx`** 并等待过程完成。
    
    ![Screenshot](/unity/6.png)

5. BepInEx 启用完成后，点击窗口顶部的 **`Run Patcher`** 开始修补项目。
    
    ![Screenshot](/unity/7.png)
    
::: info 注意
**此过程需要一段时间，并将重启 `Unity Editor` 约 4-6 次。\
在最开始，你将收到 `4` 个弹窗。你可以安全地点击每个弹窗的 `OK`。**
:::

6. 编辑器最后一次重启后，将出现一个确认窗口，表示项目已成功修补。点击 **`OK`**。
    
    ![Screenshot](/unity/8.png)

::: warning 故障排除
如果你没有看到此窗口，修补过程失败。请检查 Unity Console 以获取更多信息。
:::

你的 Unity 项目已成功修补，我们建议将 [REPOLib-Sdk](./apis/repolib/sdk/start.md) 添加到你的项目工作流中以简化流程。
