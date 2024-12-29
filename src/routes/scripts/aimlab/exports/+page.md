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
