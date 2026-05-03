import React from 'react';

export const GoldIcon = ({ icon, size = 24 }) => (
  <div className="relative inline-flex items-center justify-center">
    {React.createElement(icon, {
      size,
      className: 'text-yellow-600 relative z-10',
      strokeWidth: 1.5,
    })}
    <div className="absolute inset-0 bg-yellow-200 blur-md opacity-40 rounded-full" />
  </div>
);
