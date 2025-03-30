# Registering Chat Commands with REPOLib

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
