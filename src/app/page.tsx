'use client';
import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import AboutUsSection from "@/components/AboutUsSection";
import ContactSection from '@/components/ContactSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import Footer from '@/components/Footer';
import Image from 'next/image';  

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const checkImageLoad = () => {
            const nativeImage = new globalThis.Image();  
            nativeImage.src = '/caminhao.png'; 
            nativeImage.onload = () => {
                setImageLoaded(true); 
            };
            nativeImage.onerror = () => {
                setImageLoaded(true); 
            };
        };

        checkImageLoad();  
    }, []);

    useEffect(() => {
        if (imageLoaded) {
            const timeoutId = setTimeout(() => {
                setIsLoading(false);  
            }, 1700);

            return () => clearTimeout(timeoutId); 
        }
    }, [imageLoaded]);

    return (
        <div className="overflow-x-hidden w-full min-h-screen relative">
            {isLoading && (
                <div className="fixed inset-0 bg-[rgba(41,52,74,255)] flex justify-center items-center z-50">
                    <div className="flex flex-col justify-center items-center">
                        <div className="animate-spin mb-4">
                            <Image
                                src={'/b2b-vetor.svg'}
                                alt="b2-logo"
                                width={100}
                                height={60}
                            />
                        </div>
                        <div className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">
                            Carregando...
                        </div>
                    </div>
                </div>
            )}
            <Navbar />
            <HomeSection />
            <div className="px-4 sm:px-12 lg:px-16 xl:px-20 md:mt-[-60px] mt-[-40] bg-gray-200">
                <ServicesSection />
                <p className="mt-2 text-lg sm:text-2xl font-semibold italic text-center text-black max-w-lg mx-auto sm:max-w-2xl md:max-w-4xl">
                    Há 30 anos personalizando frotas!
                </p>
            </div>
            <div className="px-4 sm:px-12 lg:px-24 xl:px-20 bg-gray-200">
                <AboutUsSection />
            </div>
            <div className="px-4 sm:px-12 lg:px-16 xl:px-20 bg-white" style={{ background: 'rgba(41,52,74,255)' }}>
                <PortfolioSection />
            </div>
            <div className="px-4 sm:px-12 lg:px-16 xl:px-20 bg-gray-200 pt-5">
                <ContactSection />
            </div>
            <Footer />
        </div>
    );
}
