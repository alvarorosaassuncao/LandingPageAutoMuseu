import React, { useEffect, useRef } from 'react';

const ContinuousCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const cars = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1429775/pexels-photo-1429775.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      name: "Volkswagen Fusca"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/9254503/pexels-photo-9254503.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      name: "Tesla Model S"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      name: "Ford Mustang"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/1805053/pexels-photo-1805053.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      name: "BMW i8"
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/1335077/pexels-photo-1335077.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      name: "Chevrolet Opala"
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/3802508/pexels-photo-3802508.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      name: "Porsche Taycan"
    },
    {
      id: 7,
      image: "https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      name: "Lamborghini"
    },
    {
      id: 8,
      image: "https://images.pexels.com/photos/1719648/pexels-photo-1719648.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      name: "Ferrari"
    }
  ];

  // Duplicate cars for seamless loop
  const duplicatedCars = [...cars, ...cars];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 1;

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled through one set of cars
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-gray-900 overflow-hidden">
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Modelos em Destaque
        </h2>
        <p className="text-gray-300 text-lg">
          Explore nossa coleção em movimento contínuo
        </p>
      </div>
      
      <div 
        ref={scrollRef}
        className="flex space-x-6 overflow-hidden"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {duplicatedCars.map((car, index) => (
          <div
            key={`${car.id}-${index}`}
            className="flex-shrink-0 w-80 h-60 relative group cursor-pointer"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white font-semibold text-lg">{car.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContinuousCarousel;