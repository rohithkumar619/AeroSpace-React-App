import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";
import location from "../../assets/SearchFlight/location.png";
import travels from "../../assets/SearchFlight/travels.png";
import date from "../../assets/SearchFlight/date.png";
import { motion } from "framer-motion";
import { AppContext } from "../../App";
import { Flights } from "../Flights Information/Flights";

const Search = () => {
  const navigate = useNavigate();
  const { airline, setAirline, setInfo, info } = useContext(AppContext);

  const handleInfo = () => {
    const filteredFlights = Flights.filter((flight) => {
      return (
        (!airline.from ||
          flight.from.toLowerCase().includes(airline.from.toLowerCase())) &&
        (!airline.date ||
          flight.date.toLowerCase().includes(airline.date.toLowerCase())) &&
        (!airline.to ||
          flight.to.toLowerCase().includes(airline.to.toLowerCase())) &&
        (!airline.travels || flight.type === airline.travels)
      );
    });
    setInfo(filteredFlights);
    navigate("/FlightsOverview", { state: { flights: filteredFlights } });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAirline((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  console.log(info);
  return (
    <div className="search">
      <div className="Search">
        <span>Economy</span>
        <span>Business Class</span>
        <span>First Class</span>
      </div>
      <div className="dest">
        <div>
          <div>
            <img src={location} alt="Location" />
          </div>
          <div className="tra">
            <span>From</span>
            <input
              type="text"
              name="from"
              value={airline.from}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <div>
            <img src={location} alt="Location" />
          </div>
          <div className="tra">
            <span>To</span>
            <input
              type="text"
              name="to"
              value={airline.to}
              onChange={handleChange}
            />
          </div>
        </div>
        <div>
          <div>
            <img src={travels} alt="Travels" />
          </div>
          <div className="tra">
            <span>Travels</span>
            <select
              name="travels"
              value={airline.travels}
              onChange={handleChange}
            >
              <option value="">Select an airline</option>
              <option value="Air India">Air India</option>
              <option value="IndiGo">IndiGo</option>
              <option value="SpiceJet">SpiceJet</option>
              <option value="GoAir">GoAir</option>
              <option value="Vistara">Vistara</option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <img src={date} alt="Date" />
          </div>
          <div className="tra">
            <span>Add Date</span>
            <input
              type="date"
              name="date"
              value={airline.date}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="buttonclass">
          <button onClick={handleInfo}>Search Flight</button>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ type: "spring", duration: 3 }}
        className="searchsupport"
      >
        <span>TRAVEL SUPPORT</span>
        <span>Plan your travel with confidence</span>
        <span>
          Find help with booking and travel plans, see what to expect along the
          journey!
        </span>
      </motion.div>
    </div>
  );
};

export default Search;
