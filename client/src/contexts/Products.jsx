import { createContext, useContext, useEffect, useState } from "react";
import { getProductsRequest } from "../api/products";
const ProductsContext = createContext();
export const useProducts = () => {
    const context = useContext(ProductsContext);
    if (!context) {
        throw new Error("useTasks must be used within a productProvider" )
    }
    return context;

}
export function ProductsProvider({ children }) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await getProductsRequest();
                setProducts(res.data); // Actualizamos el estado con los productos
            } catch (error) {
                console.log(error);
            }
        };

        fetchProducts(); // Llamamos a la función para obtener los productos cuando el componente se monta
    }, []); // Dependencias vacías para que solo se ejecute al montar el componente




    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )
}