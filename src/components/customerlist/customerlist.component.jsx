import React from "react";
import "./customerlist.styles.scss";
import CustomerCard from "../customercard/customercard.component.js";

const CustomerList = props => {
  console.log(props);
  return props.customer.customers.map(customer => (
    <div>
      <CustomerCard key={customer.id} {...customer} />
    </div>
  ));
};
export default CustomerList;
