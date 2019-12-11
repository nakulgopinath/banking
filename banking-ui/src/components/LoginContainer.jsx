import React, { Component } from "react";
import axios from "axios";
import FormComponent from "./FormComponent";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: "",
      newUser: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSuccessRedirect = this.handleSuccessRedirect.bind(this);
    this.handleNavigate = this.handleNavigate.bind(this);
  }

  handleNavigate() {
    this.props.history.push("/register");
  }

  handleSuccessRedirect() {
    this.props.history.push("/customerLanding");
  }

  handleSubmit(evt) {
    evt.preventDefault();
    let encrypt = {
      headers: {
        Authorization:
          "Basic " + btoa(this.state.userName + ":" + this.state.password)
      }
    };
    console.log(encrypt);
    const url = "http://localhost:8080/authenticate";
    axios
      .post(url, "", encrypt)
      .then(response => {
        if (response.status === 200) {
          this.setState({
            success: true
          });
          this.handleSuccessRedirect();
          // alert("Welcome " + response.data.name);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <React.Fragment>
        <FormComponent
          credentials={this.state}
          operation="Login"
          newUser={this.state.newUser}
          onHandleChange={this.handleChange}
          onHandleSubmit={this.handleSubmit}
        />
      </React.Fragment>
    );
  }
}

export default Login;
