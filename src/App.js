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
import Login from "./views/login";
import {request} from "./js/request";
import {getTime} from "./js/getTime";

export const MyContext = createContext(null);

function App() {
  const initState = {
    user_register: {
      username: "ssssss",
      weChat: "",
      password: "",
    },
    user_login: {
      id: "222",
      username: "000111222",
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
    all_activities: [],
    my_activities: [],
  };
  const [state, setState] = useState(initState);
  const modifyLogin = (data) => {
    let newData = { ...state["user_login"], ...data };
    setState((state) => {
      return { ...state, user_login: newData };
    });
  };
  const modifyAllAct=(data)=>{
    setState((state) => {
      return { ...state, all_activities: data };
    })

  }
  const  modifyMyAct=(data)=>{
    setState((state) => {
      return { ...state, my_activities: data };
    })
  }

  const checkDuplication = (origin, newItem) => {
    const origin1 = JSON.stringify(origin);
    const newItem1 = JSON.stringify(newItem);
    return origin1.indexOf(newItem1.substring(0, newItem1.length - 1)) === -1;
  };

  const getAllAct=()=>{
    request("/myAPI/api/activity/", "", "GET").then(
        (response) => {
          const { data } = JSON.parse(response);
          data.map((item) => {
            const temp=state["all_activities"]
            if (checkDuplication(temp, item)) {
              const time = getTime(
                  item["activity_start_time"],
                  item["activity_end_time"]
              );
              temp.push( { ...item, time })
              modifyAllAct(temp)
              getMyAct(temp)
            } else {
              console.error("重复了");
            }
          });
        },
        (error) => {
          console.log(error);
        }
    );
  }

  const getMyAct=(newAllAct)=>{
    const allAct=newAllAct?newAllAct:state[" all_activities"]
    const {id,username}=state["user_login"]
    if(id){
      allAct.forEach((item) => {
        item["activities"].forEach((item1)=>{
          const { joiner, activity_number,is_substitution } = item1;
          const  temp=state["my_activities"]
          if (
              joiner === username &&
              checkDuplication(temp,{...item,is_substitution}) &&
              item["is_alive"]
          ) {
            temp.push({...item,is_substitution})
            modifyMyAct( temp);
          }
        })
      });
    }
  }
  React.useEffect(() => {
    getAllAct()
  }, []);
  const data = { state, modifyLogin,modifyAllAct,modifyMyAct };
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
          <Route path="/my" exact component={User}>
            <User />
          </Route>
          <Route path="/:path/:id" component={ActivityDetail}>
            <ActivityDetail />
          </Route>
        </Switch>
      </Router>
    </MyContext.Provider>
  );
}
export default App;
