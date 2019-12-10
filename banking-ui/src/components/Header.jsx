import React from "react";
import { NavLink } from "react-router-dom";
import "./headerStyling.css";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      transaction: ""
    };
  }

  render() {
    return (
      <React.Fragment>
        {/* <nav className="nav nav-pills bg-dark">
          <div id="headerNav" className="container">
            <ul className="nav navar-nav" style={{ color: "white" }}>
              <li>
                <span className="h4" style={{ color: "white" }}>
                  SBI
                </span>
              </li>
              <li>
                <Link to="/" style={{ color: active ? "black" : "grey" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li style={{ display: this.props.cName ? "block" : "none" }}>
                {this.props.cName}
              </li>
            </ul> */}
        {/* </div>
        </nav> */}

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to="/">SBI</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/" exact activeStyle={{ color: "Green" }}>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login" exact activeStyle={{ color: "Green" }}>Login</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
