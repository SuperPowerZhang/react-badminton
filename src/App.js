import {NewUserInfo} from './container/NewUserInfo'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Index} from './View'
import React from 'react'
import {UserLoginConnect} from "./container/UserLoginConnect";

function App() {
  // function  get(url,args,option) {
  //   return new Promise(function(resolve,reject){
  //     let req=new XMLHttpRequest()
  //     console.log(url)
  //
  //
  //     if(option){
  //       console.log('设置')
  //       req.setRequestHeader("WWW-Authenticate", `JWT realm=\"api\"`)
  //     }
  //
  //     req.onerror=function () {
  //       reject(Error("Network Error"))
  //     }
  //     console.log(JSON.stringify(args))
  //
  //   })
  // }

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
