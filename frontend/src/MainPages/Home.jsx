import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import carpet from '../Images/carpet.jpg';
import cottonspray from '../Images/cottonspray.jpg';
import window from '../Images/window.jpg';
import photo5 from "../Images/service.PNG";
import photo from "../Images/room1.jpg";

const servicesData = [
  { title: "CARPET CLEANING", image: carpet },
  { title: "Domestic Cleaning", image: cottonspray },
  { title: "End Of Tenancy", image: window },
];


const Home = () => {
  const navigate = useNavigate();

  const handleBookClick = (serviceTitle) => {
    navigate('/booking', { state: { service: serviceTitle } });
  };

  const heroStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${photo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div className="home-page">

      <section className="cleaning-hero-section" style={heroStyle}>
        <div className="hero-content">
          <h1 className="hero-title">Refreshing Spaces, One Perfect Clean at a Time</h1>
          <p className="hero-subtitle">
            Ready to experience the difference? Book your cleaning service today!
          </p>
          <button className="quote-button" onClick={() => navigate('/services')}>
            Our Services
          </button>
        </div>
      </section>

      <section className="home-services-hero">
        <div className="container-custom">
          <header className="services-header-compact">
            <h2>OUR PREMIUM SERVICES</h2>
            <div className="header-divider"></div>
            <p>Professional Cleaning Solutions for Your Home & Office</p>
          </header>

          <div className="compact-services-grid">
            {servicesData.map((service, index) => (
              <div key={index} className="compact-service-card">
                <div className="compact-image-wrapper">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="compact-content">
                  <h3>{service.title}</h3>
                  <button
                    className="compact-book-btn"
                    onClick={() => handleBookClick(service.title)}
                  >
                    BOOK NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="explore-more-container">
            <button
              className="explore-button-home"
              onClick={() => navigate('/services')}
            >
              EXPLORE MORE SERVICES <span className="arrow-icon">→</span>
            </button>
          </div>
        </div>
      </section>

      <section className="how-it-works-section">
        <div className="how-it-works-content">
          <h2 className="how-it-works-title">HOW IT WORKS</h2>
          <div className="step-item">
            <p className="step-number">01</p>
            <h3 className="step-heading">BOOK YOUR SERVICE</h3>
            <p className="step-description">
              Choose from our range of specialized services and pick a date that fits your schedule.
            </p>
          </div>

          <div className="step-item">
            <p className="step-number">02</p>
            <h3 className="step-heading">PROFESSIONAL CLEANING</h3>
            <p className="step-description">
              Our experts arrive on time with professional equipment to make your space spotless.
            </p>
          </div>

          <div className="step-item">
            <p className="step-number">03</p>
            <h3 className="step-heading">CASH ON DELIVERY</h3>
            <p className="step-description">
              Pay conveniently in cash after the service is completed to your satisfaction.
            </p>
          </div>
        </div>
        <div className="servicework-container">
          <img src={photo5} alt="Service work" className="servicework" />
        </div>
      </section>

    </div>
  );
};

export default Home;