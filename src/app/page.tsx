'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useEffect } from "react";

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
        background: 'linear-gradient(135deg, #1b1f2b 30%, #10131b 100%)',
        minHeight: '100vh',
        height: '100%',
        margin: 0,
        padding: 0,
        color: '#FFFFFF',
      }}
    >
      <div className="fixed top-0 left-0 w-full z-50">
        <NavigationMenu
          className="shadow-lg w-full mt-1 bg-transparent min-w-full backdrop-blur-md h-[60px] flex items-center justify-between overflow-x-auto"
        >
          <div className="flex items-center ml-4">
            <Image
              src="/logo-com-fundo.jpg"
              alt="Logo"
              width={50}
              height={60}
              className="mr-2"
            />
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink onClick={() => handleScroll('home')} className="hover:cursor-pointer font-bold text-lg sm:text-xl pr-3">Home</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </div>
          <NavigationMenuList className="flex items-center space-x-6 mr-4">
            <NavigationMenuItem>
              <NavigationMenuLink onClick={() => handleScroll('about')} className="hover:cursor-pointer font-bold text-lg sm:text-xl">Quem Somos</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink onClick={() => handleScroll('services')} className="hover:cursor-pointer font-bold text-lg sm:text-xl">Serviços</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink onClick={() => handleScroll('portfolio')} className="hover:cursor-pointer font-bold text-lg sm:text-xl">Portfólio</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink onClick={() => handleScroll('contact')} className="mr-2 hover:cursor-pointer font-bold text-lg sm:text-xl">Contato</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="pt-[70px]">
        <section id="home" className="min-h-screen flex items-center justify-center text-center px-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Bem-vindo à B2 Frotas
          </h1>
        </section>
        <section id="about" className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-wide mb-4"
            style={{
              fontFamily: 'Poppins, sans-serif',
              color: '#FFFFFF',
            }}
          >
            Quem Somos
          </h2>
          <div className="flex flex-col space-y-6 w-full max-w-4xl">
            <div className="flex flex-col items-center justify-between px-4 py-6 border-t border-b border-gray-700 hover:border-gray-500 transition duration-300">
              <p className="text-lg sm:text-xl text-gray-300">
                Há 30 anos no mercado, a B2 Personalização de Frotas é referência em serviços de pintura, adesivação e personalização de baús e veículos de carga. Nossa missão é transformar cada frota em uma extensão da identidade visual de nossos clientes, entregando qualidade, eficiência e durabilidade em cada projeto.
                <br /><br />
                Especialistas na pintura de baús de caminhões, oferecemos soluções sob medida para empresas que buscam destacar sua marca nas estradas e fortalecer sua presença no mercado. Com uma equipe experiente e comprometida, garantimos excelência em cada detalhe, desde a escolha dos materiais até a execução final.
                <br /><br />
                Na B2, cada veículo personalizado é uma prova do nosso compromisso com inovação e confiança, fortalecendo parcerias e ajudando nossos clientes a seguirem rumo ao sucesso.
                <br /><br />
                Comprometimento, inovação, excelência e confiança são os pilares que sustentam nosso trabalho. Acreditamos que cada frota personalizada reflete não apenas a identidade da empresa, mas também o nosso compromisso com a qualidade e o sucesso do cliente.
              </p>
            </div>
          </div>
        </section>
        <section id="services" className="min-h-screen flex flex-col items-center justify-center text-center px-4">
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-wide mb-4"
            style={{
              fontFamily: 'Poppins, sans-serif',
              color: '#FFFFFF',
            }}
          >
            Nossos Serviços
          </h2>
          <div className="flex flex-col space-y-6 w-full max-w-4xl">
            {[
              { title: "Pintura de Baús", description: "Qualidade e durabilidade para caminhões de carga, personalizando com eficiência." },
              { title: "Adesivação", description: "Personalize sua frota com adesivos que destacam sua identidade visual." },
              { title: "Personalização", description: "Criação de soluções exclusivas para transformar seus veículos em ferramentas de marketing." },
            ].map((service) => (
              <div key={service.title} className="flex flex-col items-center justify-between px-4 py-6 border-t border-b border-gray-700 hover:border-gray-500 transition duration-300">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-md sm:text-xl text-gray-300 text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section id="portfolio" className="min-h-screen flex items-center justify-center text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold">Nosso Portfólio</h2>
        </section>
        <section id="contact" className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-20">
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-wide mb-4"
            style={{
              fontFamily: 'Poppins, sans-serif',
              color: '#FFFFFF',
            }}
          >
            Contato
          </h2>
          <div className="flex flex-col space-y-6 w-full max-w-4xl mx-auto">
            <div className="flex flex-col items-center justify-between px-4 py-6 border-t border-b border-gray-700 hover:border-gray-500">
              <div className="text-md items-center sm:text-lg text-gray-300">
                <p className="text-center">
                  Leve sua marca para as estradas com inovação e confiança. <br /> Vamos juntos transformar a identidade da sua empresa!
                </p>
                <br /><br />
                <div className="flex space-x-4 items-center justify-center">
                  <a href="https://wa.me/554792566795" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: '#25D366' }} />
                  </a>
                  <a href="https://www.instagram.com/b2frotasoficial" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: '#E1306C' }} />
                  </a>
                  <a href="https://www.facebook.com/seu-perfil-facebook" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: '#4267B2' }} />
                  </a>
                  <a href="https://www.linkedin.com/in/seu-perfil-linkedin" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: '#0e76a8' }} />
                  </a>
                </div>
                <br />
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">Entre em contato</h3>
                <div className="mb-6">
                  <p className="text-lg">
                    <strong className="text-white">Email:</strong>
                    <br />
                    <a href="mailto:brunocdesena@gmail.com" className="text-gray-300 hover:text-gray-400">brunocdesena@gmail.com</a>
                    <br />
                    <a href="mailto:brunocdesenadesenvolvedor@gmail.com" className="text-gray-300 hover:text-gray-400">brunocdesenadesenvolvedor@gmail.com</a>
                  </p>

                  <p className="text-lg mt-4">
                    <strong className="text-white">Telefone:</strong>
                    <br />
                    <a href="tel:+5547992566795" className="text-gray-300 hover:text-gray-400">(47) 99256-6795</a>
                    <br />
                    <a href="tel:+5547991703964" className="text-gray-300 hover:text-gray-400">(47) 99170-3964</a>
                    <br />
                    <a href="tel:+5547997511418" className="text-gray-300 hover:text-gray-400">(47) 99751-1418</a>
                  </p>
                </div>

                <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 text-center">Localização</h4>
                <div className="mb-6 w-full md:w-3/4 lg:w-1/2">
                  <iframe
                    src="https://maps.google.com.br/maps?q=B2+Frotas+-+Personalização+de+Frotas&output=embed"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
