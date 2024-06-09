import React from "react";
import "../Footer/Footer.css";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.div
      initial={{ y: "0px", opacity: 0 }}
      whileInView={{ y: "-20px", opacity: 1 }}
      transition={{ type: "spring", duration: 3 }}
      className="Footer"
    >
      <div className="top-f">
        <span>Subscribe News Letter & Get Latest News</span>
        <div>
          <input type="text" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="bottom-f">
        <div className="bottom-f-l">
          <img src={logo} alt="" />
          <span>Your mind should be stronger than your feelings. fly!</span>
          <div className="social">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
        </div>
        <div className="bottom-f-r">
          <div>
            <span>Information</span>
            <span>Home</span>
            <span>Flight Status</span>
            <span>Travel</span>
            <span>Check-In</span>
            <span>Manage Your Bookings</span>
          </div>
          <div>
            <span>Quick Guide</span>
            <span>FAQ</span>
            <span>Features</span>
            <span>Baggage</span>
            <span>Route Map</span>
            <span>Our communities</span>
          </div>
          <div>
            <span>Information</span>
            <span>Chauffeur</span>
            <span>Our partners</span>
            <span>Destination</span>
            <span>Transportation</span>
            <span>Programme Rules</span>
          </div>
        </div>
      </div>
      <div className="copyright">
        &copy; 2023 FlightApp Inc. All rights reserved by Rohith kumar Budumuru.
      </div>
    </motion.div>
  );
};

export default Footer;
