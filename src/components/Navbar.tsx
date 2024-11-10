import React, { useState, memo } from 'react';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Image from 'next/image'

const Navbar = memo(() => {
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <NavigationMenu
                className="min-w-full w-full h-[70%] min-h-[60px] flex items-center justify-between"
                style={{ background: 'rgba(41,52,74,255)' }}
            >
                <div className="flex items-center">
                    <NavigationMenuItem className="ml-3 list-none">
                        <NavigationMenuLink
                            onClick={() => handleScroll('home')}
                            className="hover:cursor-pointer">
                            <Image
                                src={'/b2b-vetor.svg'}
                                alt='b2-logo'
                                width={40}
                                height={40}
                            />
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </div>
                <div className="hidden space-x-4 md:flex">
                    <NavigationMenuItem
                        className="text-white mx-4 list-none"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                        onClick={() => {
                            handleScroll('home');
                            setIsOpen(false);
                        }}
                    >
                        HOME
                    </NavigationMenuItem>
                    <NavigationMenuItem
                        className="text-white mx-4 list-none"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                        onClick={() => {
                            handleScroll('about');
                            setIsOpen(false);
                        }}
                    >
                        SOBRE NÓS
                    </NavigationMenuItem>
                    <NavigationMenuItem
                        className="text-white mx-4 list-none"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                        onClick={() => {
                            handleScroll('services');
                            setIsOpen(false);
                        }}
                    >
                        SERVIÇOS
                    </NavigationMenuItem>
                    <NavigationMenuItem
                        className="text-white mx-4 list-none"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                        onClick={() => {
                            handleScroll('portfolio');
                            setIsOpen(false);
                        }}
                    >
                        PORTFÓLIO
                    </NavigationMenuItem>
                    <NavigationMenuItem
                        className="text-white mx-4 list-none"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                        onClick={() => {
                            handleScroll('contact');
                            setIsOpen(false);
                        }}
                    >
                        CONTATO
                    </NavigationMenuItem>
                </div>
                <div className="md:hidden flex items-center mr-2">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <div className="flex flex-col">
                            <span className="block w-8 h-1 bg-white mb-1"></span>
                            <span className="block w-8 h-1 bg-white mb-1"></span>
                            <span className="block w-8 h-1 bg-white"></span>
                        </div>
                    </button>
                </div>
            </NavigationMenu>
            {isOpen && (
                <div
                    className="fixed top-0 right-0 w-[35%] text-white flex flex-col justify-start items-start text-start md:hidden sm:hidden"
                    style={{ background: 'rgba(41,52,74,255)' }}
                >
                    <NavigationMenuItem
                        className="py-2 hover:bg-gray-700 w-full list-none mt-10 pb-0"
                    >
                    </NavigationMenuItem>
                    <NavigationMenuItem
                        className="py-2 hover:bg-gray-700 w-full list-none"
                        onClick={() => {
                            handleScroll('home');
                            setIsOpen(false);
                        }}
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                        <span
                            className='ml-4'
                        >
                            HOME
                        </span>
                    </NavigationMenuItem>
                    <NavigationMenuItem
                        className="py-2 hover:bg-gray-700 w-full list-none"
                        onClick={() => {
                            handleScroll('about');
                            setIsOpen(false);
                        }}
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                        <span
                            className='ml-4'
                        >
                            SOBRE NÓS
                        </span>
                    </NavigationMenuItem>
                    <NavigationMenuItem
                        className="py-2 hover:bg-gray-700 w-full list-none"
                        onClick={() => {
                            handleScroll('services');
                            setIsOpen(false);
                        }}
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                        <span
                            className='ml-4'
                        >
                            SERVIÇOS
                        </span>
                    </NavigationMenuItem>
                    <NavigationMenuItem
                        className="py-2 hover:bg-gray-700 w-full list-none"
                        onClick={() => {
                            handleScroll('portfolio');
                            setIsOpen(false);
                        }}
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                        <span
                            className='ml-4'
                        >
                            PORTFÓLIO
                        </span>
                    </NavigationMenuItem>
                    <NavigationMenuItem
                        className="py-2 hover:bg-gray-700 w-full list-none"
                        onClick={() => {
                            handleScroll('contact');
                            setIsOpen(false);
                        }}
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                        <span
                            className='ml-4'
                        >
                            CONTATO
                        </span>
                    </NavigationMenuItem>
                </div>
            )}
        </div>
    );
});

export default Navbar;
