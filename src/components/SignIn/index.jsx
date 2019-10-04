import React, { Component } from "react";
import "./SignIn.styles.scss";

import FormInput from "../FormInput";
import CustomButton from "../CustomButton";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label="email"
            handleChange={this.handleChange}
            value={this.state.email}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="password"
            handleChange={this.handleChange}
            value={this.state.password}
            required
          />

          <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
