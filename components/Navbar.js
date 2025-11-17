"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, Sparkles, User, BookOpen, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();

  // Programs dropdown data
  const programs = [
    {
      name: "UCMAS Mental Math",
      description: "Abacus-based brain development",
      href: "/programs",
      icon: <Sparkles className="w-4 h-4" />,
      color: "from-blue-500 to-purple-600"
    },
    {
      name: "OBOTZ Robotics",
      description: "STEM & coding education",
      href: "/programs",
      icon: <GraduationCap className="w-4 h-4" />,
      color: "from-green-500 to-teal-600"
    },
    {
      name: "iMaths Creative Math",
      description: "Play-based mathematics",
      href: "/programs",
      icon: <BookOpen className="w-4 h-4" />,
      color: "from-orange-500 to-red-600"
    }
  ];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu opens
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const linkClasses = (href) =>
    clsx(
      "transition-all duration-300 font-medium relative group",
      pathname === href
        ? "text-[#303274] font-semibold"
        : "text-gray-600 hover:text-[#303274]"
    );

  const navLinkHover = "after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-[#303274] after:to-[#F58634] after:left-0 after:-bottom-1 after:transition-all after:duration-300 group-hover:after:w-full";

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 w-full z-50 backdrop-blur-xl transition-all duration-500 border-b",
        scrolled
          ? "bg-white/95 shadow-lg py-2 border-gray-200/50"
          : "bg-white/80 shadow-sm py-4 border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* LOGO with enhanced design */}
        <Link 
          href="/" 
          className="flex items-center space-x-2 group"
          onMouseEnter={() => setActiveDropdown(null)}
        >
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-[#303274] to-[#3f42a5] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-[#303274] to-[#F58634] rounded-xl opacity-20 group-hover:opacity-30 blur-sm transition-all duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-[#303274] to-[#3f42a5] bg-clip-text text-transparent">
              1% Wiser - Kids
            </span>
            <span className="text-xs text-gray-500 -mt-1">Education Excellence</span>
          </div>
        </Link>

        {/* DESKTOP MENU with enhanced interactions */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link 
            href="/about" 
            className={clsx(linkClasses("/about"), navLinkHover)}
            onMouseEnter={() => setActiveDropdown(null)}
          >
            About Us
          </Link>

          {/* Programs Dropdown */}
          <div className="relative">
            <button
              className={clsx(
                "flex items-center space-x-1 transition-all duration-300 font-medium group",
                pathname.startsWith("/programs") 
                  ? "text-[#303274] font-semibold" 
                  : "text-gray-600 hover:text-[#303274]"
              )}
              onMouseEnter={() => setActiveDropdown("programs")}
              onClick={(e) => {
                e.stopPropagation();
                setActiveDropdown(activeDropdown === "programs" ? null : "programs");
              }}
            >
              <span>Programs</span>
              <ChevronDown 
                size={16} 
                className={clsx(
                  "transition-transform duration-300",
                  activeDropdown === "programs" && "rotate-180"
                )} 
              />
            </button>

            <AnimatePresence>
              {activeDropdown === "programs" && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 p-4"
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <div className="space-y-2">
                    {programs.map((program, index) => (
                      <motion.div
                        key={program.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={program.href}
                          className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50/80 transition-all duration-300 group"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className={`p-2 bg-gradient-to-r ${program.color} rounded-lg text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            {program.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-gray-800 group-hover:text-[#303274] transition-colors">
                              {program.name}
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                              {program.description}
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200/50">
                    <Link
                      href="/programs"
                      className="flex items-center justify-center w-full py-2 px-4 bg-gradient-to-r from-[#303274] to-[#3f42a5] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 group"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <Sparkles size={16} className="mr-2" />
                      View All Programs
                      <ChevronDown size={16} className="ml-1 rotate-90 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* DESKTOP ACTION BUTTONS with enhanced design */}
        <div className="hidden lg:flex items-center space-x-3">
          <a
            href="tel:+16479957157"
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#F58634] to-[#ff9a52] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
          >
            <Phone size={18} />
            <span>+1 647-1% Wiser - Kids-57</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </a>
          
          <Link
            href="/book-info"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#303274] to-[#3f42a5] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group flex items-center space-x-2"
          >
            <User size={18} />
            <span>Book Session</span>
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE with enhanced design */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          {isOpen ? (
            <X size={24} className="text-gray-700" />
          ) : (
            <Menu size={24} className="text-gray-700" />
          )}
        </button>
      </div>

      {/* ENHANCED MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="lg:hidden fixed top-0 right-0 w-80 h-full bg-white/95 backdrop-blur-xl z-50 shadow-2xl border-l border-gray-200/50"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200/50">
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#303274] to-[#3f42a5] rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">G</span>
                    </div>
                    <span className="text-lg font-bold text-[#303274]">1% Wiser - Kids</span>
                  </div>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Menu Items */}
              <div className="p-6 space-y-4">
                <Link
                  href="/about"
                  className="flex items-center space-x-3 p-4 rounded-xl hover:bg-gray-50/80 transition-all duration-300 text-lg font-semibold text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  <User size={20} />
                  <span>About Us</span>
                </Link>

                <div className="space-y-2">
                  <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Programs
                  </div>
                  {programs.map((program) => (
                    <Link
                      key={program.name}
                      href={program.href}
                      className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50/80 transition-all duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className={`p-2 bg-gradient-to-r ${program.color} rounded-lg text-white`}>
                        {program.icon}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-800">{program.name}</p>
                        <p className="text-sm text-gray-500">{program.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>

                <Link
                  href="/testimonials"
                  className="flex items-center space-x-3 p-4 rounded-xl hover:bg-gray-50/80 transition-all duration-300 text-lg font-semibold text-gray-700"
                  onClick={() => setIsOpen(false)}
                >
                  <Sparkles size={20} />
                  <span>Success Stories</span>
                </Link>
              </div>

              {/* Action Buttons */}
              <div className="absolute bottom-0 left-0 right-0 p-6 space-y-3 border-t border-gray-200/50 bg-white/50">
                <a
                  href="tel:+16479957157"
                  className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#F58634] to-[#ff9a52] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone size={20} />
                  <span>Call Now</span>
                </a>
                
                <Link
                  href="/book-info"
                  className="flex items-center justify-center space-x-2 w-full py-3 rounded-xl bg-gradient-to-r from-[#303274] to-[#3f42a5] text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <User size={20} />
                  <span>Book Info Session</span>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}