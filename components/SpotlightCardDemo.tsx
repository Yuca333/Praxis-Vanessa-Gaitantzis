import React from 'react';
import { GlowCard } from "./ui/spotlight-card";
import { ICONS } from '../constants';

const values = [
    {
        title: "Persönlich",
        description: "Wir nehmen uns Zeit für Sie und gehen individuell auf Ihre Bedürfnisse ein.",
        icon: ICONS.userHeart,
        color: "blue" as const
    },
    {
        title: "Vertrauensvoll",
        description: "Eine offene Kommunikation und absolute Diskretion sind die Basis unserer Arbeit.",
        icon: ICONS.shieldCheck,
        color: "purple" as const
    },
    {
        title: "Kompetent",
        description: "Durch stetige Fortbildung gewährleisten wir medizinische Versorgung auf höchstem Niveau.",
        icon: ICONS.brainCircuit,
        color: "green" as const
    }
];

export function SpotlightCardDemo() {
  return (
    <section className="py-fib-lg">
      <div className="container mx-auto max-w-screen-xl px-4">
        <div className="text-center mb-16">
            <h2 className="font-display text-[clamp(2.0rem,4vw,2.6rem)] font-semibold text-[var(--ink)]">
                Unsere Philosophie
            </h2>
            <p className="text-lg text-[var(--muted)] mt-4 max-w-2xl mx-auto">
                Drei Grundpfeiler, die unsere tägliche Arbeit für Ihre Gesundheit definieren.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => (
            <GlowCard key={value.title} glowColor={value.color} customSize={true} className="p-8 flex flex-col items-center text-center">
                <div className="text-[var(--accent)] mb-4">
                    {React.cloneElement(value.icon, {className: "w-12 h-12"})}
                </div>
                <h3 className="font-display text-2xl font-semibold text-[var(--ink)] mb-3">{value.title}</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">{value.description}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpotlightCardDemo;