'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [programmaticScroll, setProgrammaticScroll] = useState(false);

  const scrollToSection = (sectionId: string) => {
    console.log('Scrolling to section:', sectionId);
    
    // Disable scroll detection temporarily
    setProgrammaticScroll(true);
    setActiveSection(sectionId);
    
    // Find the element
    const element = document.getElementById(sectionId);
    console.log('Found element:', element);
    
    if (element) {
      // Use a simple approach - just scroll to the element with offset
      const yOffset = -80; // Offset for navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      console.log('Scrolling to y position:', y);
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
      
      // Re-enable scroll detection after animation completes
      setTimeout(() => {
        setProgrammaticScroll(false);
      }, 800);
      
    } else {
      console.error('Element not found for section:', sectionId);
      setProgrammaticScroll(false);
    }
  };

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          
          // Handle navbar background visibility
          if (scrollY < 100) {
            setIsScrolled(false);
          } else {
            setIsScrolled(true);
          }
          
          // Keep navbar always visible
          setIsVisible(true);
          
          setLastScrollY(scrollY);
          
          // Simplified section detection based on scroll position
          const sections = [
            { id: 'home', element: document.getElementById('home') },
            { id: 'projects', element: document.getElementById('projects') },
            { id: 'contact', element: document.getElementById('contact') }
          ];
          
          let currentSection = 'home';
          
          // Find which section we're currently in
          for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            if (section.element) {
              const rect = section.element.getBoundingClientRect();
              // If the section is above the middle of the viewport, we're in it
              if (rect.top <= window.innerHeight * 0.4) {
                currentSection = section.id;
                break;
              }
            }
          }
          
          // Only update if not during programmatic scroll
          if (!programmaticScroll && currentSection !== activeSection) {
            console.log('Section changed from', activeSection, 'to', currentSection);
            setActiveSection(currentSection);
          }
          
          ticking = false;
        });
        ticking = true;
      }
    };

    // Add immediate call for initial state
    handleScroll();
    
    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, programmaticScroll, activeSection]);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ 
          y: isVisible ? 0 : -80 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-center space-x-2">
            {navItems.map((item) => (
              <div
                key={item.id}
              >
                <button
                  type="button"
                  onClick={() => {
                    console.log('=== BUTTON CLICKED ===');
                    console.log('Section:', item.id);
                    scrollToSection(item.id);
                  }}
                  className={`relative px-6 py-2 font-medium transition-all duration-200 rounded-full hover:scale-105 active:scale-95 cursor-pointer ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                  style={{ pointerEvents: 'auto', zIndex: 10 }}
                >
                  <AnimatePresence>
                    {activeSection === item.id && (
                      <motion.div
                        key="active-pill"
                        className="absolute inset-0 bg-blue-600 rounded-full"
                        initial={{ opacity: 0, scaleX: 0.8 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        exit={{ opacity: 0, scaleX: 0.8 }}
                        transition={{
                          type: "tween",
                          duration: 0.15,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                  </AnimatePresence>
                  
                  <span className="relative z-10">
                    {item.label}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Glassmorphism effect overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-purple-500/5 rounded-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: isScrolled ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.nav>
    </>
  );
}
