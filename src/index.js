import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from "redux";
import {user_newModifier} from "./reducer/userModify";


const initState={
    user_register:{
        username:'',
        weChat:'',
        password:'',
    },
    user_login:{
        id:'',
        state:false,
        username:'',
        password:'',
        token: ""
    },
    user_modify:{
        username:'',
        new_username:'',
        weChat:'',
        password:'',
        new_password:''
    }
};
export const {Provider,Consumer}=React.createContext(null);


ReactDOM.render(
  <React.StrictMode>
          <App />
  </React.StrictMode>,
  document.getElementById('root')
);

