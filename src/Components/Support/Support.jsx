import React from "react";
import "../Support/Support.css";
import plane1 from "../../assets/Support/plane1.jpg";
import plane2 from "../../assets/Support/plane2.jpg";
import plane3 from "../../assets/Support/plane3.jpg";
import { motion } from "framer-motion";
const Support = () => {
  return (
    <div className="support">
      <div className="Support">
        <motion.div
          initial={{ x: "0px", opacity: 0 }}
          whileInView={{ x: "30px", opacity: 1 }}
          transition={{ type: "spring", duration: 3 }}
          className="left-support"
        >
          <div>
            <span>01</span>
            <span>Travel requirements for Dubai</span>
            <span>
              Find help with booking and travel plans, see what to expect along
              the joureny to your favourite destinations!
            </span>
          </div>
          <div>
            <span>02</span>
            <span>Chauffeur services at your arrival</span>
            <span>
              Find help with booking and travel plans, see what to expect along
              the joureny to your favourite destinations!
            </span>
          </div>
          <div>
            <span>03</span>
            <span>Multi-risk travel insurance</span>
            <span>
              Find help with booking and travel plans, see what to expect along
              the joureny to your favourite destinations!
            </span>
          </div>
        </motion.div>
        <div className="right-support">
          <motion.img
            initial={{ y: "0px" }}
            whileInView={{ y: "-30px" }}
            transition={{ type: "spring", duration: 3 }}
            src={plane1}
            className="img"
            alt=""
          />
          <motion.img
            initial={{ x: "30px" }}
            whileInView={{ x: "0px" }}
            transition={{ type: "spring", duration: 3 }}
            src={plane2}
            className="img1"
            alt=""
          />
          <motion.img
            initial={{ x: "-30px" }}
            whileInView={{ x: "0px" }}
            transition={{ type: "spring", duration: 3 }}
            className="img2"
            src={plane3}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Support;
