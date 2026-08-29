"use client"
import React, { useState } from 'react';

export default function ServicesAccordionSection() {
  // Card 1 is expanded by default to mirror your exact screenshot
  const [activeIdx, setActiveIdx] = useState(0);

  const servicesData = [
    {
      num: "1.",
      title: "Financial Planning",
      items: [
        "Comprehensive Financial Planning",
        "Goal-Based Planning",
        "Cash Flow Planning",
        "Family Financial Planning"
      ],
      bgColor: "bg-[#FACC15]", // Yellow
      textColor: "text-black",
      bulletColor: "bg-black"
    },
    {
      num: "2.",
      title: "Portfolio Review",
      items: [
        "Investment Review",
        "Mutual Fund Planning",
        "Asset Allocation",
        "Wealth Creation Strategy"
      ],
      bgColor: "bg-black", // Black
      textColor: "text-white",
      bulletColor: "bg-white"
    },
    {
      num: "3.",
      title: "Protection Planning",
      items: [
        "Life Insurance Planning",
        "Health Insurance Guidance",
        "Risk Management Planning",
      ],
      bgColor: "bg-[#FACC15]",
      textColor: "text-black",
      bulletColor: "bg-black"
    },
    {
      num: "4.",
      title: "Retirement Planning",
      items: [
        "Retirement Corpus Planning",
        "Retirement Income Strategy",
        "Early Retirement Planning",  
      ],
      bgColor: "bg-black",
      textColor: "text-white",
      bulletColor: "bg-white"
    },
    {
      num: "5.",
      title: "Tax Planning",
      items: [
        "LTCG Exemption Planning",
        "Tax-Efficient Investment Selection",
        "Tax-Efficient Withdrawl Planning"
      ],
      bgColor: "bg-[#FACC15]",
      textColor: "text-black",
      bulletColor: "bg-black"
    },
    {
      num: "6.",
      title: "Life Stage Planning",
      items: [
        "Young Earners Planning",
        "Family Stage Planning",
        "Pre-Retirement Planning",
      ],
      bgColor: "bg-black",
      textColor: "text-white",
      bulletColor: "bg-white"
    }
  ];

  return (
    <div className="flex h-[520px] gap-0 items-stretch w-full select-none">
      {servicesData.map((service, idx) => {
        const isActive = activeIdx === idx;
        
        return (
          <div
            key={idx}
            onMouseEnter={() => setActiveIdx(idx)}
            className={`relative rounded-[2.5rem] transition-all duration-500 ease-in-out p-10 flex flex-col justify-between overflow-hidden border border-black/5 ${
              service.bgColor
            } ${
              isActive 
                ? 'flex-[16] sm:flex-[20] shadow-xl' 
                : 'flex-[1] min-w-[70px] sm:min-w-[80px] items-center'
            }`}
          >
            {/* COLLAPSED STATE: Native vertical writing mode with strict contrast colors */}
            {!isActive ? (
              <div 
    className={`h-full w-full flex items-center justify-start font-bold text-lg sm:text-xl capitalize tracking-wider ${service.textColor}`}
    style={{ 
      writingMode: 'vertical-rl', 
      transform: 'rotate(180deg)' // Keeps numbers top and readable upward
    }}
  >
    <span className="mb-4 font-medium text-2xl">{service.num}</span>
    <span>{service.title}</span>
  </div>
            ) : (
              /* EXPANDED STATE */
              <>
                <div className={`flex gap-3 items-center w-full border-b pb-4 border-current/10 ${service.textColor}`}>
                  <span className="text-3xl font-semibold">{service.num}</span>
                  <h3 className="text-xl sm:text-3xl font-black Capitalize tracking-wide">
                    {service.title}
                  </h3>
                </div>

                {/* Expanded Content Sub Items */}
                <div className="my-auto space-y-4 animate-fadeIn">
                  {service.items.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-4">
                      <span className={`w-2.5 h-2.5 rotate-45 shrink-0 shadow-sm ${service.bulletColor}`} />
                      <p className={`text-base sm:text-xl font-bold tracking-wide whitespace-nowrap ${service.textColor}`}>
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
                
                <div className="h-4" />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}