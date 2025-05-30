import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check localStorage for saved scroll position
    const savedPosition = localStorage.getItem('scrollPosition');
    if (savedPosition && parseInt(savedPosition) > 110) {
      setIsVisible(true);
    }

    const handleScroll = () => {
      const scrolled = document.documentElement.scrollTop;
      localStorage.setItem('scrollPosition', scrolled.toString());
      setIsVisible(scrolled > 110);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    localStorage.setItem('scrollPosition', '0');
  };

  return (
    <button 
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;