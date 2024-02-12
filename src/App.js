import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [noButtonHovered, setNoButtonHovered] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ top: 0, left: 0 });

  const handleNoButtonHover = () => {
    setNoButtonHovered(true);
    const buttonWidth = 800; // Adjust as needed
    const buttonHeight = 500; // Adjust as needed
    const maxTop = window.innerHeight - buttonHeight;
    const maxLeft = window.innerWidth - buttonWidth;
    const top = Math.random() * maxTop;
    const left = Math.random() * maxLeft;
    setNoButtonPosition({ top, left });
  };

  const handleNoButtonLeave = () => {
    setNoButtonHovered(false);
  };

  const handleYes = () => {
    alert('Thank You Bachha !!!')
  }

  return (
    <div className="prank-buttons">
      <img src='https://img.freepik.com/free-vector/cute-valentines-day-background_23-2148043323.jpg?w=1800&t=st=1707754773~exp=1707755373~hmac=d7ae08ab6c6c5594845c821c58e0f42c1807eab1d469f26825703553c723bed8' alt="Background" />
      <div className='overlay'></div>
    
      <div className="button-container">
        <p>Hey Bachha, will you be my valentine ?</p>
        <button className="yes-button" onClick={handleYes}>Yes</button>
        <button
          className={`no-button ${noButtonHovered ? 'floating' : ''}`}
          onMouseEnter={handleNoButtonHover}
          onMouseLeave={handleNoButtonLeave}
          style={{ top: noButtonPosition.top + 'px', left: noButtonPosition.left + 'px', position: 'fixed' }}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default App;
