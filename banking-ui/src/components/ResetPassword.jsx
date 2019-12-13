import React from "react";
import axios from "axios";

class ResetPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: "",
      confirmPassword: "",
      isMismatch: false
    };
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      userName: this.props.location.state.userName
    });
  }

  onHandleChange = event => {
    const { name, value } = event.target;
    if (this.state.password !== this.state.confirmPassword) {
      this.setState({
        isMismatch: true
      });
    } else if (this.state.password === this.state.confirmPassword) {
      this.setState({
        isMismatch: false
      });
    }
    this.setState({
      [name]: value
    });
  };

  onHandleSubmit = event => {
    event.preventDefault();
    if (this.state.password === this.state.confirmPassword) {
      this.setState({
        isMismatch: false
      });
      let url = "http://localhost:8080/resetpassword";
      console.log(this.state);
      axios.put(url, this.state).then(response => {
        if (response.data === true) {
          alert("Password Successfully Changed!");
          this.props.history.push("/login");
        }
      });
    } else {
      alert("Password Mismatch Found");
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="card text-center">
          <div className="card-header">
            <h4>Hello {this.state.userName}</h4>
          </div>
          <div className="card-body">
            <form className="card-text" onSubmit={this.onHandleSubmit}>
              <input
                type="text"
                name="userName"
                placeholder="Enter Username"
                value={this.state.userName}
                onChange={this.onHandleChange}
                disabled
              />
              <br />
              <br />
              <input
                type="text"
                name="password"
                placeholder="Enter password"
                value={this.state.password}
                onChange={this.onHandleChange}
              />
              <br />
              <br />
              <input
                type="text"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={this.state.confirmPassword}
                onChange={this.onHandleChange}
              />
              <h6
                style={{
                  display: this.state.isMismatch ? "block" : "none",
                  color: "red"
                }}
              >
                *Passwords do not match
              </h6>
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

export default ResetPassword;
