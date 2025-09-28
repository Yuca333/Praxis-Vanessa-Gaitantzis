
import React from 'react';
import { TIMELINE_EVENTS, TEAM_INFO } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <section className="py-fib-lg">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="text-center mb-20">
            <h1 className="font-display text-[clamp(2.4rem,5vw,3.1rem)] font-semibold text-[var(--ink)]">Über mich</h1>
            <p className="text-lg text-[var(--muted)] mt-4 max-w-3xl mx-auto">
              Erfahren Sie mehr über meinen Werdegang, meine Qualifikationen und die Philosophie, die meine tägliche Arbeit prägt.
            </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
                <div className="sticky top-28">
                    <div className="rounded-2xl w-full aspect-[4/5] shadow-xl bg-[var(--card-bg)] border-2 border-dashed border-[var(--border)] flex items-center justify-center p-8">
                        <p className="text-center text-lg font-medium text-[var(--muted)]">
                            Platzhalter für <br /> professionelles Photo
                        </p>
                    </div>
                    <div className="mt-8">
                        <h2 className="font-display text-2xl font-semibold text-[var(--ink)]">Das Team</h2>
                        <p className="mt-2 text-[var(--muted)]">{TEAM_INFO}</p>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-7">
                <h2 className="font-display text-[clamp(2.0rem,4vw,2.6rem)] font-semibold text-[var(--ink)] mb-12">Mein Werdegang</h2>
                <div className="relative border-l-2 border-[var(--border)] pl-8 space-y-12">
                     {TIMELINE_EVENTS.map((event, index) => (
                         <div key={index} className="relative">
                              <div className="absolute -left-[53px] top-0 w-10 h-10 bg-[var(--bg)] rounded-full flex items-center justify-center border-2 border-[var(--border)] text-[var(--accent)]">
                                {event.icon && React.cloneElement(event.icon, { className: 'w-5 h-5' })}
                              </div>
                             <p className="text-sm font-semibold text-[var(--accent-quiet)] mb-1">{event.year}</p>
                             <h3 className="text-xl font-semibold text-[var(--ink)]">{event.title}</h3>
                             <p className="text-[var(--muted)] mt-1">{event.description}</p>
                         </div>
                     ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;