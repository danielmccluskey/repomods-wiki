# Creating Shop items with REPOLib-Sdk

::: info NOTE
**This guide assumes you have a Unity project set up for REPOLib modding.\
If not, follow [Getting Started](./start.md) first.**
:::

<!-- i think this page is also going to need images like the Valuable Page does, to make it easier to understand -->

## 1. Create an Item Prefab
Create a Unity prefab for your item. Use vanilla items as reference if needed.
- **Vanilla Item Location**: `Assets/REPO/Game/Resources/items/items` you can simple copy a prefab to your mod folder.

## 2. Create an Item (Content) Asset
1. Right-click in your mod folder (or subfolder)
2. Select `Create > Other > Item`
3. Configure the following field:
   - **Prefab**: Reference to your prefab (Drag & Drop, can be located outside mod folder)

## 3. Create the Item Asset
1. Right-click in your mod folder (or subfolder)
2. Select `Create > REPOLib > Item`
3. Configure all item properties:

## 4. Item Configuration
- **Item Name**: Display name (e.g., "Laser Gun")
- **Description**: Brief description of the item (optional)

### Item Type Configuration
- **Item Type**: Determines how the `ShopManager` categorizes your item

<details>
<summary><strong>Item Type Options - Click to Expand</strong></summary>

| Type | Purpose |
|------|---------|
| `Drone` | For drones |
| `Orb` | For orbs |
| `Grenade` | For grenades |
| `Mine` | For mines |
| `Melee` | For melee weapons |
| `Gun` | For guns |
| `Tracker` | For trackers |
| `Tool` | For tools (e.g. Phase Brigde) |
| `Item_upgrade` | For player upgrades |
| `Player_upgrade` | Unused ItemType/Unknown |
| `Health Pack` | For health packs |
| `Power_crystals` | For energy crystals |
| `Cart` | For carts |
| `Pocket_cart` | For pocket carts |

</details>

- **Emoji Icon**: Emoji to use from the `emoji.png` file from `Texture\Texture2Ds`

::: tip
If you're unsure what to use, `Orb_battery` is a safe default. It's unclear what this is used for.\
But it's likely for the TruckScreenUI emoji message when leaving the Shop.
:::

- **Item Volume**: Determines correct spawning Locations in shops (so Items dont get Stuck in Wall)

<details>
<summary><strong>Item Volume Options - Click to Expand</strong></summary>

| Volume Type | Example Use Case |
|-------------|------------------|
| `Small` | Drones |
| `Medium` | Handgun |
| `Large` | Frying Pan |
| `Large_wide` | C.A.R.T. |
| `Power_crystal` | Energy Crystal |
| `Large_high` | Item Rubber Duck |
| `Upgrade` | Health Upgrade |
| `Health Pack` | Health Pack |
| `Large_plus` | POCKET C.A.R.T. |

</details>

- **Item Secret Shop Type**: Controls spawning in Shop's Attic (Item Specific struct/enum)
- **Color Preset**: Choose color scheme for item (Item Specific preset)
- **PrefabRef**: <!-- Made easier when new SDK Update gets pushed or the relevant file from the dc server get released on a gh repo -->
  - **Prefab Name**: The name of the prefab asset.
  - **Resource Path**: The path to the prefab asset within the Unity project's asset folder.

### Pricing Configuration
- **Value Preset**: Sets price range

<details>
<summary><strong>Value Presets Options - Click to Expand</strong></summary>

::: info NOTE
These presets are shared between **Valuables** and **Items**, but items use a **×4 value multiplier**.

These are the values for the first shop visit.
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

**Note**: *The following presets are not utilized by vanilla shop items but remain available:*

| Preset | Base Range | Item Range (×4) |
|--------|------------|----------------|
| `Value Expensive` | 18 000 to 25 000 | 72 000 to 100 000 |
| `Value Expensive+` | 30 000 to 45 000 | 120 000 to 180 000 |
| `Value Expensive++` | 45 000 to 50 000 | 180 000 to 200 000 |

</details>

### Shop Specific Settings
- **Max Amount**: Maximum quantity Spawned in the Truck (can be overridden by ItemType config)
- **Max Amount in Shop**: Maximum quantity appearing in shop (can be overridden by ItemType config)
- **Max Purchase (Checkbox)**: Enables purchase limit
- **Max Purchase Amount**: Set Maximum purchase amount for the Item (requires checkbox enabled)

### Notes
- Item Type presets can override some field values
- The value presets are shared between items and valuables

::: tip
For adding custom functionality to your Item, such as the `Valuable Tracker` allowing Players to easily find valuables, check out the [Custom Scripts Guide](./custom-scripts.md).
:::
