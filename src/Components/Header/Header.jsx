import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import support from "../../assets/Support/support.png";
import globe from "../../assets/Support/globe.png";
import iconic from "../../assets/Support/iconic.png";
import "../Header/Header.css";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import { AppContext } from "../../App";
const Header = ({ showmenu }) => {
  const { userData, image, setUserData, setImage } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    setUserData("");
    setImage("");
    navigate("/");
  };

  return (
    <div className="header">
      <div className="t-Header">
        <div>
          <img src={iconic} alt="" />
        </div>
        <div className="global-s"></div>
        <div>
          {userData || image ? (
            <div className="user-info">
              <img src={image} alt="User Avatar" className="user-image" />
              <span>{userData}</span>
              <button className="signout" onClick={handleSignOut}>
                Sign out
              </button>
            </div>
          ) : (
            <>
              <NavLink className="signin" to="/SignIn">
                <span>Sign In</span>
              </NavLink>
              <NavLink className="signup" to="/SignUp">
                <span>Sign Up</span>
              </NavLink>
            </>
          )}
        </div>
      </div>
      <div className="b-Header">
        <NavLink to="/" className="aerospace">
          <div className="l-h">
            <motion.img
              initial={{ x: "-30px" }}
              whileInView={{ x: "10px" }}
              transition={{ type: "spring", duration: 3 }}
              src={logo}
              alt=""
            />
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ type: "spring", duration: 10 }}
            >
              AeroSpace
            </motion.span>
          </div>
        </NavLink>
        {showmenu && (
          <ul className="m-h">
            <Link to="hero" smooth={true}>
              <li>Home</li>
            </Link>
            <Link to="Hero" smooth={true}>
              <li>Search Flight</li>
            </Link>
            <Link to="support" smooth={true}>
              <li>Support</li>
            </Link>
            <Link to="lounge" smooth={true}>
              <li>Lounge</li>
            </Link>
            <Link to="Top" smooth={true}>
              <li>Top Travels</li>
            </Link>
          </ul>
        )}
        <div className="r-h">
          <Link to="Footer" smooth={true}>
            <button>Subscribe</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
