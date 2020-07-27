import React from 'react'
import Panel from '../Panel/Panel'
import VacuumCommander from './VacuumCommander/VacuumCommander'
import VacuumDriver from './VacuumDriver/VacuumDriver'
import styles from './VacuumPanel.module.css'

export default class VacuumPanel extends React.Component {

    state = {
        mode : 'commands'
    }

    render() {
        const changeMode = mode => {
            this.setState({mode: mode})
        }

        return (
            <Panel title="Vacuum Panel"  isActive={this.props.isActive}>
                <div className={styles.VacuumCommand}>
                    Command: <strong>{this.props.vacuum.lastCommand}</strong>
                </div>
                <div className={styles.VacuumMode}>
                    <div>Mode: </div>
                    <form action="#"
                          onChange={e => {changeMode(e.target.value)}}
                    >
                        <span className={styles.Radio}>
                            <label>
                                <input  name="group1" type="radio" value="commands" defaultChecked/>
                                <span>Commands</span>
                            </label>
                        </span>
                        <span className={styles.Radio}>
                            <label>
                                <input name="group1" type="radio" value="drive"/>
                                <span>Drive</span>
                            </label>
                        </span>
                    </form>
                </div>
                {this.state.mode === 'commands'
                    ?<VacuumCommander onClick={this.props.onClick}/>
                    :<VacuumDriver onClick={this.props.onClick}/>
                }
            </Panel>
        )

    }
}
