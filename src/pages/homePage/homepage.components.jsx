import React, { Component } from "react";
import Title from "../../components/title/title.components.jsx";
import { Link } from "react-router-dom";
import "./homepage.styles.scss";

export default class HomePage extends Component {
  render() {
    return (
      <div className='header'>
        <Title title={"The Contract Automation Platform"} />
        <nav className='options'>
          <ul>
            <li>
              <Link className='option' to='/contracts'>
                <h2>Contracts</h2>
              </Link>
            </li>
            <li>
              <Link className='option' to='/customer'>
                <h2>Customer</h2>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
