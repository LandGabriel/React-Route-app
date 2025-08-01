import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { adventureData } from '../data/adventureData';

const ScenarioPage = () => {
  const { scenarioId } = useParams();
  const navigate = useNavigate();

  const currentScenario = adventureData.scenarios[scenarioId];

  if (!currentScenario) {
    return (
      <div className="container">
        <div className="card">
          <h2 className="page-title">Scenario Not Found!</h2>
          <p className="page-text">It seems you got lost in the adventure. Please try again.</p>
          <button
            onClick={() => navigate('/')}
            className="button"
          >
            Back to Start
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="card scenario-card">
        <div className="icon" role="img" aria-label="Scenario Icon">
          {currentScenario.icon}
        </div>
        <h2 className="page-title">
          {currentScenario.title}
        </h2>
        <p className="page-text">
          {currentScenario.text}
        </p>
        <div className="button-choices">
          {currentScenario.choices.map((choice, index) => (
            <button
              key={index}
              onClick={() => navigate(choice.nextPath)}
              className="button"
            >
              {choice.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScenarioPage;
