import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import "../Payment Header/PaymentHeader.css";
import one from "../../assets/PaymentHeader/1.png";
import two from "../../assets/PaymentHeader/2.png";
import three from "../../assets/PaymentHeader/3.png";
import four from "../../assets/PaymentHeader/4.png";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import { useNavigate } from "react-router-dom";
const PaymentHeader = () => {
  const { color, setColor, userData, image, setUserData, setImage } =
    useContext(AppContext);
  const navigate = useNavigate();
  const getGlowStyle = (section) => {
    return section === color
      ? {
          backgroundColor: "rgb(45, 153, 225)",
          color: "white",
          padding: "3px",
          borderRadius: "5px",
        }
      : {};
  };

  const handleSignOut = () => {
    setUserData("");
    setImage("");
    navigate("/");
  };
  const handleHome = () => {
    setColor(1);
    navigate("/");
  };
  return (
    <div className="p-h">
      <div>
        <img onClick={handleHome} src={logo} alt="Logo" />
      </div>
      <div className="sections">
        <div style={getGlowStyle(1)}>
          <img src={one} alt="Flight Selection" />
          <span>Flight Selection</span>
        </div>
        <div style={getGlowStyle(2)}>
          <img src={two} alt="Review & Traveller Details" />
          <span>Review & Traveller Details</span>
        </div>
        <div style={getGlowStyle(3)}>
          <img src={three} alt="Seat & Meal" />
          <span>Seat & Meal</span>
        </div>
        <div style={getGlowStyle(4)}>
          <img src={four} alt="Payment" />
          <span>Payment</span>
        </div>
      </div>
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
          <Link to="/SignIn" className="signin2">
            <span>Log in/Sign up</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PaymentHeader;
