import {ADD_MESSAGE, REMOVE_MESSAGE} from "../actions/actionTypes";

const initialState = {
    messages: []
}

export default function message(state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            const messages = [...state.messages]
            messages.push(action.message)
            return { ...state, messages }
        case REMOVE_MESSAGE:
            return { messages: state.messages.filter( m => m.id !== action.id) }
        default:
            return state
    }
}
