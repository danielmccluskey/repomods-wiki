# 使用 REPOLib-Sdk 创建关卡

::: warning 注意
本页面目前仍在开发中！
:::

::: info 注意
**本指南假设你已经为 REPOLib modding 设置好了 REPOLib Unity 项目。\
如果尚未设置，请先参阅[快速入门](./start.md)。**
:::

  - Patcher 会将原版关卡输出到 `Assets/REPO/Game/ScriptableObjects/Level`，其资产输出到 `Assets/REPO/Game/Resources/level`。
- 在 `Level` 资产上，确保 `Valuable Presets` 列表为空。
  - 这将使通用 Valuables 在你的关卡中生成。如果你希望特定的 Valuables 也生成，参见 [Proxy Valuable Presets](#proxy-Valuable-Presets)。

## 创建 Level 对象

- 在你的 mod 文件夹中右键点击，选择 `Create > Level > Level Preset` 来创建一个 `Level` 对象。默认名称为 `Level - _____`。将 `Level` 对象中的下划线替换为你的 `Resource` 名称。
- 填写字段：
  - `Resource Path`：你的关卡的唯一名称，所有文件都将以此命名。
  - `Narrative Name`：游戏中显示给玩家的实际名称。
  - 在本示例关卡中，我们将使用：
     - `Resource Path`：Example
     - `Narrative Name`：Example Level
  - `Loading Graphics 01`：关卡加载画面中卡车撞入的建筑精灵图。
  - `Loading Graphics 02`：树木/山脉等地形的背景精灵图。
  - `Loading Graphics 03`：远景地形以及地平线/月亮/太阳的远处精灵图。
  - `Valuable Presets`：你希望在关卡中出现的 Valuables，参见 [Proxy Valuable Presets](#proxy-Valuable-Presets)。
  - `Music Preset`：关卡中随机播放的"音乐"。目前我们先使用一个占位的原版预设：`Level Music - Arctic (Level Music)`。
  - `Ambience Presets`：关卡中随机播放的环境音效。目前我们先使用一个占位的原版预设：`Level Ambience - Global (Level Ambience)`。


## 创建 Level Content 对象

- 在你的 mod 文件夹中右键点击，选择 `Create > REPOLib > Level` 来创建一个 `Level Content` 对象。
将其重命名为你的 `Narrative Name`。
- 填写字段：
  - `Level`：将你的 `Level` 对象拖入此条目。（`Level - Example`）
  - `Connect Object`：始终在连接模块之间生成的[门](#doors)预制体。（可选）
  - `Block Object`：始终在未连接模块之间生成的预制体。（可选）


## 模块（Modules）

- 共有 5 种模块（房间）：
  - `Start Room`：包含玩家出生的卡车和第一个提取点的模块。这些模块没有难度等级，且始终只生成 1 个。
  - `Normal`：最常见的模块，包含[开关](#Switches)，可以在所有 4 个面进行连接。有 3 个难度等级。
  - `Passage`：始终有两个入口。有 3 个难度等级。
  - `Dead End`：最稀有的模块，有机会生成在与其他任意模块连接的位置。有 3 个难度等级。
  - `Extraction`：包含提取点的必需模块。有 3 个难度等级。

- 模块大小：
  - 原版模块的最大尺寸为 3x3。坐标为 `-7.5, 7.5`（x,z）
  - 超出模块大小的内容有可能导致与相邻模块重叠，`Start Room` 除外，其大小可以任意设置。
  - 根据这些信息，我们知道门始终会生成在以下坐标：
  
| 普通模块（Normal） |   X   |   Y   |   Z   |
| -------------- | :---: | :---: | :---: |
| 上（Top）            |   0   |   0   |  7.5  |
| 右（Right）          |  7.5  |   0   |   0   |
| 下（Bottom）         |   0   |   x   | -7.5  |
| 左（Left）           | -7.5  |   0   |   0   |

| 模块类型（Module Type）  |   X   |   Y   |   Z   |
| ------------ | :---: | :---: | :---: |
| Starter Room |   0   |   0   |   0   |
| Dead End     |   0   |   0   | -7.5  |
| Extraction   |   0   |   x   | -7.5  |
| Passage TOP  |   0   |   0   |  7.5  |
| Passage BOT  |   0   |   0   | -7.5  |


## 模块道具开关（Module Prop Switches）

- 模块道具开关仅用于 `Normal` 模块，并且是必需的。它们用于根据某个面是否与其他模块连接来改变房间的外观。
- 通常我们为模块的每个面设置 4 个父对象。每个父对象都应包含 `Module Prop Switch` 脚本，你可以在其中分别拖入 `Connected` 和 `Not Connected` 父对象以及连接方向。
![截图](/repolib/sdk/levels/ModulePropSwitch.png)

## 关卡路径点（Level Path Points）

- `Level Points` 需要位于 [navmesh](#navmesh) 上，敌人将其用作漫游点和通用导航。
- `Level Points` 不应放在提取模块中。
- 连接的路径点需要在两个对象上正确连接和引用。例如，如果 `TOP` 有一个连接点 `Middle`，那么 `Middle` 路径点也应该有一个到 `TOP` 的连接点。
- 要分配路径点，点击并拖动所需的点到 `Level Point` 对象的 `Connected Points` 字段中。
- `Level Points` 有两种类型，用于敌人导航。从所有连接的路径点之间会画一条直线，该路径上不应有任何物体阻挡。
    - `External`：标记为 `Module Connect` 对象，除了 Extraction 模块外，每种模块类型都需要。External 路径点不应相互连接，只能连接到 `Internal` 路径点。External 路径点应放置在/靠近以下坐标。

| 外部路径点（External Path Points） |   X   |   Y   |   Z   |
| -------------------- | :---: | :---: | :---: |
| Top                  |   0   |   0   |   5   |
| Right                |   5   |   0   |   0   |
| Bottom               |   0   |   x   |  -5   |
| Left                 |  -5   |   0   |   0   |

   - `Internal`：这些是可选的路径点，不标记为 `Module Connect` 对象，用于在模块内添加额外的导航，例如绕过角落或上楼梯。


## DirtFinder

- DirtFinder 是用于在游戏中显示地图的对象。我们使用 3 种 DirtFinder 来制作地图。
  - `Wall`：小地图上勾勒地板轮廓的深绿色线条。
  - `Floor`：小地图上显示地板的浅绿色形状。
  - `Door`：小地图上的白色线条。
- 每种 `DirtFinder` 类型都有不同的子形状，用于将你的物理关卡正确显示到小地图上。
![截图](/repolib/sdk/levels/DirtFinderTypes.png)
- 你可以通过为 `DirtFinder` 对象分配带有合适网格的 `Mesh Filter` 和 `Mesh Renderer` 来获得更好的视觉辅助。完成配置后请确保禁用它，否则它会在游戏中显示出来。


## Navmesh

- Navmesh 用于敌人在模块之间寻路。
- `NavMeshModifier` 通常分配给你的地板/墙壁的父对象，它会将修改应用到所有子对象的碰撞体上。
- 在编辑器中，`NavMesh` 会以蓝色高亮显示敌人可以正常导航的区域。
- `NavMeshModifiers` 有 3 种不同的区域类型。
  - `Walkable`：允许在所有嵌套碰撞体上导航。
  - `Not Walkable`：覆盖碰撞体导航并移除可行走性。
  - `Jump`：强制敌人通过跳跃来越过选定的碰撞体进行寻路。
![截图](/repolib/sdk/levels/NavMeshModifier.png)
- 通常我们将所有地板设置为 `Walkable`，将所有墙壁和道具设置为 `Not Walkable`。


## 房间体积（Room Volume）

- `Room Volume` 用于声音逻辑，以及在小地图上显示未发现的房间。
- `Room Volume` 对象应包含一个 `Box Collider` 和 `RoomVolume` 脚本，并在顶部指定 `RoomVolume` 层。
- `Room Volumes` 可以相互重叠，应覆盖整个可行走区域，但不应超出模块大小。
![截图](/repolib/sdk/levels/RoomVolume.png)
![截图](/repolib/sdk/levels/RoomVolumeExample.png)


## 门（Doors）

- 门是可选的预制体，可用于在模块之间连接。
- 它们的预制体中应居中放置在 `0, 0`。
- 在我们的示例中，可以复制 `Manor Door` 预制体并引用它来制作自己的门。
- 为了确保门能放入门框中，`PhysGrabObject` `Collider` 的边缘应略小于实际的门网格。
- 确保碰撞体还具有 `Phys Grab Object` 标签，并位于 `PhysGrabObjectHinge` 层下。
我们的碰撞体还应分配 `PhysGrabObject` 材质。
![截图](/repolib/sdk/levels/Door.png)


## Proxy Valuable Presets

要在你的关卡中使用原版 `Level Valuables` 预设，不应直接在 `Level` 资产中引用它们。因为这样 bundle 会包含该预设中所有原版 Valuables 的副本。相反，你需要创建一个"proxy"预设：

- 在项目中任意位置创建一个 `Level Valuables`，前往 `Create > Level > Level Valuable Preset`
- 将资产名称精确命名为你想要包含的原版名称（参见[创建 Valuable](#create-a-valuable)）。
- 将你新创建的预设添加到 `Level` 资产中的 `Level Valuables`。

在运行时，REPOLib 会匹配名称并用真实内容替换你的 proxy。
