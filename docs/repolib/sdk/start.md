# Getting Started with REPOLib (Unity)

The Unity workflow is used to create content for REPOLib without writing code.

::: info NOTE
This page assumes you have the correct Unity Editor setup for R.E.P.O. SDK modding.\
If not, first follow the guide in [Developing Mods](../../develop.md#setup-the-unity-editor).
:::


## Unity Project Setup

1. In Unity at the Menubar go to `Window` then `Package Manager`.
2. Click the `+` button in the top left and choose `Add package from git URL`.
  ![Screenshot](/repolib/sdk/start/0.png)
3. Paste all of the following Unity Packages one after another here:
  ![Screenshot](/repolib/sdk/start/1.png)

  - **Unity Project Patcher:** Generates a Unity project from a game build so the game can be played in the editor.
    ```bash
    https://github.com/nomnomab/unity-project-patcher.git
    ```

  - **Unity Project Patcher BepInEx:** BepInEx handler for a Unity Project Patcher project.
    ```bash
    https://github.com/Kesomannen/unity-project-patcher-bepinex.git
    ```

  - **Unity Repo Project Patcher:** Game wrapper that generates a Unity project from R.E.P.O. build for in-editor play.
    ```bash
    https://github.com/ZehsTeam/unity-repo-project-patcher.git
    ```

  - **REPOLib-Sdk:** Editor tools that streamline REPOLib content creation and export.
    ```bash
    https://github.com/ZehsTeam/REPOLib-Sdk.git
    ```

::: tip
To update REPOLib-Sdk open Package Manager, select the REPOLib-Sdk package, then choose Update.
:::

### Add REPOLib to the project

1. Download **[REPOLib.dll](https://thunderstore.io/c/repo/p/Zehs/REPOLib/)** from Thunderstore
2. Extract the downloaded archive.
3. Copy the file named REPOLib.dll into any location under your project's `Assets` folder.

::: tip
To update REPOLib, replace the dll with a newer version's.
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