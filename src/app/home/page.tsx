'use client'

import './home.css'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';


const Home = () => {
    // const scrollToSection = (sectionId: string) => {
    //     const element = document.getElementById(sectionId);
    //     if (element) {
    //         element.scrollIntoView({ behavior: 'smooth' });
    //     }
    // }

    return (
        <section id="home">
            <div className='left-half'>
                <div className='title'>
                    <h1>JOIN THE CLUB!</h1>
                </div>
                <p className='description'>
                    Connect with like-minded game developers, learn new skills, and collaborate on exciting projects!
                </p>
                <Link href='https://forms.office.com/r/gMUWQT8KYS' passHref legacyBehavior>
                    <a target='_blank'>
                        <Button className='btn'>JOIN NOW</Button>
                    </a>
                </Link>
            </div>
            <div className='right-half'>
                <Image 
                    src="/imgs/Mac/mac-falling-transparent.png"
                    alt="Mac Hompage Image"
                    width={500}
                    height={500}
                    className='mac-homepage'
                />
            </div>
        </section>
    );
}

export default Home;