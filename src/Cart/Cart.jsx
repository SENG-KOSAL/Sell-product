import React from "react";
import { useCart } from "./CartContext";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const {
    cartItems,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const buyNow = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty! Add items to purchase.");
      return;
    }
    // Example action for the Buy Now button
    alert("Proceeding to checkout with your items!");
    console.log("Purchased Items:", cartItems);
    // Redirect to a checkout page or handle payment here
  };
  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
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

                  <div className="quantity-controls">
                    <button
                      className="decrease-btn"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="increase-btn"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
            <button className="clear-cart-btn" onClick={clearCart}>
              Clear Cart
            </button>
            <button
              className="buy-now-btn"
              onClick={() => navigate("/PlaceOrder")}
            >
              PROCESSD TO CHECKOUT
            </button>
          </div>
        </>
      )}
    </div>
  );
}
