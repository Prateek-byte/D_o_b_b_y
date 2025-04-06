import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-container">
      <h2>About Dobby</h2>
      <p>
        Dobby is an intelligent voice assistant that helps you manage daily tasks, 
        reminders, and more with just your voice.
      </p>
      <Link to="/contact" className="contact-link">Contact Us</Link>
    </div>
  );
};

export default About;
