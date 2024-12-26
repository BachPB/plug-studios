# Configuration Documentation

## Overview

The Kill Message script configuration allows you to customize various aspects of the kill message display and behavior.

## Configuration Options

### UI Settings

| Option         | Type   | Default     | Description                                                          |
| -------------- | ------ | ----------- | -------------------------------------------------------------------- |
| `MessageTime`  | number | `2500`      | How long the kill message is displayed in milliseconds (2.5 seconds) |
| `MessageColor` | string | `"#ff0000"` | The color of the kill message (red)                                  |

### Position Settings

| Option | Type   | Default | Description                                         |
| ------ | ------ | ------- | --------------------------------------------------- |
| `Top`  | string | `"10%"` | Default Y-position from the top of the screen       |
| `left` | string | `"10%"` | Default X-position from the left side of the screen |

### General Settings

| Option    | Type    | Default         | Description                                    |
| --------- | ------- | --------------- | ---------------------------------------------- |
| `Command` | string  | `"editkillmsg"` | The command used to open edit mode             |
| `Debug`   | boolean | `false`         | Enables/disables debug messages in the console |

## Example Configuration

```lua
Config = {}

Config.Settings = {
    UI = {
        MessageTime = 2500,    -- 2.5 seconds display time
        MessageColor = "#ff0000",
        DefaultPosition = {
            Top = "10%",
            left = "10%"
        }
    }
}

Config.General = {
    Command = "editkillmsg",
    Debug = false
}
```

## Usage

1. Copy the example configuration
2. Modify the values according to your needs
3. Save the changes
4. Restart the resource

## Notes

- Position values must include the percentage symbol (%)
- Colors must be in hexadecimal format
- Time is in milliseconds
- Debug mode should be disabled in production
