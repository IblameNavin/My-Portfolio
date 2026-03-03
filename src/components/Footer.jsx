import React from 'react';
import { Facebook, Linkedin, Github, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#d27328] py-[50px]">
      <div className="container mx-auto px-[15px] max-w-[1170px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          <p className="text-white font-body text-[16px] leading-[1.6]">
            Copyright &copy; 2021. All rights are reserved
          </p>

          <ul className="flex items-center list-none p-0 m-0 space-x-[20px]">
            <li>
              <a href="#" className="text-white hover:opacity-80 transition-opacity duration-300" aria-label="Facebook">
                <a href="https://www.facebook.com/navin.ayer.653857"> <Facebook size={18} /> </a>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:opacity-80 transition-opacity duration-300" aria-label="LinkedIn">
                <a href="https://www.linkedin.com/in/navin-ayer-72854231b/"> <Linkedin size={18} /> </a>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:opacity-80 transition-opacity duration-300" aria-label="GitHub">
                <a href="https://github.com/IblameNavin"> <Github size={18} /> </a>
              </a>
            </li>
            <li>
              <a href="#" className="text-white hover:opacity-80 transition-opacity duration-300" aria-label="YouTube">
               <a href="https://www.instagram.com/navinn__ts">  <Instagram size={18} /> </a>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
