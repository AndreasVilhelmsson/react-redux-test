import React from "react";
import "./title.styles.scss";

const Title = ({ title }) => {
  return (
    <div className='title'>
      <h1>{title}</h1>
    </div>
  );
};

export default Title;
