import React from 'react';
import InstagramIcon from '../images/instagramIcon.svg'; // Asegúrate de que la ruta sea correcta

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6 ">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Sección de enlaces */}
                    <div className="mb-4 md:mb-0">
                        <h5 className="text-lg font-semibold mb-2">Enlaces</h5>
                        <ul className="flex space-x-4">
                            <li><a href="/" className="hover:text-gray-400">Inicio</a></li>
                            <li><a href="/about" className="hover:text-gray-400">Sobre Nosotros</a></li>
                            <li><a href="/contact" className="hover:text-gray-400">Contacto</a></li>
                        </ul>
                    </div>

                    <div className="mb-4 md:mb-0">
                        <h5 className="text-lg font-semibold mb-2">Síguenos</h5>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/zachsuplementos/" className="hover:text-gray-400 flex items-center">

                                <span className="ml-2"> <img className='w-16 h-16' src={InstagramIcon} alt="instagram" />Instagram</span> {/* Texto junto al ícono */}
                            </a>
                        </div>
                    </div>

                    {/* Sección de derechos reservados */}
                    <div className="text-center md:text-right">
                        <p>&copy; 2024 Zach. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

