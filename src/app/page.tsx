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
            <AboutUsSection />
            <ServicesSection />
            <PortfolioSection />
            <ContactSection />
        </div>
    );
}
