# Getting Started with REPOLib SDK

::: info NOTE
This page assumes you have a Unity project setup for R.E.P.O. modding.\
If not, first follow the guide in [Unity Project Setup](../../../unity.md).
:::

## Adding REPOLib to the Project

1. Navigate to the Unity menu bar and click `Window > Package Manager`.
2. Click the `+` button in the top left of the Package Manager and choose `Add package from git URL...`:

   ![Screenshot](/unity/1.png)

3. Paste the **following** Unity Package link into this text field:

   ![Screenshot](/unity/2.png)

   - **REPOLib SDK**: Editor tools that streamline REPOLib content creation and export.
   ```bash
   https://github.com/ZehsTeam/REPOLib-Sdk.git
   ```

   ::: tip
   To update **REPOLib SDK**, open the Package Manager, select the `REPOLib-Sdk` package in the list, and click `Update`.
   :::

   After **REPOLib SDK** finishes installing, you need to add the missing REPOLib `.dll` to your project in the following steps.

4. Download **[REPOLib](https://thunderstore.io/c/repo/p/Zehs/REPOLib)** from Thunderstore.
5. Extract the downloaded archive.
6. Copy or drag-and-drop the `REPOLib.dll` file into any location within your project's `Assets` folder:

   ![Screenshot](/repolib/sdk/start/0.png)

7. To verify the installation, right-click inside the Project window. You should see a new sub-menu option: `Create > REPOLib`:

   ![Screenshot](/repolib/sdk/start/1.png)

   ::: warning
   If you have errors for missing references to **Assembly-CSharp-firstpass.dll**, select `REPOLib.dll` in the project window, then uncheck `Validate References` in the Inspector:

   ![Screenshot](/repolib/sdk/start/2.png)
   :::

   ::: tip
   To update **REPOLib** in the future, simply replace the existing `.dll` file with the newer version.
   :::

## Working with Mods and Content

Content in REPOLib is organized with `Mod` and `Content` assets.
Each `Mod` has its own folder with its content.\
Here's an example file hierarchy:

- :file_folder: `Assets`
    - :file_folder: `MyModFolder`
        - :page_facing_up: `MyMod.asset`
        - :page_facing_up: `MyValuable.asset` (Content asset, references the prefab)
        - :package: `MyValuablePrefab.prefab`
        - :file_folder: `EnemyFolder`
            - :page_facing_up: `MyEnemy.asset` (Content in subfolders is also fine)
    - :package: `MyEnemyPrefab.prefab` (Other assets can be outside of the mod's folder)
    - :file_folder: `MyOtherModFolder`
      - :page_facing_up: `MyOtherMod.asset`\
        ...

Mods can be exported directly from the Editor, where REPOLib SDK automatically handles bundling the assets and packaging the files for Thunderstore (see [Export a Mod](#export-a-mod)).

### Create a new Mod

1. Create a new folder in your project.
2. Right click in the folder, then choose `Create > REPOLib > Mod`.
3. Complete the fields in the `Mod` asset:
   - `Name`: The mod's name, as shown on Thunderstore. This can only contain numbers, letters and underscores.
   - `Author`: The name of your Thunderstore team.
   - `Version`: Must be in the format `X.Y.Z`, in accordance with [Semantic Versioning](https://semver.org).
   - `Description`: A short description of your mod. Must not exceed 250 characters.
   - `Website Url`: Optional. This can link to your mod's source (like GitHub), a Discord channel for discussion/issues, etc.
   - `Dependencies`: A list of dependency strings. `Zehs-REPOLib-X.Y.Z` should always be included (where `X.Y.Z` is the target version).
   - `Icon`: Must be a 256x256 PNG file.
   - `Readme`: A longer description of the mod in a separate Markdown (`.md`) file, which will be displayed on your mod's frontpage. You can use Thunderstore's [Markdown Preview](https://thunderstore.io/tools/markdown-preview) tool.
   - `Extra Files`: Additional files to include in the package, for example a DLL containing your scripts or a `CHANGELOG.md` file.
   - `Extra Bundle Files`: Additional assets to be included in the mod's `.repobundle`.

   ::: tip
   You can have multiple mods in the same project, as long as they are in separate folders.
   :::

### Export a Mod

- Select the `Mod` asset and click `Export` in the inspector.
  - In the window you'll see the associated content files found by REPOLib-Sdk.
- Choose an `Output Path`. The path is relative to the Unity project (unless you specify an absolute path).
- Click `Export` and wait. Once finished, a window should appear showing the exported ZIP file. This file can be uploaded to Thunderstore or locally imported into mod managers.

  ::: warning
  REPOLib SDK creates multiple folders and files under the export path. Therefore, it is recommended to use a new, empty folder as the target.
  :::

  ::: tip
  The export window can also be accessed from `Window > REPOLib Exporter`
  :::
