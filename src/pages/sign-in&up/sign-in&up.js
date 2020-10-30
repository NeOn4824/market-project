import React from "react";
import "./sign-in&up.scss";

import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sing-up/signUp";

const SignInAndSignUpPage = () => {
  return (
    <div className="sign-InUp">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
