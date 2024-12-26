# Kill Message Configuration

## Overview

This configuration file allows you to customize various aspects of the kill message system, including display settings and commands.

## Configuration Structure

### UI Settings

| Option         | Type   | Default     | Description                                                                       |
| -------------- | ------ | ----------- | --------------------------------------------------------------------------------- |
| `MessageTime`  | number | `2500`      | Duration in milliseconds for how long the kill message is displayed (2.5 seconds) |
| `MessageColor` | string | `"#ff00e0"` | The color of the kill message in hexadecimal format (pink)                        |

### General Settings

| Option            | Type    | Default           | Description                                     |
| ----------------- | ------- | ----------------- | ----------------------------------------------- |
| `EditModeCommand` | string  | `"editkillmsg"`   | Command used to open edit mode                  |
| `ToggleCommand`   | string  | `"togglekillmsg"` | Command used to toggle the kill message display |
| `Debug`           | boolean | `true`            | Enables/disables debug messages in the console  |

## Example Configuration

```lua
Config = {}

Config.Settings = {
    UI = {
        MessageTime = 2500,                 -- How long the kill message is displayed in milliseconds (2.5 seconds)
        MessageColor = "#ff00e0",           -- The color of the kill message (pink)
    },
    General = {
        EditModeCommand = 'editkillmsg',    -- The command used to open edit mode
        ToggleCommand = 'togglekillmsg',    -- The command used to toggle the killed message
        Debug = true                        -- Enables/disables debug messages in the console
    }
}
```

## Usage

1. Copy the example configuration
2. Modify the values according to your needs
3. Save the changes
4. Restart the resource

## Notes

- Time is specified in milliseconds (1000ms = 1 second)
- Colors must be in hexadecimal format (e.g., "#ff00e0")
- Commands should not include the forward slash (/)
- Debug mode should be disabled in production environments
