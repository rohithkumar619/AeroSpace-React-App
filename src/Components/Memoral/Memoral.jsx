import React from "react";
import "../Memoral/Memoral.css";
import date from "../../assets/Memoral/date.png";
import save from "../../assets/Memoral/save.png";
import shield from "../../assets/Memoral/shield.png";
import { motion } from "framer-motion";
const Memoral = () => {
  return (
    <div className="Memoral">
      <div className="left-m">
        <motion.span
          initial={{ x: "30px", opacity: 0 }}
          whileInView={{ x: "0px", opacity: 1 }}
          transition={{ type: "spring", duration: 3 }}
        >
          Travel to make memories all around the world
        </motion.span>
        <button>View All</button>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "spring", duration: 3 }}
        className="right-m"
      >
        <div>
          <img src={date} alt="" />
          <span>Book & Relax</span>
          <span>
            You can also call airlines from your phone and book a Right ticket!
          </span>
        </div>
        <div>
          <img src={shield} alt="" />
          <span>Smart Checklist</span>
          <span>
            You can also call airlines from your phone and book a Right ticket!
          </span>
        </div>
        <div>
          <img src={save} alt="" />
          <span>Save More</span>
          <span>
            You can also call airlines from your phone and book a Right ticket!
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Memoral;
