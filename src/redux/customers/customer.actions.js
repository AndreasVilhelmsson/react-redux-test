import { data } from "../../data";

export const SHOW_ALL_CUSTOMERS = "SHOW_ALL_CUSTOMERS";
export const DELETE_CURRENT_CUSTOMER = "DELETE_CURRENT_CUSTOMER";

export const showAllCustomers = () => dispatch => {
  dispatch({
    type: SHOW_ALL_CUSTOMERS,
    payload: data
  });
};

/* export const deleteCurrentCustomer = id => {
  return {
    type: DELETE_CURRENT_CUSTOMER,
    payload: id
  };
}; */
