import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import Carrousel from './Carrousel';
import SkeletonCard from "./SkeletonCard";

function ItemDetail({ item }) {
    return (
        <>
            {!item && <SkeletonCard />}
            <div className="flex justify-center bg-slate-50 py-8">
                {/* Contenedor centrado y con padding */}
                <div className="bg-white shadow-lg overflow-hidden max-w-4xl w-full">
                    {/* Tarjeta con fondo blanco, sombra y bordes redondeados */}
                    <div className="flex flex-col md:flex-row">
                        {/* Diseño responsivo */}
                        <div className="md:w-1/3">
                            {/* Ancho ajustado en pantallas medianas */}
                            <img src={item.image} className="max-h-96 max-w-96 object-cover" alt={item.title} />
                            {/* Imagen responsiva */}
                        </div>
                        <div className="md:w-2/3 p-6 bg-slate-50">
                            {/* Contenido con padding */}
                            <h5 className="text-2xl font-bold text-gray-800">{item.title}</h5> {/* Título */}
                            <p className="mt-2 text-gray-600">{item.description}</p> {/* Descripción */}
                            <p className="mt-4 text-xl font-semibold text-gray-900">Precio: ${item.price}</p> {/* Precio */}
                            <p className="mt-2 text-sm text-gray-500">Quedan: {item.quantity} unidades.</p> {/* Stock */}

                            <div className="mt-4">
                                <ItemCount item={item} /> {/* Contador */}
                            </div>
                            {/* Botón de seguir comprando */}
                            <div className="mt-6">
                                <Link
                                    to="/productos"
                                    className="inline-block ml-20 px-6 py-3 bg-blue-400 text-black font-semibold  hover:bg-blue-700 transition duration-300"
                                >
                                    Seguir comprando
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Carrousel />
        </>
    );
}

export default ItemDetail;
