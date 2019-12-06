import { combineReducers } from "redux";
import CustomerReducer from "./customers/customer.reducer";
import ContractReducer from "./contracts/contract.reducer";

export default combineReducers({
  customer: CustomerReducer,
  contract: ContractReducer
});
