"use client";

import React, { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // First question open by default

  const faqs = [
    {
      question: "What does the VitaAI actually do?",
      answer:
        "Vita AI helps you stay aware of your daily habits by organizing simple information like hydration, sleep rhythm, and activity into clear summaries and gentle reminders.",
    },
    {
      question: "Is my data private?",
      answer:
        "Yes. Your data is handled with care and transparency. You stay in control of what’s tracked, and nothing is shared without your consent.",
    },
    {
      question: "Does this replace medical advice?",
      answer:
        "No. The assistant is designed to support everyday wellness and organization, It does not provide medical diagnoses or treatment advice.",
    },
    {
      question: "Can I turn features off?",
      answer:
        "Yes, you have full control over which features to enable or disable. Customize VitaAI to fit your wellness journey and preferences.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="w-full flex flex-col items-center py-20 px-4 bg-[#F8F9FA] h-[100vh]">
      <div className="max-w-4xl w-full h-[100vh]">
        {/* Heading */}
        <h2 className="text-center mb-12">
          <span className="font-[family-name:var(--font-noto-serif-georgian)] text-5xl">
            Frequently Asked{" "}
          </span>
          <span className="font-[family-name:var(--font-charm)] text-[#2D7967] text-5xl font-bold">
            Questions
          </span>
        </h2>

        {/* FAQ Items */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg bg-white"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors rounded-lg"
              >
                <span className="font-[family-name:var(--font-satoshi)] text-xl font-medium">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 ml-4">
                  {openIndex === index ? (
                    // Minus icon
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-600"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="8" y1="12" x2="16" y2="12" />
                    </svg>
                  ) : (
                    // Plus icon
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-600"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="16" />
                      <line x1="8" y1="12" x2="16" y2="12" />
                    </svg>
                  )}
                </div>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 pb-6 pt-0">
                  <p className="font-[family-name:var(--font-satoshi)] text-gray-600 text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
