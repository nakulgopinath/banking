import React from "react";

class ResetPassword extends React.Component {
  render() {
    // console.log(props.username);
    return (
      <React.Fragment>
        <h1>{this.props.username}</h1>
      </React.Fragment>
    );
  }
}

export default ResetPassword;
