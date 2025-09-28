

import React from 'react';
import { GlowingEffect } from './ui/glowing-effect';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string; // For the wrapper
  contentClassName?: string; // For the inner card content
  hasGlowEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', contentClassName = '', hasGlowEffect = false }) => {
  
  const cardContent = (
    <div className={`bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl transition-all duration-300 ease-out-quint h-full ${!hasGlowEffect ? className : ''} ${contentClassName}`}>
      {children}
    </div>
  );

  if (hasGlowEffect) {
    return (
      <div className={`relative h-full ${className}`}>
        <GlowingEffect
          spread={30}
          glow={true}
          disabled={false}
          proximity={80}
          inactiveZone={0.1}
          borderWidth={1}
          movementDuration={1.5}
          className="opacity-20"
        />
        {/* The relative here is important for stacking context */}
        <div className="relative h-full w-full"> 
            {cardContent}
        </div>
      </div>
    );
  }
  
  return cardContent;
};

export default GlassCard;