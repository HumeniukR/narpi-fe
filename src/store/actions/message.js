import {ADD_MESSAGE, REMOVE_MESSAGE} from './actionTypes';
import { v4 as uuidv4 } from 'uuid';

export function addMessage(message, messageType) {
    return dispatch => {
        const id = uuidv4()
        dispatch({
            type: ADD_MESSAGE,
            message: {id, text: message, messageType}
        })
        setTimeout(()=> {
            dispatch(removeMessage(id))
        }, 5000)

    }
}

export function removeMessage(id) {
    return {
        type: REMOVE_MESSAGE,
        id
    }
}



