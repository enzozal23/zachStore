import { Slide, Fade } from "react-awesome-reveal";
import React from 'react';

const AboutUs = () => {
    return (
        <section className="bg-gray-100 py-20">
            <div className="max-w-5xl mx-auto px-4">
                <Fade><h2 className="text-4xl font-bold text-center mb-6 text-gray-800">Nuestra Historia</h2></Fade>

                <p className="text-lg text-gray-600 mb-8 text-center">
                    En Zach, somos dos amigos que comparten una profunda pasión por el fitness y el bienestar.
                    Juntos, hemos decidido crear una marca que no solo ofrezca suplementos, sino que también inspire a otros a alcanzar sus metas de salud.
                </p>
                <p className="text-lg text-gray-600 mb-8 text-center">
                    Nuestra propia experiencia en el gimnasio nos ha enseñado que cada entrenamiento es una oportunidad para superarse.
                    Sabemos lo que se necesita para lograr un rendimiento óptimo, y estamos aquí para ofrecer los productos que realmente marcan la diferencia.
                </p>
                <p className="text-lg text-gray-600 mb-8 text-center">
                    En Zach, no solo vendemos suplementos; compartimos nuestra pasión. Nuestro compromiso es ser distribuidores de confianza, ofreciendo solo lo mejor para nuestros clientes y creando una comunidad que apoye el crecimiento mutuo.
                </p>

                <div className="flex flex-col md:flex-row justify-around items-center">
                    <Slide>
                        <div className="bg-white shadow-lg rounded-lg p-6 mb-4 md:mb-0 md:w-1/3">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Nuestra Misión</h3>
                            <p className="text-gray-600">
                                Impulsar el bienestar y el rendimiento de nuestros clientes a través de suplementos de calidad.
                            </p>
                        </div>
                    </Slide>
                    <Slide direction="right">

                        <div className="bg-white shadow-lg rounded-lg p-6 mb-4 md:mb-0 md:w-1/3">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Nuestra Visión</h3>
                            <p className="text-gray-600">
                                Ser un referente en la comunidad fitness, transformando vidas a través de la nutrición y el apoyo.
                            </p>
                        </div>
                    </Slide>

                    <div className="bg-white shadow-lg rounded-lg p-6 mb-4 md:mb-0 md:w-1/3">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Nuestros Valores</h3>
                        <p className="text-gray-600">
                            Pasión, calidad y dedicación a la comunidad.
                        </p>
                    </div>
                </div>

            </div>
        </section >
    );
};

export default AboutUs;
