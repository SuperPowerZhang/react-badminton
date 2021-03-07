import { NewUserInfo } from "./container/NewUserInfo";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Index } from "./views";
import React, { createContext, useState } from "react";
import { PasswordModify } from "./views/passwordModify";
import { ActivityDetail } from "./views/activityDetail";
import Login from "./views/login";
import User from "./views/user";
import { X } from "./x";

export const MyContext = createContext();

function App() {
  const initState = {
    user_register: {
      username: "ssssss",
      weChat: "",
      password: "",
    },
    user_login: {
      id: "",
      state: false,
      username: "sdfgh",
      password: "",
      token: "",
    },
    user_modify: {
      username: "",
      new_username: "",
      weChat: "",
      password: "",
      new_password: "",
    },
  };
  const [state, setState] = useState(initState);
  const modifyState = (flag,data)=>{
    console.log(flag,data)
    let newFlag={...state[flag],...data}
    console.log(newFlag)
    setState((state) => {
      console.log(flag)
      return { ...state, flag:newFlag };
    });
    console.log(state)
  };
  const data = { state, modifyState };

  return (
    <MyContext.Provider value={data}>
      <Router>
        <Switch>
          <Redirect from="/" to="/all" exact component={Index}>
            <Index />
          </Redirect>
          <Route path="/all" exact component={Index}>
            <Index />
          </Route>
          <Route path="/login" component={Login}>
            <Login />
          </Route>
          <Route path="/x" component={X}>
            <X />
          </Route>
        </Switch>
      </Router>
    </MyContext.Provider>
  );
}
{
  /*<Router>*/
}
{
  /*    <Switch>*/
}

{
  /*        <Route path="/register" component={NewUserInfo} >*/
}
{
  /*            <NewUserInfo />*/
}
{
  /*        </Route>*/
}

{
  /*        <Route path="/my" exact component={User} >*/
}
{
  /*            <User />*/
}
{
  /*        </Route>*/
}
{
  /*        <Route path="/password_modify" component={PasswordModify} >*/
}
{
  /*        <PasswordModify />*/
}
{
  /*        </Route>*/
}
{
  /*        /!*TODO 目前api用的活动名*!/*/
}
{
  /*        <Route path="/:path/:id" component={ActivityDetail} >*/
}
{
  /*            <ActivityDetail />*/
}
{
  /*        </Route>*/
}
{
  /*    </Switch>*/
}
{
  /*</Router>*/
}

export default App;
