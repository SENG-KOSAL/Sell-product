import React from "react";
const H2= ()=>{
    return(
        <section className="features-section">
        <div className="feature-card">
          <div className="icon">🚚</div>
          <h3>Free Shipping</h3>
          <p>Above $5 only</p>
        </div>
        <div className="feature-card">
          <div className="icon">✅</div>
          <h3>Certified Organic</h3>
          <p>100% Guarantee</p>
        </div>
        <div className="feature-card">
          <div className="icon">💰</div>
          <h3>Huge Savings</h3>
          <p>At Lowest Price</p>
        </div>
        <div className="feature-card">
          <div className="icon">🔄</div>
          <h3>Easy Returns</h3>
          <p>No Questions Asked</p>
        </div>
      </section>
    );
}
export default H2;