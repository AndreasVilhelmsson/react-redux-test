import React from "react";
import { connect } from "react-redux";
import ContractReducer from "../../redux/contracts/contract.reducer";
import "./customerlist.styles.scss";
import CustomerCard from "../customercard/customercard";

const CustomerList = props => {
  const contract = props.contracts;
  return props.customers.map(customer => (
    <div>
      <CustomerCard key={customer.id} {...customer} {...contract} />
    </div>
  ));
};

export default CustomerList;
