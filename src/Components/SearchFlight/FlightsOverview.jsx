import React, { useContext } from "react";
import "../SearchFlight/FlightsOverview.css";
import PaymentHeader from "../Payment Header/PaymentHeader";
import { AppContext } from "../../App";
import Search from "./Search";
import { useNavigate } from "react-router-dom";
const FlightsOverview = () => {
  const { info, setTicketInfo, ticketInfo, setColor, color } =
    useContext(AppContext);
  const navigate = useNavigate();
  const handleTicket = (flight) => {
    setTicketInfo({
      id: flight.id,
      name: flight.name,
      from: flight.from,
      to: flight.to,
      date: flight.date,
      price: flight.price,
      image: flight.image,
    });
    setColor(color + 1);
    navigate("/TicketInfo");
  };
  console.log(ticketInfo);
  return (
    <div className="Overview">
      <PaymentHeader />
      <div className="information">
        <Search />
        <div className="Card">
          {info && info.length > 0 ? (
            info.map((flight, i) => (
              <div className="info" key={flight.id}>
                <img src={flight.image} alt="" />
                <h2>{flight.name}</h2>
                <div>
                  <span>From: {flight.from}</span>
                </div>
                <div>
                  <span>To: {flight.to}</span>
                </div>
                <span>Date: {flight.date}</span>
                <span>Price: {flight.price}</span>
                <div className="flight-info">
                  <button onClick={() => handleTicket(flight)}>Book</button>
                  <span>Flight Details</span>
                </div>
              </div>
            ))
          ) : (
            <div className="no-flights">
              <span>No flights available.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default FlightsOverview;
