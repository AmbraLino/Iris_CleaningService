import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ReviewSystem.css";

const ReviewSystem = () => {
  const [reviews, setReviews] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: "", comment: "", stars: 5 });

  useEffect(() => {
    fetchReviews();
    const timer = setTimeout(() => setShowModal(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const fetchReviews = async () => {
    try {
      const res = await axios.get("http://localhost:5000/reviews");
      setReviews(res.data);
    } catch (err) {
      console.error("Error fetching reviews:", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/reviews", formData);
      setShowModal(false);
      setFormData({ name: "", comment: "", stars: 5 });
      fetchReviews(); 
    } catch (err) {
      alert("Error saving review! Please try again.");
    }
  };

  return (
    <div className="review-section">
      <h2 className="section-title">What Our Clients Say</h2>

      <div className="reviews-grid">
        {reviews.length > 0 ? (
          reviews.map((r, index) => (
            <div key={index} className="review-card">
              <div className="stars">{"★".repeat(r.stars)}</div>
              <p className="comment">"{r.comment}"</p>
              <h4 className="client-name">- {r.name}</h4>
            </div>
          ))
        ) : (
          <p>No reviews yet. Be the first to leave one!</p>
        )}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="review-modal">
            <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
            <h3>Rate Us!</h3>
            <p>How was your experience with Iris Cleaning?</p>
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                placeholder="Your Name" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <textarea 
                placeholder="Write your review here..." 
                required
                value={formData.comment}
                onChange={(e) => setFormData({...formData, comment: e.target.value})}
              ></textarea>
              <select 
                value={formData.stars}
                onChange={(e) => setFormData({...formData, stars: parseInt(e.target.value)})}
              >
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
              </select>
              <button type="submit" className="submit-review-btn">Submit Review</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewSystem;