import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Cartcontext } from '../contexts/Cart';
import { useProducts } from '../contexts/Products';

function CartList() {
    const { carrito, vaciarCarrito, setCarrito } = useContext(Cartcontext);
    const { products } = useProducts();
    const [productosCambiados, setProductosCambiados] = useState([]);
    const [precioTotal, setPrecioTotal] = useState(0); // Estado para el precio total

    useEffect(() => {
        const carritoActualizado = carrito.map((productoCarrito) => {
            const productoActualizado = products.find(p => p._id === productoCarrito._id);

            if (productoActualizado && productoActualizado.price > productoCarrito.price) {
                return {
                    ...productoCarrito,
                    previousPrice: productoCarrito.price,
                    price: Number(productoActualizado.price),
                };
            }
            return productoCarrito;
        });

        if (JSON.stringify(carritoActualizado) !== JSON.stringify(carrito)) {
            setCarrito(carritoActualizado);
            const productosConCambioDePrecio = carritoActualizado.filter(
                producto => producto.previousPrice && producto.previousPrice < producto.price
            );
            setProductosCambiados(productosConCambioDePrecio);

        }
    }, [carrito, products, setCarrito]);

    useEffect(() => {
        // Calcular el precio total al inicializar o al actualizar el carrito
        const total = carrito.reduce((acc, producto) => acc + (producto.price * producto.cantidad), 0);
        setPrecioTotal(total);
    }, [carrito]);

    const handleEliminarProducto = (productoId) => {
        const carritoActualizado = carrito.filter(producto => producto._id !== productoId);
        setCarrito(carritoActualizado);
        setProductosCambiados([])
    };

    const handleVaciarCarrito = () => {
        vaciarCarrito();
        setProductosCambiados([]);
    };

    return (
        <>
            {productosCambiados.length > 0 && (
                <div className="bg-yellow-100 text-yellow-700 p-4 mb-4 rounded">
                    <h3 className="text-lg font-semibold">
                        ¡Atención! Algunos productos han cambiado de precio desde tu última visita:
                    </h3>
                    <ul>
                        {productosCambiados.map((producto) => (
                            <li key={producto._id}>
                                {producto.title}: El precio anterior era ${producto.previousPrice}.
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {carrito.length === 0 ? (
                <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
                    <h1 className="text-2xl font-semibold text-gray-700 text-center">
                        No hay productos en el carrito 
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-gray-50">
                        {carrito.map((producto) => (
                            <div
                                key={producto._id}
                                className="bg-white shadow-md rounded-lg p-4 flex items-start space-x-4"
                            >
                                <img
                                    src={producto.image}
                                    className="w-32 h-32 object-cover rounded"
                                    alt={producto.title}
                                    title={producto.title}
                                />
                                <div className="flex flex-col justify-between flex-grow">
                                    <div>
                                        <h5 className="text-lg font-semibold text-gray-800">{producto.title}</h5>
                                        <p className="text-gray-500 text-sm">Precio unitario: ${producto.price}</p>
                                        <p className="text-gray-600">Cantidad: {producto.cantidad}</p>
                                    </div>
                                    <div className="flex justify-between mt-4">
                                        <p className="text-gray-800 font-bold">
                                            Precio total: ${producto.price * producto.cantidad}
                                        </p>
                                        <button
                                            className="text-red-600 hover:text-red-800 font-semibold"
                                            onClick={() => handleEliminarProducto(producto._id)}
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-6 mt-8">
                        <h2 className="text-xl font-bold text-gray-800 mb-4">Precio total: $ {precioTotal}</h2>
                        <div className="flex justify-between">
                            <button
                                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 ease-in-out"
                                onClick={handleVaciarCarrito}
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
