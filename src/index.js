import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { showContracts } from "./redux/contracts/contracts.actions";
import { showAllCustomers } from "./redux/customers/customer.actions";

store.dispatch(showContracts());
store.dispatch(showAllCustomers());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// STORE -> GLOBALIZED STATE

// ACTION DESCRIBE WHAT YOU ARE GOING TO DO
// action is a function that returns an object

// REDUCER DESCRIBE HOW THE ACTIONS TRANSFORM FROM ONE STATE TO ANOTHER STATE
// AND WHAT ACTIONS YOU CHANGED

// DISPATCH THIS ACTION TO THE REDUCER

// task one
// set up project using create react app
// set up infra structure of your project
// implement redux setting up redux boilerplate in react
// set upp all pages and implement react router
// set up state and data to store
//
