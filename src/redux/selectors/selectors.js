//import { createSelector } from 'reselect';

//Contract Selector
//const getContracts = state => state.contracts;

//recelect Selector
/*export const getContractsOwner = createSelector(
    getContracts, 
    contracts => contracts.filter(contract => contract.customerId)
)*/

/* selectors
export const getContracts = state => {
  return state.contracts.filter(contract => contract.customerId);
};

// contractContainer.js

const mapStateToProps = state => {
  return {
    contractOwner: getContracts(state)
  };
};*/
