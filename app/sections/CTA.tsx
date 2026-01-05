import Image from 'next/image'
import React from 'react'

export default function CTA() {
  return (
    <div className="w-full flex flex-col items-center relative min-h-[500px] md:min-h-[600px]">
      {/* Background Image */}
      <Image 
        src={"/images/CTA.png"} 
        alt="CTA Background" 
        fill
        className="object-cover"
        priority
      />
      
      
      <div className="relative gap-10 flex flex-col items-center justify-center w-full min-h-[500px] md:min-h-[600px] py-20 px-4">
        <p className='font-semibold text-4xl'>Start With A Calmer Way To Track Your Day</p>
        <button className="font-[family-name:var(--font-dm-sans)] bg-[#0E241FFF] text-white px-8 py-1 rounded-full hover:bg-gray-800 transition-colors text-lg whitespace-nowrap flex items-center gap-2">
            Try VitaAI
        </button>
      </div>
    </div>
  )
}
