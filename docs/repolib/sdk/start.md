# Getting Started with REPOLib-Sdk

This guide assumes you already have a Unity project set up for R.E.P.O. modding.
If not, use a tool like [R.E.P.O. Project Patcher](https://github.com/Kesomannen/unity-repo-project-patcher) first.

## Installation

### Add REPOLib to the project

- Download REPOLib from Thunderstore ([link](https://thunderstore.io/c/repo/p/Zehs/REPOLib/)).
- Extract the downloaded file.
- Copy `REPOLib.dll` into your project.

::: tip
To update REPOLib, replace the dll with a newer version's.
:::

### Add REPOLib-Sdk to the project

- In unity, go to `Window > Package Manager`.
- Click the `+` button in the top left and choose `Add package from git URL`.
- Enter `https://github.com/ZehsTeam/REPOLib-Sdk.git`.

::: tip
To update REPOLib-Sdk, go to the Package Manager, click on the package and then `Update`.
:::

## Create a new Mod

- Create a new folder in your project.
- Right click in the folder, then choose `Create > REPOLib > Mod`.
- Fill in the fields on the `Mod` asset:
  - `Name`: the mod's name, as shown on Thunderstore. This can only contain numbers, letters and underscores.
  - `Author`: the name of your Thunderstore team.
  - `Version`: must be in the format `X.Y.Z`.
  - `Dependencies`: REPOLib should always be included.
  - `Website Url`: Optional.
  - `Icon`: must be a 256x256 PNG file.
  - `Readme`: a longer description of the mod, in a separate file. Supports markdown formatting.
  - `Extra Files`: additional files that will be included in the package, for example a dll containing your scripts.

::: tip
You can have multiple mods in the same project, as long as they're in separate folders.
:::

## Export a Mod

- Select the `Mod` asset and click `Export` in the inspector.
  - In the window you'll see the associated content files found by REPOLib-Sdk.
- Choose an `Output Path`. The path is relative to the Unity project (unless you specify an absolute path).
- Click `Export` and wait. Once finished, a window should appear showing the exported zip file. This file can be uploaded to Thunderstore or locally imported into mod managers.

::: warning
REPOLib-Sdk deletes and creates multiple folders and files under the export path. Therefore, it is recommended to use a new, empty folder as the target.
:::

::: tip
The export window can also be accessed from `Window > REPOLib Exporter`
:::
