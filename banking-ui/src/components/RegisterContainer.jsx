import React from "react";
import FormComponent from "./FormComponent";
import axios from "axios";
//Done by Hari Govind
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
      securityQuestion: "",

      userNameError: "",
      passwordError: "",
      securityQuestionsError: "",
      answerError: ""
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


  validateForm = () => {
    //Validation Done By Nakul G Nair
    let error = true;

    if (!this.state.userName) {
      this.setState({ userNameError: "Username is required" })
      error = true;
    }
    else {
      this.setState({ userNameError: "" })
      error = false;
    }

    if (!this.state.password) {
      this.setState({ passwordError: "Password is required" })
      error = true;
    }
    else {
      this.setState({ passwordError: "" })
      error = false;
    }

    if (!this.state.securityQuestion) {
      this.setState({ securityQuestionsError: "Security Question is required" })
      error = true;
    }
    else {
      this.setState({ securityQuestionsError: "" })
      error = false;
    }
    if (!this.state.answer) {
      this.setState({ answerError: "Answer is required" })
      error = true;
    }
    else {
      this.setState({ answerError: "" })
      error = false;
    }

    if (error === true)
      return false;
    else
      return true;


  }

  handleSubmit(evt) {
    evt.preventDefault();

    const isValid = this.validateForm();
    console.log(isValid)

    if (isValid === true) {
      const url = "http://localhost:8080/register";
      axios
        .post(url, this.state)
        .then(response => {
          console.log(response);
          if (response.data === true) {
            this.setState({
              success: true
            });
            alert("Registration Success");
            this.handleNavigate();
          }
          else if (response.data !== true) {
            alert("Username Already Exists")
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
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
