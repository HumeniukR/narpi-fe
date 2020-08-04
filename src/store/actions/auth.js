import axios from 'axios'
import {AUTH_LOGOUT, AUTH_SUCCESS, AUTH_FAILED} from './actionTypes';
import {addMessage} from './message'

const URL = process.env.REACT_APP_HOME_API

export function login(email, password) {
    return async dispatch => {
        try {
            const response = await axios.post(`${URL}/auth/login`, {email, password})
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('refreshToken', response.data.refreshToken)
            dispatch(authSuccess(response.data.token))
        } catch (e) {
            dispatch(addMessage(`Wrong email or password`, 'error'))
            dispatch(authFailde())
        }

    }
}

export function authSuccess(token) {
    return {
        type: AUTH_SUCCESS,
        token
    }
}

export function authFailde() {
    return {
        type: AUTH_FAILED
    }
}

export function logout() {
    return dispatch => {
        axios.delete(`${URL}/auth/logout`, {token: localStorage.getItem('refreshToken')})
        dispatch(authLogut())
    }
}

export function authLogut() {
    localStorage.removeItem('token')
    localStorage.removeItem('refreshToken')
    return {
        type: AUTH_LOGOUT
    }
}



