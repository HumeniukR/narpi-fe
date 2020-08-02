import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {NavLink, withRouter}  from 'react-router-dom'
import {login, logout} from "../../store/actions/auth";
import styles from './Navbar.module.css'
import M from 'materialize-css';

import Alarm from '../Alarm/Alarm'

class Navbar extends React.Component {

    componentDidMount(){
        M.Sidenav.init(this.sidenav);
    }

    logoutHandler(e) {
        e.preventDefault()
        this.props.logout()
        this.props.history.push('/login')
    }

    render() {
        return (
            <React.Fragment>
                {this.props.isLoggedIn
                    ? <div>
                        <nav className={styles.Navbar}>
                            <div className="nav-wrapper">
                                <NavLink to="/" className="brand-logo">NARPi</NavLink>
                                <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                                    <i className="material-icons">menu</i>
                                </a>
                                <ul className="right hide-on-med-and-down">
                                    <li>
                                        <Alarm/>
                                    </li>
                                    <li><NavLink to="/user">Admin</NavLink></li>
                                    <li><a href="/login" onClick={e => this.logoutHandler(e)}>Logout</a></li>
                                    <li><NavLink to="/users">Users</NavLink></li>
                                </ul>
                            </div>
                        </nav>

                        <ul className="sidenav"
                            id="mobile-demo"
                            ref={(sidenav) => {this.sidenav = sidenav}}
                        >
                            <li>
                                <Alarm/>
                            </li>
                            <li><NavLink to="/user">Admin</NavLink></li>
                            <li><a href="/login" onClick={e => this.logoutHandler(e)}>Logout</a></li>
                            <li><NavLink to="/users">Users</NavLink></li>
                        </ul>
                    </div>
                    : <nav className={styles.Navbar}><span className="brand-logo">NARPi</span></nav>
                }

            </React.Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        isLoggedIn: !!state.auth.token
    }
}

function mapDispatchToProps(dispatck) {
    return {
        logout: () => dispatck(logout())
    }
}

export default compose (
        connect(mapStateToProps, mapDispatchToProps),
        withRouter
    )(Navbar)
