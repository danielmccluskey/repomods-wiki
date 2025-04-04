# Overview of REPOLib

REPOLib is a widely used library for adding content to R.E.P.O.

## Features

- **Registering network prefabs.**
- **Registering valuables.**
- **Registering items.**
- **Registering enemies.**
- ResourcesHelper to help get network prefab IDs.
- Method to spawn network prefabs. (Which works in both multiplayer and singleplayer)
- Methods to get valuables and spawn valuables.
- Methods to get items and spawn items.
- Methods to get enemies and spawn enemies.
- Registering custom chat /commands
    - Built-in dev mode commands: `Spawn Valuable`, `Spawn Item`, `Spawn Enemy`
- **Fixing audio mixer groups.**
- Making networked events.
- **Registering features without code using the [REPOLib-Sdk](./sdk/start).**

## Usage

There are two main ways to use REPOLib:

- [**Via the C# API.**](./api/start.md) The most flexible, but requires coding.
- [**Via the Unity Editor.**](./sdk/start.md) Does not require coding, but is less flexible.

Which method to choose depends on your experience level and project scope. For new modders and smaller projects, the Unity workflow is recommended.
