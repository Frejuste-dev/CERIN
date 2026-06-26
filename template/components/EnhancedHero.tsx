import { ArrowRight, Clock } from "lucide-react";

export function EnhancedHero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{
        background: "linear-gradient(150deg, #0F2010 0%, #1A3A1A 40%, #2EA82A 100%)",
      }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "#F5C800" }}
      />
      <div
        className="absolute bottom-0 left-[-100px] w-[400px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "#F5C800" }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Trust line - NEW */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold mb-4"
              style={{ background: "rgba(245,200,0,0.15)", color: "#F5C800", border: "1px solid rgba(245,200,0,0.4)" }}
              role="region"
              aria-label="Trust indicator"
            >
              ✓ 5000+ étudiants formés | 92% taux de réussite
            </div>

            {/* Main headline */}
            <h1
              className="text-white leading-tight mb-4"
              style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(2.4rem, 5vw, 3.8rem)", fontWeight: 800, lineHeight: 1.15 }}
            >
              Trouvez votre{" "}
              <span style={{ color: "#F5C800" }}>parcours académique</span>{" "}
              au sein du Groupe CERIN
            </h1>

            {/* Urgency message - NEW */}
            <div
              className="flex items-center gap-2 mb-6 p-3 rounded-lg"
              style={{ background: "rgba(245,200,0,0.1)" }}
              role="alert"
              aria-live="polite"
            >
              <Clock size={18} style={{ color: "#F5C800" }} />
              <span className="text-green-100 text-sm font-medium">
                Les inscriptions ferment le 31 mars 2025 • Moins de 15 places disponibles
              </span>
            </div>

            <p className="text-green-100 text-lg leading-relaxed mb-10 max-w-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
              Du collège au Supérieur, découvrez une offre de formation complète qui prépare aux métiers de demain. Rejoignez une communauté d'étudiants engagés.
            </p>

            {/* CTA Buttons - ENHANCED */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {/* Primary CTA - Dominant */}
              <a
                href="#apply"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ 
                  background: "#F5C800", 
                  color: "#0F2010",
                  fontFamily: "'Poppins', sans-serif",
                  focusColor: "#0F2010"
                }}
                aria-label="Candidater maintenant - Inscription aux formations"
              >
                Candidater maintenant
                <ArrowRight size={20} />
              </a>

              {/* Secondary CTA - Subtle */}
              <a
                href="#programmes"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-base border-2 transition-all duration-200 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2"
                style={{ 
                  borderColor: "rgba(255,255,255,0.4)", 
                  color: "white",
                  fontFamily: "'Poppins', sans-serif"
                }}
                aria-label="Explorer tous les programmes disponibles"
              >
                Explorer les formations
              </a>
            </div>

            {/* Mini stats - existing pattern preserved */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/20">
              {[
                { val: "4500+", label: "Étudiants" },
                { val: "92%", label: "Réussite" },
                { val: "60+", label: "Formations" },
              ].map(({ val, label }) => (
                <div key={label} className="flex flex-col">
                  <div className="text-white font-bold text-2xl" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    {val}
                  </div>
                  <div className="text-green-300 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - visual card stack */}
          <div className="hidden lg:block relative">
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <img 
                  src="https://source.unsplash.com/600x400/?school,students"
                  alt="Étudiants du Groupe CERIN en classe"
                  className="w-full h-56 object-cover rounded-xl mb-4"
                 onError={(e) => {
    e.currentTarget.src = '/images/placeholder.jpg';
    e.currentTarget.onerror = null;
  }} />
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-800" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      Campus Principal
                    </p>
                    <p className="text-sm text-gray-500">Casablanca, Maroc</p>
                  </div>
                  <div 
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "#F0FAF0", color: "#2EA82A" }}
                  >
                    Inscriptions ouvertes
                  </div>
                </div>
              </div>

              {/* Floating badge - urgency */}
              <div className="absolute -top-4 -right-4 bg-[#F5C800] text-[#0F2010] rounded-2xl px-5 py-3 shadow-lg animate-pulse">
                <div className="text-2xl font-black" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  15
                </div>
                <div className="text-xs font-semibold">Places restantes</div>
              </div>

              {/* Bottom floating card */}
              <div className="absolute -bottom-6 -left-6 bg-[#1A3A1A] text-white rounded-2xl px-5 py-4 shadow-xl flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "#2EA82A" }}
                >
                  ✓
                </div>
                <div>
                  <div className="font-bold text-sm" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    250+ Diplômés
                  </div>
                  <div className="text-xs text-green-300">Promotion 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
          <path d="M0 80L1440 80L1440 20C1200 70 960 0 720 40C480 80 240 10 0 50L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
