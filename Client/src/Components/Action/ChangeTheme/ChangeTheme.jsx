import React, { useState } from 'react';
import './ChangeTheme.css'; // थीम के लिए CSS
import Header from '../../Layout/Header/Header';

const ChnageTheme = () => {
  const [theme, setTheme] = useState('light'); // थीम के लिए स्टेट

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`ChnageTheme ${theme}`}>
    <Header toggleTheme={toggleTheme} theme={theme} /> {/* Header को props पास */}
    <main>
      <h1>Welcome to the Theme Changer App!</h1>
      <p>This is a simple example of theme switching in React.</p>
    </main>
  </div>

  );
};

export default ChnageTheme;
