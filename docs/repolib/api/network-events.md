# Creating Network Events with REPOLib

Creating a networked event:

```c#
using ExitGames.Client.Photon;
using REPOLib.Modules;

public class YourMod : BaseUnityPlugin
{
    // ...

    public static NetworkedEvent ExampleEvent;

    private void Awake()
    {
        // ...

        ExampleEvent = new NetworkedEvent("My Example Event", HandleExampleEvent);
    }

    // EventData is from ExitGames.Client.Photon
    private static void HandleExampleEvent(EventData eventData)
    {
        string message = (string)eventData.CustomData;
        Debug.Log($"Received message from example event: {message}");
    }
}
```

Calling a networked event:

```c#
// The data you are sending through your networked event.
string message = "Hello World!";

// Call networked event on everyone. (This works in singleplayer)
ExampleEvent.RaiseEvent(message, REPOLib.Modules.NetworkingEvents.RaiseAll, SendOptions.SendReliable);

// Call networked event on everyone but yourself. (This works in singleplayer)
ExampleEvent.RaiseEvent(message, REPOLib.Modules.NetworkingEvents.RaiseOthers, SendOptions.SendReliable);

// Call networked event on the master client. (This works in singleplayer)
ExampleEvent.RaiseEvent(message, REPOLib.Modules.NetworkingEvents.RaiseMasterClient, SendOptions.SendReliable);
```
