import React, { useState } from 'react';
import Image from 'next/image';

const services = [
    {
        id: 1,
        title: 'PINTURA FUNDO E LETREIRO',
        imageUrl: '/servicos/frente-letreiro.webp',
    },
    {
        id: 2,
        title: 'PINTURA LETREIRO E CHAPA METÁLICA',
        imageUrl: '/servicos/gazin.webp',
    },
    {
        id: 3,
        title: 'PINTURA LETREIRO BAÚ FRIGORÍFICO',
        imageUrl: '/servicos/lucelmar-frigorifico.webp',
    },
    {
        id: 4,
        title: 'PINTURA LETREIRO SIDER(LONADO)',
        imageUrl: '/servicos/sider.webp',
    },
    {
        id: 5,
        title: 'ADESIVAÇÃO',
        imageUrl: '/servicos/adesivacao.webp',
    },
];

const ServicesSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState<string>('');

    const openModal = (imageUrl: string) => {
        setCurrentImage(imageUrl);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentImage('');
    };

    return (
        <section id="services" className="py-8 px-4 text-center pt-0">
            <div className="grid grid-col-1 mt-5 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                {services.map((service) => (
                    <div
                        key={service.id}
                        style={{ background: 'rgba(41,52,74,255)' }}
                        className="text-white w-full rounded-2xl p-6 flex flex-col items-center transform transition-transform duration-200 hover:scale-105"
                    >
                        <div
                            className="flex items-start justify-center text-center"
                            style={{
                                height: '4rem', 
                                overflow: 'hidden',
                            }}
                        >
                            <h3
                                className="font-semibold text-lg"
                                style={{
                                    fontFamily: 'Montserrat, sans-serif',
                                    lineHeight: '1.2',
                                }}
                            >
                                {service.title}
                            </h3>
                        </div>
                        <Image
                            src={service.imageUrl}
                            alt={service.title}
                            className="w-full h-50 rounded-2xl cursor-pointer"
                            onClick={() => openModal(service.imageUrl)}
                            width={500}
                            height={300}
                            quality={90}
                            priority
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
                        <Image
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
