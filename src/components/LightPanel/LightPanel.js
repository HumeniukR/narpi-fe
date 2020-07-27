import React from 'react'
import LightTrigger from './LightTrigger/LightTrigger'
import Panel from '../Panel/Panel'
import styles from './LightPanel.module.css'

export default props => (
   <Panel title="Light Panel"
          isActive={props.isActive}
   >
        <ul className={styles.LightPanel}>
        {
            props.rooms.map((room, index) => {
                return <li key={room.id}>
                    <LightTrigger
                        onChange={() => {props.onChange(index)}}
                        room={room}
                    />
                </li>
            })
        }
        </ul>
   </Panel>
)
