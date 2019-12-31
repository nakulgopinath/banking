import React from "react";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Login from "./components/LoginContainer";
import Register from "./components/RegisterContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CustomerLandingContainer from "./components/CustomerLandingContainer";
import customerRegistration from "./components/CustomerRegistration";
import TransactionComponent from "./components/TransactionComponent";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import CustomerEdit from "./components/CustomerEdit";
//Done by Hari Govind
function App() {
  return (
    <Router >
      <Header />
      <Route path="/" exact component={Landing} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route
        path="/customerRegistration"
        exact
        component={customerRegistration}
      />
      <Route
        path="/transactionLanding"
        exact
        component={TransactionComponent}
      />
      <Route
        path="/customerLanding"
        exact
        component={CustomerLandingContainer}
      />
      <Route path="/forgotpassword" exact component={ForgotPassword} />
      <Route path="/resetpassword" exact component={ResetPassword} />
      <Route path="/editdetails" exact component={CustomerEdit} />
      <Footer />
    </Router>
  );
}

export default App;
