# Publishing to Thunderstore

Once you have exported your mod (either via the [Unity Workflow](../apis/repolib/sdk/start.md#export-a-mod) and/or manually for HarmonyX projects), you are ready to share it with the community.

### 1. Prepare your Package
Thunderstore requires a `.zip` file containing at least these three files at the root:
- **`icon.png`**: A 256x256 pixel square image.
- **`manifest.json`**: A JSON file containing metadata (name, version, dependencies).
- **`README.md`**: A markdown file describing your mod.
- **Your Mod Files**: The actual `Mod.dll` (if custom code/functionality was written) and your asset bundles (e.g., `MyModAssets.repobundle`).

::: tip
If you used the **REPOLib-Sdk** to export your mod, this zip file is created for you automatically in your chosen output folder.
:::

### 2. Uploading the Mod
1. Make sure you are Logged in to [Thunderstore](https://thunderstore.io/c/repo).
4. Click the **"Upload"** button.
5. Select **"R.E.P.O."** as the game.
6. Select the **Category** that best fits your mod (e.g., Cosmetics, Items, Enemies, etc).
7. Drag and drop your `.zip` file into the upload area.
8. Click **"Submit"**.

### 3. Updating your Mod
To update an existing mod, you must:
1. Increase the **Version Number** in your `manifest.json` (e.g., from `1.0.0` to `1.0.1`). Thunderstore will reject uploads with a version number that has already been used.
2. Follow the same upload steps as above. Thunderstore will automatically detect it as an update to your existing package based on the name in the manifest.

::: tip My mod doesnt show up in Mod Managers!
After uploading, it may take a few Hours for your mod to appear in Mod Managers!
:::

::: tip
**For more info about Thunderstore packages visit [thunderstore docs](https://thunderstore.io/c/repo/create/docs/).**
:::

::: warning
**DO NOT** change the name of your mod in the `manifest.json` if you intend to update an existing listing. Changing the name will create a brand new mod page instead of updating the old one.
:::
