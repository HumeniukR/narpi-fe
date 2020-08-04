import React from 'react'
import { connect } from 'react-redux'
import LightPanel from '../../components/LightPanel/LightPanel'
import WindowsPanel from '../../components/WindowsPanel/WindowsPanel'
import MusicPanel from '../../components/MusicPanel/MusicPanel'
import VacuumPanel from '../../components/VacuumPanel/VacuumPanel'
import Logbook from '../../components/Logbook/Logbook'
import styles from './Home.module.css'
import {
    sendSwitchLightCommand,
    setWindow,
    sendWindowPosition,
    sendVacuumCommand
} from "../../store/actions/microcontroller";
import fetchSystemState from "../../store/actions/systemState"

class Home extends React.Component {

    state = {
        activeMobilePanel: 0
    }

    mobileNavButtons = [
        {icon: 'border_all', isActive: true},
        {icon: 'donut_small', isActive: false},
        {icon: 'wb_incandescent', isActive: false},
        {icon: 'play_circle_filled', isActive: false},
        {icon: 'import_contacts', isActive: false}
    ]

    componentDidMount() {
        this.props.fetchSystemState()
    }

    setActivePannel = number => {
        this.mobileNavButtons[this.state.activeMobilePanel].isActive = false
        this.mobileNavButtons[number].isActive = true
        this.setState({activeMobilePanel: number})
    }

    render() {
        return(
            <div className={styles.Home}>
                <div className="row">
                    <div className="col s12 m8 l4">
                        <WindowsPanel
                            onChange={this.props.setWindowPosition}
                            onMouseUp={this.props.sendWindowPosition}
                            windows={this.props.windows}
                            isActive={this.state.activeMobilePanel === 0}
                        />
                    </div>
                    <div className="col s12 m6 l4">
                        <VacuumPanel
                            onClick={this.props.sendVacuumCommand}
                            vacuum={this.props.vacuum}
                            isActive={this.state.activeMobilePanel === 1}
                        />
                    </div>
                    <div className="col s12 m6 l4">
                        <LightPanel
                            onChange={this.props.switchLight}
                            rooms={this.props.rooms}
                            isActive={this.state.activeMobilePanel === 2}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 m6 6l">
                        <MusicPanel isActive={this.state.activeMobilePanel === 3}/>
                    </div>
                    <div className="col s12 m6 6l">
                        <Logbook logs={this.state.logs}
                                 isActive={this.state.activeMobilePanel === 4}
                        />
                    </div>
                </div>
                <div className={styles.MobileNav}>
                    <div className={styles.MobileNavButtons}>
                        {
                            this.mobileNavButtons.map((btn, index) => (
                                <div key={index}
                                     className={btn.isActive ? styles.ActiveMobNavBtn : ""}
                                     onClick={() => {this.setActivePannel(index)}}
                                >
                                    <i className="material-icons">{btn.icon}</i>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const {rooms, windows, vacuum, alarm} = state.microcontroller
    return {
        rooms,
        windows,
        vacuum,
        alarm,
        logs: state.logBook.logs
    }
}

function mapDispatchToProps(dispatch) {
    return {
        switchLight: roomNumber => dispatch(sendSwitchLightCommand(roomNumber)),
        setWindowPosition: (number, percent) => dispatch(setWindow(number, percent)),
        sendWindowPosition: (number, percent) => dispatch(sendWindowPosition(number, percent)),
        sendVacuumCommand: (command) => dispatch(sendVacuumCommand(command)),
        fetchSystemState: () => dispatch(fetchSystemState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
