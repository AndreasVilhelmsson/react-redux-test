import React from "react";
import "./contractcard.styles.scss";

const ContractCard = ({ name, id }) => {
  return (
    <li className='cardcontainer'>
      <div className='cardtitle'>
        <b>
          {name} {id}
        </b>
      </div>
      <p>Lorem ipsum</p>
      <p>Lorem ipsum</p>
    </li>
  );
};

export default ContractCard;
