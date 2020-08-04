import React from 'react';
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Layout from './hoc/Layout/Layout'
import Home from "./containers/Home/Home";
import Auth from "./containers/Auth/Auth";


function App(props){
        return (
            <BrowserRouter>
                <Layout>
                    <Switch>
                        <Route path={'/login'} component={Auth}/>
                        {!props.isLoggedIn && <Redirect to={'/login'}/>}
                        <Route path={'/'} exact component={Home}/>
                        <Route render={() => (<h1>Not found: 404</h1>)}/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        )
}

function mapStateToProps(state) {
    return {
        isLoggedIn: !!state.auth.token
    }
}

export default connect(mapStateToProps)(App);
