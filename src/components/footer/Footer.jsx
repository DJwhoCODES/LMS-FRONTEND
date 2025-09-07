import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; 2025 Your E-Learning Platform. All rights reserved. <br />
          Made with ❤️ <a href="">DJwhoCodes</a>
        </p>
        <div className="social-links">
          <a href="">
            <FaFacebook />
          </a>
          <a href="">
            <FaInstagramSquare />
          </a>
          <a href="">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
