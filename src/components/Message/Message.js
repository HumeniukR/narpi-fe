import React from 'react'
import { connect } from 'react-redux'
import styles from './message.module.css'
import {removeMessage} from "../../store/actions/message";

function Message(props){
    return (
        <div className={styles.container}>
            {props.messages.map(message => {
                return <div key={message.id} className={[styles.message, styles[message.messageType]].join(' ')}>
                    {message.text}
                    <div className={styles.close} onClick={() => props.close(message.id)}>
                        <i className="tiny material-icons">close</i>
                    </div>
                </div>
            })}
        </div>
    )
}

function mapStateToProps(state) {
    return {messages: state.message.messages}
}

function mapDispatchToProps(dispatch) {
    return {
        close: id => dispatch(removeMessage(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Message)
