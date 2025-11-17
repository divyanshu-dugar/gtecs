'use client'

import { useState } from 'react';
import Image from 'next/image';
import { Brain, BookOpen, Target, ArrowRight, Star, Users, Clock, Award, Sparkles, Zap, Heart, Calculator, Mic, Puzzle, Code, Globe, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Programs() {
  const [activeTab, setActiveTab] = useState('all');

  const programs = [
    {
      id: 1,
      title: "The Academic Anchor",
      subtitle: "Structured Curriculum Support",
      description: "Personalized Mastery Binder system for guaranteed academic improvement from Nursery to Grade 5.",
      fullDescription: "Our Academic Anchor program provides comprehensive curriculum support with a unique 'Mastery Binder' system. Each child receives a personalized learning plan based on diagnostic assessment, focusing on their specific strengths and needs. We combine concept mastery with real-world applications to ensure deep understanding and academic excellence.",
      image: "/programs/academic-anchor.jpg",
      age: "Nursery - Grade 5",
      duration: "Customized Schedule",
      level: "Personalized Learning Path",
      students: "500+ Active Students",
      benefits: ["Personalized Mastery Binders", "Weekly Growth Tracking", "Real-World Applications", "Guaranteed Improvement", "Individual Learning Plans", "Concept Mastery"],
      category: "academic",
      icon: <BookOpen className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      borderColor: "border-blue-200",
      stats: [
        { value: "98%", label: "Academic Improvement" },
        { value: "1:6", label: "Student Ratio" },
        { value: "100%", label: "Parent Satisfaction" }
      ],
      modules: ["Mathematics Mastery", "English Excellence", "Science Exploration", "Weekly Assessments"]
    },
    {
      id: 2,
      title: "The Holistic Horizon",
      subtitle: "Life Skills & Overall Development",
      description: "Comprehensive 15+ module program building essential 21st-century skills and character development.",
      fullDescription: "The Holistic Horizon is our flagship life skills program featuring 15+ specialized modules designed to develop the whole child. From public speaking and logical reasoning to financial literacy and emotional intelligence, we build future-ready individuals who excel both academically and in life. Our project-based approach ensures practical application of all learned skills.",
      image: "/programs/holistic-horizon.jpg",
      age: "5-15 years",
      duration: "Modular Programs",
      level: "Beginner to Advanced",
      students: "600+ Developing Minds",
      benefits: ["15+ Skill Modules", "Project-Based Learning", "Confidence Building", "Future-Ready Skills", "Emotional Intelligence", "Leadership Development"],
      category: "holistic",
      icon: <Brain className="w-6 h-6" />,
      color: "from-orange-500 to-amber-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-amber-50",
      borderColor: "border-orange-200",
      stats: [
        { value: "15+", label: "Skill Modules" },
        { value: "3x", label: "Confidence Growth" },
        { value: "95%", label: "Skill Application" }
      ],
      modules: ["Public Speaking & Debate", "Mental Math & Logic", "Robotics & Coding", "Financial Literacy", "Time Management", "Leadership Skills"]
    }
  ];

  const skillModules = [
    { icon: Mic, title: "Language & Expression Lab", description: "Public speaking, debate, and confident communication" },
    { icon: Calculator, title: "Logic & Math Gym", description: "Mental math, logical reasoning, and critical thinking" },
    { icon: Code, title: "Future Skills Studio", description: "Coding, tech literacy, and digital creativity" },
    { icon: Users, title: "People Skills Academy", description: "Leadership, teamwork, and social intelligence" },
    { icon: Calendar, title: "Organization Masters", description: "Time management, planning, and discipline" },
    { icon: Globe, title: "Young Explorer's Club", description: "GK, philosophy, and global awareness" }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-12 pb-16 relative overflow-hidden">
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
            <span className="text-sm font-medium text-gray-700">Kolkata's Premier Whole-Child Development</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#303274] to-[#F58634] bg-clip-text text-transparent">
              Our Two-Pillar Framework
            </span>
            <br />
            <span className="text-3xl md:text-4xl text-gray-700">Academic Excellence Meets Life Skills</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover our unique integrated approach that guarantees academic success while building essential 
            21st-century skills through personalized learning and comprehensive development programs.
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
              { id: 'all', label: 'Both Pillars', icon: <Target size={16} /> },
              { id: 'academic', label: 'Academic Anchor', icon: <BookOpen size={16} /> },
              { id: 'holistic', label: 'Holistic Horizon', icon: <Brain size={16} /> }
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

        {/* Enhanced Programs Grid */}
        <motion.div 
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {filteredPrograms.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </motion.div>

        {/* Skill Modules Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#303274] mb-4">
              Comprehensive <span className="text-[#F58634]">Skill Development</span> Modules
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our Holistic Horizon program includes 15+ specialized modules designed to build essential life skills for the 21st century.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillModules.map((module, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200 hover:border-[#F58634]/30 transition-all group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-[#303274] to-[#F58634] rounded-xl group-hover:scale-110 transition-transform">
                    <module.icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg">{module.title}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{module.description}</p>
              </motion.div>
            ))}
          </div>
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
                Ready to Experience the 1% Wiser Difference?
              </h2>
              <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                Join Kolkata's most comprehensive educational program where academic success 
                and life skills development go hand in hand. Book your free diagnostic session today.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#303274] to-[#3f42a5] text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-3 group"
                >
                  <Sparkles size={20} />
                  Book Free Diagnostic Session
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-white text-[#303274] font-semibold rounded-xl shadow-lg border border-gray-200 hover:border-[#303274] transition-all flex items-center gap-3"
                >
                  <Zap size={20} />
                  Download Program Guide
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
                  <span>500+ Active Students</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Award size={16} />
                  <span>2-Pillar Integrated Approach</span>
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
          {program.category === 'academic' ? 'Academic Excellence' : 'Life Skills Development'}
        </div>

        {/* Subtitle */}
        <div className="absolute bottom-4 left-4 text-white font-semibold text-sm">
          {program.subtitle}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#303274] transition-colors">
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

        {/* Key Features */}
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
            <Sparkles size={16} className="text-[#F58634]" />
            Key Features:
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

        {/* Modules (for Holistic Horizon) */}
        {program.modules && program.modules.length > 0 && (
          <div className="mb-4">
            <h4 className="font-semibold text-gray-800 mb-2 text-sm">Includes Modules:</h4>
            <div className="flex flex-wrap gap-2">
              {program.modules.slice(0, 3).map((module, index) => (
                <span key={index} className="px-2 py-1 bg-white/60 text-gray-700 text-xs rounded-full border border-gray-300">
                  {module}
                </span>
              ))}
              {program.modules.length > 3 && (
                <span className="px-2 py-1 bg-white/60 text-gray-500 text-xs rounded-full">
                  +{program.modules.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

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