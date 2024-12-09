import React from "react";
import { Link } from "react-router-dom";

const H1 = () => {
  return (
    <section className="organic-section">
      <div className="content">
        <h5 className="badge">Best Quality Products</h5>
        <h1 className="title">Step into Comfort and Style!</h1>
        <p className="description">
          Discover the perfect pair of shoes to suit your lifestyle. From running shoes that enhance your performance to casual sneakers for everyday comfort, our collection is designed to meet all your footwear needs. Experience quality, durability, and style in every step.
        </p>
        <Link to="/product">
          <button className="shop-btn">Shop Now</button>
        </Link>
      </div>
      <div className="images">
        <img src="/images/download.png" alt="Product 1" className="product-img" />
        <img src="/images/product8-removebg-preview.png" alt="Product 2" className="product-img" />
        <img src="/images/shoe-transparent-background-12-removebg-preview.png" alt="Product 3" className="product-img" />
      </div>
    </section>
  );
};

export default H1;
