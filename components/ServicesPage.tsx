import React from 'react';
import { SERVICES } from '../constants';
import { ServiceCategory } from '../types';
import GlassCard from './GlassCard';

const ServicesPage: React.FC = () => {
  const categories = [
    ServiceCategory.VORSORGE,
    ServiceCategory.DIAGNOSTIK,
    ServiceCategory.BETREUUNG
  ];

  return (
    <section className="py-fib-lg">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="text-center mb-16">
          <h1 className="font-display text-[clamp(2.4rem,5vw,3.1rem)] font-semibold text-[var(--ink)]">Leistungen</h1>
          <p className="text-lg text-[var(--muted)] mt-4 max-w-2xl mx-auto">
            Ein umfassender Überblick über unser medizinisches Spektrum für Ihre Gesundheit.
          </p>
        </div>

        <div className="space-y-16">
          {categories.map(category => {
            const categoryServices = SERVICES.filter(s => s.category === category);
            if (categoryServices.length === 0) return null;

            return (
              <div key={category}>
                <div className="mb-8">
                    <h2 className="font-display text-3xl font-semibold text-[var(--ink)]">{category}</h2>
                    <div className="mt-2 h-1 w-20 bg-[var(--accent)] rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryServices.map(service => (
                    <GlassCard 
                        key={service.name} 
                        className="p-0 overflow-hidden transform transition-all duration-300 ease-out-quint hover:-translate-y-1 hover:shadow-2xl hover:border-[var(--accent-quiet)]/50"
                    >
                      <div className="p-6 flex flex-col h-full">
                        <div className="mb-4">
                            <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent)]">
                                {service.icon && React.cloneElement(service.icon, { className: 'w-7 h-7' })}
                            </div>
                        </div>
                        <h3 className="text-lg font-semibold text-[var(--ink)] mb-2">{service.name}</h3>
                        <p className="text-sm text-[var(--muted)] leading-relaxed flex-grow">{service.description}</p>
                      </div>
                    </GlassCard>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
