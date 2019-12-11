import React from "react";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Login from "./components/LoginContainer";
import Register from "./components/RegisterContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CustomerLandingContainer from "./components/CustomerLandingContainer";

function App() {
  return (
    <Router>
      <Header cName="Hari" />
      <Route path="/" exact component={Landing} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
      <Route
        path="/customerLanding"
        exact
        component={CustomerLandingContainer}
      />
      <Footer />
    </Router>
  );
}

export default App;
