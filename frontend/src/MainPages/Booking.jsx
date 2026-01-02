import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Stili bazë i njoftimeve
import './Booking.css'; 

const Booking = () => {
  const location = useLocation();
  const serviceTitle = location.state?.service || "General Cleaning";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: serviceTitle,
    serviceDate: '',
    serviceTime: '',
    propertySize: '',
    notes: '',
    hasPets: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Shfaq njoftimin e suksesit
        toast.success(`Booking for ${formData.serviceType} submitted successfully!`, {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored", // Përdor ngjyrat e Toastify (vjollcë/jeshile)
        });

        // Pastro formën pas suksesit
        setFormData({
          name: '', email: '', phone: '', address: '',
          serviceType: serviceTitle, serviceDate: '',
          serviceTime: '', propertySize: '', notes: '',
          hasPets: false
        });
      } else {
        const result = await response.json();
        toast.error(result.message || "Booking failed. Please try again.");
      }
    } catch (error) {
      toast.error(`Connection error: ${error.message}`);
    }
  };

  return (
    <div className="booking-form-container">
      {/* Kontejneri ku do të shfaqet mesazhi */}
      <ToastContainer />

      <h2 className="form-header">Book Service: {serviceTitle}</h2>
      
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-grid">
          {/* Seksioni i parë: Kontaktet */}
          <fieldset>
            <legend>Contact & Service Location</legend>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />

            <label htmlFor="address">Full Service Address</label>
            <textarea id="address" name="address" value={formData.address} onChange={handleChange} rows="3" required></textarea>
          </fieldset>

          {/* Seksioni i dytë: Detajet e pronës */}
          <fieldset>
            <legend>Date, Time, and Property Details</legend>
            <label htmlFor="serviceType">Selected Service</label>
            <input type="text" id="serviceType" value={serviceTitle} disabled />

            <label htmlFor="serviceDate">Preferred Date</label>
            <input type="date" id="serviceDate" name="serviceDate" value={formData.serviceDate} onChange={handleChange} required />

            <label htmlFor="serviceTime">Preferred Time</label>
            <input type="time" id="serviceTime" name="serviceTime" value={formData.serviceTime} onChange={handleChange} />

            <label htmlFor="propertySize">Approximate Property Size</label>
            <select id="propertySize" name="propertySize" value={formData.propertySize} onChange={handleChange} required>
              <option value="">Select an option</option>
              <option value="studio">Studio / 1 Bedroom</option>
              <option value="medium_apt">Medium Apartment (2 Bedrooms)</option>
              <option value="large_apt">Large Apartment (3+ Bedrooms)</option>
              <option value="small_house">Small House</option>
              <option value="large_house">Large House</option>
            </select>

            <div className="checkbox-group">
              <input type="checkbox" id="hasPets" name="hasPets" checked={formData.hasPets} onChange={handleChange} />
              <label htmlFor="hasPets">Are there pets on the premises?</label>
            </div>
          </fieldset>
        </div>

        {/* Seksioni i tretë: Shënime shtesë */}
        <fieldset>
          <legend>Additional Notes / Access Instructions</legend>
          <label htmlFor="notes">Enter details (e.g., parking, key location):</label>
          <textarea id="notes" name="notes" value={formData.notes} onChange={handleChange} rows="4"></textarea>
        </fieldset>

        <button type="submit" className="submit-button">CONFIRM BOOKING</button>
      </form>
    </div>
  );
};

export default Booking;