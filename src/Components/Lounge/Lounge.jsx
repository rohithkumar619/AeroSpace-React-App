import React from "react";
import "../Lounge/Lounge.css";
import air1 from "../../assets/AirHostess/airhostess.jpg";
import air2 from "../../assets/AirHostess/airhostess1.jpg";
import { motion } from "framer-motion";

const Lounge = () => {
  return (
    <div className="lounge">
      <div className="Lounge">
        <motion.div
          initial={{ x: "0px", opacity: 0 }}
          whileInView={{ x: "30px", opacity: 1 }}
          transition={{ type: "spring", duration: 3 }}
          className="left-l"
        >
          <span>Unaccompanied Minor Lounge</span>
          <div>
            <div>
              <span>Help through the airport</span>
              <span>
                You can also call airlines from your phone and book a flight
                ticket to one of yoyr favourite destinations.
              </span>
            </div>
            <div>
              <span>Care on the flight</span>
              <span>
                You can also call airlines from your phone and book a flight
                ticket to one of yoyr favourite destinations.
              </span>
            </div>
          </div>
          <div>
            <div>
              <span>Priority Boarding</span>
              <span>
                You can also call airlines from your phone and book a flight
                ticket to one of yoyr favourite destinations.
              </span>
            </div>
            <div>
              <span>Chauffeur-drive service</span>
              <span>
                You can also call airlines from your phone and book a flight
                ticket to one of yoyr favourite destinations.
              </span>
            </div>
          </div>
        </motion.div>
        <div className="right-l">
          <motion.img
            initial={{ x: "0px" }}
            whileInView={{ x: "-30px" }}
            transition={{ type: "spring", duration: 3 }}
            src={air1}
            alt=""
          />
          <motion.img
            initial={{ x: "-30px" }}
            whileInView={{ x: "0px" }}
            transition={{ type: "spring", duration: 3 }}
            src={air2}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Lounge;
