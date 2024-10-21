import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Cartcontext } from '../contexts/Cart';


function CartList() {
    const { carrito, precioTotal, vaciarCarrito } = useContext(Cartcontext);

    return (
        <>
            {carrito.length === 0 ? (
                <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
                    <h1 className="text-2xl font-semibold text-gray-700 text-center">
                        No hay productos en el carrito :({' '}
                        <i className="bi bi-emoji-frown-fill text-yellow-500"></i>
                    </h1>
                    <hr className="my-4 w-2/3 border-gray-300" />
                    <Link to="/productos">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 ease-in-out">
                            Volver a productos
                        </button>
                    </Link>
                </div>
            ) : (
                <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-50">
                        {carrito.map((producto) => (
                            <div
                                key={producto._id}
                                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 lg:max-w-xs xl:max-w-sm"  // Aquí ajustamos el tamaño
                            >
                                <img
                                    src={producto.image}
                                    className="w-full h-48 object-cover"
                                    alt={producto.title}
                                    title={producto.title}
                                />
                                <div className="p-4 space-y-2">
                                    <h5 className="text-lg font-semibold text-gray-800">{producto.title}</h5>
                                    <p className="text-gray-600">Cantidad: {producto.cantidad}</p>
                                    <p className="text-gray-500 text-sm">Precio unitario: ${producto.price}</p>
                                    <p className="text-gray-800 font-bold">
                                        Precio total: ${producto.price * producto.cantidad}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col items-center justify-center m-8 space-y-4 ">
                        <h2 className="text-xl font-bold text-gray-800">Precio total: $ {precioTotal}</h2>
                        <div className="flex space-x-4">
                            <button
                                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 ease-in-out"
                                onClick={vaciarCarrito}
                            >
                                Vaciar carrito
                            </button>
                            <Link to="/finalizarCompra">
                                <button className="bg-black hover:bg-slate-400 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 ease-in-out">
                                    Continuar
                                </button>
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default CartList;
