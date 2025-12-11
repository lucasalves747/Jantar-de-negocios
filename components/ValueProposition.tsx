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
              src="https://storage.googleapis.com/msgsndr/dkM0aNpySiIFf3uusFTa/media/6938c15ddaae41591e9d3c48.png"
              alt="Jantar executivo"
              className="w-full object-cover rounded-sm "
            />
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight">
              Cansado de <span className="text-brand-gold">Networking Superficial?</span><br />
              Chegou a hora de sentar à mesa com quem realmente constrói.
            </h2>

            <div className="space-y-6 text-gray-300 font-light text-lg leading-relaxed text-justify">
              <p>
                Chega de eventos vazios. O <strong className="text-white">Jantar de Negócios</strong> é para você que está cansado de colecionar cartões de visita que nunca viram negócio.
              </p>
              <p>
                Aqui, o foco é em conversas reais e conexões que importam. Das <span className="text-brand-gold font-semibold">19h00 às 22h30</span>, em um ambiente exclusivo, você não vai apenas jantar; você vai sentar à mesa com empresários e investidores que pensam grande, prontos para transformar ideias em capital de verdade.

              </p>
              <p>
                Nós criamos este evento para que a mágica aconteça. Venha conhecer negócios de verdade, olho no olho.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ValueProposition;