"use client"
import React from "react";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white w-full pb-20">
      
      {/* Hero Section */}
      {/* Height increased to 600px to stretch the image further down */}
      <div className="relative w-full h-[600px] bg-[url('/contact-hero.jpg')] bg-cover bg-center rounded-b-[4rem]">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 rounded-b-[4rem]"></div>
        
        {/* Hero Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white pt-10">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 tracking-wide">Contact Us</h1>
        </div>
      </div>

      {/* Main Contact Card */}
      {/* -mt-[228px] exactly counteracts the extra 100px of background height, keeping the page layout completely untouched */}
      <div className="relative -mt-[228px] max-w-5xl mx-auto bg-[#fcf6ee] rounded-[2.5rem] shadow-2xl z-10 grid grid-cols-1 md:grid-cols-2 overflow-hidden border border-gray-100">
        
        {/* Left Column: Get in Touch */}
        <div className="p-10 md:p-14 md:pr-10 border-b md:border-b-0 md:border-r border-gray-200">
          <h2 className="text-4xl font-bold notoSerifBold text-black mb-4">Get in touch</h2>
          <p className="text-gray-700 text-lg mb-10">We are just a call away for you!</p>

          <div className="space-y-8 text-black">
            {/* Address 1 */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#FACC15] rounded-full flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
              </div>
              <div>
                <h3 className="font-bold notoSerifBold text-lg mb-1">Head Office 1</h3>
                <p className="text-m georgiaRegular text-gray-700 leading-relaxed">B Wing, Arihant Aura, 201,<br/>Thane, Belapur Rd, Turbhe<br/>MIDC, Navi Mumbai,<br/>Maharashtra 400703</p>
              </div>
            </div>

            {/* Address 2 */}
            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0"></div> {/* Spacer to align with text above */}
              <div>
                <h3 className="font-bold notoSerifBold text-lg mb-1">Head Office 2</h3>
                <p className="text-m georgiaRegular text-gray-700 leading-relaxed">F Wing, Shri Siddhivinayak<br/>SRA Building, 101, Station Rd,<br/>Lokamanya Nagar, Gandhi<br/>Nagar, Vikhroli West,<br/>Mumbai, Maharashtra 400083</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#FACC15] rounded-full flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
              </div>
              <div>
                <h3 className="font-bold notoSerifBold text-lg mb-1">Email Us</h3>
                <p className="text-m georgiaRegular text-gray-700">assetelixir@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-[#FACC15] rounded-full flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
              </div>
              <div>
                <h3 className="font-bold notoSerifBold text-lg mb-1">Contact Us</h3>
                <p className="text-m georgiaRegular text-gray-700">+91 7021089870</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="p-10 md:p-14">
          <h2 className="text-4xl font-serif font-bold text-black mb-10">Send us a message</h2>
          
          <form className="space-y-6">
            <div>
              <label className="block text-black text-lg mb-2">Full Name</label>
              <input type="text" className="text-black w-full bg-white rounded-xl h-12 px-4 outline-none focus:ring-2 focus:ring-[#FACC15]" />
            </div>

            <div>
              <label className="block text-black text-lg mb-2">Contact No.</label>
              <input type="text" className="text-black w-full bg-white rounded-xl h-12 px-4 outline-none focus:ring-2 focus:ring-[#FACC15]" />
            </div>

            <div>
              <label className="block text-black text-lg mb-2">Email ID</label>
              <input type="email" className="text-black w-full bg-white rounded-xl h-12 px-4 outline-none focus:ring-2 focus:ring-[#FACC15]" />
            </div>

            <div>
              <label className="block text-black text-lg mb-2">Message</label>
              <textarea rows="4" className="text-black w-full bg-white rounded-xl p-4 outline-none focus:ring-2 focus:ring-[#FACC15] resize-none"></textarea>
            </div>

            <button type="submit" className="w-full bg-[#FACC15] hover:bg-[#EAB308] text-black font-medium text-lg h-12 rounded-xl transition duration-200 mt-4">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}