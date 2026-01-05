import Image from 'next/image'
import React from 'react'

export default function Section2() {
  return (
    <div className="w-full flex flex-col items-center h-[100vh] bg-[#F8F9FA]">
        <div className='mt-20'>
          <div className="">
        <div>
          <p className="font-[family-name:var(--font-noto-serif-georgian)] text-5xl text-center">
            What If Your Wellness Had A Guide You Could,
          </p>
          <p className="font-[family-name:var(--font-charm)] text-[#2D7967] text-5xl text-center font-bold mt-2">
            talk to anytime ?
          </p>
        </div>
      </div>

      <div>
        <Image src={"/images/section2Image.png"} alt="Section2 Image" width={1440} height={600} className="w-full" />
      </div>
        </div>
    </div>
  )
}
