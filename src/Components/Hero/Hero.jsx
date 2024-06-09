import React from "react";
import back from "../../assets/Hero/backvideo.mp4";
import plane from "../../assets/Hero/plane3.png";
import "../Hero/Hero.css";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="hero">
      <div className="Hero">
        <motion.div
          className="top-h"
          initial={{ y: "0px", opacity: 0 }}
          whileInView={{ y: "-30px", opacity: 1 }}
          transition={{ type: "spring", duration: 3 }}
        >
          Create Ever-lasting Memories With Us
        </motion.div>
        <motion.div
          className="bottom-h"
          initial={{ y: "0px" }}
          whileInView={{ y: "20px" }}
          transition={{ type: "spring", duration: 3 }}
        >
          <video className="back" autoPlay loop muted>
            <source className="backvideo" src={back} type="video/mp4" />
          </video>
          <motion.img
            initial={{ top: "0px", right: "0px" }}
            whileInView={{ y: "-30px", right: "-50px" }}
            transition={{ type: "spring", duration: 3 }}
            className="plane"
            src={plane}
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
