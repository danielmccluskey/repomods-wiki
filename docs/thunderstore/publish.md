# Publishing to Thunderstore

Once you have exported your mod (either via the [Unity Workflow](../apis/repolib/sdk/start.md#export-a-mod) and/or manually for HarmonyX projects), you are ready to share it with the community.

::: danger WARNING
Packages are immutable, meaning that once you upload a version, it **cannot be altered or removed**. Make sure you've thoroughly polished and tested your mod prior to upload.
:::

Read Thunderstore's [Global Rules](https://wiki.thunderstore.io/moderation/global-rules) before uploading your mod.

## 1. Preparing your Package

Thunderstore requires a `.zip` file containing these files at the root:
- `icon.png`: Must be a 256x256 PNG file.
- `manifest.json`: A JSON file containing metadata (name, version, dependencies).
- `README.md`: A Markdown file describing your mod in greater detail.
- **Your Mod Files**: Your mod's `.dll` file (if custom code/functionality was written), your asset bundles (e.g., `MyModAssets.repobundle`), and any other assets required for your mod to function.

::: tip
If you used **REPOLib SDK** to export your mod from Unity, this zip file is fully created for you automatically in your chosen output folder.

Packages can also contain a [`CHANGELOG.md`](https://wiki.thunderstore.io/mods/updating-a-package#changelog) file.

You can utilize Thunderstore's [Markdown Preview](https://thunderstore.io/tools/markdown-preview) tool to preview your `README.md` and `CHANGELOG.md` files before upload, and the [Manifest Validator](https://thunderstore.io/tools/manifest-v1-validator) to ensure your `manifest.json` file is valid.
:::

::: warning
If preparing your `.zip` file manually, **do not compress the parent folder**. Select all individual files first, *then* compress those into a new `.zip` archive.
:::

## 2. Uploading your Mod

1. Make sure you are logged in to [Thunderstore](https://thunderstore.io/c/repo).
2. Click the **"Upload"** button at the top-right of the page.
3. Drag-and-drop your `.zip` file into the upload area (or browse manually).
4. Select the **Team** to upload your mod to.
5. Select **"R.E.P.O."** as the Community.
6. Select the **Categories** that best fit your mod (e.g., Cosmetics, Items, Monsters, etc.).
7. Disclose whether your mod **contains NSFW content**, in accordance with the [Global Rules](https://wiki.thunderstore.io/moderation/global-rules#nsfw-content).
   - If this option is accidentally checked upon upload, you will need to contact [Thunderstore support](https://discord.thunderstore.io) to undo it.
8. Click **"Submit"**.

::: tip Why doesn't my mod show up in mod managers right away?
After uploading, it will usually take a few hours for your mod to appear in mod managers.
:::

## 3. Updating your Mod

To update an existing mod, you must:
1. Increment the **Version Number** in your `manifest.json` file (e.g., from `1.0.0` to `1.0.1`, following [Semantic Versioning](https://semver.org/) convention). Thunderstore will reject uploads with a version number that has already been used.
2. Follow the same [upload steps](#2-uploading-your-mod) as above. Thunderstore will automatically detect it as an update to your existing package based on the name in the manifest.

::: tip
For more info about Thunderstore packages, visit the [Thunderstore Wiki](https://wiki.thunderstore.io/mods/creating-a-package).
:::

::: warning
**DO NOT** change the name of your mod in the `manifest.json` file if you intend to update an existing listing. Changing the name will create a brand new mod page instead of updating the old one.
:::

## 4. Managing your Mod Post-Upload

While the contents within your mod package cannot be edited, you *are* able to change its Categories and Deprecation Status.
1. Navigate to your mod's page, and click **"Manage Package"** in the top-right, above the **"Install"** button.
2. Edit the following details as desired:
   - **Edit categories**: You can add or remove categories, such as in the case where your mod has new functionality.
   - **"Deprecate"**: Click this button to deprecate your package if you no longer plan to maintain it, or if it's no longer functional. This can be undone by the same steps, or automatically when you upload a new version.

## Resources

[Thunderstore Package Format Docs](https://wiki.thunderstore.io/mods/creating-a-package)
