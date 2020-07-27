import React from 'react'
import styles from './Navbar.module.css'
import M from 'materialize-css';

import Alarm from '../Alarm/Alarm'

export default class Navbar extends React.Component {

    componentDidMount(){
        M.Sidenav.init(this.sidenav);
    }

    render() {
        return (
            <div>
                <nav className={styles.Navbar}>
                    <div className="nav-wrapper">
                        <a href="/" className="brand-logo">NARPi</a>
                        <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i
                            className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <Alarm/>
                            </li>
                            <li><a href="#">Users</a></li>
                            <li><a href="#">Logout</a></li>
                            <li><a href="#">Admin</a></li>
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
                    <li><a href="#">Admin</a></li>
                    <li><a href="#">Logout</a></li>
                    <li><a href="#">Users</a></li>
                </ul>
            </div>
        )
    }
}
