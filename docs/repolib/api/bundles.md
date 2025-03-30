# REPOLib Bundle Loading

REPOLib loads bundles under the `BepInEx/plugins` folder that have the `.repobundle` extension. These bundles are then scanned for `Mod` and `Content` assets, which allows codeless registration of features in tandem with [REPOLib-Sdk](https://github.com/Zehs/REPOLib-Sdk).

Bundles are loaded asynchronously, which enables other mods to do their initialization while files are being read from disk, which in turn leads to shorter startup times. Hence, using this system is the preferred way to use this library, even if you're already writing your own plugin code.

::: warning
If you're writing a mod that interacts with modded content, remember that all REPOLib content may not be registered by game start because of async bundle loading.

To work around this, either do your initialization at a later stage (for example when joining a lobby) or subscribe to the `REPOLib.BundleLoader.OnAllBundlesLoaded` event (however this requires a dependency on REPOLib).
:::

If you want more control over the loading of bundles, you can use the public methods from `REPOLib.BundleLoader`:

```c#
using REPOLib;
using UnityEngine;
using System.Collections;

BundleLoader.LoadBundle(
    "/path/to/bundle",
    // Callback when the bundle has finished loading, 
    // which is guaranteed to happen before the player joins a lobby.
    //
    // Note that this needs to return an IEnumerator.
    OnBundleLoaded,
    // If this is true, REPOLib will load and register all Content assets
    // from the bundle, as if it was loaded automatically.
    //
    // Defaults to false.
    loadContents: true
);

IEnumerator OnBundleLoaded(AssetBundle bundle) {
    Debug.Log("My bundle was loaded!");
    
    // Do some more (asynchronous) setup logic,
    // or, if loadContents is false, load and register your content.
    
    yield break;
}
```
