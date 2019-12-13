import React from "react";
import { NavLink } from "react-router-dom";
import "./headerStyling.css";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      transaction: "",
      state: false
    };
    this.handleLoginStatus = this.handleLoginStatus.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  handleLoginStatus() {
    const session = sessionStorage.getItem("user");
    console.log(session);
    if (session === null) {
      this.setState({
        state: false
      });
      return false;
    }
    this.setState({
      state: true
    });
    return true;
  }

  handleNavigate = () => {
    this.props.history.push("/login");
  };

  onLogout() {
    sessionStorage.clear();
    const session = sessionStorage.getItem("user");
    console.log(session);
    if (session === null) {
      alert("Logged Out!");
      // this.handleNavigate();
      // this.props.history.push("/login");
    }
  }

  render() {
    let loginLogOutButton;
    console.log(sessionStorage.getItem("user") != null);
    if (sessionStorage.getItem("user") != null) {
      loginLogOutButton = (
        <React.Fragment>
          <ul className="navbar-nav">
            <li className="nav-item">
              <button
                className="btn btn-success btn-sm"
                onClick={this.onLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </React.Fragment>
      );
    } else if (sessionStorage.getItem("user") === null) {
      loginLogOutButton = (
        <React.Fragment>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to="/login"
              exact
              activeStyle={{ color: "Green" }}
            >
              Login
            </NavLink>
          </li>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink className="navbar-brand" to="/">
            SBI
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink
                  className="nav-link"
                  to="/"
                  exact
                  activeStyle={{ color: "Green" }}
                >
                  Home
                </NavLink>
              </li>
              {loginLogOutButton}
            </ul>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Header;
