# 使用 REPOLib-Sdk 创建商店物品

::: info 注意
**本指南假设你已经为 REPOLib modding 设置好了 REPOLib Unity 项目。\
如果尚未设置，请先参阅[快速入门](./start.md)。**
:::

<!-- 我认为这个页面也需要像 Valuable 页面那样的图片，以便更容易理解 -->

## 1. 创建物品预制体
为你的物品创建一个 Unity 预制体。如果需要，可以参考原版物品。
- **原版物品位置**：`Assets/REPO/Game/Resources/items`，你可以直接将预制体复制到你的 mod 文件夹中。

## 2. 创建物品（Content）资产
1. 在你的 mod 文件夹（或子文件夹）中右键点击
2. 选择 `Create > Other > Item`
3. 配置以下字段：
   - **Prefab**：引用你的预制体（拖放，可以位于 mod 文件夹之外）

## 3. 创建物品资产
1. 在你的 mod 文件夹（或子文件夹）中右键点击
2. 选择 `Create > REPOLib > Item`
3. 配置所有物品属性：

## 4. 物品配置
- **Item Name**：显示名称（例如 "Laser Gun"）
- **Description**：物品的简要描述（可选）

### 物品类型配置
- **Item Type**：决定 `ShopManager` 如何对你的物品进行分类

<details>
<summary><strong>物品类型选项 - 点击展开</strong></summary>

| Type | Purpose |
|------|---------|
| `Drone` | 用于无人机 |
| `Launcher` | 用于法杖 |
| `Orb` | 用于法球 |
| `Grenade` | 用于手雷 |
| `Mine` | 用于地雷 |
| `Melee` | 用于近战武器 |
| `Gun` | 用于枪械 |
| `Tracker` | 用于追踪器 |
| `Vehicle`| 用于载具 |
| `Tool` | 用于工具（例如 Phase Bridge） |
| `Item_upgrade` | 用于玩家升级 |
| `Player_upgrade` | 未使用的 ItemType/未知 |
| `Health Pack` | 用于医疗包 |
| `Power_crystals` | 用于能量水晶 |
| `Cart` | 用于购物车 |
| `Pocket_cart` | 用于口袋购物车 |

</details>

- **Emoji Icon**：从 `Texture\Texture2Ds` 中的 `emoji.png` 文件使用的表情符号

::: tip
如果不确定该使用哪个，`Orb_battery` 是一个安全的默认选择。目前不清楚其具体用途。\
但它可能是用于离开商店时 TruckScreenUI 的表情消息。
:::

- **Item Volume**：决定在商店中的正确生成位置（避免物品卡在墙壁中）

<details>
<summary><strong>物品体积选项 - 点击展开</strong></summary>

| Volume Type | Example Use Case |
|-------------|------------------|
| `Small` | 无人机 |
| `Medium` | 手枪 |
| `Large` | 平底锅 |
| `Large_wide` | C.A.R.T. |
| `Power_crystal` | 能量水晶 |
| `Large_high` | 橡皮鸭 |
| `Upgrade` | 生命升级 |
| `Health Pack` | 医疗包 |
| `Large_plus` | POCKET C.A.R.T. |

</details>

- **Item Secret Shop Type**：控制在商店阁楼中的生成（特定物品的结构体/枚举）
- **Color Preset**：选择物品的配色方案（特定物品的预设）
- **PrefabRef**：<!-- 当新 SDK 更新推送或 Discord 服务器上的相关文件在 GitHub 仓库发布时会更简单 -->
  - **Prefab Name**：预制体资产的名称。
  - **Resource Path**：预制体资产在 Unity 项目资产文件夹中的路径。

### 价格配置
- **Value Preset**：设置价格范围

<details>
<summary><strong>Value Presets 选项 - 点击展开</strong></summary>

::: info 注意
这些预设在 **Valuables** 和 **Items** 之间共享，但物品使用 **×4 的价值乘数**。

以下是首次商店访问的值。
:::

| Preset | Base Range | Item Range (×4) |
|--------|------------|----------------|
| `Value Very Cheap` | 250 to 500 | 1 000 to 2 000 |
| `Value Cheap-` | 300 to 450 | 1 200 to 1 800 |
| `Value Cheap` | 500 to 650 | 2 000 to 2 600 |
| `Value Health Pack Small` | 500 to 750 | 2 000 to 3 000 |
| `Value Cheap+` | 850 to 1 100 | 3 400 to 4 400 |
| `Value Health Pack Medium` | 1 000 to 1 500 | 4 000 to 6 000 |
| `Value Cheap++` | 1 200 to 2 000 | 4 800 to 8 000 |
| `Value Crystal` | 1 000 to 1 500 | 4 000 to 6 000 |
| `Value Health Pack Large` | 2 000 to 3 000 | 8 000 to 12 000 |
| `Value Medium` | 2 000 to 3 000 | 8 000 to 12 000 |
| `Value Medium+` | 3 500 to 4 500 | 14 000 to 18 000 |
| `Value Medium++` | 4 500 to 5 000 | 18 000 to 20 000 |
| `Value High` | 5 500 to 7 500 | 22 000 to 30 000 |
| `Value High+` | 9 500 to 12 000 | 38 000 to 48 000 |

**注意**：*以下预设未被原版商店物品使用，但仍可使用：*

| Preset | Base Range | Item Range (×4) |
|--------|------------|----------------|
| `Value Expensive` | 18 000 to 25 000 | 72 000 to 100 000 |
| `Value Expensive+` | 30 000 to 45 000 | 120 000 to 180 000 |
| `Value Expensive++` | 45 000 to 50 000 | 180 000 to 200 000 |

</details>

### 商店特定设置
- **Max Amount**：在卡车中生成的最大数量（可被 ItemType 配置覆盖）
- **Max Amount in Shop**：在商店中出现的最大数量（可被 ItemType 配置覆盖）
- **Max Purchase（复选框）**：启用购买限制
- **Max Purchase Amount**：设置物品的最大购买数量（需要启用复选框）

### 备注
- 物品类型预设可以覆盖部分字段值
- 价值预设在物品和 Valuables 之间共享

::: tip
要为你的物品添加自定义功能，例如 `Valuable Tracker` 让玩家轻松找到 Valuables，请参阅[自定义脚本指南](./custom-scripts.md)。
:::
