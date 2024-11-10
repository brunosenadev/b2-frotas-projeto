import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Contact from './Contact';

const ContactSection = () => {
    return (
        <section
            id='contact'
            className='mt-5'
        >
            <div className="relative z-10 text-center mt-2">
                <h2
                    className="text-2xl font-semibold tracking-wide text-black"
                    style={{
                        fontFamily: 'Montserrat, sans-serif',
                    }}
                >
                    CONTATO
                </h2>
                <p className="font-semibold text-lg mt-2 text-center">
                    Entre em contato com a nossa equipe e vamos juntos transformar a identidade da sua empresa!
                </p>
                <br />
                <div className="flex space-x-4 items-center justify-center">
                    <a href="https://wa.me/554792566795" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: '#25D366' }} />
                    </a>
                    <a href="https://www.instagram.com/b2frotasoficial" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: '#E1306C' }} />
                    </a>
                    <a href="https://www.facebook.com/seu-perfil-facebook" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} size="2x" style={{ color: '#4267B2' }} />
                    </a>
                    {/* <a href="https://www.linkedin.com/in/seu-perfil-linkedin" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" style={{ color: '#0e76a8' }} />
                  </a> */}
                </div>
                <div className="sm:grid sm:grid-cols-1 md:grid-cols-2 sm:gap-8">
                    <div className="mt-1 mb-4">
                        <h2 className="text-2xl font-semibold text-center mb-4 sm:mt-5">Entre em contato</h2>
                        <p className="text-lg">
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
                        </p>
                        <p className="text-lg mt-4">
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
                <p className="text-lg mt-4">
                    <strong className="text-black">Localização:</strong>
                    <iframe
                        src="https://maps.google.com.br/maps?q=B2+Frotas+-+Personalização+de+Frotas&output=embed"
                        allowFullScreen
                        loading="lazy"
                        className='w-full mt-5'
                        height={300}
                    ></iframe>
                </p>
            </div>
        </section>
    )
};

export default ContactSection;