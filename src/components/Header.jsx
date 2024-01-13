import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Hamburger from '../components/Hamburger';

const Header = () => {
  const [navOpen, setNavOpen] = useState('false');
  const [scrolled, setScrolled] = useState('false');

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <header
      className={`bg-white w-full flex items-center shadow-md transition-all duration-1000 ${
        scrolled ? 'bg-head fixed' : ''
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-around relative">
          <div className="p-4">
            <h1 className="text-xl text-slate-900 font-bold md:text-xl">
              Portofolio
            </h1>
          </div>
          <Hamburger onClick={toggleNav} />
          <Navigation isOpen={navOpen} />
        </div>
      </div>
    </header>
  );
};

export default Header;
