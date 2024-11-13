import React from 'react';
import Image from "next/image";

const AboutSection = () => {
    return (
        <section
            id="about"
            className="relative items-center justify-center mt-10 bg-gray-200 pt-6 pb-6 overflow-hidden"
        >
            <div className="relative z-10 text-center mt-1">
                <h2
                    className="text-2xl font-semibold tracking-wide text-black"
                    style={{
                        fontFamily: 'Montserrat, sans-serif',
                    }}
                >
                    SOBRE NÓS
                </h2>
            </div>
            <div className='flex flex-col mt-2 text-center p-1'>
                <p
                    className="text-black md:text-lg text-justify"
                    style={{
                        fontFamily: 'Roboto, sans-serif',
                        color: 'rgba(41,52,74,255)'
                    }}
                >
                    
                    Há mais de 30 anos no mercado, a <strong style={{ color: '#c11f10' }}>B2 Frotas</strong> se destaca como uma referência em qualidade e expertise na <strong style={{ color: '#c11f10' }}>pintura e adesivação de baús.</strong> Nosso compromisso com a excelência e a inovação nos coloca na vanguarda do setor, oferecendo soluções personalizadas que atendem às necessidades específicas de cada cliente.
                    Especialistas na pintura de baús de caminhões, oferecemos soluções sob medida para empresas que buscam destacar sua marca nas estradas e fortalecer sua presença no mercado. Com uma equipe experiente e comprometida, garantimos excelência em cada detalhe, desde a escolha dos materiais até a execução final.
                </p>
                <div className="flex flex-col items-center justify-center mt-4">
                    <Image
                        src="/primeiro-caminhao.webp"
                        alt="Logo"
                        width={700}
                        height={500}
                        className="object-cover rounded-xl"
                    />
                    <span className="text-black italic text-sm">
                        Imagem do primeiro caminhão personalizado em 1989 da B2
                    </span>
                </div>
                <p className="text-black mt-2 md:text-lg text-justify" style={{ fontFamily: 'Roboto, sans-serif', color: 'rgba(41,52,74,255)' }}>
                    Além disso, nos orgulhamos de cultivar relações de confiança e parceria com nossos clientes, entendendo suas necessidades específicas e oferecendo soluções personalizadas que agregam valor ao seu negócio. Na B2, cada veículo personalizado é uma prova do nosso compromisso com inovação e confiança, fortalecendo parcerias e ajudando nossos clientes a seguirem rumo ao sucesso.
                </p>
            </div>
        </section>
    );
};

export default AboutSection;
