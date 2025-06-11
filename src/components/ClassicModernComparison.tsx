import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ClassicModernComparison = () => {
  const [activeTab, setActiveTab] = useState('classic');

  const classicCars = [
    {
      id: 1,
      name: "Volkswagen Fusca 1973",
      image: "https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      specs: ["Motor 1.6L", "Refrigeração a ar", "Câmbio manual", "Charme atemporal"]
    },
    {
      id: 2,
      name: "Ford Mustang Clássico",
      image: "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      specs: ["V8 289ci", "Muscle car", "Design icônico", "Potência bruta"]
    },
    {
      id: 3,
      name: "Carro Esportivo Clássico",
      image: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      specs: ["Motor V8", "Tração traseira", "Esportivo vintage", "Lenda automotiva"]
    }
  ];

  const modernCars = [
    {
      id: 1,
      name: "Tesla Model S",
      image: "https://images.pexels.com/photos/9254503/pexels-photo-9254503.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      specs: ["1020 HP", "0-100 em 2.1s", "Autopilot", "632km autonomia"]
    },
    {
      id: 2,
      name: "BMW i8",
      image: "https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      specs: ["Híbrido plug-in", "Portas borboleta", "Design futurista", "Eficiência máxima"]
    },
    {
      id: 3,
      name: "Porsche Esportivo",
      image: "https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      specs: ["Alta performance", "Tecnologia avançada", "Esportivo premium", "Engenharia alemã"]
    }
  ];

  const currentCars = activeTab === 'classic' ? classicCars : modernCars;

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Clássicos vs Modernos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Compare a evolução automotiva através das décadas
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('classic')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'classic'
                  ? 'bg-orange-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-orange-500'
              }`}
            >
              Clássicos
            </button>
            <button
              onClick={() => setActiveTab('modern')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'modern'
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
            >
              Modernos
            </button>
          </div>
        </div>

        {/* Cars Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {currentCars.map((car, index) => (
            <div
              key={car.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {car.name}
                </h3>
                
                <ul className="space-y-2 mb-6">
                  {car.specs.map((spec, specIndex) => (
                    <li key={specIndex} className="flex items-center text-gray-600">
                      <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === 'classic'
                    ? 'bg-orange-500 hover:bg-orange-600 text-white'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}>
                  Ver Detalhes
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassicModernComparison;