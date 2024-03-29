import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Portofolio from './pages/Portofolio';
import Contact from './pages/Contact';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/porto" element={<Home />} />
        <Route path="/myporto" element={<Home />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  );
};

export default App;
