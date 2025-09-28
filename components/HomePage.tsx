import React from 'react';
import { Page } from '../types';
import { AKTUELLES_TEXT, HERO_LEITTEXT, OPENING_HOURS, ADDRESS, ICONS } from '../constants';
import GlassCard from './GlassCard';
import GoogleReviews from './GoogleReviews';
import SpotlightCardDemo from './SpotlightCardDemo';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto max-w-screen-xl px-4 py-fib-md min-h-[80vh] flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 space-y-8">
            <h1 className="font-display font-semibold text-[clamp(2.4rem,5vw,3.1rem)] leading-tight text-[var(--ink)]">
              Ihre Gesundheit, <br /> unser Anliegen.
            </h1>
            <div className="space-y-4 text-[var(--muted)] max-w-prose">
              {HERO_LEITTEXT.slice(0, 2).map((text, i) => <p key={i} className="text-lg">{text}</p>)}
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <button onClick={() => setCurrentPage('contact')} className="px-8 py-3 rounded-full font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-quiet)] transition-colors duration-200 shadow-lg">
                Termin anfragen
              </button>
              <button onClick={() => setCurrentPage('services')} className="px-8 py-3 rounded-full font-semibold text-[var(--accent-quiet)] bg-transparent border border-[var(--accent-quiet)] hover:bg-[var(--accent-quiet)] hover:text-white transition-colors duration-200">
                Unsere Leistungen
              </button>
            </div>
          </div>
          <div className="md:col-span-7 h-full flex items-center justify-center">
            <div className="w-full max-w-lg aspect-[4/3] bg-[var(--card-bg)] border-2 border-dashed border-[var(--border)] rounded-2xl flex items-center justify-center p-8">
                <p className="text-center text-lg font-medium text-[var(--muted)]">
                    Platzhalter für <br /> professionelles Praxisfoto
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="container mx-auto max-w-screen-xl px-4 pb-fib-md -mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-start">
            <div className="lg:col-span-2 space-y-5">
                <GlassCard contentClassName="p-5">
                    <div className="flex items-center space-x-3 text-sm font-semibold text-[var(--accent-quiet)] bg-teal-500/10 dark:bg-teal-500/20 rounded-full px-4 py-2 mb-4 w-fit">
                        {ICONS.alert}
                        <span>Aktuelles</span>
                    </div>
                    <p className="text-[var(--muted)]">{AKTUELLES_TEXT}</p>
                </GlassCard>
                <GoogleReviews />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
                <GlassCard contentClassName="p-5 flex items-start space-x-4">
                    <div className="flex-shrink-0 text-[var(--accent)] pt-1">{ICONS.clock}</div>
                    <div>
                        <h3 className="font-semibold text-[var(--ink)] mb-1">Öffnungszeiten</h3>
                        <p className="text-sm text-[var(--muted)]">{OPENING_HOURS}</p>
                    </div>
                </GlassCard>
                <GlassCard contentClassName="p-5 flex items-start space-x-4">
                    <div className="flex-shrink-0 text-[var(--accent)] pt-1">{ICONS.mapPin}</div>
                    <div>
                        <h3 className="font-semibold text-[var(--ink)] mb-1">Adresse & Anfahrt</h3>
                        <p className="text-sm text-[var(--muted)]">{ADDRESS}</p>
                    </div>
                </GlassCard>
            </div>
        </div>
      </section>

      {/* Philosophy Section with GlowCards */}
      <SpotlightCardDemo />
    </>
  );
};

export default HomePage;