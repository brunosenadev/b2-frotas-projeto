import React from 'react';
import Image from 'next/image'

const HomeSection = () => {
    return (
        <section id="home">
            <Image
                src="/caminhao.png"
                alt="Logo"
                width={1500}
                height={600}
                className="object-cover w-full"
                priority
            />
            <p className="mt-2 text-lg sm:text-2xl font-semibold italic text-center text-black max-w-lg mx-auto sm:max-w-2xl md:max-w-4xl">
                Transformando frotas em ícones de identidade e qualidade nas estradas!
            </p>
        </section>
    );
};

export default HomeSection;
