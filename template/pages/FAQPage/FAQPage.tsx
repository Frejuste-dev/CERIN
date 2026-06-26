import React, { useState, useMemo, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { HeroSection } from "./sections/HeroSection";
import { SearchSection } from "./sections/SearchSection";
import { CategoriesSection } from "./sections/CategoriesSection";
import { AccordionSection } from "./sections/AccordionSection";
import { CtaSection } from "./sections/CtaSection";
import { MOCK_FAQ, FAQ_CATEGORIES } from "./data/mock-faq";
import { FAQItem } from "./types/faq.types";
import { useDebounce } from "../../hooks/useDebounce";

export const FAQPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategoryId, setActiveCategoryId] = useState("all");
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Sync state with URL hash
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && FAQ_CATEGORIES.some(cat => cat.id === hash)) {
      setActiveCategoryId(hash);
    } else if (hash === "all" || !hash) {
      setActiveCategoryId("all");
    }
  }, [location.hash]);

  const handleCategoryChange = (id: string) => {
    setActiveCategoryId(id);
    setSearchQuery(""); // Clear search when switching categories
    navigate(`#${id}`, { replace: true });
  };

  const isSearching = debouncedSearchQuery.trim().length > 0;

  const filteredItems = useMemo(() => {
    let items = MOCK_FAQ;

    if (isSearching) {
      const query = debouncedSearchQuery.toLowerCase();
      return items.filter(
        item => 
          item.question.toLowerCase().includes(query) || 
          item.answer.toLowerCase().includes(query)
      );
    }

    if (activeCategoryId !== "all") {
      const categoryLabel = FAQ_CATEGORIES.find(cat => cat.id === activeCategoryId)?.label;
      return items.filter(item => item.category === categoryLabel);
    }

    return items;
  }, [debouncedSearchQuery, activeCategoryId, isSearching]);

  // SEO & JSON-LD
  useEffect(() => {
    document.title = "FAQ — Questions Fréquentes | Groupe CERI";
    
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', "Trouvez les réponses à toutes vos questions sur le Groupe CERI : inscriptions, scolarité, diplômes reconnus et vie étudiante à Abidjan.");

    // FAQ Schema preparation
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": MOCK_FAQ.slice(0, 10).map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer.replace(/<[^>]*>?/gm, '') // Strip HTML for JSON-LD
        }
      }))
    };

    let scriptElement = document.getElementById('faq-json-ld');
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = 'faq-json-ld';
      scriptElement.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptElement);
    }
    scriptElement.innerHTML = JSON.stringify(faqSchema);

    return () => {
      // Optional: cleanup
    };
  }, []);

  return (
    <main className="bg-white min-h-screen">
      <HeroSection totalCount={MOCK_FAQ.length} />
      
      <SearchSection 
        value={searchQuery}
        onChange={setSearchQuery}
        onClear={() => setSearchQuery("")}
        resultCount={filteredItems.length}
        isSearching={isSearching}
      />

      <CategoriesSection 
        categories={FAQ_CATEGORIES}
        activeCategoryId={activeCategoryId}
        onCategoryChange={handleCategoryChange}
        isHidden={isSearching}
      />

      <AccordionSection 
        items={filteredItems}
        isSearching={isSearching}
      />

      <CtaSection />
    </main>
  );
};
