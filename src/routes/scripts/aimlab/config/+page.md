# Aimlab Configuration

## Overview

This configuration file allows you to customize various aspects of the Aimlab training system, including different training modes, difficulty settings, and spawn locations.

## Configuration Structure

### General Settings

| Option           | Type    | Description                                                |
|-----------------|---------|----------------------------------------------------------|
| `Aimlab`        | string  | Command used to open the Aimlab training interface        |
| `LeaveAimlab`   | string  | Command used to exit the current training session         |
| `AimlabPos`     | vector3 | Coordinates where players spawn when entering Aimlab      |
| `AimlabHeading` | number  | Direction player faces when spawning in Aimlab (0-360)    |
| `ExitPos`       | vector3 | Coordinates where players spawn when leaving Aimlab       |
| `ExitHeading`   | number  | Direction player faces when exiting Aimlab (0-360)        |
| `DefaultBucket` | number  | Default routing bucket ID for normal server interaction   |

### Flick Training Settings

| Option          | Type    | Default | Description                                       |
|----------------|---------|---------|---------------------------------------------------|
| `coords`       | vector4 | -       | Array of target spawn positions with heading      |
| `easyTime`     | number  | 1800    | Time between target spawns in easy mode (ms)     |
| `normalTime`   | number  | 1500    | Time between target spawns in normal mode (ms)   |
| `hardTime`     | number  | 800     | Time between target spawns in hard mode (ms)     |
| `countdownTime`| number  | 5       | Duration of countdown before training starts (sec)|

### Spider Shot Settings

| Option          | Type    | Default | Description                                       |
|----------------|---------|---------|---------------------------------------------------|
| `coords`       | vector3 | -       | Array of target spawn positions                   |
| `easyTime`     | number  | 1800    | Time between target spawns in easy mode (ms)     |
| `normalTime`   | number  | 1500    | Time between target spawns in normal mode (ms)   |
| `hardTime`     | number  | 700     | Time between target spawns in hard mode (ms)     |
| `countdownTime`| number  | 5       | Duration of countdown before training starts (sec)|

#### Spider Shot Prop Models

| Difficulty | Model                | Description                                    |
|-----------|---------------------|------------------------------------------------|
| Easy      | prop_swiss_ball_01  | Large, slow-moving target for easy mode        |
| Normal    | prop_beachball_01   | Medium-sized target for normal mode           |
| Hard      | prop_beach_volball02| Small, fast-moving target for hard mode       |

### Roll Training Settings

| Option          | Type    | Default | Description                                       |
|----------------|---------|---------|---------------------------------------------------|
| `coords`       | vector4 | -       | Array of target spawn positions with heading      |
| `easyTime`     | number  | 1800    | Time between target spawns in easy mode (ms)     |
| `normalTime`   | number  | 1500    | Time between target spawns in normal mode (ms)   |
| `hardTime`     | number  | 800     | Time between target spawns in hard mode (ms)     |
| `countdownTime`| number  | 5       | Duration of countdown before training starts (sec)|

## Example Configuration

```lua
Config = {}

Config.Settings = {
    Commands = {
        Aimlab = "aimlab",         -- Command to open Aimlab interface
        LeaveAimlab = "leaveaimlab" -- Command to exit current training
    },
    AimlabPos = {
        Coords = vec3(4190.4219, -1199.4474, 291.4814), -- Training area spawn point
        Heading = 266.9523                               -- Initial player direction
    },
    ExitPos = {
        Coords = vec3(209.9673, -928.2714, 30.6920),    -- Return point after training
        Heading = 232.0820                               -- Exit direction
    },
    DefaultBucket = 0                                    -- Default server bucket
}

Config.FlickSettings = {
    coords = { -- Spawn points for the ped's
        [1] = vec4(4201.7534, -1190.0702, 291.4820, 93.8582),
        [2] = vec4(4203.2285, -1193.2045, 291.4821, 87.4231),
        [3] = vec4(4203.3643, -1196.2262, 291.4819, 89.2129),
        [4] = vec4(4203.4658, -1199.3434, 291.4818, 89.9610),
        [5] = vec4(4203.5698, -1202.4080, 291.4820, 91.9533),
        [6] = vec4(4203.3062, -1206.3148, 291.4820, 82.8983),
        [7] = vec4(4201.8433, -1209.1890, 291.4818, 67.5827)
    },
    difficulty = {
        easyTime = 1800, -- Easy ped spawn delay between targets
        normalTime = 1500, -- Normal ped spawn delay between targets
        hardTime = 800 -- Hard ped spawn delay between targets
    },
    countdownTime = 5, -- Countdown before training starts (sec)
}

Config.SpiderSettings = {
    coords = { -- Spawn points for the props
        [1] = vec3(4203.436, -1199.702, 294.340),
        [2] = vec3(4204.164, -1204.569, 294.548),
        [3] = vec3(4202.060, -1208.725, 294.154),
        [4] = vec3(4203.382, -1199.625, 292.393),
        [5] = vec3(4203.830, -1195.989, 294.321),
        [6] = vec3(4204.053, -1194.199, 292.438),
        [7] = vec3(4203.523, -1192.023, 294.262),
        [8] = vec3(4202.396, -1189.778, 292.641),
        [9] = vec3(4204.164, -1204.569, 294.548)
    },
    difficulty = {
        easyTime = 1800, -- Easy ped spawn delay between targets
        normalTime = 1500, -- Normal ped spawn delay between targets
        hardTime = 700 -- Hard ped spawn delay between targets
    },
    propModels = {
        easy = "prop_swiss_ball_01", -- Easy prop model
        normal = "prop_beachball_01", -- Normal prop model
        hard = "prop_beach_volball02" -- Hard prop model
    },
    countdownTime = 5,
}

Config.RollSettings = {
    coords = { -- Spawn points for the ped's
        [1] = vec4(4200.9092, -1188.8955, 291.4814, 175.6658),
        [2] = vec4(4200.4824, -1209.4506, 291.4818, 1.5611)
    },
    difficulty = {
        easyTime = 1800,
        normalTime = 1500,
        hardTime = 800
    },
    countdownTime = 5,
}
```

## Usage

1. Copy the example configuration
2. Modify the values according to your needs
3. Save the changes
4. Restart the resource

## Notes

- Time values are specified in milliseconds (1000ms = 1 second)
- Coordinates use FiveM's native vector3/vector4 format
- Vector4 format: x, y, z, heading (heading is in degrees)
- Commands should not include the forward slash (/)
- Each training mode has its own set of coordinates and difficulty settings
- Bucket system is used to isolate players during training sessions
