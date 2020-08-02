import {combineReducers} from 'redux'
import microcontroller from './microcontroler'
import logBook from './logBook'
import player from './player'
import auth from './auth'

export default combineReducers({
    microcontroller,
    player,
    logBook,
    auth
})
