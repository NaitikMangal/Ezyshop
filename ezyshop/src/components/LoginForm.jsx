// src/components/LoginForm.jsx
import React, { useState } from 'react';
import "../styles/Form.css"; // Import for form styles
import Logo from './Logo';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form handling logic here
  };

  return (
    <div className="form-container">
      <Logo />
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
      <Link to="/signup" id='link'>Don't have an account? Sign up</Link>
    </div>
    
  );
};

export default LoginForm;
