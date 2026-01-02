import React from 'react';
import './About.css';
import imageTeam from '../Images/aboutUs.PNG';
import imageFaq from '../Images/service.PNG';
import aboutVideo from "../Images/about.mp4";
// import logoPlaceholder from "../Images/Logo.jpeg"; 
import logo1 from "../Images/logo4.jpeg";

const About = () => {
    return (
        <div className="about-us-container" id="about">
            <section className="about-model-section">
                <div className="about-model-content">
                    <div className="about-model-left">
                        {/* <img src={logoPlaceholder} alt=" Logo" className="brand-logo-img" /> */}
                    <img src={logo1} alt=" Logo"  className="brand-logo-img" />

                    </div>

                    <div className="about-model-right">
                        <span className="sub-heading">ABOUT US</span>
                        <h1 className="main-title">Your Partner for Professional Cleaning in Germany</h1>

                        <div className="description-text">
                            <p>
                                We are a passionate team that loves cleanliness and wants to share this peace of mind with you.
                                With our premium services, we enable you to discover the true comfort of your home or office.
                            </p>
                            <p>
                                Our goal is to offer you an unforgettable experience: flexible planning, first-class service,
                                and personal advice. We know the best methods and secret spots that others might miss.
                            </p>
                            <p>
                                Whether you need a deep clean or regular maintenance, we accompany you with advice and support.
                                Your satisfaction is our top priority.
                            </p>
                        </div>

                        <div className="horizontal-stats">
                            <div className="h-stat-item">
                                <div className="stat-circle-wrapper">
                                    <h2 className="h-stat-value">100%</h2>
                                <span className="h-stat-label">Service Guarantee</span>
                                </div>
                            </div>

                            <div className="h-stat-item">
                                <div className="stat-circle-wrapper">
                                    <h2 className="h-stat-value">24/7</h2>
                                <span className="h-stat-label">Available</span>
                                </div>
                            </div>

                            <div className="h-stat-item">
                                <div className="stat-circle-wrapper">
                                    <h2 className="h-stat-value">42</h2>
                                <span className="h-stat-label">All Staffers Completed</span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="mid-video-section">
                <video className="about-video" src={aboutVideo} controls autoPlay loop muted>
                    Your browser does not support the video tag.
                </video>
            </section> */}
        </div>
    );
};

export default About;