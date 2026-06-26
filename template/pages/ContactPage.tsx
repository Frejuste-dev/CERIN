import { useEffect, useState } from "react";
import { MapPin, Phone, Mail, MessageCircle, Clock, ChevronDown, CheckCircle, Send } from "lucide-react";
import { PageHero } from "../components/shared/PageHero";

const G = "#7AC943";
const Y = "#F4D000";
const BG = "#F5F6F8";

function ContactCards() {
  const cards = [
    { icon: MapPin, title: "Adresse", lines: ["Yopougon, face Institut Pasteur", "Abidjan, Côte d'Ivoire"], action: "Voir sur Maps", color: G, link: "https://maps.app.goo.gl/dVt5Mc9AZZV6u8pW8" },
    { icon: Phone, title: "Téléphone", lines: ["+225 01 02 55 55 50", "+225 05 45 45 79 19"], action: "Appeler", color: Y, link: "tel:+2250102555550" },
    { icon: Mail, title: "E-mail", lines: ["contact@groupe-cerin.com", "admissions@groupe-cerin.com"], action: "Écrire", color: G, link: "mailto:contact@groupe-cerin.com" },
    { icon: Clock, title: "Horaires", lines: ["Lun – Ven : 8h00 – 17h00", "Sam : 9h00 – 13h00"], action: null, color: Y },
  ];
  return (
    <section className="py-20" style={{ background: BG }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="bg-white rounded-2xl p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: c.color === G ? "#F0FAF0" : "#FFF8CC" }}>
                  <Icon size={24} style={{ color: c.color }} />
                </div>
                <h3 className="font-bold text-gray-800 mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>{c.title}</h3>
                {c.lines.map((l) => (
                  <p key={l} className="text-sm text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>{l}</p>
                ))}
                {c.action && c.link && (
                  <a href={c.link} target={c.link.startsWith("http") ? "_blank" : undefined} rel={c.link.startsWith("http") ? "noopener noreferrer" : undefined} className="inline-block mt-4 px-4 py-2 rounded-xl text-xs font-bold transition-all hover:-translate-y-0.5" style={{ background: c.color, color: c.color === Y ? "#0B0B0B" : "white" }}>
                    {c.action}
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);

  const Field = ({ label, type = "text", placeholder, wide = false }: { label: string; type?: string; placeholder: string; wide?: boolean }) => (
    <div className={wide ? "sm:col-span-2" : ""}>
      <label className="block text-sm font-semibold text-gray-700 mb-1.5" style={{ fontFamily: "'Inter', sans-serif" }}>{label}</label>
      {type === "textarea" ? (
        <textarea
          rows={4}
          placeholder={placeholder}
          className="w-full px-4 py-3 rounded-xl border text-sm outline-none resize-none transition-all"
          style={{ border: "1.5px solid #E5E7EB", fontFamily: "'Inter', sans-serif" }}
          onFocus={(e) => (e.target.style.borderColor = G)}
          onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
          style={{ border: "1.5px solid #E5E7EB", fontFamily: "'Inter', sans-serif" }}
          onFocus={(e) => (e.target.style.borderColor = G)}
          onBlur={(e) => (e.target.style.borderColor = "#E5E7EB")}
        />
      )}
    </div>
  );

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left info */}
          <div className="lg:col-span-2">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-5" style={{ background: "#F0FAF0", color: G }}>Contactez-nous</span>
            <h2 className="text-gray-900 mb-4" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.6rem,3vw,2.3rem)", fontWeight: 800 }}>
              Nous sommes là pour vous
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
              Pour toute question sur nos formations, admissions ou vie scolaire, notre équipe répond dans les 24 heures.
            </p>
            {/* Quick buttons */}
            <div className="space-y-3">
              <a
                href="https://wa.me/2250102555550"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl font-semibold text-sm transition-all hover:shadow-md"
                style={{ background: "#25D366", color: "white" }}
              >
                <MessageCircle size={20} />
                Contacter via WhatsApp
              </a>
              <a
                href="tel:+2250102555550"
                className="flex items-center gap-3 p-4 rounded-2xl font-semibold text-sm border-2 transition-all hover:bg-gray-50"
                style={{ border: `2px solid ${G}`, color: G }}
              >
                <Phone size={20} />
                Appeler directement
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5" style={{ background: "#F0FAF0" }}>
                  <CheckCircle size={40} style={{ color: G }} />
                </div>
                <h3 className="text-gray-900 text-xl font-black mb-3" style={{ fontFamily: "'Poppins', sans-serif" }}>Message envoyé !</h3>
                <p className="text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>Nous vous répondrons dans les 24 heures.</p>
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-8" style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}>
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <Field label="Prénom" placeholder="ex. Sofia" />
                  <Field label="Nom" placeholder="ex. Mbeki" />
                  <Field label="E-mail" type="email" placeholder="sofia@email.com" />
                  <Field label="Téléphone" type="tel" placeholder="+225 05 XX XX XX XX" />
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">Sujet</label>
                    <select className="w-full px-4 py-3 rounded-xl border text-sm outline-none text-gray-600" style={{ border: "1.5px solid #E5E7EB", fontFamily: "'Inter', sans-serif" }}>
                      <option>Renseignement sur les formations</option>
                      <option>Processus d'admission</option>
                      <option>Frais de scolarité</option>
                      <option>Partenariat entreprise</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <Field label="Message" type="textarea" placeholder="Décrivez votre demande…" wide />
                </div>
                <button
                  onClick={() => setSent(true)}
                  className="w-full py-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:-translate-y-0.5"
                  style={{ background: G, color: "white", fontFamily: "'Poppins', sans-serif" }}
                >
                  <Send size={16} /> Envoyer le message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden" style={{ height: "380px", boxShadow: "0 8px 40px rgba(0,0,0,0.1)" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.674974373509!2d-4.145760723896587!3d5.313307236528741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1c165fce87e25%3A0x113ef4a505132835!2sGROUPE%20CERIN!5e0!3m2!1sfr!2sci!4v1718888888888"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Localisation Groupe CERIN"
          />
        </div>
      </div>
    </section>
  );
}

function ContactFAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const items = [
    { q: "Comment prendre rendez-vous avec un conseiller d'orientation ?", a: "Appelez-nous au +225 01 02 55 55 50 ou envoyez un e-mail à admissions@groupe-cerin.com pour fixer un rendez-vous." },
    { q: "Peut-on visiter le campus avant de s'inscrire ?", a: "Oui, des visites guidées sont organisées chaque mercredi et vendredi de 9h à 12h. Contactez-nous pour vous inscrire." },
    { q: "Y a-t-il un service de transport pour les étudiants ?", a: "Oui, nous proposons un service de navette depuis les principaux quartiers d'Abidjan. Renseignez-vous à la scolarité." },
  ];
  return (
    <section className="py-20" style={{ background: BG }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-gray-900 text-center mb-8" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "1.8rem", fontWeight: 800 }}>Questions pratiques</h2>
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden border border-gray-100">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors">
                <span className="font-semibold text-gray-800 text-sm pr-4" style={{ fontFamily: "'Poppins', sans-serif" }}>{item.q}</span>
                <ChevronDown size={16} className={`text-gray-400 shrink-0 transition-transform ${open === i ? "rotate-180" : ""}`} style={{ color: open === i ? G : undefined }} />
              </button>
              {open === i && (
                <div className="px-5 pb-5">
                  <p className="text-gray-500 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      <PageHero
        title="Contactez le Groupe CERIN"
        subtitle="Notre équipe est disponible pour répondre à toutes vos questions, du lundi au samedi."
        breadcrumbs={[{ label: "Contact" }]}
        accent={G}
      />
      <ContactCards />
      <ContactForm />
      <MapSection />
      <ContactFAQ />
    </>
  );
}
