# Getting Started with REPOLib (Unity)

::: info NOTE
This page assumes you have a Unity project setup for R.E.P.O. modding.\
If not, first follow the guide in [Unity Project Setup](../../unity.md).
:::

### Adding REPOLib to the Project

1. In the Unity menu bar, go to **`Window > Package Manager`**.
2. Click the **`+`** button in the top-left corner and choose **`Add package from git URL`**.
  ![Screenshot](/unity/1.png)

	- **REPOLib-Sdk:** Editor tools that streamline REPOLib content creation and export.
	  ```bash
	  https://github.com/ZehsTeam/REPOLib-Sdk.git
	  ```

::: tip
To update the **REPOLib-Sdk**, open the Package Manager, select the `REPOLib-Sdk` package in the list, and click **Update**.
:::

After the REPOLib-Sdk package finishes installing, you need to add the missing REPOLib `.dll` to your project:

3. Download **[REPOLib.dll](https://thunderstore.io/c/repo/p/Zehs/REPOLib/)** from Thunderstore.
4. Extract the downloaded archive.
5. Copy or drag-and-drop the `REPOLib.dll` file into any location within your project's `Assets` folder.
	
	![Screenshot](/repolib/sdk/start/0.png)

6. To verify the installation, right-click inside the Project window. You should see a new sub-menu option: **`Create > REPOLib`**.
	
	![Screenshot](/repolib/sdk/start/1.png)

::: tip
To update **REPOLib** in the future, simply replace the existing `.dll` file with the newer version.
:::

## Working with Mods and Content

Content in REPOLib is organized with `Mod` and `Content` assets.
Each `Mod` has its own folder with its content. Here's an example file hierarchy:

```
- Assets
    - MyModFolder
        - MyMod.asset
        - MyValuable.asset // content asset, references the prefab
        - MyValuablePrefab.prefab
        - EnemyFolder
            - MyEnemy.asset // content in subfolders is also fine
    - MyEnemyPrefab.prefab // other assets can be outside of the mod's folder
```

Mods can be automatically exported from the editor, where REPOLib-Sdk handles bundling the assets and packaging the files for Thunderstore (see [Export a Mod](#export-a-mod)).

### Create a new Mod

- Create a new folder in your project.
- Right click in the folder, then choose `Create > REPOLib > Mod`.
- Fill in the fields on the `Mod` asset:
  - `Name`: the mod's name, as shown on Thunderstore. This can only contain numbers, letters and underscores.
  - `Author`: the name of your Thunderstore team.
  - `Version`: must be in the format `X.Y.Z`.
  - `Dependencies`: a list of dependency strings. `Zehs-REPOLib-X.X.X` should always be included (where `X.X.X` is the target version).
  - `Website Url`: optional.
  - `Icon`: must be a 256x256 PNG file.
  - `Readme`: a longer description of the mod, in a separate file. Supports markdown formatting.
  - `Extra Files`: additional files to include in the package, for example a dll containing your scripts.

::: tip
You can have multiple mods in the same project, as long as they are in separate folders.
:::

### Export a Mod

- Select the `Mod` asset and click `Export` in the inspector.
  - In the window you'll see the associated content files found by REPOLib-Sdk.
- Choose an `Output Path`. The path is relative to the Unity project (unless you specify an absolute path).
- Click `Export` and wait. Once finished, a window should appear showing the exported zip file. This file can be uploaded to Thunderstore or locally imported into mod managers.

::: warning
REPOLib-Sdk creates multiple folders and files under the export path. Therefore, it is recommended to use a new, empty folder as the target.
:::

::: tip
The export window can also be accessed from `Window > REPOLib Exporter`
:::