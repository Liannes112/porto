import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const instagram = 'https://www.instagram.com/daaniel_andre?igsh=MTRicjV2a3Q5N3dhaA=='
  const email = 'mailto:andredn74@gmail.com'
  const github = 'https://github.com/liannes112/'
  
  return (
    <>
      <footer className="pt-24 pb-12 bg-gradient-to-b from-white to-blue">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 mb-12 text-slate-800 font-medium md:w-1/2">
              <h2 className="font-bold text-4xl mb-5">
                Portofolio
              </h2>
              <h3 className="font-semibold text-xl mb-5 lg:text-2xl">
                My Social Media
              </h3>
              <div className="flex flex-wrap text-3xl gap-4 lg:text-5xl">
                <a href={instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                
                <a href={email} target="_blank" rel="noopener noreferrer">
                  <MdOutlineMailOutline/>
                </a>
                
                <a href={github} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
              </div>
            </div>
            <div className="w-full px-4 mb-12 md:w-1/2">
              <h3 className="font-semibold text-xl mb-5 lg:text-2xl">Navigation</h3>
              <div className="flex flex-col w-1/3">
                <Link
                  className="text-base lg:text-lg hover:text-blue mb-2"
                  to="/myporto">
                  Home
                </Link>
                <Link
                  className="text-base lg:text-lg hover:text-blue mb-2"
                  to="/portofolio">
                  Portofolio
                </Link>
                <Link
                  className="text-base lg:text-lg hover:text-blue mb-2"
                  to="/contact">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full pt-10 border-t border-slate-700">
          <p className="font-medium text-md text-center">© 2024 Lianne.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
