import React from "react";
import CustomerLanding from "./CustomerLanding";
//Done by Athul K.S
class CustomerLandingContainer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <CustomerLanding />
      </React.Fragment>
    );
  }
}

export default CustomerLandingContainer;
