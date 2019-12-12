import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

class CustomerRegistration extends React.Component {
  constructor() {
    super();
    this.state = {
      accountNo: "",
      cName: "",
      username: "",
      cEmail: "",
      cPhone: "",
      accountStartingDate: "",
      bankBalance: "",
      transaction: null
    };
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    const uname = sessionStorage.getItem("user");
    this.setState({
      username: uname
    });
  }

  onHandleSubmit(event) {
    event.preventDefault();
    const url = "http://localhost:8080/customers";
    axios.post(url, this.state).then(response => {
      console.log(response);
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="card text-center">
          <div className="card-header">
            <h4>Customer Detail Registration</h4>
          </div>
          <div className="card-body">
            <form className="card-text" onSubmit={this.onHandleSubmit}>
              <input
                type="text"
                name="accountNo"
                placeholder="Enter Account No"
                value={this.state.accountNo}
                onChange={this.onHandleChange}
              />
              <br />
              <br />
              <input
                type="text"
                name="cName"
                placeholder="Enter Customer Name"
                value={this.state.cName}
                onChange={this.onHandleChange}
              />
              <br />
              <br />
              <input
                type="email"
                name="cEmail"
                placeholder="Enter Customer Email-id"
                value={this.state.cEmail}
                onChange={this.onHandleChange}
              />
              <br />
              <br />
              <input
                type="text"
                name="cPhone"
                placeholder="Enter Phone Number"
                value={this.state.cPhone}
                onChange={this.onHandleChange}
              />
              <br />
              <br />
              <input
                type="date"
                name="accountStartingDate"
                placeholder="Enter Account Opening Date"
                value={this.state.accountStartingDate}
                onChange={this.onHandleChange}
              />
              <br />
              <br />
              <input
                type="number"
                name="bankBalance"
                placeholder="Enter Bank Balance"
                value={this.state.bankBalance}
                onChange={this.onHandleChange}
              />
              <br />
              <br />
              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className="card-footer text-muted">
            <h6>Dont worry,Your data is safe with us.</h6>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CustomerRegistration;
