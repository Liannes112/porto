import React from 'react';
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";

const Social = () => {
  
  return (
    <>
     <section className="pt-36 pb-32">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2">
            <h3 className="font-bold text-langit">
              About Me
            </h3>
            <p>
              Saya adalah seorang developer yang berasal dari Indonesia dan lahir di Kota Bandung. Saat ini saya sedang memfokuskan diri saya untuk belajar mengenai web development. Saya bercita-cita menjadi developer yang handal.
            </p>
          </div>
          <div className="w-full px-4 mb-10 lg:w-1/2">
            <h3 className="font-bold text-langit">Skills</h3>
            <div className="flex flex-wrap text-3xl md:text-6xl gap-5">
              <FaHtml5 />
              <FaCss3Alt />
              <IoLogoJavascript />
              <FaReact />
              <SiTailwindcss />
              <FaNodeJs />
            </div>
          </div>
        </div>
      </div>
     </section>
    </>
    )
}

export default Social