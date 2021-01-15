import {NewUserInfo} from './container/NewUserInfo'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Index} from './View'
import React from 'react'
import {UserLoginConnect} from "./container/UserLoginConnect";

function App() {
  return (
      <Router>
          <Switch>
              <Route  path="/" exact component={Index} >
                  <Index/>
              </Route >
              <Route path="/register" component={NewUserInfo} >
                  <NewUserInfo />
              </Route>
              <Route path="/login" component={UserLoginConnect} >
                  <UserLoginConnect />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
