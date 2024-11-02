import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800">404</h1>
                <p className="text-2xl text-gray-600 mt-4">Página no encontrada</p>
                <p className="text-gray-500 mt-2">Lo sentimos, la página que buscas no existe o ha sido movida.</p>
                
                <Link to="/" className="mt-8 inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                    Volver al inicio
                </Link>
            </div>
        </div>
    );
}

export default NotFound;
