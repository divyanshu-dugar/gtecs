"use client"
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Clock, Star, BookOpen, Brain, ArrowRight, Sparkles, Target, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 18 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12 } }),
  };

  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-800 to-indigo-950 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-[520px] h-[520px] rounded-full bg-gradient-to-r from-[#3f42a5] to-[#5d60d6] opacity-10 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 w-[420px] h-[420px] rounded-full bg-gradient-to-r from-[#F58634] to-[#ff9d55] opacity-8 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black/20 via-transparent to-black/10 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 relative z-10">
        {/* Main Footer Content */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand Column */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#F58634] to-[#FBBF24] flex items-center justify-center shadow-lg">
                <Sparkles className="text-slate-900" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-200 bg-clip-text text-transparent">
                  1% Wiser Kids
                </h3>
                <p className="text-slate-400 text-xs">Whole-Child Development Center</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed text-sm">
              Kolkata's premier whole-child development center. Our unique two-pillar approach 
              ensures academic excellence meets life skills mastery, helping children grow 1% wiser every day.
            </p>
            <div className="flex space-x-3">
              {[
                { icon: Facebook, href: "https://facebook.com/1percentwiserkids", label: "Facebook" },
                { icon: Instagram, href: "https://instagram.com/1percentwiserkids", label: "Instagram" },
                { icon: Linkedin, href: "https://linkedin.com/company/1percentwiserkids", label: "LinkedIn" },
              ].map(({ icon: Icon, href, label }, index) => (
                <motion.a
                  key={label}
                  variants={fadeInUp}
                  custom={index}
                  whileHover={{ scale: 1.1, y: -2 }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 p-3 rounded-xl border border-white/10 hover:border-[#F58634]/30 hover:bg-white/10 transition-all backdrop-blur-sm"
                  aria-label={label}
                >
                  <Icon size={18} className="text-slate-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp} custom={1}>
            <h4 className="text-lg font-semibold mb-6 text-[#F58634] flex items-center gap-2">
              <Zap size={18} />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/programs", label: "Programs" },
                { href: "/contact", label: "Contact" },
                { href: "/contact", label: "Book Free Demo" },
              ].map(({ href, label }, index) => (
                <li key={label}>
                  <motion.div whileHover={{ x: 4 }}>
                    <Link 
                      href={href} 
                      className="text-slate-300 hover:text-white transition-colors flex items-center gap-2 group text-sm"
                    >
                      <ArrowRight size={14} className="text-[#F58634] opacity-0 group-hover:opacity-100 transition-opacity" />
                      {label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our Framework */}
          <motion.div variants={fadeInUp} custom={2}>
            <h4 className="text-lg font-semibold mb-6 text-[#F58634] flex items-center gap-2">
              <Target size={18} />
              Our Framework
            </h4>
            <div className="space-y-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all group"
              >
                <div className="p-2 bg-blue-500/20 rounded-lg group-hover:scale-110 transition-transform">
                  <BookOpen className="text-blue-400" size={18} />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Academic Anchor</div>
                  <div className="text-slate-400 text-xs">Structured Curriculum Support</div>
                </div>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/30 transition-all group"
              >
                <div className="p-2 bg-orange-500/20 rounded-lg group-hover:scale-110 transition-transform">
                  <Brain className="text-orange-400" size={18} />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Holistic Horizon</div>
                  <div className="text-slate-400 text-xs">Life Skills Development</div>
                </div>
              </motion.div>
            </div>
            
            {/* Key Modules */}
            <div className="mt-6">
              <div className="text-slate-400 text-sm mb-3 font-medium">Featured Modules:</div>
              <div className="flex flex-wrap gap-2">
                {["Mental Math", "Public Speaking", "Coding", "Leadership", "Finance", "Logic"].map((module, index) => (
                  <motion.span
                    key={module}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-white/5 rounded-full text-xs text-slate-300 border border-white/10 hover:border-[#F58634]/30 transition-colors"
                  >
                    {module}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeInUp} custom={3}>
            <h4 className="text-lg font-semibold mb-6 text-[#F58634] flex items-center gap-2">
              <MapPin size={18} />
              Visit Our Center
            </h4>
            <div className="space-y-4">
              <motion.div 
                whileHover={{ x: 4 }}
                className="flex items-start gap-3 group"
              >
                <MapPin className="w-5 h-5 text-[#F58634] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-slate-300 text-sm leading-relaxed">
                  Prime Location in Kolkata<br />
                  New Town / Salt Lake Area<br />
                  Kolkata, West Bengal
                </span>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 group"
              >
                <Phone className="w-5 h-5 text-[#F58634] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div className="text-slate-300 text-sm">
                  <a href="tel:+919876543210" className="hover:text-white transition-colors block">
                    +91 98765 43210
                  </a>
                  <a href="tel:+919876543211" className="hover:text-white transition-colors block">
                    +91 98765 43211
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 group"
              >
                <Mail className="w-5 h-5 text-[#F58634] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a 
                  href="mailto:info@1percentwiserkids.com" 
                  className="text-slate-300 hover:text-white transition-colors text-sm"
                >
                  info@1percentwiserkids.com
                </a>
              </motion.div>
              
              <motion.div 
                whileHover={{ x: 4 }}
                className="flex items-start gap-3 group"
              >
                <Clock className="w-5 h-5 text-[#F58634] mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-slate-300 text-sm leading-relaxed">
                  Monday - Saturday: 9 AM - 6 PM<br />
                  Sunday: 10 AM - 2 PM
                </span>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="pt-4"
              >
                <Link 
                  href="/book-demo" 
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#F58634] to-[#FBBF24] text-slate-900 px-6 py-3 rounded-xl font-semibold shadow-2xl hover:scale-[1.02] transition-transform w-full justify-center"
                >
                  <Phone size={16} />
                  Book Free Diagnostic
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-white/10 my-12"
        />

        {/* Bottom Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <motion.div variants={fadeInUp} className="text-center md:text-left">
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} 1% Wiser Kids. All rights reserved.
            </p>
            <p className="text-slate-500 text-xs mt-2">
              Kolkata's Premier Whole-Child Development Center
            </p>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            custom={1}
            className="flex flex-wrap gap-6 text-sm justify-center"
          >
            {[
              { href: "/privacy", label: "Privacy Policy" },
              { href: "/terms", label: "Terms of Service" },
              { href: "/faq", label: "FAQ" },
              { href: "/careers", label: "Careers" },
            ].map(({ href, label }) => (
              <Link 
                key={label}
                href={href} 
                className="text-slate-400 hover:text-white transition-colors text-xs hover:underline"
              >
                {label}
              </Link>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Wave Decoration */}
      <div className="w-full overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent h-8 z-10" />
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-16 text-slate-900"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z" 
            fill="currentColor"
            opacity="0.2"
          ></path>
        </svg>
      </div>
    </footer>
  );
}