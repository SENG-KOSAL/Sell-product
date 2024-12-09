import React from "react";
import { Link } from "react-router-dom";

function H4() {
  return (
    <div className="product-page">
      <section className="categories">
        <div className="category">
          <h3>Sport Shoes</h3>
          <p>Stay active and stylish with our top-quality sports shoes.</p>
          <Link to="/product">
            <button className="shop-btn"> Shop Now</button>
          </Link>
          <img src="/images/product19-removebg-preview.png" alt="Sport Shoes" />
        </div>
        <div className="category">
          <h3>Casual Shoes</h3>
          <p>Perfect comfort and style for your everyday look.</p>
          <Link to="/product">
            <button className="shop-btn"> Shop Now</button>
          </Link>
          <img
            src="/images/modern-shoe-concept-design-ideas-fitness-shoes-running-shoe-running-shoes-jogger-safety-shoes-train_569725-35941-removebg-preview.png"
            alt="Casual Shoes"
          />
        </div>
        <div className="category">
          <h3>Formal Shoes</h3>
          <p>Elevate your office wear with our premium formal shoes.</p>
          <Link to="/product">
            <button className="shop-btn"> Shop Now</button>
          </Link>
          <img
            src="/images/Health-KM3-Full-Length-Carbon-Plate-Running-Shoes-Examination-Sports-Track-and-Field-Training-Sprint-Competitions-Sneakers_9bb058d3-c8a9-4b01-8e6a-8264d59b1700.44e8bf25d2deabceb28a16c4689ba4e2-removeb.png"
            alt="Formal Shoes"
          />
        </div>
      </section>

      <footer className="promo">
        <h2>Get 25% off On Your First Shoe Purchase!</h2>
        <Link to="/product">
          <button style={{ display: "block", margin: "0 auto 0 0" }}>
            Shop Now
          </button>
        </Link>
        <p>Try It For Free. No Register Needed.</p>
      </footer>
    </div>
  );
}

export default H4;
