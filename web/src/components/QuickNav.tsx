import { School, BookMarked, Layers, GraduationCap, Award } from "lucide-react";

const levels = [
  {
    icon: School,
    title: "Collège",
    subtitle: "6ème → 3ème",
    desc: "Enseignement fondamental avec suivi personnalisé",
    color: "#2EA82A",
    bg: "#F0FAF0",
    href: "#college",
  },
  {
    icon: BookMarked,
    title: "Lycée",
    subtitle: "Seconde → Terminale",
    desc: "Préparation au baccalauréat toutes filières",
    color: "#1E8A1A",
    bg: "#E8F5E8",
    href: "#lycee",
  },
  {
    icon: Layers,
    title: "BTS",
    subtitle: "Bac +2",
    desc: "Diplôme supérieur à vocation professionnelle",
    color: "#2EA82A",
    bg: "#F0FAF0",
    href: "#bts",
  },
  {
    icon: GraduationCap,
    title: "Licence",
    subtitle: "Bac +3",
    desc: "Parcours universitaire en sciences et lettres",
    color: "#1E8A1A",
    bg: "#E8F5E8",
    href: "#licence",
  },
  {
    icon: Award,
    title: "Master",
    subtitle: "Bac +5",
    desc: "Expertise pointue et recherche appliquée",
    color: "#F5C800",
    bg: "#FFFBE6",
    href: "#master",
  },
];

export function QuickNav() {
  return (
    <section className="py-20" style={{ background: "#F8FBF8" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-gray-900 mb-3" style={{ fontFamily: "'Poppins', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700 }}>
            Accès rapide par niveau
          </h2>
          <p className="text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
            Trouvez directement votre programme selon votre niveau actuel
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {levels.map((lvl) => {
            const Icon = lvl.icon;
            return (
              <a
                key={lvl.title}
                href={lvl.href}
                className="group flex flex-col items-center text-center p-6 rounded-2xl border border-transparent transition-all duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer"
                style={{ background: "white", borderColor: "transparent" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = lvl.color;
                  (e.currentTarget as HTMLElement).style.background = lvl.bg;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "transparent";
                  (e.currentTarget as HTMLElement).style.background = "white";
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110"
                  style={{ background: lvl.bg }}
                >
                  <Icon size={26} style={{ color: lvl.color }} />
                </div>
                <p className="font-bold text-gray-800 mb-1" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {lvl.title}
                </p>
                <p className="text-xs font-semibold mb-2" style={{ color: lvl.color }}>
                  {lvl.subtitle}
                </p>
                <p className="text-xs text-gray-500 leading-snug" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {lvl.desc}
                </p>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
