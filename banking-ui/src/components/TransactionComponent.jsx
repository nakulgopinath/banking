import React from "react";
import axios from "axios";
import TransactionHistoryComponent from "./TransactionHistoryComponent"

//Done by Himanshu
class TransactionComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      transaction: {
        senderAccNo: "",
        recieverAccNo: "",
        amount: ""
      },
      success: false,
      senderName: "",
      senderAvailableBalance: "",
      recieverAccNo: "",
      amount: "",
      transactionList: [],

      recieverAccNoError: "",
      amountError: ""
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.handleTransactionHistory = this.handleTransactionHistory.bind(this);
  }

  handleChange(event) {
    this.state.transaction.senderAccNo = this.props.senderAccNo;
    this.state.senderName = this.props.senderName;
    this.state.senderAvailableBalance = this.props.senderAvailableBalance;
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  validateForm = () => {
    //Validation Done By Nakul G Nair
    let error = true;



    if (!this.state.recieverAccNo) {
      this.setState({ recieverAccNoError: "Reciever Account No  is required" })
      error = true;
    }
    else {
      this.setState({ cNameError: "" })
      error = false;
    }

    if (!this.state.amount) {
      this.setState({ amountError: "Reciever Account No  is required" })
      error = true;
    }
    else {
      this.setState({ cNameError: "" })
      error = false;
    }

    if (error === true)
      return false;
    else
      return true;

  }

  handleTransactionHistory(evt) {
    // evt.preventDefault();
    console.log("inside handle transaction history handler");
    console.log(this.state.transaction.senderAccNo);
    const url = "http://localhost:8080/customers/transactions?sTid=" + this.state.transaction.senderAccNo;
    axios
      .get(url)
      .then(response => {
        if (response.status === 200) {
          console.log(response);
          const accountDetails = response.data.map(item =>
            <TransactionHistoryComponent

              res={item} key={item.transactionId}

            />
          )
          this.setState({
            transactionList: accountDetails,
          })

        }
      })
      .catch(error => {
        console.log(error);
      });

  }

  handleClick(evt) {
    evt.preventDefault();

    const isValid = this.validateForm();

    if (isValid === true) {

      console.log("inside handle click");
      this.state.transaction.recieverAccNo = this.state.recieverAccNo;
      this.state.transaction.amount = this.state.amount;
      const url = "http://localhost:8080/customers/transactions";
      axios
        .post(url, this.state.transaction)
        .then(response => {
          if (response.status === 200) {
            console.log("success");
            this.setState({
              success: true
            });
            // this.handleSuccessRedirect();
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="card text-center">
          <div className="card-header">
            <h2>Fund Transfer</h2>
          </div>
          <div className="card-body">
            <h4>Account No.</h4>
            <input
              type="text"
              disabled
              value={this.state.transaction.senderAccNo}
              name="senderAccNo"
            ></input>
            <br></br>
            <h4>Account Holder's Name</h4>
            <input
              type="text"
              disabled
              value={this.state.senderName}
              placeholder={this.state.senderName}
              name="senderName"
            ></input>
            <br></br>
            <h4>Available Balance</h4>
            <input
              type="number"
              disabled
              value={this.state.senderAvailableBalance}
              name="senderAvailableBalance"
            ></input>
            <br></br>

            <br></br>
            <form className="card-text">
              <h4>Reciever'sAccount No.</h4>
              <input
                type="text"
                name="recieverAccNo"
                placeholder="Enter Reciever's Account No."
                value={this.state.recieverAccNo}
                onChange={this.handleChange}
              />
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.recieverAccNoError}
              </div>

              <h4>Amount</h4>
              <input
                type="number"
                name="amount"
                placeholder="Enter Amount to be sent"
                value={this.state.amount}
                onChange={this.handleChange}
              />
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.amountError}
              </div>
              <br></br>
              <button className="btn btn-primary" onClick={this.handleClick}>
                Transfer
              </button>
            </form>
            <br />
            <button className="btn btn-primary" onClick={this.handleTransactionHistory}>Transaction History</button>
            <br />
            <br />
            <button className="btn btn-secondary" name="profile" onClick={this.props.onHandleCancel}>Back</button>
            <br />
          </div>
          {this.state.transactionList}
          <br />
          <br />
          <br />
        </div>
      </React.Fragment>
    );
  }
}

export default TransactionComponent;
