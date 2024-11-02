import { useContext, useEffect, useState } from "react";
import { Cartcontext } from "../contexts/Cart";

function ItemCount({ item }) {
    const { carrito, setCarrito, setPrecioTotal } = useContext(Cartcontext);
    const [stock, setStock] = useState(true);
    const [cantidad, setCantidad] = useState(1);

    useEffect(() => {
        // Control de stock
        if (carrito[0]?.cantidad >= item.quantity) {
            setStock(false);
        } else {
            setStock(true);
        }
    }, [carrito, item.quantity]);

    const handleSumar = () => {
        if (cantidad < item.quantity) setCantidad(cantidad + 1);
    };

    const handleRestar = () => {
        if (cantidad > 1) setCantidad(cantidad - 1);
    };

    const handleAgregar = (item, cantidad) => {
        const productAdd = { ...item, cantidad };
        const nuevoCarrito = [...carrito];
        const existeProducto = nuevoCarrito.find((producto) => producto._id === item._id);

        if (existeProducto) {
            existeProducto.cantidad += cantidad;
        } else {
            nuevoCarrito.push(productAdd);
        }
        setCarrito(nuevoCarrito);
    };

    const precioTotalCalculado = () => {
        return carrito.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0);
    };

    useEffect(() => {
        setPrecioTotal(precioTotalCalculado);
    }, [carrito]);

    return (

        <div className="flex flex-col items-center mt-4"> {/* Contenedor centrado y espaciado */}
            <div className="flex items-center space-x-4"> {/* Espaciado entre botones y cantidad */}
                <button className="btn border rounded-full text-lg bg-gray-200 hover:bg-gray-300 transition p-2" onClick={handleSumar}>+</button>
                <p className="text-lg">{cantidad}</p>
                <button className="btn border rounded-full text-lg bg-gray-200 hover:bg-gray-300 transition p-2" onClick={handleRestar}>-</button>
            </div>
            {stock ? (
                <button
                    className={`mt-4 px-4 py-2 ${item.quantity > 0 ? 'bg-blue-400 hover:bg-blue-700 transition' : 'bg-gray-400 cursor-not-allowed'}`}
                    onClick={() => { handleAgregar(item, cantidad); }}
                    disabled={item.quantity === 0} // Deshabilitar si la cantidad es 0
                >
                    Agregar al carrito
                </button>
            ) : (
                <div className="mt-2 text-red-600">
                    <small>No hay más stock de este producto</small>
                </div>
            )}
        </div>
    );
}

export default ItemCount;
