# REPOLib Bundle Loading

::: info NOTE
This page assumes you have a HarmonyX project setup for R.E.P.O. modding.\
If not, first follow the guide in [HarmonyX Project Setup](../../../harmonyx.md).
:::

REPOLib loads bundles under the `BepInEx/plugins` folder that have the `.repobundle` extension, and automatically scans for `Mod` and `Content` assets, which allows for codeless registration of features in tandem with [REPOLib SDK](https://github.com/ZehsTeam/REPOLib-Sdk).

::: info NOTE
If your bundle uses the `.repobundle` extension but does not include any `Mod` or `Content` assets, **it will fail to load.** You can still load your bundle manually by removing the `.repobundle` extension and using the Public `BundleLoader` methods, as detailed below.

For specific examples, look at the corresponding guide pages.
:::

Bundles are loaded asynchronously, which enables other mods to do their initialization while files are being read from disk, which in turn leads to shorter startup times. Hence, using this system is the preferred way to use this library, even if you're already writing your own plugin code.

::: warning
If you're writing a mod that interacts with modded content, remember that all REPOLib content may not be registered by game start because of async bundle loading.

There are a couple ways to work around this:
- Perform your initialization at a later stage (e.g. when joining a lobby).
- Subscribe to the `REPOLib.BundleLoader.OnAllBundlesLoaded` event (this requires a dependency on REPOLib).
:::

If you want more control over the loading of bundles, you can use the public methods from `REPOLib.BundleLoader`:

```C#
private void Awake()
{
    BundleLoader.LoadBundle(
        "/path/to/bundle",
        
        // Callback when the bundle has finished loading,
        // which is guaranteed to happen before the player joins a lobby.
        //
        // This can either be a normal method or a coroutine (by returning IEnumerator).
        OnBundleLoaded,
        
        // If this is true, REPOLib will load and register all Content assets
        // from the bundle, as if it was loaded automatically.
        //
        // Defaults to false.
        loadContents: true
    );
}

IEnumerator OnBundleLoaded(AssetBundle bundle) 
{
    Debug.Log("My bundle was loaded!");
    
    // Do some more (asynchronous) setup logic,
    // or, if loadContents is false, load and register your content.
    
    yield break;
}
```
