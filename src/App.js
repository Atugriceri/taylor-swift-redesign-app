import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import { Context, ModeContext } from "./context/ModeContext";

export default function App() {
  return (
    <Context>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/shop">
            <Shop />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </Context>
  );
}
