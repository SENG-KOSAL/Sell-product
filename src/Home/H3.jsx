import React from "react";
import "../Home/H3.css";
import "../Home/H3.css";
function H3() {
  return (
    <div className="product-page">
      <section className="best-sellers">
        <h2>Best Selling Products</h2>
        <div className="products">
          <div className="product">
            <img src="/images/product8.jpg" alt="Product 1" />
            <h3>RUNNING SHOES</h3>
            <p>Footwear</p>
            <p>⭐⭐⭐⭐⭐</p>
            <p>$50.00</p>
          </div>
          <div className="product">
            <img src="/images/product5.jpg" alt="Product 2" />
            <h3>HIKING BOOTS</h3>
            <p>Footwear</p>
            <p>⭐⭐⭐⭐⭐</p>
            <p>$80.00</p>
          </div>
          <div className="product">
            <img src="/images/product6.jpg" alt="Product 3" />
            <h3>CASUAL SNEAKERS</h3>
            <p>Footwear</p>
            <p>⭐⭐⭐⭐⭐</p>
            <p>$40.00</p>
          </div>
          <div className="product">
            <img src="/images/product7.jpg" alt="Product 4" />
            <h3>FORMAL SHOES</h3>
            <p>Footwear</p>
            <p>⭐⭐⭐⭐⭐</p>
            <p>$60.00</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default H3;
