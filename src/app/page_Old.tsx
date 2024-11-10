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
        color: '#FFFFFF',
      }}
    >
      <div className="fixed w-full">
        <div className="text-end pr-80 overflow-x-auto min-w-full h-[25px]" style={{ background: 'rgba(41,52,74,255)' }}>
          <a href="tel:+5547992566795" className="text-white mr-4">
            <FontAwesomeIcon icon={faPhone} className="mr-2 text-white" />
            (47) 99256-6795
          </a>
          <a href="https://wa.me/554792566795" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} size="1x" style={{ color: 'white' }} className="mr-2 mt-2" />
            (47) 99256-6795
          </a>
          <a href="https://wa.me/554792566795" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} size="1x" style={{ color: 'white' }} className="ml-3  mr-1 mt-2" />
            teste@desenvolvimento.com.br
          </a>
        </div>
        <NavigationMenu
          className="shadow-lg w-full bg-transparent min-w-full backdrop-blur-md h-[100px] flex justify-between overflow-x-auto pr-80"
          style={{ background: 'rgba(41,52,74,255)' }}
        >
          <div className="flex ml-4 pl-80 flex space-x-4">
            <Image
              src="/b2.jpg"
              alt="Logo"
              width={60}
              height={100}
            />
            {/* <Image
              src="/1989.jpg"
              alt="Logo"
              width={60}
              height={100}
            /> */}
          </div>
          <NavigationMenuList className="flex items-center space-x-6 mr-4 flex-wrap">
            <NavigationMenuItem>
              <NavigationMenuLink
                onClick={() => handleScroll('home')}
                className="hover:cursor-pointer text-lg sm:text-lg"
              >
                HOME
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                onClick={() => handleScroll('about')}
                className="hover:cursor-pointer text-lg sm:text-lg"
                style={{
                  whiteSpace: "nowrap",
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '400'
                }}
              >
                SOBRE NÓS
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                onClick={() => handleScroll('services')}
                className="hover:cursor-pointer text-lg sm:text-lg"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '400'
                }}
              >
                SERVIÇOS
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                onClick={() => handleScroll('portfolio')}
                className="hover:cursor-pointer text-lg sm:text-lg"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '400'
                }}
              >
                PORTFÓLIO
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                onClick={() => handleScroll('contact')}
                className="mr-2 hover:cursor-pointer font-semibold text-lg sm:text-lg"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontWeight: '400'
                }}
              >
                CONTATO
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div>
        <section id="home" className="w-full flex mt-20 pt-11">
          <img
            src="/caminhao.png"
            alt="Logo"
            width={750}
            height={600}
            className="object-cover w-full h-auto"
          />
        </section>
        <section id="about" className="min-h-screen flex items-center justify-center text-center px-4">
          <div className="flex w-full max-w-7xl">
            <div className="flex-1 flex flex-col justify-center px-4">
              <div className="flex items-center justify-center mb-6">
                <div className="flex-1 h-[3px] bg-red-500 mr-4 max-w-lg"></div>
                <h2
                  className="text-3xl sm:text-3xl font-bold tracking-wide text-black text-center"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  SOBRE NÓS
                </h2>
                <div className="flex-1 h-[3px] bg-red-500 ml-4 max-w-lg"></div>
              </div>
              <p className="text-xl font-semibold italic text-gray-700 mb-6">
                &quot;Transformando frotas em ícones de identidade e qualidade nas estradas!&quot;
              </p>
              <p
                className="text-black sm:text-xl mb-6"
                style={{
                  fontFamily: 'Roboto, sans-serif',
                }}
              >
                Há mais de 30 anos no mercado, a <strong>B2 Frotas</strong> se destaca como uma referência em qualidade e expertise na <strong>pintura e adesivação de baús.</strong> Nosso compromisso com a excelência e a inovação nos coloca na vanguarda do setor, oferecendo soluções personalizadas que atendem às necessidades específicas de cada cliente.
              </p>
              <div className="flex grid justify-center mb-6">
                <Image
                  src="/bv.jpg"
                  alt="Logo"
                  width={500}
                  height={500}
                  className="object-cover rounded-lg"
                />
                <span className="text-black italic sm:text-sm">
                  Imagem do primeiro caminhão personalizado em 1989 da B2
                </span>
              </div>
              <p className="text-black sm:text-xl" style={{ fontFamily: 'Roboto, sans-serif' }}>
                Além disso, nos orgulhamos de cultivar relações de confiança e parceria com nossos clientes, entendendo suas necessidades específicas e oferecendo soluções personalizadas que agregam valor ao seu negócio.
              </p>
            </div>
          </div>
        </section>
        <section id="services" className="min-h-screen flex flex-col items-center justify-center text-center px-4">
          <div className="flex w-full max-w-7xl grid">
            <div className="flex mb-6 items-center justify-center">
              <div className="flex-1 h-[3px] bg-red-500 mr-4 max-w-sm"></div>
              <h2
                className="text-3xl sm:text-3xl font-bold tracking-wide text-black text-center"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                }}
              >
                NOSSOS SERVIÇOS
              </h2>
              <div className="flex-1 h-[3px] bg-red-500 ml-4 max-w-sm"></div>
            </div>

            <div className="flex flex-col w-full max-w-6xl mx-auto my-8 space-y-8">
              {[
                {
                  title: "Pintura de Baús – Todos os Tipos e Tamanho",
                  description: "Somos especialistas na pintura de baús para diversos tipos de veículos e segmentos, garantindo um acabamento impecável e durável. Trabalhamos com baús de todos os tamanhos e proporcionamos máxima proteção e estética, valorizando a identidade visual do cliente.",
                  imageUrl: "/teste1.jpg",
                  icon: "🔨",
                },
                {
                  title: "Pintura de Baús Side",
                  description: "Nosso serviço de pintura de baús sider é desenvolvido com técnicas precisas e materiais de alta resistência, preservando a flexibilidade do sider e mantendo a durabilidade mesmo com o desgaste natural do uso diário.",
                  imageUrl: "/teste1.jpg",
                  icon: "🎨",
                },
                {
                  title: "Pintura de Câmaras Frigoríficas",
                  description: "Na personalização de câmaras frigoríficas, aplicamos tintas e revestimentos específicos para garantir a integridade térmica e a resistência a condições severas de temperatura e umidade, sem comprometer o desempenho do equipamento.",
                  imageUrl: "/teste1.jpg",
                  icon: "❄️",
                },
              ].map((service, index) => (
                <div
                  key={service.title}
                  className={`flex ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} w-[48%] bg-gray-700 shadow-lg rounded-lg overflow-hidden`}
                >
                  {/* Imagem do Serviço */}
                  <div className="w-1/2 h-48 md:h-64">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* Conteúdo do Card */}
                  <div className="w-1/2 flex flex-col justify-center items-start p-6 text-white">
                    <span className="text-4xl mb-4">{service.icon}</span>
                    <h3
                      className="text-2xl font-bold tracking-wide mb-2"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {service.title}
                    </h3>
                    <p
                      className="text-md leading-relaxed"
                      style={{ fontFamily: 'Roboto, sans-serif' }}
                    >
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>  
        <section id="portfolio" className="min-h-screen flex items-center justify-center text-start px-4">
          <h2 className="text-3xl sm:text-4xl font-bold">Nosso Portfólio</h2>
        </section>
        <section id="contact" className="min-h-screen flex items-center justify-center text-start px-4">
          <div className="flex w-full max-w-7xl grid">
            <div className="flex-1 flex flex-col justify-center px-4">
              <div className="flex items-center justify-center mb-2 ">
                <div className="flex-1 h-[3px] bg-red-500 mr-4 max-w-lg"></div>
                <h2
                  className="text-3xl sm:text-3xl font-bold tracking-wide text-black text-center"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                  }}
                >
                  CONTATO
                </h2>
                <div className="flex-1 h-[3px] bg-red-500 ml-4 max-w-lg"></div>
              </div>
              <div className="flex flex-col space-y-6 w-full max-w-4xl mx-auto">
                <div className="flex flex-grid items-start justify-between px-4 py-6">
                  <div className="text-md items-start sm:text-xl text-black w-full md:w-1/2 mb-6 md:mb-0">
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
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
