import React from 'react'
import Panel from '../Panel/Panel'
import {connect} from 'react-redux'
import styles from './MusicPanel.module.css'

import spectrum from './mspectrum.gif';
import spectrumStatic from './mspectrum-static.jpg';

import config from "../../containers/Home/config";
import {sendPlayerCommand, fetchPlaylist} from "../../store/actions/player";

class MusicPlayer extends React.Component {

    musicItemClasses = [styles.MusicItem, styles.clip]

    state = {
        pause: true,
        currentTrack: 0,
        playList: []
    }

    player = (command) => {
        if(command === 'pause' || command === 'play') {
            this.setState({
                ...this.state,
                pause: !this.state.pause
            })
        }
    }

    selectTrack = (number) => {
        this.setState({
            ...this.state,
            currentTrack: number,
            pause: false
        })
    }

    next = () => {
        this.setState({
            ...this.state,
            currentTrack: this.state.currentTrack + 1
        })
    }

    componentDidMount() {
        //this.setState({ ...this.state, playList: [...config.playList]}) // saved playlist
        this.props.fetchPlaylist()
    }

    render() {
        return (
            <Panel title="Music Player"  isActive={this.props.isActive}>
                <img className={styles.Spectrum} src={this.props.pause ? spectrumStatic : spectrum} alt="spectrum"/>
                <div className={styles.MusicPanel}>
                    <div className={styles.MusicList}>
                        {
                            this.props.playList.map((track, index) => {
                                const isActive = this.props.currentTrack == index
                                const itemClasses = isActive ? [...this.musicItemClasses, styles.ActiveItem] : this.musicItemClasses
                                return (
                                    <div key={track.id}
                                         className={itemClasses.join(' ')}
                                         onClick={() => {this.props.playerSend('play', index)}}
                                    >
                                        <i className={"material-icons left" + (isActive ? ' active' : '')}>
                                            {isActive && ! this.props.pause ? 'pause_circle_outline' : 'play_circle_filled'}
                                        </i>
                                        <span className="title"><strong>#{track.id}. </strong>{track.title}</span>
                                        <br/>
                                        <span>
                                        {track.artist}
                                    </span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className={styles.MusicControls}>
                        <div className={styles.MusicKey}>
                            <a className="waves-effect waves-light btn-small"
                               onClick={() => {this.props.playerSend('prev')}}
                            >
                                <i className="material-icons">skip_previous</i>
                            </a>
                        </div>
                        { this.props.pause
                            ? <div className={styles.MusicKey}>
                                <a className="waves-effect waves-light btn-small"
                                   onClick={() => {this.props.playerSend('play')}}
                                >
                                    <i className="material-icons">play_circle_outline</i>
                                </a>
                            </div>
                            : <div className={styles.MusicKey}>
                                <a className="waves-effect waves-light btn-small"
                                   onClick={() => {this.props.playerSend('pause')}}
                                >
                                    <i className="material-icons">pause_circle_outline</i>
                                </a>
                            </div>
                        }
                        <div className={styles.MusicKey}>
                            <a className="waves-effect waves-light btn-small"
                               onClick={() => {this.props.playerSend('next')}}
                            >
                                <i className="material-icons">skip_next</i>
                            </a>
                        </div>
                    </div>
                </div>
            </Panel>
        )
    }
}

function mapStateToProps(state) {
    const { pause, currentTrack, playList } = state.player
    return { pause, currentTrack, playList }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPlaylist: () => dispatch(fetchPlaylist()),
        playerSend: (command, trackNumber) => dispatch(sendPlayerCommand(command, trackNumber))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer)
