
import React from 'react';
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
}> = ({ page, currentPage, setCurrentPage, children }) => {
  const isActive = currentPage === page;
  return (
    <button
      onClick={() => setCurrentPage(page)}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out ${
        isActive
          ? 'text-[var(--accent)]'
          : 'text-[var(--muted)] hover:text-[var(--ink)]'
      }`}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="sticky top-0 z-50 transition-all duration-300 ease-out-quint bg-[var(--card-bg)] shadow-[var(--card-shadow)] backdrop-blur-lg">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <h1 className="font-display text-lg font-semibold text-[var(--ink)]">{PRAXIS_NAME}</h1>
            <p className="text-xs text-[var(--muted)] -mt-1">{PRAXIS_SUBTITLE}</p>
          </div>
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink page="home" currentPage={currentPage} setCurrentPage={setCurrentPage}>Startseite</NavLink>
            <NavLink page="about" currentPage={currentPage} setCurrentPage={setCurrentPage}>Über mich</NavLink>
            <NavLink page="services" currentPage={currentPage} setCurrentPage={setCurrentPage}>Leistungen</NavLink>
            <NavLink page="contact" currentPage={currentPage} setCurrentPage={setCurrentPage}>Kontakt</NavLink>
          </nav>
          <div className="flex items-center space-x-4">
             <a href={`tel:${PHONE.replace(/-/g, '')}`} className="hidden sm:flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-semibold text-[var(--accent-quiet)] border border-[var(--accent-quiet)] hover:bg-[var(--accent-quiet)] hover:text-white transition-colors duration-200">
              {ICONS.phone}
              <span>{PHONE}</span>
            </a>
            <button onClick={() => setCurrentPage('contact')} className="relative flex items-center px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-quiet)] transition-colors duration-200 shadow-lg animate-pulse-dot">
              Rückruf/Terminwunsch
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
