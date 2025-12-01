import { ReactNode, ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export default function Button({
  children,
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  const baseStyles = `
    px-5 py-2.5 rounded-full font-bold 
    transition-all duration-200 
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    text-sm
  `;

  const variants = {
    primary: `
      bg-blue-600 text-white 
      hover:bg-blue-700 
      focus:ring-blue-600
      active:transform active:scale-[0.98]
    `,
    secondary: `
      bg-gray-700 text-white 
      hover:bg-gray-800 
      focus:ring-gray-700
      active:transform active:scale-[0.98]
    `,
    outline: `
      border border-blue-600 
      text-blue-600 
      hover:bg-blue-50 
      focus:ring-blue-600
    `
  };

  return (
    <button
      className={twMerge(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}