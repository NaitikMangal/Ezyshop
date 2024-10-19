// src/components/Logo.jsx
import React from 'react';
import "../styles/Form.css"

const Logo = () => {
  return (
    <div className="logo-container">
      <img 
        src="./logo.png"  // Ensure your logo is in the public folder
        alt="EZYShop Logo"
        className="logo"
      />
      <h1>EZYShop</h1>
    </div>
  );
};

export default Logo;
