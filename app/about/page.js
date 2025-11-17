import { BookOpen, Users, Target, Star, Award, TrendingUp, Zap, Heart } from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-24 pb-16">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-[#F58634]/10 to-[#FBBF24]/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-[#303274]/10 to-[#F58634]/10 rounded-full blur-3xl"></div>
      </div>

      <section className="max-w-7xl mx-auto px-6 relative">
        {/* Hero Section */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-6 border border-gray-100">
            <Star className="text-[#F58634]" size={16} />
            <span className="text-sm font-medium text-gray-700">Trusted by 500+ Students</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-[#303274] mb-6 leading-tight">
            About <span className="bg-gradient-to-r from-[#F58634] to-[#FBBF24] bg-clip-text text-transparent">1% Wiser - Kids</span>
          </h1>
          
          <p className="text-xl md:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            Where <span className="font-semibold text-[#303274]">Passion Meets Education</span> - 
            Building the next generation of{" "}
            <span className="bg-gradient-to-r from-[#F58634] via-[#FBBF24] to-[#FDE68A] bg-clip-text text-transparent font-bold">
              lifelong innovators
            </span>
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-[#303274]">500+</div>
            <div className="text-gray-600 text-sm">Students Enrolled</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-[#303274]">15+</div>
            <div className="text-gray-600 text-sm">Expert Educators</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-[#303274]">8</div>
            <div className="text-gray-600 text-sm">Programs</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-gray-100">
            <div className="text-3xl font-bold text-[#303274]">98%</div>
            <div className="text-gray-600 text-sm">Success Rate</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Vision Card */}
          <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-3xl p-8 shadow-2xl border border-blue-100 hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-[#F58634] to-[#FBBF24] rounded-2xl">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[#303274]">Our Vision</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              To create a world where every child discovers their unique potential through 
              <span className="text-[#F58634] font-semibold"> innovative education</span> that goes beyond traditional learning boundaries.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <TrendingUp size={16} />
              <span>Pioneering educational excellence since 2020</span>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-gradient-to-br from-white to-orange-50/50 rounded-3xl p-8 shadow-2xl border border-orange-100 hover:shadow-2xl transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-[#303274] to-[#F58634] rounded-2xl">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[#303274]">Our Mission</h3>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              We empower young minds with 
              <span className="text-[#303274] font-semibold"> critical thinking skills</span> and 
              <span className="text-[#303274] font-semibold"> creative confidence</span>, preparing them for a future filled with innovation and leadership.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Heart size={16} />
              <span>Student-centric approach in everything we do</span>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="bg-gradient-to-r from-[#303274] to-[#1e2167] rounded-3xl p-8 md:p-12 text-white mb-16 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">
                Why <span className="text-[#FBBF24]">1% Wiser - Kids</span> Stands Out
              </h3>
              <p className="text-blue-100 text-lg leading-relaxed mb-6">
                We combine global educational expertise with personalized attention, 
                creating an environment where students don&apos;t just learn - they thrive.
              </p>
              <ul className="space-y-3">
                {[
                  "Global curriculum partnerships",
                  "Personalized learning paths",
                  "Cutting-edge technology integration",
                  "Proven track record of excellence"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-blue-100">
                    <div className="w-2 h-2 bg-[#FBBF24] rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <Award className="mx-auto text-[#FBBF24] mb-3" size={32} />
                <div className="text-2xl font-bold">Award Winning</div>
                <div className="text-blue-200 text-sm">Educational Programs</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <Users className="mx-auto text-[#FBBF24] mb-3" size={32} />
                <div className="text-2xl font-bold">1:8</div>
                <div className="text-blue-200 text-sm">Student-Teacher Ratio</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <TrendingUp className="mx-auto text-[#FBBF24] mb-3" size={32} />
                <div className="text-2xl font-bold">3x</div>
                <div className="text-blue-200 text-sm">Faster Skill Development</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
                <Star className="mx-auto text-[#FBBF24] mb-3" size={32} />
                <div className="text-2xl font-bold">4.9/5</div>
                <div className="text-blue-200 text-sm">Parent Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Users,
              title: "Expert Educators",
              description: "Passionate professionals with global certifications and years of experience in child development.",
              gradient: "from-blue-500 to-cyan-500"
            },
            {
              icon: Target,
              title: "Proven Methodology",
              description: "Research-backed teaching methods that adapt to each child&apos;s unique learning style and pace.",
              gradient: "from-orange-500 to-red-500"
            },
            {
              icon: BookOpen,
              title: "Future-Ready Curriculum",
              description: "Continuously updated programs that prepare students for the challenges of tomorrow.",
              gradient: "from-purple-500 to-pink-500"
            }
          ].map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl shadow-xl p-8 h-full hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="text-white" size={28} />
                </div>
                <h4 className="text-xl font-bold text-[#303274] mb-4">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Programs Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-[#303274] mb-4">
              Our <span className="bg-gradient-to-r from-[#F58634] to-[#FBBF24] bg-clip-text text-transparent">Programs</span>
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Carefully crafted educational experiences designed to unlock every child&apos;s potential
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "/programs/ucmas.png",
                title: "UCMAS Mental Math",
                description: "Enhance calculation speed and cognitive skills with our proven UCMAS program.",
                features: ["Brain Development", "Speed Calculation", "Concentration"]
              },
              {
                image: "/programs/obotz.jpg",
                title: "OBOTZ Robotics",
                description: "Hands-on robotics workshops to develop problem-solving and creativity.",
                features: ["STEM Learning", "Coding Skills", "Innovation"]
              },
              {
                image: "/programs/imath.png",
                title: "i-Maths Enrichment",
                description: "Fun and interactive math programs to enhance young learners&apos; skills.",
                features: ["Conceptual Learning", "Fun Activities", "Foundation Building"]
              }
            ].map((program, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full border border-gray-100">
                  <div className="relative w-full h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* <div className="absolute bottom-4 left-4 z-20">
                      <h4 className="text-xl font-bold text-black">{program.title}</h4>
                    </div> */}
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {program.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {program.features.map((feature, featureIndex) => (
                        <span
                          key={featureIndex}
                          className="px-3 py-1 bg-gradient-to-r from-[#F58634]/10 to-[#FBBF24]/10 text-[#F58634] text-sm rounded-full border border-[#F58634]/20"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-[#303274] to-[#1e2167] rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Child&apos;s Learning Journey?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied parents who have seen remarkable growth in their children&apos;s abilities and confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-[#F58634] to-[#FBBF24] text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Book a Free Demo Class
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}