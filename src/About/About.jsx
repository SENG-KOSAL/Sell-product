import React from "react";
import "./About.css";
import About1 from './About1'
export default function AboutUs() {
  return (
    <>
    <div className="about-us-container">
      <h1 className="about-title">About Us</h1>
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-heading">We Are Your Favorite Store.</h2>
          <p className="about-description">
            <span className="about-dropcap">L</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Whether you're looking for athletic performance, casual comfort, or timeless elegance, we have the perfect pair for every occasion. From running shoes designed for speed to formal footwear that completes your professional look, we provide high-quality options that combine style and durability. Our extensive collection ensures that your feet feel as good as they look, with shoes that cater to all your needs, day and night.
          </p>
        </div>
        <div className="about-image">
          <img
            src="./images/product19-removebg-preview.png" // Replace with your image URL
            alt="Sugar cubes in a bowl"
          />
        </div>
      </div>
    </div>
    <hr />
    <About1/>
    </>
  );
}
