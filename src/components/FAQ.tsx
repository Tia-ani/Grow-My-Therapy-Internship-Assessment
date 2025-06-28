import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Do you accept insurance?",
      answer: "No, but a superbill is provided for self-submission to your insurance provider. This allows you to potentially receive reimbursement for out-of-network benefits."
    },
    {
      question: "Are online sessions available?",
      answer: "Yes—all virtual sessions are conducted via Zoom. Virtual sessions are available Monday, Wednesday, and Friday from 1 PM to 5 PM."
    },
    {
      question: "What is your cancellation policy?",
      answer: "24-hour notice is required for cancellations. Cancellations made with less than 24 hours notice may be subject to the full session fee."
    },
    {
      question: "What are your office hours?",
      answer: "In-person sessions are available Tuesday and Thursday from 10 AM to 6 PM. Virtual sessions via Zoom are available Monday, Wednesday, and Friday from 1 PM to 5 PM."
    },
    {
      question: "What is the cost of therapy?",
      answer: "Individual sessions are $200 for 50 minutes. Couples sessions are $240 for 75 minutes. Payment is due at the time of service."
    },
    {
      question: "What technology do you use for virtual sessions?",
      answer: "All virtual sessions are conducted through Zoom, a secure and HIPAA-compliant video conferencing platform. You'll receive a secure meeting link prior to your appointment."
    },
    {
      question: "Do you offer in-person sessions?",
      answer: "Yes, in-person sessions are available at my office located at 1287 Maplewood Drive, Los Angeles, CA 90026. In-person appointments are scheduled on Tuesdays and Thursdays."
    },
    {
      question: "What are the benefits of private pay therapy?",
      answer: "Private pay therapy offers several advantages including no insurance limitations on session frequency, complete confidentiality (no insurance reporting), flexible treatment approaches, and the ability to focus solely on your therapeutic goals without external constraints."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Find answers to common questions about therapy services and policies
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-emerald-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-emerald-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Have a question that's not answered here?
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
          >
            Contact Dr. Blake
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;