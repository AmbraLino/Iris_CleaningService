import React from "react";
import "./Footer.css";
import logo1 from "../Images/logo4.jpeg";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <img src={logo1} alt="Logo" className="footer-logo-img" />
          <h3 className="connect-title">CONNECT WITH US</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-column">
            <h3 className="footer-title">Cleaning Services</h3>
            {isHomePage ? (
              <ScrollLink to="about" smooth={true} duration={500} offset={-70} className="footer-info" style={{ cursor: 'pointer' }}>
                About Us
              </ScrollLink>
            ) : (
              <RouterLink to="/" className="footer-info">About Us</RouterLink>
            )}

            {isHomePage ? (
              <ScrollLink to="contact" smooth={true} duration={500} offset={-70} className="footer-info" style={{ cursor: 'pointer' }}>
                Contact
              </ScrollLink>
            ) : (
              <RouterLink to="/" className="footer-info">Contact</RouterLink>
            )}
            <RouterLink to="/services" className="footer-info">Services</RouterLink>
          </div>

          <div className="footer-column">
            <h3 className="footer-title">Contact Information</h3>
            <a href="tel:+0123456789" className="footer-info">+0123-456-789</a>
            <a href="mailto:cleaningServices@Germany.com" className="footer-info">cleaningServices@Germany.com</a>
            <span className="footer-info">Germany</span>
          </div>
        </div>
      </div>

      <div className="footer-line"></div>
      <div className="footer-terms">© 2024 – {new Date().getFullYear()} Cleaning Service</div>
    </footer>
  );
};

export default Footer;