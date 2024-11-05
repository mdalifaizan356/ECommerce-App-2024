import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Policies from './Pages/Policies/Policies';
import SignUp from './Pages/SignUp/SignUp';
import Registration from './Pages/Registration/Registration';
import PNF from './Pages/PNF/PNF';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <Routes>
      <Route path='/' element={<Home toggleTheme={toggleTheme} theme={theme} />} />
      <Route path='/about' element={<About toggleTheme={toggleTheme} theme={theme} />} />
      <Route path='/contact' element={<Contact toggleTheme={toggleTheme} theme={theme} />} />
      <Route path='/policies' element={<Policies toggleTheme={toggleTheme} theme={theme} />} />
      <Route path='/signup' element={<SignUp toggleTheme={toggleTheme} theme={theme} />} />
      <Route path='/registration' element={<Registration toggleTheme={toggleTheme} theme={theme} />} />
      <Route path='*' element={<PNF />} />
    </Routes>
  );
}

export default App;
