// import { Section } from 'lucide-react';
import React from 'react';
// import localFont from 'next/font/local';
import './home.css'

// const pixeledfont = localFont({
//     src: [{
//         path: '../fonts/Pixeled.ttf'
//     }]
// })

const Home = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <section id="home" className='title'>
            <div>
                <h1>JOIN THE CLUB!</h1>
            </div>
        </section>
    );
}

export default Home;