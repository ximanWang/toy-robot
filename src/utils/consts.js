export const DIRECTION = {
    NORTH: 'NORTH',
    SOUTH: 'SOUTH',
    EAST: 'EAST',
    WEST: 'WEST',
}

export const ROATATE = {
    LEFT: 'LEFT',
    RIGHT: 'RIGHT'
}

export const Exception = {
    InvalidDirectionError: 'Invalid direction error',
    InvalidLocationError: 'Invalid location error',
}

export const COMMAND = {
    PLACE: "PLACE",
    MOVE: "MOVE",
    LEFT: "LEFT",
    RIGHT: "RIGHT",
    REPORT: "REPORT"
}

export const PLACE_COMMAND_REPLACEMENTS = {
    XIndex: '{X}',
    YIndex: '{Y}',
    Direction: '{F}',
}

export const COMMAND_TEMPALTE = {
    MOVE: 'MOVE',
    LEFT: 'LEFT',
    RIGHT: 'RIGHT',
    REPORT: 'REPORT',
    PLACE: 'PLACE {X},{Y},{F}',
}