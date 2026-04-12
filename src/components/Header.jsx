// src/components/Header.jsx

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ activeSection, setActiveSection, sections }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    
    // Smooth scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-[2200px] mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo/Name */}
          <button
            onClick={() => handleNavClick('hero')}
            className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-slate-800' : 'text-white'
            }`}
          >
            Ishara Hewawitharana
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleNavClick(section.id)}
                className={`text-lg font-medium transition-colors ${
                  activeSection === section.id
                    ? isScrolled 
                      ? 'text-blue-600' 
                      : 'text-white border-b-2 border-white'
                    : isScrolled
                      ? 'text-slate-600 hover:text-blue-600'
                      : 'text-white/80 hover:text-white'
                }`}
              >
                {section.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${
              isScrolled ? 'text-slate-800' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-2 p-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleNavClick(section.id)}
                  className={`text-left px-4 py-2 rounded transition-colors ${
                    activeSection === section.id
                      ? 'bg-blue-50 text-blue-600 font-medium'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;