import React from 'react';
import { motion } from 'framer-motion';
import './Home.css'; // Ensure you create and import this CSS file

const features = [
  {
    title: "Voice Commands",
    description: "Control your smart home and devices effortlessly using your voice.",
    icon: "🎤"
  },
  {
    title: "Personal Assistant",
    description: "Manage your schedule, set reminders, and get personalized help.",
    icon: "🤖"
  },
  {
    title: "Smart Integration",
    description: "Seamlessly integrate with your favorite apps and smart devices.",
    icon: "🏠"
  },
  {
    title: "Customization",
    description: "Tailor Dobby's functionalities to fit your personal style and needs.",
    icon: "🎨"
  }
];

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Welcome to Dobby</h1>
          <p>Your intelligent voice assistant that transforms your daily routine.</p>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="features">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Features
        </motion.h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 * index }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2>Experience Dobby Today</h2>
          <p>Join thousands of satisfied users and revolutionize the way you manage your day.</p>
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
