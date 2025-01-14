import { Inter } from 'next/font/google';
import React, { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang='en'>
      <body className={inter.className}>

        { children }
        
        </body>
    </html>
  );
}

// export default function RootLayout({ children }: RootLayoutProps) {
  
//   const scrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//   }
  
  
//   return (
//     <html lang="en">
//       <head>
//         <title>Scrolling Website</title>
//       </head>
//       <body className={inter.className}>
//         {children}

//         {/* Example of sections with anchor links */}
//         <section id="home">
//           <div>
//             <h1>Home Page</h1>
//             <button onClick={() => scrollToSection('about')}>About Us</button>
//           </div>
//         </section>

//         <section id="about">
//           <h1>About Us</h1>
//           <button onClick={() => scrollToSection('activities')}>Activities</button>
//         </section>

//         <section id="activities">
//           <h1>Activities</h1>
//           <button onClick={() => scrollToSection('contact')}>Contact Us</button>
//         </section>

//         <section id="contact">
//           <h1>Contact Page</h1>
//         </section>
//       </body>
//     </html>
//   );
//}