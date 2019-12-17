import {
  SHOW_ALL_CUSTOMERS,
  DELETE_CURRENT_CUSTOMER
} from "./customer.actions";

import { deleteCustomerList } from "./customer.utils";

const INITIAL_STATE = {
  customer: [],
  id: []
};

const CustomerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_ALL_CUSTOMERS:
      return {
        ...state,
        customer: action.payload
      };
    case DELETE_CURRENT_CUSTOMER:
      return {
        ...state,
        state: state.customer.customers.filter(
          customer => customer.id !== action.id
        )
      };

    default:
      return state;
  }
};

export default CustomerReducer;
