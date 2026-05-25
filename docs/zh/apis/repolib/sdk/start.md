# REPOLib（Unity）快速入门

::: info 注意
本页面假设你已经为 R.E.P.O. modding 设置好了 Unity 项目。\
如果尚未设置，请先参阅 [Unity 项目设置](../../../unity.md)。
:::

### 将 REPOLib 添加到项目中

1. 在 Unity 菜单栏中，前往 **`Window > Package Manager`**。
2. 点击左上角的 **`+`** 按钮，选择 **`Add package from git URL`**。
   ![截图](/unity/1.png)
   - **REPOLib-Sdk：** 用于简化 REPOLib 内容创建和导出的编辑器工具。
     ```bash
     https://github.com/ZehsTeam/REPOLib-Sdk.git
     ```

::: tip
要更新 **REPOLib-Sdk**，打开 Package Manager，在列表中选择 `REPOLib-Sdk` 包，然后点击 **Update**。
:::

REPOLib-Sdk 包安装完成后，你需要将缺失的 REPOLib `.dll` 添加到项目中：

3. 从 Thunderstore 下载 **[REPOLib.dll](https://thunderstore.io/c/repo/p/Zehs/REPOLib/)**。
4. 解压下载的压缩包。
5. 将 `REPOLib.dll` 文件复制或拖放到项目 `Assets` 文件夹中的任意位置。

   ![截图](/repolib/sdk/start/0.png)

6. 要验证安装是否成功，在 Project 窗口中右键点击。你应该能看到一个新的子菜单选项：**`Create > REPOLib`**。

   ![截图](/repolib/sdk/start/1.png)

::: warning
如果你遇到缺少 Assembly-CSharp-firstpass.dll 引用的错误，请在 Project 窗口中选择 `REPOLib.dll`，然后在 Inspector 中取消勾选 `Validate References`：

![截图](/repolib/sdk/start/2.png)
:::

::: tip
将来要更新 **REPOLib**，只需用新版本替换现有的 `.dll` 文件即可。
:::

## 使用 Mods 和内容

REPOLib 中的内容通过 `Mod` 和 `Content` 资产进行组织。每个 `Mod` 都有自己的文件夹来存放内容。以下是文件层级结构示例：

```
- Assets
    - MyModFolder
        - MyMod.asset
        - MyValuable.asset // 内容资产，引用预制体
        - MyValuablePrefab.prefab
        - EnemyFolder
            - MyEnemy.asset // 子文件夹中的内容也可以
    - MyEnemyPrefab.prefab // 其他资产可以放在 mod 文件夹之外
```

Mods 可以从编辑器中自动导出，REPOLib-Sdk 会处理资产打包和为 Thunderstore 准备文件（参见[导出 Mod](#export-a-mod)）。

### 创建新 Mod

- 在项目中创建一个新文件夹。
- 在文件夹中右键点击，选择 `Create > REPOLib > Mod`。
- 填写 `Mod` 资产上的字段：
  - `Name`：mod 的名称，显示在 Thunderstore 上。只能包含数字、字母和下划线。
  - `Author`：你的 Thunderstore 团队名称。
  - `Version`：必须是 `X.Y.Z` 格式。
  - `Dependencies`：依赖项字符串列表。应始终包含 `Zehs-REPOLib-X.X.X`（其中 `X.X.X` 是目标版本）。
  - `Website Url`：可选。
  - `Icon`：必须是 256x256 的 PNG 文件。
  - `Readme`：mod 的详细描述，放在单独的文件中。支持 Markdown 格式。
  - `Extra Files`：要包含在包中的其他文件，例如包含脚本的 dll。

::: tip
你可以在同一个项目中拥有多个 mod，只要它们在不同的文件夹中即可。
:::

### 导出 Mod

- 选择 `Mod` 资产，在 Inspector 中点击 `Export`。
  - 在窗口中你可以看到 REPOLib-Sdk 找到的关联内容文件。
- 选择 `Output Path`。路径相对于 Unity 项目（除非你指定绝对路径）。
- 点击 `Export` 并等待。完成后，应该会出现一个窗口显示导出的 zip 文件。此文件可以上传到 Thunderstore 或本地导入 mod 管理器。

::: warning
REPOLib-Sdk 会在导出路径下创建多个文件夹和文件。因此，建议使用一个新的空文件夹作为目标目录。
:::

::: tip
也可以通过 `Window > REPOLib Exporter` 访问导出窗口
:::
