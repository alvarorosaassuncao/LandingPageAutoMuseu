import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CarShowcase = () => {
  const cars = [
    {
      id: 1,
      name: "Volkswagen Fusca 1973",
      category: "Clássico",
      image: "https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop",
      description: "O eterno charme do besouro brasileiro"
    },
    {
      id: 2,
      name: "Tesla Model S",
      category: "Moderno",
      image: "https://images.pexels.com/photos/9254503/pexels-photo-9254503.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop",
      description: "O futuro da mobilidade elétrica"
    },
    {
      id: 3,
      name: "Ford Mustang Clássico",
      category: "Clássico",
      image: "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop",
      description: "Lenda americana dos muscle cars"
    },
    {
      id: 4,
      name: "BMW i8",
      category: "Moderno",
      image: "https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop",
      description: "Inovação híbrida e design futurista"
    },
    {
      id: 5,
      name: "Carro Esportivo Clássico",
      category: "Clássico",
      image: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop",
      description: "Elegância e potência dos anos dourados"
    },
    {
      id: 6,
      name: "Porsche Esportivo",
      category: "Moderno",
      image: "https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop",
      description: "Performance alemã de alta tecnologia"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [cars.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cars.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cars.length) % cars.length);
  };

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Galeria de Destaque
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Uma seleção especial dos modelos mais icônicos que atravessaram gerações
          </p>
        </div>

        <div className="relative">
          {/* Main carousel */}
          <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {cars.map((car, index) => (
                <div key={car.id} className="w-full h-full flex-shrink-0 relative">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay with car info */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                    <div className="absolute bottom-8 left-8 right-8">
                      <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${
                        car.category === 'Clássico' 
                          ? 'bg-orange-500 text-white' 
                          : 'bg-blue-500 text-white'
                      }`}>
                        {car.category}
                      </span>
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
                        {car.name}
                      </h3>
                      <p className="text-lg text-gray-200">
                        {car.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {cars.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-orange-500 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarShowcase;