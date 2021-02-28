import {NewUserInfo} from './container/NewUserInfo';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {Index} from './views';
import React from 'react';
import {UserLoginConnect} from "./container/UserLoginConnect";
import {PasswordModify} from "./views/passwordModify";
import {ActivityDetail} from './views/activityDetail';
import Login from "./views/login";


function App() {
  return (
      <Router>
          <Switch>
              {/*/重定向到all*/}
              <Redirect  from="/" to="/all"  exact component={Index} >
                  <Index/>
              </Redirect >
              <Route  path="/all" exact component={Index} >
                  <Index/>
              </Route >
              <Route path="/register" component={NewUserInfo} >
                  <NewUserInfo />
              </Route>
              <Route path="/login" component={Login} >
                  <Login />
              </Route>
              <Route path="/my" exact component={UserLoginConnect} >
                  <UserLoginConnect />
              </Route>
              <Route path="/password_modify" component={PasswordModify} >
              <PasswordModify />
              </Route>
              {/*TODO 目前api用的活动名*/}
              <Route path="/:path/:id" component={ActivityDetail} >
                  <ActivityDetail />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
