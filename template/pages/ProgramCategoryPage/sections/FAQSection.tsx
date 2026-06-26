import React from "react";
import { FAQItem } from "../types/category.types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion";

interface FAQSectionProps {
  faq: FAQItem[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({ faq }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-[#0B0B0B] mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Questions Fréquentes
          </h2>
          <p className="text-gray-500">
            Tout ce que vous devez savoir sur nos formations dans cette catégorie.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faq.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-gray-100 rounded-3xl px-6 py-2 data-[state=open]:border-[#7AC943] transition-all"
            >
              <AccordionTrigger className="text-left font-bold text-[#0B0B0B] hover:no-underline hover:text-[#7AC943]">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-500 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
