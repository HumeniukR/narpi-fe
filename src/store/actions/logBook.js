import axios from 'axios'
import {FETCH_LOGS_ERROR, FETCH_LOGS_START, FETCH_LOGS_SUCCESS} from "./actionTypes";
import {addMessage} from "./message";

const URL = process.env.REACT_APP_HOME_API

export function fetchLogs() {
    return async dispatch => {
        dispatch(fetchLogsStart())
        try {
            const res = await axios.get(`${URL}/logs`)
            dispatch(fetchLogsSuccess(res.data))
        } catch (e) {
            dispatch(addMessage(`Logs are not loaded`, 'error'))
            dispatch(fetchLogsError(e))
        }

    }
}

export function fetchLogsStart() {
    return {
        type: FETCH_LOGS_START
    }
}

export function fetchLogsSuccess(logs) {
    return {
        type: FETCH_LOGS_SUCCESS,
        logs
    }
}

export function fetchLogsError(e) {
    return {
        type: FETCH_LOGS_ERROR,
        error: e
    }
}
