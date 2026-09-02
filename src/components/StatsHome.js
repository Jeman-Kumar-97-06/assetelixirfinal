"use client"
import React from 'react';
import CountUp from './CountUp'; // Adjust this import path to your project layout

export default function StatsIndicatorBar() {
  return (
    <div className="w-full bg-[#fcf6ee] border-y border-black py-14 left-0 right-0">
      <div className="w-full px-4 sm:px-12 lg:px-20 xl:px-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-0 md:divide-x-4 md:divide-black text-black">
          
          {/* Stat 1 */}
          <div className="flex flex-col justify-center items-start md:pl-8">
            <h3 className="text-6xl lg:text-7xl font-serif font-medium tracking-tight text-black mb-1">
              <CountUp endValue={10} duration={800} />+
            </h3>
            <p className="text-m lg:text-m font-bold text-black tracking-wide">Years of Experience</p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col justify-center items-start md:pl-12">
            <h3 className="text-6xl lg:text-7xl font-serif font-medium tracking-tight text-black mb-1">
              <CountUp endValue={1000} duration={1000} />+
            </h3>
            <p className="text-m lg:text-m font-bold text-black tracking-wide">Families guided</p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col justify-center items-start md:pl-12">
            {/* Added a subtle slide up class for non-numeric typography targets */}
            <span className="text-5xl lg:text-6xl font-serif font-light tracking-tight text-black mb-1 opacity-0 animate-fadeInUp [animation-delay:200ms]">
              <span className="notoSerifRegular text-black ml-1">CFP</span>
              <sup className="notoSerifRegular text-black -top-4 relative">®</sup>
            </span>
            <p className="text-m lg:text-m font-bold text-black tracking-wide">Certified Financial planner</p>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col justify-center items-start md:pl-12">
            <h3 className="text-5xl lg:text-6xl font-serif font-light tracking-tight text-black mb-1 opacity-0 animate-fadeInUp [animation-delay:200ms]">
              Fiduciary
            </h3>
            <p className="text-m lg:text-m font-bold text-black tracking-wide">Your interest, always first</p>
          </div>

        </div>
      </div>

      {/* Tailwind Utility Animation Injector Layer */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}