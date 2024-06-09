import React, { useState, useEffect, useContext } from "react";
import "../TicketInfo/TicketInfo.css";
import PaymentHeader from "../Payment Header/PaymentHeader";
import { AppContext } from "../../App";
import percentage from "../../assets/percentage.png";
import { useNavigate } from "react-router-dom";
import fan from "../../assets/fan.png";
import seat from "../../assets/seat.png";
import narrow from "../../assets/narrow.png";
import rupee from "../../assets/rupee.png";
const TicketInfo = () => {
  const {
    ticketInfo,
    userData,
    color,
    setColor,
    contactD,
    setContactD,
    travellerD,
    setTravellerD,
    setTotal,
    total,
  } = useContext(AppContext);
  const [tax, setTax] = useState(200);

  const navigate = useNavigate();
  const handleError = () => {
    navigate("/");
  };

  useEffect(() => {
    if (ticketInfo) {
      setTotal(ticketInfo.price + tax);
    }
  }, [ticketInfo, tax]);

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
  const handleContinue = () => {
    if (
      travellerD.firstName == "" ||
      travellerD.lastName == "" ||
      travellerD.nationality == ""
    ) {
      alert("Enter all Traveller Details to continue!");
    } else if (
      contactD.phone == "" ||
      contactD.email == "" ||
      contactD.pincode == "" ||
      contactD.address == "" ||
      contactD.city == "" ||
      contactD.state == ""
    ) {
      alert("Contact Details are missing");
    } else {
      setColor(color + 1);
      navigate("/SeatInfo");
    }
  };
  const RedirectSeat = () => {
    if (userData) {
      handleContinue();
    } else {
      alert("Please log in to continue.");
    }
  };
  return (
    <div>
      <PaymentHeader />
      <div className="ticket-info">
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
                <h3>Total Amount</h3>
              </div>
              <div>
                <h4>1 Traveller</h4>
                <span>Partially Refundable</span>
                <span>{ticketInfo.price}</span>
                <span>{tax}</span>
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
        <div className="right-t">
          <div className="ticket-data">
            <div>
              <span>{ticketInfo.from} -</span>
              <span> {ticketInfo.to}</span>
            </div>
            <div>
              <span>{ticketInfo.date} .</span>
              <span>Non-stop .</span>
              <span>2h 30m .</span>
              <span>Economy</span>
            </div>
            <div>
              <img src={ticketInfo.image} alt="flight" />
              <span>{ticketInfo.name} |</span>
              <span> 6E 6022</span>
            </div>
            <div className="info-t">
              <div>
                <div>
                  <h4>{ticketInfo.date}</h4>
                  <span>{ticketInfo.from}</span>
                </div>
                <h4>- 2h 30m -</h4>
                <div>
                  <h4>{ticketInfo.date}</h4>
                  <span>{ticketInfo.to}</span>
                </div>
              </div>
              <div>
                <div>
                  <h4>Baggage</h4>
                  <span>Per Traveller</span>
                </div>
                <div>
                  <h4>Cabin</h4>
                  <span>7kg (1 piece per pax)</span>
                </div>
                <div>
                  <h4>Check-in</h4>
                  <span>15 Kg (01 piece only)</span>
                </div>
              </div>
            </div>
            <div className="seat-avail">
              <div>
                <img src={fan} alt="" />
                <span>A320</span>
              </div>
              <div>
                <img src={seat} alt="" />
                <span>Narrow</span>
              </div>
              <div>
                <img src={narrow} alt="" />
                <span>Narrow (Limited seat tilt)</span>
              </div>
            </div>
          </div>
          <div>
            {userData ? (
              <div className="traveller-details">
                <div>
                  <h3>Traveller Details</h3>
                  <div>
                    <span>
                      Choose from the saved list or add a new passenger
                    </span>
                    <span>1 Traveller</span>
                  </div>
                </div>
                <div>
                  <span>
                    Please ensure that your name matches your govt.ID such as
                    Aadhaar, Passport or Driver's License
                  </span>
                </div>
                <div>
                  <select
                    name=""
                    id=""
                    onChange={(e) =>
                      setTravellerD({ ...travellerD, title: e.target.value })
                    }
                  >
                    <option value="Mr">Mr</option>
                    <option value="Ms">Ms</option>
                    <option value="Mrs">Mrs</option>
                  </select>
                  <input
                    type="text"
                    placeholder="First & Middle Name"
                    required
                    onChange={(e) =>
                      setTravellerD({
                        ...travellerD,
                        firstName: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    onChange={(e) =>
                      setTravellerD({ ...travellerD, lastName: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Ex: India, China, USA"
                    onChange={(e) =>
                      setTravellerD({
                        ...travellerD,
                        nationality: e.target.value,
                      })
                    }
                  />
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div>
            {userData ? (
              <div className="contact-details">
                <div>
                  <h3>Contact Details</h3>
                  <span>
                    Your ticket & flight information will be sent here
                  </span>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Phone Number"
                    onChange={(e) =>
                      setContactD({ ...contactD, phone: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Email"
                    onChange={(e) =>
                      setContactD({ ...contactD, email: e.target.value })
                    }
                  />
                </div>
                <div>
                  <h3>Billing Address</h3>
                  <span>
                    As per the latest govt.regulations, it's mandatory to
                    provide your address.
                  </span>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Pincode"
                    required
                    onChange={(e) =>
                      setContactD({ ...contactD, pincode: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Address"
                    required
                    onChange={(e) =>
                      setContactD({ ...contactD, address: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="Ex:Vadodara,Mumbai...."
                    onChange={(e) =>
                      setContactD({ ...contactD, city: e.target.value })
                    }
                  />
                  <input
                    type="text"
                    placeholder="state"
                    onChange={(e) =>
                      setContactD({ ...contactD, state: e.target.value })
                    }
                  />
                </div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="continue">
            <div>
              <img src={rupee} alt="" />
              <span>{total}</span>
            </div>
            <button onClick={RedirectSeat}>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketInfo;
