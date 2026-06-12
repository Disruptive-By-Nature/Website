import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQItem } from '../types';

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-slate-200 rounded-sm overflow-hidden bg-white">
          <button
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
          >
            <span className="font-display font-bold text-lg text-slate-900 uppercase tracking-tight">
              {item.question}
            </span>
            <span className={`material-symbols-outlined text-primary transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
              expand_more
            </span>
          </button>
          <AnimatePresence>
            {activeIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-6 pb-6 pt-0 text-slate-500 font-light leading-relaxed">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
