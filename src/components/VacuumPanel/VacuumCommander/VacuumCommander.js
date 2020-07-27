import React from 'react'
import styles from './VacuumCommander.module.css'

export default props => {
    const buttons = [
            {name: "Clean", command: "clean", ico: 'donut_small'},
            {name: "Pause", command: "pause", ico: 'pause_circle_outline'},
            {name: "Charge", command: "charge", ico: 'battery_std'}
        ]
    return (
        <div className={styles.VacuumCommander}>
            {buttons.map(btn =>
                <div key={btn.command} className={styles.CommandKey}>
                    <a className="waves-effect waves-light btn-small"
                       onClick={() => {props.onClick(btn.command)}}
                    >
                        <i className="material-icons right">{btn.ico}</i>
                        {btn.name}
                    </a>
                </div>
            )}
        </div>
    )
}
