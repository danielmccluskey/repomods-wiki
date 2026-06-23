# R.E.P.O. Unity Project Setup

A guide for setting up your Unity Project to create mods for R.E.P.O.\
The Unity workflow is primarily needed for creating Valuables, Shop Items, Enemies and Levels.

By combining the **[REPOLib-Sdk](/apis/repolib/sdk/start.md)** Unity Editor package with the core **[REPOLib](https://thunderstore.io/c/repo/p/Zehs/REPOLib)** DLL, you can build mods entirely without writing code. However, without any coding knowledge, you will be limited on what you can do.

While **REPOLib** isn't strictly mandatory, it is *highly* recommended, **especially** if you are new to R.E.P.O. modding.\
For experienced developers, **REPOLib** is fully extensible, meaning you can still seamlessly integrate your own custom C# scripts alongside it.

::: warning OS-SPECIFIC STEPS
Parts of this guide differ between **Windows** and **Linux**. Make sure to install and use the correct options for your operating system.
:::

## Prerequisites

- **Unity Hub**: Download and install [Unity Hub](https://unity.com/download).
- **Unity Editor**: Install the Unity Editor version [2022.3.62f3](unityhub://2022.3.62f3/96770f904ca7).
- **.NET SDK**: Required for AssetRipper to run.
    <!--NOTE: The AssetRipper Build the Windows version of the UPP Wrapper uses may be updated and will require .NET SDK 10-->
    - **For Windows**: [Version 9.x](https://dotnet.microsoft.com/en-us/download/dotnet/9.0)
    - **For Linux**: [Version 10.x](https://dotnet.microsoft.com/en-us/download/dotnet/10.0)
- **Git**: Download & Install [Git](https://git-scm.com/downloads). This is required for installing packages via Git URL in Unity.

## Unity Project Setup

1. Create a new Unity project with the following configuration (see image below):
   - **Editor Version**: `2022.3.62f3`
   - **Project Location**: Local Project
   - **Template**: 3D (Built-In Render Pipeline)

   ![Screenshot](/unity/0.png)

2. Once Unity fully opens, navigate to the menu bar and click `Window > Package Manager`.

3. Click the `+` button in the top left of the Package Manager and choose `Add package from git URL...`:

   ![Screenshot](/unity/1.png)

4. Paste all the **following** Unity Package links one after another in this text field:

   ![Screenshot](/unity/2.png)

   - **Unity Project Patcher:** Generates a Unity project from a game build so the game can be played in the editor.
   ::: code-group
   ```bash [Windows]
   https://github.com/nomnomab/unity-project-patcher.git
   ```
   ```bash [Linux]
   https://github.com/Jettcodey/unity-project-patcher.git
   ```
   :::

   - **Unity Project Patcher BepInEx:** BepInEx handler for a Unity Project Patcher project.
   ::: code-group
   ```bash [Windows]
   https://github.com/Kesomannen/unity-project-patcher-bepinex.git
   ```
   ```bash [Linux]
   https://github.com/Jettcodey/unity-project-patcher-bepinex.git
   ```
   :::

   - **Unity REPO Project Patcher:** Game wrapper that generates the Unity project from a R.E.P.O. build for in-editor play.
   ::: code-group
   ```bash [Windows]
   https://github.com/ZehsTeam/unity-repo-project-patcher.git
   ```
   ```bash [Linux]
   https://github.com/Jettcodey/unity-repo-project-patcher.git
   ```
   :::

### Patching the Project

1. After successfully adding the three packages above, navigate to the Unity menu bar and click `Tools > Unity Project Patcher > Configs > UPPatcherUserSettings`:

   ![Screenshot](/unity/3.png)

2. You will now see new options in the **Inspector** panel. Leave all the pre-filled fields as they are and only add the games folder path:

   ![Screenshot](/unity/4.png)

3. Next, return to the menu bar and click `Tools > Unity Project Patcher > Open Window`:

   ![Screenshot](/unity/5.png)

4. In the newly opened `UPPatcher - RepoWrapper` window, click on `Enable BepInEx` at the bottom of the window and wait for the process to finish.

   ![Screenshot](/unity/6.png)

5. Once BepInEx is enabled, click `Run Patcher` at the Top of the window to begin patching the project:

   ![Screenshot](/unity/7.png)

   ::: info NOTE
   **This process WILL take a while and will restart the Unity Editor about 4-6 times.**

   At the very beginning, you will receive **4** Popups. You can safely click `Ok` on each of them.
   :::

6. After the Editor restarts for the final time, a confirmation window will appear indicating the project has been successfully patched. Click `Ok`:

   ![Screenshot](/unity/8.png)

   ::: warning Did the Unity Project Patcher fail?
   First, check the **Unity Console** for specific errors and verify that you've installed all [Prerequisites](#prerequisites). 

   If everything looks correct, join the [R.E.P.O. Modding Server](https://discord.gg/vPJtKhYAFe) and ask for help in the [`#development`](https://discord.com/channels/1344557689979670578/1344699470176194673) channel.\
   You will need to acquire the **Modder** role from [`≣ Channels & Roles`](https://discord.com/channels/1344557689979670578/customize-community).
   :::

Now that your Unity Project is successfully patched, we recommend adding the [REPOLib SDK](./apis/repolib/sdk/start.md) to your project to make the workflow easier.
