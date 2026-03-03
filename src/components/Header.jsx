import React, { useState, useEffect } from 'react';
import Navinayer from "../assets/Navinayer-removebg-preview.png"


export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Services', href: '#service', id: 'service' },
    { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block ${
          isScrolled ? 'bg-white py-4 shadow-sm' : 'bg-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-[15px] max-w-[1170px] flex items-center justify-between">
          <a href="#home" onClick={() => handleNavClick('home')}>
            <img
              src= {Navinayer}
              alt="Navin Ayer"
              className="max-h-[90px] w-auto"
            />
          </a>

          <ul className="flex items-center space-x-10 list-none m-0 p-0">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => handleNavClick(item.id)}
                  className={`font-display text-[15px] font-semibold tracking-[0.5px] transition-colors duration-300 relative
                    after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-[#d27328] after:transition-all after:duration-300
                    ${activeTab === item.id ? 'text-black after:w-full' : 'text-black after:w-0 hover:after:w-full'}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile topbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white py-4 px-4 shadow-sm flex items-center justify-between">
        <a href="#home" onClick={() => handleNavClick('home')}>
          <img
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/880a6d93-e697-44e4-8b6e-cc353a922359-krushal-sonani-web-app/assets/images/signature-1.png"
            alt="Logo"
            className="max-h-[25px] w-auto"
          />
        </a>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="relative w-8 h-8 focus:outline-none z-[60]"
          aria-label="Toggle Menu"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className={`block w-6 h-[2px] bg-black transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[2px]' : '-translate-y-2'}`}></span>
            <span className={`block w-6 h-[2px] bg-black transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-[2px] bg-black transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[2px]' : 'translate-y-2'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`fixed inset-0 z-40 bg-white transition-transform duration-500 ease-out md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => handleNavClick(item.id)}
              className={`font-display text-2xl font-bold transition-colors duration-300 ${activeTab === item.id ? 'text-[#d27328]' : 'text-black'}`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
