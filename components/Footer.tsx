import React from 'react';
import Button from './Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-brand-gold/10">
      <div className="container mx-auto px-6">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Sua Decisão de <span className="text-brand-gold">Alto Impacto</span>
          </h2>
          <p className="text-gray-400 text-lg mb-8 font-light">
            O sucesso nos negócios é construído em torno das pessoas que você conhece e das oportunidades que você cria. O Jantar de Negócios é o catalisador para ambos. Venha para uma noite onde cada prato servido é acompanhado de uma nova possibilidade de crescimento.
          </p>
          <div className="flex flex-col items-center gap-2">
            <Button href="https://link.salee.ai/widget/survey/ERm3Q5x13DUSzrx7WnwU">
              Quero Estar Presente no Jantar
            </Button>
            <span className="text-xs text-brand-gold mt-2 animate-pulse">Últimas Vagas Disponíveis!</span>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <div className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Jantar de Negócios. Todos os direitos reservados.
          </div>
          <div className="flex space-x-6">
             {/* Social placeholders or privacy policy links would go here */}
            <a href="#" className="hover:text-brand-gold transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;