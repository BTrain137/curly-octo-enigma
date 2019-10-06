import React from "react";
import "./SignInAndSignUpPage.styles.scss";

import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
