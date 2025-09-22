
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-[var(--card-bg)] backdrop-blur-lg border border-[var(--card-border)] shadow-[var(--card-shadow)] rounded-2xl transition-all duration-300 ease-out-quint ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;
