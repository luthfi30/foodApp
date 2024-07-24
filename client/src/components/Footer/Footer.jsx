import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo2} width={120} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora incidunt quae cupiditate repudiandae nihil officiis blanditiis rerum, doloribus minima dolor, veniam impedit sapiente laboriosam reprehenderit eos! Ea repudiandae
            maiores expedita!
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>123 Street, New York, USA</li>
            <li>+012 345 67890</li>
            <li>6L9rK@example.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright ©2024 All rights reserved</p>
    </div>
  );
};

export default Footer;
