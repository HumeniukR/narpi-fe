import {PLAYER_PLAY, PLAYER_PAUSE, PLAYER_SET_CURRENT_TRACK, FETCH_PLAYLIST} from './actionTypes'
import axios from "axios/index";
import {addMessage} from './message'

const URL = process.env.REACT_APP_HOME_API

export function fetchPlaylist() {
    return async dispatch => {
        try {
            const playerRes = await axios.get(`${URL}/player/playlist`)
            dispatch(setPlayList(playerRes.data.playlist))
            dispatch(setCurrentTrack(playerRes.data.currentTrack.id))
        } catch (e) {
            dispatch(addMessage(`Playlist not loaded`, 'error'))
        }
    }
}

export function sendPlayerCommand(command, trackNumber) {
    return async dispatch => {
        if(command === 'play') {
            dispatch(play())
        } else if(command === 'pause') {
            dispatch(pause())
        }
        try {
            const playerRes = await axios.post(`${URL}/player`, {
                command,
                trackId: trackNumber
            })
            dispatch(setCurrentTrack(playerRes.data.id))
        } catch (e) {
            dispatch(addMessage(`Music service is not responding`, 'warning'))
        }
    }
}

export function pause() {
    return {
        type: PLAYER_PAUSE,
        pause: true
    }
}

export function play() {
    return {
        type: PLAYER_PLAY,
        pause: false
    }
}

export function setCurrentTrack(trackNumber) {
    return {
        type: PLAYER_SET_CURRENT_TRACK,
        trackNumber
    }
}

export function setPlayList(playList) {
    return {
        type: FETCH_PLAYLIST,
        playList
    }
}
