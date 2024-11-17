import React from 'react';
import Image from 'next/image'

const HomeSection = () => {
    return (
        <section id="home" className='mt-4'>
            <Image
                src="/caminhao.png"
                alt="Logo"
                width={1000}
                height={500}
                className="object-cover w-full"
                priority
                rel='preload'
            />
        </section>
    );
};

export default HomeSection;
