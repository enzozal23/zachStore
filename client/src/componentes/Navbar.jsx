import React, { useState } from "react";
import Cartwidget from "./Cartwidget";
import { Link } from "react-router-dom";
import logoZach from '../images/zachLogo.webp';
import { Bars3Icon } from '@heroicons/react/24/outline';

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <nav className="bg-gray-800 py-4 shadow-md z-40 fixed top-0 left-0 w-full">
        {/* Aquí está la clase fixed */}
        <div className="container mx-auto flex items-center justify-between ">
          <button
            onClick={toggleSidebar}
            className="text-white bg-gray-700 px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none ml-2"
            aria-label="Abrir menú"
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>

          <Link to="/">
            <img src={logoZach} alt="home" className="w-32 h-16" />
          </Link>

          <Cartwidget />
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{ zIndex: 999 }}
      >
        <div className={`fixed top-0 left-0 h-full w-64 bg-blue-50 shadow-lg transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} z-50 flex flex-col`}>
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-lg font-semibold">Categorias</h2>
            <button onClick={toggleSidebar} className="text-gray-700 focus:outline-none">
              &times;
            </button>
          </div>

          <div className="p-4 flex-1">
            <Link to="productos" onClick={toggleSidebar} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Todos
            </Link>
            <Link to="productos/creatinas" onClick={toggleSidebar} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Creatinas
            </Link>
            <Link to="productos/proteinas" onClick={toggleSidebar} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Proteínas
            </Link>
            <Link to="productos/preentrenos" onClick={toggleSidebar} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Pre entrenos
            </Link>
            <Link to="productos/colageno" onClick={toggleSidebar} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Colágeno
            </Link>
            <Link to="productos/aminoacidos" onClick={toggleSidebar} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Aminoácidos
            </Link>
            <Link to="productos/geles" onClick={toggleSidebar} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Geles
            </Link>
            <Link to="productos/quemadores" onClick={toggleSidebar} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Quemadores
            </Link>
            <Link to="productos/ganadores" onClick={toggleSidebar} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Ganadores
            </Link>
            <Link to="productos/shaker" onClick={toggleSidebar} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Shaker
            </Link>
          </div>

          {/* Links en la parte inferior del sidebar */}
          <div className="p-4 mt-auto border-t">
            <Link to="/contact" onClick={toggleSidebar} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Contacto
            </Link>
            <Link to="/about" onClick={toggleSidebar} className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Sobre Nosotros
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Navbar;

