import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Header from "./Header";

class Login extends Component {
  goToDataFeedPage = event => {
    event.preventDefault();
    this.props.history.push("feedData");
  };

  render() {
    return (
      <div>
        <Header />
        <div className="landingContainer">
          <form onSubmit={this.goToDataFeedPage}>
            <div className="credentialContainer">
              <input placeholder="User Name" type="text" />
              <br />
              <input placeholder="Password" type="password" />
            </div>
          </form>
          <Link to="/feedData">Login</Link>
        </div>
      </div>
    );
  }
}

export default Login;
