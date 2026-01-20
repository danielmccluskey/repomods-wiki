# Getting Started with REPOLib (Unity)

The Unity workflow is used to create content for REPOLib without writing code.

::: info NOTE
This guide assumes you already have a Unity project set up for R.E.P.O. modding.\
If not, use a tool like [R.E.P.O. Project Patcher](https://github.com/ZehsTeam/unity-repo-project-patcher) first.
:::

## Installation

You will need to install two packages:

- **REPOLib:** The core library that handles the registration of your content.
- **REPOLib-Sdk:** Editor tools to streamline the workflow.

### Add REPOLib to the project

1. Download REPOLib from Thunderstore ([link](https://thunderstore.io/c/repo/p/Zehs/REPOLib/)).
2. Extract the downloaded file.
3. Copy `REPOLib.dll` anywhere into your project's `Assets` folder.

::: tip
To update REPOLib, replace the dll with a newer version's.
:::

### Add REPOLib-Sdk to the project

1. In unity, go to `Window > Package Manager`.
2. Click the `+` button in the top left and choose `Add package from git URL`.
3. Enter `https://github.com/ZehsTeam/REPOLib-Sdk.git`.

::: tip
To update REPOLib-Sdk, go to the Package Manager, click on the package and then `Update`.
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
