import { createContext, useEffect, useState } from "react";



export const Cartcontext = createContext();
export const CartProvider = ({ children }) => {
    const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];



    const precioTotalCalculadoLocal = () => {
        return (carritoInicial.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0
        ))
    }//esto es el reduce del precio total de carrito pero del localStorage. porque si no al recargar la pagina se borraba el total




    const [carrito, setCarrito] = useState(carritoInicial)
    const [precioTotal, setPrecioTotal] = useState(precioTotalCalculadoLocal)
    const vaciarCarrito = () => {
        setCarrito([])
        setPrecioTotal(0)

    }
    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }, [carrito, setPrecioTotal])


    return (
        <Cartcontext.Provider value={{ carrito, setCarrito, setPrecioTotal, precioTotal, vaciarCarrito, carritoInicial }}>
            {children}
        </Cartcontext.Provider>
    )


}