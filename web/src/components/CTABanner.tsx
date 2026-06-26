import { ArrowRight, CheckCircle } from "lucide-react";

const perks = [
  "Admissions simplifiées en ligne",
  "Réponse sous 48h",
  "Bourses disponibles",
  "Accompagnement personnalisé",
];

export function CTABanner() {
  return (
    <section id="apply" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #0F2010 0%, #1A5A1A 50%, #2EA82A 100%)" }} />
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl" style={{ background: "#FEFF01" }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10 blur-3xl" style={{ background: "#FEFF01" }} />
      {/* Dots pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: "rgba(245,200,0,0.15)", color: "#F5C800", border: "1px solid rgba(245,200,0,0.3)" }}>
              Candidatures 2025-2026 ouvertes
            </div>
            <h2 className="text-white mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, lineHeight: 1.2 }}>
              Rejoignez le Groupe CERIN dès aujourd'hui
            </h2>
            <p className="text-green-200 text-lg leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
              Déposez votre dossier en ligne et faites le premier pas vers votre avenir. Nos conseillers sont là pour vous accompagner à chaque étape.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-10">
              {perks.map((perk) => (
                <div key={perk} className="flex items-center gap-2">
                  <CheckCircle size={16} style={{ color: "#F5C800", flexShrink: 0 }} />
                  <span className="text-green-100 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{perk}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="#candidature"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-105 hover:shadow-xl"
                style={{ background: "#F5C800", color: "#0F2010", fontFamily: "'Poppins', sans-serif" }}
              >
                Déposer ma candidature
                <ArrowRight size={17} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm border-2 transition-all duration-200 hover:bg-white/10"
                style={{ border: "2px solid rgba(255,255,255,0.4)", color: "white", fontFamily: "'Poppins', sans-serif" }}
              >
                Parler à un conseiller
              </a>
            </div>
          </div>

          {/* Form card */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <h3 className="text-gray-800 mb-2" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.3rem", fontWeight: 700 }}>
              Pré-inscription rapide
            </h3>
            <p className="text-gray-500 text-sm mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              Remplissez ce formulaire et recevez votre guide d'admission.
            </p>

            <div className="space-y-4">
              {[
                { label: "Prénom & Nom", placeholder: "ex. Jean-Marc Koffi", type: "text" },
                { label: "Adresse e-mail", placeholder: "jean.marc@email.com", type: "email" },
                { label: "Téléphone", placeholder: "+225 05 XX XX XX XX", type: "tel" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-sm font-medium text-gray-700 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm"
                    style={{ border: "1.5px solid #E5E7EB", fontFamily: "'Inter', sans-serif" }}
                    onFocus={(e) => (e.target.style.borderColor = "#2EA82A")}
                    onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Formation souhaitée
                </label>
                <select
                  className="w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm text-gray-600"
                  style={{ border: "1.5px solid #E5E7EB", fontFamily: "'Inter', sans-serif" }}
                >
                  <option value="">Choisir une formation…</option>
                  <option>Enseignement Général (Collège / Lycée)</option>
                  <option>BTS</option>
                  <option>Bachelor (Licence)</option>
                  <option>Master</option>
                  <option>Bac Professionnel</option>
                </select>
              </div>

              <button
                className="w-full py-4 rounded-xl font-bold text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 mt-2"
                style={{ background: "linear-gradient(135deg, #2EA82A, #1E8A1A)", color: "white", fontFamily: "'Poppins', sans-serif" }}
              >
                Envoyer ma demande →
              </button>
            </div>

            <p className="text-xs text-center text-gray-400 mt-4" style={{ fontFamily: "'Inter', sans-serif" }}>
              Vos données sont protégées et ne seront jamais partagées.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
