import React from "react";
import "./PaymentConfirmation.css";
import { useCart } from "./CartContext";
import { useLocation } from "react-router-dom";


const PaymentConfirmation = () => {
  const date = new Date().toLocaleString();
  const location = useLocation();
  const { phone } = location.state || {};
  const { cartItems } = useCart();
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  return (
    <div className="confirmation-container">
      <div className="confirmation-content">
        <div className="confirmation-check">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            fill="green"
            viewBox="0 0 16 16"
          >
            <path d="M16 2L5.5 12.5 2 9l1.5-1.5L5.5 9.5 14.5 0z" />
          </svg>
        </div>
        <h2>Payment Successful</h2>
        <p>Thank you for your purchase!</p>
        <div className="confirmation-details">
          <div>
            <span>Amount Paid</span> ${totalPrice.toFixed(2)}
          </div>
          <div>
            <span>Date & Time:</span> {date}
          </div>
          <div>
            <span>Reference Number:</span> {phone || "N/A"}
            
          </div>
        </div>

        <button
          className="home-button"
          onClick={() => (window.location.href = "/")}
        >
          Return to Homepage
        </button>
      </div>
    </div>
  );
};

export default PaymentConfirmation;
// {cartItems.length === 0 ? (
//   <p>Thank you for your purchase!</p>
// ):
// (
//   <>
  

  
//   </>
// )}