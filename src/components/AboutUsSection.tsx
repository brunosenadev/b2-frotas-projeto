import React from 'react';
import Image from "next/image";

const AboutSection = () => {
    return (
        <section
            id="about"
            className="relative items-center justify-center pt-20 pb-20 overflow-hidden"
        >
            <div className="flex items-center mb-8">
                <div className="flex-grow h-1 bg-red-500"></div>
                <h2
                    className="mx-4 text-2xl font-semibold tracking-wide text-black whitespace-nowrap"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                    SOBRE NÓS
                </h2>
                <div className="flex-grow h-1 bg-red-500"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-12 lg:px-24 xl:px-[100px]">
                <div className="flex flex-col items-center justify-center p-4 rounded-xl">
                    <p
                        className="text-black md:text-xl text-justify leading-relaxed"
                        style={{
                            fontFamily: 'Roboto, sans-serif',
                            color: 'black',
                        }}
                    >
                        Há mais de 30 anos no mercado, a <strong>B2 Frotas</strong> se destaca como uma referência em qualidade e expertise na <strong>pintura e adesivação de baús.</strong> Nosso compromisso com a excelência e a inovação nos coloca na vanguarda do setor, oferecendo soluções personalizadas que atendem às necessidades específicas de cada cliente.
                        Especialistas na pintura de baús de caminhões, oferecemos soluções sob medida para empresas que buscam destacar sua marca nas estradas e fortalecer sua presença no mercado. Com uma equipe experiente e comprometida, garantimos excelência em cada detalhe, desde a escolha dos materiais até a execução final.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center p-4 rounded-xl">
                    <Image
                        src="/primeiro-caminhao.webp"
                        alt="Primeiro caminhão"
                        width={700}
                        height={500}
                        className="object-cover rounded-xl"
                    />
                    <span className="text-black italic text-sm mt-2">
                        Imagem do primeiro caminhão personalizado em 1989
                    </span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 rounded-xl">
                    <Image
                        src="/koerich1990.jpg"
                        alt="Caminhão personalizado"
                        width={600}
                        height={500}
                        className="object-cover rounded-xl"
                    />
                    <span className="text-black italic text-sm mt-2">
                        Baú da Koerich de 1990
                    </span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 rounded-xl">
                    <p
                        className="text-black md:text-xl text-justify leading-relaxed"
                        style={{
                            fontFamily: 'Roboto, sans-serif',
                            color: 'black',
                        }}
                    >
                        Além disso, nos orgulhamos de cultivar relações de confiança e parceria com nossos clientes, entendendo suas necessidades específicas e oferecendo soluções personalizadas que agregam valor ao seu negócio. Na B2, cada veículo personalizado é uma prova do nosso compromisso com inovação e confiança, fortalecendo parcerias e ajudando nossos clientes a seguirem rumo ao sucesso.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
