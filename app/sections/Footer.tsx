import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[#0E241F] text-white w-full p-20'>
      <div className='w-full mx-auto px-20 border-b-1 border-b-[#1E293B] pb-10 flex flex-col md:flex-row justify-between gap-6'>
        <div className='w-100 flex flex-col gap-4'>
            <p className='font-[family-name:var(--font-tabular)] text-4xl'>vitaAI</p>
            <p className='text-[#868E96]'>A calm, supportive assistant designed to help you stay consistent with everyday habits</p>
        </div>

        <div className=' flex flex-row justify-between gap-20'>
            <ul className='flex flex-col gap-2'>
                <li className='text-xl mb-6'>Product</li>
                <li>Features</li>
                <li>How it works</li>
                <li>Dashboard</li>
            </ul>

            <ul className='flex flex-col gap-2'>
                <li className='text-xl mb-6'>Company</li>
                <li>About</li>
                <li>Privacy & Trust</li>
                <li>FAQ</li>
            </ul>

            <ul className='flex flex-col gap-2'>
                <li className='text-xl mb-6'>Legal</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
            </ul>

        </div>
      </div>


      <div className='w-full mt-10 text-center items-center'>
        <p className='text-[#64748B] text-center'>© 2025 VitaAI. All rights reserved.</p>
      </div>


    </div>
  )
}
