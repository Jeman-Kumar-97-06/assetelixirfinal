"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AssetElixirHeader() {
  return (
    // Changed to fixed positioning, pinned to top, with a high z-index
    <header className="fixed top-0 left-0 right-0 z-50 w-full px-2 sm:px-9 lg:px-15 py-4 border-neutral-100">
      {/* Black Pill Container Navbar */}
      <div className="w-full bg-black rounded-[2.5rem] h-20 px-6 flex items-center justify-between shadow-lg">
        {/* Left Side: Logo Area */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="flex items-center justify-center bg-black">
            {/* <span className="text-3xl font-serif tracking-tighter lowercase font-black select-none"> */}
              <Link href="/">
                {/* Added width, height, and alt. Adjust width/height to match your actual asset */}
                <Image 
                  src="/Blacklogo.png" 
                  alt="Asset Elixir Logo"
                  width={150} 
                  height={55}
                  className='h-[55px] w-auto'
                />
              </Link>
            {/* </span> */}
          </div>
        </div>

        {/* Center: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-10 text-base font-medium text-[20px] text-white">
          <Link href="/about-us" className="hover:text-[#FACC15] transition duration-200">Why Elixir</Link>
          <Link href="/calculators" className="hover:text-[#FACC15] transition duration-200">Calculator</Link>
          <Link href="/humanside" className="hover:text-[#FACC15] transition duration-200">Human Side</Link>
          <Link href="/testimonials" className="hover:text-[#FACC15] transition duration-200">Testimonial</Link>
          <Link href="/services" className="hover:text-[#FACC15] transition duration-200">Services</Link>
          <Link href="/contact-us" className="hover:text-[#FACC15] transition duration-200">Contact us</Link>
        </nav>

        {/* Right Side: CTA Button */}
        <div>
          <button className="bg-[#FACC15] text-black hover:bg-[#EAB308] px-6 py-4 rounded-2xl text-base font-bold tracking-normal transition duration-200 shadow-sm whitespace-nowrap">
            Free Portfolio Check
          </button>
        </div>

      </div>
    </header>
  );
}