import React, { useState, useContext } from "react";
import "../SignIn/SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { Data } from "../UserData/Data";
import { AppContext } from "../../App";
const SignIn = () => {
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const { setUserData, setImage } = useContext(AppContext);
  const [error, setError] = useState("");
  const callFun = (e) => {
    e.preventDefault();

    const user = Data.find((d) => d.username === uname && d.password === pass);
    if (user) {
      setError("Welcome back! You have successfully signed in.");
      setUserData(user.username);
      setImage(user.image);
      navigate("/");
    } else {
      setError(
        "Sorry, it looks like your signin information was incorrect. Please try again."
      );
      console.log("Invalid credentials");
    }
  };
  return (
    <div className="signIn">
      <div></div>
      <div></div>
      <div className="login">
        <div>
          <form onSubmit={callFun}>
            <label htmlFor="username">Username or email</label>
            <input
              type="text"
              id="username"
              onChange={(e) => setUname(e.target.value)}
              required
            />
            <div className="forgot">
              <label htmlFor="password">Password</label>
              <label htmlFor="forgot">Forgot Password ?</label>
            </div>
            <input
              type="password"
              id="password"
              onChange={(e) => setPass(e.target.value)}
              required
            />
            <button className="btn" type="submit">
              SignIn
            </button>
          </form>
          <span className="signup-r">
            Don't have an account?{" "}
            <Link className="s-r" to="/SignUp">
              Sign Up
            </Link>
          </span>
        </div>
        <div className="login-r">
          <img src="https://www.planstudyabroad.com/images/login.png" alt="" />
          <span>Welcome Back</span>
          <span>Please Login to your account</span>
        </div>
      </div>
      <span
        className="login-msg"
        style={{
          right:
            error ==
            "Sorry, it looks like your signin information was incorrect. Please try again."
              ? "10px"
              : "",
        }}
      >
        {error}
      </span>
    </div>
  );
};

export default SignIn;
