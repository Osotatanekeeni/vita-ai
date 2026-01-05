import Image from 'next/image'
import React from 'react'

export default function HowItWorks() {
  return (
    <div className="w-full flex flex-col items-left h-[100vh] px-50">
        <div className=' flex flex-row justify-between gap-6'>
            <div className='w-[40%]'>
                <p className="text-left flex flex-col gap-4 font-[family-name:var(--font-noto-serif-georgian)] text-5xl text-center">We Make Your Health <span className="font-[family-name:var(--font-charm)] text-[#2D7967] text-5xl text-left font-bold mt-2">Easier To Understand</span></p>
            </div>

            <div className='w-[45%]'>
                <p className="font-[family-name:var(--font-satoshi)] text-left text-2xl">From sleep to hydration to energy shifts, our companion observes what matters and turns it into clear, gentle guidance you act on every day.</p>
            </div>
        </div>
        <div className='border-b-1 w-[45%] mt-10 mb-6'>
            <p className='font-[family-name:var(--font-satoshi)] text-2xl'>How It Works</p>
        </div>

        <div className='w-full flex flex-row justify-between flex-wrap'>
            <div className='w-[30%] flex flex-col gap-4 mb-6'>
                <Image src={"/images/AskNaturally.png"} alt="Ask Naturally Image" width={1440} height={600} className="w-full" />
                <div className='flex flex-col gap-2'>
                    <p className='text-left font-[family-name:var(--font-noto-serif-georgian)] text-2xl font-bold'>Ask Naturally</p>
                    <p className='text-left font-[family-name:var(--font-satoshi)] text-lg'>Type your questions, VitaAI understands and responds with calm, clear information to guide your wellness routines</p>
                </div>
            </div>

            <div className='w-[30%] flex flex-col gap-4 mb-6 lg:mt-20'>
                <Image src={"/images/ClearGuidance.png"} alt="Get Clear Guidance Image" width={1440} height={600} className="w-full" />
                <div className='flex flex-col gap-2'>
                    <p className='text-left font-[family-name:var(--font-noto-serif-georgian)] text-2xl font-bold'>Get Clear Guidance</p>
                    <p className='text-left font-[family-name:var(--font-satoshi)] text-lg'>Type your questions, VitaAI understands and responds with calm, clear information to guide your wellness routines</p>
                </div>
            </div>

            <div className='w-[30%] flex flex-col gap-4 mb-6 lg:mt-40'>
                <Image src={"/images/LiveYourLife.png"} alt="Live Your Life Image" width={1440} height={600} className="w-full" />
                <div className='flex flex-col gap-2'>
                    <p className='text-left font-[family-name:var(--font-noto-serif-georgian)] text-2xl font-bold'>Live Your Life</p>
                    <p className='text-left font-[family-name:var(--font-satoshi)] text-lg'>Type your questions, VitaAI understands and responds with calm, clear information to guide your wellness routines</p>
                </div>
            </div>
        </div>
    </div>
  )
}
