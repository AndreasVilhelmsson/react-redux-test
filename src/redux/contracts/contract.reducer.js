import { SHOW_ALL_CONTRACTS } from "./contracts.actions";

const INITIAL_STATE = {
  contracts: []
};

const ContractReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_ALL_CONTRACTS:
      return {
        ...state,
        contract: action.payload
      };
    default:
      return state;
  }
};

export default ContractReducer;
