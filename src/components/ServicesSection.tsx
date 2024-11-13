import React, { useState } from 'react';
import { FaPaintBrush, FaTruck, FaSnowflake } from 'react-icons/fa';

const services = [
    {
        id: 1,
        icon: <FaPaintBrush className="text-white text-2xl" />,
        title: 'Pintura de Baús – Todos os Tipos e Tamanhos',
        imageUrl: '/bau-todostipos.jpg',
    },
    {
        id: 2,
        icon: <FaTruck className="text-white text-2xl" />,
        title: 'Pintura de Baús Sider',
        imageUrl: '/bau-sider.jpg',
    },
    {
        id: 3,
        icon: <FaSnowflake className="text-white text-2xl" />,
        title: 'Pintura de Câmaras Frigoríficas',
        imageUrl: '/frigorifico.jpg',
    },
];

const ServicesSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState<string>();

    const openModal = (imageUrl: string) => {
        setCurrentImage(imageUrl);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentImage('');
    };

    return (
        <section id="services" className="py-8 px-4 text-center">
            <h2
                className="text-2xl font-semibold tracking-wide text-black"
                style={{
                    fontFamily: 'Montserrat, sans-serif',
                }}
            >
                NOSSOS SERVIÇOS
            </h2>
            <div className="grid mt-5 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                    <div
                        key={service.id}
                        style={{ background: 'rgba(41,52,74,255)' }}
                        className="text-white rounded-xl p-6 flex flex-col items-center transform transition-transform duration-200 hover:scale-105"
                    >
                        <div className="mb-4">{service.icon}</div>
                        <h3 className="font-montserrat font-bold text-xl mb-2" style={{ minHeight: '3em' }}>
                            {service.title}
                        </h3>
                        <img
                            src={service.imageUrl}
                            alt={service.title}
                            className="w-full h-40 object-cover rounded-xl cursor-pointer"
                            onClick={() => openModal(service.imageUrl)}
                        />
                    </div>
                ))}
            </div>
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
                    onClick={closeModal}
                >
                    <div className="relative">
                        <img
                            src={currentImage}
                            alt="Imagem do serviço"
                            width={800}
                            height={500}
                            className="object-cover rounded-xl"
                        />
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ServicesSection;
