import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TestimonialCard } from "./TestimonialCard";
import type { TestimonialCardData } from "./TestimonialCard";

const defaultTestimonials: TestimonialCardData[] = [
  {
    id: 1,
    name: "Sofia Benali",
    role: "BTS MCO – Promotion 2023",
    company: "Responsable commerciale chez Prosuma",
    avatar: "https://source.unsplash.com/100x100/?person,portrait",
    quote:
      "Le Groupe CERIN m'a donné les outils concrets pour réussir dans le monde professionnel. La qualité des intervenants et le suivi personnalisé font toute la différence. J'ai trouvé un emploi dès la fin de mon BTS.",
    stars: 5,
  },
  {
    id: 2,
    name: "Youssef Karimi",
    role: "Bachelor Informatique – Promotion 2022",
    company: "Développeur Full-Stack chez InnoTech",
    avatar: "https://source.unsplash.com/100x100/?person,portrait",
    quote:
      "La formation Bachelor en informatique au CERIN est vraiment excellente. Les projets pratiques et les partenariats avec les entreprises nous ont permis d'acquérir une expérience concrète avant même l'obtention du diplôme.",
    stars: 5,
  },
  {
    id: 3,
    name: "Imane Touzani",
    role: "Master Gestion de Projet – Promotion 2024",
    company: "Chef de projet chez PwC Côte d'Ivoire",
    avatar: "https://source.unsplash.com/100x100/?person,portrait",
    quote:
      "Le master au CERIN m'a ouvert des portes incroyables. La rigueur académique combinée aux études de cas réels m'ont préparé à relever les défis du cabinet dès le premier jour.",
    stars: 5,
  },
  {
    id: 4,
    name: "Mehdi Ouali",
    role: "Bac Pro Systèmes Numériques – 2023",
    company: "Technicien réseau chez Orange Côte d'Ivoire",
    avatar: "https://source.unsplash.com/100x100/?person,portrait",
    quote:
      "L'alternance organisée par le CERIN m'a permis d'être directement opérationnel en entreprise. Les professeurs sont disponibles et passionnés par leur métier. Je recommande vivement cette école.",
    stars: 5,
  },
];

interface TestimonialCarouselProps {
  variant?: "default" | "premium";
  testimonials?: TestimonialCardData[];
}

export function TestimonialCarousel({ variant = "default", testimonials: customTestimonials }: TestimonialCarouselProps) {
  const displayTestimonials = customTestimonials || defaultTestimonials;
  const isPremium = variant === "premium";
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const prev = () => {
    setCurrent((c) => (c - 1 + displayTestimonials.length) % displayTestimonials.length);
    setAutoPlay(false);
  };

  const next = () => {
    setCurrent((c) => (c + 1) % displayTestimonials.length);
    setAutoPlay(false);
  };

  // Auto-scroll every 6 seconds
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % displayTestimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [autoPlay, displayTestimonials.length]);

  return (
    <section 
      className={`py-16 md:py-24 ${isPremium ? "bg-white" : ""}`}
      style={!isPremium ? { background: "#F8FBF8" } : {}}
      aria-labelledby="testimonials-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <div 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{ background: isPremium ? "#F5F6F8" : "#F0FAF0", color: "#2EA82A", border: "1px solid #D1E8D1" }}
            role="region"
            aria-label="Section label"
          >
            Témoignages
          </div>
          <h2 
            id="testimonials-title"
            className="text-gray-900 mb-3"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800 }}
          >
            {isPremium ? "Ils ont réussi avec CERIN" : "Ce que disent nos diplômés"}
          </h2>
          <p 
            className="text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Découvrez le parcours inspirant de nos anciens étudiants et comment leur formation a propulsé leur carrière.
          </p>
        </div>

        {/* Carousel container */}
        <div className="max-w-4xl mx-auto">
          {/* Testimonial display */}
          <div className="mb-8 md:mb-10">
            <TestimonialCard
              testimonial={displayTestimonials[current]}
              isActive={true}
            />
          </div>

          {/* Navigation controls */}
          <div 
            className="flex items-center justify-between gap-4 flex-wrap"
            role="region"
            aria-label="Navigation du carousel"
          >
            {/* Dots navigation */}
            <div className="flex gap-2" role="tablist">
              {displayTestimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrent(i);
                    setAutoPlay(false);
                  }}
                  className="rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
                  style={{
                    width: i === current ? "32px" : "10px",
                    height: "10px",
                    background: i === current ? "#2EA82A" : "#D1E8D1",
                  }}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Aller au témoignage ${i + 1} de ${displayTestimonials.length}`}
                  title={`Témoignage de ${displayTestimonials[i].name}`}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-2 ml-auto">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all hover:border-[#2EA82A] hover:text-[#2EA82A] focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ borderColor: "#D1D5DB", color: "#6B7280" }}
                aria-label="Témoignage précédent"
                title="Voir le témoignage précédent"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ background: "#2EA82A", color: "white" }}
                aria-label="Témoignage suivant"
                title="Voir le témoignage suivant"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Screen reader info */}
          <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
            Témoignage {current + 1} de {displayTestimonials.length}: {displayTestimonials[current].name}
          </div>
        </div>
      </div>
    </section>
  );
}
