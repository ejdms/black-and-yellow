import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import Home from "../pages/Home";
import Contact from "../pages/Contact";

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    );
  }
}

export default App;
