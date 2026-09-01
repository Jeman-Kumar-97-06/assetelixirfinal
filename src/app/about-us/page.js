"use client"
import React from 'react';

export default function AboutUsPage() {
  const principles = [
    {
      title: 'We Listen Before We Recommend',
    },
    {
      title: 'Purpose Before Performance',
    },
    {
      title: 'Relationships Over Transactions',
    },
  ];

  const differentiators = [
    {
      title: 'We Start With Questions, Not Products',
      desc: "Every meaningful financial journey begins with understanding. Before offering advice, we take the time to learn about your goals, responsibilities and the life you're working towards.",
    },
    {
      title: 'We Measure Success Differently',
      desc: "Success isn't measured only by returns. It's measured by confidence, peace of mind and the freedom to enjoy the life you're building.",
    },
    {
      title: 'We Focus On Clarity',
      desc: 'Financial decisions shouldn’t feel overwhelming. We simplify complexity into clear, practical guidance, helping you move forward with confidence.',
    },
    {
      title: 'Every Solution Has A Purpose',
      desc: 'Every recommendation should solve a genuine need, support what matters most to you and contribute to your bigger financial picture.',
    },
    {
      title: 'We Think Long Term',
      desc: 'Life changes. Markets change. We believe the best decisions are those that continue to support you through every stage of your journey.',
    },
    {
      title: 'Built Around Your Life',
      desc: 'No two lives are the same. That’s why every solution is thoughtfully shaped around your goals, your responsibilities and your aspirations.',
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'UNDERSTANDING BEFORE ADVISING',
      desc: 'Every relationship begins with listening. Before offering guidance, we take the time to understand where you are today, what matters most and where you’d like to go.',
    },
    {
      step: '02',
      title: 'THOUGHTFUL SOLUTIONS',
      desc: 'Once we understand your needs, we bring everything together into practical, easy-to-understand solutions that help make financial decisions simpler and more confident.',
    },
    {
      step: '03',
      title: 'GUIDANCE THAT CONTINUES',
      desc: 'Life doesn’t stand still, and neither should financial guidance. As your circumstances evolve, we’ll continue helping you navigate important decisions with confidence.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black text-xl antialiased w-full overflow-x-hidden">
      {/* 2. HERO SECTION WITH BACKGROUND VIDEO */}
<section className="relative w-full min-h-[90vh] flex items-center justify-center text-center overflow-hidden">
  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
  >
    <source src="/oceanSunset.webm" type="video/webm" />
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/40 z-10" />

  {/* Text Content */}
  <div className="relative z-20 w-full px-4 sm:px-8 lg:px-12 max-w-8xl mx-auto pt-28 pb-16">
    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white notoSerifBold leading-[1.2] drop-shadow-lg">
      We Don't Begin with Your <span className="text-[#FA9632]">Portfolio.</span> <br />
      We Begin with <span className="text-[#FA9632]">You.</span>
    </h1>
  </div>
</section>

     {/* 3. PRINCIPLES THAT GUIDE US */}
<section className="py-20 bg-[#FAF5EF] border-y border-black/10 w-full text-center">
  <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-full mx-auto">
    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-black notoSerifBold mb-16">
      The Principles That Guide Us
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Card 1 */}
      <div className="rounded-3xl p-8 border-2 border-black flex flex-col items-center justify-center text-center min-h-[300px] shadow-sm">
        <div className="w-24 h-24 mb-6 flex items-center justify-center">
          <img src="/Hearing.png" alt="Listen Before We Recommend" className="w-full h-full object-contain" />
        </div>
        <h3 className="text-xl sm:text-2xl text-black notoSerifRegular font-normal leading-snug">
          We Listen Before <br /> We Recommend
        </h3>
      </div>

      {/* Card 2 */}
      <div className=" rounded-3xl p-8 border-2 border-black flex flex-col items-center justify-center text-center min-h-[300px] shadow-sm">
        <div className="w-24 h-24 mb-6 flex items-center justify-center">
          <img src="/BowTie.png" alt="Purpose Before Performance" className="w-full h-full object-contain" />
        </div>
        <h3 className="text-xl sm:text-2xl text-black notoSerifRegular font-normal leading-snug">
          Purpose Before <br /> Performance
        </h3>
      </div>

      {/* Card 3 */}
      <div className="rounded-3xl p-8 border-2 border-black flex flex-col items-center justify-center text-center min-h-[300px] shadow-sm">
        <div className="w-24 h-24 mb-6 flex items-center justify-center">
          <img src="/ShakeHand.png" alt="Relationships Over Transactions" className="w-full h-full object-contain" />
        </div>
        <h3 className="text-xl sm:text-2xl text-black notoSerifRegular font-normal leading-snug">
          Relationships Over <br /> Transactions
        </h3>
      </div>

    </div>
  </div>
</section>

      {/* 4. WHAT SETS US APART
      <section className="py-20 bg-white w-full border-b border-black/10">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-full mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black notoSerifBold mb-14">
            What Sets Us Apart
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#FAF5EF] rounded-2xl p-8 flex flex-col justify-between border border-black/5 shadow-xs hover:shadow-sm transition"
              >
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-black notoSerifBold mb-4 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-base text-black/80 georgiaRegular leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* 4. WHAT SETS US APART (RADIAL CONNECTED MIND-MAP LAYOUT) */}
      {/* 4. WHAT SETS US APART (3-COLUMN EXACT RADIAL LAYOUT) */}
<section className="py-24 bg-white w-full overflow-hidden">
   <img src="/Webpage-Services.jpeg" />
</section>

      {/* 5. OUR PROCESS */}
<section className="py-24 bg-[#FAF5EF] border-b border-black/10 w-full text-center">
  <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-7xl mx-auto">
    
    {/* Section Header with Decorative Lines */}
    <div className="mb-20">
      <div className="flex items-center justify-center gap-4 mb-3">
        <div className="h-[2px] w-16 sm:w-24 bg-[#FA9632]" />
        <span className="text-[#FA9632] text-xl font-bold notoSerifBold">
          Our Process
        </span>
        <div className="h-[2px] w-16 sm:w-24 bg-[#FA9632]" />
      </div>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-black notoSerifBold">
        What Working Together Looks Like
      </h2>
    </div>

    {/* 3 Process Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
      
      {/* Step 01 */}
      <div className="bg-[#FAF5EF] rounded-[2.5rem] border-2 border-black p-8 sm:p-10 pt-16 relative flex flex-col items-center justify-between text-center min-h-[540px] shadow-xs">
        {/* Floating Circle Step Badge */}
        <div className="absolute -top-10 left-12 w-20 h-20 rounded-full bg-[#FAF5EF] border-2 border-black flex items-center justify-center z-10 shadow-xs">
          <span className="text-3xl font-black text-black notoSerifBold">
            01
          </span>
        </div>

        <div className="w-full flex flex-col items-center">
          <div className="w-20 h-20 mb-8 flex items-center justify-center">
            <img src="/Bulb.png" alt="Understanding Before Advising" className="w-full h-full object-contain" />
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-black notoSerifBold tracking-tight mb-8 uppercase leading-snug">
            UNDERSTANDING <br /> BEFORE ADVISING
          </h3>
        </div>

        {/* Cream Peach Inner Card Container */}
        <div className="w-full bg-[#f4dcc6] rounded-3xl p-6 sm:p-8 text-black/85 text-sm sm:text-base georgiaRegular leading-relaxed">
          Every relationship begins with listening. Before offering guidance, we take the time to understand where you are today, what matters most and where you'd like to go.
        </div>
      </div>

      {/* Step 02 */}
      <div className="bg-[#FAF5EF] rounded-[2.5rem] border-2 border-black p-8 sm:p-10 pt-16 relative flex flex-col items-center justify-between text-center min-h-[540px] shadow-xs">
        {/* Floating Circle Step Badge */}
        <div className="absolute -top-10 left-12 w-20 h-20 rounded-full bg-[#FAF5EF] border-2 border-black flex items-center justify-center z-10 shadow-xs">
          <span className="text-3xl font-black text-black notoSerifBold">
            02
          </span>
        </div>

        <div className="w-full flex flex-col items-center">
          <div className="w-20 h-20 mb-8 flex items-center justify-center">
            <img src="/Brain.png" alt="Thoughtful Solutions" className="w-full h-full object-contain" />
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-black notoSerifBold tracking-tight mb-8 uppercase leading-snug">
            THOUGHTFUL <br /> SOLUTIONS
          </h3>
        </div>

        {/* Cream Peach Inner Card Container */}
        <div className="w-full bg-[#f4dcc6] rounded-3xl p-6 sm:p-8 text-black/85 text-sm sm:text-base georgiaRegular leading-relaxed">
          Once we understand your needs, we bring everything together into practical, easy-to-understand solutions that help make financial decisions simpler and more confident.
        </div>
      </div>

      {/* Step 03 */}
      <div className="bg-[#FAF5EF] rounded-[2.5rem] border-2 border-black p-8 sm:p-10 pt-16 relative flex flex-col items-center justify-between text-center min-h-[540px] shadow-xs">
        {/* Floating Circle Step Badge */}
        <div className="absolute -top-10 left-12 w-20 h-20 rounded-full bg-[#FAF5EF] border-2 border-black flex items-center justify-center z-10 shadow-xs">
          <span className="text-3xl font-black text-black notoSerifBold">
            03
          </span>
        </div>

        <div className="w-full flex flex-col items-center">
          <div className="w-20 h-20 mb-8 flex items-center justify-center">
            <img src="/BulbOnHand.png" alt="Guidance That Continues" className="w-full h-full object-contain" />
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-black notoSerifBold tracking-tight mb-8 uppercase leading-snug">
            GUIDANCE THAT <br /> CONTINUES
          </h3>
        </div>

        {/* Cream Peach Inner Card Container */}
        <div className="w-full bg-[#f4dcc6] rounded-3xl p-6 sm:p-8 text-black/85 text-sm sm:text-base georgiaRegular leading-relaxed">
          Life doesn't stand still, and neither should financial guidance. As your circumstances evolve, we'll continue helping you navigate important decisions with confidence.
        </div>
      </div>

    </div>
  </div>
</section>

      {/* 6. BOTTOM CTA SECTION */}
      <section className="py-20 bg-white border-b border-black w-full">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-full mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-black leading-tight max-w-2xl notoSerifBold">
              Let's Start With What <br />
              <span className='text-[#FA9632]'>Matters</span> To You!
            </h2>
            <div className="shrink-0">
              <button className="bg-[#FACC15] text-black hover:bg-[#EAB308] px-8 py-4 rounded-2xl text-lg font-bold tracking-normal transition duration-200 shadow-sm whitespace-nowrap">
                Book a Free Consultation
              </button>
            </div>
          </div>

          <div className="text-center space-y-6 text-base sm:text-lg lg:text-xl font-medium text-black/90 max-w-full leading-relaxed georgiaRegular">
            <p>
              Financial planning has never been just about investments. It's about having someone who understands your goals, helps you navigate life's important financial decisions and gives you the confidence to move forward - whatever stage of life you're in.
            </p>
            <p>
              That's the relationship we strive to build with every client. If you're looking for thoughtful guidance built around your life, we'd love to start with a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer className="bg-black text-white/60 pt-16 pb-8 w-full">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 grid grid-cols-1 md:grid-cols-12 gap-12 mb-12 max-w-full mx-auto">
          
          <div className="md:col-span-4">
            <span className="text-2xl font-black text-white tracking-tight block mb-2 uppercase">Asset Elixir</span>
            <p className="text-lg text-yellow-400 font-bold mb-4">With You, Through It All.</p>
            <p className="text-base text-white/70 leading-relaxed max-w-sm mb-4">
              Thoughtful financial guidance built around your life, your responsibilities, and the future you are working toward.
            </p>
            <span className="inline-block text-xs uppercase font-black tracking-widest text-black bg-yellow-400 px-2.5 py-1 rounded">
              SEBI Registered Investment Adviser
            </span>
          </div>

          <div className="md:col-span-2">
            <h5 className="text-sm font-black uppercase tracking-wider text-white mb-4">Links</h5>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-yellow-400 transition">About Us</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition">Services</a></li>
              <li><a href="#insights" className="hover:text-yellow-400 transition">Financial Insights</a></li>
              <li><a href="#calculators" className="hover:text-yellow-400 transition">Calculators</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Free Portfolio Review</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Book a Free Call</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h5 className="text-sm font-black uppercase tracking-wider text-white mb-4">Services</h5>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Wealth Planning</li>
              <li>Investment Strategy</li>
              <li>Protection Planning</li>
              <li>Retirement Planning</li>
              <li>Tax Optimisation</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h5 className="text-sm font-black uppercase tracking-wider text-white mb-4">Contact Info</h5>
            <ul className="space-y-2 text-sm text-white/80">
              <li className="font-black text-yellow-400 text-base tracking-wide">+91 70210 89870</li>
              <li>assetelixir@gmail.com</li>
              <li className="text-white/60 leading-normal mt-2">
                B Wing, Arihant Aura, 201,<br />
                Thane - Belapur Rd, Turbhe MIDC,<br />
                Turbhe, Navi Mumbai, MH 400703
              </li>
            </ul>
          </div>

        </div>

        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 pt-8 border-t border-white/10 text-center md:flex md:justify-between md:items-center text-[10px] uppercase font-bold tracking-wider text-white/40 max-w-full mx-auto">
          <p>&copy; 2026 Asset Elixir. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            SEBI Registered Investment Adviser Reg. No. INAXXXXXXXXXX
          </p>
        </div>
      </footer>
    </div>
  );
}