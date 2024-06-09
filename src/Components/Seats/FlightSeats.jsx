import React, { useState } from "react";
import "./FlightSeats.css";
import { useContext } from "react";
import { AppContext } from "../../App";
const FlightSeats = () => {
  const totalSeats = 120;
  const { selectedSeat, setSelectedSeat, seatCost, setSeatCost } =
    useContext(AppContext);
  const getSeatCost = (seatNumber) => {
    if (
      (seatNumber >= 1 && seatNumber <= 10) ||
      (seatNumber >= 101 && seatNumber <= 110)
    ) {
      return 200;
    }
    return 0;
  };

  const handleSeatClick = (seatNumber) => {
    const cost = getSeatCost(seatNumber);
    setSelectedSeat(seatNumber);
    setSeatCost(cost);
  };

  const renderSeats = () => {
    let seats = [];
    for (let i = 1; i <= totalSeats; i++) {
      seats.push(
        <div
          key={i}
          className={`seat ${selectedSeat === i ? "selected" : ""}`}
          onClick={() => handleSeatClick(i)}
          title={`Seat ${i} - ${getSeatCost(i) === 200 ? "₹200" : "Free"}`} // Tooltip on hover
        >
          {i}
        </div>
      );
      if (i === 60) {
        seats.push(<div key="spacer" className="row-gap"></div>);
      }
    }
    return seats;
  };

  return (
    <div className="flight-seats">
      <h3>Select Your Seat</h3>
      <div className="seats-container">
        {renderSeats()}
        <span className="front">Front</span>
        <span className="back2">Back</span>
      </div>
      {selectedSeat && (
        <div className="selected-seat-info">
          <p>Selected Seat: {selectedSeat}</p>
          <p>Cost: ₹{seatCost}</p>
        </div>
      )}
    </div>
  );
};

export default FlightSeats;
