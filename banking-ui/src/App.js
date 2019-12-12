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

function App() {
  return (
    <Router>
      <Header cName="Hari" />
      <Route path="/" exact component={Landing} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route
        path="/customerRegistration"
        exact
        component={customerRegistration}
      />
      <Route
        path="/customerLanding"
        exact
        component={CustomerLandingContainer}
      />
      <Route
        path="/transactionLanding"
        exact
        component={TransactionComponent}
      />
      <Route path="/forgotpassword" exact component={ForgotPassword} />
      <Route path="/resetpassword" exact component={ResetPassword} />
      <Footer />
    </Router>
  );
}

export default App;
