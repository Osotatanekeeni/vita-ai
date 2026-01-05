import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[#0E241F] text-white w-full p-6 md:p-12 lg:p-20'>
      <div className='w-full mx-auto px-4 md:px-10 lg:px-20 border-b-1 border-b-[#1E293B] pb-6 md:pb-10 flex flex-col md:flex-row justify-between gap-8 md:gap-6'>
        <div className='w-full md:w-1/2 lg:w-100 flex flex-col gap-4'>
            <p className='font-[family-name:var(--font-tabular)] text-3xl md:text-4xl'>vitaAI</p>
            <p className='text-[#868E96] text-sm md:text-base'>A calm, supportive assistant designed to help you stay consistent with everyday habits</p>
        </div>

        <div className='flex flex-col sm:flex-row justify-between gap-8 sm:gap-10 md:gap-16 lg:gap-20'>
            <ul className='flex flex-col gap-2'>
                <li className='text-lg md:text-xl mb-4 md:mb-6 font-semibold'>Product</li>
                <li className='text-sm md:text-base text-[#868E96] hover:text-white transition-colors cursor-pointer'>Features</li>
                <li className='text-sm md:text-base text-[#868E96] hover:text-white transition-colors cursor-pointer'>How it works</li>
                <li className='text-sm md:text-base text-[#868E96] hover:text-white transition-colors cursor-pointer'>Dashboard</li>
            </ul>

            <ul className='flex flex-col gap-2'>
                <li className='text-lg md:text-xl mb-4 md:mb-6 font-semibold'>Company</li>
                <li className='text-sm md:text-base text-[#868E96] hover:text-white transition-colors cursor-pointer'>About</li>
                <li className='text-sm md:text-base text-[#868E96] hover:text-white transition-colors cursor-pointer'>Privacy & Trust</li>
                <li className='text-sm md:text-base text-[#868E96] hover:text-white transition-colors cursor-pointer'>FAQ</li>
            </ul>

            <ul className='flex flex-col gap-2'>
                <li className='text-lg md:text-xl mb-4 md:mb-6 font-semibold'>Legal</li>
                <li className='text-sm md:text-base text-[#868E96] hover:text-white transition-colors cursor-pointer'>Privacy Policy</li>
                <li className='text-sm md:text-base text-[#868E96] hover:text-white transition-colors cursor-pointer'>Terms of Service</li>
            </ul>

        </div>
      </div>


      <div className='w-full mt-6 md:mt-10 text-center items-center'>
        <p className='text-[#64748B] text-center text-sm md:text-base'>© 2025 VitaAI. All rights reserved.</p>
      </div>


    </div>
  )
}
