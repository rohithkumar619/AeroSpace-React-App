import React from "react";
import city1 from "../../assets/TopCities/city1.jpg";
import city2 from "../../assets/TopCities/city2.jpg";
import city3 from "../../assets/TopCities/city3.jpg";
import city4 from "../../assets/TopCities/city4.jpg";
import "../Top Travels/Travels.css";
import { motion } from "framer-motion";
const Travels = () => {
  return (
    <div className="Top">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "spring", duration: 3 }}
        className="top-tra"
      >
        <span>Top Travels of this month</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "spring", duration: 3 }}
        className="bottom-tra"
      >
        <div className="tra-img">
          <img src={city1} alt="" />
          <div className="tra-show">
            <img
              src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
              alt=""
            />
            <span>Wilson Dadsen</span>
            <span>@wilsondadesn</span>
          </div>
        </div>
        <div className="tra-img">
          <img src={city2} alt="" />
          <div className="tra-show">
            <img
              src="https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg"
              alt=""
            />
            <span>Marrie Jasmine</span>
            <span>@marriejasmine</span>
          </div>
        </div>
        <div className="tra-img">
          <img src={city3} alt="" />
          <div className="tra-show">
            <img
              src="https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?cs=srgb&dl=pexels-george-dolgikh-551816-1310522.jpg&fm=jpg"
              alt=""
            />
            <span>Black widow</span>
            <span>@blackwidow</span>
          </div>
        </div>
        <div className="tra-img">
          <img src={city4} alt="" />
          <div className="tra-show">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_1bpO0XDD8fbmRvnbnkCoQNFFoH3AqofVTg&s"
              alt=""
            />
            <span>Scralet witch</span>
            <span>@scrletwitch</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Travels;
