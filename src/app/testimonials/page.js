"use client"
import React, { useState, useEffect, useRef } from 'react';
import Footer from '@/components/Footer';

export default function TestimonialsPage() {
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [personnel, setPersonnel] = useState(1);
  const [satisfaction, setSatisfaction] = useState(1);
  const [projects, setProjects] = useState(1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 2000; // 2 seconds
          const startTime = performance.now();

          const animateCounters = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out quad for smooth deceleration
            const easeOut = 1 - (1 - progress) * (1 - progress);

            setPersonnel(Math.floor(1 + (1000 - 1) * easeOut));
            setSatisfaction(Math.floor(1 + (98 - 1) * easeOut));
            setProjects(Math.floor(1 + (155 - 1) * easeOut));

            if (progress < 1) {
              requestAnimationFrame(animateCounters);
            } else {
              setPersonnel(1000);
              setSatisfaction(98);
              setProjects(155);
            }
          };

          requestAnimationFrame(animateCounters);
        }
      },
      { threshold: 0.25 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const testimonials = [
    {
      name: "Mr. Dhiraj",
      role: "Supply Chain Analyst",
      location: "Mandani, Mumbai",
      rating: "★★★★★",
      content:
        "I had been working for 10 years and didn't know what I had done with my money until then. After attending one of his seminars, we decided to meet him in person and move forward. I may not understand the markets well, but what I do know is that at least I am now saving my money. After our monthly and quarterly calls, I feel more accountable for my future, and at least I am taking responsibility."
    },
    {
      name: "Mrs. Shikha",
      role: "Technical Specialist",
      location: "Kharghar, Navi Mumbai",
      rating: "★★★★★",
      content:
        "I have been working for more than 10 years and began my financial journey with basic savings in fixed deposits (FDs). After meeting with them, they recommended options that perfectly suited my needs—tax-efficient strategies that fully leveraged my savings potential. Their consistent support has been invaluable in helping me make informed financial decisions, and their guidance has truly made a significant difference.\n\nWhat stands out the most is their dedication to regularly connecting with me, ensuring that my financial goals remain on track. Our discussions have also encompassed diverse investment options such as Real Estate, Gold, and Mutual Funds, providing me with a comprehensive and well-rounded approach to wealth creation."
    },
    {
      name: "Mr. Roshan",
      role: "Sales Territory Head",
      location: "Navi Mumbai",
      rating: "★★★★★",
      content:
        "They are very good in managing the personal finance and also they helping my children. So that they can start the journey very early and do well. I recommend Asset Elixir."
    },
    {
      name: "Mr. Umesh",
      role: "",
      location: "",
      rating: "",
      content:
        "I am from Nerul and was initially unsure about taking financial advice remotely, but Asset Elixir completely changed my perception. The detailed discussions, structured planning process, and clear explanations gave me a lot of confidence. Their disciplined and professional approach makes financial planning much easier and more organized."
    },
    {
      name: "Vikram Mehta",
      role: "Business Owner",
      location: "Mumbai",
      rating: "★★★★★",
      content:
        "Unlike other advisors focused on short-term market noise, Shivam provides deep insights and long-term clarity. Truly a client-first philosophy."
    },
    {
      name: "Dr. Firdous Pathan",
      role: "Surgeon",
      location: "Kharghar, Navi Mumbai",
      rating: "★★★★★",
      content:
        "As a busy surgeon, financial planning and saving were always at the bottom of my priority list due to time constraints. Although I wanted to save, I could never find the time to organize my finances properly. That all changed when I met Shivam Pathak. Shivam took all my financial worries off my shoulders. He helped me design a financial framework that finally allowed me to manage my finances, pay my bills, handle EMIs, plan savings, and even invest in personal interests—like buying that expensive phone I always wanted! He turned what I could only imagine into a practical reality. I am incredibly grateful to have found such a genuine person. I highly recommend Shivam to anyone looking to grow their wealth in a secure and fulfilling way."
    },
    {
      name: "Dr. Bancy Eldo",
      role: "Dentist",
      location: "Kurla, Mumbai",
      rating: "★★★★★",
      content:
        "I am a practicing dentist and recently started investing with Asset Elixir. In the initial phase, we discussed various investment options, including real estate. The best part of working with them is the frequent and meaningful communication. Their suggestions are always tailored to suit my specific requirements."
    },
    {
      name: "Mr. Rohit",
      role: "Co-Founder and CTO at Sunday Tech",
      location: "Wadala, Mumbai",
      rating: "★★★★★",
      content:
        "With work commitments and continuous changes in my finances, managing them became increasingly difficult. That's when I approached Shivam for help. During this journey, I realized I had overlooked several crucial aspects while managing my personal finances on my own. What truly stood out was Shivam's honesty and the timely delivery of his services. Every task entrusted to him was completed on time, making this experience smooth and reliable."
    },
    {
      name: "Vikram Mehta",
      role: "Business Owner",
      location: "Mumbai",
      rating: "★★★★★",
      content:
        "Thanks to Shivam and Asset Elixir for the guidance and support in my financial journey. The way Shivam understands and assesses someone's financial picture is really commendable. Not only that, the way he recommends and suggests financial planning after thorough analysis is worth considering and plays a major role in securing stability and financial security."
    },
    {
      name: "Ms. Apurva",
      role: "Social Media Marketing, Content Creation",
      location: "Tardeo, Mumbai",
      rating: "★★★★★",
      content:
        "Shivam's guidance in my investment journey has been invaluable. He took the time to understand my goals and provided practical, tailored advice. His empathetic approach and clear explanations made the process easy and reassuring. If you're looking for a financial advisor who truly cares and offers realistic solutions, Shivam is the one to trust!"
    },
    {
      name: "Mr. Suraj",
      role: "Sales Territory Head",
      location: "Gamdevi, Mumbai",
      rating: "★★★★★",
      content:
        "I had good saving habits and was investing accordingly, but as my income increased, managing my finances started taking a back seat. That's when I began looking for someone like Shivam, who could help me put my finances in order. He's always just a call away and dynamic in incorporating feedback. So far, this journey has worked well for me, and I'm focused on building my Financial Elixir for the future."
    },
    {
      name: "Anjali Sharma",
      role: "",
      location: "Dubai, UAE",
      rating: "★★★★★",
      content:
        "Shivam's guidance in my investment journey has been invaluable. He took the time to understand my goals and provided practical, tailored advice. His empathetic approach and clear explanations made the process easy and reassuring. If you're looking for a financial advisor who truly cares and offers realistic solutions, Shivam is the one to trust!"
    },
    {
      name: "Ashwini Yadav",
      role: "Supply Chain Analyst",
      location: "Dombivli, Thane",
      rating: "★★★★★",
      content:
        "I came across an article by Shivam Pathak on Moneycontrol and really liked how practical and relatable his thoughts on personal finance were. It didn't feel like the usual generic advice; it made me reflect on how I was managing my own money.\n\nThat's when I decided to connect with him through Asset Elixir. He helped me with a proper financial roadmap, reviewed my existing mutual fund investments, and gave me clarity on SIPs and long-term planning. No product pushing, just genuine advice."
    },
    {
      name: "Vikram Mehta",
      role: "Business Owner",
      location: "Mumbai",
      rating: "★★★★★",
      content:
        "Unlike other advisors focused on short-term market noise, Shivam provides deep insights and long-term clarity. Truly a client-first philosophy."
    },
    {
      name: "Mr. Kaustubh",
      role: "CA",
      location: "Ghatkopar, Mumbai",
      rating: "★★★★★",
      content:
        "I came across Asset Elixir while going through Google reviews and one of Shivam Pathak's articles. That gave me the confidence to get in touch, and I'm glad I did. The discussions since then have been very insightful and easy to understand. Shivam explains everything with great clarity and makes the entire financial planning process comfortable. Overall, a great experience so far—very professional and approachable."
    },
    {
      name: "Mr. Umesh",
      role: "",
      location: "",
      rating: "★★★★★",
      content:
        "I recently consulted Shivam for guidance on my financial future planning, and I couldn't be more satisfied with the experience. He took the time to thoroughly understand my goals and risk appetite before suggesting a range of safe and minimal-risk strategies perfectly suited to my needs. His approach was clear, well-structured, and genuinely focused on helping me make confident and informed decisions. I truly appreciate his professionalism, patience, and deep knowledge of financial planning. I feel much more secure about my financial future after working with him, and I would highly recommend Shivam to anyone looking for reliable, trustworthy financial advice."
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black text-xl antialiased w-full overflow-x-hidden">
      {/* 2. HERO HEADER SECTION */}
      <section className="pt-36 sm:pt-44 pb-12 bg-white w-full text-center">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-full mx-auto">
          <span className="inline-block bg-[#FACC15] text-black font-bold text-[24px] px-6 py-1.5 rounded-full mb-2 shadow-xs">
            Testimonials
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-black notoSerifBold leading-tight mb-4">
            What our clients says.
          </h1>
          <p className="text-2xl sm:text-2xl text-black notoSerifBold">
            Hear from our incredible clients who are building at lighting speed
          </p>
        </div>
      </section>

      {/* 3. TESTIMONIALS MASONRY GRID */}
      <section className="pt-16 pb-8 bg-gradient-to-b from-[#FACC15] via-white to-[#FACC15] w-full">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-full mx-auto">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {testimonials.map((item, idx) => (
              <div
                key={idx}
                className="break-inside-avoid flex flex-col rounded-[1.5rem] overflow-hidden shadow-lg border border-black/10"
              >
                {/* Top Black Header Block */}
                <div className="bg-black text-white p-6 text-center flex flex-col items-center justify-center">
                  <h3 className="text-[20px] font-bold notoSerifBold text-white mb-1">
                    {item.name}
                  </h3>
                  {item.role && (
                    <p className="text-[17px] font-medium text-white notoSerifRegular">
                      {item.role}
                    </p>
                  )}
                  {item.location && (
                    <p className="text-[17px] text-white notoSerifRegular">
                      {item.location}
                    </p>
                  )}
                  {item.rating && (
                    <div className="text-[#FACC15] text-[25px] mt-2 tracking-widest">
                      {item.rating}
                    </div>
                  )}
                </div>

                {/* Bottom White Text Block */}
                <div className="bg-white p-6 sm:p-8 flex-1 flex items-center justify-center text-center">
                  <p className="text-[17px] text-black georgiaRegular leading-relaxed whitespace-pre-line">
                    "{item.content}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr />

      {/* 4. STATS BANNER SECTION WITH ANIMATED COUNTERS */}
      <section ref={statsRef} className="pt-16 pb-28 bg-gradient-to-b from-[#FACC15] via-[#FACC15] to-white w-full">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Bold Big Headline */}
          <div className="lg:col-span-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black notoSerifBold leading-tight">
              We Achieved best <br /> from Consulting
            </h2>
          </div>

          {/* Right Side: 3 Stat Columns with Animated White Numbers */}
          <div className="lg:col-span-6 grid grid-cols-3 gap-4 text-center">
            <div>
              <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-white notoSerifBold block mb-2 drop-shadow-xs">
                {personnel}+
              </span>
              <p className="text-xs sm:text-sm text-black font-semibold notoSerifRegular">
                Active Personnel
              </p>
            </div>
            <div>
              <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-white notoSerifBold block mb-2 drop-shadow-xs">
                {satisfaction}%
              </span>
              <p className="text-xs sm:text-sm text-black font-semibold notoSerifRegular">
                Client Satisfaction
              </p>
            </div>
            <div>
              <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-white notoSerifBold block mb-2 drop-shadow-xs">
                {projects}+
              </span>
              <p className="text-xs sm:text-sm text-black font-semibold notoSerifRegular">
                Successful Projects
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. CALLOUT BANNER */}
      <section className="pt-4 pb-20 bg-white w-full text-center">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-full mx-auto space-y-4">
          <h3 className="text-5xl sm:text-6xl lg:text-7xl text-black notoSerifRegular">
            Ready to gain long-term clarity?
          </h3>
          <p className="text-lg sm:text-3xl text-black notoSerifRegular leading-relaxed max-w-5xl mx-auto pt-2">
            Join dozens of satisfied clients who have secured their financial future through goal-based planning.
          </p>
        </div>
      </section>

      {/* 6. FOOTER */}
      <Footer />
    </div>
  );
}