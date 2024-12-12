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
                className="min-w-full w-full h-[70%] lg:min-h-[80px] min-h-[60px] items-center md:justify-start text-start px-4 sm:justify-start"

            >
                <div className='md:flex lg:mr-8 hidden'>
                    <Image
                        src={'/1989-fundobranco.jpeg'}
                        alt='1989-logo'
                        width={60}
                        height={15}
                        quality={100}
                    />
                </div>
                <div className="flex flex-col w-full lg:flex-row lg:w-[60%]">
                    <div className="hidden space-x-8 md:flex mr-8 md:text-center justify-center">
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
                        <NavigationMenuItem
                            className="text-white text-2xl font-semibold list-none hover:cursor-pointer"
                            style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(41,52,74,255)' }}
                            onClick={() => {
                                handleScroll('contact');
                                setIsOpen(false);
                            }}
                        >
                            <a href="https://wa.me/554788086608" target="_blank" rel="noopener noreferrer" className='text-white font-semibold mr-4 lg:mr-0'>
                                <FontAwesomeIcon icon={faWhatsapp} className="mr-2 lg:mr-0 text-5xl align-middle font-semibold" style={{ color: '#25D366' }} />
                            </a>
                        </NavigationMenuItem>
                    </div>
                    <div className="sm:hidden md:hidden lg:flex lg:flex-col lg:pl-0 lg:ml-0 xl:flex-row sm:justify-start sm:text-center sm:pb-2 lg:items-center">
                        <a
                            href="tel:+554733085589"
                            className="font-semibold mr-4 whitespace-nowrap"
                            style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(41,52,74,255)' }}
                        >
                            <FontAwesomeIcon icon={faPhone} className="mr-2 align-middle" />
                            (47) 3308-5589
                        </a>
                        <a
                            href="mailto:empresab2frotas@gmail.com"
                            className="font-semibold whitespace-nowrap"
                            style={{ fontFamily: 'Montserrat, sans-serif', color: 'rgba(41,52,74,255)' }}
                        >
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2 align-middle" />
                            empresab2frotas@gmail.com
                        </a>
                    </div>
                </div>
                <div className="md:hidden flex items-center justify-center ml-2">
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
