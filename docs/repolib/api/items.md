# Registering Shop Items with REPOLib

Registering an item:

```c#
private void Awake()
{
    REPOLib.BundleLoader.LoadBundle("your_assetbundle_file_path", assetBundle => 
    {
        var item = assetBundle.LoadAsset<Item>("your_item");
        REPOLib.Modules.Items.RegisterItem(item);
    });
}
```
