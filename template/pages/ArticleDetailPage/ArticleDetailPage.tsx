import React, { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router";
import { HeroSection } from "./sections/HeroSection";
import { ContentSection } from "./sections/ContentSection";
import { AuthorSection } from "./sections/AuthorSection";
import { RelatedArticlesSection } from "./sections/RelatedArticlesSection";
import { CtaSection } from "./sections/CtaSection";

import { MOCK_NEWS } from "../ActualitesPage/data/mock-news";

export const ArticleDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const article = useMemo(() => {
    return MOCK_NEWS.find((a) => a.slug === slug);
  }, [slug]);

  const relatedArticles = useMemo(() => {
    if (!article) return [];
    return MOCK_NEWS.filter(
      (a) => a.category === article.category && a.id !== article.id
    ).slice(0, 3);
  }, [article]);

  useEffect(() => {
    if (article) {
      document.title = `${article.seoTitle} | Groupe CERI`;
      // Canonical and Meta Description would be handled here in a real Next.js app 
      // or with React Helmet. Since we don't have Helmet in package.json, 
      // we'll stick to title for now.
      window.scrollTo(0, 0);
    }
  }, [article]);

  // 404 GUARD
  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="max-w-md w-full text-center">
          <div className="w-24 h-24 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-8 text-4xl font-black shadow-inner">
            404
          </div>
          <h1 className="text-3xl font-black text-[#0B0B0B] mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Article non trouvé
          </h1>
          <p className="text-gray-500 mb-10 leading-relaxed">
            Désolé, l'article que vous recherchez n'existe pas ou a été déplacé vers une nouvelle adresse.
          </p>
          <Link
            to="/actualites"
            className="inline-block px-10 py-4 bg-[#7AC943] text-white font-bold rounded-2xl shadow-xl shadow-[#7AC943]/20 hover:scale-105 transition-transform"
          >
            Retour aux actualités
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-white">
      {/* SECTION 1 — HERO */}
      <HeroSection article={article} />
      
      {/* SECTION 2 — CONTENT */}
      <ContentSection article={article} />
      
      {/* SECTION 3 — AUTHOR */}
      <AuthorSection author={article.author} />
      
      {/* SECTION 4 — RELATED ARTICLES */}
      <RelatedArticlesSection articles={relatedArticles} />

      {/* SECTION 5 — CTA */}
      <CtaSection />
    </main>
  );
};
