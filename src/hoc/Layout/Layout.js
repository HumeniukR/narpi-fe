import React, {Component} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Message from '../../components/Message/Message'
import Footer from '../../components/Footer/Footer'
import styles from './Layout.module.css'

export default class Layout extends Component {
    render() {
        return(
            <div className={styles.Layout}>
                <Navbar/>
                <Message/>
                <main>
                    {this.props.children}
                </main>
                <Footer/>
            </div>
        )
    }
}
