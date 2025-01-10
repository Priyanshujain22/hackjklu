import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";
import React from 'react';
import Header from '../Header/Header';
import faqData from "@/data/faq.json";
// import styles from "./FAQ.module.css";

const FAQ = () => {
  return (
    <section className="pt-10" id="faq">
      <h2 className="text-center my-10">
        <Header text="FAQ" />
      </h2>
      <Accordion type="single" defaultValue="item-0" className="px-10" >
        {faqData.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700">
            <AccordionTrigger className="text-lg font-bold py-4 flex justify-between items-center hover:text-[#10dc3c]">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="py-4 text-lg text-gray-300">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export default FAQ;
