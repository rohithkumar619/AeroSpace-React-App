import { React, useState, useEffect } from "react";
import "../SeatInfo/SeatInfo.css";
import FlightSeats from "../Seats/FlightSeats";
import percentage from "../../assets/percentage.png";
import PaymentHeader from "../Payment Header/PaymentHeader";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";
import rupee from "../../assets/rupee.png";
const SeatInfo = () => {
  const { ticketInfo, selectedSeat, seatCost, total, setTotal, setColor } =
    useContext(AppContext);
  const [tax, setTax] = useState(300);

  const navigate = useNavigate();
  useEffect(() => {
    if (ticketInfo) {
      setTotal(ticketInfo.price + tax + seatCost);
    }
  }, [ticketInfo, tax, seatCost]);
  const handleError = () => {
    navigate("/");
  };
  if (!ticketInfo) {
    return (
      <div>
        <PaymentHeader />
        <div className="no-ticket-info">
          <span>No ticket information available.</span>
          <button onClick={handleError}>Go back to Home </button>
        </div>
      </div>
    );
  }
  const handleContinue2 = () => {
    if (selectedSeat == null) {
      alert("Please Select Your Seat");
    } else {
      setColor(4);
      navigate("/Payment");
    }
  };
  return (
    <div>
      <PaymentHeader />
      <div className="seat-selection2">
        <div className="left-t">
          <div className="fare">
            <div>
              <img src={percentage} alt="percentage" />
              <span>
                Log in to access amazing offers & redeem AeroSpace money on your
                flight booking.
              </span>
            </div>
            <div className="fare-summary">
              <div>
                <h3>Fare Summary</h3>
                <span>Fare Type</span>
                <span>Base Fare</span>
                <span>Taxes & Fees</span>
                <span>Seat Cost</span>
                <h3>Total Amount</h3>
              </div>
              <div>
                <h4>1 Traveller</h4>
                <span>Partially Refundable</span>
                <span>{ticketInfo.price}</span>
                <span>{tax}(+100)</span>
                <span>{seatCost}</span>
                <h3>{total}/-</h3>
              </div>
            </div>
          </div>
          <div className="policy">
            <div>
              By clicking on continue, I confirm that i have read, understood,
              and agree with the <span>Fare Rules, Privacy Policy</span> and
              <span> Terms of the Use</span>
            </div>
            <span>100% Safe Payment Process</span>
            <div>
              <img
                src="https://static-00.iconduck.com/assets.00/payment-visa-verified-icon-2048x878-1oes6l3d.png"
                alt=""
              />
              <img
                src="https://seekvectorlogo.com/wp-content/uploads/2020/03/american-express-safekey-vector-logo.png"
                alt=""
              />
              <img
                src="https://logowik.com/content/uploads/images/mastercard-securecode6659.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <FlightSeats />
      </div>
      <div className="continue">
        <div>
          <img src={rupee} alt="" />
          <span>{total}</span>
        </div>
        <button onClick={handleContinue2}>Continue</button>
      </div>
    </div>
  );
};

export default SeatInfo;
