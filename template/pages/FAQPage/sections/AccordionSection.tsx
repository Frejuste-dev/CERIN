import React, { useState } from "react";
import { FAQItem } from "../types/faq.types";
import { FAQAccordionItem } from "../components/FAQAccordionItem";
import { motion, AnimatePresence } from "framer-motion";
import { FileSearch } from "lucide-react";

interface AccordionSectionProps {
  items: FAQItem[];
  isSearching: boolean;
}

export const AccordionSection: React.FC<AccordionSectionProps> = ({
  items,
  isSearching
}) => {
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  const popularItems = items.filter(item => item.isPopular);
  const otherItems = items.filter(item => !item.isPopular);

  if (items.length === 0) {
    return (
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-gray-50 rounded-3xl flex items-center justify-center mx-auto mb-6 text-gray-200">
            <FileSearch size={40} />
          </div>
          <h3 className="text-xl font-black text-[#0B0B0B] mb-2" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Aucune question trouvée
          </h3>
          <p className="text-gray-400">
            Essayez avec d'autres mots-clés ou parcourez nos catégories.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="popLayout">
          {/* Popular Questions Sub-section */}
          {popularItems.length > 0 && !isSearching && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="mb-12"
            >
              <h2 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                <span className="w-8 h-px bg-gray-100" />
                Questions Populaires
                <span className="flex-grow h-px bg-gray-100" />
              </h2>
              <div className="space-y-4">
                {popularItems.map((item) => (
                  <FAQAccordionItem
                    key={item.id}
                    question={item.question}
                    answer={item.answer}
                    isPopular={true}
                    isOpen={openItemId === item.id}
                    onToggle={() => handleToggle(item.id)}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {/* Remaining or Search results */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            {popularItems.length > 0 && otherItems.length > 0 && !isSearching && (
              <h2 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-8 flex items-center gap-3">
                <span className="w-8 h-px bg-gray-100" />
                Autres Questions
                <span className="flex-grow h-px bg-gray-100" />
              </h2>
            )}
            <div className="space-y-4">
              {(isSearching ? items : otherItems).map((item) => (
                <FAQAccordionItem
                  key={item.id}
                  question={item.question}
                  answer={item.answer}
                  isPopular={item.isPopular && isSearching}
                  isOpen={openItemId === item.id}
                  onToggle={() => handleToggle(item.id)}
                  categoryLabel={isSearching ? item.category : undefined}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
