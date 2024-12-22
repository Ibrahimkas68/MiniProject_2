import React from 'react';

interface PlaneProps {
  className?: string;
}

export const Plane: React.FC<PlaneProps> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.5 6.5L3 12l7.5 5.5V14h8v-4h-8V6.5z"
    />
  </svg>
);

// other imports and exports