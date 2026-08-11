import React from 'react';

interface ArabianBorderProps {
  className?: string;
  variant?: 'simple' | 'ornate' | 'arch';
}

export const ArabianBorder: React.FC<ArabianBorderProps> = ({ className = '', variant = 'simple' }) => {
  if (variant === 'ornate') {
    return (
      <div className={`flex items-center justify-center my-6 text-[#C5A059]/60 ${className}`}>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent flex-1 max-w-xs" />
        <div className="px-3 flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
        </div>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#C5A059]/40 to-transparent flex-1 max-w-xs" />
      </div>
    );
  }

  return (
    <div className={`w-full overflow-hidden leading-none text-[#C5A059]/30 ${className}`}>
      <svg className="w-full h-2" viewBox="0 0 1200 12" fill="none" preserveAspectRatio="none">
        <path
          d="M0 6 L100 6 L105 1 L110 6 L115 11 L120 6 L1200 6"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <circle cx="600" cy="6" r="3" fill="currentColor" />
      </svg>
    </div>
  );
};
