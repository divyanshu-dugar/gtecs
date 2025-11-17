"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Star,
  Users,
  Target,
  Zap,
  TrendingUp,
  Heart,
  Award,
  BookOpen,
  Brain,
  Mic,
  Calculator,
  Puzzle,
  Code,
  Globe,
  Calendar,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-18 pb-20 relative overflow-hidden">

      {/* -------- Background Glow Elements -------- */}
      <div className="pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-r from-[#F58634]/20 to-[#FBBF24]/20 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-r from-[#303274]/20 to-[#F58634]/20 blur-[120px]" />
      </div>

      <section className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ---------------- HERO ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm px-5 py-2.5 rounded-full shadow-sm border border-gray-100">
            <Star className="text-[#F58634]" size={16} />
            <span className="text-sm font-medium text-gray-700">
              Kolkata&apos;s Premier Whole-Child Development Center
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-[#303274] mt-6 mb-6 leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-[#F58634] to-[#FBBF24] bg-clip-text text-transparent">
              1% Wiser – Kids
            </span>
          </h1>

          <p className="text-xl md:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            Where academic excellence meets life skills mastery.  
            The complete solution for your child&apos;s{" "}
            <span className="font-semibold text-[#303274]">report card and character</span>{" "}
            development.
          </p>
        </motion.div>

        {/* ---------------- STATS BAR ---------------- */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {[
            { value: "2-Pillar", label: "Integrated Approach" },
            { value: "1:6 Ratio", label: "Personal Attention" },
            { value: "15+", label: "Skill Modules" },
            { value: "98%", label: "Parent Satisfaction" },
          ].map((item, i) => (
            <motion.div
              whileHover={{ scale: 1.03 }}
              key={i}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-gray-100"
            >
              <div className="text-3xl font-bold text-[#303274]">{item.value}</div>
              <div className="text-gray-600 text-sm">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* ---------------- VISION & MISSION ---------------- */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-blue-50/60 rounded-3xl p-10 shadow-xl border border-blue-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-[#F58634] to-[#FBBF24] rounded-xl">
                <Target className="text-white" size={26} />
              </div>
              <h3 className="text-2xl font-bold text-[#303274]">Our Vision</h3>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              To be Kolkata&apos;s premier educational center known for developing the whole child - 
              where academic success and life skills go hand in hand.
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <TrendingUp size={16} />
              <span>One complete solution for report card and character development</span>
            </div>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-orange-50/60 rounded-3xl p-10 shadow-xl border border-orange-100"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-[#303274] to-[#F58634] rounded-xl">
                <Zap className="text-white" size={26} />
              </div>
              <h3 className="text-2xl font-bold text-[#303274]">Our Mission</h3>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              To build future-ready individuals through our unique two-pillar approach: 
              guaranteed academic mastery and comprehensive life skills development.
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Heart size={16} />
              <span>Every child grows 1% wiser each day in both competence and confidence</span>
            </div>
          </motion.div>
        </div>

        {/* ---------------- VALUE PROPOSITION ---------------- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#303274] to-[#1e2167] rounded-3xl p-10 md:p-16 text-white mb-20 shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                The <span className="text-[#FBBF24]">1% Wiser</span> Difference
              </h3>

              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                We&apos;re building the future of after-school education in Kolkata. While others focus on rote learning, 
                we create fundamentally more competent and confident individuals for life.
              </p>

              <ul className="space-y-3">
                {[
                  "Child-First Approach with Personalized Learning Binders",
                  "Project-Based & Experimental Learning",
                  "Structured Growth Tracking for Both Academics & Life Skills",
                  "Focus on 21st-Century Skills: Logic, Creativity, Communication"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-blue-100">
                    <div className="w-2 h-2 bg-[#FBBF24] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side Icons Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { Icon: Brain, title: "IQ+EQ", subtitle: "Balanced Development" },
                { Icon: Users, title: "1:6 Ratio", subtitle: "Personal Attention" },
                { Icon: Award, title: "15+ Modules", subtitle: "Comprehensive Skills" },
                { Icon: Star, title: "2-Pillar", subtitle: "Integrated Approach" },
              ].map(({ Icon, title, subtitle }, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center"
                >
                  <Icon className="mx-auto text-[#FBBF24] mb-3" size={32} />
                  <div className="text-2xl font-bold">{title}</div>
                  <div className="text-blue-200 text-sm">{subtitle}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* ---------------- TWO PILLARS ---------------- */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-[#303274] mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-[#F58634] to-[#FBBF24] bg-clip-text text-transparent">
              Two-Pillar Framework
            </span>
          </h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            The only center in Kolkata offering seamless integration of academic excellence and life skills mastery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-20">
          {/* Pillar 1: Academic Anchor */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer"
          >
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-xl overflow-hidden border border-blue-200 hover:shadow-2xl transition-all duration-300 h-full">
              <div className="relative w-full h-48 bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center">
                <BookOpen className="text-white" size={48} />
                <div className="absolute bottom-4 left-6">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Pillar 1
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h4 className="font-bold text-2xl text-[#303274] mb-4">
                  The Academic Anchor
                </h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Structured curriculum support for Nursery to Grade 5 with our unique &quot;Mastery Binder&quot; system.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>Personalized Diagnostic Assessment & ILP</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>Individualized Mastery Binders</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>Real-World Application Learning</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span>Weekly Growth Tracking</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Mathematics", "English", "Environmental Science", "Guaranteed Improvement"].map((f, fi) => (
                    <span
                      key={fi}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full border border-blue-200"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pillar 2: Holistic Horizon */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer"
          >
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl shadow-xl overflow-hidden border border-orange-200 hover:shadow-2xl transition-all duration-300 h-full">
              <div className="relative w-full h-48 bg-gradient-to-r from-orange-500 to-amber-400 flex items-center justify-center">
                <Globe className="text-white" size={48} />
                <div className="absolute bottom-4 left-6">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Pillar 2
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h4 className="font-bold text-2xl text-[#303274] mb-4">
                  The Holistic Horizon
                </h4>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Comprehensive life skills development through 15+ specialized modules for overall character building.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: Mic, label: "Public Speaking" },
                    { icon: Calculator, label: "Mental Math" },
                    { icon: Puzzle, label: "Logical Reasoning" },
                    { icon: Code, label: "Tech Literacy" },
                    { icon: Users, label: "People Skills" },
                    { icon: Calendar, label: "Time Management" },
                  ].map(({ icon: Icon, label }, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <Icon size={16} className="text-orange-500" />
                      <span>{label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {["UCMAS Math", "Debate & MUN", "Financial Literacy", "21st Century Skills"].map((f, fi) => (
                    <span
                      key={fi}
                      className="px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full border border-orange-200"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ---------------- KEY DEVELOPMENT AREAS ---------------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 mb-20"
        >
          <h3 className="text-3xl font-bold text-[#303274] text-center mb-12">
            Comprehensive <span className="text-[#F58634]">Child Development</span> Focus
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Logic Building & Creative Thinking", desc: "Puzzle solving, pattern recognition, innovation exercises" },
              { title: "Communication & Public Speaking", desc: "Debate, MUN, interview preparation, confident expression" },
              { title: "People & Management Skills", desc: "Teamwork, leadership, organizational abilities" },
              { title: "Time Management & Discipline", desc: "Planning, prioritization, responsibility building" },
              { title: "Tech & Financial Literacy", desc: "Coding basics, digital safety, money management" },
              { title: "IQ/EQ & Decision Making", desc: "Cognitive development, emotional intelligence, critical thinking" },
            ].map((area, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-50 to-white p-6 rounded-2xl border border-gray-200">
                <h4 className="font-semibold text-[#303274] mb-3">{area.title}</h4>
                <p className="text-gray-600 text-sm">{area.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ---------------- CTA ---------------- */}
        <div className="mt-24 text-center">
          <div className="bg-gradient-to-r from-[#303274] to-[#1e2167] rounded-3xl p-14 text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Child&apos;s Learning Journey?
            </h3>

            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Join Kolkata&apos;s most comprehensive educational program where academic success 
              and life skills development go hand in hand.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#F58634] to-[#FBBF24] text-white px-10 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Book a Free Diagnostic Session
              </button>

              <button className="bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-2xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                Download Our Program Brochure
              </button>
            </div>

            <p className="text-blue-200 text-sm mt-6">
              • Free Mental Math Workshop • Personalized Learning Plan • 15+ Skill Modules •
            </p>
          </div>
        </div>

      </section>
    </div>
  );
}