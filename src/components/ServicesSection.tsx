import React from 'react';
import { FaPaintBrush, FaTruck, FaTools, FaSnowflake } from 'react-icons/fa';

const ServicesSection = () => {
    const services = [
        {
            id: 1,
            icon: <FaPaintBrush className="text-white text-2xl" />,
            title: 'Pintura de Baús – Todos os Tipos e Tamanhos',
            description: 'Somos especialistas na pintura de baús para diversos tipos de veículos e segmentos, garantindo um acabamento impecável e durável. Trabalhamos com baús de todos os tamanhos e proporcionamos máxima proteção e estética, valorizando a identidade visual do cliente.',
        },
        {
            id: 2,
            icon: <FaTruck className="text-white text-2xl" />,
            title: 'Pintura de Baús Sider',
            description: `Nosso serviço de pintura de baús sider é desenvolvido com técnicas precisas e materiais de alta resistência, preservando a flexibilidade do sider e mantendo a durabilidade mesmo com o desgaste natural do uso diário.`,
        },
        {
            id: 3,
            icon: <FaSnowflake className="text-white text-2xl" />,
            title: 'Pintura de Câmaras Frigoríficas',
            description: 'Na personalização de câmaras frigoríficas, aplicamos tintas e revestimentos específicos para garantir a integridade térmica e a resistência a condições severas de temperatura e umidade, sem comprometer o desempenho do equipamento.',
        },
    ];

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
                        <h3 className="font-montserrat font-bold text-xl mb-2">{service.title}</h3>
                        <p className="font-roboto text-md text-center">{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
