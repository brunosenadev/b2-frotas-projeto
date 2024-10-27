'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

export default function Home() {
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          className="shadow-lg w-full mt-1 bg-transparent min-w-full backdrop-blur-md h-[60px] flex items-center justify-between"
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
                <NavigationMenuLink onClick={() => handleScroll('home')}>Home</NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </div>
          <NavigationMenuList className="flex items-center space-x-6 mr-4">
          <NavigationMenuItem>
              <NavigationMenuLink onClick={() => handleScroll('about')}>Quem Somos</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink onClick={() => handleScroll('services')}>Serviços</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink onClick={() => handleScroll('portfolio')}>Portfólio</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink onClick={() => handleScroll('contact')} className="mr-2 ">Contato</NavigationMenuLink>
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
        <section id="about" className="min-h-screen flex flex-col items-center justify-center px-4">
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
            <div className="flex flex-col items-start justify-between px-4 py-6 border-t border-b border-gray-700 hover:border-gray-500 transition duration-300">
              <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4">Nossa História</h3>
              <p className="text-md sm:text-lg text-gray-300">
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
                <p className="text-md sm:text-lg text-gray-300 text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section id="portfolio" className="min-h-screen flex items-center justify-center text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold">Nosso Portfólio</h2>
        </section>
        <section id="contact" className="min-h-screen flex items-center justify-center text-center px-4">
          <h2 className="text-3xl sm:text-4xl font-bold">Contato</h2>
        </section>
      </div>
    </div>
  );
}
