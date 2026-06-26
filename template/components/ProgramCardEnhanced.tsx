import { ArrowRight } from "lucide-react";

export interface ProgramCardEnhancedProps {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  level: string;
  spotsRemaining: number;
  href: string;
}

export function ProgramCardEnhanced({
  title,
  description,
  image,
  duration,
  level,
  spotsRemaining,
  href,
}: ProgramCardEnhancedProps) {
  const isLowSpots = spotsRemaining <= 5;

  return (
    <a
      href={href}
      className="group relative block h-full rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2"
      style={{ focusColor: "#2EA82A" }}
      role="article"
      aria-label={`Programme: ${title}. ${spotsRemaining} places disponibles.`}
    >
      {/* Card container */}
      <div 
        className="relative h-full rounded-2xl overflow-hidden bg-white"
        style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
      >
        {/* Image container */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <img 
            src={image}
            alt={`Image du programme ${title}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
           onError={(e) => {
    e.currentTarget.src = '/images/placeholder.jpg';
    e.currentTarget.onerror = null;
  }} />

          {/* Gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Scarcity badge - top right */}
          <div
            className={`absolute top-4 right-4 px-3 py-2 rounded-lg text-xs font-bold text-white transition-all ${
              isLowSpots ? "animate-pulse" : ""
            }`}
            style={{
              background: isLowSpots ? "#EF4444" : "#10B981",
            }}
            role="region"
            aria-label={`${spotsRemaining} places restantes`}
          >
            {spotsRemaining} places
          </div>

          {/* Duration badge - top left */}
          <div
            className="absolute top-4 left-4 px-3 py-2 rounded-lg text-xs font-semibold text-gray-900"
            style={{ background: "rgba(255,255,255,0.95)" }}
          >
            {duration}
          </div>
        </div>

        {/* Content section */}
        <div className="p-6 flex flex-col h-[calc(100%-12rem)]">
          {/* Level badge */}
          <div className="mb-3 inline-block">
            <span
              className="px-2.5 py-1 rounded-full text-xs font-semibold"
              style={{ background: "#F0FAF0", color: "#2EA82A" }}
            >
              {level}
            </span>
          </div>

          {/* Title */}
          <h3
            className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-[#2EA82A] transition-colors"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            {title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3" style={{ fontFamily: "'Inter', sans-serif" }}>
            {description}
          </p>

          {/* CTA Button - ENHANCED NEW */}
          <div className="mt-auto">
            <button
              onClick={(e) => {
                // Allow link to work but could add analytics here
                e.preventDefault();
                window.location.href = href;
              }}
              className="w-full py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 hover:gap-3 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                background: "#2EA82A",
                color: "white",
                fontFamily: "'Poppins', sans-serif",
              }}
              aria-label={`En savoir plus sur ${title}`}
            >
              En savoir plus
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Accessibility focus indicator */}
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-200 opacity-0 group-focus-visible:opacity-100"
          style={{ border: "2px solid #2EA82A" }}
          aria-hidden="true"
        />
      </div>
    </a>
  );
}

export interface ProgramCardsGridProps {
  programs: ProgramCardEnhancedProps[];
}

export function ProgramCardsGrid({ programs }: ProgramCardsGridProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12 md:mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4"
            style={{ background: "#F0FAF0", color: "#2EA82A", border: "1px solid #D1E8D1" }}
          >
            Nos formations
          </div>
          <h2
            className="text-gray-900 mb-4"
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700 }}
          >
            Découvrez nos programmes
          </h2>
          <p
            className="text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Trouvez le programme qui correspond à vos aspirations et objectifs professionnels.
          </p>
        </div>

        {/* Programs grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {programs.map((program) => (
            <ProgramCardEnhanced key={program.id} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
}
