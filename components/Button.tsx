import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'outline', 
  className = '',
  onClick 
}) => {
  const baseStyles = "px-8 py-3 uppercase tracking-[0.15em] text-xs font-medium transition-all duration-300 ease-out border font-sans";
  
  const variants = {
    primary: "bg-oldgold text-obsidian border-oldgold hover:bg-white hover:text-obsidian hover:border-white",
    outline: "bg-transparent text-platinum border-platinum/30 hover:border-oldgold hover:text-oldgold"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};