import React from "react";
import { Router, Route } from "react-router-dom";
import "./App.css";
import Login from "./containers/Login/Login";
import FeedData from "./containers/FeedData/FeedData";
import history from "./utils/history";

// const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <Router history={history}>
    <div className="app">
      <Route exact path="/" component={Login} />
      <Route path="/feedData" component={FeedData} />
    </div>
  </Router>
);

export default App;
