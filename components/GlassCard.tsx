
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`bg-[var(--card-bg)] border border-[var(--border)] rounded-2xl transition-all duration-300 ease-out-quint ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;