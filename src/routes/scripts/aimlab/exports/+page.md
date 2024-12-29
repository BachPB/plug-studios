# Aimlab Exports

## Overview
This resource provides exports to control and customize Aimlab in your FiveM server.

## Client Exports

### Open Aimlab UI
Open the Aimlab UI.

```lua
-- Opens the Aimlab UI
exports['plug-aimlab']:openAimlab()

-- Example:
RegisterCommand('aimlab', function()
    exports['plug-aimlab']:openAimlab()
end)
```

### Leave Aimlab
Leave the Aimlab.

```lua
-- Leaves the Aimlab
exports['plug-aimlab']:leaveAimlab()

-- Example:
RegisterCommand('leaveaimlab', function()
    exports['plug-aimlab']:leaveAimlab()
end)
```

## Notes
- All exports are client-side only
- Commands can be customized in the config file

# Aimlab Configuration

## Exports

The following exports are available for external resource integration:

### UI Control

| Export Name | Parameters | Returns | Description                          |
|------------|------------|---------|--------------------------------------|
| `OpenUI`   | None       | None    | Opens the Aimlab interface with NUI focus |

### Training Status

| Export Name                    | Parameters | Returns | Description                               |
|-------------------------------|------------|---------|-------------------------------------------|
| `leaveAimlab`                 | None       | None    | Ends the current training session         |
| `getAimlabTimeLeft`           | None       | number  | Returns remaining time in current session |
| `getAimlabKillCount`          | None       | number  | Returns current kill/target count         |
| `getAimlabTrainingMode`       | None       | string  | Returns current training mode             |
| `getAimlabTrainingDifficulty` | None       | string  | Returns current difficulty setting        |

### Example Usage

```lua

-- Get current training statistics
local timeLeft = exports['plug-aimlab']:getAimlabTimeLeft()
local kills = exports['plug-aimlab']:getAimlabKillCount()
local mode = exports['plug-aimlab']:getAimlabTrainingMode()
local difficulty = exports['plug-aimlab']:getAimlabTrainingDifficulty()

-- End training session
exports['plug-aimlab']:leaveAimlab()
```
