import React, { useState, useEffect, memo } from 'react';
import {
    NavigationMenu,
    NavigationMenuItem,
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
                className='w-full flex items-center justify-center pt-6 pb-6'
                style={{ background: 'rgba(41,52,74,255)' }}
            >
                <Image
                    src={'/b2b-vetor.svg'}
                    alt='b2-logo'
                    width={400}
                    height={400}
                />
            </div>
            <NavigationMenu
                className="min-w-full w-full h-[70%] lg:min-h-[80px] min-h-[60px] justify-end pr-4 md:pr-0 items-center md:justify-center text-center"

            >
                <div>
                    <div className="hidden space-x-8 md:flex mr-8 justify-center">
                        <NavigationMenuItem
                            className="text-white mx-1 text-2xl pr-12 font-semibold list-none hover:cursor-pointer border-r-4 border-white last:border-r-0 mt-2 whitespace-nowrap"
                            style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(41,52,74,255)', whiteSpace: 'no-wrap' }}
                            onClick={() => {
                                handleScroll('home');
                                setIsOpen(false);
                            }}
                        >
                            HOME
                        </NavigationMenuItem>
                        <NavigationMenuItem
                            className="text-white mx-4 text-2xl font-semibold pr-12 list-none hover:cursor-pointer border-r-4 border-white last:border-r-0 mt-2 whitespace-nowrap"
                            style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(41,52,74,255)' }}
                            onClick={() => {
                                handleScroll('about');
                                setIsOpen(false);
                            }}
                        >
                            SOBRE NÓS
                        </NavigationMenuItem>
                        <NavigationMenuItem
                            className="text-white mx-4 text-2xl font-semibold pr-12 list-none hover:cursor-pointer  border-r-4 border-white last:border-r-0 mt-2 whitespace-nowrap"
                            style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(41,52,74,255)' }}
                            onClick={() => {
                                handleScroll('portfolio');
                                setIsOpen(false);
                            }}
                        >
                            PORTFÓLIO
                        </NavigationMenuItem>
                        <NavigationMenuItem
                            className="text-white mx-4 text-2xl font-semibold list-none hover:cursor-pointer mt-2 whitespace-nowrap"
                            style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(41,52,74,255)' }}
                            onClick={() => {
                                handleScroll('contact');
                                setIsOpen(false);
                            }}
                        >
                            CONTATO
                        </NavigationMenuItem>
                    </div>
                </div>
                <div className="md:hidden flex items-center justify-end ml-2">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <div className="flex flex-col">
                            <span className="block w-8 h-1 bg-black mb-1"></span>
                            <span className="block w-8 h-1 bg-black mb-1"></span>
                            <span className="block w-8 h-1 bg-black"></span>
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
