"use client";

import './contact.css'

import React from 'react';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async (em: React.FormEvent) => {
        em.preventDefault();

        const formData = {
            name,
            email,
            message
        };

        try {

            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Conent-Type": "application/json"
                },
                body: JSON.stringify(formData)
            })

            if (response.ok) {
                setStatus("Message sent successfully!");
                setName("");
                setEmail("");
                setMessage("");
            } else {
                setStatus("ERROR, Please try again.");
            }
        } catch (err) {
            setStatus("ERROR, Please try again.")
        }
    }
    return (
        <section id='contact'>
            {/* <div className='contact-box'>
                <div className='title-description'>
                    <h1 className='contact-title'>CONTACT US</h1>
                    <p className='description'>Fill out the form below to message us directly!</p>
                </div>
                <form onSubmit={handleSubmit} className='form'>
                    <div className='name'>
                        <input
                            placeholder='Name'
                            type='text'
                            id='name'
                            value={name}
                            onChange={((em) => setName(em.target.value))}
                            required
                        />
                    </div>
                    <div className='email'>
                        <input
                            placeholder='Email'
                            type='email'
                            id='email'
                            value={email}
                            onChange={(em) => setEmail(em.target.value)}
                            required
                        />
                    </div>
                    <div className='msg'>
                        <input
                            placeholder='Write your message here'
                            type='message'
                            id='message'
                            value={message}
                            onChange={(em) => setMessage(em.target.value)}
                            required
                        />
                    </div>
                    <div className='div-btn'>
                        <Button className='contact-btn'>SUBMIT</Button>
                    </div>
                </form>
            </div> */}
        </section>
    );
};

export default Contact;