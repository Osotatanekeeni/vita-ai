'use client';

import React, { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="z-50 px-4 py-3 md:px-6 md:py-4 lg:px-12">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="font-[family-name:var(--font-tabular)] text-xl md:text-2xl lg:text-3xl">
          vitaAI
        </div>

        {/* Right side - Combined Menu and CTA */}
        <div 
          className="flex items-center bg-gray-100 rounded-full px-3 py-2 md:px-4 md:py-2.5 lg:px-6 lg:py-3 gap-3 md:gap-4 lg:gap-6 transition-all duration-700 ease-in-out"
          onMouseEnter={() => setIsMenuOpen(true)}
          onMouseLeave={() => setIsMenuOpen(false)}
        >
          {/* Hamburger Menu - Hide when menu is open */}
          {!isMenuOpen && (
            <button
              className="flex items-center justify-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              <div className="flex flex-col gap-1 md:gap-1.5">
                <span className="block w-5 md:w-6 h-0.5 bg-gray-900 rounded-full"></span>
                <span className="block w-5 md:w-6 h-0.5 bg-gray-900 rounded-full"></span>
                <span className="block w-5 md:w-6 h-0.5 bg-gray-900 rounded-full"></span>
                <span className="block w-5 md:w-6 h-0.5 bg-gray-900 rounded-full"></span>
              </div>
            </button>
          )}
          
          {/* Menu Links - Expand on Hover */}
          <div className={`flex items-center gap-3 md:gap-4 lg:gap-6 overflow-hidden transition-all duration-700 ease-in-out ${
            isMenuOpen ? 'max-w-[500px] opacity-100' : 'max-w-0 opacity-0'
          }`}>
            <a
              href="#features"
              className="font-[family-name:var(--font-dm-sans)] text-gray-900 hover:text-gray-700 transition-colors whitespace-nowrap text-sm md:text-base lg:text-lg"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="font-[family-name:var(--font-dm-sans)] text-gray-900 hover:text-gray-700 transition-colors whitespace-nowrap text-sm md:text-base lg:text-lg"
            >
              How it Works
            </a>
            <a
              href="#faq"
              className="font-[family-name:var(--font-dm-sans)] text-gray-900 hover:text-gray-700 transition-colors whitespace-nowrap text-sm md:text-base lg:text-lg"
            >
              FAQ
            </a>
          </div>
          
          <button className="font-[family-name:var(--font-dm-sans)] bg-gray-900 text-white px-4 py-2 md:px-6 md:py-2.5 lg:px-8 lg:py-3 rounded-full hover:bg-gray-800 transition-colors text-sm md:text-base lg:text-lg whitespace-nowrap">
            Try VitaAI
          </button>
        </div>
      </div>


    </nav>
  );
}
