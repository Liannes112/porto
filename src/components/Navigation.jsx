import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navigation = ({ isOpen }) => {
  const navStyle = isOpen ? 'hidden' : 'inherit'
  const navigate = useNavigate()
  const location = useLocation()
  const handleClick = (route) => {
    if(location.pathname === route) {
      window.location.reload
    } else {
      navigate(route)
    }
  }
  
  return (
  <nav className={`${navStyle} absolute py-5 bg-slate-200 z-50 rounded-lg max-w-[250px] right-0 mt-4 top-full md:mt-0 md:mr-0 md:flex md:static md:z-[99] md:bg-transparent md:max-w-full md:rounded-none md:shadow-none`}>
      <ul className="flex items-center flex-col md:flex-row">
        <li className="group">
          <Link onClick={handleClick} className="text-textW text-base py-2 mx-8 flex group-hover:text-sky-400 cursor-pointer" to="/myporto">Home</Link>
        </li>
        <li className="group">
          <Link onClick={handleClick} className="text-textW text-base py-2 mx-8 flex group-hover:text-sky-400 cursor-pointer" to="/portofolio">Portofolio</Link>
        </li>
        <li className="group">
          <Link onClick={handleClick} className="text-textW text-base py-2 mx-8 flex group-hover:text-sky-400 cursor-pointer" to="/contact">Contact</Link>
        </li>
      </ul>
  </nav>
  );
};

export default Navigation;