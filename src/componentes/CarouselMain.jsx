import React, { useState, useEffect } from 'react';
import image1 from "../images/zachMain.png";
import image2 from "../images/zachMain2-01.png";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image2];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Cambia la imagen cada 3 segundos (3000 ms)

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
  }, [images.length]);

  return (
    <div className="relative w-full mt-20">
      {/* Carrusel */}
      <div className="relative h-96 md:h-64 lg:h-[500px] overflow-hidden ">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-all duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
