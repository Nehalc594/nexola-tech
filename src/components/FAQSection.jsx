import React, { useState } from 'react';

const faqs = [
  {
    question: 'What types of companies do you work with?',
    answer: 'We serve startups, mid-sized businesses, and enterprises across healthcare, finance, SaaS, and retail.',
  },
  {
    question: 'Do you offer custom security assessments?',
    answer: 'Yes, we tailor all assessments based on your infrastructure, compliance needs, and risk profile.',
  },
  {
    question: 'Is there a contract required for services?',
    answer: 'We offer both one-time audits and ongoing support — no long-term commitment unless you need one.',
  },
  {
    question: "What services does Nexola Tech offer?",
    answer: "We offer cybersecurity consulting, managed IT security, compliance support, and cloud security."
  },
  {
    question: "How quickly can you onboard a new client?",
    answer: "We can typically start engagement within 24–48 hours after our initial discovery call."
  },
  {
    question: "Do you provide 24/7 support?",
    answer: "Yes, 24/7 threat monitoring and response is included in our Professional and Enterprise plans."
  },
  {
    question: "Can you help us meet regulatory compliance?",
    answer: "Yes — we specialize in NIST, ISO27001, SOC 2, HIPAA, and GDPR alignment."
  },
  {
    question: "What makes Nexola Tech different?",
    answer: "We're fast, security-focused, and led by experienced professionals who’ve secured enterprise and critical infrastructure systems."
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-10">Frequently Asked Questions</h2>
      <div className="max-w-2xl mx-auto space-y-4 text-left">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-800 hover:bg-gray-50 transition"
            >
              {faq.question}
              <span className="text-green-600">{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-600 transition">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
