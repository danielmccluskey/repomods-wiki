# 发布到 Thunderstore

一旦你导出了模组（通过 [Unity 工作流程](../apis/repolib/sdk/start.md#export-a-mod) 和/或手动导出 HarmonyX 项目），你就可以与社区分享了。

### 1. 准备你的包
Thunderstore 需要一个 `.zip` 文件，其中至少包含以下三个根目录文件：
- **`icon.png`**：256x256 像素的方形图片。
- **`manifest.json`**：包含元数据（名称、版本、依赖）的 JSON 文件。
- **`README.md`**：描述你模组的 markdown 文件。
- **你的模组文件**：实际的 `Mod.dll`（如果编写了自定义代码/功能）和你的资源包（例如 `MyModAssets.repobundle`）。

::: tip
如果你使用了 **REPOLib-Sdk** 来导出模组，此 zip 文件会自动在你选择的输出文件夹中创建。
:::

### 2. 上传模组
1. 确保你已登录 [Thunderstore](https://thunderstore.io/c/repo)。
4. 点击 **"Upload"** 按钮。
5. 选择 **"R.E.P.O."** 作为游戏。
6. 选择最适合你模组的 **类别**（例如 Cosmetics、Items、Enemies 等）。
7. 将你的 `.zip` 文件拖放到上传区域。
8. 点击 **"Submit"**。

### 3. 更新模组
要更新现有模组，你必须：
1. 在 `manifest.json` 中增加 **版本号**（例如从 `1.0.0` 更改为 `1.0.1`）。Thunderstore 将拒绝使用已使用版本号的上传。
2. 按照与上述相同的上传步骤操作。Thunderstore 将根据 manifest 中的名称自动将其检测为现有包的更新。

::: tip 我的模组在模组管理器中没有显示！
上传后，你的模组可能需要几个小时才会出现在模组管理器中！
:::

::: tip
**有关 Thunderstore 包的更多信息，请访问 [thunderstore 文档](https://thunderstore.io/c/repo/create/docs/)。**
:::

::: warning
**不要** 在 `manifest.json` 中更改模组名称（如果你打算更新现有列表）。更改名称将创建一个全新的模组页面，而不是更新旧页面。
:::
