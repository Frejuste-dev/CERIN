import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function AdmissionsFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const G = "#7AC943";

  const items = [
    { q: "Quels sont les prérequis pour s'inscrire au CERIN ?", a: "Les prérequis varient selon la formation. Pour le collège et le lycée, aucun prérequis académique n'est exigé. Pour le BTS, le baccalauréat ou équivalent est requis. Pour le Master, une licence ou équivalent est nécessaire." },
    { q: "Combien de temps prend le traitement du dossier ?", a: "Notre équipe traite les dossiers complets en 48 heures ouvrées. Vous recevrez une réponse par e-mail et/ou par téléphone." },
    { q: "Peut-on étaler le paiement des frais de scolarité ?", a: "Oui, nous proposons un échelonnement en 3 versements mensuels sans frais supplémentaires pour toutes les formations. Des facilités de paiement sont possibles selon votre situation." },
    { q: "Les diplômes du Groupe CERIN sont-ils reconnus par l'État ?", a: "Oui, tous nos diplômes (BAC, BTS, Licence, Master) sont reconnus par le Ministère de l'Enseignement Supérieur et de la Recherche Scientifique de Côte d'Ivoire (MESRS)." },
    { q: "Y a-t-il des bourses ou aides financières ?", a: "Oui, des bourses d'étude sont accordées sur critères sociaux et de mérite. Une bourse d'étude en Chine est également possible après le BAC ou le BT pour les étudiants méritants." },
    { q: "Comment se déroule l'entretien d'admission ?", a: "L'entretien est un échange constructif avec un membre de notre équipe pédagogique. Il permet de discuter de votre projet, de vos motivations et de vous orienter vers la formation la plus adaptée." },
    { q: "Puis-je visiter le campus avant de m'inscrire ?", a: "Absolument ! Nous organisons des journées portes ouvertes régulièrement. Vous pouvez également prendre rendez-vous pour une visite individuelle du campus de Yopougon Songon." },
    { q: "Quels sont les délais d'inscription ?", a: "Les inscriptions sont ouvertes toute l'année. Nous recommandons cependant de déposer votre dossier au moins 2 semaines avant la date de rentrée pour garantir votre place." },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: "#F0FAF0", color: G }}>
            FAQ
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Questions fréquentes sur les admissions
          </h2>
          <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
            Retrouvez les réponses aux questions les plus courantes. Vous ne trouvez pas la réponse ? Contactez-nous.
          </p>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-gray-100 hover:border-green-100 transition-colors" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left transition-colors"
                style={{ background: open === i ? "#F0FAF0" : "white" }}
                aria-expanded={open === i}
              >
                <span className="font-semibold text-gray-800 text-sm pr-4" style={{ fontFamily: "'Poppins', sans-serif" }}>{item.q}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${open === i ? "rotate-180" : ""}`} style={{ background: open === i ? G : "#F3F4F6" }}>
                  <ChevronDown size={16} style={{ color: open === i ? "white" : "#6B7280" }} />
                </div>
              </button>
              {open === i && (
                <div className="px-5 pb-5 pt-1">
                  <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center p-6 rounded-2xl" style={{ background: "#F5F6F8" }}>
          <p className="text-gray-700 text-sm font-medium mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Vous avez d'autres questions ?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-all hover:shadow-lg hover:-translate-y-0.5"
            style={{ background: G, fontFamily: "'Poppins', sans-serif" }}
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  );
}
