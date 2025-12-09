import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'outline';
  href?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', variant = 'primary', href }) => {
  const baseStyle = "inline-flex items-center justify-center px-8 py-4 text-sm md:text-base font-bold uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1 rounded-sm cursor-pointer";
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-gold to-yellow-600 text-black hover:shadow-[0_0_20px_rgba(197,160,89,0.5)] border-none",
    outline: "border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black bg-transparent"
  };

  const combinedClasses = `${baseStyle} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick} 
      className={combinedClasses}
    >
      {children}
    </button>
  );
};

export default Button;