import React from "react";
//Done by Hari Govind
class Footer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        {/* <footer className="footer mt-auto py-3">
          <div className="container">
            <span className="text-muted">
              Place sticky footer content here.
            </span>
          </div>
        </footer> */}
        <div id="footer">
          SBI Banking 2019 &copy;
</div>
      </React.Fragment>
    );
  }
}

export default Footer;
