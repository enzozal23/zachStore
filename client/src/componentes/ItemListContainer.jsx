import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../contexts/Products"; // Importamos el hook del contexto
import Cards from "./ItemList";
// import Loader from "./Loader";
import SkeletonCard from "./SkeletonCard";

function ItemListContainer() {
  const [titulo, setTitulo] = useState("PRODUCTOS");
  const [productos, setProductos] = useState([]); // Estado para los productos filtrados
  const [marcas, setMarcas] = useState([]); // Estado para las marcas
  const [marcaSeleccionada, setMarcaSeleccionada] = useState(""); // Estado para la marca seleccionada
  const { categoria } = useParams(); // Usamos destructuring para obtener la categoría

  const { products } = useProducts(); // Obtenemos los productos del contexto

  useEffect(() => {
    // Obtener las marcas únicas
    const marcasUnicas = [...new Set(products.map((prod) => prod.marca))];
    setMarcas(marcasUnicas); // Actualizar el estado con las marcas únicas

    // Filtrar los productos por categoría y marca si existen
    const productosFiltrados = products.filter((prod) => {
      const filtroPorCategoria = categoria ? prod.category === categoria : true;
      const filtroPorMarca = marcaSeleccionada ? prod.marca === marcaSeleccionada : true;
      return filtroPorCategoria && filtroPorMarca;
    });

    // Actualizar el estado con los productos filtrados o todos los productos
    setTitulo(categoria ? categoria : "PRODUCTOS");
    setProductos(productosFiltrados);
  }, [categoria, marcaSeleccionada, products]); // Agregar `products` como dependencia

  return (
    <div>
      {/* Selector de marcas */}
      <div className="m-4">
        <label htmlFor="marca" className="mr-2 font-semibold text-gray-700">Filtrar por Marca:</label>
        <select
          id="marca"
          value={marcaSeleccionada}
          onChange={(e) => setMarcaSeleccionada(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        >
          <option value="" className="text-gray-500">Todas las Marcas</option>
          {marcas.map((marca, index) => (
            <option key={index} value={marca} className="text-gray-700">{marca}</option>
          ))}
        </select>
      </div>

      {productos.length > 0 ? (
        <div>
          <Cards productos={productos} titulo={titulo} />
        </div>
      ) : (
        <SkeletonCard />
      )}
    </div>
  );
}

export default ItemListContainer;
