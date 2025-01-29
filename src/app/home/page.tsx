import React from 'react';
import './home.css'
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
                <Button className='btn'>JOIN NOW</Button>
            </div>
            <div className='right-half'>
                <img src='../../public/imgs/mac-falling-transparent.png'/>
            </div>
        </section>
    );
}

export default Home;