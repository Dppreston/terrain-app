//styles
import "../styles/login-cart.css";

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function LoginForm() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupEmail, setSignUpEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [error, setError] = useState(null);

  //input handles

  const handleEmailLogin = (e) => {
    setLoginEmail(e.target.value);
  };

  const handleLoginPassword = (e) => {
    setLoginPassword(e.target.value);
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleSignupEmail = (e) => {
    setSignUpEmail(e.target.value);
  };
  const handleSignupPassword = (e) => {
    setSignupPassword(e.target.value);
  };

  //post data

  const postAxios = async () => {
    const postData = {
      firstName: firstName,
      lastName: lastName,
      email: signupEmail,
      password: signupPassword,
    };

    await axios
      .post("https://terrain-app-production.up.railway.app/users", postData)
      .then((res) => setError(<p>{res.data}</p>));
  };

  //action funtions

  const handleSubmitLogin = (e) => {};
  const handleSubmitSignup = (e) => {
    e.preventDefault();

    setError("");
    postAxios();
  };

  useEffect(() => {}, [
    loginEmail,
    loginPassword,
    firstName,
    lastName,
    signupEmail,
    signupPassword,
  ]);

  return (
    <>
      <div className="login-signup-container">
        <div className="login">
          <div className="login-signup-title-container">
            <h2 className="login-signup-title">Login To Your Account</h2>
          </div>
          <div className="login-signup-input-container">
            <input
              type="text"
              className="login-signup-field"
              id="login-username"
              placeholder="Email"
              onChange={handleEmailLogin}
              value={loginEmail}
            />
            <input
              type="text"
              className="login-signup-field"
              id="login-password"
              placeholder="Password"
              onChange={handleLoginPassword}
              value={loginPassword}
            />
            <div className="login-signup-btn-container">
              <button
                className="signup-login-btn"
                id="login-btn"
                type="submit"
                onClick={handleSubmitLogin}
              >
                Log In
              </button>
            </div>
          </div>
        </div>
        <div className="seperator"></div>
        <div className="sign-up">
          <div className="login-signup-title-container">
            <h2 className="login-signup-title">Create An Account</h2>
            <h4 className="login-signup-subtitle">
              For those times you need a faster checkout
            </h4>
          </div>
          <div className="login-signup-input-container">
            <input
              type="text"
              className="login-signup-field"
              id="first-name"
              placeholder="First Name"
              onChange={handleFirstName}
              value={firstName}
            ></input>
            <input
              type="text"
              className="login-signup-field"
              id="last-name"
              placeholder="Last Name"
              onChange={handleLastName}
              value={lastName}
            ></input>
            <input
              type="email"
              className="login-signup-field"
              id="email"
              placeholder="Email"
              onChange={handleSignupEmail}
              value={signupEmail}
            ></input>
            <input
              type="password"
              className="login-signup-field"
              id="password"
              placeholder="Password"
              onChange={handleSignupPassword}
              value={signupPassword}
            ></input>
            <input
              type="password"
              className="login-signup-field"
              id="password-confirm"
              placeholder="Confirm Password"
            ></input>
            <div className="login-signup-btn-container">
              <button
                className="signup-login-btn"
                id="signup-btn"
                type="submit"
                onClick={handleSubmitSignup}
              >
                Create Account
              </button>
              {error}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoginForm;
