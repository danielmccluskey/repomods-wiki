# Creating Valuables with REPOLib-Sdk

::: info NOTE
**This guide assumes you already have a Unity project set up for REPOLib modding.\
If not, follow [Getting Started](./start.md) first.**
:::

- Right click in your mod folder and choose `Create > REPOLib > Valuable`.
- Fill in the fields:
  - `Prefab`: A reference to your prefab. Drag and drop your prefab into this field.
  - `Valuable Presets`: The presets that determine which levels your valuable can spawn in. The vanilla presets are:
    - `Valuables - Generic` (Always applies to all vanilla levels)
    - `Valuables - Wizard`
    - `Valuables - Manor`
    - `Valuables - Arctic`
    - `Valuables - Museum`

::: tip Tip for Modded Levels
There are two options for your Valuable to spawn in Modded Levels:
1. You include the Modded Level's Preset alongside the other presets you want to use. (**Recommended**)

2. The level Author includes the `Valuables - Generic` preset in their level, and your valuable uses the `Valuables - Generic` preset. (**Not Recommended**)
:::

## Creating a Prefab

This quickstart will guide you through creating a custom prefab. We'll be making this Among Us valuable, but the steps are largely the same for most valuables:

![Screenshot](/repolib/sdk/valuables/9.png)

---

The easiest way to get started is to copy a vanilla valuable. If you used the project patcher, they are located in `Assets/REPO/Game/Resources/valuables`.

We'll choose the `Valuable Trophy` prefab (under `03 medium`) as it's an appropiate size and doesn't have any complex functionality. Let's copy it to our mod's folder and rename it:

![Screenshot](/repolib/sdk/valuables/0.png)

Next, we add our model to the prefab. This model can be downloaded [here](https://skfb.ly/6VEEJ) if you want to follow along.

![Screenshot](/repolib/sdk/valuables/1.png)

::: warning
When creating or browsing for a model, keep in mind the vertex count. Models with a high vertex count occupy more memory, take longer to download, and may cause performance issues.

This example model is slightly too detailed and probably shouldn't be released.
:::

Make sure the model is a child of the `Object` game object, as seen in the screenshot.

From here, we can center our model and safely delete the old one (called `Mesh`):

![Screenshot](/repolib/sdk/valuables/2.png)

Next, we have to set up the colliders. A valuable consists of one or more `Valuable Colliders`, which each have these components:

![Screnshot](/repolib/sdk/valuables/3.png)

The collider shape (and `Phys Grab Object Collider` type) may vary, such as `Box` or `Capsule`. For this valuable, we will keep it simple and use box colliders.

::: warning
Ensure your model game object does not have a `Mesh Collider` component. If it does, remove it to avoid the following error:\
`[Error  : Unity Log] Non-convex MeshCollider with non-kinematic Rigidbody is no longer supported since Unity 5.`

**DO NOT** tick the `Convex` checkbox to fix this, even if internet search results suggest it.
:::

Delete three of the colliders so only one box remains. Then, resize it to fit the body of the Among Us character:

![Screenshot](/repolib/sdk/valuables/4.png)

Continue with the backpack and visor:

![Screenshot](/repolib/sdk/valuables/5.png)

::: tip
To duplicate a game object, select it and hit `Ctrl + D`.
:::

With our model and colliders set up, we can configure the `Valuable Object` component at the prefab's root:

![Screenshot](/repolib/sdk/valuables/6.png)

- `Durability Preset`: how easily the valuable loses value and breaks.
- `Value Preset`: how much the valuable is worth, between a min and max.
- `Phys Attribute Preset`: the mass (weight) of the object.
- `Audio Preset`: contains the valuable's sound effects for colliding and breaking.
- `Audio Preset Pitch`: shifts the pitch of the sound effects.
- `Particle Colors`: the colors of the particles that are created when the object collides. A larger color ratio means particles of that color are more common.
- `Volume Type`: the size category of the object.

Here are some reasonable values for our Among Us valuable:

![Screenshot](/repolib/sdk/valuables/7.png)

The last step is to set our object's bounds in the `Room Volume Check` component. The easiest way to do this is to import Zehs' custom editor script. [Download it here](https://raw.githubusercontent.com/ZehsTeam/REPOLib-Sdk/refs/heads/main/Scripts/RoomVolumeCheckEditor.cs) and drag it into your project and place it inside of a folder called `Editor`. You can create a folder called `Editor` in your `Assets` folder.

After that, you should see this button in the inspector: 

![Screenshot](/repolib/sdk/valuables/8.png)

Click it to automatically align the purple bounds to your colliders.

**That's it!** Now that you've got a prefab, follow the steps [at the top of this page](#creating-valuables-with-repolib-sdk) to register the valuable with REPOLib.

::: tip
For adding custom functionality to your valuable, such as the `Time Glass` changing Players Voice Pitch, check out the [Custom Scripts Guide](./custom-scripts.md).
:::

## Credits

"Among Us Astronaut - Clay" (https://skfb.ly/6VEEJ) by MatMADNESS is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/).
