import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', variant = 'primary' }) => {
  const baseStyle = "px-8 py-4 text-sm md:text-base font-bold uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1 rounded-sm";
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-gold to-yellow-600 text-black hover:shadow-[0_0_20px_rgba(197,160,89,0.5)]",
    outline: "border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black"
  };

  return (
    <button 
      onClick={onClick} 
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;