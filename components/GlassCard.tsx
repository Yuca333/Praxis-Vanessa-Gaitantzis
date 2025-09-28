
import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string; // For the wrapper
  contentClassName?: string; // For the inner card content
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', contentClassName = '' }) => {

  // Merge class names from props into one string
  const combinedClassName = `${className} ${contentClassName}`;

  return (
    <div
      className={`
        bg-[var(--card-bg)] 
        border 
        border-[var(--border)] 
        rounded-2xl 
        transition-shadow
        duration-300 
        ease-out-quint 
        ${combinedClassName}`
      }
    >
      {children}
    </div>
  );
};

export default GlassCard;