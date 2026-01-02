import React from "react";
import "./Services.css";
import { useNavigate } from "react-router-dom";
import carpet from '../Images/carpet.jpg';
import domesticCleaning from '../Images/DOMESTIC_CLEANING.jpg';
import endoftenancy from '../Images/END_OF_TENANCY.jpg';
import tileGrout from '../Images/tilegrout.jpg';
import springCleaning from '../Images/SpringCleaning.jpg';
import afterBuilding from '../Images/AFTER_BUILD.jpg';
import ironingService from "../Images/ironing_service.jpg";
import after_cleaning from "../Images/after_cleaning.jpg";
import office from "../Images/office.jpg";
const servicesData = [
  {
    title: "CARPET CLEANING",
    description: "Deep-steam cleaning to remove stubborn stains, allergens, and dirt, leaving your carpets fresh and looking like new.",
    image: carpet,
    isReversed: false,
  },
  {
    title: "DOMESTIC CLEANING",
    description: "Reliable and thorough home cleaning tailored to your schedule, ensuring a spotless and comfortable living space every day.",
    image: domesticCleaning, 
    isReversed: true,
  },
  {
    title: "END OF TENANCY",
    description: "A comprehensive deep clean designed to meet landlord standards and help you secure your full security deposit refund.",
    image: endoftenancy, 
    isReversed: false,
  },
  {
    title: "ONE OFF CLEANING",
    description: "A high-intensity, professional clean for those times when your home needs a thorough refresh from top to bottom.",
    image: tileGrout,
    isReversed: true,
  },
  {
    title: "SPRING CLEANING",
    description: "Revitalize your home with a seasonal deep clean that reaches every hidden corner and clears out built-up dust and clutter.",
    image: springCleaning, 
    isReversed: false,
  },
  {
    title: "AFTER BUILD",
    description: "Specialized post-construction cleaning to remove fine dust, debris, and residue left behind after renovations or building work.",
    image: afterBuilding, 
    isReversed: true,
  },
  {
    title: "IRONING SERVICE",
    description: "Professional garment care to save you time; we provide meticulous ironing to ensure your clothes are crisp and wrinkle-free.",
    image: ironingService, 
    isReversed: false,
  },
  {
    title: "BEFORE / AFTER PARTY CLEANING",
    description: "Take the stress out of hosting. We handle the preparation or the cleanup so you can focus on enjoying your event.",
    image: after_cleaning, 
    isReversed: true,
  },
  {
    title: "OFFICE CLEANING",
    description: "Maintain a professional and hygienic workplace with our discreet and efficient commercial cleaning solutions.",
    image: office, 
    isReversed: false,
  },
];

const ServiceBlock = ({ title, description, image, isReversed, onBook }) => (
  <div className={`service-block ${isReversed ? "reversed" : ""}`}>
    <div className="service-image-container">
      <img src={image} alt={title} className="service-block-image" />
    </div>
    <div className="service-text-content">
      <h3 className="service-title">{title}</h3>
      <p className="service-description">{description}</p>
      <button className="book-button" onClick={() => onBook(title)}>BOOK</button>
    </div>
  </div>
);

const Services = () => {
  const navigate = useNavigate();

  const handleBookClick = (serviceTitle) => {
    navigate('/booking', { state: { service: serviceTitle } });
  };

  return (
    <div id="services" className="services-page-container">
      <header className="services-header">
        <h2>CLEANING SERVICES</h2>
        <hr className="header-underline" />
      </header>
      
      <main className="services-list">
        {servicesData.map((service, index) => (
          <ServiceBlock
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
            isReversed={service.isReversed}
            onBook={handleBookClick}
          />
        ))}
      </main>
    </div>
  );
};

export default Services;