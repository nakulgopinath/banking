import React from "react";
import axios from "axios";
//Done by Hari Govind
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
      transaction: null,

      accountNoError: "",
      cNameError: "",
      usernameError: "",
      cEmailError: "",
      cPhoneError: "",
      accountStartingDateError: "",
      bankBalanceError: "",


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
    const isValid = this.validateForm();
    console.log(isValid)

    if (isValid === true) {

      const url = "http://localhost:8080/customers";
      axios.post(url, this.state).then(response => {
        if (response.status === 201) { this.props.history.push("/customerLanding") }
      });
    }
  }

  validateForm = () => {
    //Validation Done By Nakul G Nair
    let error = true;



    if (!this.state.accountNo) {
      this.setState({ accountNoError: "Account No is required" })
      error = true;
    }
    else {
      this.setState({ cNameError: "" })
      error = false;
    }

    if (!this.state.cName) {
      this.setState({ cNameError: "Customer Name is required" })
      error = true;
    }
    else {
      this.setState({ cNameError: "" })
      error = false;
    }

    if (!this.state.cEmail) {
      this.setState({ cEmailError: "E-mail ID is required" })
      error = true;
    }
    else {
      this.setState({ cEmailError: "" })
      error = false;
    }



    if (!this.state.cPhone) {
      this.setState({ cPhoneError: "Phone No is required" })
      error = true;
    }
    else {
      this.setState({ cPhoneError: "" })
      error = false;
    }

    if (!this.state.accountStartingDate) {
      this.setState({ accountStartingDateError: "Account Starting Date is required" })
      error = true;
    }
    else {
      this.setState({ accountStartingDateError: "" })
      error = false;
    }

    if (!this.state.bankBalance) {
      this.setState({ bankBalanceError: "Bank Balance  is required" })
      error = true;
    }
    else {
      this.setState({ bankBalanceError: "" })
      error = false;
    }


    if (error === true)
      return false;
    else
      return true;

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
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.accountNoError}
              </div>
              <br />
              <br />
              <input
                type="text"
                name="cName"
                placeholder="Enter Customer Name"
                value={this.state.cName}
                onChange={this.onHandleChange}
              />
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.cNameError}
              </div>
              <br />
              <br />
              <input
                type="email"
                name="cEmail"
                placeholder="Enter Customer Email-id"
                value={this.state.cEmail}
                onChange={this.onHandleChange}
              />
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.cEmailError}
              </div>
              <br />
              <br />
              <input
                type="text"
                name="cPhone"
                placeholder="Enter Phone Number"
                value={this.state.cPhone}
                onChange={this.onHandleChange}
              />
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.cPhoneError}
              </div>
              <br />
              <br />
              <label>Enter Account Opening Date</label>
              <input
                type="date"
                name="accountStartingDate"
                placeholder="Enter Account Opening Date"
                value={this.state.accountStartingDate}
                onChange={this.onHandleChange}
              />
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.accountStartingDateError}
              </div>
              <br />
              <br />
              <input
                type="number"
                name="bankBalance"
                placeholder="Enter Bank Balance"
                value={this.state.bankBalance}
                onChange={this.onHandleChange}
              />
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.bankBalanceError}
              </div>
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

