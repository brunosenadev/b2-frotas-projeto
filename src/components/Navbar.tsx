import React, { useState, useEffect, memo } from 'react';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Image from 'next/image';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

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

    // Detectar cliques fora da navbar
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isOpen && !(event.target as HTMLElement).closest('.navbar-container')) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div>
            <div
                className="min-w-full w-full min-h-[30px] flex items-center justify-center hidden md:flex"
                style={{ background: 'rgba(41,52,74,255)' }}
            >
                <a href="tel:+554733085589" className='text-white font-semibold mr-4'>
                    <FontAwesomeIcon icon={faPhone} className="mr-2 align-middle" />
                    (47) 3308-5589
                </a>
                <a href="mailto:empresab2frotas@gmail.com" className="text-white font-semibold">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2 align-middle" />
                    empresab2frotas@gmail.com
                </a>
            </div>
            <NavigationMenu
                className="min-w-full w-full h-[70%] min-h-[60px] flex items-center justify-center"
                style={{ background: 'rgba(41,52,74,255)' }}
            >
                <div className="flex items-center pb-2">
                    <NavigationMenuItem className="list-none mr-3">
                        <NavigationMenuLink
                            onClick={() => handleScroll('home')}
                            className="hover:cursor-pointer">
                            <Image
                                src={'/b2b-vetor.svg'}
                                alt='b2-logo'
                                width={100}
                                height={60}
                            />
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem className="list-none">
                        <NavigationMenuLink
                            onClick={() => handleScroll('home')}
                            className="hover:cursor-pointer">
                            <Image
                                src={'/1989.webp'}
                                alt="30 anos"
                                width={100}
                                height={60}
                                priority
                            />
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                </div>
                <div className="hidden space-x-4 md:flex ml-4">
                    <NavigationMenuItem
                        className="text-white mx-1 text-xl pr-6 font-semibold list-none hover:cursor-pointer pt-2 border-r-4 border-white last:border-r-0"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                        onClick={() => {
                            handleScroll('home');
                            setIsOpen(false);
                        }}
                    >
                        HOME
                    </NavigationMenuItem>
                    <NavigationMenuItem
                        className="text-white mx-4 text-xl font-semibold pr-6 list-none hover:cursor-pointer pt-2 border-r-4 border-white last:border-r-0"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                        onClick={() => {
                            handleScroll('about');
                            setIsOpen(false);
                        }}
                    >
                        SOBRE NÓS
                    </NavigationMenuItem>
                    <NavigationMenuItem
                        className="text-white mx-4 text-xl font-semibold pr-6 list-none hover:cursor-pointer pt-2  border-r-4 border-white last:border-r-0"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                        onClick={() => {
                            handleScroll('portfolio');
                            setIsOpen(false);
                        }}
                    >
                        PORTFÓLIO
                    </NavigationMenuItem>
                    <NavigationMenuItem
                        className="text-white mx-4 text-xl font-semibold list-none hover:cursor-pointer pt-2 "
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                        onClick={() => {
                            handleScroll('contact');
                            setIsOpen(false);
                        }}
                    >
                        CONTATO
                    </NavigationMenuItem>
                    <NavigationMenuItem
                        className="text-white mx-4 text-xl font-semibold list-none hover:cursor-pointer"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                        onClick={() => {
                            handleScroll('contact');
                            setIsOpen(false);
                        }}
                    >
                        <a href="https://wa.me/554788086608" target="_blank" rel="noopener noreferrer" className='text-white font-semibold mr-4'>
                            <FontAwesomeIcon icon={faWhatsapp} className="mr-2 text-5xl align-middle font-semibold" style={{ color: '#25D366' }} />
                        </a>
                    </NavigationMenuItem>
                </div>
                <div className="md:hidden flex items-center justify-center ml-10">
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
                    className="navbar-container fixed top-0 right-0 w-[35%] h-[100vh] text-white flex flex-col justify-start items-start text-start md:hidden sm:hidden"
                    style={{ background: 'rgba(41,52,74,255)', zIndex: 9999 }}
                >
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
                    >
                        &times;
                    </button>
                    <NavigationMenuItem
                        className="py-2 hover:bg-gray-700 w-full list-none mt-10 pb-0"
                    />
                    <NavigationMenuItem
                        className="py-2 hover:bg-gray-700 w-full list-none"
                        onClick={() => {
                            handleScroll('home');
                            setIsOpen(false);
                        }}
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                        <span className='ml-4'>HOME</span>
                    </NavigationMenuItem>
                    <NavigationMenuItem
                        className="py-2 hover:bg-gray-700 w-full list-none"
                        onClick={() => {
                            handleScroll('about');
                            setIsOpen(false);
                        }}
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                        <span className='ml-4'>SOBRE NÓS</span>
                    </NavigationMenuItem>
                    <NavigationMenuItem
                        className="py-2 hover:bg-gray-700 w-full list-none"
                        onClick={() => {
                            handleScroll('portfolio');
                            setIsOpen(false);
                        }}
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                        <span className='ml-4'>PORTFÓLIO</span>
                    </NavigationMenuItem>
                    <NavigationMenuItem
                        className="py-2 hover:bg-gray-700 w-full list-none"
                        onClick={() => {
                            handleScroll('contact');
                            setIsOpen(false);
                        }}
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                        <span className='ml-4'>CONTATO</span>
                    </NavigationMenuItem>
                </div>
            )}
        </div>
    );
});

export default Navbar;
