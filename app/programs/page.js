'use client'

import { useState } from 'react';
import Image from 'next/image';
import { Brain, Cpu, Calculator, ArrowRight, Star, Users, Clock, Award } from 'lucide-react';

export default function Programs() {
  const [activeTab, setActiveTab] = useState('all');

  const programs = [
    {
      id: 1,
      title: "UCMAS Mental Math Program",
      description: "An Abacus-based whole brain development program for children ages 5-13 that dramatically enhances cognitive abilities through mental math training.",
      fullDescription: "UCMAS Mental Math program is an Abacus based whole brain development program for children between the ages of 5-13. It leads to increased Concentration, Observation, Memory, Imagination and Creativity (COMIC) in kids. It results in supremacy with Judgement, Application, Reasoning and Self Confidence (JARS). UCMAS is an internationally recognized and widely demonstrated children&apos;s Cognitive Enrichment program.",
      image: "/programs/ucmas.png",
      age: "5-13 years",
      duration: "2 hours/week",
      benefits: ["Enhanced concentration", "Improved memory", "Better calculation skills", "Increased confidence"],
      category: "math",
      icon: <Brain className="w-6 h-6" />,
      color: "bg-gradient-to-r from-blue-600 to-purple-600"
    },
    {
      id: 2,
      title: "OBOTZ Robotics & Coding",
      description: "A multi-disciplinary robotics program that teaches children about physics, electronics, and programming through hands-on experiences.",
      fullDescription: "OBOTZ is a multi-disciplinary robotics program with a specially designed educational pathway to teach and train young minds about Physics, Electronics, and Robotics. STEM learning is the foundational building block of this program, leading youngsters to think scientifically and advance in facts. It&apos;s a perfect companion for machine, hardware, and programming-based learning.",
      image: "/programs/obotz.jpg",
      age: "7-15 years",
      duration: "2.5 hours/week",
      benefits: ["STEM education", "Coding skills", "Problem-solving", "Creative thinking"],
      category: "robotics",
      icon: <Cpu className="w-6 h-6" />,
      color: "bg-gradient-to-r from-green-600 to-teal-600"
    },
    {
      id: 3,
      title: "iMaths Creative Mathematics",
      description: "A playful mathematics program designed for young children to develop numerical abilities and logical thinking through fun activities.",
      fullDescription: "iMaths makes mathematics fun for 3 to 7 year olds using play-based methods. Through puzzles, activities, games, and tangrams, math becomes an enjoyable &apos;no problem&apos; experience. Math education doesn&apos;t need to start only when your child steps into school - it starts much earlier. We help develop essential mental and logical skills that form the foundation for all career directions.",
      image: "/programs/imath.png",
      age: "3-7 years",
      duration: "1.5 hours/week",
      benefits: ["Early math foundation", "Logical thinking", "Problem-solving", "Play-based learning"],
      category: "math",
      icon: <Calculator className="w-6 h-6" />,
      color: "bg-gradient-to-r from-orange-600 to-red-600"
    }
  ];

  const filteredPrograms = activeTab === 'all' 
    ? programs 
    : programs.filter(program => program.category === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#303274] mb-6">
            Our Educational Programs
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover our transformative programs designed to unlock your child&apos;s potential through innovative learning approaches
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-2 flex">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${activeTab === 'all' ? 'bg-[#303274] text-white' : 'text-gray-600 hover:text-[#303274]'}`}
            >
              All Programs
            </button>
            <button
              onClick={() => setActiveTab('math')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${activeTab === 'math' ? 'bg-[#303274] text-white' : 'text-gray-600 hover:text-[#303274]'}`}
            >
              Mathematics
            </button>
            <button
              onClick={() => setActiveTab('robotics')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${activeTab === 'robotics' ? 'bg-[#303274] text-white' : 'text-gray-600 hover:text-[#303274]'}`}
            >
              Robotics & Coding
            </button>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-white rounded-3xl shadow-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#303274] mb-4">
              Ready to Transform Your Child&apos;s Learning Journey?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Book a free trial session to experience our innovative teaching methods firsthand
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-[#303274] text-white font-semibold rounded-xl shadow-lg hover:bg-[#3f42a5] transition flex items-center gap-2">
                Book Free Trial
                <ArrowRight size={20} />
              </button>
              <button className="px-8 py-4 bg-white text-[#303274] font-semibold rounded-xl shadow-lg border border-[#303274] hover:bg-blue-50 transition">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProgramCard({ program }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className={`absolute top-4 right-4 ${program.color} text-white p-2 rounded-lg`}>
          {program.icon}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#303274] mb-3 group-hover:text-[#F58634] transition-colors">
          {program.title}
        </h3>

        <p className="text-gray-600 mb-4">
          {isExpanded ? program.fullDescription : program.description}
        </p>

        {/* Program Details */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Users size={16} />
            <span>Ages: {program.age}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock size={16} />
            <span>Duration: {program.duration}</span>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-4">
          <h4 className="font-semibold text-[#303274] mb-2 flex items-center gap-2">
            <Award size={16} />
            Key Benefits:
          </h4>
          <ul className="space-y-1">
            {program.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                <Star size={12} className="text-[#F58634] flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#303274] hover:text-[#F58634] font-medium text-sm flex items-center gap-1"
          >
            {isExpanded ? 'Show less' : 'Learn more'}
            <ArrowRight size={14} className={isExpanded ? 'rotate-180' : ''} />
          </button>
          <button className="px-4 py-2 bg-[#303274] text-white text-sm font-medium rounded-lg hover:bg-[#3f42a5] transition">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
}