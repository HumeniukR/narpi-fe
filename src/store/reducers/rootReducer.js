import {combineReducers} from 'redux'
import microcontroller from './microcontroller'
import logBook from './logBook'
import player from './player'

export default combineReducers({
    microcontroller,
    player,
    logBook
})
