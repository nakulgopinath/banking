import React from "react";
import axios from "axios";

class TransactionComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      transaction: {
        senderAccNo: "4567",
        recieverAccNo: "",
        amount: ""
      },
      success: false,
      senderName: "himanshu",
      senderAvailableBalance: "34567890",
      recieverAccNo: "12345",
      amount: "2000"
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleClick(evt) {
    evt.preventDefault();
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

  render() {
    return (
      <React.Fragment>
        <div className="card text-center">
          <div className="card-header">
            <h1>Fund Transfer</h1>
            <hr></hr>
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

              <h4>Amount</h4>
              <input
                type="number"
                name="amount"
                placeholder="Enter Amount to be sent"
                value={this.state.amount}
                onChange={this.handleChange}
              ></input>
              <br></br>
              <br></br>
              {/* <br></br> */}
              <button className="btn btn-primary" onClick={this.handleClick}>
                Transfer
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TransactionComponent;
