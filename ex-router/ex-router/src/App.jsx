// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importe a imagem de background aqui
import backgroundImage from './assets/background.png';

import HomePage from './pages/HomePage';
import ScenarioPage from './pages/ScenarioPage';
import EndingPage from './pages/EndingPage';

const App = () => {
  // O estilo de background é definido aqui usando a imagem importada
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  };

  return (
    <Router>
      <div 
        className="min-h-screen flex flex-col items-center justify-center p-4 font-sans"
        style={backgroundStyle}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/scenario/:scenarioId" element={<ScenarioPage />} />
          <Route path="/ending/:endingId" element={<EndingPage />} />
          
          {/* Optional: 404 Not Found Route */}
          <Route path="*" element={
            <div className="text-center text-2xl font-bold text-slate-100">
              Page Not Found!
              <button onClick={() => window.location.href = '/'} className="block mt-4 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">Back to Home</button>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
