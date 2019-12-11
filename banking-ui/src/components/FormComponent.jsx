import React from "react";
import { NavLink } from "react-router-dom";

class LoginComponent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="card text-center">
          <div className="card-header">
            <h4>{this.props.operation}</h4>
          </div>
          <div className="card-body">
            <form className="card-text" onSubmit={this.props.onHandleSubmit}>
              <input
                type="text"
                name="userName"
                placeholder="Enter Username"
                value={this.props.credentials.userName}
                onChange={this.props.onHandleChange}
              />
              <br />
              <br />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={this.props.credentials.password}
                onChange={this.props.onHandleChange}
              />
              <br />
              <br />
              <button className="btn btn-primary">
                {this.props.operation}
              </button>
            </form>
          </div>
          <div
            className="card-footer text-muted"
            style={{ display: !this.props.newUser ? "none" : "block" }}
          >
            <h6>
              Already a member?
              <NavLink
                className="nav-link"
                to="/login"
                exact
                activeStyle={{ color: "Green" }}
              >
                Click here to login
              </NavLink>
            </h6>
          </div>
          <div
            className="card-footer text-muted"
            style={{ display: this.props.newUser ? "none" : "block" }}
          >
            <h6>
              New Customer?
              <NavLink
                className="nav-link"
                to="/register"
                exact
                activeStyle={{ color: "Green" }}
              >
                Click here to register
              </NavLink>
            </h6>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginComponent;