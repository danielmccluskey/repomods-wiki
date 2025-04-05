# Developing Mods

How to develop mods.

# Setup the Development Environment

The following tools should be installed:
- **.NET SDK**: Version 6.0 or higher.
- **Integrated Development Environment (IDE)**: [Visual Studio 2022](https://visualstudio.microsoft.com/) or [JetBrains Rider](https://www.jetbrains.com/rider/).
- **Git**: Highly recommended for version control.
- **BepInEx**: The mod loader. This either should be installed with the game directly, or there should be a dedicated development profile in a mod manager.

While R.E.P.O is technically playable on different Operating Systems, this Documentation assumes that development is done on a Windows Machine.
Since a lot of virtualization is involved when running the Game on Linux, debugging a plugin that is in development becomes immensely more complicated.

# Creating a Plugin Project

This tutorial walks through the process of developing a BepInEx mod for R.E.P.O. using [Repo Modding SDKs and Templates](https://github.com/linkoid/Repo.Sdks#readme). This streamlines mod development by automating game detection, using best practices, and simplifying the build process.

::: info **Why Use the Repo SDKs?**
- **Auto-Detection**: Automatically identifies the game installation directory.
- **Simplified Deployment**: Ensures the mod is placed in the correct BepInEx folder.
- **Integrated Development**: Allows seamless launching and debugging directly from the  Integrated Development Environment (IDE).
- **Reduced Manual Setup**: Minimizes the need for manual configuration, and works in a portable manner (e.g. not specific to a single device).
:::


## I. Setting Up the Project

There are two methods to setup a project. Using a template, or starting from scratch.

### A. Creating a New Plugin from a Template

The Repo SDKs offer pre-built templates to expedite the setup of a mod project.

1. **Install the Template**
   
   Open a terminal and run this command to install the templates:
   ```shell
   dotnet new install Linkoid.Repo.Plugin.Templates
   ```

::: warning Important
The templates are currently being updated, so be sure to run this command every time before using them!
::: 

2. **Create a New Mod Project**
   
   When creating a new project using an IDE, the template will appear in a list of options.
   If there are lots of templates, try searching for C# or REPO to narrow down the results.
   
   The template can also be created from the console with the following command:
   ```shell
   dotnet new repoharmony -n MyRepoMod -A MyName
   ```
   - `-n MyRepoMod`: Specifies the plugin's name.
   - `-A MyName`: Specifies the author name.

   This command will generate a BepInEx plugin with Harmony patching support.

   To see all available options, run:
   ```shell
   dotnet new repoharmony --help
   ```

### B. Creating a Project from Scratch

A standard C# project without a template can also be used (though not recomended). This section will also describe how to add the Repo SDKs to an existing project.

1. **Adding the Repo SDK to the `.csproj` File**:
   
   Add the Repo Plugin Build SDK by including the following within the `<ItemGroup>` tags:
   ```xml
   <PackageReference Include="Linkoid.Repo.Plugin.Build" Version="*" PrivateAssets="all" />
   ```

2. **Adding Game Assemblies**: 
   
   It is recomended to use the Repo GameLibs package for referencing game assemblies.
   ```xml
   <PackageReference Include="R.E.P.O.GameLibs.Steam" Version="*-*" PrivateAssets="all" Publicize="true" />
   ```
   However, it is also possibly to reference the game assemblies from the local game installation by adding the following property within the `<PropertyGroup>` tags:
   ```xml
   <EnableGameReferences>true</EnableGameReferences>
   ```


## II. Organization and Configuration

It is recomended to have a folder for all the modding projects to be placed in.

### Adding a `Directory.Repo.props` File
While the SDK typically auto-detects the game installation, it is possible to manually specify the game directory using a `Directory.Repo.props` file. This is also recomended to configure built mods to be deployed to a specific mod-manager profile. 

The SDK will use the first `Directory.Repo.props` file found at or above the project directory. **Think of this file as a configuration for this specific device.** The same file (without copying) can be used for all projects in descendant folder.

1. **Create the File**:
   
   Place a `Directory.Repo.props` file in either the home directory, the folder containg all the mods, or the root of the mod project.

   Here is an eaxample folder hierarchy:
    - 📁 My Projects
       - 📁 My REPO Projects
          - 📄 **Directory.Repo.Props**
          - 📁 MyFirstProject
             - 📄 MyFirstProject.sln
             - 📁 MyFirstProject
                - 📄 MyFirstProject.csproj
          - 📁 MyFutureProject01
          - 📁 MyFutureProject02

2. **Add the Following XML Configuration**:
   ```xml
   <Project>
     <PropertyGroup>
       <GameDirectory>C:\Path\To\REPO\</GameDirectory>
       <GaleProfileName>Default</GaleProfileName>
       <BepInExDirectory>$(AppData)\com.kesomannen.gale\repo\profiles\$(GaleProfileName)\BepInEx</BepInExDirectory>
       <StartArguments>--doorstop-enable true --doorstop-target "$(BepInExDirectory)\core\BepInEx.Preloader.dll" --gale-profile "$(GaleProfileName)"</StartArguments>
     </PropertyGroup>
   </Project>
   ```
   - `<GameDirectory>`: Specify the path to your R.E.P.O. installation.
   - `<BepInExDirectory>`: Define the location of BepInEx.
   - `<StartArguments>`: Ensure BepInEx loads correctly when launching the game.
   
   ::: info Privacy
   These paths may contain personal information in them such as the Window's Username.
   This is one of the reasons why this file is kept in a separate folder above all the projects.
   ::: 

### Adding NuGet Sources
   TODO

### Adding Thunderstore Dependencies
   TODO


## III. Building & Running the Mod

### 1. Build the Mod
**A. Building from the Command Line**

In the console, navigate to the project or solution directory and run:
```shell
dotnet build
```
This command compiles the mod and generates a `.dll` file located in `bin/Debug/netstandard2.0/`.

### 2. Install the Mod

After the mod successfully builds, the SDK will copy it to the BepInEx plugins folder.
If the mod builds successfully but is not found in the `BepInEx/plugins` folder,
then go back and configure the `Directory.Repo.props` file.

### 3. Launch the Game with the Mod

With the mod installed, launch R.E.P.O. in one of the following methods:
 - from the IDE
 - with `dotnet run` on the command line
 - via the mod manager


# More Resources
For additional resources it is highly recomended to read the [BepInEx Plugin Documentation](https://docs.bepinex.dev/articles/dev_guide/plugin_tutorial/2_plugin_start.html)
