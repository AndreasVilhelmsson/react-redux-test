import React from "react";
import ContractReducer from "../../redux/contracts/contract.reducer";
import { connect } from "react-redux";
import ContractCard from "../contractcard/contractCard.component";
import "./customercard.styles.scss";

class CustomerCard extends React.Component {
  render() {
    return (
      <div>
        <li className='cardcontainer'>
          <div className='cardtitle'>
            <b>
              {this.props.name} {this.props.id}
            </b>
          </div>
        </li>
        <li className='cardcontainer'>
          <div className='cardtitle'>
            {this.props.contract.contracts
              .filter(contracts => contracts.customerId === this.props.id)
              .map(contract => (
                <ContractCard {...contract} />
              ))}
          </div>
        </li>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    contract: state.contract.contract
  };
}

export default connect(mapStateToProps, { ContractReducer })(CustomerCard);
