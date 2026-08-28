import React from 'react';
import { humanSideStories } from '@/data/humanSideData';
import { notFound } from 'next/navigation';

export default async function HumanSideX({params}) {
  const { id } = await params;
  const storyData = humanSideStories.find((item) => item.id === id) || humanSideStories[0];

  if (!storyData) {
    notFound(); 
  }

  return (
    <div className="relative min-h-screen w-full bg-black text-white overflow-x-hidden flex flex-col justify-between">
      {/* 1. BACKGROUND IMAGE WITH GRADIENT OVERLAY */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${storyData.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/30 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/50" />
      </div>

      
      {/* <div className="relative z-20 w-full"> */}
        {/* <AssetElixirHeader /> */}
      {/* </div> */}

      {/* 3. MAIN STORY CONTENT */}
      <main className="relative z-10 w-full px-6 sm:px-12 lg:px-20 max-w-full mx-auto pt-36 pb-20 flex-1 flex flex-col justify-center">
        <div className="max-w-2xl lg:max-w-3xl space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-bold notoSerifBold leading-[1.15] text-white">
            {storyData.title}
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-white/90 georgiaRegular leading-relaxed whitespace-pre-line pt-2">
            {storyData.story}
          </p>

          {storyData.highlightText && (
            <p className="text-sm sm:text-base font-black tracking-wide text-[#FACC15] uppercase notoSerifBold pt-2">
              {storyData.highlightText}
            </p>
          )}

          {storyData.calloutBody && (
            <div className="relative pl-6 py-3 border-l-10 border-[#FACC15] bg-black/40 backdrop-blur-sm rounded-r-2xl max-w-2xl mt-8">
              {storyData.calloutTitle && (
                <span className="text-[18px] sm:text-[18px] font-black uppercase tracking-wider text-[#FACC15] block mb-2 notoSerifBold">
                  {storyData.calloutTitle}
                </span>
              )}
              <p className="text-[17px] sm:text-[17px] text-white/85 georgiaRegular leading-relaxed">
                {storyData.calloutBody}
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}