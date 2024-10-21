// WhatsAppButton.js
import React from 'react';

const WhatsAppButton = () => {
    const phoneNumber = '543624110623'; 
    const message = '¡Hola! Quiero hacer una consulta sobre : '; // 

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 bg-green-500 text-white rounded-full p-4 shadow-lg hover:bg-green-600 transition duration-300"
        >
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-6 h-6"
            />
        </a>
    );
};

export default WhatsAppButton;
