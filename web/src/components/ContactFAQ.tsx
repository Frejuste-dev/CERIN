import { useState } from "react";
import { ChevronDown, Phone, Mail } from "lucide-react";

export function ContactFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const G = "#7AC943";
  const BG = "#F5F6F8";

  const items = [
    { q: "Quels sont les horaires d'ouverture du secrétariat ?", a: "Le secrétariat est ouvert du lundi au vendredi de 8h00 à 17h00 et le samedi de 9h00 à 13h00. Vous pouvez également nous contacter par WhatsApp pour une réponse rapide." },
    { q: "Comment prendre rendez-vous pour une visite du campus ?", a: "Appelez le secrétariat au (+225) 01 025 555 50 ou envoyez un e-mail à secretariat@ceringroup.com pour convenir d'un créneau de visite guidée." },
    { q: "Quels sont les délais de réponse à une demande d'information ?", a: "Nous nous engageons à répondre à toutes les demandes sous 24 heures ouvrées. Pour les demandes urgentes, appelez directement le secrétariat." },
    { q: "Puis-je soumettre une candidature par email ?", a: "Oui, vous pouvez envoyer votre dossier par email à secretariat@ceringroup.com. Privilégiez toutefois le formulaire en ligne pour un traitement plus rapide." },
    { q: "Comment obtenir un justificatif de scolarité ou un relevé de notes ?", a: "Adressez votre demande au secrétariat par email ou présentez-vous au bureau de la scolarité à Yopougon Songon avec votre carte d'étudiant." },
    { q: "Proposez-vous des services d'imprimerie ?", a: "Oui, notre service imprimerie est disponible pour les étudiants et le grand public. Contactez-nous pour connaître nos tarifs et délais." },
  ];

  return (
    <section className="py-20" style={{ background: BG }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4" style={{ background: "white", color: G }}>
            FAQ
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Questions fréquentes
          </h2>
          <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
            Retrouvez les réponses aux questions les plus courantes. Vous ne trouvez pas la réponse ? Contactez-nous directement.
          </p>
        </div>

        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-green-100 transition-colors" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}>
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

        <div className="mt-10 text-center p-6 rounded-2xl" style={{ background: "white", border: "1px solid #E5E7EB" }}>
          <p className="text-gray-700 text-sm font-medium mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Une question sans réponse ?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="tel:+2250102555550"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-white transition-all hover:shadow-lg"
              style={{ background: G, fontFamily: "'Poppins', sans-serif" }}
            >
              <Phone size={15} />
              (+225) 01 025 555 50
            </a>
            <a
              href="mailto:secretariat@ceringroup.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm border-2 transition-all hover:bg-gray-50"
              style={{ border: "2px solid #E5E7EB", color: "#374151", fontFamily: "'Poppins', sans-serif" }}
            >
              <Mail size={15} style={{ color: G }} />
              secretariat@ceringroup.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
