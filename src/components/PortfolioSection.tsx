import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Usando react-icons para as setas

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
];

const PortfolioSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageIndex, setImageIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        empresas.forEach((empresa) => {
            empresa.imagens.forEach((src) => {
                const img = new window.Image();
                img.src = src;
            });
        });
    }, []);

    const handlePrevImage = () => {
        setImageIndex((prevIndex) =>
            prevIndex === 0 ? empresas[currentIndex].imagens.length - 1 : prevIndex - 1
        );
    };

    const handleNextImage = () => {
        setImageIndex((prevIndex) =>
            prevIndex === empresas[currentIndex].imagens.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrevCompany = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? empresas.length - 1 : prevIndex - 1));
        setImageIndex(0);
    };

    const handleNextCompany = () => {
        setCurrentIndex((prevIndex) => (prevIndex === empresas.length - 1 ? 0 : prevIndex + 1));
        setImageIndex(0);
    };

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <section id="portfolio" style={{ width: '100%', padding: '40px 20px', textAlign: 'center' }}>
            <h2 className="text-2xl font-semibold tracking-wide text-black" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                NOSSO PORTFÓLIO
            </h2>
            <div style={{ marginTop: '30px' }}>
                <h3 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '20px', color: '#29374A', marginBottom: '20px' }}>
                    {empresas[currentIndex].nome}
                </h3>
                <div style={{ position: 'relative', width: '100%', maxWidth: '800px', margin: '0 auto', overflow: 'hidden', borderRadius: '10px' }}>
                    <div style={{ display: 'flex', transition: 'transform 0.5s ease-in-out', transform: `translateX(-${imageIndex * 100}%)` }}>
                        {empresas[currentIndex].imagens.map((imagem, index) => (
                            <div key={index} style={{ flex: '0 0 100%', padding: '10px', position: 'relative' }}>
                                <Image
                                    src={imagem}
                                    alt={`Caminhão da ${empresas[currentIndex].nome}`}
                                    width={800} // largura desejada
                                    height={500} // altura desejada
                                    style={{
                                        objectFit: 'cover',
                                        borderRadius: '10px',
                                        opacity: 0.9,
                                        transition: 'opacity 0.3s ease-in-out',
                                        cursor: 'pointer',
                                    }}
                                    onClick={toggleModal}
                                    loading='lazy'
                                />
                            </div>
                        ))}
                    </div>
                    {/* Botões de navegação */}
                    <button
                        onClick={handlePrevImage}
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 flex items-center justify-center bg-[#29374A] bg-opacity-100 text-white w-12 h-12 rounded-full"
                        style={{
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // sombra sutil
                        }}
                    >
                        <FiChevronLeft size={24} />
                    </button>
                    <button
                        onClick={handleNextImage}
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 flex items-center justify-center bg-[#29374A] bg-opacity-100 text-white w-12 h-12 rounded-full"
                        style={{
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)', // sombra sutil
                        }}
                    >
                        <FiChevronRight size={24} />
                    </button>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <button onClick={handlePrevCompany} style={{ background: '#29374A', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginRight: '10px' }}>
                        Anterior
                    </button>
                    <button onClick={handleNextCompany} style={{ background: '#29374A', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                        Próximo
                    </button>
                </div>
            </div>
            {isModalOpen && (
                <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0, 0, 0, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 }} onClick={toggleModal}>
                    <Image
                        src={empresas[currentIndex].imagens[imageIndex]}
                        alt={`Caminhão da ${empresas[currentIndex].nome}`}
                        width={800} // largura desejada para o modal
                        height={800} // altura desejada para o modal
                        style={{ borderRadius: '10px' }}
                        loading='lazy'
                    />
                </div>
            )}
        </section>
    );
};

export default PortfolioSection;
