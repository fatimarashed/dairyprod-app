import React from "react";

import axios from "axios";

import { Link, withRouter } from "react-router-dom";

class Registeration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      mobile: "",
      password: "",
    };
  }
  handelChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handelSubmite(e) {
    console.log(
      "tryin to reeggggggggggggggggggggggggggggggggggggggggggggggggg"
    );
    e.preventDefault();
    const { username, email, mobile, password } = this.state;
    console.log(username, email, mobile, password);
    var that = this;
    axios
      .post(`http://localhost:4000/users`, {
        username,
        mobile,
        email,
        password,
      })
      .then((response) => {
        console.log("I have a response ");
        if (response.data) {
          console.log("NOW LOGIN TO CONFIRM YOUR  ACCOUNT");
          // this.props.setUserAuth(true);
          this.setState({
            username: "",
            email: "",
            mobile: "",
            password: "",
          });
          console.log(that);
          that.props.history.push("/Home");
        }
      })
      .catch((error) => {
        console.log("registration error", error);
        alert("THIS USERNAME IS ALREADY USED TRY ANOTHER ONE");
        // this.props.setUserAuth(false);
        this.setState({
          username: "",
        });
      });
  }

  render() {
    return (
      <div className="inner-container">
        <div className="h1">
          <h1>Dairy products Milk and cheese </h1>
        </div>
        <form onSubmit={this.handelSubmite.bind(this)} className="box">
          <h1 className="header">Account Sign Up</h1>
          <hr className="hr" />
          <br />
          <div className="input-group">
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handelChange.bind(this)}
              className="login-input"
              placeholder="Username"
            />
          </div>
          <br />

          <div className="input-group">
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handelChange.bind(this)}
              className="login-input"
              placeholder="Email"
            />
          </div>
          <br />

          <div className="input-group">
            <input
              type="String"
              name="mobile"
              value={this.state.mobile}
              onChange={this.handelChange.bind(this)}
              className="login-input"
              placeholder="mobile"
            />
          </div>
          <br />
          <div className="input-group">
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handelChange.bind(this)}
              className="login-input"
              placeholder="Password"
            />
          </div>
          <br />
          <button className="safa">Sign Up</button>
          <br />
          <p>
            you have alredy account !{" "}
            <Link to="/Login" className="link">
              {" "}
              Log IN Now!
            </Link>
          </p>
        </form>
      </div>
    );
  }
}

export default withRouter(Registeration);
