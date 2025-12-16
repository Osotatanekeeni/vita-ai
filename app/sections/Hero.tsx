import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="w-full flex flex-col items-center h-[100vh]">
      <div className="flex flex-col items-center text-center mt-10">
        <Image
          src={"/images/heroImage.png"}
          alt="Hero Image"
          width={1440}
          height={600}
          className="w-[949px] h-[533px]"
        />
      </div>

      <div className="">
        <div>
          <p className="font-[family-name:var(--font-noto-serif-georgian)] text-5xl text-center">
            Understand your health,
          </p>
          <p className="font-[family-name:var(--font-charm)] text-[#2D7967] text-5xl text-center font-bold mt-2">
            without the overwhelm
          </p>
        </div>
        <div>
          <p className="mt-5 w-full">
            VitaAI helps you make sense of your wellness and stay organized with{" "}
          </p>
          <p className="text-center">calm, easy-to-understand guidance </p>
        </div>
      </div>

      {/* buttons container */}
      <div className="flex mt-4">
        <button className="font-[family-name:var(--font-dm-sans)] bg-[#0E241FFF] text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors text-lg whitespace-nowrap flex items-center gap-2">
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

        <button className="font-[family-name:var(--font-dm-sans)] border border-black px-4 py-2 rounded-full ml-4">
            Learn How It Works
        </button>
      </div>
    </div>
  );
}
