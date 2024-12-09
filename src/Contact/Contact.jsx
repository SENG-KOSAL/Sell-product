import React from "react";
import "./Contact.css";

export default function ContactFAQ() {
  return (
    <div className="contact-faq-container">
      <section className="get-in-touch">
        <h1>Get In Touch</h1>
        <div className="contact-methods">
          <div className="contact-card">
            <span className="contact-icon">📞</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          </div>
          <div className="contact-card">
            <span className="contact-icon">📧</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          </div>
          <div className="contact-card">
            <span className="contact-icon">📍</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
          </div>
        </div>
      </section>

      <section className="faq">
        <h2>Frequently Asked Questions!</h2>
        <div className="faq-questions">
          <div className="faq-item">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
            <span className="arrow-icon">▶</span>
          </div>
          <div className="faq-item">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
            <span className="arrow-icon">▶</span>
          </div>
          <div className="faq-item">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
            <span className="arrow-icon">▶</span>
          </div>
          <div className="faq-item">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
            <span className="arrow-icon">▶</span>
          </div>
          <div className="faq-item">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
            <span className="arrow-icon">▶</span>
          </div>
        </div>
      </section>
    </div>
  );
}
