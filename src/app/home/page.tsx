// import { Section } from 'lucide-react';
import React from 'react';
import localFont from 'next/font/local';
import './home.css'

const pixeledfont = localFont({
    src: [{
        path: '../fonts/Pixeled.ttf'
    }]
})

const Home = () => {
    // const scrollToSection = (sectionId: string) => {
    //     const element = document.getElementById(sectionId);
    //     if (element) {
    //         element.scrollIntoView({ behavior: 'smooth' });
    //     }
    // }

    return (
        <section id="home">
            <div>
                <h1 className={`m-6 ${pixeledfont.className}`}>Welcome to the uOttawa Game Development website!</h1>
            </div>
        </section>
    );
}

export default Home;