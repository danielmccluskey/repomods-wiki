



# Module Prefabs

A level consists of a number of prefabs called modules. Each module must follow a specific structure and include various components to function properly.

## Doors and Rooms

### Room Size

Every module is 3x3 units, going from `-7.5` to `+7.5` in both the x and z axes. The y-axis however can (theoretically) be endlessly large.

- **Top** is    X = 0      | Y = 0  | Z = 7.5
- **Left** is   X = -7.5 |  Y = 0 |   Z = 0
- **Bot** is    X = 0      | Y = 0  | Z = -7.5
- **Right** is X = 7.5   | Y = 0  | Z = 0

### Door Locations

- For Starter room, the door is always at X = 0 | Y = 0 | Z = 0

- For Dead End, always has the door at X = 0 | Y = 0 | Z = -7.5.

- For Extractor, always has the door at X = 0 | Y = 0 | Z = -7.5.

- Normal has doors on all 4 and requires Module Switch Objects. Module Switches are the Parent and contain a "Connected" and a "Not Connected" Object. The Not Connected just shows a wall in the blue Square if you look at the top "image". The Connected however contains the actual Door. As far as i know it is just a random generator so that you can throw in a normal and depending on how the level is structured specific sides open up [Connected gets enabled, Not Connected gets disabled]. Each side, Top, Left, Bot, Right, has a Module Switch. The Module Switches for each Side is located in: Top (Z = 7.5), Left (X = -7.5), Bot (Z = -7.5), Right (X = 7.5). Those coords are for the Module Object. The doors itself have to be placed in a different position. For Top (X = 2.5), Left (Z = 2.5), Bot (X = -2.5), Right (Z = -2.5).

Module Switches are usually located at  --- Dependencies --- and can be used for (almost) all Modules iirc to generate extra different looks in the room. For example look at Module: "Wizard E 3 - Sludge Pits". The Extraction Module top side can have paintings or instead have glass windows.

5. Passage always has 2 Doors, one at Z = -7.5 and the other at Z = 7.5.

## Level Path Points

### External & Internal Explained

There are 2 Parent Path Point Objects. One is External (Yellow) and the other is Internal (Green). Both are located in the Level Path Points Object which is located in the  ---- Dependencies ---- Object. The difference is usually that External is used at the doors and Internal for the room in between the External points.

The Level Path Points however are just for the enemys AI to have a path to walk through. External is as said always at doors making it possible to travel from one room to another. The Externals in a module are either connected to a Internal or External, usually not more than 1 connection.

The Internal allows a precise walk for the AI from one External to another. They can be connected with multiple Internals or multiple Externals. Usually has at least 2 Connections

Internals are a possible Stop Point for Enemys, meaning they can stop at this position. If you don't want that like in a Passage Module, you can just connect one External to the other.

To get a better understanding how those are structured take a look at the Module: "Manor - P - 3 - Tower", which is prolly the best example on how you use Internal. 

Also you might see some Maps that don't feature Level Points in the Internal (Green) Object. Sometimes they are there, just not inside that object. Don't ask why, bad development/structure from dev i guess?

### External & Internal Positions

We talk about Level Points only being inside the External & Internal Object, not those that are outside for whatever reason.

The Externals are usually the following:
1. Top is at     X = 0   | Y = 0 | Z = 5
2. Left is at   X = -5 | Y = 0 | Z = 0
3. Bot is at    X = 0   | Y = 0 | Z = -5
4. Right is at X = 5   | Y = 0 | Z = 0

You might ask: "Sky, i saw Points that had for Right X = 6, why?" i guess same with why Internal Points are not inside the Internal object, bad structure... next.

The Internals are usually placed that it makes sense. Just imagine a Line that goes from one to another that you set in the connection and make sure it always avoiding the monster from running into a hole.

::: warning
A Extractor Module does not require both Internal and External. If it doesn't feature External it's basically a safe zone where the enemy will not step in as long as it doesn't follow the player. You could use that for Designing Areas that are safe but only for Extractor and Dead End Modules.
:::

 <@149309371246051328> worked on a tool that displays the line to show if everything is correctly done. You can see his post down below.

## Room Volumes

### Volumes Explained

Used to manage how loud the sound is played  and how the echo is handled and necessary so the Room appears properly on the map. You usually have in --- Dependencies --- a Room Volumes Object which is the parent. This contains another object that counts as the "Main" Collider for the Volume. You can have multiple of those Mains that each have different Volume settings. Each of those contain a Room Volume script and usually have colliders set as well.

To keep it a bit more clean, instead of adding a lot of Colliders in it, you can have childrens for the Main Collider Objects and each could have 1 Collider. As an example, here you have the structure how it could look like:
Dependencies
-> Room Volumes
--> Main Volume 1
---> Collider Extra 1
---> Collider Extra 2
--> Main Volume 2
---> Collider Extra 1

"IsTrigger" should always be enabled for all Colliders and they should be placed so it doesn't go outside of the 3x3 area. Make sure Colliders are touching each other inside the Volumes or the Room does not appear properly on map / parts can be split from the rest of the room otherwise.

### Reverb and Ambience

The Ambience adjust the Volume of how loud the Ambience should place inside the area.

The Reverb effects all sounds that play and is meant to change how big the echo is.

## Valuables

### Valuable Switches Structure

Similar behaviour like Module Switches. It's usually located in the ---- Dependencies ---- object and can contain multiple Switches. The Structure could look like this:

---- Dependencies ----
- Valuable Switch
-- Big Switch 1
--- Valuable
--- Prop
-- Big Switch 2
-- Tiny Switch
-- Small Switch

For your own good just call those Objects inside Valuable Switch like the Valuable that you want to place in it.

### Valuable Switches Example

Lets take a look at Big Switch 1. First of, this object needs a "Valuable Prop Switch" and needs to be connected to his child's, Valuable & Prop Object. Those both Objects do not have any scripts, they just contain objects.

The Valuable contains the "Valuable Volume - Big" Object that has the Valuable Volume Script which is set to Volume Type: "Big".

Inside the Prop Object to put in every Object you want to be there.

After setting all up, the room is now being randomized, meaning that either the Valuable is active or the Prop Object is enabled. It's like Module Switch just with Connected and Not Connected.

You can use it for every Valuable that you want from small to tall. Valuable Switches can be used in every Module, including the Start Room.

### Valuables in General

Valuables are simply placed by having an Object called "Valuable Volume - [Type]" and it needs a Script on it called: "Valuable Volume", where you insert the Volume Type you want, for example "Tiny".

As previously mentioned, those Objects are also contained inside the Switches in the Valuable Switch, which is an extra randomizer.

However, just because you placed an Valuable Volume inside the level doesn't mean an item spawns at that location. Just like the Switches, those are also random. Anyway, you can place those Valuable Volume - Big for example in every Module, including the Start Room.

Usually you have an "Valuables" Object in ---- Dependencies ----  that contains all valuables.

## Bigger Rooms Than 3x3

### Problem
Current Problem of the size of Modules is that there is no library / Rule or structure to keep it consistent for everybody. Surely you could implement it yourself but it would be good if there is a set rule so no compatibility issues come up with other maps

### Maybe a Solution?

I was testing around by adding the float "ModuleSize" into the Scriptable Object of Levels. There, the normal amount would be set to ModuleSize = 3f.
After that, we go to the LevelGenerator Script and go to the Enumerator "Generate".  There we have the following:

`269    Level = RunManager.instance.levelCurrent;
270    RunManager.instance.levelPrevious = Level;
271     if (GameManager.instance.gameMode == 0 || ...)
272    {
273     ModuleWidth = Level.ModuleSize;
`

After the if we want to overwrite ModuleWidth with ModuleSize, that we defined in our ScriptableObject level, before starting to generate the level.
When we input 3f for ModuleSize, we have 3f*5f = 15f. The 5 comes from Tilesize which should not be touched bc it's the size of the grid or sth. idk shouldn't matter.

However, those 15f can be split in half and we get 7.5, which when we remember back at the Door topic, those are the locations the doors have to be set at. Increasing ModuleSize to 4 would than result in 4x4 with 20f, split in half 10. With 5 we have 5x5 with 25f, split in half 12.5 etc.

### Sum up

That's basically all from what i know. We "just" need someone to implement the rule and changes, so that the ScriptableObject Level contains ModuleSize and that the ModuleWidth inside the Enumerator in the LevelGenerator Script gets overridden by Level.ModuleSize.

That way we can have Levels with different Sizes for the Modules, at least in Theory. I'm not a programmer and not smart, but if we actually just need those 2 lines of code added, would be cool if someone could do that. I guess it would have to be part of REPOLib.
