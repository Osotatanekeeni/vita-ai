import Image from 'next/image'
import React from 'react'

export default function CTA() {
  return (
    <div className="w-full flex flex-col items-center relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
      {/* Background Image */}
      <Image 
        src={"/images/CTA.png"} 
        alt="CTA Background" 
        fill
        className="object-cover"
        priority
      />
      
      
      <div className="relative gap-6 md:gap-10 flex flex-col items-center justify-center w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] py-12 md:py-16 lg:py-20 px-4 md:px-8">
        <p className='font-semibold text-2xl md:text-3xl lg:text-4xl text-center max-w-3xl'>Start With A Calmer Way To Track Your Day</p>
        <button className="font-[family-name:var(--font-dm-sans)] bg-[#0E241FFF] text-white px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-gray-800 transition-colors text-base md:text-lg whitespace-nowrap flex items-center gap-2">
            Try VitaAI
        </button>
      </div>
    </div>
  )
}
