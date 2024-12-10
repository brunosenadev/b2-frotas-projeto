import React, { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import 'swiper/css';
import 'swiper/css/navigation';

interface Empresa {
  nome: string;
  imagens: string[];
}

const PortfolioSection = () => {
  const [empresas, setEmpresas] = useState<Empresa[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEmpresa, setCurrentEmpresa] = useState<Empresa | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Carregamento otimizado dos dados
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/empresasimagens.json');
      const data = await response.json();
      setEmpresas(data);
      setCurrentEmpresa(data[0]);
    };

    fetchData();
  }, []);

  // Função de abrir o modal com as imagens
  const openModal = (empresa: Empresa, imageIndex: number) => {
    setCurrentEmpresa(empresa);
    setCurrentImageIndex(imageIndex);
    setIsModalOpen(true);
  };

  // Função de fechar o modal
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentEmpresa(empresas[0]);
    setCurrentImageIndex(0);
  };

  // Funções para navegação entre as imagens
  const handlePrevImage = () => {
    if (currentEmpresa) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? currentEmpresa.imagens.length - 1 : prevIndex - 1
      );
    }
  };

  const handleNextImage = () => {
    if (currentEmpresa) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === currentEmpresa.imagens.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const empresaSlides = useMemo(
    () =>
      empresas.map((empresa, index) => (
        <SwiperSlide key={index}>
          <div className="relative flex flex-col items-center">
            <Image
              src={empresa.imagens[0]}
              alt={`Imagem de ${empresa.nome}`}
              width={300} 
              height={100}
              className="w-full h-60"
              loading="lazy"
              onClick={() => openModal(empresa, 0)}
            />
            <div
              className="mt-2 text-white text-lg font-medium"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {empresa.nome}
            </div>
          </div>
        </SwiperSlide>
      )),
    [empresas]
  );

  return (
    <section id="portfolio" className="py-8 px-4 text-center">
      <div className="flex items-center mb-8">
        <div className="flex-grow h-1 bg-red-500"></div>
        <h2
          className="mx-4 text-2xl font-semibold tracking-wide text-white whitespace-nowrap"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          NOSSO PORTFÓLIO
        </h2>
        <div className="flex-grow h-1 bg-red-500"></div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        autoplay={{ delay: 2000 }}
        loop={true}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        className="max-w-8xl h-[270px] mx-auto"
      >
        {empresaSlides}
        <button className="swiper-button-prev-custom text-white absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-gray-800 rounded-full">
          <FiChevronLeft size={24} />
        </button>
        <button className="swiper-button-next-custom text-white absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-gray-800 rounded-full">
          <FiChevronRight size={24} />
        </button>
      </Swiper>

      {isModalOpen && currentEmpresa && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={closeModal}
        >
          <div
            className="relative flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <Image
              src={currentEmpresa.imagens[currentImageIndex]}
              alt={`Imagem ${currentImageIndex + 1} de ${currentEmpresa.nome}`}
              width={500}
              height={120}
              className="rounded-lg w-full md:h-[500px]"
              loading="lazy"
            />
            <div className="flex justify-between w-full mt-4">
              <button
                onClick={handlePrevImage}
                className="text-white bg-gray-800 p-2 rounded-full"
              >
                <FiChevronLeft size={24} />
              </button>
              <button
                onClick={handleNextImage}
                className="text-white bg-gray-800 p-2 rounded-full"
              >
                <FiChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
