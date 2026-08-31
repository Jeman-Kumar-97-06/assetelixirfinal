"use client";
import React, { useState, useEffect, useRef } from 'react';
import AssetElixirHeader from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  const timelineRef = useRef(null);
  const [diamondProgress, setDiamondProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate the start and end of the timeline relative to the viewport middle
      const start = rect.top - windowHeight / 2;
      const totalScrollableDistance = rect.height;

      // Progress normalized from 0 to 1
      const progress = -start / totalScrollableDistance;
      const clampedProgress = Math.min(Math.max(progress, 0), 1);

      setDiamondProgress(clampedProgress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const serviceImages = {
    financialPlanning:     `/FP.jpg`,
    portfolioReview:       `/PR.jpg`,
    protectionPlanning:    `/PP.jpg`,
    retirementPlanning:    `/RP.jpg`,
    taxPlanning:           `/TP.jpg`,
    lifeStagePlanning:     `/LSP.jpg`,
    implementationSupport: `/IS.jpg`,
    ongoingSuggestion:     `/OS.jpg`,
  };

  const overviewCards = [
    {
      num: '01',
      title: 'Financial Planning',
      desc: 'A clear, personalized roadmap to grow and protect your wealth.',
    },
    {
      num: '02',
      title: 'Portfolio Review',
      desc: 'In-depth analysis to keep your investments aligned with your goals.',
    },
    {
      num: '03',
      title: 'Protection Planning',
      desc: "Safeguarding your family's future against life's uncertainties.",
    },
    {
      num: '04',
      title: 'Retirement Planning',
      desc: 'Building a steady income stream for a worry-free retirement.',
    },
    {
      num: '05',
      title: 'Tax Planning',
      desc: 'Smart strategies to minimize tax and maximize savings.',
    },
    {
      num: '06',
      title: 'Life stage Planning',
      desc: 'Financial guidance that evolves with every milestone in your life.',
    },
    {
      num: '07',
      title: 'Ongoing Suggestion',
      desc: 'Smart strategies to minimize tax and maximize savings.',
    },
    {
      num: '08',
      title: 'Implementation Support',
      desc: 'Financial guidance that evolves with every milestone in your life.',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black text-xl antialiased w-full overflow-x-hidden">
      {/* 1. NAVBAR */}
      <AssetElixirHeader />

      {/* 2. HERO SECTION */}
      <section className="pt-36 sm:pt-44 pb-12 bg-white w-full text-center"> {/* #F4F4F4 */}
        <span className="bg-[#FACC15] text-black px-10 py-3 mb-10 rounded-full text-[14px] font-bold transition shadow-sm mb-4 inline-block">
          Our Services
        </span>
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-full mx-auto">
          <span className="text-7xl sm:text-3xl md:text-3xl lg:text-7xl font-black text-[#FA9632] notoSerifBold leading-tight">
            Financial Decisions <span className='text-black'>Are Easier When <br/> You Don't Have To Make Them Alone</span>
          </span>
          
          <p className="mt-5 text-[20px] sm:text-[24px] text-black/80 notoSerifRegular leading-relaxed">
            Nobody wakes up excited to think about tax slabs or insurance premiums.
          </p>
          <p className="text-[24px] sm:text-[24px] text-black/80 notoSerifRegular leading-relaxed">
            But most of what keeps you up at night—will I retire okay, am I paying off the right <br/>debt first, is my family covered if something happens to me—comes down to a plan.
          </p>
          <p className="text-[24px] sm:text-[24px] text-black/80 notoSerifRegular leading-relaxed mb-8">
            That's what we build together, step by step, starting wherever you are right now.
          </p>
          <button className="bg-[#FACC15] text-black hover:bg-[#EAB308] px-8 py-4 rounded-full text-lg font-bold transition shadow-sm">
            Book a Consultation
          </button>
        </div>
      </section>

      {/* 3. SERVICES OVERVIEW GRID */}
      {/* 3. SERVICES OVERVIEW GRID (MATCHES 3-2 ALIGNMENT ON DESKTOP, VERTICAL ON MOBILE) */}
      {/* 3. SERVICES OVERVIEW GRID */}
<section className="py-16 bg-white w-full">
  <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-full mx-auto space-y-6 sm:space-y-8">
    
    {/* Row 1 & 2 */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
  <img src='/Services/output1.png' alt="Financial Planning" className="w-full h-auto object-contain [filter:drop-shadow(0_0_12px_rgba(0,0,0,0.12))]" />
  <img src='/Services/output2.png' alt="Portfolio Review" className="w-full h-auto object-contain [filter:drop-shadow(0_0_12px_rgba(0,0,0,0.12))]" />
  <img src='/Services/output3.png' alt="Protection Planning" className="w-full h-auto object-contain [filter:drop-shadow(0_0_12px_rgba(0,0,0,0.12))]" />
  <img src='/Services/output4.png' alt="Retirement Planning" className="w-full h-auto object-contain [filter:drop-shadow(0_0_12px_rgba(0,0,0,0.12))]" />
  <img src='/Services/output5.png' alt="Tax Planning" className="w-full h-auto object-contain [filter:drop-shadow(0_0_12px_rgba(0,0,0,0.12))]" />
  <img src='/Services/output6.png' alt="Life Stage Planning" className="w-full h-auto object-contain [filter:drop-shadow(0_0_12px_rgba(0,0,0,0.12))]" />
</div>

{/* Row 3 */}
<div className="flex flex-col md:flex-row justify-center gap-6 sm:gap-8">
  <img 
    src={'/Services/output7.png'} 
    alt="Ongoing Suggestion" 
    className="w-full md:w-[calc((100%-4rem)/3)] h-auto object-contain [filter:drop-shadow(0_0_12px_rgba(0,0,0,0.12))]" 
  />
  <img 
    src={'/Services/output8.png'} 
    alt="Implementation Support" 
    className="w-full md:w-[calc((100%-4rem)/3)] h-auto object-contain [filter:drop-shadow(0_0_12px_rgba(0,0,0,0.12))]" 
  />
</div>

  </div>
</section>

      {/* 4. DETAILED SERVICES TIMELINE SECTION WITH SCROLLING DIAMOND */}
      <section ref={timelineRef} className="py-20 bg-white w-full relative overflow-hidden">
        <div className="w-full max-w-full mx-auto relative">
          
          {/* CONTINUOUS VERTICAL CENTER LINE (z-10) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.75 bg-black z-10" />

          {/* SINGLE SCROLLING DIAMOND NODE (z-30 ON TOP OF LINE) */}
          {/* <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 w-7 h-7 bg-[#FACC15] rotate-45 border-2 border-black z-30 shadow-md pointer-events-none transition-transform duration-75 will-change-transform"
            style={{
              top: `${diamondProgress * 100}%`,
              transform: 'translate(-50%, -50%) rotate(45deg)',
            }}
          /> */}
          <div
  className="hidden md:block absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none will-change-transform"
  style={{
    top: `${diamondProgress * 100}%`,
  }}
>
  <div className="w-8 h-8 bg-[#FACC15] rotate-45  shadow-md" />
</div>

          <div className="space-y-24 relative z-0 w-full">

            {/* Service 1: Financial Planning */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#fef6ee] p-8">
              <div className="pr-0 md:pr-12">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-neutral-100 border border-black/10 shadow-md">
                  <img src={serviceImages.financialPlanning} alt="Financial Planning" className="w-full h-[full] object-contain" />
                </div>
              </div>

              <div className="bg-[#fef6ee] p-8 md:p-12 rounded-3xl pl-8 md:pl-12">
                <h2 className="text-3xl lg:text-4xl font-black text-[#FA9632] notoSerifBold mb-4">
                  Discovering Your Financial Elixir
                </h2>
                <h3 className="text-xl font-bold text-[#FA9632] notoSerifBold mb-4">
                  (Financial Planning)
                </h3>
                <p className="text-sm sm:text-base text-black/80 notoSerifBold mb-6 leading-relaxed">
                  Before we suggest anything, we sit down and actually understand your life - your income, your goals, your family, what keeps you up at night. Everything else we do comes from this conversation.
                </p>
                <ul className="space-y-2 text-[18px] sm:text-[18px] georgiaRegular text-black/90 list-inside [list-style-type:circle]">
                  <li>Comprehensive Financial Planning</li>
                  <li>Goal-Based Planning</li>
                  <li>Cash Flow Planning</li>
                  <li>Family Financial Planning</li>
                </ul>
              </div>
            </div>

            {/* Service 2: Portfolio Review */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8">
              <div className="p-8 md:p-12 rounded-3xl pr-8 md:pr-12 order-2 md:order-1">
                <h2 className="text-3xl lg:text-4xl font-black text-[#FA9632] notoSerifBold mb-4">
                  Are Your Investments Actually Working For You?
                </h2>
                <h3 className="text-xl font-bold text-[#FA9632] notoSerifBold mb-4">
                  (Portfolio Review)
                </h3>
                <p className="text-sm sm:text-base text-black/80 notoSerifBold mb-6 leading-relaxed">
                  You've probably invested in things over the years - some good calls, maybe a few you're not sure about. We'll go through all of it honestly an tell you what's working, what isn't, and why.
                </p>
                <ul className="space-y-2 text-[18px] sm:text-[18px] georgiaRegular text-black/90 list-inside [list-style-type:circle]">
                  <li>Investment Review</li>
                  <li>Mutual Fund Planning</li>
                  <li>Asset Allocation</li>
                  <li>Family Financial Planning</li>
                </ul>
              </div>

              <div className="pl-0 md:pl-12 order-1 md:order-2">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-neutral-100 border border-black/10 shadow-md">
                  <img src={serviceImages.portfolioReview} alt="Portfolio Review" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Service 3: Protection Planning */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#fef6ee] p-8">
              <div className="pr-0 md:pr-12">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-neutral-100 border border-black/10 shadow-md">
                  <img src={serviceImages.protectionPlanning} alt="Protection Planning" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="bg-[#fef6ee] p-8 md:p-12 rounded-3xl pl-8 md:pl-12">
                <h2 className="text-3xl lg:text-4xl font-black text-[#FA9632] notoSerifBold mb-4">
                  What Happens If Life Throws a Curveball?
                </h2>
                <h3 className="text-xl font-bold text-[#FA9632] notoSerifBold mb-4">
                  (Protection Planning)
                </h3>
                <p className="text-sm sm:text-base text-black/80 notoSerifBold mb-6 leading-relaxed">
                  Job loss, a health scare, an accident - none of us plan for these, but they happen. This is about making sure one bad year doesn't undo everything you've built.
                </p>
                <ul className="space-y-2 text-[18px] sm:text-[18px] georgiaRegular text-black/90 list-inside [list-style-type:circle]">
                  <li>Life Insurance Planning</li>
                  <li>Health Insurance Guidance</li>
                  <li>Risk Management Planning</li>
                </ul>
              </div>
            </div>

            {/* Service 4: Retirement Planning */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8">
              <div className="p-8 md:p-12 rounded-3xl pr-8 md:pr-12 order-2 md:order-1">
                <h2 className="text-3xl lg:text-4xl font-black text-[#FA9632] notoSerifBold mb-4">
                  The Retirement You Actually Want
                </h2>
                <h3 className="text-xl font-bold text-[#FA9632] notoSerifBold mb-4">
                  (Retirement Planning)
                </h3>
                <p className="text-sm sm:text-base text-black/80 notoSerifBold mb-6 leading-relaxed">
                  Not just "will I have enough" - but "will I have enough to live the way I want to." We help you figure out the number and the path to it
                </p>
                <ul className="space-y-2 text-[18px] sm:text-[18px] georgiaRegular text-black/90 list-inside [list-style-type:circle]">
                  <li>Retirement Corpus Planning</li>
                  <li>Retirement Income Strategy</li>
                  <li>Early Retirement Planning</li>
                </ul>
              </div>

              <div className="pl-0 md:pl-12 order-1 md:order-2">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-neutral-100 border border-black/10 shadow-md">
                  <img src={serviceImages.retirementPlanning} alt="Retirement Planning" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Service 5: Tax Planning */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#fef6ee] p-8">
              <div className="pr-0 md:pr-12">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-neutral-100 border border-black/10 shadow-md">
                  <img src={serviceImages.taxPlanning} alt="Tax Planning" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="bg-[#fef6ee] p-8 md:p-12 rounded-3xl pl-8 md:pl-12">
                <h2 className="text-3xl lg:text-4xl font-black text-[#FA9632] notoSerifBold mb-4">
                  Keeping More of What You Earn
                </h2>
                <h3 className="text-xl font-bold text-[#FA9632] notoSerifBold mb-4">
                  (Tax Planning)
                </h3>
                <p className="text-sm sm:text-base text-black/80 notoSerifBold mb-6 leading-relaxed">
                  Paying tax is unavoidable. Overpaying isn't. We make sure your money moves in ways that are efficient today and still make sense for your goals tomorrow
                </p>
                <ul className="space-y-2 text-[18px] sm:text-[18px] georgiaRegular text-black/90 list-inside [list-style-type:circle]">
                  <li>Tax Planning</li>
                  <li>Tax-Saving Investments</li>
                </ul>
              </div>
            </div>

            {/* Service 6: Life Stage Planning */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8">
              <div className="p-8 md:p-12 rounded-3xl pr-8 md:pr-12 order-2 md:order-1">
                <h2 className="text-3xl lg:text-4xl font-black text-[#FA9632] notoSerifBold mb-4">
                  Because Life Doesn't Stay the Same
                </h2>
                <h3 className="text-xl font-bold text-[#FA9632] notoSerifBold mb-4">
                  (Life Stage Planning)
                </h3>
                <p className="text-sm sm:text-base text-black/80 notoSerifBold mb-6 leading-relaxed">
                  The plan that made sense at 28 won't make sense at 45. As your responsibilities change - marriage, kids, aging parents, a new job - we make sure your plan keeps up.
                </p>
                <ul className="space-y-2 text-[18px] sm:text-[18px] georgiaRegular text-black/90 list-inside [list-style-type:circle]">
                  <li>Young Earners Planning</li>
                  <li>Family Stage Planning</li>
                  <li>Pre-Retirement Planning</li>
                </ul>
              </div>

              <div className="pl-0 md:pl-12 order-1 md:order-2">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-neutral-100 border border-black/10 shadow-md">
                  <img src={serviceImages.lifeStagePlanning} alt="Life Stage Planning" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Service 7: Ongoing Suggestion */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#fef6ee] p-8">
              <div className="pr-0 md:pr-12">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-neutral-100 border border-black/10 shadow-md">
                  <img src={serviceImages.ongoingSuggestion} alt="Ongoing Suggestion" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="bg-[#fef6ee] p-8 md:p-12 rounded-3xl pl-8 md:pl-12">
                <h2 className="text-3xl lg:text-4xl font-black text-[#FA9632] notoSerifBold mb-4">
                  We Don't Just Set It and Walk Away
                </h2>
                <h3 className="text-xl font-bold text-[#FA9632] notoSerifBold mb-4">
                  (Ongoing Suggestion)
                </h3>
                <p className="text-sm sm:text-base text-black/80 notoSerifBold mb-6 leading-relaxed">
                  This is the part most people miss: a plan isn't a one-time thing. We stay with you checking in, watching the markets, and revisiting everything above (your plan, your investments, your protection, your retirement runway, your taxes, your life stage) before we ever suggest a change.
                </p>
                <ul className="space-y-2 text-sm sm:text-base georgiaRegular text-black/90 list-inside [list-style-type:circle]">
                  <li>Comprehensive Financial Planning.</li>
                  <li>Goal-Based Planning</li>
                  <li>Cash Flow Planning</li>
                  <li>Family Financial Planning</li>
                </ul>
              </div>
            </div>

            {/* Service 8: Implementation Support */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8">
              <div className="p-8 md:p-12 rounded-3xl pr-8 md:pr-12 order-2 md:order-1">
                <h2 className="text-3xl lg:text-4xl font-black text-[#FA9632] notoSerifBold mb-4">
                  From "We Should Do This" to "It's Done"
                </h2>
                <h3 className="text-xl font-bold text-[#FA9632] notoSerifBold mb-4">
                  (Implementation Support)
                </h3>
                <p className="text-sm sm:text-base text-black/80 notoSerifBold mb-6 leading-relaxed">
                  A plan on paper doesn't help anyone. We stay hands-on until things are actually set up - paperwork, execution, follow-through - so nothing falls through the cracks.
                </p>
                <ul className="space-y-2 text-[18px] sm:text-[18px] georgiaRegular text-black/90 list-inside [list-style-type:circle]">
                  <li>Execution Assistance</li>
                  <li>Documentation Support</li>
                  <li>Ongoing Hand Holding</li>
                </ul>
              </div>

              <div className="pl-0 md:pl-12 order-1 md:order-2">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-neutral-100 border border-black/10 shadow-md">
                  <img src={serviceImages.implementationSupport} alt="Implementation Support" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CALLOUT BANNER SECTION */}
      <section className="py-16 w-full">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 text-center max-w-full mx-auto space-y-4">
          <h3 className="text-5xl sm:text-5xl font-black text-[#FA9632] notoSerifBold">
            Sometimes the best place to start is a conversation.
          </h3>
          <p className="text-base sm:text-lg text-black/80 georgiaBold leading-relaxed">
            Whether you're trying to make an important decision, wondering if you're on the right track, or planning for what's next, we're here to help you think it through.
          </p>
          <div className="pt-4">
            <button className="bg-[#FACC15] text-black hover:bg-[#EAB308] px-8 py-3 rounded-full text-base font-bold transition">
              Connect with Us
            </button>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CTA SECTION */}
      <section id="contact" className="py-20 bg-white border-t border-black w-full">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-black leading-tight max-w-2xl notoSerifBold">
              Ready to find your <br />
              Financial elixir?
            </h2>
            <div className="shrink-0">
              <button className="bg-[#FACC15] text-black hover:bg-[#EAB308] px-8 py-4 rounded-2xl text-lg font-bold tracking-normal transition duration-200 shadow-sm whitespace-nowrap">
                Book a Free Consultation
              </button>
            </div>
          </div>

          <div className="space-y-6 text-base sm:text-lg lg:text-xl font-medium text-black/90 max-w-full leading-relaxed georgiaRegular">
            <p>
              Wherever you are in life, a thoughtful conversation about your goals, your responsibilities, and the future you want to build is always a good place to start. We would love to be part of that journey with you.
            </p>
            <p>
              If you are looking for guidance that feels personal, honest, and built around your life, we would be glad to connect.
            </p>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <Footer/>
    </div>
  );
}