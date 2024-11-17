import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Contact from './Contact';

const ContactSection = () => {
    return (
        <section
            id='contact'
            className='pb-20 mt-10'
        >
            <div className="relative z-10 text-center">
                <div className="flex justify-center items-center mb-5">
                    <div className="w-1 h-10 bg-red-500 mr-4"></div>
                    <h2 className="text-2xl font-semibold tracking-wide text-black" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        CONTATO
                    </h2>
                </div>
                <p className="font-semibold text-lg md:text-2xl mt-2 text-center">
                    Entre em contato com a nossa equipe e vamos juntos transformar a identidade da sua empresa!
                </p>
                <br />
                <div className="flex space-x-4 items-center justify-center">
                    <a href="https://wa.me/554792566795" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" style={{ color: '#25D366' }} />
                    </a>
                    <a href="https://www.instagram.com/b2frotasoficial" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" style={{ color: '#FF007F' }} />
                    </a>
                    <a href="https://www.facebook.com/seu-perfil-facebook" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" style={{ color: 'blue' }} />
                    </a>
                </div>
                <div className="sm:grid sm:grid-cols-1 md:grid-cols-2 sm:gap-8">
                    <div className="mt-1 mb-4">
                        <h2 className="text-2xl font-semibold text-center mb-4 sm:mt-4">Entre em contato</h2>
                        <div className="text-lg font-semibold">
                            <strong className="text-black">Email:</strong>
                            <br />
                            <a href="mailto:brunocdesena@gmail.com" className="text-black">
                                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                                brunocdesena@gmail.com
                            </a>
                            <br />
                            <a href="mailto:brunocdesenadesenvolvedor@gmail.com" className="text-black">
                                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                                brunocdesenadesenvolvedor@gmail.com
                            </a>
                        </div>
                        <p className="text-lg mt-4 font-semibold">
                            <strong className="text-black">Telefone:</strong>
                            <br />
                            <a href="tel:+5547992566795" className="text-black">
                                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                                (47) 99256-6795
                            </a>
                            <br />
                            <a href="tel:+5547991703964" className="text-black">
                                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                                (47) 99170-3964
                            </a>
                            <br />
                            <a href="tel:+5547997511418" className="text-black">
                                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                                (47) 99751-1418
                            </a>
                        </p>
                    </div>
                    <div className="sm:pr-4">
                        <Contact />
                    </div>
                </div>
            </div>
        </section>
    )
};

export default ContactSection;