import React, { useState } from 'react';
import { ReactComponent as Sun } from './Sun.svg';
import { ReactComponent as Moon } from './Moon.svg';
import './DarkMode.css';

const DarkMode = () => {
  const selectedTheme = localStorage.getItem('selectedTheme');

  const [isDark, setIsDark] = useState(selectedTheme === 'dark');

  const setDarkMode = () => {
    document.querySelector('body')?.setAttribute('data-theme', 'dark');
    localStorage.setItem('selectedTheme', 'dark');
  };

  const setLightMode = () => {
    document.querySelector('body')?.setAttribute('data-theme', 'light');
    localStorage.setItem('selectedTheme', 'light');
  };

  if (selectedTheme === 'dark') {
    setDarkMode();
  }

  const toggleTheme: React.ChangeEventHandler<HTMLInputElement> = event => {
    if (event.target.checked) {
      setDarkMode();
      setIsDark(true);
    } else {
      setLightMode();
      setIsDark(false);
    }
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={selectedTheme === 'dark'}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun style={{ opacity: !isDark ? 1 : 0 }} />
        <Moon style={{ opacity: isDark ? 1 : 0 }} />
      </label>
    </div>
  );
};

export default DarkMode;
