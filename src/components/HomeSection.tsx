import React from 'react';
import Image from 'next/image'

const HomeSection = () => {
    return (
        <section id="home">
            <Image
                src="/caminhao.png"
                alt="Logo"
                width={750}
                height={600}
                className="object-cover"
            />
            <p className="mt-2 text-lg font-semibold italic text-center text-gray-700 max-w-lg mx-auto">
                &quot;Transformando frotas em ícones de identidade e qualidade nas estradas!&quot;
            </p>
        </section>
    );
};

export default HomeSection;
