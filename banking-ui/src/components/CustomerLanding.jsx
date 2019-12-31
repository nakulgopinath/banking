import React from "react";
import axios from "axios";
import CustomerEdit from "./CustomerEdit"
import TransactionComponent from "./TransactionComponent";
import CustomerDependants from "./CustomerDependants";

//Done by Himanshu and Athul
class CustomerLanding extends React.Component {
  constructor() {
    super();
    this.transaction = null;
    this.state = {
      loading: false,
      user: {},
      dUser: {},
      cName: "",
      cEmail: "",
      cPhone: "",
      nominee: {
        name: "",
        relation: "",
        phone: ""
      },
      isTransaction: true,
      currentView: "profile",

      cNameError: "",
      cEmailError: "",
      cPhoneError: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    // this.fundTransferButtonHandler = this.fundTransferButtonHandler.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true });
    const url = "http://localhost:8080/customers/getbyusername";
    const userData = { username: sessionStorage.getItem("user") }
    axios
      .post(url, userData)
      .then(data => {
        console.log(data);
        this.setState({
          loading: false,
          user: data.data,
          cName: data.data.cName,
          cEmail: data.data.cEmail,
          cPhone: data.data.cPhone,
          dUser: data.data
        });
      });
    // console.log(this.state.user.cName);
  }

  handleTransaction() {
    this.setState({ isTransaction: true })
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState(prevState => {
      return {
        // ...prevState.dUser,
        [name]: value
      };
    });
  }

  validateForm = () => {
    //Validation Done By Nakul G Nair
    let error = true;



    if (!this.state.cName) {
      this.setState({ cNameError: "Customer name is required" })
      error = true;
    }
    else {
      this.setState({ cNameError: "" })
      error = false;
    }

    if (!this.state.cEmail) {
      this.setState({ cEmailError: "Email is required" })
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

      if (this.state.cPhone.length < 10) {
        this.setState({ cPhoneError: "Phone No Must be 10 Digits" })
        error = true;
      }
      else {
        this.setState({ cPhoneError: "" })
        error = false;
      }

    }
    if (error === true)
      return false;
    else
      return true;
  }

  handleSubmit(event) {
    event.preventDefault();
    const isValid = this.validateForm();
    console.log(isValid)

    const ddUser = this.state.user;
    ddUser.cName = this.state.cName;
    ddUser.cEmail = this.state.cEmail;
    ddUser.cPhone = this.state.cPhone;
    ddUser.nominee = this.state.nominee;
    this.state.dUser.cName = this.state.cName;
    this.state.dUser.cEmail = this.state.cEmail;


    if (isValid === true) {
      const url = "http://localhost:8080/customers/" + this.state.user.accountNo;
      axios
        .put(url, ddUser)
        .then(response => {
          if (response.status === 201) {
            console.log(response);
            this.setState({
              success: true
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }


  handleEdit(event) {
    const { name } = event.target;
    if (name === "profile") {
      this.setState({
        currentView: "profile"
      })
    }
    if (name === "edit") {
      this.setState({
        currentView: "edit"
      })
    }
    if (name === "transaction") {
      this.setState({
        currentView: "transaction"
      })
    }
    if (name === "dependants") {
      this.setState({
        currentView: "dependants"
      })
    }
    if (name === "nominee") {
      if (this.state.user.nominee != null) {
        this.setState({
          currentView: "nominee"
        })
      }
      else {
        alert("No nominees exist!")
      }
    }
  }
  render() {
    let renderer = null;
    if (this.state.currentView === "profile") {
      renderer = <React.Fragment>
        <div className="card text-center">
          <div className="card-header">
            <h2>Profile</h2>
          </div>
          <div className="card-body">
            <p>
              Welcome: <b>{this.state.user.cName}</b>
            </p>
            <p>Email: <b>{this.state.user.cEmail}</b></p>
            <p>Phone: <b>{this.state.user.cPhone}</b></p>
            <p>
              Balance: <b>{this.state.user.bankBalance}</b>
            </p>
            {console.log(this.state.user.nominee)}
            <hr></hr>
            <button className="btn btn-primary" name="nominee" onClick={this.handleEdit}>Show Nominee Details</button>
            <hr></hr>
            <button className="btn btn-primary" name="edit" onClick={this.handleEdit}>Edit Account</button>
            <hr></hr>
            <button className="btn btn-primary" name="transaction" onClick={this.handleEdit}>Transaction</button>
            <hr></hr>
            <button className="btn btn-primary" name="dependants" onClick={this.handleEdit}>Add Nominee</button>
          </div>
        </div>
      </React.Fragment>
    }
    else if (this.state.currentView === "edit") {
      renderer = <React.Fragment>
        <CustomerEdit state={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleCancel={this.handleEdit} />
      </React.Fragment>
    }
    else if (this.state.currentView === "transaction") {
      renderer = <React.Fragment>
        <TransactionComponent
          senderAccNo={this.state.user.accountNo}
          senderName={this.state.user.cName}
          senderAvailableBalance={this.state.user.bankBalance}
          onHandleTransaction={this.handleTransaction}
          onHandleCancel={this.handleEdit}
        ></TransactionComponent>
        {this.transaction}
        {console.log(this.transaction)}
      </React.Fragment>
    }
    else if (this.state.currentView === "dependants") {
      renderer = <React.Fragment>
        <CustomerDependants
          details={this.state}
          onHandleSubmit={this.handleSubmit}
          onHandleCancel={this.handleEdit}
        ></CustomerDependants>
      </React.Fragment>
    }
    else if (this.state.currentView === "nominee") {
      renderer = <React.Fragment>
        <div className="card text-center">
          <div className="card-header">
            <h2>Nominee Details</h2>
          </div>
          <div className="card-body">
            <p>
              Nominee name: <b>{this.state.user.nominee.name}</b>
            </p>
            <p>
              Relation to the client: <b>{this.state.user.nominee.relation}</b>
            </p>
            <p>Phone: <b>{this.state.user.nominee.phone}</b></p>
            <button className="btn btn-secondary" name="profile" onClick={this.handleEdit}>Go Back</button>
          </div>
        </div>
      </React.Fragment>
    }

    return (
      <React.Fragment>
        {renderer}
      </React.Fragment >
    );
  }
}

export default CustomerLanding;
