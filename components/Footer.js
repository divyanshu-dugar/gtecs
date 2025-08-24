import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#303274] to-[#1f2252] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">GTECS</h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Unlocking potential through innovative education. From abacus to robotics, 
              we inspire creativity, confidence, and critical thinking in every child.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com/company/yourpage"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#F58634]">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-blue-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-blue-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-blue-100 hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/book-info" className="text-blue-100 hover:text-white transition-colors">
                  Book Info Session
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#F58634]">Our Programs</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-blue-100">UCMAS Mental Math</span>
              </li>
              <li>
                <span className="text-blue-100">OBOTZ Robotics & Coding</span>
              </li>
              <li>
                <span className="text-blue-100">iMaths Creative Mathematics</span>
              </li>
              <li>
                <span className="text-blue-100">Educational Therapy</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-[#F58634]">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F58634] mt-1 flex-shrink-0" />
                <span className="text-blue-100">
                  GTECS, 85 Ellesmere Rd, #205<br />
                  Parkway Mall, 2nd Floor<br />
                  Toronto, ON
                </span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#F58634] flex-shrink-0" />
                <div className="text-blue-100">
                  <a href="tel:+16479957157" className="hover:text-white transition-colors">
                    +1 (647) 995-7157
                  </a>
                  <br />
                  <a href="tel:+16479947157" className="hover:text-white transition-colors">
                    +1 (647) 994-7157
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#F58634] flex-shrink-0" />
                <a 
                  href="mailto:info@gtecs.ca" 
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  info@gtecs.ca
                </a>
              </div>
              
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#F58634] flex-shrink-0" />
                <span className="text-blue-100">
                  Mon-Fri: 3 PM - 8 PM<br />
                  Sat-Sun: 9 AM - 5 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-blue-100 text-sm">
            © {new Date().getFullYear()} GTECS. All rights reserved.
          </p>
          
          <div className="flex flex-wrap gap-6 text-sm">
            <Link href="" className="text-blue-100 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="" className="text-blue-100 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="" className="text-blue-100 hover:text-white transition-colors">
              FAQ
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