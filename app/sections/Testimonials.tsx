"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      photo: "/images/Customer1.png",
      name: "Maya Fernandez",
      role: "Product Manager",
      feedback:
        "I’ve tried dozens of trackers, but they only gave me numbers. This one connects the dots, why I feel tired, why my mood drops, why my productivity dips. It feels like having a personal health coach who knows me better than I do. This changed my daily routine instantly.",
    },
    {
      photo: "/images/Customer2.png",
      name: "Poook Nwosu",
      role: "Software Engineer",
      feedback:
        "I never realized how much dehydration was affecting my sleep and stress levels. The insights are simple, human, and surprisingly accurate. I open it every morning like I’m checking in with someone who actually cares. It’s become part of my wellness ritual.",
    },

    {
      photo: "/images/Customer3.png",
      name: "Alex Johnson",
      role: "UX Designer",
      feedback:
        "VitaAI has been a game changer for me. It’s like having a wellness coach in my pocket. The personalized insights help me make better choices every day.",
    },
  ];

  useEffect(() => {
    // Change testimonial every 2 seconds (2000ms)
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="w-full flex flex-col items-center min-h-screen py-12 md:py-16 lg:py-20 bg-[#F8F9FA]">
      <div className="flex items-center w-full px-4 md:w-[90%] lg:w-[80%]">
        <div
          className="flex flex-col items-center text-center bg-white gap-4 md:gap-6 rounded-2xl px-6 py-8 md:px-16 md:py-10 lg:px-40 lg:p-10 transition-opacity duration-300 ease-in-out w-full"
          key={currentIndex}
        >
          <Image
            src={currentTestimonial.photo}
            alt={currentTestimonial.name}
            width={1440}
            height={1440}
            className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full mb-2 md:mb-4"
          />
          <p className="mt-2 text-lg md:text-2xl lg:text-4xl font-[family-name:var(--font-satoshi)] leading-relaxed md:leading-normal text-[#495057]">
            {"\""}{currentTestimonial.feedback}{"\""}
          </p>
          <div className="mt-4 md:mt-6 lg:mt-8">
            <h3 className="font-semibold text-sm md:text-base text-[#919191]">{currentTestimonial.name}</h3>
            <p className="text-xs md:text-sm text-gray-500 text-[#919191]">{currentTestimonial.role.toUpperCase()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
