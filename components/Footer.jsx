import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Clock, Star, BookOpen, Brain } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#303274] to-[#1f2252] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#F58634] to-[#FBBF24] flex items-center justify-center">
                <Star className="text-white" size={20} />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                1% Wiser Kids
              </h3>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed text-sm">
              Kolkata's premier whole-child development center. Our unique two-pillar approach 
              ensures academic excellence meets life skills mastery, helping children grow 1% wiser every day.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com/1percentwiserkids"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-all hover:scale-105"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com/1percentwiserkids"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-all hover:scale-105"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com/company/1percentwiserkids"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-xl hover:bg-white/20 transition-all hover:scale-105"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#F58634]">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-blue-100 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-100 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-blue-100 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-100 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/book-demo" className="text-blue-100 hover:text-white transition-colors hover:translate-x-1 inline-block">
                  Book Free Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Framework */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#F58634]">Our Framework</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <BookOpen className="text-blue-300" size={16} />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Academic Anchor</div>
                  <div className="text-blue-200 text-xs">Structured Curriculum Support</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                <div className="p-2 bg-orange-500/20 rounded-lg">
                  <Brain className="text-orange-300" size={16} />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Holistic Horizon</div>
                  <div className="text-blue-200 text-xs">Life Skills Development</div>
                </div>
              </div>
            </div>
            
            {/* Key Modules */}
            <div className="mt-4">
              <div className="text-blue-200 text-sm mb-2">Key Modules:</div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-blue-100">Mental Math</span>
                <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-blue-100">Public Speaking</span>
                <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-blue-100">Coding</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#F58634]">Visit Our Center</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F58634] mt-1 flex-shrink-0" />
                <span className="text-blue-100 text-sm">
                  Prime Location in Kolkata<br />
                  New Town / Salt Lake Area<br />
                  Kolkata, West Bengal
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#F58634] flex-shrink-0" />
                <div className="text-blue-100 text-sm">
                  <a href="tel:+919876543210" className="hover:text-white transition-colors block">
                    +91 98765 43210
                  </a>
                  <a href="tel:+919876543211" className="hover:text-white transition-colors block">
                    +91 98765 43211
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#F58634] flex-shrink-0" />
                <a 
                  href="mailto:info@1percentwiserkids.com" 
                  className="text-blue-100 hover:text-white transition-colors text-sm"
                >
                  info@1percentwiserkids.com
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#F58634] flex-shrink-0" />
                <span className="text-blue-100 text-sm">
                  Monday - Saturday: 9 AM - 6 PM<br />
                  Sunday: 10 AM - 2 PM
                </span>
              </div>

              {/* CTA Button */}
              <Link 
                href="/book-demo" 
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#F58634] to-[#FBBF24] text-slate-900 text-sm font-semibold rounded-lg hover:shadow-lg transition-all mt-4"
              >
                <Phone size={14} />
                Book Free Diagnostic
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-blue-100 text-sm">
              © {new Date().getFullYear()} 1% Wiser Kids. All rights reserved.
            </p>
            <p className="text-blue-200 text-xs mt-1">
              Kolkata's Premier Whole-Child Development Center
            </p>
          </div>
          
          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="/privacy" className="text-blue-100 hover:text-white transition-colors text-xs">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-blue-100 hover:text-white transition-colors text-xs">
              Terms of Service
            </Link>
            <Link href="/faq" className="text-blue-100 hover:text-white transition-colors text-xs">
              FAQ
            </Link>
            <Link href="/careers" className="text-blue-100 hover:text-white transition-colors text-xs">
              Careers
            </Link>
          </div>
        </div>
      </div>

      {/* Wave Decoration */}
      <div className="w-full overflow-hidden">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-12 text-[#1f2252]"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V56.44Z" 
            fill="currentColor"
          ></path>
        </svg>
      </div>
    </footer>
  );
}