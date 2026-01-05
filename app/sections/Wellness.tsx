"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Wellness() {
  const [healthTrackingIndex, setHealthTrackingIndex] = useState(0);
  const [insightsIndex, setInsightsIndex] = useState(0);
  const [recommendationsIndex, setRecommendationsIndex] = useState(0);

  const smartRecommendations = [
    "/images/SmartRecommendationsFade1.png",
    "/images/SmartRecommendationsFade2.png",
    "/images/SmartRecommendationsFade3.png",
  ];

  const healthTracking = [
    "/images/HealthTrackingFade1.png",
    "/images/HealthTrackingFade2.png",
    "/images/HealthTrackingFade3.png",
    "/images/HealthTrackingFade4.png",
  ];

  const personalizedInsights = [
    "/images/PersonalizedInsightsFade1.png",
    "/images/PersonalizedInsightsFade2.png",
    "/images/PersonalizedInsightsFade3.png",
  ];

  useEffect(() => {
    // Delay: 800ms, then change to next image
    const interval = setInterval(() => {
      setHealthTrackingIndex((prevIndex) => (prevIndex + 1) % 4); // 4 images for health tracking
      setInsightsIndex((prevIndex) => (prevIndex + 1) % 3); // 3 images for insights
      setRecommendationsIndex((prevIndex) => (prevIndex + 1) % 3); // 3 images for recommendations
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="features" className="w-full flex flex-col items-center min-h-screen py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-[#F8F9FA]">
      <div>
        <p className="font-[family-name:var(--font-noto-serif-georgian)] text-3xl md:text-4xl lg:text-5xl text-center">
          Your Daily Wellness,
        </p>
        <p className="font-[family-name:var(--font-charm)] text-[#2D7967] text-3xl md:text-4xl lg:text-5xl text-center font-bold mt-2">
          Explained Clearly
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-end justify-center gap-6 md:gap-10 lg:gap-20 mt-6 md:mt-8 w-full">
        {/* Health Tracking - with transition (4 images) */}
        <div className="relative w-full md:w-auto h-[250px] md:h-[280px] lg:h-[320px]">
          <Image
            src={healthTracking[healthTrackingIndex]}
            alt="Health Tracking"
            width={1440}
            height={600}
            className="w-full md:w-auto h-[250px] md:h-[280px] lg:h-[320px] border-2 transition-opacity duration-300 ease-in-out object-cover md:object-contain"
            key={`health-${healthTrackingIndex}`}
          />
        </div>

        <div className="flex flex-col md:flex-row items-end justify-center gap-6 md:gap-6 lg:gap-10 w-full md:w-auto">
          {/* Personalized Insights - with transition (3 images) */}
          <div className="relative w-full md:w-auto h-[250px] md:h-[280px] lg:h-[320px]">
            <Image
              src={personalizedInsights[insightsIndex]}
              alt="Personalized Insights"
              width={1440}
              height={600}
              className="w-full md:w-auto h-[250px] md:h-[280px] lg:h-[320px] border-2 transition-opacity duration-300 ease-in-out object-cover md:object-contain"
              key={`insights-${insightsIndex}`}
            />
          </div>

          {/* Smart Recommendations - with transition (3 images) */}
          <div className="relative w-full md:w-auto h-[280px] md:h-[310px] lg:h-[350px]">
            <Image
              src={smartRecommendations[recommendationsIndex]}
              alt="Smart Recommendations"
              width={1440}
              height={600}
              className="w-full md:w-auto h-[280px] md:h-[310px] lg:h-[350px] border-2 transition-opacity duration-300 ease-in-out object-cover md:object-contain"
              key={`smart-${recommendationsIndex}`}
            />
          </div>
        </div>
      </div>

      <div className="text-left flex flex-col gap-3 md:gap-4 mt-8 md:mt-10 px-4 md:px-0 max-w-4xl">
        <p className="font-[family-name:var(--font-satoshi)] text-left text-base md:text-lg lg:text-2xl">
          Your <span className="font-bold">health companion</span> runs quietly in the background,
          {" "}observing your daily rhythm, sleep patterns, hydration
          {" "}levels, and activity trends.
        </p>
        <p className="font-[family-name:var(--font-satoshi)] text-left text-base md:text-lg lg:text-2xl">
          It builds a <span className="font-bold">unique wellness</span> profile for you, then highlights
          {" "}what&apos;s changing in real time.
        </p>
        <p className="font-[family-name:var(--font-satoshi)] text-left text-base md:text-lg lg:text-2xl">
          Whether it&apos;s low energy, poor recovery, or a pattern you
          {" "}missed, the system translates it into <span className="font-bold">simple insights</span> you can
          {" "}act on immediately.
        </p>
      </div>
    </div>
  );
}
