import React from 'react'
import styles from './Auth.module.css'

export default class Auth extends React.Component {
    render() {
        return(
            <div className={styles.Auth}>
                <h4>Login page</h4>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate"/>
                                <label htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate"/>
                                <label htmlFor="password">Password</label>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
