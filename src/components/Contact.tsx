import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';

const ContactForm = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isError, setIsError] = useState(false);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm(
                'YOUR_SERVICE_ID',
                'YOUR_TEMPLATE_ID',
                form.current,
                'YOUR_USER_ID'
            ).then(
                (result) => {
                    setIsSubmitted(true);
                    setIsError(false);
                    console.log('Email enviado com sucesso:', result.text);
                },
                (error) => {
                    setIsError(true);
                    console.log('Erro ao enviar email:', error.text);
                }
            );
        }
    };

    return (
        <FormContainer className='min-w-full'>
            <FormTitle>Envie uma mensagem</FormTitle>
            <Form ref={form} onSubmit={sendEmail}>
                <Label>Nome</Label>
                <Input type="text" name="name" placeholder="Nome" className='text-black' required />

                <Label>Email</Label>
                <Input type="email" name="email" placeholder="E-mail" className='text-black' required />

                <Label>Número</Label>
                <Input
                    type="tel"
                    name="phone"
                    placeholder="Número"
                    pattern="\(\d{2}\) \d{4,5}-\d{4}" 
                    required
                    className='text-black'
                />

                <Label>Mensagem</Label>
                <TextArea name="message" placeholder="Sua mensagem" className='text-black' required />

                <Button
                    type="submit"
                    className='shadow-gray-700'
                    style={{
                        background: 'rgba(41,52,74,255)'
                    }}
                >Enviar Mensagem</Button>

                {isSubmitted && !isError && <SuccessMessage>Email enviado com sucesso!</SuccessMessage>}
                {isError && <ErrorMessage>Erro ao enviar email. Tente novamente.</ErrorMessage>}
            </Form>
        </FormContainer>
    );
};

export default ContactForm;

// Styled Components
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  padding-right: 40px;
  padding-left: 40px;
  padding-top: 10px;
  background-color: #f7f7f7;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
`;

const FormTitle = styled.h2`
  font-size: 24px;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  color: #555;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    border-color: #0070f3;
    outline: none;
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  height: 150px;
  box-sizing: border-box;

  &:focus {
    border-color: #0070f3;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;

const SuccessMessage = styled.p`
  color: green;
  margin-top: 10px;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;
