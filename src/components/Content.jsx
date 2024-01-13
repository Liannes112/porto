import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../img/hero.png'


const Content = () => {
  return (
    <>
      <section className="pt-24 bg-grey">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 
              className="text-xs font-semibold text-langit md:text-base lg:text-xl">
                Hello, My Name Is Andre!
                <span 
                className="block text-4xl font-bold text-slate-900 mt-1 lg:text-4xl">
                  I'm A Front-End Developer
                </span>
              </h1>
              <h2 
              className="font-medium text-lg mb-5 text-slate-800 lg:text-2xl" >
                Welcome To My Portofolio
              </h2>
              <Link to="/portofolio" >
                <button 
              className="border border-slate-400 px-4 py-1 bg-lb rounded-md hover:border-slate-400 hover:bg-langit hover:text-white">
                Get Started
               </button>
              </Link>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2 lg:right-0 lg:mt-9">
              <div className="mt-10">
                <img src={hero} alt="Hero Banner"
                className="w-full rounded-2xl"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    )
}

export default Content