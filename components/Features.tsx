import React from 'react';
import { Users, TrendingUp, Lightbulb, Crown } from 'lucide-react';

const features = [
  {
    icon: <Users className="w-8 h-8 text-brand-gold" />,
    title: "Networking de Elite",
    description: "Conecte-se diretamente com empresários, líderes de mercado e investidores de alto calibre. Oportunidade real de encontrar seu próximo parceiro ou mentor."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-brand-gold" />,
    title: "Apresentação de Negócios",
    description: "Tenha a chance de apresentar seu negócio em um ambiente focado. Tire conexões valiosas e encontre o investidor ou parceiro que você precisa para escalar."
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-brand-gold" />,
    title: "Conhecimento Acelerado",
    description: "Participe de palestras rápidas (10-20 minutos) e focadas em temas cruciais: Mentalidade, Vendas, Transformação Mental e Conexões Estratégicas."
  },
  {
    icon: <Crown className="w-8 h-8 text-brand-gold" />,
    title: "Acesso Exclusivo",
    description: "Ao final do jantar, você receberá um convite especial para integrar o nosso Business Club, o próximo passo para o seu sucesso contínuo."
  }
];

const Features: React.FC = () => {
  return (
    <section id="beneficios" className="py-10 sm:py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-gold tracking-widest uppercase text-sm font-bold">Diferenciais Únicos</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-white">Quatro Pilares para o Seu <br/>Crescimento Imediato</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-brand-dark/50 p-8 border border-white/5 hover:border-brand-gold/50 transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="mb-6 bg-brand-gold/10 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-brand-gold transition-colors">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;