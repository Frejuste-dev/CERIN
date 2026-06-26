import React from "react";
import { motion } from "framer-motion";
import { NewsArticle } from "../types/article.types";

interface ContentSectionProps {
  article: NewsArticle;
}

export const ContentSection: React.FC<ContentSectionProps> = ({ article }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          className="prose prose-lg max-w-none"
        >
          <div 
            className="article-content"
            style={{ fontFamily: "'Inter', sans-serif" }}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </motion.div>

        <style>{`
          .article-content {
            color: #4B5563;
            line-height: 1.8;
          }
          .article-content h2 {
            font-family: 'Poppins', sans-serif;
            font-weight: 900;
            color: #0B0B0B;
            font-size: 2rem;
            margin-top: 3rem;
            margin-bottom: 1.5rem;
          }
          .article-content h3 {
            font-family: 'Poppins', sans-serif;
            font-weight: 800;
            color: #0B0B0B;
            font-size: 1.5rem;
            margin-top: 2rem;
            margin-bottom: 1rem;
          }
          .article-content p {
            margin-bottom: 1.5rem;
          }
          .article-content blockquote {
            border-left: 6px solid #7AC943;
            background: #F0FAF0;
            padding: 2rem;
            border-radius: 0 1.5rem 1.5rem 0;
            font-style: italic;
            font-weight: 600;
            color: #0B0B0B;
            margin: 3rem 0;
            font-size: 1.25rem;
          }
          .article-content ul {
            list-style-type: none;
            padding: 0;
            margin: 2rem 0;
          }
          .article-content li {
            position: relative;
            padding-left: 1.5rem;
            margin-bottom: 0.75rem;
          }
          .article-content li::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0.6em;
            width: 8px;
            height: 8px;
            background-color: #7AC943;
            border-radius: 50%;
          }
        `}</style>
      </div>
    </section>
  );
};
