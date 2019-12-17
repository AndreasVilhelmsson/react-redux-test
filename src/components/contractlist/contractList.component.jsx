import React from "react";
import "./contractList.styles.scss";
import ContractCard from "../contractcard/contractcard.component";

const ContractList = props =>
  props.contracts
    .sort()
    .map(contract => <ContractCard key={contract.id} {...contract} />);

export default ContractList;
