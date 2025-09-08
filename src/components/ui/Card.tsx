import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function Card({ children, className, hoverEffect = true }: CardProps) {
  return (
    <div className={twMerge(
      'bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 shadow-lg border border-gray-700/50 relative overflow-hidden',
      hoverEffect && 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
      className
    )}>
      {/* Subtle gradient accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-70"></div>
      {children}
    </div>
  );
}