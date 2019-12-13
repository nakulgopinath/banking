import React from "react";
import axios from "axios";
import ResetPassword from "./ResetPassword";
import { Redirect } from "react-router-dom";
//Done by Hari Govind
class ForgotPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      securityQuestions: [
        "What is your favourite color",
        "Who is your favourite cricketer",
        "What is the name of your childhood superhero"
      ],
      answer: ""
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  componentDidMount() {
    const securityQuestions = this.state.securityQuestions.map(question => {
      return { value: question, display: question };
    });
    this.setState({
      securityQuestions: [
        { value: "", display: "(Select your security question)" }
      ].concat(securityQuestions)
    });
  }

  onHandleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  onHandleSubmit = event => {
    event.preventDefault();
    const url = "http://localhost:8080/forgotpassword";
    axios.post(url, this.state).then(response => {
      console.log(response);
      if (response.data === this.state.userName) {
        this.handleRedirect();
        //   return <ResetPassword username={this.state.userName} />;
      }
    });
  };

  handleRedirect() {
    this.props.history.push({ pathname: "/resetpassword/", state: this.state });
  }

  render() {
    return (
      <React.Fragment>
        <div className="card text-center">
          <div className="card-header">
            <h4>Forgot Password</h4>
          </div>
          <div className="card-body">
            <form className="card-text" onSubmit={this.onHandleSubmit}>
              <input
                type="text"
                name="userName"
                placeholder="Enter Username"
                value={this.state.userName}
                onChange={this.onHandleChange}
              />
              <br />
              <br />
              <select
                value={this.state.securityQuestion}
                onChange={this.onHandleChange}
                name="securityQuestion"
              >
                {this.state.securityQuestions.map(question => (
                  <option key={question.value} value={question.value}>
                    {question.display}
                  </option>
                ))}
              </select>
              <br />
              <br />
              <input
                type="text"
                name="answer"
                placeholder="Enter Answer"
                value={this.state.answer}
                onChange={this.onHandleChange}
              />
              <br />
              <br />
              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ForgotPassword;
