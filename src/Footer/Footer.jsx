import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
        <ul className="social-links">
          <li><a href="https://facebook.com" aria-label="Facebook"><FaFacebookF /></a></li>
          <li><a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a></li>
          <li><a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
