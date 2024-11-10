import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const empresas = [
    {
        nome: "Empresa A",
        imagens: [
            "/caminhao.png",
            "/caminhao.png",
            "/caminhao.png",
        ],
    },
    {
        nome: "Empresa B",
        imagens: [
            "/caminhao.png",
            "/caminhao.png",
            "/caminhao.png",
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

    useEffect(() => {
        const interval = setInterval(() => {
            setImageIndex((prevIndex) =>
                prevIndex === empresas[currentIndex].imagens.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(interval);
    }, [currentIndex]);

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
                                    layout="responsive"
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
                                />
                            </div>
                        ))}
                    </div>
                    <button onClick={handlePrevImage} style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', background: 'transparent', color: '#29374A', border: 'none', padding: '10px', cursor: 'pointer', fontSize: '36px', fontWeight: 'bold', zIndex: 10 }}>
                        &lt; 
                    </button>
                    <button onClick={handleNextImage} style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', background: 'transparent', color: '#29374A', border: 'none', padding: '10px', cursor: 'pointer', fontSize: '36px', fontWeight: 'bold', zIndex: 10 }}>
                        &gt;
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
                        layout="fill"
                        width={950} // largura desejada para o modal
                        height={800} // altura desejada para o modal
                        style={{ borderRadius: '10px' }} 
                    />
                </div>
            )}
        </section>
    );
};

export default PortfolioSection;
