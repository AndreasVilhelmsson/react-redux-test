import React from "react";
import ContractReducer from "../../redux/contracts/contract.reducer";
import CustomerReducer from "../../redux/customers/customer.reducer";
import { connect } from "react-redux";
/* import { deleteCurrentCustomer } from "../../redux/customers/customer.actions"; */
import CustomerContractCard from "../customercontractcard/customercontractcard.component";
import "./customercard.styles.scss";

class CustomerCard extends React.Component {
  render() {
    const { id, name } = this.props;
    return (
      <div className='customer-cardcontainer'>
        <table>
          <thead>
            <tr>
              <th>
                <b>
                  {name} {id}
                </b>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button onClick={/* () => this.props.customer(id) */ ""}>
                  delete
                </button>
              </td>
            </tr>
            {this.props.contract.contracts
              .filter(contracts => contracts.customerId === id)
              .map(contract => (
                <CustomerContractCard {...contract} key={contract.id} />
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contract: state.contract.contract
  };
}

// binds on `props` change
/* const mapDispatchToProps = (dispatch, id) => {
  console.log(typeof customer);
  return {
    customer: () => dispatch(deleteCurrentCustomer(id))
  };
}; */

/* const mapDispatchToProps = dispatch => {
  return {
    customer: id => dispatch(deleteCurrentCustomer(id))
  };
}; */

export default connect(
  mapStateToProps,
  /* mapDispatchToProps, */ {
    ContractReducer,
    CustomerReducer
  }
)(CustomerCard);
