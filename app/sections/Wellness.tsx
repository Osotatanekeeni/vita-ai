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
    <div className="w-full flex flex-col items-center h-[100vh] bg-[#F8F9FA]">
      <div>
        <p className="font-[family-name:var(--font-noto-serif-georgian)] text-5xl text-center">
          Your Daily Wellness,
        </p>
        <p className="font-[family-name:var(--font-charm)] text-[#2D7967] text-5xl text-center font-bold mt-2">
          Explained Clearly
        </p>
      </div>

      <div className=" flex items-end justify-end gap-20 mt-8">
        {/* Health Tracking - with transition (4 images) */}
        <div className="relative w-auto h-[320px]">
          <Image
            src={healthTracking[healthTrackingIndex]}
            alt="Health Tracking"
            width={1440}
            height={600}
            className="w-auto h-[320px] border-2 transition-opacity duration-300 ease-in-out"
            key={`health-${healthTrackingIndex}`}
          />
        </div>

        <div className="flex items-end justify-end gap-10 mt-8">
          {/* Personalized Insights - with transition (3 images) */}
          <div className="relative w-auto h-[320px]">
            <Image
              src={personalizedInsights[insightsIndex]}
              alt="Personalized Insights"
              width={1440}
              height={600}
              className="w-auto h-[320px] border-2 transition-opacity duration-300 ease-in-out"
              key={`insights-${insightsIndex}`}
            />
          </div>

          {/* Smart Recommendations - with transition (3 images) */}
          <div className="relative w-auto h-[350px]">
            <Image
              src={smartRecommendations[recommendationsIndex]}
              alt="Smart Recommendations"
              width={1440}
              height={600}
              className="w-auto h-[350px] border-2 transition-opacity duration-300 ease-in-out"
              key={`smart-${recommendationsIndex}`}
            />
          </div>
        </div>
      </div>

      <div className="text-left flex flex-col gap-4 mt-10">
        <p className="font-[family-name:var(--font-satoshi)] text-left text-2xl">
          Your <span className="font-bold">health companion</span> runs quietly in the background,
          <br />
          observing your daily rhythm, sleep patterns, hydration
          <br />
          levels, and activity trends.
        </p>
        <p className="font-[family-name:var(--font-satoshi)] text-left text-2xl">
          It builds a <span className="font-bold">unique wellness</span> profile for you, then highlights
          <br />
          what&apos;s changing in real time.
        </p>
        <p className="font-[family-name:var(--font-satoshi)] text-left text-2xl">
          Whether it&apos;s low energy, poor recovery, or a pattern you
          <br />
          missed, the system translates it into <span className="font-bold">simple insights</span> you can
          <br />
          act on immediately.
        </p>
      </div>
    </div>
  );
}
