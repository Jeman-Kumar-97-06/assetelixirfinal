"use client"
import React, { useState, useEffect, useRef } from 'react';
import ServicesAccordionSection               from '@/components/Accordian';
import AssetElixirHeader                      from '@/components/Navbar';
import StatsIndicatorBar                      from '@/components/StatsHome';   
import Link from 'next/link';

export default function Home() {
  const [scrollProgress, setScrollProgress]               = useState(0);
  const [profileScrollProgress, setProfileScrollProgress] = useState(0);
  
  // State for Instagram video modal lightbox
  const [activeVideo, setActiveVideo]                     = useState(null);

  const sectionRef                                        = useRef(null);
  const profileSectionRef                                 = useRef(null);

  // Array of 8 Instagram video cards with placeholder URL '#'
  const instagramVideos = [
    { id: 1, thumbnailUrl: '/Thumbnails/1x2/01.png', videoUrl: "/v1.webm", title: 'Video 1' },
    { id: 2, thumbnailUrl: '/Thumbnails/1x2/02.png', videoUrl: "/v2.webm", title: 'Video 2' },
    { id: 3, thumbnailUrl: '/Thumbnails/1x2/03.png', videoUrl: "/v3.webm", title: 'Video 3' },
    { id: 4, thumbnailUrl: '/Thumbnails/1x2/04.png', videoUrl: "/v4.webm", title: 'Video 4' },
    { id: 5, thumbnailUrl: '/Thumbnails/1x2/05.png', videoUrl: "/v5.webm", title: 'Video 5' },
    { id: 6, thumbnailUrl: '/Thumbnails/1x2/06.png', videoUrl: "/v6.webm", title: 'Video 6' },
    { id: 7, thumbnailUrl: '/Thumbnails/1x2/07.png', videoUrl: "/v7.webm", title: 'Video 7' },
    { id: 8, thumbnailUrl: '/Thumbnails/1x2/08.png', videoUrl: "/v8.webm", title: 'Video 8' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Parallel Cards Track Scroll Calculation
      if (sectionRef.current) {
        const rect             = sectionRef.current.getBoundingClientRect();
        const windowHeight     = window.innerHeight;
        const totalScrollArea  = rect.height;
        const currentScrollPos = -rect.top + (windowHeight * 0.15);
        const linearProgress   = Math.min(Math.max(currentScrollPos / (totalScrollArea - windowHeight), 0), 1);
        const smoothProgress   = linearProgress * linearProgress * (3 - 2 * linearProgress);
        setScrollProgress(smoothProgress);
      }

      // 2. Profile Section Quote Slip Up Calculation
      if (profileSectionRef.current) {
        const rect                  = profileSectionRef.current.getBoundingClientRect();
        const windowHeight          = window.innerHeight;
        
        const startTarget           = windowHeight * 0.2;
        const endTarget             = 0;
        
        const currentProgress       = (startTarget - rect.top) / (startTarget - endTarget);
        const clampedProgress       = Math.min(Math.max(currentProgress, 0), 1);
        
        const smoothProfileProgress = clampedProgress * clampedProgress * (3 - 2 * clampedProgress);
        setProfileScrollProgress(smoothProfileProgress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const testimonials = [
    {id:1, content:"I had a great experience working with Shivam. He is highly knowledgeable and took the time to understand my aspirations and long-term goals for my portfolio. Based on that, he built a well-planned SIP strategy focused on long-term wealth creation. What I appreciate most is that there was never any pressure to purchase a particular financial product. His approach is professional, transparent, and focused on what is right for the client. He is trustworthy, easily accessible, and always available to answer questions and provide guidance.I would highly recommend him to anyone looking for a reliable long-term financial planning.", name:"Nitya Khamari", occupation: "Technical Lead", rating:"⭐⭐⭐⭐⭐"},
    {id:2, content:"With work commitments and continuous changes in my finances, managing them became increasingly difficult. That’s when I approached Shivam for help. During this journey, I realized I had overlooked several crucial aspects while managing my personal finances on my own. What truly stood out was Shivam’s honesty and the timely delivery of his services. Every task entrusted to him was completed on time, making this experience smooth and reliable.", name:"Rohit", occupation: "Co-Founder and CTO at Sunday Tech", rating:"⭐⭐⭐⭐"},
    {id:3, content:"I have been working for more than 10 years and began my financial journey with basic savings in fixed deposits (FDs). After meeting with them, they recommended options that perfectly suited my needs—tax-efficient strategies that fully leveraged my savings potential. Their consistent support has been invaluable in helping me make informed financial decisions, and their guidance has truly made a significant difference. What stands out the most is their dedication to regularly connecting with me, ensuring that my financial goals remain on track. Our discussions have also encompassed diverse investment options such as Real Estate, Gold, and Mutual Funds, providing me with a comprehensive and well-rounded approach to wealth creation.", name:"Shikha", occupation: "Technical Specialist", rating:"⭐⭐⭐⭐⭐"},
    {id:4, content:"As a busy surgeon, financial planning and saving were always at the bottom of my priority list due to time constraints. Although I wanted to save, I could never find the time to organize my finances properly. That all changed when I met Shivam Pathak. Shivam took all my financial worries off my shoulders. He helped me design a financial framework that finally allowed me to manage my finances, pay my bills, handle EMIs, plan savings, and even invest in personal interests—like buying that expensive phone I always wanted! He turned what I could only imagine into a practical reality. I am incredibly grateful to have found such a genuine person. I highly recommend Shivam to anyone looking to grow their wealth in a secure and fulfilling way.", name:"Dr.Firdous Pathan", occupation: "Surgeon", rating:"⭐⭐⭐⭐⭐"},
    {id:5, content:"I've had a very good experience working with Shivam as my financial planner. What stands out most is how clearly he explains things — even complex topics like investment strategy are broken down in a way that's easy to understand. He took the time to really understand my investment goals and planned accordingly, which made me feel like my plan was actually built around what I wanted, not a one-size-fits-all approach. He's reliable, straightforward, and I always leave our meetings feeling confident about my financial decisions. Highly recommend if you're looking for someone who listens and communicates well.", name:"Nymphia Wanchoo", occupation: "Quality Assurance Engineer", rating:"⭐⭐⭐⭐"},
    {id:1, content:"I had a great experience working with Shivam. He is highly knowledgeable and took the time to understand my aspirations and long-term goals for my portfolio. Based on that, he built a well-planned SIP strategy focused on long-term wealth creation. What I appreciate most is that there was never any pressure to purchase a particular financial product. His approach is professional, transparent, and focused on what is right for the client. He is trustworthy, easily accessible, and always available to answer questions and provide guidance.I would highly recommend him to anyone looking for a reliable long-term financial planning.", name:"Nitya Khamari", occupation: "Technical Lead", rating:"⭐⭐⭐⭐⭐"},
    {id:2, content:"With work commitments and continuous changes in my finances, managing them became increasingly difficult. That’s when I approached Shivam for help. During this journey, I realized I had overlooked several crucial aspects while managing my personal finances on my own. What truly stood out was Shivam’s honesty and the timely delivery of his services. Every task entrusted to him was completed on time, making this experience smooth and reliable.", name:"Rohit", occupation: "Co-Founder and CTO at Sunday Tech", rating:"⭐⭐⭐⭐"},
    {id:3, content:"I have been working for more than 10 years and began my financial journey with basic savings in fixed deposits (FDs). After meeting with them, they recommended options that perfectly suited my needs—tax-efficient strategies that fully leveraged my savings potential. Their consistent support has been invaluable in helping me make informed financial decisions, and their guidance has truly made a significant difference. What stands out the most is their dedication to regularly connecting with me, ensuring that my financial goals remain on track. Our discussions have also encompassed diverse investment options such as Real Estate, Gold, and Mutual Funds, providing me with a comprehensive and well-rounded approach to wealth creation.", name:"Shikha", occupation: "Technical Specialist", rating:"⭐⭐⭐⭐⭐"},
    {id:4, content:"As a busy surgeon, financial planning and saving were always at the bottom of my priority list due to time constraints. Although I wanted to save, I could never find the time to organize my finances properly. That all changed when I met Shivam Pathak. Shivam took all my financial worries off my shoulders. He helped me design a financial framework that finally allowed me to manage my finances, pay my bills, handle EMIs, plan savings, and even invest in personal interests—like buying that expensive phone I always wanted! He turned what I could only imagine into a practical reality. I am incredibly grateful to have found such a genuine person. I highly recommend Shivam to anyone looking to grow their wealth in a secure and fulfilling way.", name:"Dr.Firdous Pathan", occupation: "Surgeon", rating:"⭐⭐⭐⭐⭐"},
    {id:5, content:"I've had a very good experience working with Shivam as my financial planner. What stands out most is how clearly he explains things — even complex topics like investment strategy are broken down in a way that's easy to understand. He took the time to really understand my investment goals and planned accordingly, which made me feel like my plan was actually built around what I wanted, not a one-size-fits-all approach. He's reliable, straightforward, and I always leave our meetings feeling confident about my financial decisions. Highly recommend if you're looking for someone who listens and communicates well.", name:"Nymphia Wanchoo", occupation: "Quality Assurance Engineer", rating:"⭐⭐⭐⭐"},
    
    // {id:6, content:"I had a great experience working with Shivam. He is highly knowledgeable and took the time to understand my aspirations and long-term goals for my portfolio. Based on that, he built a well-planned SIP strategy focused on long-term wealth creation. What I appreciate most is that there was never any pressure to purchase a particular financial product. His approach is professional, transparent, and focused on what is right for the client. He is trustworthy, easily accessible, and always available to answer questions and provide guidance.I would highly recommend him to anyone looking for a reliable long-term financial planning.", name:"Nitya Khamari", occupation: "Technical Lead", rating:"⭐⭐⭐⭐⭐"},
    // {id:7, content:"With work commitments and continuous changes in my finances, managing them became increasingly difficult. That’s when I approached Shivam for help. During this journey, I realized I had overlooked several crucial aspects while managing my personal finances on my own. What truly stood out was Shivam’s honesty and the timely delivery of his services. Every task entrusted to him was completed on time, making this experience smooth and reliable.", name:"Rohit", occupation: "Co-Founder and CTO at Sunday Tech", rating:"⭐⭐⭐⭐"},
    // {id:8, content:"I have been working for more than 10 years and began my financial journey with basic savings in fixed deposits (FDs). After meeting with them, they recommended options that perfectly suited my needs—tax-efficient strategies that fully leveraged my savings potential. Their consistent support has been invaluable in helping me make informed financial decisions, and their guidance has truly made a significant difference. What stands out the most is their dedication to regularly connecting with me, ensuring that my financial goals remain on track. Our discussions have also encompassed diverse investment options such as Real Estate, Gold, and Mutual Funds, providing me with a comprehensive and well-rounded approach to wealth creation.", name:"Shikha", occupation: "Technical Specialist", rating:"⭐⭐⭐⭐⭐"},
  ]

  return (
    <div className="min-h-screen bg-white text-black text-xl antialiased w-full overflow-x-hidden">
      {/* 1. NAVBAR */}
      <AssetElixirHeader/>
      {/* 2. HERO SECTION */}
      <section className="relative bg-white pt-40 w-full">
        <div className="w-full px-2 sm:px-6 lg:px-12 xl:px-15 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-[18px] notoSerifBold text-black mb-10 bg-yellow-400 rounded-[2rem] inline-block p-3 self-start">
              Your Personal Financial Planner
            </span>
            <h1 className="text-[50px] sm:text-[50px] lg:text-[70px] xl:text-[80px] font-black tracking-tight text-black leading-none mb-6">
              With You, <br />
              <span className=" rounded-[2rem] text-[#FA9632] my-1 inline-block">Through <span className='text-black'>It All.</span></span>
            </h1>
            <p className="text-base text-4xl/5 sm:text-2xl/7 text-black  mb-8 leading-relaxed georgiaRegular">
              Financial advice is easy to find. What is rare is someone who first takes the time to understand your story, your responsibilities, your life, and the future you are trying to build. That is where every conversation at Asset Elixir begins.<br />
              <strong className="text-black block mt-4 font-bold  tracking-wide"></strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <button className="rounded-[2rem] bg-yellow-400 text-black font-bold tracking-wider p-4 transition w-full sm:w-auto text-center">
                Book a Consultation
              </button>
            </div>
          </div>

          {/* <div className="lg:col-span-5 relative flex justify-center w-full">
            <div className="w-[640px]  aspect-[16/9] overflow-hidden relative rounded-[2rem]">
              <video
                src={`${vid}`}
                autoPlay
                loop
                muted
                playsInline
                className="w-[640px] h-[480px] object-cover absolute"
              />
              <div className="absolute bg-white pointer-events-none" />
            </div>
          </div> */}
  {/* Square aspect ratio container */}
  <div className="lg:col-span-5 relative flex justify-center w-full">
  <div className="w-full max-w-[500px] aspect-square overflow-hidden relative rounded-[2rem] bg-transparent">
    <video
      src="/HelpingHand.webm"
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover absolute inset-0 scale-[1.08] transition-transform"
    />
    <div className="absolute inset-0 bg-white/5 pointer-events-none" />
  </div>
</div>

        </div>

        {/* Featured In Bar */}
        <div className="w-full bg-[#fcf6ee] mt-20 py-12 left-0 right-0">
          <div className="w-full px-4 sm:px-12 lg:px-20 xl:px-32">
            {/* <p className="text-m font-black text-black/40 tracking-widest text-center mb-6">
              Featured In:
            </p> */}
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 font-black uppercase text-lg text-black">
              <span className="capitalize font-medium text-[25px] notoSerifRegular pb-1">Featured In : </span>
              <span className="border-b-2 border-black pb-1">ET Money </span>
              <span className="bg-black text-white px-2 py-0.5">The Economic Times</span>
              <span className="italic">mint</span>
              <span className="border-2 border-black px-2">moneycontrol</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FOUNDER PROFILE SECTION */}
      <section ref={profileSectionRef} id="about" className="bg-white border-b-2 border-black w-full p-0 overflow-hidden">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          
          <div className="lg:col-span-7 w-full relative h-[600px] lg:h-auto min-h-[550px]">
            <img 
              src="/Profile_pic.png" 
              alt="Shivam Pathak - The person behind Asset Elixir"
              className="w-full h-full object-cover object-center absolute inset-0"
            />
            <div className="absolute bottom-8 left-8 sm:left-8 lg:left-8 xl:left-8 z-10 hidden sm:block pointer-events-none">
              <p className="text-white text-base/7 sm:text-[20px] md:text-[20px] lg:text-[30px] xl:text-[40px] 2xl:text-[50px] font-light drop-shadow-md notoSerifRegular">The person behind</p>
              <h3 className="mbb text-[#FACC15] text-[90px] lg:text-[120px] font-black capitalize tracking-tight drop-shadow-md">Asset Elixir</h3>
            </div>
          </div>
          {/* <div className="lg:col-span-6 w-full relative h-[600px] lg:h-auto min-h-[550px]">
            <img 
              src={Profile} 
              alt="Shivam Pathak - The person behind Asset Elixir"
              className="w-full h-full object-cover object-center absolute inset-0"
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center text-center w-full max-w-max pointer-events-none">
              <p className="text-white sm:text-[35px] md:text-[40px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px] font-light  drop-shadow-md notoSerifRegular">
              The person behind
              </p>
              <h3 className="text-[#FACC15] text-[90px] lg:text-[120px] font-black capitalize tracking-tight drop-shadow-md mbb leading-none">
              Asset Elixir
              </h3>
            </div>
          </div> */}

          <div className="lg:col-span-5 text-black flex flex-col justify-between pt-20 pb-0 px-4 sm:pl-16 sm:pr-12 lg:pl-16 lg:pr-16 xl:pl-20 xl:pr-24">
            
            <div className="space-y-6 text-2xl/7 sm:text-2xl/7 leading-relaxed pt-2 text-black georgiaRegular mb-8">
              <p>
                Over the past decade, I have had the opportunity to work closely with individuals and families at different stages of life, helping them make financial decisions that fit the life they want to build. 
              </p>
              <p className="tracking-wide text-black px-1 inline-block">
                One thing I have realised is that these conversations are rarely just about money.
              </p>
              <p>
                They are about family, responsibilities, future plans, and the desire to do the right things for the people who matter most.
              </p>
              <p>
                That is why I have always believed in understanding the person first, because no two lives are the same, and no two financial plans should be either.
              </p>
            </div>

            <div className="w-[600px] m-auto">
              <blockquote className="georgiaItalic text-5xl text-black bg-[#FACC15] p-10 pt-16 pb-16 rounded-t-[2.5rem] rounded-b-none relative overflow-hidden">
                <div className="relative p-6 py-4">
                  <span className="absolute -top-10 -left-6 text-white text-[120px] font-serif opacity-90 leading-none pointer-events-none select-none">“</span>
                  <p className="leading-tight text-black font-medium relative z-10">
                    The Richest People I Know Are Not The Highest Earners.
                  </p>
                  <span className="absolute -bottom-16 right-0 text-white text-[120px] font-serif opacity-90 leading-none pointer-events-none select-none">”</span>
                </div>

                <footer className="not-italic mt-6 pl-6">
                  <span className="notoSerifBold text-3xl block text-black">
                    Shivam Pathak, <span className="text-3xl notoSerifRegular text-black ml-1">CFP</span>
                    <sup className="text-base notoSerifRegular text-black -top-2 relative">®</sup>
                  </span>
                  <span className="notoSerifRegular text-2xl text-black block mt-1">
                    Founder, Asset Elixir 
                  </span>
                </footer>
              </blockquote>
            </div>

          </div>
          
        </div>
      </section>

      {/* Trust Indicators / Stats Bar */}
      <StatsIndicatorBar/>
      
      {/* 4. SERVICES SECTION */}
      <section id="services" className="py-24 bg-white  w-full"> {/* border-b-2 border-black */}
        <div className="w-full px-2 sm:px-6 lg:px-5 xl:px-10">
          <div className="mb-16 max-w-full">
            <span className="text-[#FA9632] notoSerifRegular inline-block rounded-[2rem] py-1 text-xl mb-1">
              What we offer
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight leading-none notoSerifBold">
              Planning for every part of your life.
            </h2>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 lg:grid-cols-1 lg:gap-16 gap-12 items-start">
            <div className="xl:col-span-3">
              <p className="text-black text-3xl sm:text-xl leading-relaxed font-serif">
                Financial decisions are connected to every part of life: your family, your 
                responsibilities, your future, and the goals you are working hard to 
                achieve. That is why our approach to financial planning is personal, 
                thoughtful, and built around what truly matters to you.
              </p>
            </div>

            <div className="xl:col-span-9">
              <ServicesAccordionSection />
            </div>
          </div>

        </div>
      </section>

      {/* 5. PARALLEL SCROLL-DRIVEN CARD TRACK */}
<section ref={sectionRef} className="relative w-full bg-white  h-[110vh]">
  {/* border-b-2 border-black */}
  <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden px-2 sm:px-6 lg:px-10 xl:px-15 py-2 sm:py-6 lg:py-8">
    
    {/* Header */}
    <div className="mb-2 sm:mb-4 lg:mb-6 max-w-full z-10 bg-white/90 backdrop-blur-xs py-1 rounded-xl shrink-0">
      <span className="text-lg sm:text-xl inline-block rounded-[2rem] notoSerifRegular text-[#FA9632] block mb-1 sm:mb-2">
        Perspectives on Money & Life
      </span>
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-black mb-1 notoSerifBold">
        Featured in Leading Financial Publications
      </h2>
      <p className="text-sm sm:text-xl text-black font-medium leading-relaxed">
        Thoughtful perspectives on money, markets, planning, and the decisions that shape long-term financial well-being.
      </p>
    </div>

    {/* Parallel Splitting Canvas Track */}
    <div className="relative flex items-center justify-center w-full h-[65vh] max-h-[570px] min-h-[440px] mt-2">
      
      {/* Card 1: Financial Planning */}
      <div 
        className="absolute w-[300px] sm:w-[350px] h-full flex flex-col overflow-hidden transition-transform duration-75 ease-out bg-cover bg-center"
        style={{
          backgroundImage: `url('/ViratKohli.png')`,
          transform: `translateX(calc(-115% * ${scrollProgress}))`,
          zIndex: 30,
        }}
      >
        <div className="w-full h-full bg-[#FACC15]/60 backdrop-blur-xs p-4 sm:p-8 flex flex-col justify-between text-black overflow-hidden">
          <div>
            <h3 className="text-base sm:text-xl font-black uppercase border-b border-black/20 pb-2 sm:pb-4 mb-2 sm:mb-6">Retirement Planning</h3>
            <div className="min-h-[90px] sm:min-h-[140px]">
              <h4 className="text-sm sm:text-lg font-black leading-snug">
                What Virat Kohli's Test career teaches us about winning in personal finance?
              </h4>
            </div>
          </div>

          <div className="min-h-[140px] sm:min-h-[220px] flex items-start">
            <p className="text-xs sm:text-[19px] text-black font-bold leading-relaxed">
              We help you build a retirement strategy that supports the lifestyle, peace of mind, and financial freedom you want for the years ahead.
            </p>
          </div>
        </div>
      </div>

      {/* Card 2: Retirement Planning */}
      <div 
        className="absolute w-[300px] sm:w-[350px] h-full flex flex-col overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url('/PlanningRetirment.png')`,
          zIndex: 20,
        }}
      >
        <div className="w-full h-full bg-neutral-900/60 backdrop-blur-xs p-4 sm:p-8 flex flex-col justify-between text-white overflow-hidden">
          <div>
            <h3 className="text-base sm:text-2xl font-black uppercase border-b border-white/20 pb-2 sm:pb-4 mb-2 sm:mb-6">Financial Planning</h3>
            <div className="min-h-[90px] sm:min-h-[140px]">
              <h4 className="text-sm sm:text-lg font-bold leading-snug">
                Retiring with a large EPF corpus? Here's how to allocate money across fixed income and mutual funds
              </h4>
            </div>
          </div>

          <div className="min-h-[140px] sm:min-h-[220px] flex items-start">
            <p className="text-xs sm:text-[19px] text-white leading-relaxed">
              A thoughtful financial roadmap that brings together your income, savings, investments, responsibilities, and long-term goals into one clear direction.
            </p>
          </div>
        </div>
        
      </div>

      {/* Card 3: Wealth Planning */}
      <div 
        className="absolute w-[300px] sm:w-[350px] h-full flex flex-col overflow-hidden transition-transform duration-75 ease-out bg-cover bg-center"
        style={{
          backgroundImage: `url('/DIYinvestment.png')`,
          transform: `translateX(calc(115% * ${scrollProgress}))`,
          zIndex: 10,
        }}
      >
        <div className="w-full h-full bg-[#FA9632]/60 backdrop-blur-xs p-4 sm:p-8 flex flex-col justify-between text-black overflow-hidden">
          <div>
            <h3 className="text-base sm:text-2xl font-black uppercase border-b border-black/20 pb-2 sm:pb-4 mb-2 sm:mb-6">Wealth Planning</h3>
            <div className="min-h-[90px] sm:min-h-[140px]">
              <h4 className="text-sm sm:text-lg font-black leading-snug">
                DIY investing is rising — but you still need help with your money
              </h4>
            </div>
          </div>

          <div className="min-h-[140px] sm:min-h-[220px] flex items-start">
            <p className="text-xs sm:text-[19px] text-black font-bold leading-relaxed">
              A thoughtful approach to growing and managing wealth through decisions that align with your responsibilities, future goals, and the life you want to create for yourself and your family.
            </p>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>
      <section id="human-side" className="py-24 bg-[#f4f4f4]w-full">
        {/* border-b-2 border-black */}
  <div className="w-full px-2 sm:px-6 lg:px-10 xl:px-15">
    
    <div className="mb-12 max-w-full">
      <span className="text-[#FA9632] text-xl block mb-2 notoSerifRegular">
        Human Side
      </span>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-black notoSerifBold leading-tight">
        Behind every financial decision, there is a story.
      </h2>
    </div>

    {/* Equal Height Grid Setup */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      
      {/* Left Column (8 cols) */}
      <div className="lg:col-span-8 flex flex-col gap-6">
        
        {/* Top Hero Card */}
        <Link
          href='/humanside/0'
          className="w-full h-[320px] sm:h-[500px] rounded-[2rem] bg-cover bg-no-repeat relative overflow-hidden flex flex-col justify-end p-6 sm:p-10 text-white group cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.02]"
          style={{ backgroundImage: `url('/image-19.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="relative z-10 max-w-2xl">
            <h3 className="text-lg sm:text-xl font-black font-serif mb-2 tracking-wide">
              I Still Regret That Financial Decision. How Do I Move Forward?
            </h3>
            <p className="text-[15px] sm:text-[18px] text-white/80 leading-relaxed notoSerifRegular">
              A bad investment, delayed decisions, or missed opportunities can leave emotional scars that last far longer than the financial loss itself.  
            </p>
          </div>
        </Link>

        {/* Bottom Two Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
          <Link 
            href='/humanside/13'
            className="w-full h-[280px] sm:h-full min-h-[280px] rounded-[2rem] bg-cover bg-no-repeat bg-top relative overflow-hidden flex flex-col justify-end p-6 text-white group cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.02]"
            style={{ backgroundImage: `url("/oldwomanmug.png")` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl font-black font-serif mb-1 tracking-wide">
                I Don't Want to Depend on Anyone in Old Age.
              </h3>
              <p className="text-[15px] sm:text-[18px] text-white/70 leading-normal notoSerifRegular line-clamp-2">
                Financial dependence in old age doesn't arrive suddenly — it arrives slowly, through every year a plan was postponed.
              </p>
            </div>
          </Link>

          <Link
            href='/humanside/2'
            className="w-full h-[280px] sm:h-full min-h-[280px] rounded-[2rem] bg-cover bg-no-repeat bg-top relative overflow-hidden flex flex-col justify-end p-6 text-white group cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.02]"
            style={{ backgroundImage: `url('/manlooking.png')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl font-black font-serif mb-1 tracking-wide">
                I Lost Everything Once. Can I Rebuild My Life Again?
              </h3>
              <p className="text-[15px] sm:text-[18px] text-white/70 leading-normal notoSerifRegular line-clamp-2">
                Losing it all doesn't just empty a bank account — it can quietly convince a person that starting over is no longer possible for them.  
              </p>
            </div>
          </Link>
        </div>

      </div>

      {/* Right Column (4 cols) */}
      <div className="lg:col-span-4 flex flex-col gap-6">
        
        <Link 
          href='/humanside/1'
          className="w-full h-[320px] lg:flex-1 rounded-[2rem] bg-cover bg-center bg-no-repeat relative overflow-hidden flex flex-col justify-end p-6 text-white group cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.02]"
          style={{ backgroundImage: `url('/manheadache.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="relative z-10">
            <h3 className="text-lg sm:text-xl font-black font-serif mb-1 tracking-wide">
              I Earn Well. Why Does Money Still Feel Tight?
            </h3>
            <p className="text-[15px] sm:text-[18px] text-white/70 leading-normal notoSerifRegular line-clamp-2">
              Earning more without a structure in place doesn't solve the problem - it just makes the gap between income and peace feel more confusing.                    
            </p>
          </div>
        </Link>

        <Link
          href='/humanside/4'
          className="w-full h-[280px] lg:flex-1 rounded-[2rem] bg-cover bg-center bg-no-repeat relative overflow-hidden flex flex-col justify-end p-6 text-white group cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.02]"
          style={{ backgroundImage: `url('/WomanHeadache.png')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div className="relative z-10">
            <h3 className="text-lg sm:text-xl font-black font-serif mb-1 tracking-wide">
              I've Always Managed Everything Alone. What Happens If I Am Not There?
            </h3>
            <p className="text-[15px] sm:text-[18px] text-white/70 leading-normal notoSerifRegular line-clamp-2">
              Being the strong one for everyone else can mean being the one person whose own future was never fully planned for. 
            </p>
          </div>
        </Link>

      </div>

    </div>

  </div>
</section>

      {/* 6. INSTAGRAM VIDEOS SECTION */}
<section id="instagram-reels" className="py-24 bg-white  w-full"> {/* border-b-2 border-black */}
  {/* Replaced max-w-7xl with full padding utilities so header spans edge-to-edge */}
  <div className="w-full px-2 sm:px-6 lg:px-10 xl:px-15">
    
    {/* Full-width Section Header */}
    {/* <div className="w-full flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
      <div>
        <span className="text-xl tracking-widest text-[#FA9632] block mb-2 notoSerifRegular">
          Perspectives on Money & Life
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight notoSerifBold mb-3">
          Straight talk about money.
        </h2>
        <p className="text-black text-base sm:text-lg max-w-2xl georgiaRegular">
          Thoughtful perspectives on money, markets, planning, and the decisions that shape long-term financial well-being.
        </p>
      </div>

      <a 
        href="https://instagram.com" 
        target="_blank" 
        rel="noopener noreferrer"
        className="sm:text-[20px] m:text-[15px] lg:text-[15px] xl:text-[20px] shrink-0 bg-black text-white hover:bg-yellow-400 hover:text-black transition-colors duration-300 font-bold px-3 py-2 rounded-full text-lg tracking-wide shadow-md text-center mr-[8px]"
      >
        Follow on Instagram
      </a>
    </div> */}

    <div className="w-full mb-12">
  <span className="text-xl text-[#FA9632] block mb-1 notoSerifRegular">
    Perspectives on Money & Life
  </span>
  
  {/* Flex container matching the H2 and the Button specifically */}
  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-3">
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black tracking-tight notoSerifBold">
      Straight talk about money.
    </h2>

    <a 
      href="https://instagram.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="sm:text-[20px] m:text-[15px] lg:text-[15px] xl:text-[20px] shrink-0 bg-black text-white hover:bg-yellow-400 hover:text-black transition-colors duration-300 font-bold px-3 py-2 rounded-full text-lg tracking-wide shadow-md text-center mr-[8px] self-start md:self-auto"
    >
      Follow on Instagram
    </a>
  </div>

  <p className="text-black text-base sm:text-lg  georgiaRegular">
    Thoughtful perspectives on money, markets, planning, and the decisions that shape long-term financial well-being.
  </p>
</div>

    {/* Video Grid isolated to 60vw centered */}
    <div className="w-[80vw] mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
      {instagramVideos.map((item) => (
        <div
          key={item.id}
          onClick={() => setActiveVideo(item.videoUrl)}
          style={{ backgroundImage: `url(${item.thumbnailUrl})` }}
          className="w-full group relative aspect-[4/4] bg-neutral-900 bg-cover bg-center rounded-2xl overflow-hidden cursor-pointer flex items-center justify-center transition-all duration-300 hover:-translate-y-1" //hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1
        >
          {/* Overlay to improve thumbnail readability */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />

          {/* Play Button Icon */}
          <div className="relative z-10 w-10 h-10 sm:w-10 sm:h-10 rounded-full bg-black/50 text-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-lg border border-white/20">
            <svg className="w-7 h-7 sm:w-8 sm:h-8 ml-1 fill-current" viewBox="2 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>


      {/* LIGHTBOX POPUP MODAL */}
      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-all duration-300">
          
          {/* Close Backdrop Trigger */}
          <div 
            className="absolute inset-0 cursor-pointer" 
            onClick={() => setActiveVideo(null)} 
          />

          {/* Modal Card Container: Scaled down width and height to match reference design */}
          <div className="relative z-10 w-full max-w-[340px] sm:max-w-[380px] aspect-[9/16] max-h-[70vh] bg-black border-2 border-black rounded-[2rem] overflow-hidden shadow-2xl flex items-center justify-center">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/80 text-white flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors font-bold text-sm border border-white/20"
            >
              ✕
            </button>

            {/* Video Player */}
            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      )}
      <section id="testimonials" className="py-24 bg-white text-white w-full overflow-hidden">
  <div className="w-full px-2 sm:px-6 lg:px-10 xl:px-15 mb-16">
    <div>
      <span className="text-xl text-[#FA9632] block mb-1">What Clients Say</span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-black notoSerifBold tracking-tight">
        People we have had the privilege of working with.
      </h2>
      <p className="text-black mt-4 text-xl sm:text-xl leading-relaxed">
        Our measure of success is simple—whether the people we work with feel more confident, more prepared, and more at ease about the future they are building. The relationships we build are long-term.
      </p>
    </div>
  </div>

  {/* Marquee Track Container */}
  {/* Marquee Track Container */}
<div className="relative flex w-full overflow-hidden select-none">
  {/* Changed gap-8 to gap-0 so -50% translates perfectly without spacing offset */}
  <div className="flex gap-0 animate-ticker w-max">
    
    {/* Set 1 */}
    {testimonials.map((item, index) => (
      /* Added pr-8 to handle the 32px spacing inside each item box */
      <div 
        key={`orig-${item.id}-${index}`} 
        className="w-[350px] sm:w-[400px] pr-8 shrink-0 whitespace-normal group"
      >
        <div className="w-full h-full rounded-[1.25rem] bg-black p-8 flex flex-col justify-between">
          <p className="text-white leading-relaxed mb-8 text-sm sm:text-base line-clamp-5">
            {item.content}
          </p>
          <div>
            <p className="text-m font-bold bg-black tracking-wider max-w-max rounded">{item.name}</p>
            <h4 className="font-black text-white text-sm tracking-wide mt-2">{item.occupation}</h4>
            <span>{item.rating}</span>
          </div>
        </div>
      </div>
    ))}

    {/* Set 2 (Exact Duplicate for Infinite Seamless Loop) */}
    {testimonials.map((item, index) => (
      <div 
        key={`dup-${item.id}-${index}`} 
        className="w-[350px] sm:w-[400px] pr-8 shrink-0 whitespace-normal group"
      >
        <div className="w-full h-full rounded-[1.25rem] bg-black p-8 flex flex-col justify-between">
          <p className="text-white leading-relaxed mb-8 text-sm sm:text-base line-clamp-5">
            {item.content}
          </p>
          <div>
            <p className="text-m font-bold bg-black tracking-wider max-w-max rounded">{item.name}</p>
            <h4 className="font-black text-white text-sm tracking-wide mt-2">{item.occupation}</h4>
            <span>{item.rating}</span>
          </div>
        </div>
      </div>
    ))}

  </div>
</div>
</section>

      {/* 9. BOTTOM CTA SECTION */}
      <section id="contact" className="py-24 bg-white  w-full">
        <div className="w-full px-2 sm:px-6 lg:px-10 xl:px-15">
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-black leading-tight max-w-2xl">
              Ready to find your <br />Financial elixir?
            </h2>
            <div className="shrink-0">
              <button className="bg-[#FACC15] text-black hover:bg-[#EAB308] px-8 py-4 rounded-[1.25rem] text-lg font-bold tracking-normal transition duration-200 shadow-sm whitespace-nowrap">
                Book a Free Consultation
              </button>
            </div>
          </div>

          <div className="space-y-6 text-base sm:text-lg lg:text-xl font-medium text-black/90 max-w-6xl leading-relaxed">
            <p>
              Wherever you are in life, a thoughtful conversation about your goals, your responsibilities, and the future you want to build is always a good place to start. We would love to be part of that journey with you.
            </p>
            <p>
              If you are looking for guidance that feels personal, honest, and built around your life, we would be glad to connect.
            </p>
          </div>

        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="bg-black text-white/60 pt-16 pb-8 w-full">
        <div className="w-full px-2 sm:px-6 lg:px-10 xl:px-15 grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          <div className="md:col-span-4">
            <span className="text-xl font-black text-white tracking-tight block mb-3 uppercase">Asset Elixir</span>
            <p className="text-xl text-white/70 leading-relaxed max-w-sm mb-4">
              Thoughtful financial guidance built around your life, your responsibilities, and the future you are working toward.
            </p>
            <span className="inline-block text-xs uppercase font-black tracking-widest text-black bg-yellow-400 px-2.5 py-1 rounded">
              SEBI Registered Investment Adviser
            </span>
          </div>

          <div className="md:col-span-2">
            <h5 className="text-m font-black uppercase tracking-wider text-white mb-4">Links</h5>
            <ul className="space-y-2 text-m">
              <li><a href="#about" className="hover:text-yellow-400 transition">About Us</a></li>
              <li><a href="#services" className="hover:text-yellow-400 transition">Services</a></li>
              <li><a href="#insights" className="hover:text-yellow-400 transition">Financial Insights</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition">Free Portfolio Review</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h5 className="text-m font-black uppercase tracking-wider text-white mb-4">Services Matrix</h5>
            <ul className="space-y-2 text-m">
              <li>Wealth Planning</li>
              <li>Investment Strategy</li>
              <li>Protection Planning</li>
              <li>Retirement Planning</li>
              <li>Tax Optimisation</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h5 className="text-m font-black uppercase tracking-wider text-white mb-4">Contact Info</h5>
            <ul className="space-y-2 text-m text-white/80">
              <li className="font-black text-yellow-400 text-m tracking-wide">+91 70210 89870</li>
              <li>assetelixir@gmail.com </li>
              <li className="text-white/60 leading-normal mt-2">
                B Wing, Arihant Aura, 201<br />
                Thane - Belapur Rd, Turbhe MIDC,<br />
                Turbhe, Navi Mumbai, MH 400703
              </li>
            </ul>
          </div>

        </div>

        <div className="w-full px-4 sm:px-12 lg:px-20 xl:px-32 pt-8 border-t border-white/10 text-center md:flex md:justify-between md:items-center text-[10px] uppercase font-bold tracking-wider text-white/40">
          <p>&copy; {new Date().getFullYear()} Asset Elixir. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            SEBI Reg. No. INAXXXXXXXXXX &bull; Fiduciary Standard Advisory
          </p>
        </div>
      </footer>

      {/* Global CSS Injection for Ticker Animations */}
      <style>{`
        @keyframes ticker {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .animate-ticker {
    animation: ticker 40s linear infinite;
  }
  .animate-ticker:hover {
    animation-play-state: paused;
  }
      `}</style>

    </div>
  );
}