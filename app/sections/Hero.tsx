import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="w-full flex flex-col items-center min-h-screen px-4 md:px-8 lg:px-20 py-4 md:py-6 lg:py-0 bg-[#F8F9FA]">
      <div className="flex flex-col items-center text-center min-h-screen w-full bg-white rounded-bl-3xl rounded-br-3xl md:rounded-bl-4xl md:rounded-br-4xl py-8 md:py-10 lg:py-0">
        <div className="flex flex-col items-center text-center mt-6 md:mt-8 lg:mt-10 px-4">
        <Image
          src={"/images/heroImage.png"}
          alt="Hero Image"
          width={1440}
          height={600}
          className="w-full max-w-[300px] h-auto md:max-w-[600px] lg:max-w-[949px] lg:h-[533px]"
        />
      </div>

      <div className="px-4 md:px-8 lg:px-0">
        <div>
          <p className="font-[family-name:var(--font-noto-serif-georgian)] text-3xl md:text-4xl lg:text-5xl text-center">
            Understand your health,
          </p>
          <p className="font-[family-name:var(--font-charm)] text-[#2D7967] text-3xl md:text-4xl lg:text-5xl text-center font-bold mt-2">
            without the overwhelm
          </p>
        </div>
        <div className="mt-4 md:mt-5">
          <p className="text-sm md:text-base lg:text-lg text-center">
            VitaAI helps you make sense of your wellness and stay organized with{" "}
            calm, easy-to-understand guidance
          </p>
        </div>
      </div>

      {/* buttons container */}
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8 lg:mt-4 px-4 w-full sm:w-auto justify-center">
        <button className="font-[family-name:var(--font-dm-sans)] bg-[#0E241FFF] text-white px-6 py-3 md:px-8 md:py-3 rounded-full hover:bg-gray-800 transition-colors text-base md:text-lg whitespace-nowrap flex items-center justify-center gap-2">
            Try VitaAI
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
        </button>

        <button className="font-[family-name:var(--font-dm-sans)] border border-black px-4 py-3 md:px-4 md:py-2 rounded-full text-sm md:text-base">
            Learn How It Works
        </button>
      </div>
      </div>
    </div>
  );
}
