import React, { useState, useEffect } from 'react';
import { Page } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import DemonstrationOverlay from './components/DemonstrationOverlay';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  useEffect(() => {
    // Basic dark mode handling - now default is dark based on html class
    const matcher = window.matchMedia('(prefers-color-scheme: dark)');
    if (!matcher.matches) {
       // If user prefers light, we remove dark. Otherwise, we stick to the default dark.
       // document.documentElement.classList.remove('dark');
    }
    const onChange = (e: MediaQueryListEvent) => {
      // This is now less important as we default to dark, but good for user override
      if (e.matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
    
    matcher.addEventListener('change', onChange);

    // Smooth scrolling for anchor links
    const handleAnchorClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement).closest('a');
      // Check if it's an anchor link on the same page
      if (link && link.hash && link.pathname === window.location.pathname) {
        const targetId = link.hash.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          event.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      matcher.removeEventListener('change', onChange);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="relative z-10 pt-20">
        {renderPage()}
      </main>

      <Footer setCurrentPage={setCurrentPage} />
      <DemonstrationOverlay />
    </div>
  );
};

export default App;