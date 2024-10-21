import React from "react";
import Cards from "./Cards";



function ItemList({ productos, titulo }) {
  const productosRecibido = productos;

  return (
    <>
      <h3 className="p-10 text-4xl font-bold tracking-wide text-gray-800 font-sans">{titulo}</h3>
      <div className="flex flex-col lg:flex-row lg:space-x-8 p-4 lg:p-8">

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 ">
          {productosRecibido.map((producto) => {
            return <Cards key={producto.id} producto={producto} />;
          })}
        </div>
      </div>
    </>
  );
}

export default ItemList;
