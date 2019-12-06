import React from "react";
import { connect } from "react-redux";
import ContractList from "../../components/contractlist/contractList.component";
import ContractReducer from "../../redux/contracts/contract.reducer";
import "./contractlistpage.styles.scss";

class ContractListPage extends React.Component {
  render() {
    return (
      <div className='contract-container'>
        <span className='contract-title'>
          <h1>Contracts</h1>
        </span>
        <div className='contract-list'>
          <ul className='row'>
            <ContractList {...this.props.contract} />
          </ul>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    contract: state.contract.contract
  };
}

export default connect(mapStateToProps, { ContractReducer })(ContractListPage);
