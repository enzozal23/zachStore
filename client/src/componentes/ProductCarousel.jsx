import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { getProductsRequest } from '../api/products'; // Ajusta esta importación a tu estructura
import ItemListContainer from './ItemListContainer';

const PrevArrow = ({ onClick }) => (//svg botones
  <div className="absolute left-0 z-10 flex items-center justify-center h-full w-10 cursor-pointer top-1/2 transform -translate-y-1/2" onClick={onClick}>
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent border border-black">
      <svg
        className="w-6 h-6 text-black"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 19l-7-7 7-7"
        ></path>
      </svg>
    </span>
  </div>
);

const NextArrow = ({ onClick }) => (  //svg botones
  <div className="absolute right-0 z-10 flex items-center justify-center h-full w-10 cursor-pointer top-1/2 transform -translate-y-1/2" onClick={onClick}>
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-transparent border border-black">
      <svg
        className="w-6 h-6 text-back"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
    </span>
  </div>
);

const ProductCarousel = () => {
  const [productos, setProductos] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0); // Estado para controlar la diapositiva actual

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProductsRequest();
        const todosLosProductos = res.data;
        setProductos(todosLosProductos);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Configuración del carrusel
  const settings = {
    dots: false, // Desactiva los puntos
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentSlide(current),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="relative p-5 m-5 sm:m-48 bg-slate-50 shadow-lg max-w-full">
        <h2 className="text-2xl font-bold mb-4">Nuestros Productos</h2>
        <Slider {...settings}>
          {productos.map((producto) => (
            <div key={producto._id} className="flex justify-center">
              <div className="group relative max-w-xs m-5 shadow-sm pb-10 transition-shadow duration-300 hover:shadow-xl">
                <Link to={`/item/${producto._id}`}>
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-transparent">
                    <img
                      alt={producto.title}
                      src={producto.image}
                      className="h-64 w-full object-contain object-center transition-all duration-300 group-hover:object-cover"
                    />
                  </div>
                </Link>
                <div className="mt-4">
                  <h3 className="text-xl text-gray-700 m-5">
                    <Link to={`/item/${producto._id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {producto.title}
                    </Link>
                  </h3>

                  <p className="mt-2 text-2xl font-mono text-gray-900 m-5">${producto.price}</p>
                </div>

                <div className="flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Link to={`/item/${producto._id}`} className="bg-transparent text-black border border-black py-2 px-4 shadow-xl">
                    Ver
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Línea negra como indicador */}
        <div className="flex justify-center mt-4">
          <div className="flex space-x-2 max-w-xs mx-auto">
            {productos.map((_, index) => (
              <div
                key={index}
                className={`w-10 h-0.5 ${currentSlide === index ? 'bg-red-500' : 'bg-gray-300'} transition-colors duration-300`}
              />
            ))}
          </div>
        </div>
      </div>

      <ItemListContainer />
    </>
  );
};

export default ProductCarousel;
