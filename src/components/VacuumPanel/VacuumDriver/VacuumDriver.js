import React from 'react'
import styles from './VacuumDriver.module.css'

export default props => {
    //forward/left/right/pause/
    const buttons = [
        {command: "forward", ico: 'arrow_upward'},
        {command: "left", ico: 'arrow_back'},
        {command: "pause", ico: 'details'},
        {command: "right", ico: 'arrow_forward'},
        ]
    return (
        <div className={styles.VacuumDriver}>
            {buttons.map(btn =>
                <div key={btn.command} className={styles.CommandKey}>
                    <a className="waves-effect waves-light btn"
                       onClick={() => {props.onClick(btn.command)}}
                    >
                        <i className="material-icons">{btn.ico}</i>
                    </a>
                </div>
            )}
        </div>
    )
}
