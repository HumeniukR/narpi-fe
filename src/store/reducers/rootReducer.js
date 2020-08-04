import {combineReducers} from 'redux'
import microcontroller from './microcontroler'
import logBook from './logBook'
import player from './player'
import auth from './auth'
import message from './message'

export default combineReducers({
    microcontroller,
    player,
    logBook,
    auth,
    message
})
