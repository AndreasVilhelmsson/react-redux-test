import { SHOW_ALL_CUSTOMERS } from "./customer.actions";
import { deleteCustomerList } from "./customer.utils";

const INITIAL_STATE = {
  customer: []
};

const CustomerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_ALL_CUSTOMERS:
      return {
        ...state,
        customer: action.payload
      };
    default:
      return state;
  }
};
export default CustomerReducer;
