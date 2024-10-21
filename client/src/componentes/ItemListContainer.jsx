import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductsRequest } from "../api/products"; // Asegúrate de importar correctamente tu función de API
import Cards from "./ItemList";
import Loader from "./Loader";

function ItemListContainer() {
  const [titulo, setTitulo] = useState("PRODUCTOS");
  const [productos, setProductos] = useState([]);
  const [marcas, setMarcas] = useState([]); // Estado para las marcas
  const [marcaSeleccionada, setMarcaSeleccionada] = useState(""); // Estado para la marca seleccionada
  const { categoria } = useParams(); // Usamos destructuring para obtener la categoría
  console.log(categoria);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProductsRequest(); // Llamada a la API para obtener los productos
        const todosLosProductos = Array.isArray(res.data) ? res.data : []; // Asegurar que res.data sea un array
        console.log(todosLosProductos);

        // Obtener las marcas únicas
        const marcasUnicas = [...new Set(todosLosProductos.map((prod) => prod.marca))];
        setMarcas(marcasUnicas); // Actualizar el estado con las marcas únicas

        // Filtrar los productos por categoría y marca si existen
        const productosFiltrados = todosLosProductos.filter((prod) => {
          const filtroPorCategoria = categoria ? prod.category === categoria : true;
          const filtroPorMarca = marcaSeleccionada ? prod.marca === marcaSeleccionada : true;
          return filtroPorCategoria && filtroPorMarca;
        });

        // Actualizar el estado con los productos filtrados o todos los productos
        setProductos(productosFiltrados);
        setTitulo(categoria ? categoria : "PRODUCTOS");
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts(); // Ejecutar la función al cargar el componente o cuando cambie la categoría
  }, [categoria, marcaSeleccionada]); // Agregar marcaSeleccionada a las dependencias

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
        <Loader />
      )}
    </div>
  );
}

export default ItemListContainer;
