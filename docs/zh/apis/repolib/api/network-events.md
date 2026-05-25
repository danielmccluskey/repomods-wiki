# 使用 REPOLib 创建网络事件

::: info 注意
本页面假设你已经为 R.E.P.O. modding 搭建了 HarmonyX 项目。\
如果还没有，请先参考 [HarmonyX 项目搭建](../../../harmonyx.md) 指南。
:::

创建网络事件：

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

    // EventData 来自 ExitGames.Client.Photon
    private static void HandleExampleEvent(EventData eventData)
    {
        string message = (string)eventData.CustomData;
        Debug.Log($"Received message from example event: {message}");
    }
}
```

调用网络事件：

```c#
// 通过网络事件发送的数据。
string message = "Hello World!";

// 对所有人调用网络事件。（在单人模式下也可用）
ExampleEvent.RaiseEvent(message, REPOLib.Modules.NetworkingEvents.RaiseAll, SendOptions.SendReliable);

// 对除自己以外的所有人调用网络事件。（在单人模式下也可用）
ExampleEvent.RaiseEvent(message, REPOLib.Modules.NetworkingEvents.RaiseOthers, SendOptions.SendReliable);

// 对主机客户端调用网络事件。（在单人模式下也可用）
ExampleEvent.RaiseEvent(message, REPOLib.Modules.NetworkingEvents.RaiseMasterClient, SendOptions.SendReliable);
```
