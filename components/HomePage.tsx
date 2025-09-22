
import React from 'react';
import { Page } from '../types';
import { AKTUELLES_TEXT, HERO_LEITTEXT, OPENING_HOURS, ADDRESS, ICONS } from '../constants';
import GlassCard from './GlassCard';

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
             {/* Abstract visual collage */}
            <div className="relative w-full max-w-lg aspect-square">
              <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-teal-100/50 dark:bg-teal-900/30 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-sky-100/50 dark:bg-sky-900/30 rounded-full blur-3xl"></div>
              <img src="https://picsum.photos/id/20/800/800" alt="Abstrakte medizinische Darstellung" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-2/3 object-cover rounded-[3rem] shadow-2xl mix-blend-luminosity opacity-40 dark:opacity-20" />
               <img src="https://picsum.photos/id/24/600/600" alt="Freundliche Praxisatmosphäre" className="relative w-full h-full object-cover rounded-[4rem] shadow-2xl opacity-90" style={{clipPath: 'polygon(0 0, 100% 20%, 100% 100%, 0 80%)'}}/>
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

      {/* Leittext Section */}
      <section className="py-fib-lg bg-slate-50 dark:bg-gray-900/50">
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
