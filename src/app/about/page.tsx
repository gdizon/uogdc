
import React from 'react';
import './about.css';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
    return (
        <section id="about">
            <Image
                src='/imgs/Mac/mac-tech.png'
                alt='About Image'
                height={500}
                width={500}
            />
            <div >

            </div>
        </section>
    );
}

export default About;