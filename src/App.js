import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [noButtonHovered, setNoButtonHovered] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });

  const handleNoButtonHover = () => {
    setNoButtonHovered(true);
    const top = Math.random() * (window.innerHeight - 50); // Adjusted to prevent button from going out of viewport
    const left = Math.random() * (window.innerWidth - 100); // Adjusted to prevent button from going out of viewport
    setNoButtonPosition({ top, left });
  };

  const handleNoButtonLeave = () => {
    setNoButtonHovered(false);
  };

  return (
    <div className="prank-buttons">
      <p>Do you want to click the "Yes" button?</p>
      <div className="button-container">
        <button className="yes-button">Yes</button>
        <button
          className={`no-button ${noButtonHovered ? 'floating' : ''}`}
          onMouseEnter={handleNoButtonHover}
          onMouseLeave={handleNoButtonLeave}
          style={{ top: noButtonPosition.top, left: noButtonPosition.left }}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default App;
