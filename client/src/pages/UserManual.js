import React from 'react';
import { motion } from 'framer-motion';
import './UserManual.css';

const UserManual = () => {
  return (
    <div className="user-manual-page">
      <h1>User Manual</h1>
      <p>
        Follow the instructions below to set up and run Dobby. Whether you need extra installations or the commands to launch Dobby, we’ve got you covered.
      </p>
      
      <div className="manual-boxes">
        {/* Extra Installations Box */}
        <motion.div 
          className="manual-box"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Extra Installations</h2>
          <ul>
            <li>Install Node.js (v14 or higher)</li>
            <li>Set up MongoDB locally or use MongoDB Atlas</li>
            <li>Run <code>npm install</code> in both <code>server</code> and <code>client</code> folders</li>
            <li>Create and configure your <code>.env</code> file with <code>MONGO_URI</code> and <code>JWT_SECRET</code></li>
          </ul>
        </motion.div>

        {/* Commands Box */}
        <motion.div 
          className="manual-box"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>Commands to Run Dobby</h2>
          <ul>
            <li><code>npm run dev</code> to start the server with live reloading</li>
            <li><code>npm start</code> to launch the React client</li>
            <li>Use <code>nodemon</code> for automatic server restarts on file changes</li>
            <li>Check your terminal/logs for any startup errors</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default UserManual;
