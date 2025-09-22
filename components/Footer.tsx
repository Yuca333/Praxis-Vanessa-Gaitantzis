
import React from 'react';
import { Page } from '../types';
import {
  PRAXIS_NAME,
  PRAXIS_SUBTITLE,
  ADDRESS,
  PHONE,
  EMAIL,
  OPENING_HOURS,
  EMERGENCY_INFO
} from '../constants';

interface FooterProps {
    setCurrentPage: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  return (
    <footer className="relative z-10 border-t border-[var(--border)] bg-[var(--bg)] text-[var(--muted)] py-fib-md">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm">
          
          <div className="space-y-4">
            <h3 className="font-display text-lg font-semibold text-[var(--ink)]">{PRAXIS_NAME}</h3>
            <p className="text-xs -mt-3">{PRAXIS_SUBTITLE}</p>
            <p>{ADDRESS}</p>
            <p>Telefon: <a href={`tel:${PHONE.replace(/-/g, '')}`} className="hover:text-[var(--accent)] transition-colors">{PHONE}</a></p>
            <p>E-Mail: <a href={`mailto:${EMAIL}`} className="hover:text-[var(--accent)] transition-colors">{EMAIL}</a></p>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-base text-[var(--ink)]">Navigation</h4>
            <ul className="space-y-2">
              <li><button onClick={() => setCurrentPage('home')} className="hover:text-[var(--accent)] transition-colors">Startseite</button></li>
              <li><button onClick={() => setCurrentPage('about')} className="hover:text-[var(--accent)] transition-colors">Über mich</button></li>
              <li><button onClick={() => setCurrentPage('services')} className="hover:text-[var(--accent)] transition-colors">Leistungen</button></li>
              <li><button onClick={() => setCurrentPage('contact')} className="hover:text-[var(--accent)] transition-colors">Kontakt</button></li>
            </ul>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-base text-[var(--ink)]">Öffnungszeiten</h4>
            <p className="whitespace-pre-line leading-relaxed">{OPENING_HOURS.replace('; ', '\n')}</p>
            <div className="pt-4">
                <h4 className="font-semibold text-base text-[var(--ink)]">Notfallhinweise</h4>
                <p>{EMERGENCY_INFO.line1}</p>
                <p>{EMERGENCY_INFO.line2}</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-base text-[var(--ink)]">Rechtliches</h4>
            <ul className="space-y-2">
              <li><a href="#impressum" className="hover:text-[var(--accent)] transition-colors">Impressum</a></li>
              <li><a href="#datenschutz" className="hover:text-[var(--accent)] transition-colors">Datenschutzerklärung</a></li>
            </ul>
          </div>

        </div>
        <div className="mt-12 pt-8 border-t border-[var(--border)] text-center text-xs">
          <p>&copy; {new Date().getFullYear()} {PRAXIS_NAME}. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
