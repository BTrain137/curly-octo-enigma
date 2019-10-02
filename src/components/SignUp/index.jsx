import React, { Component } from "react";

class SignUp extends Component {
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
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            required
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
            required
          />

          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default SignUp;
