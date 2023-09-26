import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css';

const LandingPage = () => {
  return (
    <div>
      <h1>Welcome to the Landing Page!</h1>
      <Link to="/Login">
        <button className='btn'>Login</button>
      </Link>
    </div>
  );
};

export default LandingPage;
