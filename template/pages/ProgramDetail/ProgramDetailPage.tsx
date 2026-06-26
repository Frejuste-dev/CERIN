import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useProgram } from "./hooks/useProgram";
import { Link } from "react-router";

// Sections
import { HeroSection } from "./sections/HeroSection";
import { QuickFactsSection } from "./sections/QuickFactsSection";
import { WhyCeriSection } from "./sections/WhyCeriSection";
import { OverviewSection } from "./sections/OverviewSection";
import { StudentJourneySection } from "./sections/StudentJourneySection";
import { CurriculumSection } from "./sections/CurriculumSection";
import { CareerSection } from "./sections/CareerSection";
import { PartnersSection } from "./sections/PartnersSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { AdmissionSection } from "./sections/AdmissionSection";
import { TuitionSection } from "./sections/TuitionSection";
import { RelatedProgramsSection } from "./sections/RelatedProgramsSection";
import { FAQSection } from "./sections/FAQSection";
import { FinalCTASection } from "./sections/FinalCTASection";

// Page Components
import { FloatingDesktopCTA } from "./components/FloatingDesktopCTA";
import { StickyMobileCTA } from "./components/StickyMobileCTA";

// Global Components
import { TrustStatsSection } from "../../components";

export const ProgramDetailPage: React.FC = () => {
  const { program, loading, error } = useProgram();
  const [showStickyCTA, setShowStickyCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (program) {
      document.title = `${program.title} | Groupe CERI`;
      window.scrollTo(0, 0);
    }
  }, [program]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#7AC943] border-t-transparent rounded-full animate-spin" />
          <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">Chargement du programme...</p>
        </div>
      </div>
    );
  }

  if (error || !program) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F6F8] px-4">
        <div className="max-w-md w-full bg-white p-12 rounded-[2.5rem] shadow-xl text-center">
          <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl font-black">404</span>
          </div>
          <h1 className="text-2xl font-black text-[#0B0B0B] mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Programme non trouvé
          </h1>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Désolé, le programme que vous recherchez n'existe pas ou a été déplacé.
          </p>
          <Link 
            to="/formations" 
            className="inline-block px-8 py-4 bg-[#7AC943] text-white font-bold rounded-xl shadow-lg shadow-[#7AC943]/20 hover:scale-105 transition-transform"
          >
            Voir nos formations
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-white relative">
      {/* 1. Hero Section */}
      <HeroSection program={program} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col xl:flex-row gap-12">
          
          <div className="flex-grow min-w-0">
            {/* 2. Quick Facts */}
            <QuickFactsSection program={program} />
            
            {/* 3. Why Choose CERI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <WhyCeriSection />
            </motion.div>

            {/* 4. Program Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <OverviewSection program={program} />
            </motion.div>

            {/* Trust Indicator (Implicit requirement for premium feel) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <TrustStatsSection variant="premium" />
            </motion.div>

            {/* 5. Student Journey Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <StudentJourneySection />
            </motion.div>

            {/* 6. Curriculum */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <CurriculumSection program={program} />
            </motion.div>

            {/* 7. Career Opportunities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <CareerSection program={program} />
            </motion.div>

            {/* 8. Partner Companies */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <PartnersSection />
            </motion.div>

            {/* 9. Testimonials */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <TestimonialsSection program={program} />
            </motion.div>

            {/* 10. Admission Process */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <AdmissionSection program={program} />
            </motion.div>

            {/* 11. Tuition & Fees */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <TuitionSection program={program} />
            </motion.div>

            {/* 12. Related Programs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <RelatedProgramsSection program={program} />
            </motion.div>

            {/* 13. FAQ */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <FAQSection program={program} />
            </motion.div>

            {/* 14. Final CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              className="pb-24"
            >
              <FinalCTASection />
            </motion.div>
          </div>

          {/* Desktop Floating Sidebar (FloatingDesktopCTA) */}
          <FloatingDesktopCTA program={program} />

        </div>
      </div>

      {/* Sticky Mobile CTA (StickyMobileCTA) */}
      <StickyMobileCTA program={program} isVisible={showStickyCTA} />
    </main>
  );
};
