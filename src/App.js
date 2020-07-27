import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import Home from "./containers/Home/Home";
import Auth from "./containers/Auth/Auth";

function App() {
  return (
      <BrowserRouter>
          <Layout>
              <Switch>
                  <Route path={'/login'} component={Auth}/>
                  <Route path={'/'} exact component={Home}/>
              </Switch>
          </Layout>
      </BrowserRouter>
  );
}

export default App;
