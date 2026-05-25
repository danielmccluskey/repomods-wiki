# R.E.P.O. HarmonyX 项目设置

设置 HarmonyX 项目以创建 R.E.P.O. Mod 的指南。

## 设置开发环境

开始开发之前，请确保系统上已安装以下核心工具：

**.NET SDK：** [版本 9.0.x](https://dotnet.microsoft.com/en-us/download/dotnet/9.0)。

### 集成开发环境（IDE）
虽然任何兼容 C# 的编辑器都可以使用，但我们推荐以下选项：

| IDE（下载链接） | 描述 |
| :--- | :--- |
| **[JetBrains Rider](https://www.jetbrains.com/rider/)** | 功能丰富的跨平台 .NET IDE。 |
| **[VSCodium](https://vscodium.com/#install)** | 社区驱动、注重隐私的 VS Code 分支，无遥测。 |
| **[Visual Studio](https://visualstudio.microsoft.com/)** | 标准的、功能丰富的 Windows .NET IDE。 |
| **[Visual Studio Code](https://code.visualstudio.com/)** | 高度可定制的基于插件的编辑器，支持多种语言。 |

### 版本控制与 Mod 工具
**Git**：强烈推荐用于版本控制、管理项目历史和与他人协作，[Git 下载页面](https://git-scm.com/install/)。

**BepInEx：** 主要的 Mod 加载器。
   * **注意：** 应通过你首选的 Mod 管理器（如 Gale、r2modman）中的专用开发配置文件自动管理。

## 创建插件项目

本教程将指导你使用 [REPO Modding SDK 和模板](https://github.com/linkoid/Repo.Sdks#readme) 为 R.E.P.O. 开发 BepInEx Mod 的过程。这通过自动化游戏检测、使用最佳实践和简化构建流程来加速 Mod 开发。

::: info **为什么使用 Repo SDK？**
- **自动检测**：自动识别游戏安装目录。
- **简化部署**：确保 Mod 被放置在正确的 BepInEx 文件夹中。
- **集成开发**：允许直接从集成开发环境（IDE）无缝启动和调试。
- **减少手动设置**：最小化手动配置的需要，以可移植的方式工作（不特定于单个设备）。
:::

## I. 设置项目

有两种方法设置项目：使用模板或从头开始。

### A. 从模板创建新插件

Repo SDK 提供了预构建的模板来加速 Mod 项目的设置。

1. **安装模板**
   
   打开终端并运行此命令安装模板：
   ```shell
   dotnet new install Linkoid.Repo.Plugin.Templates
   ```

::: warning 重要
模板目前正在更新中，因此请务必在每次使用前运行此命令！
::: 

2. **创建新 Mod 项目**
   
   使用 IDE 创建新项目时，模板将出现在选项列表中。
   如果模板很多，可以尝试搜索 C# 或 REPO 来缩小结果范围。
   
   也可以通过控制台使用以下命令创建模板：
   ```shell
   dotnet new repoharmony -n MyRepoMod -A MyName
   ```
   - `-n MyRepoMod`：指定插件名称。
   - `-A MyName`：指定作者名称。

   此命令将生成一个支持 Harmony 修补的 BepInEx 插件。

   要查看所有可用选项，运行：
   ```shell
   dotnet new repoharmony --help
   ```

### B. 从头创建项目（不使用模板）

也可以使用不带模板的标准 C# 项目（但不推荐）。本节还将描述如何将 Repo SDK 添加到现有项目中。

1. **将 Repo SDK 添加到 `.csproj` 文件**：
   
   在 `<ItemGroup>` 标签内添加以下内容来包含 Repo Plugin Build SDK：
   ```xml
   <PackageReference Include="Linkoid.Repo.Plugin.Build" Version="*" PrivateAssets="all" />
   ```

2. **添加游戏程序集**： 
    
   推荐使用 Repo GameLibs 包来引用游戏程序集。
   ```xml
   <PackageReference Include="R.E.P.O.GameLibs.Steam" Version="*-*" PrivateAssets="all" Publicize="true" />
   ```
   但是，也可以通过在 `<PropertyGroup>` 标签内添加以下属性来引用本地游戏安装中的游戏程序集：
   ```xml
   <EnableGameReferences>true</EnableGameReferences>
   ```


## II. 组织和配置

建议为所有 Mod 项目创建一个专用文件夹。

### 添加 `Directory.Repo.props` 文件
虽然 SDK 通常会自动检测游戏安装，但可以使用 `Directory.Repo.props` 文件手动指定游戏目录。这也建议用于配置构建的 Mod 部署到特定的 Mod 管理器配置文件。

SDK 将使用在项目目录或其上级目录中找到的第一个 `Directory.Repo.props` 文件。**将此文件视为此特定设备的配置。** 同一个文件（无需复制）可用于所有子文件夹中的项目。

1. **创建文件**：
   
   将 `Directory.Repo.props` 文件放在主目录、包含所有 Mod 的文件夹或 Mod 项目的根目录中。

   以下是示例文件夹结构：
    - 📁 My Projects
       - 📁 My REPO Projects
          - 📄 **Directory.Repo.Props**
          - 📁 MyFirstProject
             - 📄 MyFirstProject.sln
             - 📁 MyFirstProject
                - 📄 MyFirstProject.csproj
          - 📁 MyFutureProject01
          - 📁 MyFutureProject02

2. **添加以下 XML 配置**：
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
   - `<GameDirectory>`：指定 R.E.P.O. 安装路径。
   - `<BepInExDirectory>`：定义 BepInEx 的位置。
   - `<StartArguments>`：确保启动游戏时 BepInEx 正确加载。
    
   ::: info 隐私
   这些路径可能包含个人信息，例如 Windows 用户名。
   这就是为什么此文件保存在所有项目之上的单独文件夹中的原因之一。
   ::: 

### 添加 NuGet 源
你可以将这些添加为全局或项目特定的 NuGet 源。
> 此示例使用 BepInEx NuGet 源。

#### A. 添加为全局 NuGet 源
在终端中运行以下命令：
```cmd
dotnet nuget add source https://nuget.bepinex.dev/v3/index.json -n BepInEx
```

#### B. 添加为项目 NuGet 源
或者，编辑你的 `.csproj` 文件并添加以下内容：
```xml
<!-- Add Nuget Sources -->
	<PropertyGroup>
		<RestoreAdditionalProjectSources>
         https://api.nuget.org/v3/index.json; <!-- Official NuGet feed -->
		 https://nuget.bepinex.dev/v3/index.json; <!-- BepInEx NuGet feed -->
		</RestoreAdditionalProjectSources>
	</PropertyGroup>
```

### 添加 Thunderstore 依赖

::: info 注意
确保你已将 Thunderstore NuGet 源添加到你的 NuGet 源或 `.csproj` 文件中。
```
https://nuget.windows10ce.com/nuget/v3/index.json
```
该域名由 [Thunderstore 官方员工](https://github.com/Windows10CE) 拥有。
:::

你可以像添加任何其他 NuGet 包一样将 Thunderstore 依赖添加到你的 `.csproj` 中：
> 此示例使用 [Nickklmao 的 MenuLib](https://thunderstore.io/c/repo/p/nickklmao/MenuLib/) Mod。

```xml
<ItemGroup>
  <PackageReference Include="Nickklmao-MenuLib" Version="2.*" />
</ItemGroup>
```

更新文件后，你***可能***需要运行：

```cmd
dotnet restore
```

你现在可以开始使用新依赖进行编码了。

::: tip
不要忘记在包发布更新时更新（主版本）号。
:::


## III. 构建和运行 Mod

### 1. 构建 Mod
**A. 从命令行构建**

在控制台中，导航到项目或解决方案目录并运行：
```shell
dotnet build
```
此命令编译 Mod 并在 `bin/Debug/netstandard2.1/` 中生成 `.dll` 文件。

### 2. 安装 Mod

Mod 成功构建后，SDK 会将其复制到 BepInEx 插件文件夹。
如果 Mod 构建成功但未在 `BepInEx/plugins` 文件夹中找到，
请返回并配置 `Directory.Repo.props` 文件。

### 3. 使用 Mod 启动游戏

Mod 安装后，通过以下方式之一启动 R.E.P.O.：
 - 从 IDE 启动
 - 在命令行中使用 `dotnet run`
 - 通过 Mod 管理器启动


## 更多资源
有关更多资源，强烈建议阅读 [BepInEx 插件文档](https://docs.bepinex.dev/articles/dev_guide/plugin_tutorial/2_plugin_start.html)
