'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Reusable link styles
  const linkClasses = (href) =>
    `hover:text-[#303274] transition-colors ${
      pathname === href ? "text-[#303274] font-semibold" : "text-gray-700"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/">
          {/* <Image
            src="/logo.png"
            alt="UCMAS Logo"
            width={120}
            height={50}
            className="cursor-pointer"
          /> */}
          <h1 className="text-xl font-bold text-[#303274]">GTECS</h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 font-medium">
          <Link href="/about" className={linkClasses("/about")}>
            About Us
          </Link>
          <Link href="/gallery" className={linkClasses("/gallery")}>
            Gallery
          </Link>
          <Link href="/programs" className={linkClasses("/programs")}>
            Programs
          </Link>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/book-info"
            className="px-4 py-2 rounded-2xl bg-[#303274] text-white font-semibold shadow-md hover:opacity-90 transition"
          >
            Book Info Session
          </Link>
          <a
            href="tel:+16479957157"
            className="flex items-center space-x-2 px-4 py-2 rounded-2xl bg-[#F58634] text-white font-semibold shadow-md hover:opacity-90 transition"
          >
            <Phone size={18} />
            <span>+1 647-GTECS-57</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4">
          {/* Added flex-col to stack items vertically */}
          <div className="flex flex-col space-y-4">
            <Link href="/about" className={`${linkClasses("/about")} py-2`}>
              About Us
            </Link>
            {/* <Link href="/gallery" className={`${linkClasses("/gallery")} py-2`}>
              Gallery
            </Link> */}
            <Link href="/programs" className={`${linkClasses("/programs")} py-2`}>
              Programs
            </Link>
            <Link
              href="/book-info"
              className="block px-4 py-3 rounded-2xl bg-[#303274] text-white text-center font-semibold"
            >
              Book Info Session
            </Link>
            <a
              href="tel:+16479957157"
              className="flex justify-center items-center space-x-2 px-4 py-3 rounded-2xl bg-[#F58634] text-white font-semibold"
            >
              <Phone size={18} />
              <span>+1 647-GTECS-57</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}