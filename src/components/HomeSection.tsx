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
                className="object-cover"
                priority
            />
            <p className="mt-2 text-lg font-semibold italic text-center text-gray-700 max-w-lg mx-auto sm:max-w-2xl">
                &quot;Transformando frotas em ícones de identidade e qualidade nas estradas!&quot;
            </p>
        </section>
    );
};

export default HomeSection;
