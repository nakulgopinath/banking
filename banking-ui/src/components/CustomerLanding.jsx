import React from "react";
import axios from "axios";

class CustomerLanding extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      userName: "athul",
      password: "athul",
      user: {},
      dUser: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // let encrypt = {
    //   headers: {
    //     Authorization:
    //       "Basic " + btoa(this.state.userName + ":" + this.state.password)
    //   }
    // };
    this.setState({ loading: true });
    fetch("http://localhost:8080/customers?id=4567")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: false,
          user: data,
          cName: data.cName,
          dUser: data,
          success: false
        });
      });
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
              {/* <input
                type="text"
                name="cEmail"
                placeholder="Enter Email"
                value={this.state.dUser.cEmail}
                onChange={this.onHandleChange}
              />
              <br />
              <br /> */}
              <button>Submit</button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CustomerLanding;
