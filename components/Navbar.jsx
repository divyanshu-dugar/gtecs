"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Star, Phone, BookOpen, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkStyles =
    "text-[15px] font-medium transition hover:text-[#303274] text-gray-600";

  return (
    <nav className="w-full sticky top-0 z-50 backdrop-blur-xl border-b border-black/5 bg-white/95">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-[#F58634] to-[#FBBF24] flex items-center justify-center">
            <Star className="text-white" size={16} />
          </div>
          <span className="bg-gradient-to-r from-[#303274] to-[#F58634] bg-clip-text text-transparent">
            1% Wiser Kids
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <Link className={linkStyles} href="/">Home</Link>
          <Link className={linkStyles} href="/about">About</Link>
          <Link className={linkStyles} href="/programs">Programs</Link>
          
          {/* Programs Dropdown */}
          <div className="relative group">
            <button className={linkStyles + " flex items-center gap-1"}>
              Our Framework
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="p-4 space-y-3">
                <Link href="/programs#academic" className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <BookOpen className="text-blue-600" size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Academic Anchor</div>
                    <div className="text-sm text-gray-500">Structured Curriculum</div>
                  </div>
                </Link>
                <Link href="/programs#holistic" className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-50 transition-colors group">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Brain className="text-orange-600" size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">Holistic Horizon</div>
                    <div className="text-sm text-gray-500">Life Skills Development</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <Link className={linkStyles} href="/contact">Contact</Link>
          
          <div className="flex items-center gap-4">
            <Link href="/contact" className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#303274] transition-colors">
              <Phone size={16} />
              <span>+91 87775 74997</span>
            </Link>
            <Button 
              className="rounded-xl px-6 bg-gradient-to-r from-[#F58634] to-[#FBBF24] text-white font-semibold hover:shadow-lg transition-all hover:scale-105"
              asChild
            >
              <Link href="/book-demo">
                Book Free Demo
              </Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} className="text-gray-600" /> : <Menu size={24} className="text-gray-600" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200 px-6 pb-6 space-y-4">
          <Link 
            className={linkStyles + " block py-3 border-b border-gray-100"} 
            href="/"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>
          <Link 
            className={linkStyles + " block py-3 border-b border-gray-100"} 
            href="/about"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link 
            className={linkStyles + " block py-3 border-b border-gray-100"} 
            href="/programs"
            onClick={() => setOpen(false)}
          >
            Programs
          </Link>
          
          {/* Mobile Framework Submenu */}
          <div className="py-3 border-b border-gray-100 space-y-3">
            <div className="text-sm font-semibold text-gray-400 mb-2">OUR FRAMEWORK</div>
            <Link 
              href="/programs#academic" 
              className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 transition-colors group"
              onClick={() => setOpen(false)}
            >
              <div className="p-2 bg-blue-100 rounded-lg">
                <BookOpen className="text-blue-600" size={18} />
              </div>
              <div>
                <div className="font-semibold text-gray-800">Academic Anchor</div>
                <div className="text-sm text-gray-500">Structured Curriculum</div>
              </div>
            </Link>
            <Link 
              href="/programs#holistic" 
              className="flex items-center gap-3 p-3 rounded-xl bg-orange-50 transition-colors group"
              onClick={() => setOpen(false)}
            >
              <div className="p-2 bg-orange-100 rounded-lg">
                <Brain className="text-orange-600" size={18} />
              </div>
              <div>
                <div className="font-semibold text-gray-800">Holistic Horizon</div>
                <div className="text-sm text-gray-500">Life Skills Development</div>
              </div>
            </Link>
          </div>

          <Link 
            className={linkStyles + " block py-3 border-b border-gray-100"} 
            href="/contact"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
          
          <div className="pt-4 space-y-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Phone size={16} />
              <span>+91 98765 43210</span>
            </div>
            <Button 
              className="w-full rounded-xl bg-gradient-to-r from-[#F58634] to-[#FBBF24] text-white font-semibold hover:shadow-lg transition-all"
              asChild
            >
              <Link href="/book-demo" onClick={() => setOpen(false)}>
                Book Free Demo
              </Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}