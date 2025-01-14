import { Section } from 'lucide-react';
import React from 'react';
import './home.css'

const Home = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <section id="home">
            <div>
                <h1>Welcome to the uOttawa Game Development website!</h1>
            </div>
        </section>
    );
}

export default Home;