import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="logo">Dobby</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/versions">Versions</Link></li>
        <li><Link to="/user-manual">User Manual</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/login">Login</Link></li>
        {/* <li><Link to="/signup">Signup</Link></li> */}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
