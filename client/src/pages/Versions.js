import React from 'react';
import { motion } from 'framer-motion';
import './Versions.css';

const versions = [
  {
    name: "Standard Version",
    description: "Basic functionalities for personal use.",
    price: "FREE",
    features: [
      "Basic voice commands",
      "Task management",
      "Reminder notifications"
    ],
    buttonText: "Get Now"
  },
  {
    name: "Pro Version",
    description: "Advanced features for professionals.",
    price: "$3.5/month",
    features: [
      "Advanced scheduling",
      "Custom integrations",
      "Priority support"
    ],
    buttonText: "Buy Now"
  },
  {
    name: "Enterprise Version",
    description: "Complete solutions with premium support.",
    price: "$8.5/month",
    features: [
      "All Pro features",
      "Dedicated support",
      "Customizable solutions"
    ],
    buttonText: "Buy Now"
  }
];

const Versions = () => {
  return (
    <div className="versions-page">
      {/* Intro Section */}
      <section className="versions-hero">
        <motion.div 
          className="versions-hero-content"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Choose Your Dobby Version</h1>
          <p>Select the perfect version that fits your needs and upgrade your voice assistant experience.</p>
        </motion.div>
      </section>

      {/* Versions Cards Section */}
      <section className="versions-cards">
        <div className="cards-container">
          {versions.map((version, index) => (
            <motion.div 
              className="version-card"
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <h2>{version.name}</h2>
              <p className="version-description">{version.description}</p>
              <span className="version-price">{version.price}</span>
              <ul className="version-features">
                {version.features.map((feature, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.2 }}
                  >
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <motion.button 
                className="version-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {version.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Versions;
