import React from 'react';
import AssetElixirHeader from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function HumanSidePage() {
  const cardImages = {
    card1:  'image-19.png',
    card2:  '03.jpg',
    card3:  '02.jpg',
    card4:  '04.jpg',
    card5:  '05.jpg',
    card6:  '06.jpg',
    card7:  '07.jpg',
    card8:  '08.jpg',
    card9:  '09.jpg',
    card10: '10.jpg',
    card11: '11.jpg',
    card12: '12.jpg',
    card13: '01.jpg',
  };

  return (
    <div className="min-h-screen bg-white text-black text-xl antialiased w-full overflow-x-hidden">
      {/* 1. NAVBAR */}
      <AssetElixirHeader />

      {/* 2. PAGE HERO HEADER (CENTERED MATCHING PDF) */}
      <section className="pt-36 sm:pt-44 pb-12 bg-white w-full text-center">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-full mx-auto flex flex-col items-center">
          <span className="inline-block bg-[#FACC15] text-black font-bold text-sm sm:text-base px-6 py-2 rounded-full mb-6 shadow-xs">
            Explore the Human Side
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-black notoSerifBold leading-tight mb-4">
            Behind every <span className="text-[#ff8d00]">Financial Decision,</span> there is a story.
          </h1>
          <p className="text-[24px] sm:text-[24px] text-black georgiaRegular max-w-7xl leading-relaxed mb-2">
            Money often becomes a reflection of the lives we lead, the responsibilities we carry, and the future we hope to create. These are some of the questions, concerns, and experiences that many people quietly carry through different stages of life.
          </p>
        </div>
      </section>

      {/* 3. HUMAN SIDE STORIES BESPOKE BENTO GRID */}
      <section className="py-8 pb-24 bg-white border-b-2 border-black w-full">
        <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16 max-w-full mx-auto space-y-6">
          
          {/* SECTION BLOCK 1: Row 1 & 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Left Column (2 Cols wide on desktop) */}
            <div className="md:col-span-2 flex flex-col gap-6">
              {/* Card 1 (Wide) */}
              <Link
                href='/humanside/0'
                className="cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.02] w-full h-[460px] sm:h-[480px] rounded-[1.5rem] bg-cover bg-center relative overflow-hidden flex flex-col justify-end p-6 text-white group cursor-pointer shadow-sm"
                style={{ backgroundImage: `url(${cardImages.card1})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="relative z-10">
                  <h3 className="text-[18px] sm:text-[23px] notoSerifBold mb-1 leading-tight text-white">
                    "I Still Regret That Financial Decision. How Do I Move Forward?"
                  </h3>
                  <p className="text-[17px] sm:text-[17px] text-white georgiaRegular leading-relaxed">
                    A bad investment, delayed decisions, or missed opportunities can leave emotional scars that last far longer than the financial loss itself.
                  </p>
                </div>
              </Link>

              {/* Sub-row: Card 3 & 4 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Card 3 */}
                <Link 
                  href='/humanside/13'
                  className="cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.02] w-full h-[400px] rounded-[1.5rem] bg-cover bg-center relative overflow-hidden flex flex-col justify-end p-5 text-white group cursor-pointer shadow-sm"
                  style={{ backgroundImage: `url(${cardImages.card3})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="relative z-10">
                    <h3 className="text-[18px] sm:text-[23px] font-bold notoSerifBold leading-tight text-white">
                      "I Don't Want to Depend on Anyone in Old Age."
                    </h3>
                    <p className="text-[17px] sm:text-[17px] text-white georgiaRegular leading-relaxed">
                      Financial dependence in old age doesn't arrive suddenly — it arrives slowly, through every year a plan was postponed.
                    </p>
                  </div>
                </Link>

                {/* Card 4 */}
                <Link
                  href='/humanside/2'
                  className="cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.02] w-full h-[400px] rounded-[1.5rem] bg-cover bg-center relative overflow-hidden flex flex-col justify-end p-5 text-white group cursor-pointer shadow-sm"
                  style={{ backgroundImage: `url(${cardImages.card4})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="relative z-10">
                    <h3 className="text-[18px] sm:text-[23px] font-bold notoSerifBold leading-tight text-white">
                      "I Lost Everything Once. Can I Rebuild My Life Again?"
                    </h3>
                    <p className="text-[17px] sm:text-[17px] text-white georgiaRegular leading-relaxed">
                      Losing it all doesn't just empty a bank account — it can quietly convince a person that starting over is no longer possible for them.  
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Right Column: Card 2 (Tall spanning 1 column) */}
            <div className="md:col-span-1">
              <Link
                href='/humanside/1' 
                className="cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.02] w-full h-full min-h-[380px] sm:min-h-[506px] rounded-[1.5rem] bg-cover bg-center relative overflow-hidden flex flex-col justify-end p-6 text-white group cursor-pointer shadow-sm"
                style={{ backgroundImage: `url(${cardImages.card2})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="relative z-10">
                  <h3 className="text-[18px] sm:text-[23px] font-bold notoSerifBold mb-2 leading-tight text-white">
                    "I Earn Well. Why Does Money Still Feel Tight?"
                  </h3>
                  <p className="text-[17px] sm:text-[17px] text-white georgiaRegular leading-relaxed">
                    Earning more without a structure in place doesn't solve the problem - it just makes the gap between income and peace feel more confusing.
                  </p>
                </div>
              </Link>
            </div>

          </div>

          {/* SECTION BLOCK 2: Row 3 (Card 5 Wide + Card 6 Standard) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 5 (2 Cols Wide) */}
            <div className="md:col-span-2">
              <Link
                href='/humanside/4'
                className="cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.02] w-full h-[460px] sm:h-[460px] rounded-[1.5rem] bg-cover bg-center relative overflow-hidden flex flex-col justify-end p-6 text-white group cursor-pointer shadow-sm"
                style={{ backgroundImage: `url(${cardImages.card5})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="relative z-10">
                  <h3 className="text-[18px] sm:text-[23px] font-bold notoSerifBold mb-2 leading-tight text-white">
                    "I've Always Managed Everything Alone. What Happens If I'm Not There?"
                  </h3>
                  <p className="text-[17px] sm:text-[17px] text-white georgiaRegular leading-relaxed">
                    Being the strong one for everyone else can mean being the one person whose own future was never fully planned for.
                  </p>
                </div>
              </Link>
            </div>

            {/* Card 6 (1 Col) */}
            <div className="md:col-span-1">
              <Link
                href='/humanside/5' 
                className="cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.02] w-full h-[460px] sm:h-[460px] rounded-[1.5rem] bg-cover bg-center relative overflow-hidden flex flex-col justify-end p-6 text-white group cursor-pointer shadow-sm"
                style={{ backgroundImage: `url(${cardImages.card6})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="relative z-10">
                  <h3 className="text-[18px] sm:text-[23px] font-bold notoSerifBold mb-2 leading-tight text-white">
                    "I Have Worked All My Life. Can I Finally Take That Vacation Now?"
                  </h3>
                  <p className="text-[17px] sm:text-[17px] text-white georgiaRegular leading-relaxed">
                    Decades of discipline can make spending feel wrong - even when you've already earned the right to enjoy what you built.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          {/* SECTION BLOCK 3: Row 4 & 5 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Left Column: Card 7 (Tall spanning 1 column) */}
            <div className="md:col-span-1">
              <Link
                href='/humanside/6'
                className="cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.02] w-full h-full min-h-[1000px] sm:min-h-[1000px] rounded-[1.5rem] bg-cover bg-center relative overflow-hidden flex flex-col justify-end p-6 text-white group cursor-pointer shadow-sm"
                style={{ backgroundImage: `url(${cardImages.card7})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="relative z-10">
                  <h3 className="text-[18px] sm:text-[23px] font-bold notoSerifBold mb-2 leading-tight text-white">
                    "I Can't Handle This Work Pressure Anymore. Can I Retire?"
                  </h3>
                  <p className="text-[17px] sm:text-[17px] text-white georgiaRegular leading-relaxed">
                    A career built on sacrifice can quietly become a prison - and most people don't realise they may already have the key to leave.  
                  </p>
                </div>
              </Link>
            </div>

            {/* Right Column (2 Cols: Card 8, 9, 10) */}
            <div className="md:col-span-2 flex flex-col gap-6">
              {/* Row: Card 8 & 9 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Card 8 */}
                <Link
                  href='/humanside/14'
                  className="cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.02] w-full h-[500px] rounded-[1.5rem] bg-cover bg-center relative overflow-hidden flex flex-col justify-end p-5 text-white group cursor-pointer shadow-sm"
                  style={{ backgroundImage: `url(${cardImages.card8})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="relative z-10">
                    <h3 className="text-[18px] sm:text-[23px] font-bold notoSerifBold leading-tight text-white">
                      "Everyone Depends on Me. What If Something Happens to Me?"
                    </h3>
                    <p className="text-[17px] sm:text-[17px] text-white georgiaRegular leading-relaxed">
                      When you are the financial pillar of an entire family, the one person with the least protection is often the one everyone is counting on the most.  
                    </p>
                  </div>
                </Link>

                {/* Card 9 */}
                <Link 
                  href='/humanside/9'
                  className="cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.02] w-full h-[500px] rounded-[1.5rem] bg-cover bg-center relative overflow-hidden flex flex-col justify-end p-5 text-white group cursor-pointer shadow-sm"
                  style={{ backgroundImage: `url(${cardImages.card9})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="relative z-10">
                    <h3 className="text-[18px] sm:text-[23px] font-bold notoSerifBold leading-tight text-white">
                      "Everyone Thinks I Am Successful. Then Why Am I So Stressed?"
                    </h3>
                    <p className="text-[17px] sm:text-[17px] text-white georgiaRegular leading-relaxed">
                      A high income with no financial structure doesn't build security - it builds a more expensive version of the same anxiety.
                    </p>
                  </div>
                </Link>
              </div>

              {/* Row: Card 10 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Link 
                  href='/humanside/7'
                  className="cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.02] w-full h-[500px] rounded-[1.5rem] bg-cover bg-center relative overflow-hidden flex flex-col justify-end p-5 text-white group cursor-pointer shadow-sm"
                  style={{ backgroundImage: `url(${cardImages.card10})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="relative z-10">
                    <h3 className="text-[18px] sm:text-[23px] font-bold notoSerifBold leading-tight text-white">
                      "I Chose Not to Marry. Can I Still Build a Secure Future?"
                    </h3>
                    <p className="text-[17px] sm:text-[17px] text-white georgiaRegular leading-relaxed">
                      Building a financially secure life alone is entirely possible - but it requires a plan designed for one, not a couples plan with a name crossed out.  
                    </p>
                  </div>
                </Link>

                <Link
                  href='/humanside/8'
                  className="cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.02] w-full h-[500px] rounded-[1.5rem] bg-cover bg-center relative overflow-hidden flex flex-col justify-end p-5 text-white group cursor-pointer shadow-sm"
                  style={{ backgroundImage: `url(${cardImages.card11})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="relative z-10">
                    <h3 className="text-[18px] sm:text-[23px] font-bold notoSerifBold leading-tight text-white">
                      "Work was my identity. Who am I without it?"
                    </h3>
                    <p className="text-[17px] sm:text-[17px] text-white georgiaRegular leading-relaxed">
                      Retirement is not only about replacing income - it is about purpose, routine, identity, and learning to live differently after decades of work.  
                    </p>
                  </div>
                </Link>
              </div>
            </div>

          </div>

          {/* SECTION BLOCK 4: Row 6 (Bottom Split 50/50 Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 11 */}
            <Link
              href='/humanside/12' 
              className="cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.02] w-full h-[580px] rounded-[1.5rem] bg-cover bg-center relative overflow-hidden flex flex-col justify-end p-6 text-white group cursor-pointer shadow-sm"
              style={{ backgroundImage: `url(${cardImages.card13})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="relative z-10">
                <h3 className="text-[18px] sm:text-[23px] font-bold notoSerifBold mb-2 leading-tight text-white">
                  "The Day Work Suddenly Stops"
                </h3>
                <p className="text-[17px] sm:text-[17px] text-white georgiaRegular leading-relaxed">
                  It doesn't begin with a bank statement. It begins with a morning that looks exactly like every other morning - except everything has changed.  
                </p>
              </div>
            </Link>

            {/* Card 12 */}
            <Link
              href='/humanside/10'
              className="cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.02] w-full h-[580px] rounded-[1.5rem] bg-cover bg-center relative overflow-hidden flex flex-col justify-end p-6 text-white group cursor-pointer shadow-sm"
              style={{ backgroundImage: `url(${cardImages.card12})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="relative z-10">
                <h3 className="text-[18px] sm:text-[23px] font-bold notoSerifBold mb-2 leading-tight text-white">
                  "What Happens to My Family If I Am Not Here Tomorrow?"
                </h3>
                <p className="text-[17px] sm:text-[17px] text-white georgiaRegular leading-relaxed">
                  The people who love you the most are often the least prepared for the day they have to manage without you.  
                </p>
              </div>
            </Link>
          </div>

        </div>
      </section>

      {/* 4. FOOTER */}
      <Footer/>
    </div>
  );
}