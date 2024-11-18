import Link from "next/link";
import Image from "next/image";
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer
            className="w-full bg-[#29344A] py-8 text-gray-300"
            style={{ fontFamily: "Montserrat, sans-serif" }}
        >
            <div className="container mx-auto flex md:flex-row flex-col md:flex-row justify-between items-start md:items-center px-4">
                <div className="flex flex-row space-x-4">
                    <Image
                        src={'/b2b-vetor.svg'}
                        alt='B2 Frotas Personalização'
                        width={120}
                        height={50}
                        priority
                    />
                    <Image
                        src={'/30anos.webp'}
                        alt="3O anos"
                        width={120}
                        height={50}
                        priority
                    />
                </div>
                <div className="flex flex-col mt-10 md:flex-row space-y-6 md:space-y-0 md:space-x-12">
                    <div>
                        <h4 className="text-white font-bold mb-3">NAVEGAÇÃO</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#home" className="hover:text-white transition-colors">
                                    HOME
                                </Link>
                            </li>
                            <li>
                                <Link href="#portfolio" className="hover:text-white transition-colors">
                                    SERVIÇOS
                                </Link>
                            </li>
                            <li>
                                <Link href="#sobre" className="hover:text-white transition-colors">
                                    SOBRE NÓS
                                </Link>
                            </li>
                            <li>
                                <Link href="#portfolio" className="hover:text-white transition-colors">
                                    PORTFÓLIO
                                </Link>
                            </li>
                            <li>
                                <Link href="#sobre" className="hover:text-white transition-colors">
                                    CONTATO
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-3 font-montserrat">CONTATOS</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="tel:+554733085589" className="hover:text-white transition-colors">
                                    <FontAwesomeIcon icon={faPhone} className="mr-2 align-middle" />
                                    (47) 3308-5589
                                </Link>
                            </li>
                            <li>
                                <Link href="mailto:contato@empresa.com" className="hover:text-white transition-colors">
                                    <FontAwesomeIcon icon={faEnvelope} className="mr-2 align-middle" />
                                    empresab2frotas@gmail.com
                                </Link>
                            </li>
                            <li>
                                <Link href="#endereco" className="hover:text-white transition-colors">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 align-middle" />
                                    R. BLUMENAU, 1995 - <br/>
                                    GALPÃO 2 - DOS ESTADOS, <br />
                                    TIMBÓ - SC, 89120-000
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-3">REDES SOCIAIS</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="https://facebook.com" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} className="text-lg mr-1" style={{ color: 'white' }} />
                                    FACEBOOK
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.instagram.com/b2frotasoficial" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} className="text-lg mr-1" style={{ color: 'white' }} />
                                    INSTAGRAM
                                </Link>
                            </li>
                            <li>
                                <Link href="https://wa.me/5547880866082" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faWhatsapp} className="text-lg mr-1" style={{ color: 'white' }} />
                                    WHASTAPP
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
