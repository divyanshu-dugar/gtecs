'use client'

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Home() {
  const slides = [
    "/hero/image.png",
    "/hero/image2.png",
    "/hero/image3.png",
  ];

  const [current, setCurrent] = useState(0);

  // Auto-slide every 3s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="pt-16"> {/* padding for navbar offset */}

      {/* Hero Section - Side by side layout */}
      <section className="relative w-full min-h-[90vh] flex flex-col md:flex-row">
        {/* Text Content - Left Side */}
        <div className="w-full md:w-1/2 bg-gradient-to-r from-[#303274] to-[#3f42a5] flex items-center justify-center p-10 md:p-16 text-white">
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              GTECS – Unlocking Potential
            </h1>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              From <span className="text-[#F58634] font-semibold">Abacus</span> to{" "}
              <span className="text-[#F58634] font-semibold">Robotics</span>,  
              we inspire creativity, confidence, and critical thinking in every child.
            </p>
            <p className="italic text-gray-200 text-lg">
              &quot;Every child is a genius in their own way - we just help bring it out.&quot;
            </p>
            
            {/* Call to Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/book-info">
                <button className="px-6 py-3 bg-[#F58634] text-white font-semibold rounded-lg shadow-md hover:bg-[#e07a2c] transition">
                  Book Info Session
                </button>
              </Link>
              <Link href="/programs">
                <button className="px-6 py-3 bg-white text-[#303274] font-semibold rounded-lg shadow-md hover:bg-gray-100 transition">
                  View Programs
                </button>
              </Link>
            </div>
            
          </div>
        </div>

        {/* Image Slider - Right Side */}
        <div className="w-full md:w-1/2 relative h-[50vh] md:h-auto">
          {slides.map((src, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover"
              />
            </div>
          ))}

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition z-20"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/60 transition z-20"
          >
            <ChevronRight size={24} />
          </button>
          
          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full ${
                  index === current ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#303274] mb-10">
          Visit Our Center
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Google Street View */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1756071779668!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQ0V5cTZ5TWc.!2m2!1d43.75707720701137!2d-79.31215400647736!3f271.1414852852547!4f-15.48013662171391!5f0.7820865974627469"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          {/* Google Map */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1440.8797515744927!2d-79.31332021951677!3d43.757090703569986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d212b41de03d%3A0xd55680877b2f7e2f!2sUCMAS%20-%20Abacus%2C%20OBOTZ%20-%20Robotics%20%26%20i-Maths!5e0!3m2!1sen!2sus!4v1756071978222!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}