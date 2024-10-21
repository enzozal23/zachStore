import React from 'react';
import { Link } from 'react-router-dom';

function Cards({ producto }) {
  const isDisabled = producto.quantity === 0; // Verificar si el producto no tiene stock

  return (
    <div
      className={`group relative max-w-xs m-5 shadow-sm pb-10 transition-shadow duration-300 
        ${isDisabled ? 'bg-gray-200 cursor-not-allowed' : 'hover:shadow-xl'} 
        sm:max-w-sm sm:m-3 md:m-5`} // Aseguramos que en pantallas más grandes, las cards sean más anchas
    >
      <Link to={isDisabled ? '#' : `/item/${producto._id}`} className={isDisabled ? 'pointer-events-none' : ''}>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-transparent">
          <img
            alt={producto.title}
            src={producto.image}
            className={`h-64 w-full object-contain object-center transition-all duration-300 group-hover:object-cover 
              ${isDisabled ? 'opacity-50' : ''}`}
          />
        </div>
      </Link>

      <div className="mt-4">
        <h3 className={`text-xl text-gray-700 m-5 ${isDisabled ? 'opacity-50' : ''}`}>
          <Link to={isDisabled ? '#' : `/item/${producto._id}`} className={isDisabled ? 'pointer-events-none' : ''}>
            {producto.title}
          </Link>
        </h3>

        <p className={`mt-2 text-2xl font-mono text-gray-900 m-5 ${isDisabled ? 'opacity-50' : ''}`}>
          ${producto.price}
        </p>
      </div>

      {/* Mostrar "No stock" si el producto no tiene cantidad disponible */}
      {isDisabled ? (
        <div className="flex items-center justify-center">
          <span className="text-red-600 font-semibold">No stock</span>
        </div>
      ) : (
        <div className="flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <Link to={`/item/${producto._id}`} className="bg-transparent text-black border border-black py-2 px-4 shadow-xl">
            Ver
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cards;

