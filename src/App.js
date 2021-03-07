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
import User from "./views/user";
import { X } from "./x";
import Login from './views/login'

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
      username: "",
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
  const modifyLogin = (data)=>{
    let newData={...state["user_login"],...data}
    setState((state) => {
      return { ...state, 'user_login':newData };
    });
  };
  const data = { state, modifyLogin };

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
           <Route path="/my" exact component={User} >
             <User />
           </Route>
          <Route path="/x" component={X}>
            <X />
          </Route>
        </Switch>
      </Router>
    </MyContext.Provider>
  )}
  {/*<Route path="/:path/:id" component={ActivityDetail} >*/}
export default App;
