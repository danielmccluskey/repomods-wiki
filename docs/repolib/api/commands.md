# REPOLib Chat Commands

## Built-in Commands

::: info
You must enable `DeveloperMode` in the config settings to use developer mode commands.
:::

Chat commands currently only work in multiplayer since you need access to the in-game chat to use commands.

REPOLib comes with a few built-in chat commands:

### Spawn Valuable `/spawnvaluable <name>`

This command will spawn a valuable in front of you.\
Replace `<name>` with the name of the valuable prefab.\
Names are not case-sensitive.\
Example usage: `/spawnvaluable diamond`\
This command has multiple aliases: `/spawnval`, `/sv`\
<ins>**This command requires developer mode to be enabled.**</ins>\
<ins>**This command is host-only!**</ins>

### Spawn Item `/spawnitem <name>`

This command will spawn an item in front of you.\
Replace `<name>` with the name of the item or item prefab.\
Names are not case-sensitive.\
Example usage: `/spawnitem gun`\
This command has one alias: `/si`\
<ins>**This command requires developer mode to be enabled.**</ins>\
<ins>**This command is host-only!**</ins>

### Spawn Enemy `/spawnenemy <name>`

This command will spawn an enemy on top of you after a few seconds.\
Replace `<name>` with the name of the enemy or enemy prefab.\
Names are not case-sensitive.\
Example usage: `/spawnenemy huntsman`\
This command has one alias: `/se`\
<ins>**This command requires developer mode to be enabled.**</ins>\
<ins>**This command is host-only!**</ins>

::: tip
Commands can be enabled/disabled in the config settings.
:::

## Registering Custom Commands

Registering a chat /command:

```c#
using REPOLib.Commands;

public static class YourCommand
{
    // ...

    [CommandInitializer]
    public static void Initialize()
    {
        // Perform any setup or caching
    }

    [CommandExecution(
        "Your Command Name",
        "Description of what the command does and how to use it.",
        enabledByDefault: true,
        requiresDeveloperMode: false
        )]
    [CommandAlias("yourcommand")]
    [CommandAlias("yourcmd")]
    public static void Execute(string args)
    {
        // ...
    }
}
```
