import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm(
        'service_f5egog8',
        'template_y4lz9x7',
        form.current,
        'QnVHYHrXpWED1z_gW',
      ).then(
        (result) => {
          setIsSubmitted(true);
          setIsError(false);
          console.log('Email enviado com sucesso:', result.text);
          if (form.current != null) {
            form.current.reset();
          }
        },
        (error) => {
          setIsError(true);
          console.log('Erro ao enviar email:', error.text);
        }
      );
    }
  };

  return (
    <div className="min-w-full p-4">
      <h2 className="text-2xl font-semibold text-center mb-4">Como podemos ajudar?</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-xl mx-auto bg-white p-6 rounded-md shadow-lg"
        style={{ background: 'rgba(41,52,74,255)' }}
      >
        <label
          className="block text-md text-white"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Nome
        </label>
        <input
          type="text"
          name="from_name"
          placeholder="Nome"
          className="w-full p-2 border border-gray-300 rounded-lg mt-2 text-black"
          required
        />

        <label
          className="block text-md mt-3 text-white"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Número
        </label>
        <input
          type="tel"
          name="from_phone"
          placeholder="(47) 91234-5678"
          pattern="\(\d{2}\) \d{4,5}-\d{4}"
          required
          className="w-full p-2 border border-gray-300 rounded-md mt-2 text-black"
        />

        <label
          className="block text-md mt-3 text-white"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Email
        </label>
        <input
          type="email"
          name="from_email"
          placeholder="E-mail"
          className="w-full p-2 border border-gray-300 rounded-md mt-2 text-black"
          required
        />

        <label
          className="block text-md mt-3 text-white"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Assunto
        </label>
        <textarea
          name="message"
          placeholder="Qual o assunto?"
          className="w-full p-2 border border-gray-300 rounded-md mt-2 text-black"
          required
        />

        <button
          type="submit"
          className="w-full mt-6 p-2 bg-white font-bold text-black rounded-lg hover:bg-gray-300 transition duration-300"
        >
          Enviar Mensagem
        </button>

        {isSubmitted && !isError && (
          <p className="mt-4 text-green-500 text-center">Email enviado com sucesso!</p>
        )}
        {isError && (
          <p className="mt-4 text-red-500 text-center">Erro ao enviar email. Tente novamente.</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
