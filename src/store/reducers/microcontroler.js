import {
    GET_ALARM_STATUS,
    TOGGLE_ALARM,
    SET_WINDOW,
    SWITCH_LIGHT,
    VACUUM_SEND_COMMAND,
    SET_LIGHT_STATE, SET_WINDOWS_STATE
} from "../actions/actionTypes";

const initialState = {
    rooms: [
        {id: 0, name: "Bedroom 1", enabled: false},
        {id: 1, name: "Bedroom 2", enabled: false},
        {id: 2, name: "Corridor", enabled: false},
        {id: 3, name: "Kitchen", enabled: false},
        {id: 4, name: "Pantry", enabled: false},
        {id: 5, name: "Bath", enabled: false}
    ],
    windows: [
        { id: 0, name: "Bedroom", percent: 0, active: true},
        { id: 1, name: "Kitchen", percent: 10, active: false},
        { id: 2, name: "Corridor", percent: 90, active: false},
        { id: 3, name: "Bath", percent: 50, active: false},
    ],
    vacuum: {
        lastCommand: "none", // clean/charge/forward/left/right/pause/
        status: "ready", // inprogress/done/pause/error
    },
    alarm: {armed: false, activated: false},
}

export default function microcontroller(state = initialState, action) {
    switch (action.type) {
        case SWITCH_LIGHT:
            const rooms = [...state.rooms]
            rooms[action.roomNumber].enabled = !rooms[action.roomNumber].enabled
            return {...state, rooms}
        case SET_WINDOW:
            const windows = [...state.windows]
            windows[action.windowNumber].percent = action.percent
            return {...state, windows}
        case TOGGLE_ALARM:
            const alarm = {...state.alarm}
            alarm.armed = !alarm.armed
            return {...state, alarm}
        case GET_ALARM_STATUS:
            return {...state, alarm: action.alarm}
        case VACUUM_SEND_COMMAND:
           const vacuum = {lastCommand: action.command}
            return {...state, vacuum}
        case SET_LIGHT_STATE:
            return {...state, rooms: action.payload}
        case SET_WINDOWS_STATE:
            return {...state, windows: action.payload}
       default:
            return state
    }
}
