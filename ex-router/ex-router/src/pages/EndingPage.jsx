import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { adventureData } from '../data/adventureData';

const EndingPage = () => {
  const { endingId } = useParams();
  const navigate = useNavigate();

  const currentEnding = adventureData.endings[endingId];

  if (!currentEnding) {
    return (
      <div className="container">
        <div className="card">
          <h2 className="page-title">Ending Not Found!</h2>
          <p className="page-text">Something went wrong at the end of your adventure.</p>
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

  let endingIcon = '❓';
  let cardClass = 'ending-card-neutral'; // Default
  if (currentEnding.type === 'happy') {
    cardClass = 'ending-card-happy';
    endingIcon = '🎉';
  } else if (currentEnding.type === 'sad') {
    cardClass = 'ending-card-sad';
    endingIcon = '😔';
  } else if (currentEnding.type === 'epic') {
    cardClass = 'ending-card-epic';
    endingIcon = '🏆';
  }

  return (
    <div className="container">
      <div className={`card ${cardClass}`}>
        <div className="icon" role="img" aria-label="Ending Icon">
          {endingIcon}
        </div>
        <h2 className="page-title">
          {currentEnding.title}
        </h2>
        <p className="page-text">
          {currentEnding.text}
        </p>
        <button
          onClick={() => navigate('/')}
          className="button button-restart"
        >
          Restart Adventure
        </button>
      </div>
    </div>
  );
};

export default EndingPage;
