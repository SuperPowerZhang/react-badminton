import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from "redux";
import {user_newModifier} from "./reducer/userModify";
import {Provider} from "react-redux";

const store=createStore(user_newModifier)
console.log(store.getState())
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

