import { useContext } from "react";
import { Link } from "react-router-dom";
import { Cartcontext } from "../contexts/Cart";

function Cartwidget() {
  const { carrito } = useContext(Cartcontext);

  const cantidadProductos = carrito.reduce((acc, producto) => acc + producto.cantidad, 0);

  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 transition"
      >
        <Link to="/cartList" className="flex items-center space-x-2">
          <div className="relative">
            <svg
              className="w-8 h-8 fill-current text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="598 -476.1 1792 1792"
            >
              <path d="M1302 1059.9c0 34.7-12.7 64.7-38 90s-55.3 38-90 38-64.7-12.7-90-38-38-55.3-38-90 12.7-64.7 38-90 55.3-38 90-38 64.7 12.7 90 38 38 55.3 38 90zm896 0c0 34.7-12.7 64.7-38 90s-55.3 38-90 38-64.7-12.7-90-38-38-55.3-38-90 12.7-64.7 38-90 55.3-38 90-38 64.7 12.7 90 38 38 55.3 38 90zm128-1088v512c0 16-5.5 30.2-16.5 42.5s-24.5 19.5-40.5 21.5l-1044 122c8.7 40 13 63.3 13 70 0 10.7-8 32-24 64h920c17.3 0 32.3 6.3 45 19s19 27.7 19 45-6.3 32.3-19 45-27.7 19-45 19H1110c-17.3 0-32.3-6.3-45-19s-19-27.7-19-45c0-7.3 2.7-17.8 8-31.5s10.7-25.7 16-36 12.5-23.7 21.5-40 14.2-26.2 15.5-29.5l-177-823H726c-17.3 0-32.3-6.3-45-19s-19-27.7-19-45 6.3-32.3 19-45 27.7-19 45-19h256c10.7 0 20.2 2.2 28.5 6.5s14.8 9.5 19.5 15.5 9 14.2 13 24.5 6.7 19 8 26 3.2 16.8 5.5 29.5 3.8 21.3 4.5 26h1201c17.3 0 32.3 6.3 45 19s19 27.7 19 45z"></path>
            </svg>
            {/* Badge for the product count */}
            {cantidadProductos > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-semibold rounded-full h-5 w-5 flex items-center justify-center">
                {cantidadProductos}
              </span>
            )}
          </div>
        </Link>
      </button>
    </div>
  );
}

export default Cartwidget;
