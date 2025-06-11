import React from 'react';
import { Zap, Cpu, Gauge } from 'lucide-react';

const FuturisticSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Propulsão Elétrica",
      description: "Tecnologia de ponta em veículos 100% elétricos com autonomia superior a 500km"
    },
    {
      icon: Cpu,
      title: "Inteligência Artificial",
      description: "Sistemas autônomos de condução e assistentes virtuais integrados"
    },
    {
      icon: Gauge,
      title: "Performance Extrema",
      description: "Aceleração de 0-100km/h em menos de 3 segundos com torque instantâneo"
    }
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Futuristic background */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/2449452/pexels-photo-2449452.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop"
          alt="Futuristic road"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-purple-900/80 to-blue-900/90"></div>
        
        {/* Animated grid overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="grid-pattern"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            O Futuro da Mobilidade
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Tecnologias revolucionárias que estão redefinindo a experiência automotiva
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              
              <p className="text-blue-100 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FuturisticSection;