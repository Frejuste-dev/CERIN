const partners = [
  { name: "Orange Côte d'Ivoire", logo: "Orange" },
  { name: "PwC Côte d'Ivoire", logo: "PwC" },
  { name: "NSIA Banque", logo: "NSIA" },
  { name: "BICICI", logo: "BICICI" },
  { name: "MTN Côte d'Ivoire", logo: "MTN" },
  { name: "Prosuma", logo: "Prosuma" },
  { name: "SG Côte d'Ivoire", logo: "SGCI" },
  { name: "LafargeHolcim CI", logo: "LH" },
];

interface PartnersProps {
  variant?: "default" | "premium";
}

export function Partners({ variant = "default" }: PartnersProps) {
  const isPremium = variant === "premium";

  return (
    <section className={`py-20 ${isPremium ? "bg-[#F5F6F8]" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium mb-4" 
            style={{ background: isPremium ? "white" : "#F0FAF0", color: "#2EA82A", border: "1px solid #D1E8D1" }}
          >
            Réseau professionnel
          </div>
          <h2 className="text-gray-900 mb-3" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800 }}>
            {isPremium ? "Partenaires & Employeurs" : "Nos partenaires entreprises"}
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Un réseau de +120 entreprises partenaires pour vos stages, alternances et premières embauches après l'obtention de votre diplôme.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
          {partners.map((p) => (
            <div
              key={p.name}
              className="flex items-center justify-center h-20 rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:shadow-md cursor-pointer group"
              style={{ background: "white", border: "1.5px solid #E8F5E8" }}
              title={p.name}
            >
              <span
                className="font-black text-sm tracking-tight transition-colors group-hover:text-[#7AC943]"
                style={{ fontFamily: "'Poppins', sans-serif", color: "#9CA3AF" }}
              >
                {p.logo}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4" style={{ background: isPremium ? "white" : "linear-gradient(135deg, #F0FAF0, #FFF8D6)", border: isPremium ? "1px solid #E5E7EB" : "none" }}>
          <div>
            <p className="font-bold text-gray-800 mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>Recruteur ou Entreprise ?</p>
            <p className="text-sm text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>Accédez à nos viviers de talents ou proposez des offres de stage exclusives.</p>
          </div>
          <a
            href="#contact"
            className="shrink-0 px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:shadow-md hover:-translate-y-0.5"
            style={{ background: "#2EA82A", color: "white", fontFamily: "'Poppins', sans-serif" }}
          >
            Devenir partenaire
          </a>
        </div>
      </div>
    </section>
  );
}
