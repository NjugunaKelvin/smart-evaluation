import { ReactNode, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={twMerge(
        'bg-white border border-gray-200 rounded-lg shadow-sm',
        'transition-colors duration-200',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}