import React from "react";
import FormComponent from "./FormComponent";
import axios from "axios";

class RegisterComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: "",
      securityQuestions: [
        "What is your favourite color",
        "Who is your favourite cricketer",
        "What is the name of your childhood superhero"
      ],
      answer: "",
      newUser: true,
      success: null,
      isRegister: true,
      securityQuestion: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleNavigate = this.handleNavigate.bind(this);
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
  handleNavigate() {
    this.props.history.push("/login");
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const url = "http://localhost:8080/register";
    axios
      .post(url, this.state)
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          this.setState({
            success: true
          });
          this.handleNavigate();
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
          operation="Register"
          newUser={this.state.newUser}
          onHandleChange={this.handleChange}
          onHandleSubmit={this.handleSubmit}
        />
      </React.Fragment>
    );
  }
}

export default RegisterComponent;
