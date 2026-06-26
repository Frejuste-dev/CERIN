import { ArrowRight, Phone } from "lucide-react";

interface FinalCtaBannerProps {
  variant?: "default" | "premium";
  title?: string;
  subtitle?: string;
}

export function FinalCtaBanner({ variant = "default", title, subtitle }: FinalCtaBannerProps) {
  const isPremium = variant === "premium";

  return (
    <section 
      className={`py-16 md:py-24 relative overflow-hidden ${isPremium ? "rounded-[2rem] mx-4 md:mx-8 mb-16" : ""}`}
      style={{ background: isPremium ? "linear-gradient(135deg, #0B0B0B, #1A1A1A)" : "#F5C800" }}
      aria-labelledby="final-cta-title"
    >
      {/* Decorative elements */}
      {!isPremium ? (
        <>
          <div
            className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-20 pointer-events-none"
            style={{ background: "#2EA82A" }}
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full opacity-20 pointer-events-none"
            style={{ background: "#0F2010" }}
            aria-hidden="true"
          />
        </>
      ) : (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #7AC943 0%, transparent 70%)" }}
          aria-hidden="true"
        />
      )}

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <div className="text-center">
          <h2
            id="final-cta-title"
            className={`${isPremium ? "text-white" : "text-gray-900"} mb-4`}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            {title || (isPremium ? "Prêt à rejoindre l'élite ?" : "Prêt à transformer votre carrière ?")}
          </h2>

          <p
            className={`${isPremium ? "text-gray-300" : "text-gray-800"} text-lg md:text-xl mb-8 max-w-2xl mx-auto`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {subtitle || (isPremium 
              ? "Les admissions pour la prochaine rentrée sont ouvertes. Déposez votre candidature en quelques minutes."
              : "Rejoignez plus de 5 000 étudiants qui ont déjà choisi le Groupe CERI. Postulez maintenant et accédez à nos formations prestigieuses.")}
          </p>

          {/* Urgency message */}
          <div
            className="inline-block mb-8 px-4 py-2 rounded-lg font-semibold text-sm"
            style={{ 
              background: isPremium ? "rgba(122, 201, 67, 0.1)" : "rgba(0,0,0,0.1)", 
              color: isPremium ? "#7AC943" : "#0F2010" 
            }}
            role="alert"
            aria-live="polite"
          >
            ⏰ Admissions ouvertes • Places limitées • Session 2026-2027
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            {/* Primary CTA - High contrast */}
            <a
              href="#apply"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                background: "#7AC943",
                color: "white",
                fontFamily: "'Poppins', sans-serif",
                boxShadow: "0 4px 20px rgba(122,201,67,0.3)",
              }}
              aria-label="Candidater maintenant pour rejoindre le groupe CERI"
            >
              Candidater maintenant
              <ArrowRight size={20} />
            </a>

            {/* Secondary CTA - Contact */}
            <a
              href="#brochure"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base border-2 transition-all duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{
                borderColor: isPremium ? "white" : "#0B0B0B",
                color: isPremium ? "white" : "#0B0B0B",
                fontFamily: "'Poppins', sans-serif",
              }}
              aria-label="Télécharger la brochure"
            >
              Télécharger la brochure
            </a>
          </div>

          {/* Trust line */}
          <p
            className={`mt-8 ${isPremium ? "text-gray-400" : "text-gray-800"} text-sm font-medium`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            ✓ Réponse garantie sous 48h | ✓ Diplômes reconnus par l'État
          </p>
        </div>
      </div>
    </section>
  );
}
