import React from 'react'
import styles from './Auth.module.css'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {withRouter} from 'react-router-dom'
import {login} from "../../store/actions/auth";
import Validator from '../../helpers/inputValidator'

class Auth extends React.Component {

    componentDidMount() {

    }
    state = {
        email: {
            value: '',
            isValid: true,
            validationMessages: []
        },
        password: {
            value: '',
            isValid: true,
            validationMessages: []
        }
    }

    v = new Validator()

    onChangeHandler(input) {
        const state = {...this.state}
        state[input.id].value = input.value
        this.setState(state)
    }

    onBlurHandler(input) {
        const id = input.id
        const state = {...this.state}
        const {isValid, messages} = this.v.validate(id, input.value)
        state[id].isValid = isValid
        state[id].validationMessages = messages
        this.setState(state)
    }

    async loginHandler (){
        if(this.state.email.isValid && this.state.password.isValid) {
            await this.props.login(this.state.email.value, this.state.password.value)
            if(this.props.isLoggedIn) {
                this.props.history.push('/')
            }
        }
    }

    render() {
        return(
            <div className={styles.Auth}>
                <h4>Login page</h4>
                <div className="row">
                    <form className="col s12" onSubmit={e => e.preventDefault()}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate"
                                       onBlur={e => this.onBlurHandler(e.target)}
                                       onChange={e=> this.onChangeHandler(e.target)}
                                />
                                <label htmlFor="email">Email</label>
                                {this.renderValidationErrors(this.state.email.validationMessages)}
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="password" type="password" className="validate"
                                       onBlur={e => this.onBlurHandler(e.target)}
                                       onChange={e=> this.onChangeHandler(e.target)}
                                />
                                <label htmlFor="password">Password</label>
                                {this.renderValidationErrors(this.state.password.validationMessages)}
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <button className="btn waves-effect waves-light"
                                        type="submit"
                                        onClick={() => this.loginHandler()}
                                >
                                    Login
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    renderValidationErrors(errors) {
        return errors.map(error => {
            return (
                <small key={error} className="red-text lighten-3">{error}<br/></small>
            )
        })
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (email, password) => dispatch(login(email, password))
    }
}

function mapStateToProps(store) {
    return {
        isLoggedIn: !!store.auth.token
    }
}

export default compose(
        connect(mapStateToProps, mapDispatchToProps),
        withRouter
    )(Auth)
