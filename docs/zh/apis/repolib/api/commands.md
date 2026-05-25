# 调试命令

::: info 注意
本页面假设你已经为 R.E.P.O. modding 搭建了 HarmonyX 项目。\
如果还没有，请先参考 [HarmonyX 项目搭建](../../../harmonyx.md) 指南。
:::

调试控制台是 `v0.3.0` 版本中添加的原生功能。\
调试命令可以在调试控制台、聊天框或两者中执行，具体取决于你注册命令的方式。

### 聊天命令

在聊天框中输入聊天命令需要以 `/` 开头。

### 调试控制台

::: info
你必须在 **REPOLib** 配置设置中启用 `Developer Mode`（开发者模式）并重启游戏才能访问调试控制台。\
调试控制台命令可以在任何时候执行，包括在主菜单和大厅菜单中。
:::

通过按波浪号（**`~`**）键打开调试控制台。对于非美式键盘布局，通常是 **ESC** 下方、**1** 左侧的键。

::: tip 提示：
- 在调试控制台中输入命令不需要 `/`。
- 你可以使用上/下箭头键或滚轮浏览之前的输入记录。
- 当选中一个建议时，按 **TAB** 键自动补全。
- 你可以使用鼠标中键重复执行上一条命令。
- 物品和贵重物品会在最近的关卡点生成，而敌人会在附近的房间中生成。
:::

## 注册调试命令

注册调试命令：

```c#
using BepInEx;
using System.Collections.Generic;

[BepInPlugin("You.YourMod", "YourMod", "1.0.0")]
[BepInDependency(REPOLib.MyPluginInfo.PLUGIN_GUID)]
public class YourMod : BaseUnityPlugin
{
    private void Awake()
    {
        // 在插件的 Awake 方法中调用命令的注册方法。
        MyCommand.Register();
    }
}

// 为你的命令逻辑创建一个静态类。
public static class MyCommand
{
    public static void Register()
    {
        var cmd = new DebugCommandHandler.ChatCommand(
            // 命令名称。
            // 这是用户将输入的用于执行命令的文本。
            // 名称不应包含空格。
            "test",

            // 命令描述。
            "This is my test command",

            // 命令的执行函数。
            Execute,

            // 此参数是可选的。
            // 当用户输入时提供额外的命令参数建议。
            // 用户必须先输入完整的命令名称和空格，建议才会出现。
            Suggest,

            // 此参数是可选的，默认为 true。
            // 用于确定命令是否应被启用的函数。
            IsEnabled,

            // 此参数是可选的，默认为 true。
            // 如果为 true，命令将仅在调试控制台中可用。
            debugOnly: false
        );

        REPOLib.Modules.Commands.RegisterCommand(cmd);
    }

    // 如果命令从调试控制台执行，isDebugConsole 将为 true。
    // args 是传递给命令的额外选项。
    private static void Execute(bool isDebugConsole, string[] args)
    {
        // 如果命令执行成功，调用此函数。
        DebugCommandHandler.instance?.CommandSuccessEffect();

        // 如果命令执行失败，调用此函数。
        DebugCommandHandler.instance?.CommandFailedEffect();
    }

    // Suggest 函数仅在调试控制台中输入时运行。
    // 你必须先输入命令名称和空格。
    // 每次添加或移除字符都会重新运行 Suggest 函数。

    // 如果命令从调试控制台执行，isDebugConsole 将为 true。
    // partial 是 args 中最新的参数字符串。
    // args 是完整的参数列表。
    private static List<string> Suggest(bool isDebugConsole, string partial, string[] args)
    {
        // 根据当前的 partial 和 args 返回可能的参数列表。
        return [];
    }

    private static bool IsEnabled()
    {
        // 如果你想让命令有条件地启用，在此处添加逻辑。

        // 在主菜单中禁用命令。
        if (SemiFunc.IsSplashScreen() || SemiFunc.IsMainMenu())
        {
            return false;
        }

        // 在大厅菜单中禁用命令。
        if (SemiFunc.RunIsLobbyMenu())
        {
            return false;
        }

        // 在教程中禁用命令。
        if (SemiFunc.RunIsTutorial())
        {
            return false;
        }

        // 如果你不是主机，禁用命令。
        if (!SemiFunc.IsMasterClientOrSingleplayer())
        {
            return false;
        }

        return true;
    }
}
```
