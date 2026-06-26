import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useProgramCategory } from "./hooks/useProgramCategory";
import { HeroSection } from "./sections/HeroSection";
import { StatisticsSection } from "./sections/StatisticsSection";
import { DescriptionSection } from "./sections/DescriptionSection";
import { ProgramsGridSection } from "./sections/ProgramsGridSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { FAQSection } from "./sections/FAQSection";
import { AdmissionCTASection } from "./sections/AdmissionCTASection";
import { WhatsAppCTASection } from "./sections/WhatsAppCTASection";
import { FloatingAdmissionCTA } from "./components/FloatingAdmissionCTA";
import { motion, useScroll, useTransform } from "framer-motion";

export const ProgramCategoryPage: React.FC = () => {
  const { category, programs, isLoading, error } = useProgramCategory();
  const navigate = useNavigate();
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const { scrollY } = useScroll();

  // Show floating CTA after scrolling past hero
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setShowFloatingCTA(latest > 600);
    });
  }, [scrollY]);

  useEffect(() => {
    if (category) {
      // SEO Implementation
      document.title = category.seoTitle;
      
      const metaTags = [
        { name: "description", content: category.seoDescription },
        { property: "og:title", content: category.seoTitle },
        { property: "og:description", content: category.seoDescription },
        { property: "og:image", content: category.heroImage },
        { property: "og:type", content: "website" },
        { property: "og:url", content: window.location.href },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: category.seoTitle },
        { name: "twitter:description", content: category.seoDescription },
        { name: "twitter:image", content: category.heroImage },
      ];

      metaTags.forEach(tag => {
        let element = document.querySelector(tag.name ? `meta[name="${tag.name}"]` : `meta[property="${tag.property}"]`);
        if (!element) {
          element = document.createElement('meta');
          if (tag.name) element.setAttribute('name', tag.name);
          if (tag.property) element.setAttribute('property', tag.property);
          document.head.appendChild(element);
        }
        element.setAttribute('content', tag.content);
      });

      // JSON-LD Structured Data
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": category.name,
        "description": category.description,
        "url": window.location.href,
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Accueil", "item": window.location.origin },
            { "@type": "ListItem", "position": 2, "name": "Formations", "item": `${window.location.origin}/formations` },
            { "@type": "ListItem", "position": 3, "name": category.name, "item": window.location.href }
          ]
        },
        "mainEntity": {
          "@type": "ItemList",
          "numberOfItems": programs.length,
          "itemListElement": programs.map((p, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "Course",
              "name": p.title,
              "description": p.shortDescription,
              "provider": {
                "@type": "EducationalOrganization",
                "name": "Groupe CERI",
                "sameAs": window.location.origin
              }
            }
          }))
        }
      };

      let scriptElement = document.getElementById('json-ld');
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.id = 'json-ld';
        scriptElement.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptElement);
      }
      scriptElement.innerHTML = JSON.stringify(structuredData);

      window.scrollTo(0, 0);
    }
  }, [category, programs]);

  if (isLoading) return <div className="min-h-screen bg-white" />;

  if (error || !category) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-4 text-center">
        <div>
          <h1 className="text-4xl font-black text-[#0B0B0B] mb-4">Catégorie non trouvée</h1>
          <p className="text-gray-500 mb-8">La catégorie demandée n'existe pas ou a été déplacée.</p>
          <Link to="/formations" className="px-10 py-5 bg-[#7AC943] text-white font-black rounded-2xl">
            Retour au catalogue
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-white relative">
      <HeroSection category={category} />
      <StatisticsSection category={category} />
      <DescriptionSection category={category} />
      <ProgramsGridSection programs={programs} />
      <TestimonialsSection testimonials={category.testimonials} />
      <FAQSection faq={category.faq} />
      <AdmissionCTASection />
      <WhatsAppCTASection categoryName={category.name} />
      
      <FloatingAdmissionCTA isVisible={showFloatingCTA} />
    </main>
  );
};
