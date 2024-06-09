import React from "react";
import "../SignUp/SignUp.css";
import arrow from "../../assets/arrow.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="signUp">
      <div></div>
      <div></div>
      <div className="login">
        <div>
          <form action="">
            <label htmlFor="">Username</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="password" />
            <label htmlFor="">Password</label>
            <input type="password" />
            <label htmlFor="">Confirm Password</label>
            <input type="password" />

            <button className="btn">Sign Up</button>
          </form>
          <div className="red">
            <span> Go to Home Page </span>
            <Link to="/" className="redi">
              <img src={arrow} alt="" />
              skip
            </Link>
          </div>
          <span className="signup-r">
            Have an account ?{" "}
            <Link className="s-r" to="/SignIn">
              Sign In
            </Link>
          </span>
        </div>
        <div className="login-r">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/account-sign-up-7964201-6381811.png?f=webp"
            alt=""
          />
          <span>Welcome</span>
          <span>Enter your work email address to get started</span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
