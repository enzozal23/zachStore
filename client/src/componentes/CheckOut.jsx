import React, { useContext, useState } from 'react';
import { Cartcontext } from '../contexts/Cart';
import { useForm } from 'react-hook-form';
import { sellProductsRequest } from '../api/products';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillAlt, faCreditCard } from '@fortawesome/free-solid-svg-icons';

function CheckOut() {
    const [pedidoId, setPedidoId] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('mercadopago');
    const [purchaseCompleted, setPurchaseCompleted] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // Estado de loading
    const { carrito, precioTotal, vaciarCarrito } = useContext(Cartcontext);
    const { register, handleSubmit } = useForm();

    const key = process.env.REACT_APP_ACCESS_TOKEN;
    initMercadoPago(key, { locale: "es-AR" });

    const enviar = async (data) => {
        setIsLoading(true); // Activar loading
        const productosAVender = carrito.map(producto => ({
            title: producto.title,
            code: Number(producto.code),
            quantityToSell: producto.cantidad,
            price: producto.price
        }));

        try {
            const response = await sellProductsRequest({
                email: data.email,
                products: productosAVender,
                total: precioTotal,
                seller: "web",
                telfone: data.telefono
            });

            vaciarCarrito();
            setPedidoId(response.data.id);
            setPurchaseCompleted(true);
        } catch (error) {
            console.error('Error al actualizar el inventario:', error);
        } finally {
            setIsLoading(false); // Desactivar loading una vez completada la respuesta
        }
    };

    const handlePaymentMethodChange = (e) => {
        if (!isLoading) {
            setPaymentMethod(e.target.value);
        }
    };

    const onSubmit = (data) => {
        setIsLoading(true);
        if (paymentMethod === 'efectivo') {
            setTimeout(() => enviar(data), 2000); // Agregar retardo de 2 segundos
        } else {
            enviar(data);
        }
    };

    if (purchaseCompleted && paymentMethod === 'efectivo') {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6">
                <h1 className="text-2xl font-bold text-green-600 mb-4">
                    ¡Muchas gracias por tu compra! <br /> Has elegido pagar en efectivo. Nos pondremos en contacto lo antes posible contigo para coordinar la entrega o retiro.
                </h1>
                <p className="text-lg">
                    Tu número de orden es: <span className="font-semibold">{pedidoId}<br /><br />
                        revisa tu casilla de correos!
                    </span>
                </p>
            </div>
        );
    }

    return (
        <>
            <h1 className="text-center text-4xl font-bold text-gray-900 m-8">Finalizar Compra</h1>
            <div className="max-w-xl mx-auto bg-white p-10 rounded-lg shadow-lg">
                <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Nombre</label>
                        <input
                            type="text"
                            placeholder="Ingresa tu nombre"
                            {...register('nombre', { required: true })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Apellido</label>
                        <input
                            type="text"
                            placeholder="Ingresa tu apellido"
                            {...register('apellido', { required: true })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Ingresa tu e-mail"
                            {...register('email', { required: true })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Teléfono</label>
                        <input
                            type="phone"
                            placeholder="Ingresa tu teléfono"
                            {...register('telefono', { required: true })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-700 font-bold mb-2">Método de Pago</label>
                        <div className="flex space-x-4">
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    value="mercadopago"
                                    checked={paymentMethod === 'mercadopago'}
                                    onChange={handlePaymentMethodChange}
                                    className="form-radio h-5 w-5 text-blue-600"
                                    disabled={isLoading && paymentMethod === 'mercadopago'}
                                />
                                <FontAwesomeIcon icon={faCreditCard} className="ml-2 text-blue-600" />
                                <span className="ml-2 text-gray-700">MercadoPago</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="radio"
                                    value="efectivo"
                                    checked={paymentMethod === 'efectivo'}
                                    onChange={handlePaymentMethodChange}
                                    className="form-radio h-5 w-5 text-green-600"
                                    disabled={isLoading && paymentMethod === 'mercadopago'}
                                />
                                <FontAwesomeIcon icon={faMoneyBillAlt} className="ml-2 text-green-600" />
                                <span className="ml-2 text-gray-700">Efectivo</span>
                            </label>
                        </div>
                    </div>
                    {(carrito.length === 0) ? (
                        <button disabled className="w-full bg-gray-400 text-white font-bold py-2 px-4 rounded-md">
                            Carrito vacío
                        </button>
                    ) : (
                        <button
                            type="submit"
                            className={`w-full font-bold py-2 px-4 rounded-md transition-colors duration-300 ${
                                isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 text-white'
                            }`}
                            disabled={isLoading}
                        >
                            {isLoading ? 'Procesando compra...' : 'Comprar'}
                        </button>
                    )}
                </form>

                {pedidoId && paymentMethod === 'mercadopago' && (
                    <Wallet initialization={{ preferenceId: pedidoId }} />
                )}
            </div>

            {isLoading && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
                    <h2 className="text-2xl font-bold text-white">Gracias por tu compra!</h2>
                </div>
            )}
        </>
    );
}

export default CheckOut;
