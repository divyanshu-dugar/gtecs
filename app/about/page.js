import { BookOpen, Users, Target } from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="pt-24 pb-16"> 
      <section className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-[#303274] mb-6">
            About Us
          </h2>
          <p className="text-lg md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            <span className="bg-gradient-to-r from-[#F58634] via-[#FBBF24] to-[#FDE68A] bg-clip-text text-transparent font-extrabold">
              GTECS – Where Passion Meets Education!
            </span>
            <br />
            <span className="text-gray-600 font-medium">
              Building a community of <span className="text-[#303274] font-semibold">lifelong learners</span>.
            </span>
          </p>
        </div>

        {/* Intro */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div className="bg-gradient-to-r from-[#FDE68A]/20 via-[#FBBF24]/10 to-[#FDE68A]/20 p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-[#303274] mb-4">
              Elevating Young Minds at GTECS
            </h3>
            <p className="text-gray-800 leading-relaxed text-lg mb-4">
              <span className="text-[#F58634] font-semibold">GTECS</span> is a private educational facility dedicated to enhancing children's <span className="text-[#303274] font-medium">cognitive abilities</span> and <span className="text-[#303274] font-medium">skills</span> through after-school programs. Partnering with global leaders in child brain development, we help children discover <span className="text-[#F58634] font-semibold">hidden potential</span>, build skills, and grow into <span className="text-[#303274] font-medium">confident learners</span>.
            </p>
            <p className="text-gray-800 leading-relaxed text-lg">
              Our programs include <span className="text-[#F58634] font-semibold">UCMAS Mental Math</span>, <span className="text-[#F58634] font-semibold">Educational Therapy</span>, <span className="text-[#F58634] font-semibold">Robotics</span>, and more - each designed to nurture <span className="text-[#303274] font-medium">creativity</span>, <span className="text-[#303274] font-medium">critical thinking</span>, and <span className="text-[#303274] font-medium">lifelong learning</span>.
            </p>
          </div>
          <div className="bg-gradient-to-r from-[#FDE68A]/20 via-[#FBBF24]/10 to-[#FDE68A]/20 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition">
            <h3 className="text-2xl md:text-3xl font-bold text-[#303274] mb-4 flex items-center gap-2">
              <span className="w-2 h-8 bg-[#F58634] rounded-full"></span>
              Our Mission
            </h3>
            <p className="text-gray-800 leading-relaxed text-lg">
              We aim to <span className="text-[#F58634] font-semibold">embrace excellence</span> inside and outside the classroom. Our focus is on <span className="text-[#303274] font-medium">critical thinking</span>, nurturing <span className="text-[#303274] font-medium">curiosity</span>, and prioritizing <span className="text-[#F58634] font-semibold">meaningful learning</span> over rote memorization.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <Users className="mx-auto text-[#F58634]" size={40} />
            <h4 className="mt-4 text-lg font-semibold text-[#303274]">
              Highly Qualified Educators
            </h4>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              Learning is easier with strong pillars of support. Our teachers are
              passionate experts who inspire, guide, and empower children to reach
              their highest potential.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <Target className="mx-auto text-[#F58634]" size={40} />
            <h4 className="mt-4 text-lg font-semibold text-[#303274]">
              No Limits to Achievement
            </h4>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              At Galaxy Toppers, students explore beyond stars and galaxies,
              breaking boundaries of learning. We foster an environment where
              achievement knows no limits.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition">
            <BookOpen className="mx-auto text-[#F58634]" size={40} />
            <h4 className="mt-4 text-lg font-semibold text-[#303274]">
              Enhanced Curriculum
            </h4>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              From ages 3 to 16, our wide variety of globally successful programs
              fill learning gaps and support every child's unique journey.
            </p>
          </div>
        </div>

        {/* Programs */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-[#303274] mb-8 text-center">
            Programs We Offer
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Program Card */}
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition relative group">
              <div className="relative w-full h-48">
                <Image
                  src="/programs/ucmas.png"
                  alt="UCMAS Mental Math"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[#303274] mb-2">
                  UCMAS Mental Math
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Enhance calculation speed and cognitive skills with our proven
                  UCMAS program.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition relative group">
              <div className="relative w-full h-48">
                <Image
                  src="/programs/obotz.jpg"
                  alt="OBOTZ Robotics Program"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[#303274] mb-2">
                  OBOTZ Robotics Program
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Hands-on robotics workshops to develop problem-solving and
                  creativity.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition relative group">
              <div className="relative w-full h-48">
                <Image
                  src="/programs/imath.png"
                  alt="i-Maths Young Children's Math Enrichment"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-semibold text-[#303274] mb-2">
                  i-Maths Math Enrichment
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Fun and interactive math programs to enhance young learners'
                  skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}