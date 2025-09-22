
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { ServiceCategory } from '../types';
import GlassCard from './GlassCard';

const ServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'all'>('all');

  const categories = [ServiceCategory.VORSORGE, ServiceCategory.DIAGNOSTIK, ServiceCategory.BETREUUNG];
  
  const filteredServices = activeCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(service => service.category === activeCategory);

  return (
    <section className="py-fib-lg">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="text-center mb-16">
          <h1 className="font-display text-[clamp(2.4rem,5vw,3.1rem)] font-semibold text-[var(--ink)]">Leistungen</h1>
          <p className="text-lg text-[var(--muted)] mt-4 max-w-2xl mx-auto">
            Ein Überblick über unser medizinisches Spektrum. Wir bieten eine umfassende hausärztliche Versorgung.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-3 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
              activeCategory === 'all'
                ? 'bg-[var(--accent)] text-white'
                : 'bg-slate-100 dark:bg-gray-800 text-[var(--muted)] hover:bg-slate-200 dark:hover:bg-gray-700'
            }`}
          >
            Alle
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                activeCategory === category
                  ? 'bg-[var(--accent)] text-white'
                  : 'bg-slate-100 dark:bg-gray-800 text-[var(--muted)] hover:bg-slate-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredServices.map((service, index) => (
            <GlassCard key={index} className="p-6">
              <h3 className="font-semibold text-[var(--ink)]">{service.name}</h3>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
