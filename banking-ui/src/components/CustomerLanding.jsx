import React from "react";
import axios from "axios";
import CustomerEdit from "./CustomerEdit"
import TransactionComponent from "./TransactionComponent";

//Done by Himanshu and Athul
class CustomerLanding extends React.Component {
  constructor() {
    super();
    this.transaction=null;
    this.state = {
      loading: false,
      user: {},
      dUser: {},
      cName: "",
      cEmail: "",
      cPhone: "",
      isTransaction:true,

      cNameError:"",
      cEmailError:"",
      cPhoneError:"",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.fundTransferButtonHandler = this.fundTransferButtonHandler.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true });
    const url = "http://localhost:8080/customers/getbyusername";
    const userData = {username:sessionStorage.getItem("user")}
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

  validateForm = () => {
    //Validation Done By Nakul G Nair
        let error=true;

        
  
        if(!this.state.cName)
        {
          this.setState({cNameError:"Customer name is required"})
          error=true;
        }
        else
        {
          this.setState({cNameError:""})
          error=false;
        }
  
        if(!this.state.cEmail)
        {
          this.setState({cEmailError:"Email is required"})
          error=true;
        }
        else
        {
          this.setState({cEmailError:""})
          error=false;
        }

        if(!this.state.cPhone)
        {
          this.setState({cPhoneError:"Phone No is required"})
          error=true;


        }
        else
        {
          
          if(this.state.cPhone.length<10)
          {
            this.setState({cPhoneError:"Phone No Must be 10 Digits"})
            error=true;
          }
          else
          {
            this.setState({cPhoneError:""})
            error=false;
          }
          
        }

        
  
       
  
        if(error===true)
        return false;
        else
        return true;
  
      
    }

  handleSubmit(event) {
    event.preventDefault();
    const isValid =this.validateForm();
    console.log(isValid)

    const ddUser = this.state.user;    
    ddUser.cName=this.state.cName;
    ddUser.cEmail=this.state.cEmail;
    ddUser.cPhone=this.state.cPhone;
    this.state.dUser.cName = this.state.cName;
    this.state.dUser.cEmail=this.state.cEmail;
    

    if(isValid==true)
    {
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
            <hr></hr>
            <h4>Edit profile</h4>
            <CustomerEdit state = {this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}/>
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
