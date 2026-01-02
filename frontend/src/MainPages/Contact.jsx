import React from "react";
import "./Contact.css";
import { FaWhatsapp, FaInstagram, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-mini-card">
        <h2 className="contact-header">Contact Us</h2>
        <p className="contact-subtext">
          We are available 24/7. Reach out to us directly through our social media or phone!
        </p>
        
        <div className="contact-actions">
          <a 
            href="https://wa.me/355698444004" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-link whatsapp"
          >
            <FaWhatsapp size={22} /> WhatsApp
          </a>
          
          <a 
            href="https://instagram.com/cleaning" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-link instagram"
          >
            <FaInstagram size={22} /> Instagram
          </a>
        </div>

        <div className="contact-direct-call">
          <span>Or call us directly: </span>
          <a href="tel:+355698444004" className="phone-number">
            <FaPhone size={16} className="me-2" /> +355 69 844 4004
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;