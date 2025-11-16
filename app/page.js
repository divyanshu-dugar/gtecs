'use client';

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Star, Play, ArrowRight } from "lucide-react";

export default function Home() {
  const slides = [
    "/hero/image.png",
    "/hero/image2.png",
    "/hero/image3.png",
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 4s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="pt-16 relative overflow-hidden">

      {/* Enhanced Background Gradient Mesh */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-r from-[#3f42a5] to-[#5d60d6]/40 blur-[120px] rounded-full opacity-60" />
        <div className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-gradient-to-r from-[#F58634] to-[#ff9d55]/30 blur-[100px] rounded-full opacity-40" />
        <div className="absolute bottom-[-5%] left-[20%] w-[400px] h-[400px] bg-gradient-to-r from-[#303274] to-[#4a4da8]/20 blur-[110px] rounded-full opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 via-slate-900/90 to-slate-950" />
      </div>

      {/* Enhanced Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 gap-8 md:gap-12">

        {/* Enhanced Left Side Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full md:w-1/2 py-12 md:py-0 relative"
        >
          <div className="max-w-xl mx-auto md:mx-0 text-center md:text-left relative z-10">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-white/80 text-sm font-medium">Trusted by 500+ Students</span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Unlock Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#F58634] to-[#ff9d55] bg-clip-text text-transparent">
                Child's Potential
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-300 mt-6 leading-relaxed">
              From <span className="text-[#F58634] font-semibold">Abacus</span> to{" "}
              <span className="text-[#F58634] font-semibold">Robotics</span>,  
              we nurture creativity, confidence & critical thinking for the next generation.
            </p>

            {/* Testimonial Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 p-4 border-l-4 border-[#F58634] bg-white/5 backdrop-blur-sm rounded-r-lg"
            >
              <p className="italic text-gray-200 text-lg">
                "Every child is a genius in their own way. We just help them discover it."
              </p>
            </motion.div>

            {/* Enhanced CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center md:items-start">
              <Link href="/book-info">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-8 py-4 bg-gradient-to-r from-[#F58634] to-[#ff9d55] text-white font-semibold rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="flex items-center gap-2 relative z-10">
                    Book Free Session
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </Link>

              <Link href="/programs">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-xl shadow-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                >
                  <span className="flex items-center gap-2">
                    <Play size={18} className="text-[#F58634]" />
                    View Programs
                  </span>
                </motion.button>
              </Link>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-12 grid grid-cols-3 gap-6 text-center md:text-left"
            >
              <div>
                <div className="text-2xl font-bold text-white">95%</div>
                <div className="text-gray-400 text-sm">Success Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">8+</div>
                <div className="text-gray-400 text-sm">Programs</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">5★</div>
                <div className="text-gray-400 text-sm">Parent Rating</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced Right Side Slider */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full md:w-1/2 h-[55vh] md:h-[75vh]"
        >
          {/* Slider Container with Glass Effect */}
          <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10">
            
            <AnimatePresence mode="wait">
              {slides.map((src, index) =>
                index === current ? (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute top-0 left-0 w-full h-full"
                  >
                    <Image
                      src={src}
                      alt={`Slide ${index + 1}`}
                      fill
                      priority
                      className="object-cover"
                    />
                    {/* Gradient Overlay for better text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>

            {/* Enhanced Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-xl text-white p-3 rounded-full hover:bg-black/50 border border-white/10 transition-all duration-300 z-20 hover:scale-110"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 backdrop-blur-xl text-white p-3 rounded-full hover:bg-black/50 border border-white/10 transition-all duration-300 z-20 hover:scale-110"
            >
              <ChevronRight size={20} />
            </button>

            {/* Enhanced Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === current
                      ? "bg-white scale-125 shadow-lg"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            {/* Floating Elements */}
            <div className="absolute top-6 left-6 bg-gradient-to-r from-[#F58634] to-[#ff9d55] text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-20">
              Featured Program
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-[#3f42a5] to-[#5d60d6] rounded-full blur-3xl opacity-30 -z-10" />
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-[#F58634] to-[#ff9d55] rounded-full blur-2xl opacity-20 -z-10" />
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Visit Our Center
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
          Experience our modern learning environment designed to inspire creativity and innovation
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1756071779668!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0V5cTZ5TWc.!2m2!1d43.75707720701137!2d-79.31215400647736!3f271.1414852852547!4f-15.48013662171391!5f0.7820865974627469"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1440.8797515744927!2d-79.31332021951677!3d43.757090703569986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d212b41de03d%3A0xd55680877b2f7e2f!2sUCMAS%20-%20Abacus%2C%20OBOTZ%20-%20Robotics%20%26%20i-Maths!5e0!3m2!1sen!2sus!4v1756071978222!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}