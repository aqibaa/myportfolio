import React, { useState, useEffect } from 'react';

import StarBackground from '../components/StarBackground';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedTheme = window.localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      return true; // isDarkMode = true
    }
  }
  return false; // Default is light mode
};

export const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className='min-h-screen text-foreground overflow-x-hidden'>
      <StarBackground isDarkMode={isDarkMode} />
      
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <div className="relative ">
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};