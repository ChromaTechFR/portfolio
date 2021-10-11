import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Contact from "../../pages/Contact";
import Homes from "../../pages/Homes";

export default function index() {
  return (
    <Router>
      <Switch>
        <Route path='/portfolio' exact component={Homes} />
        <Route path='/portfolio/contact/' exact component={Contact} />
      </Switch>
    </Router>
  );
}
