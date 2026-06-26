import { Link } from "react-router";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react";
import logoImg from "../../../imports/image.png";

const G = "#7AC943";
const Y = "#F4D000";

const cols = [
  {
    title: "Formations",
    links: [
      { label: "Enseignement Général", to: "/formations/enseignement-general" },
      { label: "Technique & Professionnel", to: "/formations/enseignement-technique" },
      { label: "Enseignement Supérieur", to: "/formations/enseignement-superieur" },
      { label: "BTS", to: "/formations/enseignement-superieur" },
      { label: "Licence / Bachelor", to: "/formations/enseignement-superieur" },
      { label: "Master", to: "/formations/enseignement-superieur" },
    ],
  },
  {
    title: "Admissions",
    links: [
      { label: "Comment s'inscrire", to: "/admissions" },
      { label: "Calendrier", to: "/admissions" },
      { label: "Frais de scolarité", to: "/admissions" },
      { label: "Bourses & Aides", to: "/admissions" },
      { label: "FAQ", to: "/admissions" },
    ],
  },
  {
    title: "Institution",
    links: [
      { label: "À propos du CERIN", to: "/a-propos" },
      { label: "Notre équipe", to: "/a-propos" },
      { label: "Vie CERIN", to: "/vie-ceri" },
      { label: "Partenaires", to: "/a-propos" },
      { label: "Actualités", to: "/actualites" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer style={{ background: "#0B0B0B" }}>
      {/* Newsletter bar */}
      <div style={{ background: G }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-white text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Restez informé des actualités CERIN
            </p>
            <p className="text-white/80 text-sm">Inscrivez-vous à notre newsletter</p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Votre e-mail"
              className="flex-1 sm:w-64 px-4 py-2.5 rounded-xl text-sm outline-none"
              style={{ fontFamily: "'Inter', sans-serif" }}
            />
            <button
              className="px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-all hover:shadow-lg"
              style={{ background: Y, color: "#0B0B0B", fontFamily: "'Poppins', sans-serif" }}
            >
              S'inscrire <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img  src={logoImg} alt="CERIN Groupe" className="h-14 w-auto mb-5 brightness-0 invert"  onError={(e) => {
    e.currentTarget.src = '/images/placeholder.jpg';
    e.currentTarget.onerror = null;
  }} />
            <p className="text-gray-400 text-sm leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              Le Groupe CERIN accompagne les élèves et étudiants dans la construction de leur avenir académique et professionnel, du collège au Master.
            </p>
            <div className="space-y-3 mb-6">
              {[
                { Icon: MapPin, text: "Yopougon, face Institut Pasteur, Abidjan, Côte d'Ivoire" },
                { Icon: Phone, text: "+225 01 02 55 55 50" },
                { Icon: Mail, text: "contact@groupe-cerin.com" },
              ].map(({ Icon, text }) => (
                <div key={text} className="flex items-start gap-3">
                  <Icon size={15} style={{ color: G, flexShrink: 0, marginTop: 2 }} />
                  <span className="text-gray-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{text}</span>
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110 group"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = G)}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)")}
                >
                  <Icon size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="font-bold text-sm mb-5" style={{ fontFamily: "'Poppins', sans-serif", color: Y }}>
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <p className="text-gray-600 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
            © {new Date().getFullYear()} Groupe CERIN. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {["Mentions légales", "Confidentialité", "Cookies"].map((item) => (
              <a key={item} href="#" className="text-xs text-gray-600 hover:text-gray-400 transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
