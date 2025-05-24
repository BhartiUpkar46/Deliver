import React, { useEffect, useState } from 'react';
import { Offers } from '../../assets/data';

const OfferPage = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % Offers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  if (!Offers || Offers.length === 0) {
    return (
      <div className="w-full h-72 flex items-center justify-center text-gray-500 bg-gray-100 rounded-xl">
        No offers available at the moment.
      </div>
    );
  }

  return (
    <div className="relative w-full h-72 mb-4 overflow-hidden rounded-xl">
      {/* Background Images */}
      {Offers.map((offer, index) => (
        <img
          
          key={index}
          src={offer.image}
          alt={offer.title}
          className={`absolute inset-0 w-full h-full  object-cover transition-opacity duration-1000 ease-in-out ${
            index === imageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">{Offers[imageIndex].title}</h2>
          <p className="text-base md:text-lg mb-3">{Offers[imageIndex].description}</p>
          <p className="text-sm text-red-300">
            <strong>Ends on:</strong> {Offers[imageIndex].endDate}
          </p>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {Offers.map((_, i) => (
          <div
            key={i}
            className={`w-2.5 h-2.5 rounded-full ${
              i === imageIndex ? 'bg-white' : 'bg-white/40'
            } transition-all duration-300`}
          />
        ))}
      </div>
    </div>
  );
};

export default OfferPage;
