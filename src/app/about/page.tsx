
import React from 'react';
import './about.css';
import Image from 'next/image';

const About = () => {
    return (
        <section id="about">
            <div className='container'>
                <div className='about-us-image'>
                    <div className='image'>
                        <Image
                            src='/imgs/Mac/mac-tech.png'
                            alt='About Image'
                            height={500}
                            width={500}
                        />
                    </div>
                </div>
                <div className='about-us-text'>
                    <h1 className='about-us-title'>ABOUT US</h1>
                    <p className='text'>
                    Our game development club is a University of Ottawa community of passionate individuals who come together to create, learn, and share their love for game development.
                    </p>
                    <p className='maybe'>
                        Meet the team →
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;