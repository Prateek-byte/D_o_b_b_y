import React, { useState } from 'react';
import API from '../api';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/'); // redirect to homepage after successful login
    } catch (err) {
      setError(err.response?.data?.msg || 'Error logging in');
    }
  };

  return (
    <div className="auth-page">
      <motion.div
        className="auth-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2>Login</h2>
        {error && <p className="error-msg">{error}</p>}
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          
          <label>Password</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
          
          <button type="submit">Login</button>
        </form>
        <p style={{ marginTop: '1rem' }}>
          New here? <Link to="/signup" style={{ color: '#ff6b6b', fontWeight: 'bold' }}>Sign Up</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
