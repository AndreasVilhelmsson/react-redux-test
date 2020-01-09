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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
