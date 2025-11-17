"use client";

import { useState } from "react";
import { Calendar, Clock, MapPin, BookOpen, Send, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function BookInfoSession() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send confirmation email to the user who filled the form
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,   // Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,  // Template ID
        {
          to_email: formData.email,   // recipient (user who filled the form)
          to_name: formData.name,     // their name
          from_name: "1% Wiser - Kids", // your default sender name
          to_phone: formData.phone,
          message: `${formData.message ? formData.message : ""}`,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY    // Public Key
      );

      setIsSubmitted(true);
      setFormData({ name: "", phone: "", email: "", message: "" });

    } catch (err) {
      console.error("EmailJS Error:", err);
      alert("❌ Failed to send. Please try again.");
    }
  };

  const handleWhatsApp = () => {
    const text = `Hello 1% Wiser - Kids, I would like to book an info session:\nName: ${formData.name || 'Not provided'}\nPhone: ${formData.phone || 'Not provided'}\nEmail: ${formData.email || 'Not provided'}\nMessage: ${formData.message || 'No message'}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/16479947157?text=${encodedText}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 pt-24 pb-12 px-4">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl border border-gray-200 overflow-hidden"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#303274] to-[#3f42a5] text-white p-8 text-center">
          <div className="flex justify-center mb-3">
            <BookOpen className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-3xl font-bold">Book Info Session</h1>
          <p className="mt-2 opacity-90">
            Drop us a line!
          </p>
        </div>

        <div className="p-8">
          <div className="grid sm:grid-cols-2 gap-6 mb-8 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-3 sm:col-span-2">
              <MapPin className="w-6 h-6 text-[#303274]" />
              <span className="text-gray-700">
                1% Wiser - Kids, 85 Ellesmere Rd, #205, Parkway Mall, 2nd Floor, Toronto
              </span>
            </div>
          </div>

          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="text-green-500 text-5xl mb-4">✓</div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
              <p className="text-gray-600 mb-6">
                Your information session request has been received. We&apos;ll contact you shortly to confirm your booking.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-3 bg-[#303274] text-white font-semibold rounded-lg shadow-md hover:bg-[#3f42a5] transition"
              >
                Book Another Session
              </button>
            </motion.div>
          ) : (
            <>
              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#303274] focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#303274] focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#303274] focus:border-transparent"
                    placeholder="Your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#303274] focus:border-transparent"
                    placeholder="Any specific questions or requests?"
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-[#303274] text-white font-semibold rounded-lg shadow-md hover:bg-[#3f42a5] transition flex-1"
                  >
                    <Send size={18} />
                    Submit Booking Request
                  </button>
                  
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-lg shadow-md hover:bg-[#20b858] transition flex-1"
                  >
                    <MessageCircle size={18} />
                    Message via WhatsApp
                  </button>
                </div>
                
                <p className="text-sm text-gray-500 text-center">
                  Better yet, see us in person!
                </p>
              </form>
            </>
          )}
        </div>
      </motion.section>
    </div>
  );
}
