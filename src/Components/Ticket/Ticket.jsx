import React from "react";
import "../Ticket/Ticket.css";
import { useContext } from "react";
import { AppContext } from "../../App";
import barcode from "../../assets/barcode.gif";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
const Ticket = () => {
  const { ticketInfo, travellerD, selectedSeat } = useContext(AppContext);
  const navigate = useNavigate();
  const handleError = () => {
    navigate("/");
  };
  const handleDownload = () => {
    const ticketElement = document.querySelector(".flight-ticket");
    html2canvas(ticketElement, {
      scale: 3, // Increase scale for better quality
      useCORS: true, // To avoid cross-origin issues
      backgroundColor: null, // Capture the background as transparent
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdfWidth = canvas.width / 3; // Scaling down the width to fit the PDF
      const pdfHeight = canvas.height / 3; // Scaling down the height to fit the PDF
      const pdf = new jsPDF(pdfWidth > pdfHeight ? "l" : "p", "px", [
        pdfWidth,
        pdfHeight,
      ]);

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("ticket.pdf");
    });
  };
  return (
    <div className="Ticket">
      <Header />
      {ticketInfo ? (
        <div className="ticket-page">
          <div className="flight-ticket">
            <div className="l-t">
              <div
                style={{
                  backgroundColor:
                    ticketInfo.name == "IndiGo"
                      ? "rgb(0, 27, 148)"
                      : ticketInfo.name == "SpiceJet"
                      ? "#e41118"
                      : ticketInfo.name == "Air India Express"
                      ? "red"
                      : ticketInfo.name == "Vistara"
                      ? "rgb(71, 20, 61)"
                      : ticketInfo.name == "GoAir"
                      ? "purple"
                      : "",

                  color: "white",
                }}
              >
                <img src={ticketInfo.image} alt="" />
                <div>
                  <img
                    src="https://png.pngtree.com/png-vector/20220616/ourmid/pngtree-silhouettes-of-planes-on-a-white-background-png-image_5050343.png"
                    alt=""
                  />
                  <span>{ticketInfo.name}</span>
                </div>

                <span>BOARDING PASS</span>
              </div>
              <div>
                <div>
                  <img src={barcode} alt="" />
                </div>
                <div>
                  <div>
                    <span>Name of Passenger:</span>
                    <span>
                      {travellerD.firstName} {travellerD.lastName}
                    </span>
                  </div>
                  <div>
                    <span>From: {ticketInfo.from}</span>
                    <span>To: {ticketInfo.to}</span>
                  </div>
                  <div>
                    <span>Gate</span>
                    <span>K18</span>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <span>Carrier: AC</span>
                    </div>
                    <div>
                      <span>Date: {ticketInfo.date}</span>
                    </div>
                    <div>
                      <span>BOARDING TIME</span>
                      <span>03:30</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div>
                    <div>
                      <span>Flight No: 650325</span>
                      <span>Class: A</span>
                    </div>
                    <div>
                      <span>Luggage: Y</span>
                      <span>Seat: {selectedSeat}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="r-t">
              <div
                style={{
                  backgroundColor:
                    ticketInfo.name == "IndiGo"
                      ? "rgb(0, 27, 148)"
                      : ticketInfo.name == "SpiceJet"
                      ? "#e41118"
                      : ticketInfo.name == "Air India Express"
                      ? "red"
                      : ticketInfo.name == "Vistara"
                      ? "rgb(71, 20, 61)"
                      : ticketInfo.name == "GoAir"
                      ? "purple"
                      : "",

                  color: "white",
                }}
              >
                BOARDING PASS
              </div>
              <div>
                <div>
                  <span>Name of Passenger:</span>
                  <span>
                    {travellerD.firstName} {travellerD.lastName}
                  </span>
                </div>
                <div>
                  <span>From: {ticketInfo.from}</span>
                  <span>To: {ticketInfo.to}</span>
                </div>
                <div>
                  <span>Seat : {selectedSeat}</span>
                  <span>Date: {ticketInfo.date}</span>
                </div>
                <div>
                  <span>Gate</span>
                  <span>K18</span>
                </div>
              </div>
            </div>
          </div>
          <div className="ticket-d">
            <button onClick={handleError}>Go back to home</button>
            <button onClick={handleDownload}>Download Ticket as PDF</button>
          </div>
        </div>
      ) : (
        <div className="error">
          <h3>Oops, something went wrong!</h3>
          <p>An unexpected error occurred. Please try again later.</p>
          <button onClick={handleError}>Go back to Home </button>
        </div>
      )}
    </div>
  );
};

export default Ticket;
