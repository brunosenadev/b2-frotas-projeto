import React, { useState } from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const empresas = [
    {
        nome: "Empresa A",
        imagens: [
            "/bv.webp",
            "/bv.webp",
            "/bv.webp",
        ],
    },
    {
        nome: "Empresa B",
        imagens: [
            "/bv.webp",
            "/bv.webp",
            "/bv.webp",
        ],
    },
    {
        nome: "Empresa C",
        imagens: [
            "/bv.webp",
            "/bv.webp",
            "/bv.webp",
        ],
    },
    {
        nome: "Empresa D",
        imagens: [
            "/bv.webp",
            "/bv.webp",
            "/bv.webp",
        ],
    },
    {
        nome: "Empresa E",
        imagens: [
            "/bv.webp",
            "/bv.webp",
            "/bv.webp",
        ],
    },
];

const PortfolioSection = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentEmpresa, setCurrentEmpresa] = useState(empresas[0]);
    const [imageIndex, setImageIndex] = useState(0);

    const openModal = (empresaIndex: number) => {
        setCurrentEmpresa(empresas[empresaIndex]);
        setImageIndex(0);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setCurrentEmpresa(empresas[0]);
    };

    const handlePrevImage = () => {
        setImageIndex((prevIndex) =>
            prevIndex === 0 ? currentEmpresa.imagens.length - 1 : prevIndex - 1
        );
    };

    const handleNextImage = () => {
        setImageIndex((prevIndex) =>
            prevIndex === currentEmpresa.imagens.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section id="portfolio" className="py-8 px-4 text-center">
            <div className="flex justify-center items-center mb-5">
                <div className="w-1 h-10 bg-red-500 mr-4"></div>
                <h2 className="text-2xl font-semibold tracking-wide text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    NOSSO PORTFÓLIO
                </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
                {empresas.map((empresa, index) => (
                    <div
                        key={index}
                        className="relative cursor-pointer transform transition-transform duration-200 hover:scale-105"
                        onClick={() => openModal(index)}
                        style={{ borderRadius: '10px', overflow: 'hidden' }}
                    >
                        <Image
                            src={empresa.imagens[0]}
                            alt={`Imagem de ${empresa.nome}`}
                            width={300}
                            height={250}
                            layout="responsive"
                            objectFit="cover"
                            className='max-h-50'
                        />
                        <div className="absolute bottom-0 w-full bg-opacity-70 bg-black text-white py-2 text-lg"
                             style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                            {empresa.nome}
                        </div>
                    </div>
                ))}
            </div>

            {isModalOpen && currentEmpresa && (
                <div
                    className="fixed inset-0 flex justify-center items-center z-50"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
                    onClick={closeModal}
                >
                    <div className="relative w-full max-w-4xl h-auto">
                        <div className="relative flex items-center justify-center">
                            <Image
                                src={currentEmpresa.imagens[imageIndex]}
                                alt={`Imagem ${imageIndex + 1} de ${currentEmpresa.nome}`}
                                width={800}
                                height={500}
                                className="object-cover rounded-xl"
                            />
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handlePrevImage();
                                }}
                                className="absolute top-1/2 left-2 transform -translate-y-1/2 flex items-center justify-center"
                                style={{
                                    backgroundColor: 'rgba(31, 41, 55, 0.75)',
                                    color: 'white',
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                }}
                            >
                                <FiChevronLeft size={20} />
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleNextImage();
                                }}
                                className="absolute top-1/2 right-2 transform -translate-y-1/2 flex items-center justify-center"
                                style={{
                                    backgroundColor: 'rgba(31, 41, 55, 0.75)',
                                    color: 'white',
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                }}
                            >
                                <FiChevronRight size={20} />
                            </button>
                        </div>
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

export default PortfolioSection;
