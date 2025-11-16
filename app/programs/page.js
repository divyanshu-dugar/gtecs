'use client'

import { useState } from 'react';
import Image from 'next/image';
import { Brain, Cpu, Calculator, ArrowRight, Star, Users, Clock, Award, Sparkles, Target, Zap, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Programs() {
  const [activeTab, setActiveTab] = useState('all');

  const programs = [
    {
      id: 1,
      title: "UCMAS Mental Math Program",
      description: "An Abacus-based whole brain development program for children ages 5-13 that dramatically enhances cognitive abilities through mental math training.",
      fullDescription: "UCMAS Mental Math program is an Abacus based whole brain development program for children between the ages of 5-13. It leads to increased Concentration, Observation, Memory, Imagination and Creativity (COMIC) in kids. It results in supremacy with Judgement, Application, Reasoning and Self Confidence (JARS). UCMAS is an internationally recognized and widely demonstrated children's Cognitive Enrichment program.",
      image: "/programs/ucmas.png",
      age: "5-13 years",
      duration: "2 hours/week",
      level: "Beginner to Advanced",
      students: "10,000+",
      benefits: ["Enhanced concentration", "Improved memory", "Better calculation skills", "Increased confidence", "Whole brain development", "Academic excellence"],
      category: "math",
      icon: <Brain className="w-6 h-6" />,
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-purple-50",
      borderColor: "border-blue-200",
      stats: [
        { value: "95%", label: "Success Rate" },
        { value: "2x", label: "Learning Speed" },
        { value: "100%", label: "Focus Improved" }
      ]
    },
    {
      id: 2,
      title: "OBOTZ Robotics & Coding",
      description: "A multi-disciplinary robotics program that teaches children about physics, electronics, and programming through hands-on experiences.",
      fullDescription: "OBOTZ is a multi-disciplinary robotics program with a specially designed educational pathway to teach and train young minds about Physics, Electronics, and Robotics. STEM learning is the foundational building block of this program, leading youngsters to think scientifically and advance in facts. It's a perfect companion for machine, hardware, and programming-based learning.",
      image: "/programs/obotz.jpg",
      age: "7-15 years",
      duration: "2 hours/week",
      level: "Beginner to Expert",
      students: "8,500+",
      benefits: ["STEM education", "Coding skills", "Problem-solving", "Creative thinking", "Electronics knowledge", "Team collaboration"],
      category: "robotics",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-green-500 to-teal-600",
      bgColor: "bg-gradient-to-br from-green-50 to-teal-50",
      borderColor: "border-green-200",
      stats: [
        { value: "89%", label: "STEM Interest" },
        { value: "4.8", label: "Parent Rating" },
        { value: "50+", label: "Projects" }
      ]
    },
    {
      id: 3,
      title: "iMaths Creative Mathematics",
      description: "A playful mathematics program designed for young children to develop numerical abilities and logical thinking through fun activities.",
      fullDescription: "iMaths makes mathematics fun for 3 to 7 year olds using play-based methods. Through puzzles, activities, games, and tangrams, math becomes an enjoyable 'no problem' experience. Math education doesn't need to start only when your child steps into school - it starts much earlier. We help develop essential mental and logical skills that form the foundation for all career directions.",
      image: "/programs/imath.png",
      age: "3-7 years",
      duration: "2 hours/week",
      level: "Foundation",
      students: "12,000+",
      benefits: ["Early math foundation", "Logical thinking", "Problem-solving", "Play-based learning", "Cognitive development", "Love for math"],
      category: "math",
      icon: <Calculator className="w-6 h-6" />,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
      borderColor: "border-orange-200",
      stats: [
        { value: "98%", label: "Engagement" },
        { value: "3x", label: "Retention" },
        { value: "100%", label: "Fun Guaranteed" }
      ]
    }
  ];

  const filteredPrograms = activeTab === 'all' 
    ? programs 
    : programs.filter(program => program.category === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-24 pb-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#303274]/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F58634]/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-white/20 rounded-full px-6 py-2 mb-6 shadow-lg">
            <Sparkles size={16} className="text-[#F58634]" />
            <span className="text-sm font-medium text-gray-700">Transformative Learning Programs</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#303274] to-[#F58634] bg-clip-text text-transparent">
              Unlock Potential
            </span>
            <br />
            <span className="text-3xl md:text-4xl text-gray-700">Through Innovative Education</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our cutting-edge programs designed to nurture young minds with future-ready skills, 
            creativity, and confidence through hands-on learning experiences.
          </p>
        </motion.div>

        {/* Enhanced Category Tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-2 flex flex-wrap justify-center gap-2">
            {[
              { id: 'all', label: 'All Programs', icon: <Target size={16} /> },
              { id: 'math', label: 'Mathematics', icon: <Calculator size={16} /> },
              { id: 'robotics', label: 'Robotics & Coding', icon: <Cpu size={16} /> }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
                  activeTab === tab.id 
                    ? 'bg-gradient-to-r from-[#303274] to-[#3f42a5] text-white shadow-lg' 
                    : 'text-gray-600 hover:text-[#303274] hover:bg-white/50'
                }`}
              >
                {tab.icon}
                {tab.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Programs Grid - FIXED: Removed AnimatePresence wrapper */}
        <motion.div 
          key={activeTab} // Add key to trigger re-render on tab change
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20"
        >
          {filteredPrograms.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </motion.div>

        {/* Enhanced Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12 max-w-5xl mx-auto relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#303274]/5 to-[#F58634]/5 rounded-full -translate-y-32 translate-x-32" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#F58634]/5 to-[#303274]/5 rounded-full translate-y-24 -translate-x-24" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#303274] mb-4">
                Ready to Transform Your Child&apos;s Learning Journey?
              </h2>
              <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                Join thousands of parents who have discovered the power of innovative education. 
                Book a free info-session to experience our teaching methods firsthand.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#303274] to-[#3f42a5] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-3 group"
                >
                  <Sparkles size={20} />
                  Book Free Info Session
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white text-[#303274] font-semibold rounded-xl shadow-lg border border-gray-200 hover:border-[#303274] transition-all flex items-center gap-3"
                >
                  <Zap size={20} />
                  Download Program Brochure
                </motion.button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center gap-6 mt-8 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <span>4.9/5 Parent Rating</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Users size={16} />
                  <span>30,000+ Students</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Award size={16} />
                  <span>15+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function ProgramCard({ program }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      layout
      className={`group relative ${program.bgColor} rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border ${program.borderColor} overflow-hidden`}
    >
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/50 to-transparent rounded-bl-3xl" />
      
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={program.image}
          alt={program.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        
        {/* Icon Badge */}
        <div className={`absolute top-4 right-4 bg-gradient-to-r ${program.color} text-white p-3 rounded-xl shadow-lg`}>
          {program.icon}
        </div>
        
        {/* Category Tag */}
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
          {program.category === 'math' ? 'Mathematics' : 'Robotics & Coding'}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#303274] transition-colors line-clamp-2">
          {program.title}
        </h3>

        <p className="text-gray-600 mb-4 leading-relaxed">
          {isExpanded ? program.fullDescription : program.description}
        </p>

        {/* Program Stats */}
        <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-white/50 rounded-xl">
          {program.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`font-bold text-lg bg-gradient-to-r ${program.color} bg-clip-text text-transparent`}>
                {stat.value}
              </div>
              <div className="text-xs text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Program Details */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Users size={16} className="text-[#303274]" />
            <span><strong>Ages:</strong> {program.age}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Clock size={16} className="text-[#303274]" />
            <span><strong>Duration:</strong> {program.duration}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Award size={16} className="text-[#303274]" />
            <span><strong>Level:</strong> {program.level}</span>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Sparkles size={16} className="text-[#F58634]" />
            Key Benefits:
          </h4>
          <div className="grid grid-cols-2 gap-2">
            {program.benefits.slice(0, 4).map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${program.color}`} />
                <span className="text-xs">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-200/50">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-[#303274] hover:text-[#F58634] font-medium text-sm flex items-center gap-2 transition-colors"
          >
            {isExpanded ? 'Show less' : 'Learn more'}
            <ArrowRight size={14} className={isExpanded ? 'rotate-180 transition-transform' : 'transition-transform'} />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 bg-gradient-to-r ${program.color} text-white text-sm font-medium rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2`}
          >
            <Heart size={14} />
            Enroll Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}