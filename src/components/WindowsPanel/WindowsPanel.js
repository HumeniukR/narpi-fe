import React from 'react'
import Panel from '../Panel/Panel'
import styles from './WindowsPanel.module.css'

export default props => (
    <Panel title="Windows Panel" isActive={props.isActive}>
        <ul className={styles.WindowsPanel}>
            {
                props.windows.map((window, index) => <li key={window.id}
                                                         className={window.active ? null : styles.NotActive}>
                    <div>
                        {window.name}
                        <strong> ({window.percent}%)</strong>
                    </div>
                    <div className={styles.WindowBlock}>
                        <div className={styles.WindowNumber}>
                            <span>#{window.id}. </span>
                        </div>
                        <div className={styles.WindowControl}>
                            <form action="#">
                                <p className="range-field">
                                    <input
                                        value={window.percent}
                                        type="range"
                                        id="test5"
                                        min="0"
                                        max="100"
                                        onChange={e => props.onChange(index, e.target.value)}
                                        onMouseUp={e => props.onMouseUp(index, e.target.value)}
                                        onTouchEnd={e => props.onMouseUp(index, e.target.value)}
                                    />
                                </p>
                            </form>
                        </div>
                    </div>
                </li>)
            }
        </ul>
    </Panel>
)
