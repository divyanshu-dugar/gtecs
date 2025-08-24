'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCallClick = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      window.location.href = 'tel:+16479957157';
    } else {
      // For desktop - you can implement a modal or other interaction
      console.log('Call button clicked on desktop');
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center z-50">
          <div className="relative w-40 h-12 md:w-48 md:h-14">
            <Image
              src="/logo.png" // Replace with your logo path
              alt="UCMAS Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link 
            href="/about" 
            className="text-gray-700 hover:text-[#303274] font-medium transition-colors duration-300"
          >
            About Us
          </Link>
          <Link 
            href="/gallery" 
            className="text-gray-700 hover:text-[#303274] font-medium transition-colors duration-300"
          >
            Gallery
          </Link>
          <Link 
            href="/programs" 
            className="text-gray-700 hover:text-[#303274] font-medium transition-colors duration-300"
          >
            Programs
          </Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link 
            href="/book-session" 
            className="bg-[#303274] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#25255a] transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Book Info Session
          </Link>
          <button 
            onClick={handleCallClick}
            className="bg-[#F58634] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-[#e07629] transition-colors duration-300 flex items-center space-x-2 shadow-md hover:shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>+1 647-GTECS-57</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <button 
          className="lg:hidden relative w-10 h-10 focus:outline-none z-50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <span className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 delay-200' : '-translate-y-1.5'}`}></span>
            <span className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 delay-200' : 'translate-y-1.5'}`}></span>
          </div>
        </button>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col items-center justify-center h-full space-y-10">
            <Link 
              href="/about" 
              className="text-2xl font-medium text-gray-800 hover:text-[#303274] transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/gallery" 
              className="text-2xl font-medium text-gray-800 hover:text-[#303274] transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              href="/programs" 
              className="text-2xl font-medium text-gray-800 hover:text-[#303274] transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Programs
            </Link>
            
            <div className="flex flex-col space-y-6 mt-10">
              <Link 
                href="/book-session" 
                className="bg-[#303274] text-white px-8 py-3 rounded-lg font-medium text-center hover:bg-[#25255a] transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Info Session
              </Link>
              <button 
                onClick={() => {
                  handleCallClick();
                  setIsMenuOpen(false);
                }}
                className="bg-[#F58634] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#e07629] transition-colors duration-300 flex items-center justify-center space-x-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+1 647-GTECS-57</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// import Link from "next/link";
// import Image from "next/image";
// import { useState } from "react";
// import { Menu, X, Phone } from "lucide-react";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
//         {/* Logo */}
//         <Link href="/">
//           <Image
//             src="/logo.png" // replace with your logo path
//             alt="UCMAS Logo"
//             width={120}
//             height={50}
//             className="cursor-pointer"
//           />
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-10 text-gray-700 font-medium">
//           <Link href="/about" className="hover:text-[#303274] transition-colors">
//             About Us
//           </Link>
//           <Link href="/gallery" className="hover:text-[#303274] transition-colors">
//             Gallery
//           </Link>
//           <Link href="/programs" className="hover:text-[#303274] transition-colors">
//             Programs
//           </Link>
//         </div>

//         {/* Buttons */}
//         <div className="hidden md:flex items-center space-x-4">
//           <Link
//             href="/book-info"
//             className="px-4 py-2 rounded-2xl bg-[#303274] text-white font-semibold shadow-md hover:opacity-90 transition"
//           >
//             Book Info Session
//           </Link>
//           <a
//             href="tel:+16479957157"
//             className="flex items-center space-x-2 px-4 py-2 rounded-2xl bg-[#F58634] text-white font-semibold shadow-md hover:opacity-90 transition"
//           >
//             <Phone size={18} />
//             <span>+1 647-GTECS-57</span>
//           </a>
//         </div>

//         {/* Mobile Menu Toggle */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-gray-700"
//         >
//           {isOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4">
//           <Link
//             href="/about"
//             className="block text-gray-700 font-medium hover:text-[#303274]"
//           >
//             About Us
//           </Link>
//           <Link
//             href="/gallery"
//             className="block text-gray-700 font-medium hover:text-[#303274]"
//           >
//             Gallery
//           </Link>
//           <Link
//             href="/programs"
//             className="block text-gray-700 font-medium hover:text-[#303274]"
//           >
//             Programs
//           </Link>
//           <Link
//             href="/book-info"
//             className="block px-4 py-2 rounded-2xl bg-[#303274] text-white text-center font-semibold"
//           >
//             Book Info Session
//           </Link>
//           <a
//             href="tel:+16479957157"
//             className="flex justify-center items-center space-x-2 px-4 py-2 rounded-2xl bg-[#F58634] text-white font-semibold"
//           >
//             <Phone size={18} />
//             <span>+1 647-GTECS-57</span>
//           </a>
//         </div>
//       )}
//     </nav>
//   );
// }
