import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Contact from './Contact';
import Map from '@/components/Map';

const ContactSection = memo(() => {
    return (
        <section
            id='contact'
            className='pb-20 mt-10'
        >
            <div className="relative z-10 text-center">
                <div className="flex items-center mb-8">
                    <div className="flex-grow h-1 bg-red-500"></div>
                    <h2
                        className="mx-4 text-2xl font-semibold tracking-wide text-black whitespace-nowrap"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                        CONTATO
                    </h2>
                    <div className="flex-grow h-1 bg-red-500"></div>
                </div>
                <p className="font-semibold text-lg md:text-2xl mt-2 text-center">
                    Entre em contato com a nossa equipe e vamos juntos transformar a identidade da sua empresa!
                </p>
                <br />
                <div className="sm:grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:gap-2 justify-between">
                    <div className="mt-1 mb-4 lg:space-y-10">
                        <h2 className="text-2xl font-semibold md:text-start mb-4 sm:mt-4">Contatos</h2>
                        <div className="text-xl font-semibold md:text-start">
                            <strong className="text-black">Email:</strong>
                            <br />
                            <a href="mailto:empresab2frotas@gmail.com" className="text-black">
                                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                                empresab2frotas@gmail.com
                            </a>
                            <br />
                            <a href="mailto:frotas@benke.com.br" className="text-black">
                                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                                frotas@benke.com.br
                            </a>
                        </div>
                        <p className="text-xl mt-4 font-semibold md:text-start">
                            <strong className="text-black">Telefone:</strong>
                            <br />
                            <a href="tel:+554733085589" className="text-black">
                                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                                (47) 3308-5589
                            </a>
                        </p>
                        <div className="flex flex-col space-x-4 md:items-start md:justify-start mt-3">
                            <p className="text-xl mt-4 font-semibold md:text-start">
                                <strong className="text-black">Redes Sociais:</strong>
                            </p>
                            <div className="space-x-4 mt-2">
                                <a href="https://wa.me/5547880866082" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faWhatsapp} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" style={{ color: 'black' }} />
                                </a>
                                <a href="https://www.instagram.com/b2frotasoficial" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" style={{ color: 'black' }} />
                                </a>
                                <a href="https://www.facebook.com/seu-perfil-facebook" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl" style={{ color: 'black' }} />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Contact />
                    </div>
                    <div className='mb-1 md:ml-20 lg:ml-20 text-center'>
                        <h2 className="text-2xl font-semibold mb-4 sm:mt-4">Localização</h2>
                        <Map />
                    </div>
                </div>
            </div>
        </section>
    )
});

export default ContactSection;