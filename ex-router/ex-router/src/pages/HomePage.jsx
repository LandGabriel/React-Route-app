// src/pages/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleStartAdventure = () => {
    navigate('/scenario/start');
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="page-title">
          The Adventure of Choices
        </h1>
        <p className="page-text">
          Welcome, adventurer! Your choices will shape your destiny on this journey.
        </p>
        <button
          onClick={handleStartAdventure}
          className="button"
        >
          Start Adventure
        </button>
      </div>
    </div>
  );
};

export default HomePage;
