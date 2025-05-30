import React, { useState, useEffect } from 'react';

const ColorModeSwitcher = () => {
  // Define color modes
  const colorModes = {
    light: {
      name: 'Light Mode',
      background: '#ffffff',
      text: '#333333',
      button: '#f0f0f0'
    },
    dark: {
      name: 'Dark Mode',
      background: '#1a1a1a',
      text: '#f0f0f0',
      button: '#333333'
    },
    blue: {
      name: 'Blue Mode',
      background: '#e6f7ff',
      text: '#003366',
      button: '#b3e0ff'
    },
    green: {
      name: 'Green Mode',
      background: '#e6ffe6',
      text: '#004d00',
      button: '#b3ffb3'
    }
  };

  // State for current mode (default to light)
  const [currentMode, setCurrentMode] = useState('light');

  // Load saved mode from localStorage on mount
  useEffect(() => {
    const savedMode = localStorage.getItem('colorMode');
    if (savedMode && colorModes[savedMode]) {
      setCurrentMode(savedMode);
    }
  }, []);

  // Save to localStorage when mode changes
  useEffect(() => {
    localStorage.setItem('colorMode', currentMode);
    applyColors();
  }, [currentMode]);

  // Apply current color styles
  const applyColors = () => {
    const mode = colorModes[currentMode];
    document.documentElement.style.setProperty('--bg-color', mode.background);
    document.documentElement.style.setProperty('--text-color', mode.text);
    document.documentElement.style.setProperty('--btn-color', mode.button);
  };

  // Handle mode change
  const handleModeChange = (mode) => {
    setCurrentMode(mode);
  };

  return (
    <div className="mode-switcher">
      {/* <h2>Color Mode Switcher</h2> */}
      <div className="mode-buttons">
        {Object.entries(colorModes).map(([key, mode]) => (
          <button
            key={key}
            onClick={() => handleModeChange(key)}
            style={{ 
              backgroundColor: key === currentMode ? mode.text : mode.button,
              color: key === currentMode ? mode.background : mode.text
            }}
            className="mode-btn"
          >
            {mode.name}
          </button>
        ))}
      </div>
      
    </div>
  );
};

export default ColorModeSwitcher;