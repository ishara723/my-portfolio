import React, { useState, useEffect } from 'react';
import portfolioData from './data/portfolioData';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
//import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  
  const sections = [
    { id: 'about', label: 'About' },
   // { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const heroSection = document.getElementById('hero');
      
      if (heroSection && scrollPosition < heroSection.offsetHeight) {
        setActiveSection('hero');
        return;
      }

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        sections={sections}
      />
      
      <main>
        <Hero data={portfolioData} />
        <About data={portfolioData} />
        {/* <Experience data={portfolioData} /> */}
        <Skills data={portfolioData} />
        <Projects data={portfolioData} />
        <Education data={portfolioData} />
        <Certifications data={portfolioData} />
        <Contact data={portfolioData} />
      </main>
      
      <Footer data={portfolioData} />
    </div>
  );
}

export default App;