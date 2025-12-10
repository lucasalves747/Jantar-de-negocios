import React from 'react';
import Button from './Button';
import { ArrowRight} from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative mb-10 sm:mb-0  flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/1080?grayscale&blur=2" 
          alt="Ambiente de Negócios Luxuoso" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-brand-dark"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center pt-20">
       <p className="gold-gradient-text mb-3">   Aventura/Miami</p>
        <div className="inline-block mb-6 px-4 py-1 border border-brand-gold/50 rounded-full bg-black/50 backdrop-blur-sm">
          <span className="text-brand-gold text-xs md:text-sm font-bold tracking-widest uppercase">
            16 de Dezembro de 2025 
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
          Destrave Seu Próximo <br />
          <span className="gold-gradient-text">Nível de Negócios</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Conecte-se com líderes, expanda sua rede de contatos e descubra novas oportunidades de negócio em um ambiente cuidadosamente selecionado.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Button href="https://link.salee.ai/widget/survey/ERm3Q5x13DUSzrx7WnwU">
            Quero Acelerar Meu Negócio
          </Button>
          <button 
            onClick={() => document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center text-white hover:text-brand-gold transition-colors text-sm font-semibold tracking-wider uppercase group"
          >
            Saiba Mais
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;