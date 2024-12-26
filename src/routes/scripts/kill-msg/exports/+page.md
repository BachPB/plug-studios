````markdown:routes/kill-msg/exports/+page.md
# Kill Message Exports

This resource provides several exports to customize and control kill messages in your server.

## Client Exports

### Toggle Kill Messages
Toggle the visibility of kill messages for the local player.

```lua
-- Enable or disable kill messages
exports['kill-msg']:ToggleKillMsg(bool)

-- Example:
exports['kill-msg']:ToggleKillMsg(false) -- Disables kill messages
exports['kill-msg']:ToggleKillMsg(true)  -- Enables kill messages
````

### Custom Death Message

Set a custom death message for specific weapons or scenarios.

```lua
-- Set custom death message
exports['kill-msg']:SetCustomDeathMessage(weaponHash, message)

-- Example:
exports['kill-msg']:SetCustomDeathMessage(`WEAPON_PISTOL`, "{killer} eliminated {victim} with style")
```

## Server Exports

### Broadcast Kill Message

Send a custom kill message to all players or specific players.

```lua
-- Broadcast kill message to all players
exports['kill-msg']:BroadcastKillMessage(killer, victim, weapon)

-- Example:
exports['kill-msg']:BroadcastKillMessage(source, targetId, `WEAPON_PISTOL`)
```

### Message Configuration

Configure global message settings.

```lua
-- Set global message format
exports['kill-msg']:SetMessageFormat(format)

-- Example:
exports['kill-msg']:SetMessageFormat("{killer} ☠️ {victim}")
```

## Message Formatting

You can use these placeholders in your custom messages:

- `{killer}` - Name of the killer
- `{victim}` - Name of the victim
- `{weapon}` - Name of the weapon used
- `{distance}` - Distance between killer and victim

## Examples

### Basic Usage

```lua
-- Client side: Disable kill messages temporarily
RegisterCommand('togglekill', function()
    exports['kill-msg']:ToggleKillMsg(false)
    Wait(5000) -- Wait 5 seconds
    exports['kill-msg']:ToggleKillMsg(true)
end)

-- Server side: Custom kill broadcast
RegisterNetEvent('playerKilled')
AddEventHandler('playerKilled', function(killer, victim, weapon)
    exports['kill-msg']:BroadcastKillMessage(killer, victim, weapon)
end)
```

### Advanced Configuration

```lua
-- Set custom messages for specific weapons
exports['kill-msg']:SetCustomDeathMessage(`WEAPON_STUNGUN`, "{killer} shocked {victim}")
exports['kill-msg']:SetCustomDeathMessage(`WEAPON_UNARMED`, "{killer} knocked out {victim}")
```

## Notes

- All exports are available on both client and server sides unless specified
- Custom messages support HTML-style formatting
- Weapon hashes must be valid GTA V weapon hashes
- Distance is automatically calculated when available

```

This markdown file:
1. Describes all available exports
2. Provides code examples
3. Shows formatting options
4. Includes usage examples
5. Has proper syntax highlighting for Lua code blocks
6. Is organized in clear sections

The content will be automatically styled by the Tailwind Typography plugin we set up earlier. You might want to adjust the content based on your actual exports and functionality.
```
