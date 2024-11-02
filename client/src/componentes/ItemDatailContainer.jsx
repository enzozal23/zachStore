import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { useProducts } from '../contexts/Products'; // Asegúrate de que la ruta sea correcta

import SkeletonSingle from './SkeletonSingle';

function ItemDetailContainer() {
  const { products } = useProducts(); // Obtener productos del contexto
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true); // Estado para manejar la carga
  const { id } = useParams(); // Obtenemos el id de los parámetros de la URL

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true); // Activa el estado de carga

      // Si ya hay productos cargados en el contexto
      if (products.length > 0) {
        const foundItem = products.find(product => product._id === id);
        setItem(foundItem || null); // Asigna el producto si lo encuentra, o null
        setLoading(false); // Detenemos la carga
      }
    };

    fetchProduct(); // Llamamos a la función para obtener el producto cuando el componente se monta o cambia el id
  }, [id, products]); // Se ejecuta cada vez que cambia el id o los productos

  if (loading) {
    return <> Cargando... <SkeletonSingle /></>; // Muestra un mensaje de carga si aún estamos obteniendo el producto
  }

  if (!item) {
    return <div>Producto no encontrado</div>; // Muestra un mensaje si el producto no fue encontrado
  }

  return (
    <div>
      <ItemDetail item={item} /> {/* Renderizamos ItemDetail si existe el producto */}
    </div>
  );
}

export default ItemDetailContainer;
