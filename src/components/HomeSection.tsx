import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import imageCompression from 'browser-image-compression';

const HomeSection = () => {
    const [compressedImage, setCompressedImage] = useState('');

    useEffect(() => {
        const compressImage = async () => {
            const fetchImage = async () => {
                const response = await fetch('/home-section.jpg');
                const blob = await response.blob();
                return new File([blob], 'home-section.jpg', { type: blob.type });
            };

            const imageFile = await fetchImage();

            const options = {
                maxSizeMB: 1,
                maxWidthOrHeight: 1920,
                useWebWorker: true,
            };

            try {
                const compressedFile = await imageCompression(imageFile, options);
                const compressedUrl = URL.createObjectURL(compressedFile);
                setCompressedImage(compressedUrl);
            } catch (error) {
                console.error('Erro ao comprimir a imagem:', error);
            }
        };

        compressImage();
    }, []);

    return (
        <section id="home">
            <div className='w-full min-w-full h-[10px]' style={{ background: 'rgba(41,52,74,255)' }}/>
            {compressedImage ? (
                <Image
                    src={compressedImage}
                    alt="Caminhão"
                    className="object-cover w-full"
                    width={200}
                    height={200}
                />
            ) : (
                <></>
            )}
        </section>
    );
};

export default HomeSection;
