
import React from 'react';

const AnamnesisWave: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 dark:opacity-10 pointer-events-none motion-safe:animate-pulse">
      <svg
        className="absolute top-1/2 -translate-y-1/2 left-0 w-[200%] h-auto text-[var(--border)] animate-drift motion-reduce:animate-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2000 500"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M-50,250 Q200,100 500,250 T1000,250 T1500,250 T2000,250 T2500,250"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeOpacity="0.4"
        />
        <path
          d="M-50,255 Q220,120 500,255 T1000,255 T1500,255 T2000,255 T2500,255"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.6"
        />
         <path
          d="M-50,260 Q180,350 500,260 T1000,260 T1500,260 T2000,260 T2500,260"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeOpacity="0.3"
        />
      </svg>
    </div>
  );
};

export default AnamnesisWave;
