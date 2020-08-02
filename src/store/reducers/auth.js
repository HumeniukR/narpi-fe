import {AUTH_FAILED, AUTH_LOGOUT, AUTH_SUCCESS} from '../actions/actionTypes';

const initialState = {
    token: localStorage.getItem('token')
}


export default function auth(state = initialState, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state, token: action.token
            }
        case AUTH_LOGOUT:
            return {
                ...state, token: null
            }
        case AUTH_FAILED:
            return {
                ...state, token: null
            }
        default:
            return state
    }
}
