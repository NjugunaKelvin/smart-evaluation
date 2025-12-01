import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <div className={twMerge(
      'bg-white border border-gray-200 rounded-lg shadow-sm',
      'transition-colors duration-200',
      className
    )}>
      {children}
    </div>
  );
}