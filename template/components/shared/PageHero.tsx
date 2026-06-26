import { Link } from "react-router";
import { ChevronRight } from "lucide-react";

const G = "#7AC943";

interface Crumb { label: string; to?: string }

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  breadcrumbs?: Crumb[];
  accent?: string;
  children?: React.ReactNode;
}

export function PageHero({ title, subtitle, image, breadcrumbs, accent = G, children }: PageHeroProps) {
  return (
    <section
      className="relative pt-32 pb-20 overflow-hidden"
      style={{ background: "#0B0B0B" }}
    >
      {/* Background image */}
      {image && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover opacity-40"
            onError={(e) => {
              e.currentTarget.src = '/images/placeholder.svg';
              e.currentTarget.onerror = null;
            }}
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(11,11,11,0.70) 40%, rgba(11,11,11,0.40))" }} />
        </div>
      )}
      {/* Decorative circle */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-5 blur-3xl pointer-events-none" style={{ background: accent }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {breadcrumbs && (
          <div className="flex items-center gap-1.5 text-xs text-gray-500 mb-6">
            <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={11} />
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-white transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-gray-300">{crumb.label}</span>
                )}
              </span>
            ))}
          </div>
        )}
        <h1
          className="text-white mb-4 leading-tight"
          style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontWeight: 800 }}
        >
          {title}
        </h1>
        {/* Accent underline */}
        <div className="w-16 h-1 rounded-full mb-5" style={{ background: accent }} />
        {subtitle && (
          <p className="text-gray-300 text-lg max-w-2xl leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
