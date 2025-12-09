import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const CTA_LINK = "https://link.salee.ai/widget/survey/ERm3Q5x13DUSzrx7WnwU";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-lg border-b border-brand-gold/20' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Text Representation to match the image style */}
       <img 
  src="https://storage.googleapis.com/msgsndr/dkM0aNpySiIFf3uusFTa/media/69370e0d2922ae51b2f1b365.png"
  alt="Logo"
  className="w-32 h-auto"
/>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('sobre')} className="text-gray-300 hover:text-brand-gold transition-colors text-sm tracking-widest uppercase">Sobre</button>
          <button onClick={() => scrollToSection('beneficios')} className="text-gray-300 hover:text-brand-gold transition-colors text-sm tracking-widest uppercase">Benefícios</button>
          <button onClick={() => scrollToSection('detalhes')} className="text-gray-300 hover:text-brand-gold transition-colors text-sm tracking-widest uppercase">Detalhes</button>
          <Button href={CTA_LINK} className="!py-2 !px-6 text-xs">
            Reservar
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black border-b border-brand-gold/30 md:hidden flex flex-col items-center py-8 space-y-6 animate-fade-in">
          <button onClick={() => scrollToSection('sobre')} className="text-white hover:text-brand-gold text-lg tracking-widest uppercase">Sobre</button>
          <button onClick={() => scrollToSection('beneficios')} className="text-white hover:text-brand-gold text-lg tracking-widest uppercase">Benefícios</button>
          <button onClick={() => scrollToSection('detalhes')} className="text-white hover:text-brand-gold text-lg tracking-widest uppercase">Detalhes</button>
          <Button href={CTA_LINK}>
            Reservar Agora
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;