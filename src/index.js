import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from "redux";
import {user_newModifier} from "./reducer/userModify";

ReactDOM.render(
  <React.StrictMode>
          <App />
  </React.StrictMode>,
  document.getElementById('root')
);

