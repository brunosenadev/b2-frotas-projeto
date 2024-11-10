'use client';
import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import AboutUsSection from "@/components/AboutUsSection";
import ContactSection from '@/components/ContactSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    // Simula o processo de carregamento
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false); // Define como falso após o tempo de carregamento
        }, 6000); // Ajuste conforme necessário
        return () => clearTimeout(timer);
    }, []);

    // Estilos para o caminhão (ícone)
    const truckStyle: React.CSSProperties = {
        position: 'absolute',
        left: '-150px',
        bottom: '20px',
        fontSize: '40px',
        color: 'rgba(41,52,74,255)',
        animation: 'moveTruck 3s linear infinite',
    };

    // Estilos para o container do movimento
    const containerStyle: React.CSSProperties = {
        position: 'relative',
        width: '100%',
        height: '100px',
        overflow: 'hidden',
    };

    // Animação para o movimento do caminhão
    const moveTruckKeyframes = `
        @keyframes moveTruck {
            0% { left: -150px; }
            100% { left: 100%; }
        }
    `;

    return (
        <div className="overflow-x-hidden w-full min-h-screen">
            {isLoading ? (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100vh', backgroundColor: 'white' }}>
                    <style>{moveTruckKeyframes}</style>
                    <div style={containerStyle}>
                        <p 
                        className='font-bold text-center' 
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                            Carregando...
                        </p>
                        <div style={truckStyle}>
                            <i className="fas fa-truck"></i> {/* Ícone de caminhão */}
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <Navbar />
                    <HomeSection />
                    <AboutUsSection />
                    <ServicesSection />
                    <PortfolioSection />
                    <ContactSection />
                </>
            )}
        </div>
    );
}
