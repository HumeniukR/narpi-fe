import {GET_ALARM_STATUS, TOGGLE_ALARM, SET_WINDOW, SWITCH_LIGHT, VACUUM_SEND_COMMAND, SET_LIGHT_STATE, SET_WINDOWS_STATE} from "../actions/actionTypes";
import axios from "axios/index";
import {addMessage} from "./message";
const URL = process.env.REACT_APP_HOME_API

export function sendSwitchLightCommand(roomNumber) {
    return async (dispatch, getState) => {
        dispatch(switchLight(roomNumber))
        try {
            await axios.post(`${URL}/controller/light`, {
               command: {
                   ledNumber: roomNumber,
                   enable: getState().microcontroller.rooms[roomNumber].enabled
               }
            })
        } catch (e) {
            dispatch(addMessage(`Can't switch light, microcontroller error`, 'error'))
            console.error('Error: ', e)
        }

    }
}

export function switchLight(roomNumber) {
    return {
        type: SWITCH_LIGHT,
        roomNumber
    }
}

export function sendWindowPosition(windowNumber, percent) {
    return async dispatch => {
        dispatch(setWindow(windowNumber, percent))
        try {
            await axios.post(`${URL}/controller/window`, {
                command: {windowNumber, percent}
            })
        } catch (e) {
            dispatch(addMessage(`Can't control window, microcontroller error`, 'error'))
            console.error('Error: ', e)
        }
    }
}

export function setWindow(windowNumber, percent) {
    return {
        type: SET_WINDOW,
        windowNumber,
        percent
    }
}

export function sendVacuumCommand(command) {
    return async dispatch => {
        dispatch(setVacuumCommand(command))
        try {
            await axios.post(`${URL}/vacuum`, {
                vacuum: { command }
            })
        } catch (e) {
            dispatch(addMessage(`Vacuum service error`, 'error'))
            console.error('Error: ', e)
        }
    }
}

export function setVacuumCommand(command) {
    return {
        type: VACUUM_SEND_COMMAND,
        command
    }
}

export function fetchAlarmStatus() {
    return async dispatch => {
        try {
            const res = await axios.get(`${URL}/controller/alarm`)
            dispatch(getAlarmStatus(res.data))
        } catch (e) {
            console.error('Error: ', e)
        }
    }
}

export function getAlarmStatus(alarm) {
    return {
        type: GET_ALARM_STATUS,
        alarm
    }
}

export function sendAlarmCommand(armed) {
    return async dispatch => {
        dispatch(toggleAlarm())
        try {
            await axios.post(`${URL}/controller/alarm`, {
                armed: armed === 'true'
            })
        } catch (e) {
            dispatch(addMessage(`Alarm error`, 'error'))
            console.error('Error: ', e)
        }
    }
}

export function toggleAlarm() {
    return {
        type: TOGGLE_ALARM
    }
}

export function setLightState(rooms) {
    return {
        type: SET_LIGHT_STATE,
        payload: rooms
    }
}

export function setWindowsState(windows) {
    return {
        type: SET_WINDOWS_STATE,
        payload: windows
    }
}
