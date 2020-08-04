import {setCurrentTrack, pause, play} from "./player"
import {getAlarmStatus, setVacuumCommand, setLightState, setWindowsState} from "./microcontroller"
import axios from "axios/index";

const URL = process.env.REACT_APP_HOME_API

export default function fetchSystemState() {
    return async dispatch => {
        try {
            const res = await axios.get(`${URL}/logs/state`)
            const {rooms, windows, vacuum, alarm, player} = res.data
            dispatch(setLightState(rooms))
            dispatch(setWindowsState(windows))
            dispatch(getAlarmStatus(alarm))
            dispatch(setVacuumCommand(vacuum.lastCommand))
            dispatch(setCurrentTrack(player.currentTrack))
            if(player.pause) {
                dispatch(pause())
            } else {
                dispatch(play())
            }
        } catch (e) {
            console.error('Error: ', e)
        }

    }
}
