import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homePage/homepage.components.jsx";
import ContractListPage from "./pages/contractListPage/contractlistpage.components.jsx";
import CustomerListPage from "./pages/customerlistpage/customerlistpage.components.jsx";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { showAllCustomers } from "./redux/customers/customer.actions";
import { showContracts } from "./redux/contracts/contracts.actions";

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/contracts/' component={ContractListPage} />
        <Route exact path='/customer' component={CustomerListPage} />
      </Switch>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    list: state
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      showContracts: showContracts,
      showAllCustomers: showAllCustomers
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
