import React from 'react'
import styles from './Panel.module.css'

const Panel = props => {
    const classes = []
    return (
        <div className={`${styles.Panel}  ${props.isActive ? styles.Active : null}`}>
            <div className={styles.PanelTitle}>
                {props.title}
            </div>
            {props.children}
        </div>
    )
}
export default Panel
