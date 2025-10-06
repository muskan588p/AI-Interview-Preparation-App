// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the AI Interview Prep App</h1>
      <p>Your personal AI-powered mock interviewer to help you ace your next technical interview.</p>
      <Link to="/register" className="cta-button">Get Started</Link>
    </div>
  );
};

export default Home;