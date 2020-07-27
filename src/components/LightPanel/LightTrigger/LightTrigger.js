import React from 'react'
import classes from './LightTrigger.module.css'

 const LightTrigger = props => {

    return (
        <div className={classes.LightTrigger}>
            <div className="switch right-align">
                <span className={classes.RoomName}>{props.room.name} </span>
            <label>
                Off
                <input
                    type="checkbox"
                    checked={props.room.enabled}
                    value={props.room.enabled}
                    onChange={props.onChange}
                />
                <span className="lever"></span>
                On
            </label>

            </div>
        </div>
    )
}

export default LightTrigger
