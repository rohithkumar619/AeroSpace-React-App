import React, { useState } from "react";
import PaymentHeader from "../Payment Header/PaymentHeader";
import "../Payment/Payment.css";
import { useContext } from "react";
import { AppContext } from "../../App";
import star from "../../assets/Payment/star.png";
import upi from "../../assets/Payment/upi.png";
import card from "../../assets/Payment/card.png";
import paylater from "../../assets/Payment/paylater.png";
import emi from "../../assets/Payment/emi.png";
import wallet from "../../assets/Payment/wallte.png";
import phonepe from "../../assets/Payment/phonepe.png";
import paytm from "../../assets/Payment/paytm.png";
import gpay from "../../assets/Payment/gpay.png";
import QR from "../../assets/Payment/QR.png";
import percent from "../../assets/Payment/percent.png";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const { ticketInfo, total, travellerD } = useContext(AppContext);
  const [show, setShow] = useState(1);
  const [credit, setCredit] = useState(1);
  const [wallets, setWallets] = useState(1);
  const [upi2, setUpi2] = useState("");
  const [paymentAmount, setPaymentAmount] = useState(0);

  const handleCredit = (prop) => {
    setCredit(prop);
  };

  const handleWallet = (prop) => {
    setWallets(prop);
  };

  const handleShow = (num) => {
    setShow(num);
  };

  const navigate = useNavigate();

  const handleError = () => {
    navigate("/");
  };

  const handleButtonPayLater = (prop) => {
    setShow(prop);
  };

  const redirectTicekt = () => {
    navigate("/Ticket");
  };
  console.log(total);
  const redirectTicekt2 = () => {
    if (paymentAmount == total) {
      navigate("/Ticket");
    } else if (upi2 == "") {
      alert("Enter UPI id");
    } else {
      alert(
        "Sorry, the amount you are paying is lesser or higher than the price"
      );
    }
  };

  return (
    <div>
      <PaymentHeader />
      {ticketInfo ? (
        <div className="payment">
          <div className="left-p">
            <div>
              <h3>Fare Summary</h3>
              <div>
                <h4>Amount To Be Paid</h4>
                <h4>{total}/-</h4>
              </div>
              <span>(349 Conv fee included)</span>
              <div>Yay! You saved 350 on this booking</div>
            </div>
            <div className="flight-info-show">
              <div>
                <h3>Your Flight</h3>
                <span>One Way</span>
              </div>
              <h4>{ticketInfo.date}</h4>
              <div>
                <img src={ticketInfo.image} alt="" />
                <div>
                  <span>10:25</span>
                  <span>{ticketInfo.from}</span>
                </div>
                <h3>4h 50m</h3>
                <div>
                  <span>15:15</span>
                  <span>{ticketInfo.to}</span>
                </div>
              </div>
              <h4>Travellers</h4>
              <div className="traveller-de">
                <span>1.{travellerD.title}</span>{" "}
                <span>{travellerD.firstName}</span>{" "}
                <span>{travellerD.lastName}</span>{" "}
                <span>{travellerD.nationality}</span>
              </div>
            </div>
          </div>
          <div className="right-p">
            <div className="right-p1">
              <div
                onClick={() => handleShow(1)}
                style={{
                  backgroundColor: show == 1 ? "rgb(45, 153, 225)" : "",
                  color: show == 1 ? "white" : "",
                }}
              >
                <img src={star} alt="" />
                <div>
                  <span>Recommended</span>
                  <span>Recently Used Methods</span>
                </div>
              </div>
              <div
                onClick={() => handleShow(2)}
                style={{
                  backgroundColor: show == 2 ? "rgb(45, 153, 225)" : "",
                  color: show == 2 ? "white" : "",
                }}
              >
                <img src={upi} alt="" />
                <div>
                  <span>Pay via any UPI app</span>
                  <span>scan and pay with UPI</span>
                </div>
              </div>
              <div
                onClick={() => handleShow(3)}
                style={{
                  backgroundColor: show == 3 ? "rgb(45, 153, 225)" : "",
                  color: show == 3 ? "white" : "",
                }}
              >
                <img src={card} alt="" />
                <div>
                  <span>Credit/Debit/ATM Card</span>
                  <span>VSA,Mastercard,Amex,Rupay & more</span>
                </div>
              </div>
              <div
                onClick={() => handleShow(4)}
                style={{
                  backgroundColor: show == 4 ? "rgb(45, 153, 225)" : "",
                  color: show == 4 ? "white" : "",
                }}
              >
                <img src={paylater} alt="" />
                <div>
                  <span>Pay Later & Easy EMI</span>
                  <span>Simpl Bajaj & more</span>
                </div>
              </div>
              <div
                onClick={() => handleShow(5)}
                style={{
                  backgroundColor: show == 5 ? "rgb(45, 153, 225)" : "",
                  color: show == 5 ? "white" : "",
                }}
              >
                <img src={emi} alt="" />
                <div>
                  <span>EMI</span>
                  <span>Credit / Debit Card EMI options</span>
                </div>
              </div>
              <div
                onClick={() => handleShow(6)}
                style={{
                  backgroundColor: show == 6 ? "rgb(45, 153, 225)" : "",
                  color: show == 6 ? "white" : "",
                }}
              >
                <img src={wallet} alt="" />
                <div>
                  <span>Wallets</span>
                  <span>Mobiwik & Amazon Pay</span>
                </div>
              </div>
            </div>
            <div className="right-p2">
              {show == 1 ? (
                <div className="recommended">
                  <div>
                    <div>
                      <h4>Scan & Pay with UPI</h4>
                      <span>1. Open any UPI or banking app on your phone.</span>
                      <span>2. Scan the QR code to pay</span>
                      <div className="digital">
                        <img src={paytm} alt="" />
                        <img src={phonepe} alt="" />
                        <img src={gpay} alt="" />
                        <img src={upi} alt="" />
                        <img src={card} alt="" />
                      </div>
                      <div className="cashback">
                        <img src={percent} alt="" />
                        <span>
                          Get up to 1000 cashback on Rupay Credit Card via
                          PhonePe UPI
                        </span>
                      </div>
                    </div>
                    <div className="qr">
                      <img src={QR} alt="" />
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              {show == 2 ? (
                <form className="upi">
                  <div>
                    <div>
                      <h4>Scan & Pay with UPI</h4>
                      <span>1. Open any UPI or banking app on your phone.</span>
                      <span>2. Scan the QR code to pay</span>
                      <div className="digital">
                        <img src={paytm} alt="" />
                        <img src={phonepe} alt="" />
                        <img src={gpay} alt="" />
                        <img src={upi} alt="" />
                        <img src={card} alt="" />
                      </div>
                      <div className="cashback">
                        <img src={percent} alt="" />
                        <span>
                          Get up to 1000 cashback on Rupay Credit Card via
                          PhonePe UPI
                        </span>
                      </div>
                    </div>
                    <div className="qr">
                      <img src={QR} alt="" />
                    </div>
                  </div>
                  <div className="UPI">
                    <h3>Enter UPI ID Manually</h3>
                    <div>
                      <input
                        type="text"
                        placeholder="UPI"
                        onChange={(e) => setUpi2(e.target.value)}
                        required
                      />
                      <input
                        type="number"
                        placeholder="Payment Amount"
                        onChange={(e) => setPaymentAmount(e.target.value)}
                        required
                      />
                      <button type="button" onClick={redirectTicekt2}>
                        Pay {total}
                      </button>
                    </div>
                  </div>
                </form>
              ) : (
                ""
              )}
              {show == 3 ? (
                <form className="credit-card">
                  <h4>Add New Card</h4>
                  <input type="text" placeholder="Card Number" required />
                  <div>
                    <input
                      type="text"
                      placeholder="Exp. Date (MM/YY)"
                      required
                    />
                    <input type="text" placeholder="CVV" required />
                  </div>
                  <div className="cashback2">
                    <img src={percent} alt="" />
                    <span>
                      Get up to 200 cashback on Rupay Credit Card via PhonePe
                      UPI
                    </span>
                  </div>
                  <button type="button">Securely Pay {total}/-</button>
                </form>
              ) : (
                ""
              )}
              {show == 4 ? (
                <div className="paylater">
                  <span>
                    Sorry, Something went wrong try other payment methods
                  </span>
                  <button onClick={() => handleButtonPayLater(2)}>UPI</button>
                  <button onClick={() => handleButtonPayLater(3)}>
                    Pay with Credit or Debit Card
                  </button>
                  <button onClick={() => handleButtonPayLater(5)}>EMI</button>
                  <button onClick={() => handleButtonPayLater(6)}>
                    Wallets
                  </button>
                </div>
              ) : (
                ""
              )}
              {show == 5 ? (
                <div className="EMI">
                  <h4>Popular EMI Plans</h4>
                  <div>
                    <button
                      onClick={() => handleCredit(1)}
                      style={{
                        backgroundColor: credit == 1 ? "rgb(45, 153, 225)" : "",
                        color: credit == 1 ? "white" : "",
                      }}
                    >
                      Credit Card
                    </button>
                    <button
                      onClick={() => handleCredit(2)}
                      style={{
                        backgroundColor: credit == 2 ? "rgb(45, 153, 225)" : "",
                        color: credit == 2 ? "white" : "",
                      }}
                    >
                      Debit Card
                    </button>
                  </div>
                  {credit == 1 && (
                    <div className="creditcard">
                      <div>
                        <img
                          src="https://i.pinimg.com/474x/12/7d/0d/127d0d77e3ee6ab6dbe58307a0e01f95.jpg"
                          alt=""
                        />
                        <div>
                          <span>Axis Bank</span>
                          <span>Starting from 2217.15/month</span>
                        </div>
                      </div>
                      <div>
                        <img
                          src="https://i.pinimg.com/originals/64/19/09/641909d6f37f5523a915b48a0a74a10c.png"
                          alt=""
                        />
                        <div>
                          <span>Bank of Baroda</span>
                          <span>Starting from 2217.15/month</span>
                        </div>
                      </div>
                      <div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-Z61I42-kw6emsc76HDEsNZ2DFNwxaNViw&s"
                          alt=""
                        />
                        <div>
                          <span>Canara Bank</span>
                          <span>Starting from 2217.15/month</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {credit == 2 && (
                    <div className="creditcard">
                      <div>
                        <img
                          src="https://ibsintelligence.com/wp-content/uploads/2020/02/SBI.jpg"
                          alt=""
                        />
                        <div>
                          <span>SBI</span>
                          <span>Starting from 3517.15/month</span>
                        </div>
                      </div>
                      <div>
                        <img
                          src="https://i.pinimg.com/originals/64/19/09/641909d6f37f5523a915b48a0a74a10c.png"
                          alt=""
                        />
                        <div>
                          <span>Bank of Baroda</span>
                          <span>Starting from 3217.15/month</span>
                        </div>
                      </div>
                      <div>
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9YKDb2xPyGXQEY0txNy2r305v0PT0FVMl2g&s"
                          alt=""
                        />
                        <div>
                          <span>Union Bank of India</span>
                          <span>Starting from 3517.15/month</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                ""
              )}
              {show == 6 ? (
                <div className="wallets">
                  <div onClick={() => handleWallet(1)}>
                    <div>
                      <img
                        src="https://pbs.twimg.com/profile_images/1516659729946218506/F3fb1zVC_400x400.png"
                        alt=""
                      />
                      <span>MobiKwik</span>
                    </div>
                    {wallets == 1 ? (
                      <button className="wall" onClick={redirectTicekt}>
                        Link & Securely Pay {total}/-
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                  <div onClick={() => handleWallet(2)}>
                    <div>
                      <img
                        src="https://commercemarketplace.adobe.com/media/catalog/product/a/f/afe9_logo_3.png"
                        alt=""
                      />
                      <span>Amazon Pay</span>
                    </div>
                    {wallets == 2 ? (
                      <button className="wall" onClick={redirectTicekt}>
                        Link & Securely Pay {total}/-
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="error">
          <h3>Oops, something went wrong!</h3>
          <p>An unexpected error occurred. Please try again later.</p>
          <button onClick={handleError}>Go back to Home</button>
        </div>
      )}
    </div>
  );
};

export default Payment;
