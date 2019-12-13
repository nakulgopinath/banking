import React from "react";
import axios from "axios";
// import {Route,Router} from "react-router-dom"
import { hashHistory } from 'react-router-dom'
import TransactionComponent from "./TransactionComponent";

class CustomerLanding extends React.Component {
  constructor() {
    super();
    this.transaction=null;
    this.state = {
      loading: false,
      userName: "athul",
      password: "athul",
      user: {},
      dUser: {},
      cName:"",
      cEmail:"",
      isTransaction:true
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.fundTransferButtonHandler = this.fundTransferButtonHandler.bind(this);
  }

  componentDidMount() {
    // let encrypt = {
    //   headers: {
    //     Authorization:
    //       "Basic " + btoa(this.state.userName + ":" + this.state.password)
    //   }
    // };
    this.setState({ loading: true });
    fetch("http://localhost:8080/customers?id=1234")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          loading: false,
          user: data,
          cName: data.cName,
          cEmail: data.cEmail,
          dUser: data,
          success: false
        });
      });
      // console.log(this.state.user.cName);
  }

  handleTransaction(){
    this.setState({isTransaction:true})
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

  handleSubmit(event) {
    event.preventDefault();
    let encrypt = {
      headers: {
        Authorization:
          "Basic " + btoa(this.state.userName + ":" + this.state.password)
      }
    };
    console.log(this.state.user);
    this.state.dUser.cName = this.state.cName;
    this.state.dUser.cEmail=this.state.cEmail;
    console.log(this.state.dUser);
    const url = "http://localhost:8080/customers/" + this.state.user.accountNo;
    axios
      .put(url, this.state.dUser)
      .then(response => {
        if (response.status === 201) {
          console.log(response);
          this.setState({
            success: true
          });
          this.render();
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  // fundTransferButtonHandler = () =>{
  //   // this.context.history.push("/");
  //   // this.props.history.push({pathname:"/transactionLanding"})
  //   // state:{senderAccNo:this.state.user.accountNo,
  //   //   senderName:this.state.user.cName,
  //   //   senderAvailableBalance:this.state.user.bankBalance}});
  //   console.log("Entered button Handler");
  //   console.log(this.state.user);
  //   if(this.state.isTransaction===true){
  //     console.log("True")
  //   this.transaction = 
  //   } 
  //   else{
  //     this.transaction=null
  //   }

  // }
  render() {
    return (
      <React.Fragment>
        <div className="card text-center">
          <div className="card-header">
            <h4>{this.props.operation}</h4>
          </div>
          <div className="card-body">
            <p>
              Welcome: <b>{this.state.user.cName}</b>
            </p>
            Email: <h1>{this.state.user.cEmail}</h1>
            <p>
              Balance: <b>{this.state.user.bankBalance}</b>
            </p>
            <form className="card-text" onSubmit={this.handleSubmit}>
              <h1>Edit Profile</h1>
              Name{" "}
              <input
                type="text"
                name="cName"
                placeholder="Enter cName"
                value={this.state.cName || ""}
                onChange={this.handleChange}
              />
              <br />
              <br />
              <input
                type="text"
                name="cEmail"
                placeholder="Enter Email"
                value={this.state.cEmail || ""}
                onChange={this.handleChange}
              />
              <br />
              <br />
              <button>Submit</button>
            </form>
{/* <button
onClick={this.fundTransferButtonHandler}>Transfer Funds</button> */}
           
          
          </div>
          <TransactionComponent
        senderAccNo={this.state.user.accountNo}
        senderName={this.state.user.cName}
        senderAvailableBalance={this.state.user.bankBalance}
        onHandleTransaction={this.handleTransaction}
        ></TransactionComponent>
        </div>
        {this.transaction}
            {console.log("Hoiiii")}
            {console.log(this.transaction)}
      </React.Fragment>
    );
  }
}

export default CustomerLanding;
