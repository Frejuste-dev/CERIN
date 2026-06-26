import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import logoImg from "../../imports/image.png";

const footerLinks = {
  formations: {
    title: "Nos Formations",
    links: [
      { label: "Collège", href: "#college" },
      { label: "Lycée Général", href: "#lycee" },
      { label: "Bac Professionnel", href: "#bac-pro" },
      { label: "BTS", href: "#bts" },
      { label: "Bachelor / Licence", href: "#licence" },
      { label: "Master", href: "#master" },
    ],
  },
  admission: {
    title: "Admissions",
    links: [
      { label: "Comment s'inscrire", href: "#inscription" },
      { label: "Calendrier d'admission", href: "#calendrier" },
      { label: "Frais de scolarité", href: "#frais" },
      { label: "Bourses & Aides", href: "#bourses" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  institution: {
    title: "L'Institution",
    links: [
      { label: "À propos du CERI", href: "#about" },
      { label: "Notre équipe pédagogique", href: "#equipe" },
      { label: "Vie scolaire", href: "#vie" },
      { label: "Partenaires", href: "#partenaires" },
      { label: "Actualités", href: "#news" },
      { label: "Contact", href: "#contact" },
    ],
  },
};

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function Footer() {
  return (
    <footer id="contact" style={{ background: "#0F2010" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid lg:grid-cols-5 gap-10 mb-14">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <img
              src={logoImg}
              alt="CERI Groupe"
              className="h-14 w-auto mb-4 brightness-0 invert"
              onError={(e) => {
                e.currentTarget.src = '/images/placeholder.svg';
                e.currentTarget.onerror = null;
              }}
            />
            <p className="text-green-300 text-sm leading-relaxed mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
              Le Groupe CERIN accompagne les élèves et étudiants depuis 1998 dans leurs projets académiques et professionnels, du collège au Master.
            </p>

            <div className="space-y-3 mb-6">
              {[
                { icon: MapPin, text: "123 Boulevard Mohammed V, Casablanca 20000" },
                { icon: Phone, text: "+212 5 22 XX XX XX" },
                { icon: Mail, text: "contact@ceri-groupe.ma" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-3 text-sm text-green-300">
                  <Icon size={15} className="shrink-0 mt-0.5" style={{ color: "#F5C800" }} />
                  <span style={{ fontFamily: "'Inter', sans-serif" }}>{text}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#2EA82A")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)")}
                >
                  <Icon size={16} className="text-green-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((col) => (
            <div key={col.title}>
              <h4 className="font-bold mb-5 text-sm" style={{ fontFamily: "'Poppins', sans-serif", color: "#F5C800" }}>
                {col.title}
              </h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-green-300 hover:text-white transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <p className="text-green-400 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
            © 2026 Groupe CERIN. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6 text-xs text-green-400">
            {["Mentions légales", "Politique de confidentialité", "Cookies"].map((item) => (
              <a key={item} href="#" className="hover:text-white transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
