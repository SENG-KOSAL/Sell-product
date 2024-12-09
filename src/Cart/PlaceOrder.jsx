import React, { useState } from "react";
import "./PlaceOrder.css";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
export default function PlaceOrder() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "creditCard",
  });
  const navigate = useNavigate();
  const { cartItems } = useCart();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    console.log("Order Details:", formData);
    // Navigate to PaymentConfirmation and pass phone data
    navigate("/PaymentConfirmation", { state: { phone: formData.phone } });
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="page-container">
      {/* Place Order Section */}
      <div className="place-order-container">
        <h1>Place Your Order</h1>
        <form className="place-order-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Shipping Address</label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your shipping address"
              rows="3"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label>Payment Method</label>
            <div className="payment-options">
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="creditCard"
                  checked={formData.paymentMethod === "creditCard"}
                  onChange={handleChange}
                />
                Credit Card
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={formData.paymentMethod === "paypal"}
                  onChange={handleChange}
                />
                PayPal
              </label>
              <label>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cashOnDelivery"
                  checked={formData.paymentMethod === "cashOnDelivery"}
                  onChange={handleChange}
                />
                Cash on Delivery
              </label>
            </div>
          </div>
          <button type="submit" className="submit-btn" onClick={()=>navigate('/PaymentConfirmation')}>
            Order
          </button>
        </form>
      </div>

      {/* Cart Section */}
      <div className="cart-container">
        <h1>Your Order</h1>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : 
        (

          <>
            <ul className="cart-items">
              {cartItems.map((item) => (
                <li key={item.id} className="cart-item">
                  <img
                    src={`http://localhost:3000${item.image}`}
                    alt={item.name}
                    width="50"
                  />
                  <div className="cart-item-info">
                    <h2>{item.name}</h2>
                    <p>Category: {item.category}</p>
                    <p>Price: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="cart-summary">
              <h2>Total Items: {totalItems}</h2>
              <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
