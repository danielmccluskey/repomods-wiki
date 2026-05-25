# REPOLib Bundle 加载

::: info 注意
本页面假设你已经为 R.E.P.O. modding 搭建了 HarmonyX 项目。\
如果还没有，请先参考 [HarmonyX 项目搭建](../../../harmonyx.md) 指南。
:::

REPOLib 会自动加载 `BepInEx/plugins` 文件夹下扩展名为 `.repobundle` 的 bundle 文件，并扫描其中的 `Mod` 和 `Content` 资源，\
这允许配合 [REPOLib-Sdk](https://github.com/ZehsTeam/REPOLib-Sdk) 实现无代码注册功能。

::: info 注意
如果你的 bundle 使用了 `.repobundle` 扩展名但不包含 `Mod` 或 `Content` 资源，\
**它将加载失败。** 你仍然可以通过移除 `.repobundle` 扩展名并使用公开的 `BundleLoader` 方法手动加载 bundle，如下所述。具体示例请参阅相应的指南页面。
:::

Bundle 采用异步加载方式，这使得其他 mod 可以在从磁盘读取文件的同时进行初始化，从而缩短启动时间。因此，即使你已经在编写自己的插件代码，使用这个系统也是首选方式。

::: warning
如果你编写的 mod 需要与 mod 内容交互，请记住由于异步 bundle 加载，所有 REPOLib 内容可能在游戏启动时尚未注册完成。

要解决这个问题，可以在稍后阶段进行初始化（例如加入大厅时），或者订阅 `REPOLib.BundleLoader.OnAllBundlesLoaded` 事件（但这需要依赖 REPOLib）。
:::

如果你想对 bundle 加载有更多控制，可以使用 `REPOLib.BundleLoader` 的公开方法：

```c#
using REPOLib;
using UnityEngine;
using System.Collections;

BundleLoader.LoadBundle(
    "/path/to/bundle",
    // bundle 加载完成后的回调，
    // 保证在玩家加入大厅之前执行。
    //
    // 可以是普通方法或协程（通过返回 IEnumerator）。
    OnBundleLoaded,
    // 如果为 true，REPOLib 会从 bundle 中加载并注册所有 Content 资源，
    // 就像自动加载一样。
    //
    // 默认为 false。
    loadContents: true
);

IEnumerator OnBundleLoaded(AssetBundle bundle) 
{
    Debug.Log("My bundle was loaded!");
    
    // 执行更多（异步）设置逻辑，
    // 或者，如果 loadContents 为 false，加载并注册你的内容。
    
    yield break;
}
```
