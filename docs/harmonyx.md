# R.E.P.O. HarmonyX Project Setup

A guide for setting up your HarmonyX Project to create mods for R.E.P.O.

## Set Up the Development Environment

To begin development, ensure the following core tools are installed on your system:

- **.NET SDK**: [Version 9.0.x](https://dotnet.microsoft.com/en-us/download/dotnet/9.0).
- **Integrated Development Environment (IDE)**:\
  While any C# compatible editor works, we recommend the following:
  | IDE (Download Link) | Description |
  |-|-|
  | [JetBrains Rider](https://www.jetbrains.com/rider) | Feature-rich, cross-platform .NET IDE. |
  | [VSCodium](https://vscodium.com/#install) | A community-driven, privacy-focused Visual Studio Code fork without telemetry. |
  | [Visual Studio](https://visualstudio.microsoft.com) | The standard, feature-rich Windows .NET IDE. |
  | [Visual Studio Code](https://code.visualstudio.com) | Highly customizable, plugin-based editor supporting a diverse range of languages. |
- **Version Control**:\
  **Git** is highly recommended for version control, managing project history and collaborating with others. ([Git Download Page](https://git-scm.com/install))
- **BepInEx**: The primary mod loader.
  - **Note**: Should automatically be managed via a dedicated development profile in your preferred mod manager (e.g. Gale, r2modman).

## Creating a Plugin Project

This tutorial walks through the process of developing a BepInEx mod for R.E.P.O. using [R.E.P.O. Modding SDKs and Templates](https://github.com/linkoid/Repo.Sdks#readme). This streamlines mod development by automating game detection, using best practices, and simplifying the build process.

::: info Why use the R.E.P.O. Modding SDKs?
- **Auto-Detection**: Automatically identifies the game installation directory.
- **Simplified Deployment**: Ensures the mod is placed in the correct BepInEx folder.
- **Integrated Development**: Allows seamless launching and debugging directly from the  Integrated Development Environment (IDE).
- **Reduced Manual Setup**: Minimizes the need for manual configuration, and works in a portable manner (e.g. not specific to a single device).
:::

## I. Setting Up the Project

There are two methods to set up a project: using a template, or starting from scratch.

### A. Creating a New Plugin from a Template

The R.E.P.O. Modding SDKs offer pre-built templates to expedite the setup of a mod project.

1. **Install the Template**:\
   Open a terminal and run this command to install the templates:
   ```Shell
   dotnet new install Linkoid.Repo.Plugin.Templates
   ```
   ::: warning Important
   The templates are currently being updated, so be sure to run this command every time before using them!
   :::
2. **Create a New Mod Project**:\
   When creating a new project using an IDE, the template will appear in a list of options.
   If there are lots of templates, try searching for "C#" or "REPO" to narrow down the results.

   The template can also be created from the console with the following command:
   ```Shell
   dotnet new repoharmony -n MyRepoMod -A MyName
   ```
   - `-n MyRepoMod`: Specifies the plugin's name.
   - `-A MyName`: Specifies the author name.

   This command will generate a BepInEx plugin with HarmonyX patching support.

   To see all available options, run:
   ```Shell
   dotnet new repoharmony --help
   ```

### B. Creating a Project from Scratch (Not Using Templates)

A standard C# project without a template can also be used (though not recommended). This section will also describe how to add the R.E.P.O. Modding SDKs to an existing project.

1. **Adding the R.E.P.O. Modding SDK to the `.csproj` File**:\
   Add the `Repo.Plugin.Build` SDK by including the following within the `<ItemGroup>` tags:
   ```XML
   <PackageReference Include="Linkoid.Repo.Plugin.Build" Version="*" PrivateAssets="all" />
   ```
2. **Adding Game Assemblies**:\
   It is recommended to use the R.E.P.O. GameLibs package for referencing game assemblies:
   ```XML
   <PackageReference Include="R.E.P.O.GameLibs.Steam" Version="*-*" PrivateAssets="all" Publicize="true" />
   ```
   However, it is also possible to reference the game assemblies from the local game installation by adding the following property within the `<PropertyGroup>` tags:
   ```XML
   <EnableGameReferences>true</EnableGameReferences>
   ```

## II. Organization and Configuration

It is recommended to have a folder for all your modding projects to be placed in.

### Adding a `Directory.Repo.props` File
While the SDK typically auto-detects the game installation, it is possible to manually specify the game directory using a `Directory.Repo.props` file. This is also recommended to configure built mods to be automatically deployed to a specific mod manager profile.

The SDK will use the first `Directory.Repo.props` file found at or above the project directory. **Think of this file as a configuration for this specific device.** The same file (without copying) can be used for all projects in descendant folders.

1. **Create the File**:\
   Place a `Directory.Repo.props` file in either the home directory, the folder containing all the mods, or the root of the mod project.\
   Here's an example file hierarchy:

   - :file_folder: `My Projects`
      - :file_folder: `My REPO Projects`
         - :page_facing_up: **`Directory.Repo.Props`**
         - :file_folder: `MyFirstProject`
            - :page_facing_up: `MyFirstProject.sln`
            - :file_folder: `MyFirstProject`
               - :page_facing_up: `MyFirstProject.csproj`
         - :file_folder: `MyFutureProject01`
         - :file_folder: `MyFutureProject02`

2. **Add the Following XML Configuration**:
   > These file paths are Windows-specific.
   ::: code-group
   ```XML [r2modman]
   <Project>
     <PropertyGroup>
       <GameDirectory>C:\Path\To\REPO\</GameDirectory>
       <ProfileName>Default</ProfileName>
       <BepInExDirectory>$(AppData)\r2modmanPlus-local\REPO\profiles\$(ProfileName)\BepInEx</BepInExDirectory>
       <StartArguments>--doorstop-enable true --doorstop-target "$(BepInExDirectory)\core\BepInEx.Preloader.dll"</StartArguments>
     </PropertyGroup>
   </Project>
   ```
   ```XML [Gale]
   <Project>
     <PropertyGroup>
       <GameDirectory>C:\Path\To\REPO\</GameDirectory>
       <ProfileName>Default</ProfileName>
       <BepInExDirectory>$(AppData)\com.kesomannen.gale\repo\profiles\$(ProfileName)\BepInEx</BepInExDirectory>
       <StartArguments>--doorstop-enable true --doorstop-target "$(BepInExDirectory)\core\BepInEx.Preloader.dll" --gale-profile "$(ProfileName)"</StartArguments>
     </PropertyGroup>
   </Project>
   ```
   :::
   - `<GameDirectory>`: Specify the path to your R.E.P.O. installation.
   - `<ProfileName>`: Specify the name of the mod profile to deploy the DLL to. This can be a custom profile dedicated to mod development (e.g. "Mod Dev").
   - `<BepInExDirectory>`: Define the location of BepInEx.
   - `<StartArguments>`: This ensures BepInEx loads correctly when launching the game.
   ::: info PRIVACY
   These paths may contain personal information in them such as the Windows Username.
   This is one of the reasons why this file is kept in a separate folder above all the projects.
   :::

### Adding NuGet Sources
You can add these as either a global or a project-specific NuGet source.
> This example uses the BepInEx NuGet source.
- **Global NuGet source**:\
  Run the following command in your terminal:
  ```Shell
  dotnet nuget add source https://nuget.bepinex.dev/v3/index.json -n BepInEx
  ```
- **Project-specific NuGet source**:\
  Alternatively, edit your `.csproj` file and add the following:
  ```XML {4-5}
  <!-- Add Nuget Sources -->
      <PropertyGroup>
          <RestoreAdditionalProjectSources>
          https://api.nuget.org/v3/index.json; <!-- Official NuGet feed -->
          https://nuget.bepinex.dev/v3/index.json; <!-- BepInEx NuGet feed -->
          </RestoreAdditionalProjectSources>
      </PropertyGroup>
  ```

### Adding Thunderstore Dependencies

::: info NOTE
Make sure you have added the Thunderstore NuGet feed to your NuGet Sources or `.csproj` file:
```
https://nuget.windows10ce.com/nuget/v3/index.json
```
This domain is owned by an official [Thunderstore staff member](https://github.com/Windows10CE).
:::

You can add a Thunderstore dependency to your `.csproj` like any other NuGet Package:
> This example uses [Nickklmao's MenuLib](https://thunderstore.io/c/repo/p/nickklmao/MenuLib) mod.
```XML {2}
<ItemGroup>
  <PackageReference Include="Nickklmao-MenuLib" Version="2.*" />
</ItemGroup>
```

After updating your file, you *may* need to run:
```Shell
dotnet restore
```

You are now ready to start coding with the new dependency.

::: tip
Don't forget to update the (Major-)versions as updates get released for the packages.
:::

## III. Building & Running the Mod

1. **Build the Mod**:\
   In the console, navigate to the project or solution directory and run:
   ```Shell
   dotnet build
   ```
   This command compiles the mod and generates a `.dll` file located in `bin/Debug/netstandard2.1/`.
2. **Install the Mod**:\
   After the mod successfully builds, the SDK will copy it to the BepInEx plugins folder. If the mod builds successfully but is not found in the `BepInEx/plugins` folder, then go back and reconfigure the `Directory.Repo.props` file.
3. **Launch the Game with the Mod**:\
   With the mod installed, launch R.E.P.O. from one of the following methods:
   - From the IDE.
   - With `dotnet run` on the command line.
   - Via the mod manager.

## More Resources
For additional resources, it is highly recommended to read the [BepInEx Plugin Documentation](https://docs.bepinex.dev/articles/dev_guide/plugin_tutorial/2_plugin_start.html)
