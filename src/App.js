import {NewUserInfo} from './container/NewUserInfo';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Index} from './views';
import React from 'react';
import {UserLoginConnect} from "./container/UserLoginConnect";
import {PasswordModify} from "./views/passwordModify";
import {ActivityDetail} from './views/activityDetail';


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
              <Route path="/password_modify" component={PasswordModify} >
              <PasswordModify />
              </Route>
              {/*TODO 目前api用的活动名*/}
              <Route path="/detail/:id" component={ActivityDetail} >
                  <ActivityDetail />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
