import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [mod, seMode] = useState('base');
  const [txta, txtac] = useState('area');

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      seMode('change');
      txtac('txtc');
      document.body.style.backgroundColor = '#1E3E62';
    } else {
      setMode('light');
      seMode('base');
      txtac('area');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <Router>
      <Navbar home="Home" mode={mode} togglemode={togglemode} />
      <Routes>
        {/* TextForm is the default page */}
        <Route path="/" element={<Navigate to="/textform" />} />
        <Route path="/about" element={<About />} />
        <Route path="/textform" element={<TextForm mod={mod} txta={txta} mode={mode} togglemode={togglemode} />} />
      </Routes>
    </Router>
  );
}

export default App;
