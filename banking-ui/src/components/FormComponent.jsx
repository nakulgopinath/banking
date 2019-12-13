import React from "react";
import { NavLink } from "react-router-dom";
//Done by Hari Govind
class LoginComponent extends React.Component {
  render() {
    let securityQuestionAndAnswer;
    if (this.props.credentials.isRegister === true) {
      securityQuestionAndAnswer = (
        <React.Fragment>
          <br />
          <br />
          <select
            value={this.props.credentials.securityQuestion}
            onChange={this.props.onHandleChange}
            name="securityQuestion"
          >
            {this.props.credentials.securityQuestions.map(question => (
              <option key={question.value} value={question.value}>
                {question.display}
              </option>
            ))}
          </select>
          <div style={{ fontSize: 12, color: "red" }}>
            {this.props.credentials.securityQuestionsError}
          </div>
          <br />
          <br />
          <input
            type="text"
            name="answer"
            placeholder="Enter Answer"
            value={this.props.credentials.answer}
            onChange={this.props.onHandleChange}
          />
          <div style={{ fontSize: 12, color: "red" }}>
            {this.props.credentials.answerError}
          </div>
        </React.Fragment>
      );
    } else {
      securityQuestionAndAnswer = null;
    }
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
              <div style={{ fontSize: 12, color: "red" }}>
                {this.props.credentials.userNameError}
              </div>
              <br />
              <br />
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={this.props.credentials.password}
                onChange={this.props.onHandleChange}
              />
              <div style={{ fontSize: 12, color: "red" }}>
                {this.props.credentials.passwordError}
              </div>

              {securityQuestionAndAnswer}
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
            <NavLink
              className="nav-link"
              to="/forgotpassword"
              exact
              activeStyle={{ color: "Green" }}
            >
              Forgot Password? Click here.
            </NavLink>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default LoginComponent;
