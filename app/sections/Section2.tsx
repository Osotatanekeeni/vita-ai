import Image from 'next/image'
import React from 'react'

export default function Section2() {
  return (
    <div className="w-full flex flex-col items-center min-h-[50%] py-12 md:py-16 lg:py-20 px-4 md:px-8 bg-[#F8F9FA]">
        <div className='w-full max-w-6xl'>
          <div className="mb-6 md:mb-8 lg:mb-10">
        <div>
          <p className="font-[family-name:var(--font-noto-serif-georgian)] text-2xl md:text-4xl lg:text-5xl text-center px-2">
            What If Your Wellness Had A Guide You Could,
          </p>
          <p className="font-[family-name:var(--font-charm)] text-[#2D7967] text-2xl md:text-4xl lg:text-5xl text-center font-bold mt-2">
            talk to anytime ?
          </p>
        </div>
      </div>

      <div className="w-full">
        <Image src={"/images/section2Image.png"} alt="Section2 Image" width={1440} height={600} className="w-full h-auto" />
      </div>
        </div>
    </div>
  )
}
