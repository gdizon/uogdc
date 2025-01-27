"use client";

// import { products } from '@/utils/products';
import '../../public/css/style.css';
import { Button } from "@/components/ui/button";
import './globals.css';


import Home from './home/page';
import Activities from './activities/page';
import About from './about/page';
import Contact from './contact/page';

// export function ButtonSecondary(link: string, => {
//     butt = link
// }) {
//     return <Button variant={"secondary"}>{butt}</Button>
// }

// export function ButtonDemo(word: string) {
//   return <Button variant={"secondary"}>{word}</Button>
// }


export default function Homepage(){

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if( element ) {
            element.scrollIntoView({ behavior: 'smooth' });
        };
    }

    return (<>

        <div>
            <nav className='nav-bar'>
                <div id='left-nav-side'>
                    <h1>UOTTAWA GAME DEV CLUB</h1>
                </div>
                <div className='fixedButtons' id='right-nav-side'>
                    <Button className='home-button' onClick={() => scrollToSection('home')}>Home</Button>
                    <Button className='activities-button' onClick={() => scrollToSection('activities')}>Activities</Button>
                    <Button className='about-button' onClick={() => scrollToSection('about')}>About Us</Button>
                    <Button className='contact-button' onClick={() => scrollToSection('contact')}>Contact Us</Button>
                </div>
            </nav>
        </div>
        
        <Home />
        <Activities />
        <About />
        <Contact />

    </>)
}

//---------------------------------------------------------------------------
//
//        LearnA    Just for test/learning   //   DELETE
//
//---------------------------------------------------------------------------
// (<>
//     <h1>Welcome to the uOttawa Game Development Club website!</h1>
//     <table>
//         <thead>
//             <tr>
//                 <th>Name</th>
//                 <th>Brand</th>
//                 <th>Price</th>
//             </tr>
//         </thead>
//         <tbody>
//             {
//                 products.map( item => (
//                     <tr key={item.id}>
                        
//                     </tr>
//                 ))
//             }
//         </tbody>
//     </table>
//     <ol>
//         {
//             products.map(item => (
//                 <li key={item.id}> {item.name}</li>
//             ))
//         }
//     </ol>
// </>)
//--------------------------------------------------------------------