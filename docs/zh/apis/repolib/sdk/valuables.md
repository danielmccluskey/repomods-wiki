# 使用 REPOLib-Sdk 创建 Valuables

::: info 注意
**本指南假设你已经为 REPOLib modding 设置好了 REPOLib Unity 项目。\
如果尚未设置，请先参阅[快速入门](./start.md)。**
:::

- 在你的 mod 文件夹中右键点击，选择 `Create > REPOLib > Valuable`。
- 填写字段：
  - `Prefab`：引用你的预制体。将你的预制体拖放到此字段中。
  - `Valuable Presets`：决定你的 Valuable 可以在哪些关卡中生成的预设。原版预设有：
    - `Valuables - Generic`（始终适用于所有原版关卡）
    - `Valuables - Wizard`
    - `Valuables - Manor`
    - `Valuables - Arctic`
    - `Valuables - Museum`

::: tip Modded 关卡的提示
有两种方式让你的 Valuable 在 Modded 关卡中生成：
1. 你在其他预设中包含 Modded 关卡的预设。（**推荐**）

2. 关卡作者在其关卡中包含 `Valuables - Generic` 预设，而你的 Valuable 使用 `Valuables - Generic` 预设。（**不推荐**）
:::

## 创建预制体

本快速入门将指导你创建自定义预制体。我们将制作这个 Among Us 的 Valuable，但大部分步骤对大多数 Valuables 都适用：

![截图](/repolib/sdk/valuables/9.png)

---

最简单的入门方式是复制一个原版 Valuable。如果你使用了 project patcher，它们位于 `Assets/REPO/Game/Resources/valuables`。

我们将选择 `Valuable Trophy` 预制体（在 `03 medium` 下），因为它大小合适且没有复杂的功能。将其复制到你的 mod 文件夹中并重命名：

![截图](/repolib/sdk/valuables/0.png)

接下来，我们将模型添加到预制体中。如果你想跟着做，可以在此处[下载](https://skfb.ly/6VEEJ)此模型。

![截图](/repolib/sdk/valuables/1.png)

::: warning
创建或浏览模型时，请注意顶点数。高顶点数的模型会占用更多内存、下载时间更长，并可能导致性能问题。

此示例模型细节稍多，可能不太适合发布。
:::

确保模型是 `Object` 游戏对象的子对象，如截图所示。

在此基础上，我们可以居中模型并安全地删除旧模型（名为 `Mesh`）：

![截图](/repolib/sdk/valuables/2.png)

接下来，我们需要设置碰撞体。一个 Valuable 由一个或多个 `Valuable Colliders` 组成，每个都包含这些组件：

![截图](/repolib/sdk/valuables/3.png)

碰撞体形状（和 `Phys Grab Object Collider` 类型）可能会有所不同，例如 `Box` 或 `Capsule`。对于这个 Valuable，我们将保持简单，使用 Box 碰撞体。

::: warning
确保你的模型游戏对象没有 `Mesh Collider` 组件。如果有，请将其移除以避免以下错误：\
`[Error  : Unity Log] Non-convex MeshCollider with non-kinematic Rigidbody is no longer supported since Unity 5.`

**不要**勾选 `Convex` 复选框来修复此问题，即使网络搜索结果建议这样做。
:::

删除三个碰撞体，只保留一个 Box 碰撞体。然后调整其大小以适配 Among Us 角色的身体：

![截图](/repolib/sdk/valuables/4.png)

继续处理背包和面罩：

![截图](/repolib/sdk/valuables/5.png)

::: tip
要复制游戏对象，选中它并按 `Ctrl + D`。
:::

模型和碰撞体设置完成后，我们可以在预制体根目录配置 `Valuable Object` 组件：

![截图](/repolib/sdk/valuables/6.png)

- `Durability Preset`：Valuable 多容易贬值和损坏。
- `Value Preset`：Valuable 的价值范围（最小值和最大值之间）。
- `Phys Attribute Preset`：物体的质量（重量）。
- `Audio Preset`：包含 Valuable 碰撞和损坏的音效。
- `Audio Preset Pitch`：调整音效的音高。
- `Particle Colors`：物体碰撞时创建的粒子颜色。较大的颜色比例意味着该颜色的粒子更常见。
- `Volume Type`：物体的大小类别。

以下是我们的 Among Us Valuable 的一些合理值：

![截图](/repolib/sdk/valuables/7.png)

最后一步是在 `Room Volume Check` 组件中设置物体的边界。最简单的方法是导入 Zehs 的自定义编辑器脚本。[在此处下载](https://raw.githubusercontent.com/ZehsTeam/REPOLib-Sdk/refs/heads/main/Scripts/RoomVolumeCheckEditor.cs)并将其拖放到你的项目中，放在名为 `Editor` 的文件夹内。你可以在 `Assets` 文件夹中创建一个名为 `Editor` 的文件夹。

之后，你应该能在 Inspector 中看到此按钮：

![截图](/repolib/sdk/valuables/8.png)

点击它以自动将紫色边界与你的碰撞体对齐。

**就是这样！** 现在你有了预制体，请按照[本页面顶部](#使用-repolib-sdk-创建-valuables)的步骤将 Valuable 注册到 REPOLib。

::: tip
要为你的 Valuable 添加自定义功能，例如 `Time Glass` 改变玩家的声音音高，请参阅[自定义脚本指南](./custom-scripts.md)。
:::

## 致谢

"Among Us Astronaut - Clay" (https://skfb.ly/6VEEJ) 由 MatMADNESS 创作，基于 Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/) 授权。
