import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './components/Nav';
import Register from './pages/Register';
import Login from './pages/Login';
import About from './pages/About';
import Profile from './pages/Profile';
import Accept from './pages/Accept';

import './App.css';


const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
      <Route exact path="/Accept" component={Accept} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/About" component={About} />
        <Route exact path="/" component={Register} />
      </Switch>
    </div>
  </Router>
);

export default App;
