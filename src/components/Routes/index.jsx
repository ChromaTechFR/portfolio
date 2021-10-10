import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import About from "../../pages/About";
import Homes from "../../pages/Homes";

export default function index() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Homes} />
        <Route path='/contact' exact component={About} />
        <Redirect to='/' />
      </Switch>
    </Router>
  );
}
