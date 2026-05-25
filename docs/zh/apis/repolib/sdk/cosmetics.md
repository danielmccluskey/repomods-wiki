# 使用 REPOLib-Sdk 创建装饰品

::: info 注意
**本指南假设你已经为 REPOLib modding 设置好了 REPOLib Unity 项目。\
如果尚未设置，请先参阅[快速入门](./start.md)。**
:::

## 1. 创建装饰品预制体

为你的装饰品创建一个 Unity 预制体。如果需要，可以参考原版装饰品。

- **原版装饰品位置**：`Assets/REPO/Game/Resources/cosmetics`，你可以直接将预制体复制到你的 mod 文件夹中。

## 2. 创建 REPOLib 装饰品资产

1. 在你的 mod 文件夹（或子文件夹）中右键点击
2. 选择 `Create > REPOLib > Cosmetic`
3. 配置所有属性：
   - **Asset Id**：此装饰品的唯一标识。使用类似 `modname:hat1` 的格式以避免与其他 mod 冲突。不能以 `vanilla:` 开头。
   - **Asset**：引用你的原版装饰品资产（Follow steps 1 & 2 from the next section）
   - **Prefab**：引用你的预制体（拖放，可以位于 mod 文件夹之外）
   - **Prefab Ref**：引用你的预制体（拖放，可以位于 mod 文件夹之外）。优先使用此项，因为它可以减少游戏内的内存占用。如果使用此项，请将 **Prefab** 字段留空，并将你的预制体添加到 `Mod` 资产的 `Extra Bundle Files` 下。

## 3. 创建原版装饰品资产

1. 在你的 mod 文件夹（或子文件夹）中右键点击
2. 选择 `Create > Cosmetics > Cosmetic Asset`
3. 配置以下字段：
   - **Asset Name**：显示名称（例如 "Big Hat"）
   - **Type**：装饰品的类型
   - **Rarity**：装饰品的稀有度
   - **Custom Type List**：自定义类型
   - **Disabled Type List**：要卸下的类型
   - **Disabled Custom Type List**：要卸下的自定义类型
   - **Disabled Cosmetics**：要卸下的装饰品

<details>
<summary><strong>Custom Type List - 点击展开</strong></summary>

| Type                                  | Purpose                |
| ------------------------------------- | ---------------------- |
| `Enemy_SlowMouth`                     |                        |
| `Player_Crown`                        |                        |
| `Player_DeathHead`                    |                        |
| `HeadTopMesh_Shape_Big`               |                        |
| `FootRight_Shape_Long`                |                        |
| `FootLeft_Shape_Long`                 |                        |
| `FootRight_Shape_Normal`              |                        |
| `FootLeft_Shape_Normal`               |                        |
| `FootRight_Shape_Short`               |                        |
| `FootLeft_Shape_Short`                |                        |
| `BodyTop_Overlap_HeadBottom`          |                        |
| `HeadBottom_Overlap_BodyTop`          |                        |
| `HeadBottom_OverrideFlat`             |                        |
| `BodyTop_OverrideFlat`                |                        |
| `HeadTopMesh_Shape_Default`           |                        |
| `HeadTopMesh_Shape_Tiny`              |                        |
| `EyeRight_Disable`                    | 禁用右眼 |
| `EyeLeft_Disable`                     | 禁用左眼  |
| `BodyTop_Overlap_BodyBottom_Front`    |                        |
| `BodyTop_Overlap_BodyBottom_Back`     |                        |
| `BodyBottom_ProtrudeFront`            |                        |
| `BodyBottom_Protrude`                 |                        |
| `Hat_Shape_Wide`                      |                        |
| `BodyTop_State_Flat`                  |                        |
| `HeadBottom_State_Flat`               |                        |
| `Player_LookDown_Restrict`            |                        |
| `Eyewear_Shape_VeryTall_Inner`        |                        |
| `Eyewear_Shape_Tall`                  |                        |
| `Hat_Overlap_FaceTop`                 |                        |
| `Hat_Overlap_FaceBottom`              |                        |
| `Eyewear_Overlap_FaceTop`             |                        |
| `Eyewear_Overlap_FaceBottom`          |                        |
| `FaceBottom_Protrude`                 |                        |
| `Eyewear_Overlap_FaceBottom_Protrude` |                        |
| `FaceTop_Shape_Huge`                  |                        |
| `FaceTop_Shape_Tall`                  |                        |
| `BodyTopMesh_Shape_Default`           |                        |
| `BodyTopMesh_Shape_Big`               |                        |
| `BodyTopMesh_Shape_Tiny`              |                        |
| `BodyBottomMesh_Shape_Default`        |                        |
| `BodyBottomMesh_Shape_Big`            |                        |
| `BodyBottomMesh_Shape_Tiny`           |                        |
| `ArmRightMesh_Shape_Default`          |                        |
| `ArmRightMesh_Shape_Big`              |                        |
| `ArmRightMesh_Shape_Tiny`             |                        |
| `ArmLeftMesh_Shape_Default`           |                        |
| `ArmLeftMesh_Shape_Big`               |                        |
| `ArmLeftMesh_Shape_Tiny`              |                        |
| `LegRightMesh_Shape_Default`          |                        |
| `LegRightMesh_Shape_Big`              |                        |
| `LegRightMesh_Shape_Tiny`             |                        |
| `LegLeftMesh_Shape_Default`           |                        |
| `LegLeftMesh_Shape_Big`               |                        |
| `LegLeftMesh_Shape_Tiny`              |                        |
| `FootRight_Protrude`                  |                        |
| `FootLeft_Protrude`                   |                        |
| `HeadTop_Covered_TopMiddle`           |                        |
| `HeadTopMesh_Shape_Unchanged`         |                        |
| `HeadBottomMesh_Shape_Unchanged`      |                        |
| `HeadBottomMesh_Shape_Default`        |                        |
| `HeadBottomMesh_Shape_Big`            |                        |
| `HeadBottomMesh_Shape_Tiny`           |                        |
| `BodyTopMesh_Shape_Unchanged`         |                        |
| `BodyBottomMesh_Shape_Unchanged`      |                        |
| `ArmRightMesh_Shape_Unchanged`        |                        |
| `ArmLeftMesh_Shape_Unchanged`         |                        |
| `LegRightMesh_Shape_Unchanged`        |                        |
| `LegLeftMesh_Shape_Unchanged`         |                        |
| `Ears_Shape_Tall`                     |                        |
| `FaceBottom_Overlap_HeadBottom`       |                        |
| `FaceTop_Shape_VeryTall`              |                        |
| `ArmRightMesh_Shape_BigUpper`         |                        |
| `ArmLeftMesh_Shape_BigUpper`          |                        |
| `ArmRightMesh_Shape_BigLower`         |                        |
| `ArmLeftMesh_Shape_BigLower`          |                        |
| `HeadTopMesh_Shape_MissingRight`      |                        |
| `FaceTop_Covered_Middle`              |                        |
| `FaceTop_Covered_Left`                |                        |
| `FaceTop_Covered_Right`               |                        |
| `Eyewear_Shape_EyesRight`             |                        |
| `Eyewear_Shape_EyesLeft`              |                        |
| `Eyewear_Shape_EyesBoth`              |                        |
| `Eyewear_Shape_VeryTall_Outer`        |                        |
| `EyeLidRightMesh_Protrude`            |                        |
| `EyeLidLeftMesh_Protrude`             |                        |
| `FaceTop_Overlap_FaceBottom`          |                        |
| `HeadBottom_Protrude`                 |                        |

</details>
