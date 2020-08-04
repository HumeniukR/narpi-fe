import React, {Component} from 'react'
import classes from './Alarm.module.css'
import {connect} from 'react-redux'
import {sendAlarmCommand, fetchAlarmStatus} from "../../store/actions/microcontroller";

class Alarm extends Component {
    alarmClasses = `switch ${classes.Alarm}`

    render() {
        return(
                <div className={this.alarmClasses}>
                    <label className={classes.danger}>
                        <strong>Alarm</strong>
                        <input type="checkbox"
                               checked={this.props.alarm.armed}
                               value={!this.props.alarm.armed}
                               onChange={e => this.props.sendAlarmCommand(e.target.value)}
                        />
                        <span className="lever"></span>
                    </label>
            </div>
        )
    }
}

function mapStateToProps(state){
    return { alarm: state.microcontroller.alarm }
}

function mapDispatchToProps(dispatch) {
    return {
        sendAlarmCommand: (value) => dispatch(sendAlarmCommand(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Alarm)
