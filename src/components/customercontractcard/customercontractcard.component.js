import React from "react";

const CustomerContractCard = ({ name, id }) => {
  return (
    <tr>
      <td>
        {name} {id}
      </td>
    </tr>
  );
};

export default CustomerContractCard;
