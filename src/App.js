import {NewUserInfo} from './container/NewUserInfo';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import {Index} from './views';
import React,{createContext ,useState} from 'react';
import {PasswordModify} from "./views/passwordModify";
import {ActivityDetail} from './views/activityDetail';
import Login from "./views/login";
import User from "./views/user";
import {X} from './x'

export const  MyContext=createContext()

function App() {

  const [state,setState]=useState(0)
  const modifyState=(state)=>{
    setState((state)=>{
     return  state+1;
    })
  }
  const data={state,modifyState}

    return (
        <>
          <MyContext.Provider value={data}>
            <p>{data.state}</p>
            <X/>
          </MyContext.Provider>
            </>
    )}
      {/*<Router>*/}
      {/*    <Switch>*/}
      {/*        <Redirect  from="/" to="/all"  exact component={Index} >*/}
      {/*            <Index/>*/}
      {/*        </Redirect >*/}
      {/*        <Route  path="/all" exact component={Index} >*/}
      {/*            <Index/>*/}
      {/*        </Route >*/}
      {/*        <Route path="/register" component={NewUserInfo} >*/}
      {/*            <NewUserInfo />*/}
      {/*        </Route>*/}
      {/*        <Route path="/login" component={Login} >*/}
      {/*            <Login />*/}
      {/*        </Route>*/}
      {/*        <Route path="/my" exact component={User} >*/}
      {/*            <User />*/}
      {/*        </Route>*/}
      {/*        <Route path="/password_modify" component={PasswordModify} >*/}
      {/*        <PasswordModify />*/}
      {/*        </Route>*/}
      {/*        /!*TODO 目前api用的活动名*!/*/}
      {/*        <Route path="/:path/:id" component={ActivityDetail} >*/}
      {/*            <ActivityDetail />*/}
      {/*        </Route>*/}
      {/*    </Switch>*/}
      {/*</Router>*/}


export default App;
