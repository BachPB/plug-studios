# Kill Message Exports

## Overview
This resource provides exports to control and customize kill messages in your FiveM server.

## Client Exports

### Toggle Kill Message
Toggle the visibility of kill messages.

```lua
-- Returns: boolean (new state)
exports['plug-killmsg']:toggleKilledMessage()

-- Example:
local isVisible = exports['plug-killmsg']:toggleKilledMessage()
print('Kill messages are now: ' .. (isVisible and 'visible' or 'hidden'))
```

### Check Message Visibility
Check if kill messages are currently visible.

```lua
-- Returns: boolean
exports['plug-killmsg']:isKilledMessageVisible()

-- Example:
local isVisible = exports['plug-killmsg']:isKilledMessageVisible()
print('Kill messages are: ' .. (isVisible and 'visible' or 'hidden'))
```

## Notes
- All exports are client-side only
- Commands can be customized in the config file
- Debug mode will print additional information to the console
- The editor interface requires NUI focus
