import React from 'react';
import { Printer as Steering, Search, Share2 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Steering,
      title: "Escolha o modelo",
      description: "Selecione entre nossa incrível coleção de carros antigos clássicos como Fusca, Opala, Mustang 67, Kombi e os mais modernos Tesla, BMW i8, Porsche Taycan.",
      color: "text-blue-600"
    },
    {
      icon: Search,
      title: "Explore em detalhes",
      description: "Navegue por nossa galeria interativa em HD com fichas técnicas completas, história do modelo, especificações originais e curiosidades únicas.",
      color: "text-orange-500"
    },
    {
      icon: Share2,
      title: "Compartilhe e inspire",
      description: "Envie fotos dos seus próprios modelos, curta seus favoritos e conecte-se com outros entusiastas apaixonados por automóveis clássicos e modernos.",
      color: "text-green-600"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Como Funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Três passos simples para mergulhar no mundo dos automóveis que marcaram época
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 ${step.color} bg-opacity-10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <step.icon className={`h-8 w-8 ${step.color}`} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {/* Step number */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-500">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;