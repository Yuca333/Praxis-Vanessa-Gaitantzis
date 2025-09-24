import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { PRAXIS_NAME, PRAXIS_SUBTITLE, PHONE, ICONS } from '../constants';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}> = ({ page, currentPage, setCurrentPage, children, onClick, className = '' }) => {
  const isActive = currentPage === page;
  return (
    <button
      onClick={() => {
        setCurrentPage(page);
        if (onClick) onClick();
      }}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out ${
        isActive
          ? 'text-[var(--accent)]'
          : 'text-[var(--muted)] hover:text-[var(--ink)]'
      } ${className}`}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { page: 'home', text: 'Startseite' },
    { page: 'about', text: 'Über mich' },
    { page: 'services', text: 'Leistungen' },
    { page: 'contact', text: 'Kontakt' },
  ] as const;

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 ease-out-quint bg-[var(--card-bg)] backdrop-blur-lg border-b border-[var(--card-border)]">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer flex items-center gap-4" onClick={() => setCurrentPage('home')}>
            {/* High-fidelity Logo SVG */}
            <div className="p-1 rounded-lg">
              <svg 
                width="50" 
                height="40" 
                viewBox="0 0 130 105" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-auto"
                aria-label="Praxis Logo"
              >
                  <title>Praxis Vanessa Gaitantzis Logo</title>
                  {/* V */}
                  <path d="M2.5 0L26.1336 62.1538L50.5 0H62L26.1336 82L0 0H2.5Z" fill="#429b93"/>
                  
                  {/* G */}
                  <path d="M110.161 33.7483C116.331 36.1348 120 41.7371 120 48.0195C120 58.2193 111.411 66.5 100.5 66.5C90.2319 66.5 82 58.5284 82 48.0195C82 37.5106 90.2319 29.539 100.5 29.539C104.145 29.539 107.51 30.7317 110.161 32.7483" stroke="#2c3e50" strokeWidth="8"/>
                  <line x1="100" y1="48" x2="126" y2="48" stroke="#2c3e50" strokeWidth="8"/>
                  
                  {/* Stethoscope */}
                  <path d="M51.8621 54.0084C62.8391 75.9397 86.8448 76.5402 100.833 65.5517" stroke="#2c3e50" strokeWidth="8" strokeLinecap="round"/>
                  <path d="M26 23C26 17.4772 30.4772 13 36 13C41.5228 13 46 17.4772 46 23" stroke="#2c3e50" strokeWidth="6" strokeLinecap="round"/>
                  
                  <circle cx="26" cy="26" r="7" fill="var(--card-bg)" stroke="#2c3e50" strokeWidth="5"/>
                  <circle cx="46" cy="26" r="7" fill="var(--card-bg)" stroke="#2c3e50" strokeWidth="5"/>
                  
                  <circle cx="123" cy="48" r="6" fill="var(--card-bg)" stroke="#2c3e50" strokeWidth="5"/>
              </svg>
            </div>
            <div>
                <h1 className="font-display text-lg font-semibold text-[var(--ink)]">{PRAXIS_NAME}</h1>
                <p className="text-xs text-[var(--muted)] -mt-1">{PRAXIS_SUBTITLE}</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map(link => (
                <NavLink key={link.page} page={link.page} currentPage={currentPage} setCurrentPage={setCurrentPage}>{link.text}</NavLink>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
             <a href={`tel:${PHONE.replace(/-/g, '')}`} className="hidden sm:flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-semibold text-[var(--accent-quiet)] border border-[var(--accent-quiet)] hover:bg-[var(--accent-quiet)] hover:text-white transition-colors duration-200">
              {ICONS.phone}
              <span>{PHONE}</span>
            </a>
            <button onClick={() => setCurrentPage('contact')} className="hidden md:flex relative items-center px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-quiet)] transition-colors duration-200 shadow-lg animate-pulse-dot">
              Rückruf/Terminwunsch
            </button>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-[var(--muted)] hover:text-[var(--ink)] focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Menü öffnen</span>
                <div className="w-6 h-6 flex flex-col justify-around">
                  <span className={`block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? "rotate-45 translate-y-[5px]" : ""}`}></span>
                  <span className={`block w-full h-0.5 bg-current transition duration-300 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}></span>
                  <span className={`block w-full h-0.5 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
       <div
        className={`md:hidden absolute top-20 left-0 w-full transition-transform duration-500 ease-in-out transform bg-[var(--card-bg)] backdrop-blur-lg border-b border-[var(--card-border)] ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-[150%]'
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-8 space-y-1 sm:px-3 flex flex-col items-center">
            {navLinks.map(link => (
                <NavLink key={link.page} page={link.page} currentPage={currentPage} setCurrentPage={setCurrentPage} onClick={() => setIsMenuOpen(false)} className="text-lg w-full text-center !my-2">{link.text}</NavLink>
            ))}
            <button onClick={() => { setCurrentPage('contact'); setIsMenuOpen(false); }} className="mt-6 relative flex items-center px-6 py-3 rounded-full text-base font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-quiet)] transition-colors duration-200 shadow-lg animate-pulse-dot">
              Rückruf/Terminwunsch
            </button>
        </div>
      </div>
    </header>
  );
};

export default Header;