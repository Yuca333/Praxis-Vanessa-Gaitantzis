
import React from 'react';
import { Page } from '../types';
import { AKTUELLES_TEXT, HERO_LEITTEXT, OPENING_HOURS, ADDRESS, ICONS } from '../constants';
import GlassCard from './GlassCard';
import GoogleReviews from './GoogleReviews';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
}

const logoBase64 = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAEgASADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAfEAEBAQEBAAEFAQAAAAAAAAABEQAhQVFxofCBsSD/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/SAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxOJxO'//DLA-END-OF-CONTENT-PART-1-OF-2";

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
            <div className="relative w-full max-w-lg p-2 border border-[var(--border)] rounded-2xl">
              <img 
                src={logoBase64} 
                alt="Logo der Praxis Vanessa Gaitantzis" 
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Info Cards & Aktuelles */}
      <section className="container mx-auto max-w-screen-xl px-4 pb-fib-md -mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <GlassCard className="lg:col-span-2 p-5">
                 <div className="flex items-center space-x-3 text-sm font-semibold text-[var(--accent-quiet)] bg-teal-500/10 dark:bg-teal-500/20 rounded-full px-4 py-2 mb-4 w-fit">
                    {ICONS.alert}
                    <span>Aktuelles</span>
                </div>
                <p className="text-[var(--muted)]">{AKTUELLES_TEXT}</p>
            </GlassCard>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-5">
                <GlassCard className="p-5 flex items-start space-x-4">
                    <div className="flex-shrink-0 text-[var(--accent)] pt-1">{ICONS.clock}</div>
                    <div>
                        <h3 className="font-semibold text-[var(--ink)] mb-1">Öffnungszeiten</h3>
                        <p className="text-sm text-[var(--muted)]">{OPENING_HOURS}</p>
                    </div>
                </GlassCard>
                <GlassCard className="p-5 flex items-start space-x-4">
                    <div className="flex-shrink-0 text-[var(--accent)] pt-1">{ICONS.mapPin}</div>
                    <div>
                        <h3 className="font-semibold text-[var(--ink)] mb-1">Adresse & Anfahrt</h3>
                        <p className="text-sm text-[var(--muted)]">{ADDRESS}</p>
                    </div>
                </GlassCard>
            </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="container mx-auto max-w-screen-xl px-4 pb-fib-md">
        <GoogleReviews />
      </section>

      {/* Leittext Section */}
      <section className="py-fib-lg">
        <div className="container mx-auto max-w-screen-xl px-4 text-center">
            <div className="max-w-3xl mx-auto space-y-6">
                 <h2 className="font-display text-[clamp(2.0rem,4vw,2.6rem)] font-semibold text-[var(--ink)]">
                    Persönlich, vertrauensvoll, kompetent.
                </h2>
                {HERO_LEITTEXT.slice(2).map((text, i) => <p key={i} className="text-lg text-[var(--muted)]">{text}</p>)}
            </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;