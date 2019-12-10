import React from "react";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";

function App() {
  return (
    <Router>
      <Header cName="Hari" />
      <Route path="/" exact component={Landing} />
      <Route path="/login" exact component={Login} />
      <Footer />
    </Router>
  );
}

export default App;
