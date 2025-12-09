import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const EventDetails: React.FC = () => {
  return (
    <section id="detalhes" className="py-20 relative">
       {/* Background Image Parallax effect */}
       <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/1920/800?grayscale&blur=4" 
          alt="Detalhes do Jantar" 
          className="w-full h-full object-cover opacity-10"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-brand-dark/95 border border-brand-gold/30 p-10 md:p-16 shadow-[0_0_50px_rgba(0,0,0,0.8)] text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white">Detalhes e Logística</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border border-brand-gold rounded-full flex items-center justify-center mb-4 text-brand-gold">
                <Calendar />
              </div>
              <h4 className="text-lg font-bold mb-2 text-white">Data</h4>
              <p className="text-gray-400">Terça-feira,<br/>16 de Dezembro de 2025</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border border-brand-gold rounded-full flex items-center justify-center mb-4 text-brand-gold">
                <Clock />
              </div>
              <h4 className="text-lg font-bold mb-2 text-white">Horário</h4>
              <p className="text-gray-400">Das 19h00 às 22h30<br/>(Pontualmente)</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 border border-brand-gold rounded-full flex items-center justify-center mb-4 text-brand-gold">
                <MapPin />
              </div>
              <h4 className="text-lg font-bold mb-2 text-white">Local</h4>
              <p className="text-gray-400">Restaurante de Luxo<br/>Centro Empresarial</p>
            </div>
          </div>

          <div className="bg-brand-gold/10 p-6 rounded-sm mb-8">
            <p className="text-brand-gold font-semibold text-sm uppercase tracking-wide">
              As vagas são limitadas para garantir a qualidade do networking.
            </p>
          </div>
          
          <div id="cta">
            <a 
              href="https://link.salee.ai/widget/survey/ERm3Q5x13DUSzrx7WnwU" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block w-full md:w-auto bg-white text-black font-bold py-4 px-10 hover:bg-brand-gold transition-colors duration-300 uppercase tracking-widest"
            >
              Reservar Minha Vaga Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;