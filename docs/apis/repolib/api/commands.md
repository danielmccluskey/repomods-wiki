# Debug Commands

Chat command can either be executed in the chat or chat and debug console depending on how you register your chat command.

### Chat

Typing a chat command in the chat requires you to start with a `/`

### Debug Console

The debug console is a new vanilla addition added in `v0.3.0`

::: info
You must enable `Developer Mode` in the config settings and restart the Game to enable access to the debug console.\
Debug console commands can be executed at any time, even in the main menu and lobby menu.
:::

Typing a chat command in the debug console doesn't require you to start with a `/`

Open the debug console by pressing the tilde (**~**) key. For non-US layouts, this is typically the key located directly below **ESC** and to the left of the **1** key.

::: tip Tips:
- You can scroll up and down with the up/down arrow keys or scroll wheel. Also when an option is selected you can press tab to complete it.
- You can use middle mouse click to redo the previous command you executed.
- Items & valuables spawn at the closest level point whilst enemies spawn in a room nearby.
:::

## Registering Debug Commands

Registering a chat command:

```c#
using BepInEx;
using System.Collections.Generic;

[BepInPlugin("You.YourMod", "YourMod", "1.0.0")]
[BepInDependency(REPOLib.MyPluginInfo.PLUGIN_GUID)]
public class YourMod : BaseUnityPlugin
{
    private void Awake()
    {
        // Call your command's register method from your plugin's awake.
        MyCommand.Register();
    }
}

// Create a static class for your command logic.
public static class MyCommand
{
    public static void Register()
    {
        var cmd = new DebugCommandHandler.ChatCommand(
            // The name of your command.
            // This is what the user will type to execute it.
            // The name should not include spaces.
            "test",

            // The description of your command.
            "This is my test command",

            // The execute function of your command.
            Execute,

            // This argument is optional.
            // This will provide additional command argument suggestions as the user types.
            // The user must type the entire command name and a space before suggestions start showing.
            Suggest,

            // This argument is optional and true by default.
            // Function to determine if the command should be enabled.
            IsEnabled,

            // This argument is optional and true by default.
            // If true, the command will only be accessible in the debug console.
            debugOnly: false
        );

        REPOLib.Modules.Commands.RegisterCommand(cmd);
    }

    // isDebugConsole will be true if the command is being executed for the debug console.
    // args are additional options you can add to your command execution.
    private static void Execute(bool isDebugConsole, string[] args)
    {
        // You should call this function if your command executes successfully.
        DebugCommandHandler.instance?.CommandSuccessEffect();

        // You should call this function if your command execution fails.
        DebugCommandHandler.instance?.CommandFailedEffect();
    }

    // The Suggest function will only be executed if your are typing your command in the debug console.
    // You must write your command name and a space for the suggest function to start executing.
    // Every characater you add or remove will execute the Suggest function.

    // isDebugConsole will be true if the command is being executed from the debug console.
    // partial is the latest argument string from args.
    // args is the total list of arguments.
    private static List<string> Suggest(bool isDebugConsole, string partial, string[] args)
    {
        // Return a list of possible arguments based on the current partial and args.
        return [];
    }

    private static bool IsEnabled()
    {
        // Add logic here if you want to have your command be conditionally enabled.

        // Disables your command in the main menu.
        if (SemiFunc.IsSplashScreen() || SemiFunc.IsMainMenu())
        {
            return false;
        }

        // Disables your command in the lobby menu.
        if (SemiFunc.RunIsLobbyMenu())
        {
            return false;
        }

        // Disables your command in the tutorial.
        if (SemiFunc.RunIsTutorial())
        {
            return false;
        }

        // Disables your command if you are not the host.
        if (!SemiFunc.IsMasterClientOrSingleplayer())
        {
            return false;
        }

        return true;
    }
}
```