'use client';
import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import AboutUsSection from "@/components/AboutUsSection";
import ContactSection from '@/components/ContactSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import Map from '@/components/Map';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <div className="overflow-x-hidden w-full min-h-screen">
            <Navbar />
            <HomeSection />
            <div className="px-4 sm:px-12 lg:px-24 xl:px-20 mt-[-60px]">
                <ServicesSection />
            </div>
            <div className="px-4 sm:px-12 lg:px-24 xl:px-[350px] bg-white">
                <AboutUsSection />
            </div>
            <div className="px-4 sm:px-12 lg:px-24 xl:px-20 bg-white" style={{ background: 'rgba(41,52,74,255)' }}>
                <PortfolioSection />
            </div>
            <div className="px-4 sm:px-12 lg:px-24 xl:px-[350px] bg-gray-200 pt-5">
                <ContactSection />
            </div>
            <Map />
            <Footer/>
        </div>
    );
}
