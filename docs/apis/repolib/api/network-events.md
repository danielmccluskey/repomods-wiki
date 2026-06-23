# Creating Network Events with REPOLib

::: info NOTE
This page assumes you have a HarmonyX project setup for R.E.P.O. modding.\
If not, first follow the guide in [HarmonyX Project Setup](../../../harmonyx.md).
:::

**Creating** a networked event:

```C#
using ExitGames.Client.Photon;
using REPOLib.Modules;

public class YourMod : BaseUnityPlugin
{
    public static NetworkedEvent ExampleEvent;

    private void Awake()
    {
        ExampleEvent = new NetworkedEvent(
            // The name of your event.
            "My Example Event",
            
            // The method to handle your event.
            HandleExampleEvent
        );
    }

    // EventData is from ExitGames.Client.Photon
    private static void HandleExampleEvent(EventData eventData)
    {
        string message = (string)eventData.CustomData;
        Debug.Log($"Received message from example event: {message}");
    }
}
```

**Calling** a networked event:

<!-- BLOKBUSTR: TODO: I don't think RaiseOthers would work in Singleplayer -->
```C#
// The data you are sending through your networked event.
string message = "Hello World!";

// Call networked event on everyone (this works in singleplayer).
ExampleEvent.RaiseEvent(message, REPOLib.Modules.NetworkingEvents.RaiseAll, SendOptions.SendReliable);

// Call networked event on everyone but yourself (this does nothing in singleplayer).
ExampleEvent.RaiseEvent(message, REPOLib.Modules.NetworkingEvents.RaiseOthers, SendOptions.SendReliable);

// Call networked event on the master client (this works in singleplayer).
ExampleEvent.RaiseEvent(message, REPOLib.Modules.NetworkingEvents.RaiseMasterClient, SendOptions.SendReliable);
```
