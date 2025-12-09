import React from 'react';

const ValueProposition: React.FC = () => {
  return (
    <section id="sobre" className="mb-2 md:py-32 bg-brand-dark relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2 relative">
             {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-20 h-20 border-t-2 border-l-2 border-brand-gold opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-2 border-r-2 border-brand-gold opacity-50"></div>
            
            <img 
              src="https://storage.googleapis.com/msgsndr/dkM0aNpySiIFf3uusFTa/media/69378b2e50387f86a76e0719.png" 
              alt="Jantar executivo" 
              className="w-full h-[500px] object-cover rounded-sm "
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
              Cansado de <span className="text-brand-gold">Networking Superficial?</span><br />
              Chegou a hora de sentar à mesa com quem realmente constrói.
            </h2>
            
            <div className="space-y-6 text-gray-300 font-light text-lg leading-relaxed text-justify">
              <p>
                O <strong className="text-white">Jantar de Negócios</strong> é mais do que um evento gastronômico; é um encontro estratégico, presencial, desenhado para empresários e investidores que buscam conexões de alto impacto e conhecimento prático.
              </p>
              <p>
                Em um formato intimista, das <span className="text-brand-gold font-semibold">19h00 às 22h30</span>, você terá a oportunidade única de transformar simples contatos em parcerias duradouras e capital real.
              </p>
              <p>
                Este não é um evento para trocar cartões e nunca mais se falar. É um ambiente curado para gerar negócios na própria noite.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;