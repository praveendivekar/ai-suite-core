import React, { Component } from "react";
import "../Login/Login.css";
import Header from "../Header/Header";

class Login extends Component {
  goToDataFeedPage = event => {
    event.preventDefault();
    this.props.history.push("/feedData");
  };
  render() {
    return (
      <div>
        <Header />
        <div className="landingContainer">
          <div className="credentialContainer">
            <input placeholder="User Name" type="text" />
            <br />
            <input placeholder="Password" type="password" />
          </div>
          <button className="btn btn-default" onClick={this.goToDataFeedPage}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
