# Creating Cosmetics with REPOLib SDK

::: info NOTE
**This guide assumes you have a REPOLib Unity project set up for REPOLib modding.\
If not, follow [Getting Started](./start.md) first.**
:::

## 1. Create a Cosmetic Prefab

Create a Unity prefab for your cosmetic. Use vanilla cosmetics as reference if needed.

**Vanilla Cosmetics** are located in `Assets/REPO/Game/Resources/cosmetics`. You can simply copy a prefab to your mod folder.

## 2. Create the REPOLib Cosmetic Asset

1. Right-click in your mod folder (or subfolder), and choose `Create > REPOLib > Cosmetic`.
2. Configure all properties:
   - `Asset Id`: A unique ID for this cosmetic. Avoid conflicts with other mods by using a format like `modname:hat1`. Must not start with `vanilla:`.
   - `Asset`: Reference to your Vanilla Cosmetic Asset (Follow steps 1 & 2 from the next section).
   - `Prefab`: Reference to your Cosmetic prefab (drag-and-drop, can be located outside mod folder).
   - `Prefab Ref`: Reference to your Cosmetic prefab (drag-and-drop, can be located outside mod folder).
     ::: info NOTE
     `Prefab Ref` is preferred over `Prefab` as it reduces in-game RAM usage. If using this, leave the `Prefab` property empty and add your prefab to the `Mod` asset under `Extra Bundle Files`.
     :::

## 3. Create the Vanilla Cosmetic Asset

1. Right-click in your mod folder (or subfolder), and choose `Create > Cosmetics > Cosmetic Asset`.
2. Configure the following properties:
   - `Asset Name`: Display name (e.g., "Big Hat").
   - `Type`: The type of the cosmetic, that determines which category it will appear under in the Customize menu.
   - `Rarity`: The rarity of the cosmetic.
   - `Custom Type List`: Custom types:
     ::: details Custom Type List (click to expand):
     | Type                                  | Purpose                 |
     | ------------------------------------- |-------------------------|
     | `Enemy_SlowMouth`                     |                         |
     | `Player_Crown`                        |                         |
     | `Player_DeathHead`                    |                         |
     | `HeadTopMesh_Shape_Big`               |                         |
     | `FootRight_Shape_Long`                |                         |
     | `FootLeft_Shape_Long`                 |                         |
     | `FootRight_Shape_Normal`              |                         |
     | `FootLeft_Shape_Normal`               |                         |
     | `FootRight_Shape_Short`               |                         |
     | `FootLeft_Shape_Short`                |                         |
     | `BodyTop_Overlap_HeadBottom`          |                         |
     | `HeadBottom_Overlap_BodyTop`          |                         |
     | `HeadBottom_OverrideFlat`             |                         |
     | `BodyTop_OverrideFlat`                |                         |
     | `HeadTopMesh_Shape_Default`           |                         |
     | `HeadTopMesh_Shape_Tiny`              |                         |
     | `EyeRight_Disable`                    | Disables the right eye. |
     | `EyeLeft_Disable`                     | Disables the left eye.  |
     | `BodyTop_Overlap_BodyBottom_Front`    |                         |
     | `BodyTop_Overlap_BodyBottom_Back`     |                         |
     | `BodyBottom_ProtrudeFront`            |                         |
     | `BodyBottom_Protrude`                 |                         |
     | `Hat_Shape_Wide`                      |                         |
     | `BodyTop_State_Flat`                  |                         |
     | `HeadBottom_State_Flat`               |                         |
     | `Player_LookDown_Restrict`            |                         |
     | `Eyewear_Shape_VeryTall_Inner`        |                         |
     | `Eyewear_Shape_Tall`                  |                         |
     | `Hat_Overlap_FaceTop`                 |                         |
     | `Hat_Overlap_FaceBottom`              |                         |
     | `Eyewear_Overlap_FaceTop`             |                         |
     | `Eyewear_Overlap_FaceBottom`          |                         |
     | `FaceBottom_Protrude`                 |                         |
     | `Eyewear_Overlap_FaceBottom_Protrude` |                         |
     | `FaceTop_Shape_Huge`                  |                         |
     | `FaceTop_Shape_Tall`                  |                         |
     | `BodyTopMesh_Shape_Default`           |                         |
     | `BodyTopMesh_Shape_Big`               |                         |
     | `BodyTopMesh_Shape_Tiny`              |                         |
     | `BodyBottomMesh_Shape_Default`        |                         |
     | `BodyBottomMesh_Shape_Big`            |                         |
     | `BodyBottomMesh_Shape_Tiny`           |                         |
     | `ArmRightMesh_Shape_Default`          |                         |
     | `ArmRightMesh_Shape_Big`              |                         |
     | `ArmRightMesh_Shape_Tiny`             |                         |
     | `ArmLeftMesh_Shape_Default`           |                         |
     | `ArmLeftMesh_Shape_Big`               |                         |
     | `ArmLeftMesh_Shape_Tiny`              |                         |
     | `LegRightMesh_Shape_Default`          |                         |
     | `LegRightMesh_Shape_Big`              |                         |
     | `LegRightMesh_Shape_Tiny`             |                         |
     | `LegLeftMesh_Shape_Default`           |                         |
     | `LegLeftMesh_Shape_Big`               |                         |
     | `LegLeftMesh_Shape_Tiny`              |                         |
     | `FootRight_Protrude`                  |                         |
     | `FootLeft_Protrude`                   |                         |
     | `HeadTop_Covered_TopMiddle`           |                         |
     | `HeadTopMesh_Shape_Unchanged`         |                         |
     | `HeadBottomMesh_Shape_Unchanged`      |                         |
     | `HeadBottomMesh_Shape_Default`        |                         |
     | `HeadBottomMesh_Shape_Big`            |                         |
     | `HeadBottomMesh_Shape_Tiny`           |                         |
     | `BodyTopMesh_Shape_Unchanged`         |                         |
     | `BodyBottomMesh_Shape_Unchanged`      |                         |
     | `ArmRightMesh_Shape_Unchanged`        |                         |
     | `ArmLeftMesh_Shape_Unchanged`         |                         |
     | `LegRightMesh_Shape_Unchanged`        |                         |
     | `LegLeftMesh_Shape_Unchanged`         |                         |
     | `Ears_Shape_Tall`                     |                         |
     | `FaceBottom_Overlap_HeadBottom`       |                         |
     | `FaceTop_Shape_VeryTall`              |                         |
     | `ArmRightMesh_Shape_BigUpper`         |                         |
     | `ArmLeftMesh_Shape_BigUpper`          |                         |
     | `ArmRightMesh_Shape_BigLower`         |                         |
     | `ArmLeftMesh_Shape_BigLower`          |                         |
     | `HeadTopMesh_Shape_MissingRight`      |                         |
     | `FaceTop_Covered_Middle`              |                         |
     | `FaceTop_Covered_Left`                |                         |
     | `FaceTop_Covered_Right`               |                         |
     | `Eyewear_Shape_EyesRight`             |                         |
     | `Eyewear_Shape_EyesLeft`              |                         |
     | `Eyewear_Shape_EyesBoth`              |                         |
     | `Eyewear_Shape_VeryTall_Outer`        |                         |
     | `EyeLidRightMesh_Protrude`            |                         |
     | `EyeLidLeftMesh_Protrude`             |                         |
     | `FaceTop_Overlap_FaceBottom`          |                         |
     | `HeadBottom_Protrude`                 |                         |
     :::
   - `Tintable`: Whether the cosmetic can be colored by the player.
   - `Default Color`: The default color of the cosmetic in the Customize menu, and when it's equipped for the first time.
