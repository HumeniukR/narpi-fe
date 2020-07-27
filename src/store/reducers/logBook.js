import {FETCH_LOGS_ERROR, FETCH_LOGS_START, FETCH_LOGS_SUCCESS} from "../actions/actionTypes";

const initialState = {
    logs: [],
    isFetching: false,
    error: null
}

export default function logBook(state = initialState, action) {
    switch (action.type) {
        case FETCH_LOGS_START:
            return {
                ...state, isFetching: true
            }
        case FETCH_LOGS_SUCCESS:
            return {
                ...state, isFetching: false, logs: action.logs
            }
        case FETCH_LOGS_ERROR:
            return {
                ...state, isFetching: false, error: action.error
            }
        default:
            return state
    }
}
