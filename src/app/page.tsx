"use client";

// import { products } from '@/utils/products';
import '../../public/css/style.css';
import { Button } from "@/components/ui/button";
import './globals.css';


import Home from './home/page';
import About from './about/page';
import Activities from './activities/page';
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
        <div className='fixedButtons'>
            <Button onClick={() => scrollToSection('home')}>Home</Button>
            <Button onClick={() => scrollToSection('about')}>About Us</Button>
            <Button onClick={() => scrollToSection('activities')}>Activities</Button>
            <Button onClick={() => scrollToSection('contact')}>Contact Us</Button>
        </div>
        <Home />
        <About />
        <Activities />
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