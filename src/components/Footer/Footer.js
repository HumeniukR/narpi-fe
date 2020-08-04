import React from 'react'
import styles from './Footer.module.css'
import rapi from './imgs/rapi.png'
import node from './imgs/node.png'
import react from './imgs/react.png'
import arduino from './imgs/arduino.png'

export default () => {
    const classes = ["page-footer", "blue-grey", "darken-3", styles.Footer]
    return (
        <footer className={classes.join(" ")}>
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Hardware & Stack</h5>
                        <div className="grey-text text-lighten-4">
                            <div className={styles.Logo}>
                                <img src={rapi} alt="rapi"/>
                            </div>
                            <div className={styles.Logo}>
                                <img src={node} alt="node"/>
                            </div>
                            <div className={styles.Logo}>
                                <img src={react} alt="react"/>
                            </div>
                            <div className={styles.Logo}>
                                <img src={arduino} alt="arduino"/>
                            </div>
                        </div>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Libs</h5>
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="#!">ffplay</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">debotapi</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    © 2020 Copyright MIT
                    <a className="grey-text text-lighten-4 right" href="http://linkedin.com/in/roman-humeniuk">Roman H.</a>
                </div>
            </div>
        </footer>
    )
}
