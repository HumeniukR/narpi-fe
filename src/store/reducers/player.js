import {
    PLAYER_PAUSE,
    PLAYER_PLAY,
    PLAYER_SEND_COMMAND,
    FETCH_PLAYLIST, PLAYER_SET_CURRENT_TRACK
} from '../actions/actionTypes'
//import { play, pause, next, prev, fetchPlaylist } from '../actions/player'

const initialState = {
    pause: true,
    currentTrack: 0,
    playList: []
}

const player = (state = initialState, action) => {
    switch (action.type) {
        case PLAYER_PLAY:
            return {
                ...state,
                pause: action.pause
            }
        case PLAYER_PAUSE:
             return {
            ...state,
            pause: action.pause
        }
        case FETCH_PLAYLIST:
            return {
                ...state,
                playList: action.playList
            }
        case PLAYER_SET_CURRENT_TRACK:
            return {
                ...state,
                currentTrack: action.trackNumber
            }
        default:
            return state
    }
}

export default player
