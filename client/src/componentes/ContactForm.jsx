import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { sendMailRequest } from '../api/products';
import ReCAPTCHA from 'react-google-recaptcha';


const ContactForm = () => {
    const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isHuman, setIsHuman] = useState(false);  // Nuevo estado para controlar reCAPTCHA

    // Manejador del envío del formulario
    const onSubmit = async (data) => {


        if (!isHuman) {
            setErrorMessage('Por favor, completa el reCAPTCHA.');
            return;
        }

        setErrorMessage('');
        setSuccessMessage('');

        try {
            // Enviar los datos a la API usando la función sendMailRequest
            await sendMailRequest(data);
            setSuccessMessage('¡Tu mensaje ha sido enviado con éxito!');
            reset();  // Limpia el formulario después de enviar
            window.location.reload();

        } catch (error) {
            console.error('Error enviando el mensaje:', error);
            setErrorMessage('Hubo un error al enviar el mensaje. Inténtalo nuevamente.');
        }
    };

    // Manejador del cambio en el reCAPTCHA
    const handleRecaptchaChange = (value) => {
        if (value) {
            setIsHuman(true); // El reCAPTCHA ha sido completado
        } else {
            setIsHuman(false); // El reCAPTCHA no ha sido completado o ha expirado
        }
    };

    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-8">Contáctanos</h2>

                {/* Información de contacto */}
                <div className="max-w-lg mx-auto mb-8 bg-white shadow-md rounded-lg p-8 text-center">
                    <p className="text-gray-700 text-lg mb-2">Número de contacto: +549 3624 110623</p>
                    <p className="text-gray-700 text-lg">Email: suplementoszach@gmail.com</p>
                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-8"
                >
                    {/* Campo Nombre */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            {...register('name', { required: 'El nombre es obligatorio' })}
                            className={`w-full px-3 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                    </div>

                    {/* Campo Email */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            {...register('email', {
                                required: 'El email es obligatorio',
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Formato de email inválido'
                                }
                            })}
                            className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    {/* Campo Subject (Asunto) */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                            Asunto
                        </label>
                        <input
                            type="text"
                            id="subject"
                            {...register('subject', { required: 'El asunto es obligatorio' })}
                            className={`w-full px-3 py-2 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        />
                        {errors.subject && <p className="text-red-500 text-sm">{errors.subject.message}</p>}
                    </div>

                    {/* Campo Mensaje */}
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Mensaje
                        </label>
                        <textarea
                            id="message"
                            {...register('message', { required: 'El mensaje es obligatorio' })}
                            className={`w-full px-3 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            rows="5"
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                    </div>

                    {/* reCAPTCHA */}
                    <div className="mb-6 text-center">
                        <ReCAPTCHA
                            sitekey={process.env.REACT_APP_KEY_RECAPTCH}
                            onChange={handleRecaptchaChange}
                        />
                    </div>

                    {/* Botón de Enviar */}
                    <div className="text-center">
                        <button
                            type="submit"
                            disabled={isSubmitting || !isHuman}  // Deshabilita el botón si el reCAPTCHA no está completo
                            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            {isSubmitting ? 'Enviando...' : 'Enviar'}
                        </button>
                    </div>

                    {/* Mensaje de éxito o error */}
                    {successMessage && <p className="mt-4 text-green-500 text-center">{successMessage}</p>}
                    {errorMessage && <p className="mt-4 text-red-500 text-center">{errorMessage}</p>}
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
