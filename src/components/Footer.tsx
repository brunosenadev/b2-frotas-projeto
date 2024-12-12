import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu";
import Image from "next/image";
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const handleScroll = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="w-full bg-[#29344A] py-8 text-gray-300" style={{ fontFamily: "Montserrat, sans-serif" }}>
            <div className="flex md:flex-row flex-col md:justify-between items-center md:items-center px-4">
                <div className="flex flex-row space-x-4">
                    <Image
                        src={'/b2b-vetor.svg'}
                        alt='B2 Frotas Personalização'
                        width={180}
                        height={50}
                        priority
                        className="md:ml-10"
                    />
                </div>
                <div className="flex flex-col justify-center items-center text-center text-lg md:text-2xl md:flex-row space-y-6 md:space-y-0 md:space-x-12">
                    <div className="mt-4 md:mt-0">
                        <h4 className="text-white font-bold">NAVEGAÇÃO</h4>
                        <NavigationMenu>
                            <NavigationMenuList className="flex flex-col space-y-2">
                                <NavigationMenuItem>
                                    <NavigationMenuLink onClick={() => handleScroll('home')} className="hover:text-white hover:cursor-pointer transition-colors">
                                        HOME
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink onClick={() => handleScroll('about')} className="hover:text-white hover:cursor-pointer transition-colors">
                                        SOBRE NÓS
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink onClick={() => handleScroll('portfolio')} className="hover:text-white hover:cursor-pointer transition-colors">
                                        PORTFÓLIO
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuLink onClick={() => handleScroll('contact')} className="hover:text-white hover:cursor-pointer transition-colors">
                                        CONTATO
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-3">CONTATOS</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="tel:+554733085589" className="hover:text-white transition-colors">
                                    <FontAwesomeIcon icon={faPhone} className="mr-2 align-middle" />
                                    (47) 3308-5589
                                </a>
                            </li>
                            <li>
                                <a href="mailto:empresab2frotas@gmail.com" className="hover:text-white transition-colors">
                                    <FontAwesomeIcon icon={faEnvelope} className="mr-2 align-middle" />
                                    empresab2frotas@gmail.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.google.com/maps?ll=-26.844873,-49.273711&z=16&t=m&hl=pt-BR&gl=US&mapclient=embed&cid=13569836490430979325"
                                    className="hover:text-white transition-colors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 align-middle" />
                                    R. BLUMENAU, 1995 - GALPÃO 2, TIMBÓ - SC, 89120-000
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-3">REDES SOCIAIS</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="https://facebook.com" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} className="text-lg mr-1" style={{ color: 'white' }} />
                                    FACEBOOK
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/b2frotasoficial" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} className="text-lg mr-1" style={{ color: 'white' }} />
                                    INSTAGRAM
                                </a>
                            </li>
                            <li>
                                <a href="https://wa.me/5547880866082" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faWhatsapp} className="text-lg mr-1" style={{ color: 'white' }} />
                                    WHATSAPP
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-row space-x-4">
                    <Image
                        src={'/1989.webp'}
                        alt="30 anos"
                        width={200}
                        height={50}
                        priority
                        className="mt-4"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
