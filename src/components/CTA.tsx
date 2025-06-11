import React from 'react';
import { ArrowRight, Users } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-8">
            <Users className="h-16 w-16 text-orange-500 mx-auto mb-6" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Sua paixão sobre quatro rodas
            <span className="block text-orange-500 mt-2">começa aqui</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Junte-se a milhares de entusiastas que já descobriram a maior comunidade 
            de carros clássicos e modernos do Brasil
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center">
              Junte-se à comunidade AutoMuseu+
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="text-blue-100 hover:text-white font-medium py-4 px-8 rounded-full border-2 border-blue-300 hover:border-white transition-all duration-300">
              Saiba mais
            </button>
          </div>

          {/* Features list */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center sm:justify-start text-blue-100">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
              <span>Acesso gratuito para sempre</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start text-blue-100">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
              <span>Comunidade ativa e engajada</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start text-blue-100">
              <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
              <span>Conteúdo exclusivo semanal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;