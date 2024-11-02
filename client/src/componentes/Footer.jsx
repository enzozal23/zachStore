import React from 'react';
import InstagramIcon from '../images/instagramIcon.svg'; // Asegúrate de que la ruta sea correcta

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
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

                    {/* Sección de redes sociales */}
                    <div className="mb-4 md:mb-0">
                        <h5 className="text-lg font-semibold mb-2">Síguenos</h5>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/zachsuplementos/" className="hover:text-gray-400 flex items-center">
                                <span className="ml-0.5">
                                    <img className='w-12 h-12 ml-3' src={InstagramIcon} alt="instagram" /> Instagram
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Sección de derechos reservados y desarrollador */}
                    <div className="text-center md:text-right">
                        <p>&copy; 2024 Zach. Todos los derechos reservados.</p>
                        <p>Developed by <a href="mailto:enzo.z.1.ez@gmail.com" className="hover:text-gray-400">Enzo Zalazar</a></p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
