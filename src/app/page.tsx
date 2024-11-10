'use client';
import Navbar from "@/components/Navbar";
import HomeSection from "@/components/HomeSection";
import AboutUsSection from "@/components/AboutUsSection";
import ContactSection from '@/components/ContactSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';

export default function Home() {
    return (
        <div className="overflow-x-hidden w-full min-h-screen">
            <Navbar />
            <HomeSection />
            <div className="px-4 sm:px-12 lg:px-24 xl:px-24">
                <AboutUsSection />
                <ServicesSection />
                <PortfolioSection />
                <ContactSection />
            </div>
        </div>
    );
}
