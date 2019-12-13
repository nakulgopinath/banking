import React from "react";
import style from "./landingStyle.css";
import { BrowserRouter as Router } from "react-router-dom";
class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Hari"
    };
    this.onNavigateToLogin = this.onNavigateToLogin.bind(this);
  }
  onNavigateToLogin() {
    this.props.history.push("/login");
  }
  render() {
    return (
      <Router>
        {/* <div className="container"></div> */}
        <div className="full-screen">
          <div className="col-md-12"></div>
          <div style={{ marginTop: 300 }}>
            <h1>Welcome To SBI</h1>
            <br />
            <button
              className="btn btn-primary"
              onClick={this.onNavigateToLogin}
            >
              Click Here to Login
            </button>
          </div>
        </div>
        {/* </div> */}
      </Router>
    );
  }
}

export default Landing;
