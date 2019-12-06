import { data } from "../../data";

export const SHOW_ALL_CONTRACTS = "SHOW_ALL_CONTRACTS";

/*
 * action creators
 */

export const showContracts = () => dispatch => {
  dispatch({
    type: SHOW_ALL_CONTRACTS,
    payload: data
  });
};
