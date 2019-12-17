import React from "react";
import { connect } from "react-redux";
import CustomerReducer from "../../redux/customers/customer.reducer";
import "./customerlistpage.styles.scss";
import CustomerList from "../../components/customerlist/customerlist.component";

class CustomerListPage extends React.Component {
  render() {
    return (
      <div className='contract-container'>
        <span className='contract-title'>
          <h1>Customer</h1>
        </span>
        <div className='contract-list'>
          <ul className='row'>
            <CustomerList {...this.props} key={this.props.customer.id} />
          </ul>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    customer: state.customer.customer
  };
}
export default connect(mapStateToProps, { CustomerReducer })(CustomerListPage);
