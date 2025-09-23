import React, { useState } from 'react';
import { ICONS, SERVICES } from '../constants';
import { ServiceCategory } from '../types';
import GlassCard from './GlassCard';

const ServicesPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory | 'all'>('all');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const categories = [ServiceCategory.VORSORGE, ServiceCategory.DIAGNOSTIK, ServiceCategory.BETREUUNG];
  
  const filteredServices = activeCategory === 'all' 
    ? SERVICES 
    : SERVICES.filter(service => service.category === activeCategory);

  const handleToggle = (serviceName: string) => {
    setExpandedService(expandedService === serviceName ? null : serviceName);
  };

  return (
    <section className="py-fib-lg">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="text-center mb-16">
          <h1 className="font-display text-[clamp(2.4rem,5vw,3.1rem)] font-semibold text-[var(--ink)]">Leistungen</h1>
          <p className="text-lg text-[var(--muted)] mt-4 max-w-2xl mx-auto">
            Ein Überblick über unser medizinisches Spektrum. Klicken Sie auf eine Leistung für mehr Details.
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
          {filteredServices.map((service) => {
            const isExpanded = expandedService === service.name;
            const serviceId = `service-desc-${service.name.replace(/[^a-zA-Z0-9]/g, '-')}`;
            return (
              <GlassCard key={service.name} className="p-0 overflow-hidden">
                <button
                  onClick={() => handleToggle(service.name)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4"
                  aria-expanded={isExpanded}
                  aria-controls={serviceId}
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <div className="flex-shrink-0 text-[var(--accent)]">
                      {service.icon}
                    </div>
                    <h3 className="font-semibold text-[var(--ink)]">{service.name}</h3>
                  </div>
                  <div className={`flex-shrink-0 transform transition-transform duration-300 ease-in-out ${isExpanded ? 'rotate-180' : ''}`}>
                    {ICONS.chevronDown}
                  </div>
                </button>
                <div
                  id={serviceId}
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-96' : 'max-h-0'}`}
                >
                  <div className="px-6 pb-6 pt-2 text-[var(--muted)] text-sm leading-relaxed">
                    {service.description}
                  </div>
                </div>
              </GlassCard>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;