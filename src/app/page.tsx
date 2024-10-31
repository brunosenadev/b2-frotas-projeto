'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FaPaintBrush, FaTruck, FaStar } from 'react-icons/fa';
import { useEffect } from "react";
import ContactForm from "./contact";

export default function Home() {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    handleScroll('home');
  }, []);

  return (
    <div
      style={{
        background: 'rgba(247,247,247,255)',
        minHeight: '100vh',
        height: '100%',
        margin: 0,
        padding: 0,
        color: '#FFFFFF',
      }}
    >
      <div
        className="fixed top-0 left-0 w-full z-50 bg-transparent"
        style={{
          background: 'rgba(41,52,74,255)'
        }}
      >
        <NavigationMenu
          className="shadow-lg w-full mt-1 bg-transparent min-w-full backdrop-blur-md h-[60px] flex justify-between overflow-x-auto"
        >
          <div className="flex ml-4">
            <Image
              src="/b2.jpg"
              alt="Logo"
              width={60}
              height={60}
            />
          </div>
          <NavigationMenuList className="flex items-center space-x-6 mr-4 flex-wrap">
            <NavigationMenuItem>
              <NavigationMenuLink
                onClick={() => handleScroll('home')}
                className="hover:cursor-pointer font-semibold text-lg sm:text-lg mr-6"
              >
                Home
              </NavigationMenuLink>
              <NavigationMenuLink
                onClick={() => handleScroll('about')}
                className="hover:cursor-pointer font-semibold text-lg sm:text-lg"
                style={{ whiteSpace: "nowrap" }}
              >
                Sobre nós
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                onClick={() => handleScroll('services')}
                className="hover:cursor-pointer font-semibold text-lg sm:text-lg"
              >
                Serviços
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                onClick={() => handleScroll('portfolio')}
                className="hover:cursor-pointer font-semibold text-lg sm:text-lg"
              >
                Portfólio
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                onClick={() => handleScroll('contact')}
                className="mr-2 hover:cursor-pointer font-semibold text-lg sm:text-lg"
              >
                Contato
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="pt-[70px]">
        <section id="home" className="flex grid min-h-screen flex items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-black" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Bem-vindo à B2 Frotas
          </h1>
          <Image
            src="/bv2.jpg"
            alt="Logo"
            width={750}
            height={600}
            className="object-cover rounded-2xl"
          />
        </section>
        <section id="about" className="min-h-screen flex items-center justify-center text-start px-4 pt-20">
          <div className="flex w-full max-w-6xl">
            <div className="flex-1 flex flex-col justify-center px-4">
              <h2
                className="text-3xl sm:text-4xl font-bold tracking-wide text-black mb-6"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                }}
              >
                Sobre nós
              </h2>
              <p className="text-lg sm:text-xl text-black">
                Há 30 anos no mercado, a B2 Personalização de Frotas é referência em serviços de pintura, adesivação e personalização de baús e veículos de carga. Nossa missão é transformar cada frota em uma extensão da identidade visual de nossos clientes, entregando qualidade, eficiência e durabilidade em cada projeto.
                <br /><br />
                Especialistas na pintura de baús de caminhões, oferecemos soluções sob medida para empresas que buscam destacar sua marca nas estradas e fortalecer sua presença no mercado. Com uma equipe experiente e comprometida, garantimos excelência em cada detalhe, desde a escolha dos materiais até a execução final.
                <br /><br />
                Na B2, cada veículo personalizado é uma prova do nosso compromisso com inovação e confiança, fortalecendo parcerias e ajudando nossos clientes a seguirem rumo ao sucesso.
                <br /><br />
                Comprometimento, inovação, excelência e confiança são os pilares que sustentam nosso trabalho. Acreditamos que cada frota personalizada reflete não apenas a identidade da empresa, mas também o nosso compromisso com a qualidade e o sucesso do cliente.
              </p>
            </div>
            <div className="flex-1 flex justify-center items-center px-4">
              <Image
                src="/1989.jpg"
                alt="Logo"
                width={750}
                height={600}
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>
        <section id="services" className="min-h-screen flex flex-col items-center justify-center text-center px-4">
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-wide mb-4 text-black"
            style={{
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Nossos Serviços
          </h2>
          <div className="flex flex-no-wrap justify-center space-x-6 w-full max-w-6xl mx-auto my-8 transition duration-300">
            {[
              { title: "Pintura de Baús – Todos os Tipos e Tamanho", description: `Somos especialistas na pintura de baús para diversos tipos de veículos e segmentos, garantindo um acabamento impecável e durável. Trabalhamos com baús de todos os tamanhos e proporcionamos máxima proteção e estética, valorizando a identidade visual do cliente.` },
              { title: "Pintura de Baús Side", description: "Nosso serviço de pintura de baús sider é desenvolvido com técnicas precisas e materiais de alta resistência, preservando a flexibilidade do sider e mantendo a durabilidade mesmo com o desgaste natural do uso diário." },
              { title: "Pintura de Câmaras Frigoríficas", description: "Na personalização de câmaras frigoríficas, aplicamos tintas e revestimentos específicos para garantir a integridade térmica e a resistência a condições severas de temperatura e umidade, sem comprometer o desempenho do equipamento." },
            ].map((service) => (
              <div
                key={service.title}
                className="flex flex-col items-center justify-between bg-gray-700 shadow-2xl rounded-xl transition-transform transform hover:scale-105 hover:bg-gray-200 hover:text-black hover:shadow-gray-300/50 w-[34%] px-8 py-12 mb-6"
              >
                <h3 className="text-xl sm:text-2xl font-bold tracking-wide mb-2 text-center">{service.title}</h3>
                <p className="text-md sm:text-lg text-center leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section id="portfolio" className="min-h-screen flex items-center justify-center text-start px-4">
          <h2 className="text-3xl sm:text-4xl font-bold">Nosso Portfólio</h2>
        </section>
        <section id="contact" className="min-h-screen flex flex-col items-center justify-start text-start px-4 pt-20">
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-wide mb-4 text-black"
            style={{
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            Contato
          </h2>
          <div className="flex flex-col space-y-6 w-full max-w-4xl mx-auto">
            <div className="flex flex-grid items-start justify-between px-4 py-6 border-t border-gray-700 hover:border-gray-500">
              <div className="text-md items-start sm:text-lg text-black w-full md:w-1/2 mb-6 md:mb-0">
                <p className="text-start font-semibold">
                 Entre em contato com a nossa equipe e vamos juntos transformar a identidade da sua empresa!
                </p>
                <br />
                <div className="flex space-x-4 items-start justify-start">
                  <a href="https://wa.me/554792566795" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: '#25D366' }} />
                  </a>
                  <a href="https://www.instagram.com/b2frotasoficial" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: '#E1306C' }} />
                  </a>
                  <a href="https://www.facebook.com/seu-perfil-facebook" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: '#4267B2' }} />
                  </a>
                  {/* <a href="https://www.linkedin.com/in/seu-perfil-linkedin" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: '#0e76a8' }} />
                  </a> */}
                </div>
                <br />
                <div className="flex flex-col md:flex-row justify-between items-start">
                  <div className="mt-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-black mb-4 text-start">Entre em contato</h3>
                    <p className="text-lg">
                      <strong className="text-black">Email:</strong>
                      <br />
                      <a href="mailto:brunocdesena@gmail.com" className="text-black">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        brunocdesena@gmail.com
                      </a>
                      <br />
                      <a href="mailto:brunocdesenadesenvolvedor@gmail.com" className="text-black">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        brunocdesenadesenvolvedor@gmail.com
                      </a>
                    </p>
                    <p className="text-lg mt-4">
                      <strong className="text-black">Telefone:</strong>
                      <br />
                      <a href="tel:+5547992566795" className="text-black">
                        <FontAwesomeIcon icon={faPhone} className="mr-2" />
                        (47) 99256-6795
                      </a>
                      <br />
                      <a href="tel:+5547991703964" className="text-black">
                        <FontAwesomeIcon icon={faPhone} className="mr-2" />
                        (47) 99170-3964
                      </a>
                      <br />
                      <a href="tel:+5547997511418" className="text-black">
                        <FontAwesomeIcon icon={faPhone} className="mr-2" />
                        (47) 99751-1418
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                <ContactForm />
              </div>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-black mb-4 text-center">Localização</h4>
            <div className="pb-10">
              <div className="mb-6 pb-4 w-full text-black border-b border-gray-700">
                <iframe
                  src="https://maps.google.com.br/maps?q=B2+Frotas+-+Personalização+de+Frotas&output=embed"
                  width="900"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  className="w-full md:w-[900px]"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
